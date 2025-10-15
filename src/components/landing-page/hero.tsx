import { lora } from "@/lib/fonts";
import { Button } from "../commons/ui/button";
import { ArrowRight } from 'lucide-react'
import { TypewritterEffect } from "../commons/ui/animated/typewriter-effect";

export function Hero() {

    const texts = ['notificações inteligentes.', 'controle de encomendas.', 'assinaturas digitais.', 'relatórios em tempo real.']

    return (
        <section className="flex flex-col gap-8 justify-center items-center min-h-[380px] py-20">
            <div className="flex flex-col gap-8 px-12 items-center">
                <h2 className={`text-7xl font-bold text-center text-primary max-w-3/4 ${lora.className}`}>Simplifique a <strong className="text-foreground italic">gestão de encomendas</strong> do seu condomínio</h2>
                <div className="text-center text-lg">
                    A tecnologia que transforma a portaria do seu condomínio,
                    <br />
                    integrando <TypewritterEffect texts={texts}/>
                </div>
            </div>
          <Button variant={"default"} className="bg-sidebar-primary gap-2 hover:text-accent-foreground">Garanta seu acesso <ArrowRight/></Button>
        </section>
    )
}