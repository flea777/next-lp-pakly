'use client'

import { Moon, Sun } from 'lucide-react'
import { useEffect, useState } from 'react'
import { Button } from '@/components/commons/ui/button'

export function ThemeToggle() {
	const [theme, setTheme] = useState<'light' | 'dark'>('light')
	const [mounted, setMounted] = useState(false)

	useEffect(() => {
		setMounted(true)
		try {
			const stored = localStorage.getItem('theme')
			const prefersDark =
				window.matchMedia &&
				window.matchMedia('(prefers-color-scheme: dark)').matches
			const initialTheme =
				stored === 'dark' || stored === 'light'
					? stored
					: prefersDark
						? 'dark'
						: 'light'
			setTheme(initialTheme)
			document.documentElement.classList.toggle('dark', initialTheme === 'dark')
		} catch {
			document.documentElement.classList.remove('dark')
		}
	}, [])

	function toggleTheme() {
		const next = theme === 'dark' ? 'light' : 'dark'
		setTheme(next)
		document.documentElement.classList.toggle('dark', next === 'dark')
		try {
			localStorage.setItem('theme', next)
		} catch {
			console.error('Error saving theme to localStorage')
		}
	}

	const isDark = mounted ? theme === 'dark' : false

	return (
		<Button
			type='button'
			onClick={toggleTheme}
			variant='outline'
			size='icon'
			aria-label={isDark ? 'Ativar modo claro' : 'Ativar modo escuro'}
			className='fixed bottom-4 right-4 z-50 rounded-full shadow-md bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60'
		>
			{isDark ? <Sun /> : <Moon />}
		</Button>
	)
}
