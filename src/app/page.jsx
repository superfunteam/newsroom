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
import imageLaptop from '@/images/laptop.jpg'
import { loadCaseStudies } from '@/lib/mdx'

const clients = [
  ['New', logoNew],
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
        title="Telling hedge funds to kick rocks since 2023"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          We've been bought before. It sucks. But given the way things are going these days, getting acquired (or fired) is just the beginning of the story.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {caseStudies.map((caseStudy) => (
            <FadeIn key={caseStudy.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <h3>
                  <Link href={caseStudy.href}>
                    <span className="absolute inset-0 rounded-3xl" />
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
              Stop cobbling 3rd party tools together. Blogs, newsletters, subscriptions, payments, analytics, AI-powered art guidance, and more built in.
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
            A tale as old as time: a beloved publication gets a new boss or owner, everyone is fired (or better yet, everyone quits), and a new author-owned publication is born.
          </p>
          <p className="mt-6 text-xl text-neutral-600 font-bold">
           Pressbox is here to help.
          </p>
        </FadeIn>
      </Container>

      <Clients />

      <CaseStudies caseStudies={caseStudies} />

      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'New', logo: logoNew }}
      >
        We started at zero and built to 5m pageviews per month. I kept definitely kept writing and beating down doors, but a lot of that was Clark and Angie picking up slack.
      </Testimonial>

      <Services />



      <ContactSection />
    </>
  )
}
