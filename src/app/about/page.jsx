import Image from 'next/image'
import Head from 'next/head';
import { Border } from '@/components/Border'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { SectionIntro } from '@/components/SectionIntro'
import { StatList, StatListItem } from '@/components/StatList'
import imageMitrakos from '@/images/team/mitrakos.jpg'
import { loadArticles } from '@/lib/mdx'

function Culture() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <SectionIntro
        eyebrow="Our culture"
        title="Balance your passion with your passion for life."
        invert
      >
        <p>
          We are a group of like-minded people who share the same core values.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <GridList>
          <GridListItem title="Loyalty" invert>
            Our team has been with us since the beginning because none of them
            are allowed to have LinkedIn profiles.
          </GridListItem>
          <GridListItem title="Trust" invert>
            We believe in empowering our team to work in ways that help them and others grow, understanding that personal development and productivity are measured by value created and shared.
          </GridListItem>
          <GridListItem title="Compassion" invert>
            You never know what someone is going through at home and we make
            sure to never find out.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

const team = [
  {
    title: 'Leadership',
    people: [
      {
        name: 'Michael mitrakos',
        role: 'Co-Founder',
        image: { src: imageMitrakos },
      }
    ],
  },
]

function Team() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-24">
        {team.map((group) => (
          <FadeInStagger key={group.title}>
            <Border as={FadeIn} />
            <div className="grid grid-cols-1 gap-6 pt-12 sm:pt-16 lg:grid-cols-4 xl:gap-8">
              <FadeIn>
                <h2 className="font-display text-2xl font-semibold text-neutral-950">
                  {group.title}
                </h2>
              </FadeIn>
              <div className="lg:col-span-3">
                <ul
                  role="list"
                  className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8"
                >
                  {group.people.map((person) => (
                    <li key={person.name}>
                      <FadeIn>
                        <div className="group relative overflow-hidden rounded-3xl bg-neutral-100">
                          <Image
                            alt=""
                            {...person.image}
                            className="h-96 w-full object-cover grayscale transition duration-500 motion-safe:group-hover:scale-105"
                          />
                          <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black to-black/0 to-40% p-6">
                            <p className="font-display text-base/6 font-semibold tracking-wide text-white">
                              {person.name}
                            </p>
                            <p className="mt-2 text-sm text-white">
                              {person.role}
                            </p>
                          </div>
                        </div>
                      </FadeIn>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </FadeInStagger>
        ))}
      </div>
    </Container>
  )
}

export const metadata = {
  title: 'About Us',
  description:
    'At Inside Pi Network, we believe our strength lies in our collaborative approach, which places the Pi community at the heart of everything we do. ',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.insidepicoin.com/about" />
      </Head>

      <PageIntro eyebrow="About us" title="Our strength is collaboration">
        <p>
          At Inside Pi Network, we believe our strength lies in our collaborative approach, which places the Pi community at the heart of everything we do. 
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            Founded by enthusiasts passionate about the Pi cryptocurrency, Inside Pi Network was created with a mission to educate, inform, and grow alongside the Pi community. We aim to provide the most accurate, engaging, and valuable content to help everyone understand and navigate the world of Pi crypto.
          </p>
          <p>
            At Inside Pi Network, we&apos;re more than just a team; we&apos;re a family of Pi advocates. This family atmosphere fosters an environment where everyone is encouraged to bring their insights and passion for Pi to the forefront. We value inclusivity and strive to create a supportive platform where all Pi enthusiasts can learn, share, and thrive.
          </p>
        </div>
      </PageIntro>
      <Container className="mt-16">
        <StatList>
          <StatListItem value="50m" label="Pi Network Users" />
          <StatListItem value="4.3b" label="Mined Coins" />
          <StatListItem value="200+" label="Countries with Pi Network Users" />
        </StatList>
      </Container>

      <Culture />

      <Team />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="From the blog"
        intro="Stay informed with Inside Pi Network, your go-to platform for the latest news, updates, and insights about the Pi Network ecosystem."
        pages={blogArticles}
      />

      <ContactSection />
    </>
  )
}
