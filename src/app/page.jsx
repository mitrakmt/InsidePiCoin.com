import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import imageLaptop from '@/images/laptop.jpg'
import { loadArticles } from '@/lib/mdx'

function Clients() {
  return (
    <div className="mt-24 mx-6 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center relative font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
            The First Digital Currency You Can Mine on Your Phone
          </h2>
        </FadeIn>
      </Container>
    </div>
  )
}

function Blogs({ blogs }) {
  return (
    <>
      <SectionIntro
        title="Explore Our Content"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          At Inside Pi Network, our mission is to keep you informed and inspired. Explore:
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {blogs.map((blog) => (
            <FadeIn key={blog.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <Link href={blog.href}>
                  <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                    <time
                      dateTime={blog.date.split('-')[0]}
                      className="font-semibold"
                    >
                      {blog.date.split('-')[0]}
                    </time>
                    <span className="text-neutral-300" aria-hidden="true">
                      /
                    </span>
                    <span>Article</span>
                  </p>
                  <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                    {blog.title}
                  </p>
                  <p className="mt-4 text-base text-neutral-600">
                    {blog.description}
                  </p>
                  </Link>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Advantages() {
  return (
    <>
      <SectionIntro
        eyebrow="Advantages"
        title="Why Pi Network is Poised for Success"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
        The Pi Network stands out in the crowded world of cryptocurrencies due to its innovative approach and commitment to inclusivity. Here’s why Pi Network has the potential to succeed where others fall short:
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end">
          <div className="flex justify-center lg:w-1/2 lg:justify-end lg:pr-12">
            <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
              <StylizedImage
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 lg:w-1/2 lg:min-w-[33rem] lg:pl-4">
            <ListItem title="Accessibility for Everyone">
              Unlike many cryptocurrencies that require expensive hardware and technical expertise, Pi Network is designed for the masses. With just a smartphone, anyone can start mining Pi, making it one of the most inclusive digital currencies available.
            </ListItem>
            <ListItem title="Eco-Friendly Technology">
              Pi Network employs a unique consensus algorithm that significantly reduces energy consumption. This eco-friendly approach makes it sustainable and positions it as a responsible choice in an era of growing environmental awareness.
            </ListItem>
            <ListItem title="Strong Community Foundation">
              Pi Network’s success is built on its engaged and expanding community. By focusing on collaboration and user participation, Pi ensures that its growth is driven by its members, creating a truly decentralized network.
            </ListItem>
            <ListItem title="Real-World Utility">
              Pi Network is actively working to create an ecosystem where Pi can be used for real-world transactions. This focus on utility ensures that Pi is not just a speculative asset but a practical digital currency.
            </ListItem>
            <ListItem title="Visionary Leadership">
              The Pi Network team consists of seasoned professionals with a clear vision for the future of cryptocurrency. Their commitment to innovation and user-centric design ensures that Pi Network remains ahead of the curve.            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  title: "Inside Pi Network - Your Source for News, Insights, and Updates",
  description:
    'Stay informed with Inside Pi Network, your go-to platform for the latest news, updates, and insights about the Pi Network ecosystem. Explore its innovations, use cases, and community-driven developments.',
}

export default async function Home() {
  let blogs = (await loadArticles()).slice(0, 9)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Welcome to Inside Pi Network
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            Discover the transformative potential of the Pi Network, a revolutionary cryptocurrency platform designed for accessibility, sustainability, and community. Dive into the latest updates, insightful articles, and in-depth analysis right here at Inside Pi Network.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <Blogs blogs={blogs} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Phobia' }}
      >
        <span className="mb-6">Be part of a digital economy that’s inclusive, secure, and innovative. Whether you’re a seasoned crypto enthusiast or a newcomer, the Pi Network offers endless opportunities to connect and grow.</span>

       <span> Get <span className="text-indigo-700 font-bold">FREE Pi</span> and start your journey today by downloading the app at <a className="text-indigo-700 hover:text-indigo-500" href="https://www.minepi.com/mitrakmt" target="_blank">minepi.com/mitrakmt</a> and entering the referral code mitrakmt during registration.</span>
      </Testimonial>

      <Advantages />

      <ContactSection />
    </>
  )
}
