import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { Button } from '@/components/Button'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { List, ListItem } from '@/components/List'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { Testimonial } from '@/components/Testimonial'
import logoNew from '@/images/clients/new/logo-add.svg'
import logoUnseal from '@/images/clients/unseal/logo-light.svg'
import logoReprint from '@/images/clients/reprint/logo-white.svg'
import logoReprintBlack from '@/images/clients/reprint/logo-black.svg'
import logoMatinee from '@/images/clients/matinee/logo-white.svg'
import logoMatineeBlack from '@/images/clients/matinee/logo-black.svg'
import imageLaptop from '@/images/feature.png'
import captureImage from '@/images/capture.png';
import capturePixels from '@/images/capture-pixels.png';
import imageMarket from '@/images/market.webp'
import { loadCaseStudies } from '@/lib/mdx'
import { GridPattern } from '@/components/GridPattern'


const clients = [
  ['Reprint', logoReprint],
  ['Matinee', logoMatinee],
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
            className="mt-16 grid grid-cols-2 gap-x-20 gap-y-12 lg:grid-cols-4"
          >
            {clients.map(([client, logo]) => (
              <li className="flex items-center justify-center" key={client}>
                <FadeIn class="!w-full">
                <div className="!w-full">
                  <Image className="!w-full" src={logo} alt={client} unoptimized />
                </div>
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
        title="From pink slip to publishing in 24hrs"
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p className="mb-4">
          We've all seen it happen: a beloved publication gets a new boss or owner, everyone is who ran things is fired (or better yet, everyone quits), and shortly after, a new author-owned publication is born.
        </p>
        <p>
        <strong>Newsroom is here to help.</strong>
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <div className="lg:flex lg:items-center lg:justify-end gap-12">
          <div className="flex justify-center w-full">
            <FadeIn className="">
              <Image
                src={imageLaptop}
                sizes="(min-width: 1024px) 41rem, 31rem"
                className="justify-center lg:justify-end mix-blend-lighten"
              />
            </FadeIn>
          </div>
          <List className="mt-16 lg:mt-0 w-full">
            <ListItem title="A complete brand">
              A publication name, logo, colors, website, social channels, newsletters– we've got all the good stuff covered. Y'all stay focused on doing what writers do best: writing.
            </ListItem>
            <ListItem title="A complete suite">
              Stop cobbling together 3rd party tools. Everything in our package is built-in, native, in one dashboard. Team and staff accounts, permissions, all managed.
            </ListItem>
            <ListItem title="Looking for casual relationships">
              We're not weird. We don't want equity. We're not a "partner" trying to strongarm you. We're a couple of folks that have been building news sites for a long time.
            </ListItem>
            <ListItem title="Built on Ghost">
              Our entire stack is open source. You can run everything yourself or use simple <a href="https://ghost.org/pricing/" className="underline font-medium decoration-2 underline-offset-2" target="_blank">Ghost Pro</a> cloud hosting. It's all-you-can-eat DIY. Or don't.
            </ListItem>
          </List>
        </div>
      </Container>


    </>
  )
}




export const metadata = {
  description: 'We make author-owned publications.',
  other: { "view-transition": "same-origin" }
}

export default async function Home() {
  let caseStudies = (await loadCaseStudies()).slice(0, 3);

  return (
    <>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <FadeInStagger faster className="max-w-3xl">
          <FadeIn>
            <h1 className="font-display text-5xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
            We make author-owned publications</h1>
          </FadeIn>
          <FadeIn key="fadeTwo">
            <p className="mt-6 text-xl text-neutral-600">
            Complete, ready-to-write publications (with branding, website, newsletters) for independent teams of journalists looking to organize and own the whole stack.</p>
          </FadeIn>
          <FadeIn key="fadeThree">
          <p className="mt-6 text-xl text-neutral-600 font-bold">
           <a href="/market" className="underline decoration-2 underline-offset-2 hover:decoration-[#00EAC1]">Browse available publications</a> →</p>
          </FadeIn>
        </FadeInStagger>
      </Container>

      <Clients />

      <div className="bg-white py-24 pb-16 sm:pt-36 md:grid grid-cols-5">
  <div className="mx-auto max-w-7xl px-6 lg:px-8 col-span-2">
  <FadeInStagger>
    <div className="mx-auto max-w-4xl">
      <FadeIn><h2 className="text-base font-semibold leading-7 text-slate-500">
        How does this work?
      </h2>
      </FadeIn>
      <FadeIn><p className="mt-2 font-display tracking-tight [text-wrap:balance] text-4xl font-bold sm:text-5xl text-neutral-950">
        We want more publications owned by the people that write them.
      </p>
      </FadeIn>
      <FadeIn><p className="mt-6 text-xl leading-8 text-gray-600">
        It seems simple but apprently it's not. Let's change that. We've been bought before. It sucks. But given the way things are going these days, getting acquired (or fired) is just the beginning of the story.
      </p>
      </FadeIn>
      <FadeIn><p className="font-bold mt-2 text-xl">Newsroom comes with everything your publication needs, ready-to-write™️.</p>
      </FadeIn>
      <FadeIn>
          <p className="mt-6 text-xl text-neutral-600 font-bold">
           <a href="#market" className="underline decoration-2 underline-offset-2 hover:decoration-[#00EAC1]">Browse available publications</a> →</p>
          </FadeIn>
    </div>
    </FadeInStagger>
    <div className="relative overflow-hidden pt-16 hidden">
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <img
        alt="App screenshot"
        className="mb-[-12%] rounded-xl shadow-2xl ring-1 ring-gray-900/10"
        width={2432}
        height={1442}
      />
      
    </div>
  </div>
  </div>
  <div className="mx-auto max-w-7xl px-6 mt-10 lg:px-8 col-span-3">
    <FadeInStagger faster className="mx-auto grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 text-base leading-7 text-gray-600 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:gap-x-8 lg:gap-y-16">
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <path d="M19.3912 17.1252C19.0223 16.681 18.7431 16.1697 18.568 15.6194C18.4225 15.1175 18.6031 14.8465 18.9946 14.3746C19.4959 13.8677 19.7864 13.1901 19.8078 12.4774C19.8115 11.7841 19.5493 11.1159 19.075 10.6103C18.7474 10.2815 18.5661 9.83478 18.573 9.37048C18.6496 8.84219 18.8861 8.34968 19.2506 7.96007C19.7526 7.30756 20.4 6.41913 19.4765 5.49555C18.5529 4.57197 17.6596 5.23455 17.007 5.72141C16.613 6.09347 16.1129 6.33377 15.5765 6.40905C15.111 6.41595 14.6624 6.23526 14.3317 5.90712C13.8241 5.43593 13.1572 5.1743 12.4646 5.1743C11.7719 5.1743 11.105 5.43593 10.5974 5.90712C10.2686 6.23463 9.8219 6.41595 9.35761 6.40905C8.81803 6.32686 8.31798 6.07777 7.92712 5.69631C7.27461 5.20944 6.38619 4.54187 5.47272 5.45037C4.55926 6.35887 5.20168 7.28751 5.68856 7.96002C6.05686 8.34839 6.29716 8.84091 6.3762 9.37043C6.3831 9.83597 6.20241 10.2846 5.87427 10.6152C5.40308 11.1228 5.14145 11.7897 5.14145 12.4824C5.14145 13.1751 5.40308 13.842 5.87427 14.3496C6.20178 14.6783 6.3831 15.1251 6.3762 15.5893C6.30091 16.1258 6.06062 16.6258 5.68856 17.0198C5.2017 17.6723 4.53412 18.5608 5.47272 19.5044C5.72619 19.7956 6.09073 19.965 6.47658 19.9712C7.03874 19.9047 7.56576 19.6619 7.98237 19.2786C8.37638 18.9065 8.87643 18.6662 9.41286 18.5909C9.87714 18.584 10.3239 18.7653 10.6526 19.0928C11.1615 19.564 11.829 19.8263 12.5224 19.8263C13.2157 19.8263 13.8832 19.564 14.3921 19.0928C14.7184 18.7653 15.1645 18.584 15.6269 18.5909C16.147 18.6681 16.632 18.9009 17.0172 19.2585C17.6647 19.7604 18.5581 20.4129 19.4817 19.4843C20.4404 18.5006 19.8632 17.7477 19.3914 17.1252L19.3912 17.1252Z" fill="black"/>
          </svg>
          Publish online or by newsletter.
        </dt>
        <dd className="inline pl-2">
          An easy workflow for all content types, with monetization built right in. 
        </dd>
      </FadeIn>
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <circle cx="12.5" cy="11.5" r="7.5" fill="black"/>
          </svg>
          Memberships and payments.
        </dt>
        <dd className="inline pl-2">
          Subscription tiers, paid newsletters, gated content and paywalls. Powered by <a className="underline decoration-2 underline-offset-2 font-medium" href="https://stripe.com">Stripe</a>, 0% added fees.
        </dd>
      </FadeIn>
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <path d="M11.9396 4L5.00764 7.99307L5 15.9931L11.9243 20L18.8562 16.0062L18.8638 8.00622L11.9396 4Z" fill="black"/>
          </svg>
          Native analytics.
        </dt>
        <dd className="inline pl-2">
          Stats and insights alongside your content, where it should be. Track your content and find your fans.
        </dd>
      </FadeIn>
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <path d="M19.8309 7.00005H8.58656C8.5641 7.00005 8.54165 7.00467 8.52052 7.01325C8.51061 7.01722 8.50268 7.02448 8.4941 7.03042C8.48485 7.03637 8.47429 7.04099 8.46636 7.04892C8.45051 7.06477 8.4373 7.08326 8.42872 7.10373L4.01387 17.4855C4.00792 17.5 4.0066 17.5158 4.00462 17.5317C4.0033 17.539 4 17.5456 4 17.5528C4 17.5535 4.00066 17.5541 4.00066 17.5555C4.00066 17.5766 4.00528 17.5984 4.01321 17.6175C4.01717 17.6275 4.02444 17.6354 4.03038 17.644C4.03698 17.6532 4.04095 17.6638 4.04887 17.6717C4.07991 17.7027 4.12218 17.7219 4.16907 17.7219H19.8309C19.9241 17.7219 20 17.6459 20 17.5528L19.9993 7.16907C20 7.07529 19.9246 7.00005 19.8309 7.00005Z" fill="black"/>
          </svg>
          Complete control.
        </dt>
        <dd className="inline pl-2">
          Powered by open source and modern web standards. Move fast and make things.
        </dd>
      </FadeIn>
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <path d="M11.3821 14.3902L7.19512 17.9675L5 14.2276L10.1626 12.3984L5 10.5691L7.19512 6.78861L11.3821 10.3658L10.3659 5H14.6341L13.6179 10.3658L17.8049 6.78861L20 10.5691L14.8374 12.3984L20 14.2276L17.8049 17.9675L13.6179 14.3902L14.6341 19.7561H10.3659L11.3821 14.3902Z" fill="black"/>
          </svg>
          Offers and Promotions
        </dt>
        <dd className="inline pl-2">
          Run sales and limited time promos, offer tier member pricing, or test anything between. 
        </dd>
      </FadeIn>
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <path d="M13.2406 3.28532C14.1411 3.82641 14.9263 4.53957 15.5512 5.38408C16.1761 6.22859 16.6285 7.18792 16.8827 8.20729C17.1368 9.22665 17.1877 10.2861 17.0324 11.3251C16.8771 12.3642 16.5187 13.3624 15.9776 14.263C15.4366 15.1635 14.7234 15.9486 13.8789 16.5735C13.0344 17.1984 12.075 17.6509 11.0557 17.905C10.0363 18.1592 8.97686 18.2101 7.93783 18.0548C6.89879 17.8995 5.90052 17.5411 5 17L7.47218 12.8856C7.83239 13.102 8.2317 13.2454 8.64731 13.3075C9.06293 13.3696 9.48671 13.3493 9.89446 13.2476C10.3022 13.1459 10.6859 12.965 11.0237 12.715C11.3615 12.465 11.6468 12.151 11.8632 11.7908C12.0797 11.4306 12.223 11.0313 12.2852 10.6157C12.3473 10.2 12.3269 9.77626 12.2253 9.36851C12.1236 8.96076 11.9426 8.57703 11.6926 8.23923C11.4427 7.90142 11.1286 7.61616 10.7684 7.39973L13.2406 3.28532Z" fill="black"/>
          </svg>
          Integrations.
        </dt>
        <dd className="inline pl-2">
          Editorial workflow, A/B testing, advertising modals, desktop editors, payments gateways, your own custom code.
        </dd>
      </FadeIn>
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <path d="M11.9282 6L18.8564 18H5L11.9282 6Z" fill="black"/>
          </svg>
          Native image editing.
        </dt>
        <dd className="inline pl-2">
          Easily crop and set focal points with ease, no additional photo editing software required.
        </dd>
      </FadeIn>
      <FadeIn className="relative pl-9">
        <dt className="inline font-semibold text-gray-900">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute left-1 top-1 h-5 w-5 text-slate-400">
          <rect width="24" height="24" fill="white"/>
          <rect x="5" y="5" width="14" height="14" fill="black"/>
          </svg>


          SEO and Performance.
        </dt>
        <dd className="inline pl-2">
          Optimized, structured data ready for search and social, with top pagespeed scores built in with no plugins.
        </dd>
      </FadeIn>
      
    </FadeInStagger>
  </div>
</div>



      <Testimonial
        className="mt-24 sm:mt-32 lg:mt-40"
        client={{ name: 'New', logo: logoNew }}
      >
        We started at zero and built to 5m pageviews per month. I kept definitely kept writing and beating down doors, but a lot of that was Clark and Angie picking up slack.
        </Testimonial>

      <Services />



      

      <div className="bg-white">
  <div className="mx-auto max-w-7xl py-24 sm:px-6 sm:py-32 lg:px-8">
    <div className="relative isolate overflow-hidden bg-black px-6 pt-16 shadow-2xl rounded-4xl sm:px-16 md:pt-24 lg:flex lg:gap-x-20 lg:px-24 lg:pt-0">
      
      <GridPattern
        className="absolute inset-0 -z-10 h-full w-full fill-neutral-800 stroke-neutral-800 [mask-image:linear-gradient(to_bottom_left,white_50%,transparent_60%)]"
        yOffset={-256}
      />

      <div href="/market" className="mx-auto max-w-md text-left lg:mx-0 lg:flex-auto lg:py-32">
        <h1 className="pubTitle text-4xl font-semibold sm:text-5xl font-display font-semibold tracking-tight leading-none text-white flex gap-3 items-center">
            Pub Market <span className="bg-[#00EAC1] leading-none text-lime-950 rounded-full p-2 px-3 text-lg">NEW</span>
          </h1>
        <p className="mt-6 text-lg leading-6 text-white">
          A collection of <strong>ready-to-write</strong> publications that just need journalists. Absolutely turnkey and ready to publish right now.
        </p>
        <p className="mt-6 text-lg leading-6 text-white">
          Includes website, name, logo, art direction, all <strong>Newsroom</strong> features, and support during launch.
        </p>
        <div className="mt-10 flex items-center justify-start gap-x-6 lg:justify-start">
          <a
            href="/market"
            className="bg-white rounded-full px-5 py-3 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View available publications
          </a>
        </div>
      </div>
      <div className="relative mt-16 h-80 lg:mt-8">
        <FadeIn class="">
        <div className="">
          <Image className="absolute left-0 top-0 md:top-6 w-[57rem] max-w-none rounded-2xl bg-white/5 ring-1 ring-white/10"
          src={imageMarket} />
        </div>
        </FadeIn>
      </div>
    </div>
  </div>
</div>





      <div className="bg-white py-24 sm:py-32">
  <FadeInStagger faster className="mx-auto max-w-7xl px-6 lg:px-8">
    <FadeIn className="mx-auto max-w-4xl text-center">
      <h2 className="text-base font-semibold leading-7 text-black">
        Pricing
      </h2>
      <p className="mt-2 font-display text-5xl font-semibold tracking-tight text-neutral-950 [text-wrap:balance] sm:text-7xl">
        Free for existing, known pubs
      </p>
    </FadeIn>
    <FadeIn className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-600">
      The Newsroom mission is more author-owned publications, and we mean that. If you're starting something else, we're still here to talk.
    </FadeIn>

    <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
      <FadeIn className="rounded-4xl p-8 ring-1 xl:p-10 ring-gray-200">
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
          className="mt-6 block py-3 rounded-full px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white shadow-sm hover:bg-[#00EAC1] hover:text-black transition-colors duration-300 focus-visible:outline-indigo-600"
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
      </FadeIn>
      <FadeIn className="rounded-4xl p-8 ring-1 xl:p-10 ring-gray-200">
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
          className="mt-6 rounded-full block py-3 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white shadow-sm hover:bg-[#00EAC1] hover:text-black transition-colors duration-300 focus-visible:outline-indigo-600"
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
      </FadeIn>
      <FadeIn className="rounded-4xl p-8 ring-1 xl:p-10 bg-black">
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
          className="mt-6 rounded-full block py-3 px-3 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-black shadow-sm hover:bg-[#00EAC1] hover:text-black transition-colors duration-300 focus-visible:outline-indigo-600"
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
      </FadeIn>
    </div>
  </FadeInStagger>
</div>



      <ContactSection />
    </>
  )
}
