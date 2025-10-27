# syntax=docker/dockerfile:1.7

# ---- Base (Bun) ----
FROM oven/bun:1.1.34-alpine AS base
WORKDIR /app

# ---- Dependencies (cached) ----
FROM base AS deps
# Copiamos apenas manifestos para maximizar cache
COPY package.json bun.lock ./
RUN bun install --frozen-lockfile

# ---- Build (Next.js) ----
FROM base AS build
ENV NODE_ENV=production
# Copiar dependências resolvidas do estágio deps
COPY --from=deps /app/node_modules ./node_modules
# Copiar restante do código
COPY . .
# Build de produção
RUN bun run build

# ---- Runtime (mínimo) ----
FROM oven/bun:1.1.34-alpine AS runtime
WORKDIR /app
ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=0.0.0.0
ENV NEXT_TELEMETRY_DISABLED=1

# Artefatos necessários para execução
COPY --from=build /app/.next ./.next
COPY --from=build /app/public ./public
COPY --from=build /app/package.json ./package.json
COPY --from=build /app/bun.lock ./bun.lock

# Instalar somente dependências de runtime para imagem menor
RUN bun install --production --frozen-lockfile

# Expor a porta padrão do Next
EXPOSE 3000

# Iniciar aplicação com Bun
CMD ["bun", "run", "start", "-p", "3000", "-H", "0.0.0.0"]
