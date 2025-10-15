import {
	BarChart2,
	BellRing,
	CheckCircle,
	ClipboardCheck,
	Key,
	Package,
} from "lucide-react";
import { PresentationCard } from "../commons/presentation-section/presentation-card";

export function Presentation() {
	const steps = [
		{
			icon: Package,
			title: "Cadastro",
			description: "O porteiro registra a encomenda no sistema.",
		},
		{
			icon: BellRing,
			title: "Notificação",
			description:
				"O morador recebe alerta com os dados e o código de retirada.",
		},
		{
			icon: Key,
			title: "Código de Resgate",
			description:
				"Basta informar o código na portaria para liberar a entrega.",
		},
		{
			icon: ClipboardCheck,
			title: "Assinatura Facilitada",
			description: "O sistema registra a confirmação automaticamente.",
		},
		{
			icon: CheckCircle,
			title: "Baixa Automática",
			description: "O status muda para 'Entregue' sem ações manuais.",
		},
		{
			icon: BarChart2,
			title: "Histórico e Relatórios",
			description:
				"O porteiro visualiza pendências e relatórios em tempo real.",
		},
	];

	return (
		<section className="flex flex-col gap-4 px-8 pb-8 pt-14 items-center">
			<h3 className="text-foreground font-semibold text-4xl text-center mb-10">
				Como <strong className="text-primary font-semibold">funciona</strong> a
				nossa solução?
			</h3>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
				{steps.map((step, index) => (
					<PresentationCard
						key={index}
						icon={step.icon}
						title={step.title}
						description={step.description}
						index={index}
					/>
				))}
			</div>
		</section>
	);
}
