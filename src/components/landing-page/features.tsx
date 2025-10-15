"use client";

import {
	BarChart2,
	BellRing,
	ClipboardCheck,
	FileText,
	Mails,
	ShieldCheck,
} from "lucide-react";
import { BentoCard, BentoGrid } from "../commons/ui/bento-grid";

interface Feature {
	name: string;
	description: string;
	href: string;
	cta: string;
	Icon: React.ElementType;
	size?: "small" | "medium" | "large";
}

export function Features() {
	const cta = "Saiba mais";

	const features: Feature[] = [
		{
			name: "Cadastro facilitado de encomendas",
			description:
				"Cadastre e notifique moradores em segundos — simples, rápido e eficiente.",
			href: "#",
			cta: cta,
			Icon: ClipboardCheck,
			size: "large",
		},
		{
			name: "Segurança e confiabilidade",
			description:
				"Segurança em primeiro lugar: seus dados e entregas sempre protegidos e monitorados.",
			href: "#",
			cta: cta,
			Icon: ShieldCheck,
			size: "medium",
		},
		{
			name: "Relatórios e métricas",
			description:
				"Acompanhe o movimento da portaria com relatórios inteligentes e métricas em tempo real.",
			href: "#",
			cta: cta,
			Icon: BarChart2,
			size: "medium",
		},
		{
			name: "Notificações instantâneas",
			description:
				"Receba e envie alertas instantâneos via WhatsApp, economizando tempo e eliminando burocracias.",
			href: "#",
			cta: cta,
			Icon: BellRing,
			size: "large",
		},
		{
			name: "Assinaturas inteligentes",
			description:
				"Diga adeus aos papéis: com um simples código, sua entrega é confirmada com total segurança.",
			href: "#",
			cta: cta,
			Icon: FileText,
			size: "large",
		},
		{
			name: "Suporte personalizado",
			description:
				"Conte com atendimento personalizado para sanar qualquer dúvida sobre o uso do sistema.",
			href: "#",
			cta: cta,
			Icon: Mails,
			size: "medium",
		},
	];

	const getCardSizeClass = (size?: string) => {
		switch (size) {
			case "large":
				return "col-span-2 row-span-1";
			case "medium":
				return "col-span-1 row-span-1";
			case "small":
				return "col-span-1 row-span-2";
			default:
				return "col-span-1 row-span-1";
		}
	};

	return (
		<section className="flex flex-col gap-8 px-8 pb-8 pt-14 items-center">
			<h3 className="text-foreground font-semibold text-4xl">
				Funcionalidades que{" "}
				<strong className="text-primary font-semibold">facilitam</strong> seu
				dia a dia
			</h3>
			<BentoGrid className="grid grid-cols-3 gap-6 auto-rows-min">
				{features.map((item, index) => (
					<BentoCard
						key={index}
						name={item.name}
						description={item.description}
						href={item.href}
						cta={item.cta}
						Icon={item.Icon}
						className={`rounded-2xl shadow-md hover:shadow-lg transition-all ${getCardSizeClass(item.size)}`}
					/>
				))}
			</BentoGrid>
		</section>
	);
}
