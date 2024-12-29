import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { Testimonial } from '@/components/Testimonial'
import { List, ListItem } from '@/components/List'
import { StylizedImage } from '@/components/StylizedImage'
import imageLaptop from '@/images/laptop.jpg'
import Head from 'next/head';

export const metadata = {
  title: 'What is Pi Network?',
  description:
    'We believe in efficiency and maximizing our resources to provide the best value to our clients.',
}

export default async function Work() {

  return (
    <>
      <Head>
        <link rel="canonical" href="https://www.insidepicoin.com/about-pi" />
      </Head>

      <PageIntro
        eyebrow="About Pi"
        title="What is Pi Network?"
      >
        <p>
        Pi Network is a novel cryptocurrency project aimed at making digital currency accessible to everyone. Unlike traditional cryptocurrencies that require expensive hardware and high energy consumption for mining, Pi Network introduces a mobile-first mining approach where users can mine Pi coins simply by using the Pi Network app on their smartphones. This method democratizes the process of earning cryptocurrency, making it possible for anyone with a mobile device to participate.
        </p>
      </PageIntro>

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'Mail Smirk' }}
      >
        Pi Network&apos;s vision is to create a more inclusive economy by providing a digital currency that encourages widespread adoption. The project was launched with the goal of integrating blockchain technology into everyday life, fostering a community where each member contributes to and benefits from the network&apos;s growth.
      </Testimonial>

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
            <ListItem title="Mining">
              Pi Network&apos;s mining process is designed to be energy-efficient and user-friendly. Users can mine Pi by engaging in simple actions within the app, like verifying their identity or inviting friends to join the network.                  </ListItem>
            <ListItem title="Security">
              The Pi blockchain is secured by the consensus of its users, who act as nodes in the network. This decentralized approach helps maintain the integrity and security of transactions without the need for large, centralized mining operations.                  </ListItem>
            <ListItem title="Ecosystem">
              Pi Network is building an ecosystem of applications and services where Pi can be used. This includes a marketplace, games, and various decentralized applications (dApps) that leverage Pi for transactions, aiming to increase its utility and adoption.
            </ListItem>
          </List>
        </div>
      </Container>

      <ContactSection />
    </>
  )
}
