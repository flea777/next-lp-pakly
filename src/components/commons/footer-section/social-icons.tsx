import { Instagram, Mail, MessageCircle } from 'lucide-react'

export function SocialIcons() {
	return (
		<div className='flex items-center justify-center gap-2'>
			<button className='border-2 border-sidebar-primary-foreground rounded-full p-2 bg-sidebar-primary-foreground/20 cursor-pointer'>
				<Instagram className='text-sidebar-primary-foreground' size={20} />
			</button>
			<button className='border-2 border-sidebar-primary-foreground rounded-full p-2 bg-sidebar-primary-foreground/20 cursor-pointer'>
				<Mail className='text-sidebar-primary-foreground' size={20} />
			</button>
			<button className='border-2 border-sidebar-primary-foreground rounded-full p-2 bg-sidebar-primary-foreground/20 cursor-pointer'>
				<MessageCircle className='text-sidebar-primary-foreground' size={20} />
			</button>
		</div>
	)
}
