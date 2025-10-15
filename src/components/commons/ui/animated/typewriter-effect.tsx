'use client'

import Typewritter from 'typewriter-effect'

interface TypewritterEffectProps {
  texts: string[]
}

export function TypewritterEffect(props: TypewritterEffectProps) {
  const { texts } = props

  return (
    <span className="inline-block">
      <Typewritter
        options={{
          strings: texts,
          autoStart: true,
          loop: true,
        }}
      />
    </span>
  )
}
