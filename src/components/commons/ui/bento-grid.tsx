import { ArrowRightIcon } from "@radix-ui/react-icons";
import { ComponentPropsWithoutRef, ReactNode } from "react";
import { Button } from "@/components/commons/ui/button";
import { lora } from "@/lib/fonts";
import { cn } from "@/lib/utils";

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
	children: ReactNode;
	className?: string;
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
	name: string;
	className: string;
	Icon: React.ElementType;
	description: string;
	href: string;
	cta: string;
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
	return (
		<div
			className={cn(
				"grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
				className,
			)}
			{...props}
		>
			{children}
		</div>
	);
};

const BentoCard = ({
	name,
	className,
	Icon,
	description,
	href,
	cta,
	...props
}: BentoCardProps) => (
	<div
		key={name}
		className={cn(
			"group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl",
			// light styles
			"bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_1px_2px_rgba(0,0,0,.04),0_6px_12px_rgba(0,0,0,.04)]",
			// dark styles
			"dark:bg-card transform-gpu dark:[box-shadow:0_-12px_48px_-24px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.08)]",
			className,
		)}
		{...props}
	>
		<div className="p-4">
			<div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 transition-all duration-300 lg:group-hover:-translate-y-10">
				<Icon className="h-12 w-12 origin-left transform-gpu text-primary transition-all duration-300 ease-in-out group-hover:scale-75" />
				<h3 className={`text-xl text-foreground font-semibold`}>{name}</h3>
				<p className="max-w-lg text-foreground">{description}</p>
			</div>

			<div
				className={cn(
					"pointer-events-none flex w-full translate-y-0 transform-gpu flex-row items-center transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:hidden",
				)}
			>
				<Button
					variant="link"
					asChild
					size="sm"
					className="pointer-events-auto p-0"
				>
					<a href={href}>
						{cta}
						<ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
					</a>
				</Button>
			</div>
		</div>

		<div
			className={cn(
				"pointer-events-none absolute bottom-0 hidden w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 lg:flex",
			)}
		>
			<Button
				variant="link"
				asChild
				size="sm"
				className="pointer-events-auto p-0"
			>
				<a href={href}>
					{cta}
					<ArrowRightIcon className="ms-2 h-4 w-4 rtl:rotate-180" />
				</a>
			</Button>
		</div>

		<div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
	</div>
);

export { BentoCard, BentoGrid };
