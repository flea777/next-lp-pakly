import { dynaPuff } from '@/lib/fonts'
import { Button } from '../commons/ui/button'
import { ArrowRight } from 'lucide-react'

interface NavBarProps {
	title: string
	href: string
	class?: string
}

export function Header() {
	const navBarData: NavBarProps[] = [
		{ title: 'Início', href: '#' },
		{ title: 'Serviços', href: '#' },
		{ title: 'Contato', href: '#' },
	]

	return (
		<header className='flex py-6 px-16'>
			<div className='flex justify-between rounded-2xl w-7xl p-4 bg-sidebar-primary'>
				<h2
					className={`text-2xl ${dynaPuff.className} text-primary-foreground`}
				>
					pakly!
				</h2>
				<div className='flex gap-4'>
					{navBarData.map((item, idx) => (
						<Button
							key={idx}
							variant={'ghost'}
							className='text-lg text-primary-foreground'
						>
							{item.title}
						</Button>
					))}
				</div>
				<div>
					<Button
						variant={'default'}
						className='text-primary bg-primary-foreground hover:bg-accent/50 hover:text-white'
					>
						Garanta seu acesso <ArrowRight />
					</Button>
				</div>
			</div>
		</header>
	)
}
