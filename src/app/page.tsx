import { Features } from '@/components/landing-page/features'
import { Header } from '@/components/landing-page/header'
import { Hero } from '@/components/landing-page/hero'
import { Presentation } from '@/components/landing-page/presentation'

export default function Home() {
	return (
		<div className='min-h-screen w-full bg-gradient-to-br from-[var(--background)] via-[var(--secondary)]/5 to-[var(--accent)]/5 flex flex-col dark:bg-[var(--card)]'>
			<div className='fixed inset-0 opacity-5 pointer-events-none' />
			<div className='w-full flex justify-center'>
				<div className='w-full max-w-7xl backdrop-blur-sm bg-[var(--card)]/60 shadow-lg rounded-2xl dark:bg-[var(--background)]/60'>
					<Header />
					<Hero />
					<Presentation />
					<Features />
				</div>
			</div>
		</div>
	)
}
