import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoNew from '@/images/clients/new/logo-add.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['Unseal', logoUnseal],
  ['New', logoNew],
  ['New', logoNew],
  ['New', logoNew],
  ['New', logoNew],
  ['New', logoNew],
  ['New', logoNew],
  ['New', logoNew],
]

function Clients() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-20 sm:mt-32 sm:py-32 lg:mt-56">
      <Container>
        <FadeIn className="flex items-center gap-x-8">
          <h2 className="text-center font-display text-sm font-semibold tracking-wider text-white sm:text-left">
            Now recruiting the next class of independent publications
          </h2>
          <div className="h-px flex-auto bg-neutral-800" />
        </FadeIn>
        <FadeInStagger faster>
          <ul
            role="list"
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-10 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li key={client}>
                <FadeIn>
                  <Image src={logo} alt={client} unoptimized />
                </FadeIn>
              </li>
            ))}
          </ul>
        </FadeInStagger>
      </Container>
    </div>
  )
}

function CaseStudies({ caseStudies }) {
  return (
    <>
      <SectionIntro
        title="We want more publications owned by the people that write them."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="mb-4">
          It seems simple but apprently it's not. Let's change that. We've been bought before. It sucks. But given the way things are going these days, getting acquired (or fired) is just the beginning of the story.
        </p>
        <p className="font-bold">
          Newsroom comes with everything your pub needs.
        </p>
      </SectionIntro>

      

      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-4xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-4xl" />
                    <Image
                      src={caseStudy.logo}
                      alt={caseStudy.client}
                      className="h-16 w-16"
                      unoptimized
                    />
                  </Link>
                </h3>
                <p className="mt-6 flex gap-x-2 text-sm text-neutral-950">
                  <time
                    dateTime={caseStudy.date.split('-')[0]}
                    className="font-semibold"
                  >
                    {caseStudy.date.split('-')[0]}
                  </time>
                  <span className="text-neutral-300" aria-hidden="true">
                    /
                  </span>
                  <span>Case study</span>
                </p>
                <p className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  {caseStudy.title}
                </p>
                <p className="mt-4 text-base text-neutral-600">
                  {caseStudy.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Services() {
  return (
    <>
      <SectionIntro
        eyebrow="What we do"
        title="From fired to publishing in 24hrs"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Starting a new thing? Everyone sticking together? We're totally here for that and we're a fraction of the price. For real, shop around.
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
            <ListItem title="A complete brand">
              A publication name, logo, colors, website– we've got all that stuff covered. Y'all stay focused on writing.
            </ListItem>
            <ListItem title="A complete suite">
              Stop cobbling 3rd party tools together. Blogs, newsletters, subscriptions, payments, analytics, AI-powered art direction, and more built in.
            </ListItem>
            <ListItem title="Looking for casual relationships">
              We're not weird. We don't want equity. We're not a partner. You pay us to do a job and then we part ways. Or not. Let us know.
            </ListItem>
            <ListItem title="Built on Ghost">
              Our entire stack is open source. You can run everything yourself or use simple cloud hosting. All-you-can-eat DIY. Or don't.
            </ListItem>
          </List>
        </div>
      </Container>
    </>
  )
}

export const metadata = {
  description:
    'We are a development studio working at the intersection of design and technology.',
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3)

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeIn className="max-w-3xl">
          <h1 className="font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            Empowering author-owned publications
          </h1>
          <p className="mt-6 text-xl text-neutral-600">
            We've all seen it happen: a beloved publication gets a new boss or owner, everyone is who ran things is fired (or better yet, everyone quits), and a new author-owned publication is born. Good.
          </p>
          <p className="mt-6 text-xl text-neutral-600 font-bold">
           Newsroom is here to help.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl sm:text-center">
      <h2 className="text-base font-semibold leading-7 text-slate-500">
        How does this work?
      </h2>
      <p className="mt-2 font-display tracking-tight [text-wrap:balance] text-4xl font-medium sm:text-5xl text-neutral-950">
        We want more publications owned by the people that write them.
      </p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        It seems simple but apprently it's not. Let's change that. We've been bought before. It sucks. But given the way things are going these days, getting acquired (or fired) is just the beginning of the story.
      </p>
      <p className="font-bold mt-2">Newsroom comes with everything your pub needs.</p>
    </div>
  </div>
  <div className="relative overflow-hidden pt-16 hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <img
        src="https://tailwindui.com/img/component-images/project-app-screenshot.png"
        alt="App screenshot"
        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
        width={2432}
        height={1442}
      />
      <div className="relative" aria-hidden="true">
        <div className="absolute -inset-x-20 bottom-0 bg-gradient-to-t from-white pt-[7%]" />
      </div>
    </div>
  </div>
  <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-20 md:mt-24 lg:px-8">
    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.5 17a4.5 4.5 0 01-1.44-8.765 4.5 4.5 0 018.302-3.046 3.5 3.5 0 014.504 4.272A4 4 0 0115 17H5.5zm3.75-2.75a.75.75 0 001.5 0V9.66l1.95 2.1a.75.75 0 101.1-1.02l-3.25-3.5a.75.75 0 00-1.1 0l-3.25 3.5a.75.75 0 101.1 1.02l1.95-2.1v4.59z"
              clipRule="evenodd"
            />
          </svg>
          Complete control.
        </dt>
        <dd className="inline pl-2">
          Powered by open source and modern web standards. Move fast and make things.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 1a4.5 4.5 0 00-4.5 4.5V9H5a2 2 0 00-2 2v6a2 2 0 002 2h10a2 2 0 002-2v-6a2 2 0 00-2-2h-.5V5.5A4.5 4.5 0 0010 1zm3 8V5.5a3 3 0 10-6 0V9h6z"
              clipRule="evenodd"
            />
          </svg>
          Publish online or by newsletter.
        </dt>
        <dd className="inline pl-2">
          An easy workflow for all content types, with paid subscriptions built in. 
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M15.312 11.424a5.5 5.5 0 01-9.201 2.466l-.312-.311h2.433a.75.75 0 000-1.5H3.989a.75.75 0 00-.75.75v4.242a.75.75 0 001.5 0v-2.43l.31.31a7 7 0 0011.712-3.138.75.75 0 00-1.449-.39zm1.23-3.723a.75.75 0 00.219-.53V2.929a.75.75 0 00-1.5 0V5.36l-.31-.31A7 7 0 003.239 8.188a.75.75 0 101.448.389A5.5 5.5 0 0113.89 6.11l.311.31h-2.432a.75.75 0 000 1.5h4.243a.75.75 0 00.53-.219z"
              clipRule="evenodd"
            />
          </svg>
          Memberships and monetization.
        </dt>
        <dd className="inline pl-2">
          Readers will support you if you give them a way. Built-in payments with 0% processing fees.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M10 2.5c-1.31 0-2.526.386-3.546 1.051a.75.75 0 01-.82-1.256A8 8 0 0118 9a22.47 22.47 0 01-1.228 7.351.75.75 0 11-1.417-.49A20.97 20.97 0 0016.5 9 6.5 6.5 0 0010 2.5zM4.333 4.416a.75.75 0 01.218 1.038A6.466 6.466 0 003.5 9a7.966 7.966 0 01-1.293 4.362.75.75 0 01-1.257-.819A6.466 6.466 0 002 9c0-1.61.476-3.11 1.295-4.365a.75.75 0 011.038-.219zM10 6.12a3 3 0 00-3.001 3.041 11.455 11.455 0 01-2.697 7.24.75.75 0 01-1.148-.965A9.957 9.957 0 005.5 9c0-.028.002-.055.004-.082a4.5 4.5 0 018.996.084V9.15l-.005.297a.75.75 0 11-1.5-.034c.003-.11.004-.219.005-.328a3 3 0 00-3-2.965zm0 2.13a.75.75 0 01.75.75c0 3.51-1.187 6.745-3.181 9.323a.75.75 0 11-1.186-.918A13.687 13.687 0 009.25 9a.75.75 0 01.75-.75zm3.529 3.698a.75.75 0 01.584.885 18.883 18.883 0 01-2.257 5.84.75.75 0 11-1.29-.764 17.386 17.386 0 002.078-5.377.75.75 0 01.885-.584z"
              clipRule="evenodd"
            />
          </svg>
          Native analytics.
        </dt>
        <dd className="inline pl-2">
          Stats and insights alongside your content, where it should be. Track your content and find your fans.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M7.84 1.804A1 1 0 018.82 1h2.36a1 1 0 01.98.804l.331 1.652a6.993 6.993 0 011.929 1.115l1.598-.54a1 1 0 011.186.447l1.18 2.044a1 1 0 01-.205 1.251l-1.267 1.113a7.047 7.047 0 010 2.228l1.267 1.113a1 1 0 01.206 1.25l-1.18 2.045a1 1 0 01-1.187.447l-1.598-.54a6.993 6.993 0 01-1.929 1.115l-.33 1.652a1 1 0 01-.98.804H8.82a1 1 0 01-.98-.804l-.331-1.652a6.993 6.993 0 01-1.929-1.115l-1.598.54a1 1 0 01-1.186-.447l-1.18-2.044a1 1 0 01.205-1.251l1.267-1.114a7.05 7.05 0 010-2.227L1.821 7.773a1 1 0 01-.206-1.25l1.18-2.045a1 1 0 011.187-.447l1.598.54A6.993 6.993 0 017.51 3.456l.33-1.652zM10 13a3 3 0 100-6 3 3 0 000 6z"
              clipRule="evenodd"
            />
          </svg>
          Offers and Promotions
        </dt>
        <dd className="inline pl-2">
          Run sales and limited time promos, offer tier member pricing, or test anything between. 
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
            <path
              fillRule="evenodd"
              d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
              clipRule="evenodd"
            />
          </svg>
          Integrations.
        </dt>
        <dd className="inline pl-2">
          Editorial workflow, A/B testing, advertising modals, desktop editors, payments gateways, your own custom code.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
            <path
              fillRule="evenodd"
              d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
              clipRule="evenodd"
            />
          </svg>
          Native image editing.
        </dt>
        <dd className="inline pl-2">
          Easily crop and set focal points with ease, no additional photo editing software required.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
            <path
              fillRule="evenodd"
              d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
              clipRule="evenodd"
            />
          </svg>
          SEO and Performance.
        </dt>
        <dd className="inline pl-2">
          Optimized, structured data ready for search and social, with top pagespeed scores built in with no plugins.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg
            className="absolute left-1 top-1 h-5 w-5 text-slate-400"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path d="M4.632 3.533A2 2 0 016.577 2h6.846a2 2 0 011.945 1.533l1.976 8.234A3.489 3.489 0 0016 11.5H4c-.476 0-.93.095-1.344.267l1.976-8.234z" />
            <path
              fillRule="evenodd"
              d="M4 13a2 2 0 100 4h12a2 2 0 100-4H4zm11.24 2a.75.75 0 01.75-.75H16a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75V15zm-2.25-.75a.75.75 0 00-.75.75v.01c0 .414.336.75.75.75H13a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75h-.01z"
              clipRule="evenodd"
            />
          </svg>
          Cover multiple beats.
        </dt>
        <dd className="inline pl-2">
          Manage verticals and multiple newsletters and different topic and subscription levels with ease.
        </dd>
      </div>
    </dl>
  </div>
</div>



      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'New', logo: logoNew }}
      >
        We started at zero and built to 5m pageviews per month. I kept definitely kept writing and beating down doors, but a lot of that was Clark and Angie picking up slack.</Testimonial>

      <Services />

      <div className="bg-white py-24 sm:py-32">
  <div className="mx-auto max-w-7xl px-6 lg:px-8">
    <div className="mx-auto max-w-4xl text-center">
      <h2 className="text-base font-semibold leading-7 text-black">
        Pricing
      </h2>
      <p className="mt-2 font-display text-5xl font-medium tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
        Free for exisitng, known pubs
      </p>
    </div>
    <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
      The Newsroom mission is more author-owned publications, and we mean that. If you're starting something else, we're still here to talk.
    </p>

    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <div className="rounded-4xl p-8 ring-1 xl:p-10 ring-gray-200">
        <h3
          id="tier-freelancer"
          className="font-display font-semibold text-lg font-semibold leading-8 text-gray-900"
        >
          Exisiting Pub
        </h3>
        <p className="mt-4 text-sm leading-6 text-gray-600">
          Have a passionate base? Have we heard of you? Answer yes to one of those questions and your new pub is <strong>FREE</strong>.
        </p>
        <p className="mt-6 flex items-baseline gap-x-1">
          {/* Price, update based on frequency toggle state */}
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            FREE
          </span>
          {/* Payment frequency, update based on frequency toggle state */}
          <span className="text-sm font-semibold leading-6 text-gray-600">
            
          </span>
        </p>
        <a
          href="#"
          aria-describedby="tier-freelancer"
          className="mt-6 block py-3 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
        >
          Get Started
        </a>
        <ul
          role="list"
          className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-600"
        >
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            A ready-to-write publication
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Powered by Ghost (Open Source)
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Brand, site, newsletter, subscriptions
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            No Newsroom fee
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Only pay no-markup hosting costs
          </li>
        </ul>
      </div>
      <div className="rounded-4xl p-8 ring-1 xl:p-10 ring-gray-200">
        <h3
          id="tier-startup"
          className="font-display font-semibold text-lg leading-8 text-gray-900"
        >
          New Venture
        </h3>
        <p className="mt-4 text-sm leading-6 text-gray-600">
           Starting something totally new? That works too. Newsroom is the fastest way to get a new publication online.
        </p>
        <p className="mt-6 flex items-baseline gap-x-1">
          {/* Price, update based on frequency toggle state */}
          <span className="text-4xl font-bold tracking-tight text-gray-900">
            $14,000
          </span>
          {/* Payment frequency, update based on frequency toggle state */}
          <span className="text-sm font-semibold leading-6 text-gray-600">
            / one time payment
          </span>
        </p>
        <a
          href="#"
          aria-describedby="tier-startup"
          className="mt-6 block py-3 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
        >
          Get Started
        </a>
        <ul
          role="list"
          className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-600"
        >
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            A ready-to-write publication
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Powered by Ghost (Open Source)
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Brand, site, newsletter, subscriptions
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Art Direction
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Weekly meetings with Newsroom
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            One-time Newsroom fee
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-black"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Plus no-markup hosting costs
          </li>
        </ul>
      </div>
      <div className="rounded-4xl p-8 ring-1 xl:p-10 bg-black">
        <h3
          id="tier-enterprise"
          className="font-display font-semibold text-lg font-semibold leading-8 text-white"
        >
          Rich Capitalist Pig
        </h3>
        <p className="mt-4 text-sm leading-6 text-gray-300">
          Did that sting? Do you care? Then dangit we might need you. You can fund independent journalism today.
        </p>
        <p className="mt-6 flex items-baseline gap-x-1">
          <span className="text-4xl font-bold tracking-tight text-white">
            Let's Talk
          </span>
        </p>
        <a
          href="#"
          aria-describedby="tier-enterprise"
          className="mt-6 block py-3 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-black shadow-sm hover:bg-indigo-500 focus-visible:outline-indigo-600"
          >
          Contact Newsroom
        </a>
        <ul
          role="list"
          className="mt-8 space-y-3 text-sm leading-6 xl:mt-10 text-gray-300"
        >
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Directly support independent journalism
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Easily fund a pub for years to come
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Autopilot technical costs and hosting
          </li>
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Focus on the matters at hand
          </li>
          
          <li className="flex gap-x-3">
            <svg
              className="h-6 w-5 flex-none text-white"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                clipRule="evenodd"
              />
            </svg>
            Open for custom inqueries
          </li>
        </ul>
      </div>
    </div>
  </div>
</div>



      <ContactSection />
    </>
  )
}
