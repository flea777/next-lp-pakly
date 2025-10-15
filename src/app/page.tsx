import { Features } from '@/components/landing-page/features'
import { Header } from '@/components/landing-page/header'
import { Hero } from '@/components/landing-page/hero'

export default function Home() {
  return (
    <div className="min-h-screen w-full flex flex-col">
      <div className="w-full flex justify-center">
        <div className="w-full max-w-7xl">
          <Header />
          <Hero />
          <Features />
        </div>
      </div>
    </div>
  )
}
