import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'

export function Testimonial({ children, client, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-black rounded-4xl overflow-hidden py-16 sm:py-28',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-800 stroke-neutral-800 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl px-4 lg:px-0">
            <blockquote className="relative font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              <p className="before:content-['“'] after:content-['”'] sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </blockquote>
            <figcaption className="mt-10 text-neutral-300">
              Taylor, Android and Me (Acquired)
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
