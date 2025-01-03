import Image from 'next/image'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridPattern } from '@/components/GridPattern'
import logo_small from '@/images/logo_small.png'

export function Testimonial({ children, client, className }) {
  return (
    <div
      className={clsx(
        'relative isolate bg-neutral-50 py-16 sm:py-28 md:py-32',
        className,
      )}
    >
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-100 stroke-neutral-950/5 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />
      <Container>
        <FadeIn>
          <figure className="mx-auto max-w-4xl">
            <span className="relative font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              <p className="sm:before:absolute sm:before:right-full">
                {children}
              </p>
            </span>
            <figcaption className="mt-10">
              <Image src={logo_small} alt={client.name} height="100" width="100" />
            </figcaption>
          </figure>
        </FadeIn>
      </Container>
    </div>
  )
}
