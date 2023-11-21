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
import captureImage from '@/images/capture.png';
console.log(captureImage);
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
      <p className="font-bold mt-2">Newsroom comes with everything your pub needs. Here's a sample pub.</p>
    </div>
  </div>
  <div className="relative overflow-hidden pt-16">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <img
        src={captureImage.src}
        alt="App screenshot"
        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
        width={2432}
        height={1442}
      />
      
    </div>
  </div>
  <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-16 lg:px-8">
    <dl className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 lg:gap-y-16">
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-.513m14.095-5.13l1.41-.513M5.106 17.785l1.15-.964m11.49-9.642l1.149-.964M7.501 19.795l.75-1.3m7.5-12.99l.75-1.3m-6.063 16.658l.26-1.477m2.605-14.772l.26-1.477m0 17.726l-.26-1.477M10.698 4.614l-.26-1.477M16.5 19.794l-.75-1.299M7.5 4.205L12 12m6.894 5.785l-1.149-.964M6.256 7.178l-1.15-.964m15.352 8.864l-1.41-.513M4.954 9.435l-1.41-.514M12.002 12l-3.75 6.495" />
          </svg>
          Complete control.
        </dt>
        <dd className="inline pl-2">
          Powered by open source and modern web standards. Move fast and make things.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
          </svg>

          Publish online or by newsletter.
        </dt>
        <dd className="inline pl-2">
          An easy workflow for all content types, with paid subscriptions built in. 
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
          </svg>

          Memberships and monetization.
        </dt>
        <dd className="inline pl-2">
          Readers will support you if you give them a way. Built-in payments with 0% processing fees.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941" />
          </svg>

          Native analytics.
        </dt>
        <dd className="inline pl-2">
          Stats and insights alongside your content, where it should be. Track your content and find your fans.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 6v.75m0 3v.75m0 3v.75m0 3V18m-9-5.25h5.25M7.5 15h3M3.375 5.25c-.621 0-1.125.504-1.125 1.125v3.026a2.999 2.999 0 010 5.198v3.026c0 .621.504 1.125 1.125 1.125h17.25c.621 0 1.125-.504 1.125-1.125v-3.026a2.999 2.999 0 010-5.198V6.375c0-.621-.504-1.125-1.125-1.125H3.375z" />
          </svg>

          Offers and Promotions
        </dt>
        <dd className="inline pl-2">
          Run sales and limited time promos, offer tier member pricing, or test anything between. 
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
          </svg>

          Integrations.
        </dt>
        <dd className="inline pl-2">
          Editorial workflow, A/B testing, advertising modals, desktop editors, payments gateways, your own custom code.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
          </svg>

          Native image editing.
        </dt>
        <dd className="inline pl-2">
          Easily crop and set focal points with ease, no additional photo editing software required.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m5.231 13.481L15 17.25m-4.5-15H5.625c-.621 0-1.125.504-1.125 1.125v16.5c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9zm3.75 11.625a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
          </svg>

          SEO and Performance.
        </dt>
        <dd className="inline pl-2">
          Optimized, structured data ready for search and social, with top pagespeed scores built in with no plugins.
        </dd>
      </div>
      <div className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
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
