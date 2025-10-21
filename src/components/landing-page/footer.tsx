import { dynaPuff } from '@/lib/fonts'
import { SocialIcons } from '../commons/footer-section/social-icons'

export function Footer() {
	return (
		<footer className='flex justify-between bg-sidebar-primary p-8'>
			<h2 className={`text-4xl ${dynaPuff.className} text-primary-foreground`}>
				pakly!
			</h2>
			<SocialIcons />
		</footer>
	)
}
