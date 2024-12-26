import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

function ArrowIcon(props) {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  )
}

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-white [text-wrap:balance] sm:text-4xl">
              Sign up for our newsletter
            </h2>
            <h3 className="font-display text-base font-semibold text-white">
              Subscribe to get the latest design news, articles, resources and inspiration.
            </h3>
          </div>
          <form className="max-w-sm">
            <div className="relative mt-6">
              <input
                type="email"
                placeholder="Email address"
                autoComplete="email"
                aria-label="Email address"
                className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
              />
              <div className="absolute inset-y-1 right-1 flex justify-end">
                <button
                  type="submit"
                  aria-label="Submit"
                  className="flex aspect-square h-full items-center justify-center rounded-xl bg-neutral-950 text-white transition hover:bg-neutral-800"
                >
                  <ArrowIcon className="w-4" />
                </button>
              </div>
            </div>
          </form>
        </div>
      </FadeIn>
    </Container>
  )
}
