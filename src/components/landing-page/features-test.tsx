import { ScrollStack, ScrollStackItem } from "../commons/ui/animated/scroll-stack";

export function FeaturesTest(){
  const items = ['Item 1', 'Item 2', 'Item 3'];

  return(
    <section className="flex flex-col justify-center items-center">
      <h3 className='text-foreground font-semibold text-4xl'>
				Funcionalidades que{' '}
				<strong className='text-primary font-semibold'>facilitam</strong> seu
				dia a dia
			</h3>
      <ScrollStack>
        {
          items.map((item, index) => (
            <ScrollStackItem key={index}>
              { item }
            </ScrollStackItem>
          ))
        }
      </ScrollStack> 
    </section>
  )
}
