'use client';

import Link from 'next/link'
import { useRef } from 'react';
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { Logo } from '@/components/Logo'
import Image from 'next/image';
import ximage from '@/images/logos/xLogo.png';

const navigation = [
  {
    title: 'Company',
    links: [
      { title: 'News', href: '/pi-news' },
      { title: 'Blog', href: '/blog' },
      { title: 'About Us', href: '/about' },
      { title: 'About Pi', href: '/about-pi' },
    ],
  },
]

function Navigation() {
  return (
    <nav>
      <ul role="list" className="grid grid-cols-2 gap-8 sm:grid-cols-3">
        {navigation.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950">
              {section.title}
            </div>
            <ul role="list" className="mt-4 text-sm text-neutral-700">
              {section.links.map((link, linkIndex) => (
                <li key={linkIndex} className="mt-4">
                  <Link
                    href={link.href}
                    className="transition hover:text-neutral-950"
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
        <li>
            <div className="font-display text-sm font-semibold tracking-wider text-neutral-950 mb-4">
              Connect
            </div>
              <Link
            href="https://x.com/insidepicoin"
            target="_blank"
              >
                <Image className="h-6 w-6 fill-current" height="50" width="50" src={ximage} alt="X Logo" />
              </Link>
          </li>
      </ul>
    </nav>
  )
}

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

function NewsletterForm() {
  const formRef = useRef(null); // Create a ref for the form

    const onSubmit = async (data) => {
      try {
        const response = await fetch('https://hook.eu2.make.com/ljmiou8bd33rdpepl8tfnld1n1y1kbla', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
  
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        console.log('Success:', data);
        formRef.current.reset(); // Reset the form here on success

      } catch (error) {
        console.error('Error:', error);
      }
    };
  
    const handleFormSubmit = (e) => {
      e.preventDefault(); // Prevent default form submission behavior
      const formData = new FormData(e.target); // Get form data
      const data = Object.fromEntries(formData.entries()); // Convert FormData to object
      onSubmit(data); // Pass the data to your onSubmit function
    };

    
  return (
    <form className="max-w-sm" onSubmit={(e) => handleFormSubmit(e)} ref={formRef}>
      <h2 className="font-display text-sm font-semibold tracking-wider text-neutral-950">
        Sign up for our newsletter
      </h2>
      <p className="mt-4 text-sm text-neutral-700">
        Subscribe to get the latest design news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          id="footer-email"
          placeholder="Email address"
          autoComplete="email"
          name="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-neutral-300 bg-transparent py-4 pl-6 pr-20 text-base/6 text-neutral-950 ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-950 focus:outline-none focus:ring-neutral-950/5"
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
  )
}

export function Footer() {
  return (
    <Container as="footer" className="mt-24 w-full sm:mt-32 lg:mt-40">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
          <Navigation />
          <div className="flex lg:justify-end">
            <NewsletterForm />
          </div>
        </div>
        <div className="mb-20 mt-24 flex flex-wrap items-end justify-between gap-x-6 gap-y-4 border-t border-neutral-950/10 pt-12">
          <Link href="/" aria-label="Home">
            <Logo className="h-8" fillOnHover />
          </Link>
          <div>
            <p className="text-sm text-neutral-700">
              © Inside Pi Network {new Date().getFullYear()}
            </p>
            <p className="text-sm text-neutral-700">
              Website created by <a href="https://www.higglo.io" target="_blank" className="text-indigo-700">Higglo Digital</a>
            </p>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
