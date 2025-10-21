import { Form } from '../commons/form-section/form'

export function FormSection() {
	return (
		<div className='flex flex-col md:flex-row justify-between items-center gap-8 py-16 px-8'>
			<h3 className='text-foreground font-semibold text-4xl leading-snug text-center md:text-left md:w-1/2'>
				Revolucione a gestão do seu condomínio.{' '}
				<strong className='text-primary font-semibold'>
					Cadastre-se para acesso antecipado.
				</strong>
			</h3>
			<div className='md:w-1/2'>
				<Form />
			</div>
		</div>
	)
}
