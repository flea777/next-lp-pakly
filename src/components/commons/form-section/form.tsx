import { ArrowRight } from 'lucide-react'
import { Button } from '../ui/button'
import { Checkbox } from '../ui/checkbox'
import { InputGroup, InputGroupInput } from '../ui/input-group'
import { Label } from '../ui/label'
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from '../ui/select'

export function Form() {
	const selectQuantityProps = [
		{
			value: '1-15',
			content: '1-15',
		},
		{
			value: '16-30',
			content: '16-30',
		},
		{
			value: '30-50',
			content: '30-50',
		},
		{
			value: '51+',
			content: '51+',
		},
	]

	const processProps = ['Cadastro', 'Notificação', 'Assinatura']

	return (
		<form action='' className='flex flex-col gap-3'>
			<InputGroup>
				<InputGroupInput placeholder='Nome' />
			</InputGroup>
			<InputGroup>
				<InputGroupInput placeholder='Email' />
			</InputGroup>
			<InputGroup>
				<InputGroupInput placeholder='Telefone' />
			</InputGroup>
			<Select>
				<SelectTrigger className='w-full'>
					<SelectValue placeholder='Quantidade de unidades' />
				</SelectTrigger>
				<SelectContent>
					{selectQuantityProps.map((select) => (
						<SelectItem value={select.value}>{select.content}</SelectItem>
					))}
				</SelectContent>
			</Select>
			<p className='text-sm font-bold'>
				Principais desafios atuais:
			</p>
			{processProps.map((process) => (
				<div className='flex items-center space-x-2' key={process}>
					<Checkbox id='terms' />
					<Label htmlFor='terms'>{process}</Label>
				</div>
			))}
			<Button>
				Garanta seu acesso prioritário <ArrowRight />
			</Button>
		</form>
	)
}
