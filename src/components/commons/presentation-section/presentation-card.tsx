interface PresentationCardProps {
	icon: React.ElementType
	title: string
	description: string
	index: number
}

export function PresentationCard(props: PresentationCardProps) {
	const { icon, title, description, index } = props
	const Icon = icon

	return (
		<div className='flex flex-col items-center text-center p-4 rounded-2xl bg-card [box-shadow:0_0_0_1px_rgba(0,0,0,.02),0_1px_2px_rgba(0,0,0,.04),0_6px_12px_rgba(0,0,0,.04)] dark:bg-card dark:[box-shadow:0_-12px_48px_-24px_#ffffff1f_inset] dark:[border:1px_solid_rgba(255,255,255,.08)] transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5'>
			<Icon className='h-12 w-12 text-primary mb-4' />
			<h4 className='text-xl font-semibold mb-2'>
				{index + 1}. {title}
			</h4>
			<p className='text-foreground text-sm'>{description}</p>
		</div>
	)
}
