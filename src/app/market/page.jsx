import { Blockquote } from '@/components/Blockquote'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { StylizedImage } from '@/components/StylizedImage'
import { TagList, TagListItem } from '@/components/TagList'
import imageMeeting from '@/images/meeting.jpg'
import imageWhiteboard from '@/images/whiteboard.jpg'
import logoReprint from '@/images/clients/reprint/logo-white.svg'
import logoReprintBlack from '@/images/clients/reprint/logo-black.svg'
import logoMatinee from '@/images/clients/matinee/logo-white.svg'
import logoMatineeBlack from '@/images/clients/matinee/logo-black.svg'
import imageLaptop from '@/images/feature.png'
import captureImage from '@/images/capture.png';
import capturePixels from '@/images/capture-pixels.png';

function Section({ title, image, children }) {
  return (
    <Container className="group/section [counter-increment:section]">
      <div className="lg:flex lg:items-center lg:justify-end lg:gap-x-8 lg:group-even/section:justify-start xl:gap-x-20">
        <div className="flex justify-center">
          <FadeIn className="w-[33.75rem] flex-none lg:w-[45rem]">
            <StylizedImage
              {...image}
              sizes="(min-width: 1024px) 41rem, 31rem"
              className="justify-center lg:justify-end lg:group-even/section:justify-start"
            />
          </FadeIn>
        </div>
        <div className="mt-12 lg:mt-0 lg:w-[37rem] lg:flex-none lg:group-even/section:order-first">
          <FadeIn>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
            <div className="mt-6">{children}</div>
          </FadeIn>
        </div>
      </div>
    </Container>
  )
}

function Bolt() {
  return (
    <div className="">

      <div className="mt-10 flex items-center justify-between space-x-4">
        <h2 className="text-lg font-medium text-gray-900">
          Bolt-on Services
        </h2>
        <a
          href="#"
          className="whitespace-nowrap text-sm font-medium text-indigo-600 hover:text-indigo-500"
        >
          View all
          <span aria-hidden="true"> →</span>
        </a>
      </div>
      <div className="mt-6 grid grid-cols-2 gap-x-8 gap-y-8 sm:gap-y-10 lg:grid-cols-4">
        
        <div className="group relative">
          <div className="aspect-h-3 aspect-w-4 overflow-hidden bg-gray-100">
            <video
              loop
              muted
              autoPlay
              className="object-cover object-center aspect-[4/3]"
            >
              <source src="/video/art-direction.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className="flex absolute w-full -translate-y-full items-end p-4 opacity-0 group-hover:opacity-100"
              aria-hidden="true"
            >
              <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                View Product
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
            <h3>
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Art Direction
              </a>
            </h3>
            <p>$1500</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Style and kit ready for daily use</p>
        </div>

        <div className="group relative">
          <div className="aspect-h-3 aspect-w-4 overflow-hidden bg-gray-100">
            <video
              loop
              muted
              autoPlay
              className="object-cover object-center aspect-[4/3]"
            >
              <source src="/video/hedcut-loop.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            <div
              className="flex absolute w-full -translate-y-full items-end p-4 opacity-0 group-hover:opacity-100"
              aria-hidden="true"
            >
              <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                View Product
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
            <h3>
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Hedcut Illustration
              </a>
            </h3>
            <p>Gig</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Engraved portraits in a journal style</p>
        </div>

        <div className="group relative">
        <div className="aspect-[4/3] overflow-hidden bg-gray-100">
          <video
            loop
            muted
            autoPlay
            className="object-cover object-center aspect-[4/3]"
          >
            <source src="/video/engineering.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div
            className="flex absolute w-full items-end p-4 opacity-0 group-hover:opacity-100"
            aria-hidden="true"
          >
            <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
              View Product
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
          <h3>
            <a href="#">
              <span aria-hidden="true" className="absolute inset-0 font-display" />
              Engineering
            </a>
          </h3>
          <p>$175/hr</p>
        </div>
        <p className="mt-1 text-sm text-gray-500">Custom integrations and scratch code</p>
      </div>


        <div className="group relative">
          <div className="aspect-h-3 aspect-w-4 overflow-hidden bg-gray-100">
            <video
                loop
                muted
                autoPlay
                className="object-cover object-center aspect-[4/3]"
              >
                <source src="/video/film-loop.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            <div
              className="flex absolute w-full -translate-y-full items-end p-4 opacity-0 group-hover:opacity-100"
              aria-hidden="true"
            >
              <div className="w-full rounded-md bg-white bg-opacity-75 px-4 py-2 text-center text-sm font-medium text-gray-900 backdrop-blur backdrop-filter">
                View Product
              </div>
            </div>
          </div>
          <div className="mt-4 flex items-center justify-between space-x-8 text-base font-medium text-gray-900">
            <h3>
              <a href="#">
                <span aria-hidden="true" className="absolute inset-0" />
                Video Production
              </a>
            </h3>
            <p>Gig</p>
          </div>
          <p className="mt-1 text-sm text-gray-500">Film and edit, travel required</p>
        </div>
        {/* More products... */}
      </div>


    </div>


  )
}


function Shop() {
  return (
    

    <>
  {/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
// ...
require('@tailwindcss/forms'),
    ],
  }
  ```
*/}
  <div className="bg-white">
    <div>
      {/*
Mobile filter dialog

Off-canvas filters for mobile, show/hide based on off-canvas filters state.
    */}
      <div className="relative z-40 lg:hidden" role="dialog" aria-modal="true">
        {/*
  Off-canvas menu backdrop, show/hide based on off-canvas menu state.

  Entering: "transition-opacity ease-linear duration-300"
    From: "opacity-0"
    To: "opacity-100"
  Leaving: "transition-opacity ease-linear duration-300"
    From: "opacity-100"
    To: "opacity-0"
*/}
        <div className="opacity-0 fixed inset-0 bg-black bg-opacity-25" />
        <div className="fixed inset-0 z-40 flex">
          {/*
    Off-canvas menu, show/hide based on off-canvas menu state.

    Entering: "transition ease-in-out duration-300 transform"
      From: "translate-x-full"
      To: "translate-x-0"
    Leaving: "transition ease-in-out duration-300 transform"
      From: "translate-x-0"
      To: "translate-x-full"
  */}
          <div className="translate-x-full relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
            <div className="flex items-center justify-between px-4">
              <h2 className="text-lg font-medium text-gray-900">Filters</h2>
              <button
                type="button"
                className="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* Filters */}
            <form className="mt-4 border-t border-gray-200">
              <h3 className="sr-only">Categories</h3>
              <ul role="list" className="px-2 py-3 font-medium text-gray-900">
                <li>
                  <a href="#" className="block px-2 py-3">
                    Ready-to-write Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-2 py-3">
                    Custom Built Publications
                  </a>
                </li>
                <li>
                  <a href="#" className="block px-2 py-3">
                    Bolt-on Services
                  </a>
                </li>
              </ul>
              
              
             
            </form>
          </div>
        </div>
      </div>
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-24">
          <h1 className="pubTitle text-4xl font-semibold sm:text-5xl font-display font-semibold tracking-tight leading-none text-black flex gap-3 items-center">
            Pub Market <span className="bg-[#00EAC1] leading-none text-lime-950 rounded-full p-2 px-3 text-lg">NEW</span>
          </h1>
          <div className="flex items-center">
            <div className="relative inline-block text-left">
              <div>
                <button
                  type="button"
                  className="group inline-flex justify-center text-sm font-medium text-gray-700 hover:text-gray-900"
                  id="menu-button"
                  aria-expanded="false"
                  aria-haspopup="true"
                >
                  Sort
                  <svg
                    className="-mr-1 ml-1 h-5 w-5 flex-shrink-0 text-gray-400 group-hover:text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </div>
              {/*
        Dropdown menu, show/hide based on menu state.

        Entering: "transition ease-out duration-100"
          From: "transform opacity-0 scale-95"
          To: "transform opacity-100 scale-100"
        Leaving: "transition ease-in duration-75"
          From: "transform opacity-100 scale-100"
          To: "transform opacity-0 scale-95"
      */}
              <div
                className=" transform opacity-0 scale-95 absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-2xl ring-1 ring-black ring-opacity-5 focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabIndex={-1}
              >
                <div className="py-1" role="none">
                  {/*
            Active: "bg-gray-100", Not Active: ""

            Selected: "font-medium text-gray-900", Not Selected: "text-gray-500"
          */}
                  <a
                    href="#"
                    className="font-medium text-gray-900 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-0"
                  >
                    Most Popular
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-1"
                  >
                    Best Rating
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-2"
                  >
                    Newest
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-3"
                  >
                    Price: Low to High
                  </a>
                  <a
                    href="#"
                    className="text-gray-500 block px-4 py-2 text-sm"
                    role="menuitem"
                    tabIndex={-1}
                    id="menu-item-4"
                  >
                    Price: High to Low
                  </a>
                </div>
              </div>


            </div>
            <button
              type="button"
              className="-m-2 ml-5 p-2 text-gray-400 hover:text-gray-500 sm:ml-7"
            >
              <span className="sr-only">View grid</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.25 2A2.25 2.25 0 002 4.25v2.5A2.25 2.25 0 004.25 9h2.5A2.25 2.25 0 009 6.75v-2.5A2.25 2.25 0 006.75 2h-2.5zm0 9A2.25 2.25 0 002 13.25v2.5A2.25 2.25 0 004.25 18h2.5A2.25 2.25 0 009 15.75v-2.5A2.25 2.25 0 006.75 11h-2.5zm9-9A2.25 2.25 0 0011 4.25v2.5A2.25 2.25 0 0013.25 9h2.5A2.25 2.25 0 0018 6.75v-2.5A2.25 2.25 0 0015.75 2h-2.5zm0 9A2.25 2.25 0 0011 13.25v2.5A2.25 2.25 0 0013.25 18h2.5A2.25 2.25 0 0018 15.75v-2.5A2.25 2.25 0 0015.75 11h-2.5z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
            <button
              type="button"
              className="-m-2 ml-4 p-2 text-gray-400 hover:text-gray-500 sm:ml-6 lg:hidden"
            >
              <span className="sr-only">Filters</span>
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M2.628 1.601C5.028 1.206 7.49 1 10 1s4.973.206 7.372.601a.75.75 0 01.628.74v2.288a2.25 2.25 0 01-.659 1.59l-4.682 4.683a2.25 2.25 0 00-.659 1.59v3.037c0 .684-.31 1.33-.844 1.757l-1.937 1.55A.75.75 0 018 18.25v-5.757a2.25 2.25 0 00-.659-1.591L2.659 6.22A2.25 2.25 0 012 4.629V2.34a.75.75 0 01.628-.74z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
        <section aria-labelledby="products-heading" className="pb-24 pt-6">
          <h2 id="products-heading" className="sr-only">
            Products
          </h2>
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
            {/* Filters */}
            <form className="hidden lg:block">
              <h3 className="sr-only">Categories</h3>
              <ul
                role="list"
                className="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900"
              >
                <li>
                  <a className="flex items-center opacity-100" href="#"><span className="bg-[#00EAC1] w-2 h-2 rounded-full inline-block mr-1"></span>Ready-to-write Publications</a>
                </li>
                <li>
                  <a className="flex items-center opacity-50" href="#">Custom Built Publications</a>
                </li>
                <li>
                  <a className="flex items-center opacity-50" href="#">Bolt-on Services</a>
                </li>
              </ul>
              <div className="border-b border-gray-200 py-6">
                <h3 className="-my-3 flow-root">
                  {/* Expand/collapse section button */}
                  <button
                    type="button"
                    className="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500"
                    aria-controls="filter-section-0"
                    aria-expanded="false"
                  >
                    <span className="font-medium text-gray-900">Features</span>
                    <span className="ml-6 flex items-center">
                      {/* Expand icon, show/hide based on section open state. */}
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                      </svg>
                      {/* Collapse icon, show/hide based on section open state. */}
                      <svg
                        className="h-5 w-5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </button>
                </h3>
                {/* Filter section, show/hide based on section state. */}
                <div className="pt-6" id="filter-section-0">
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <input
                        id="filter-color-0"
                        name="color[]"
                        defaultValue="white"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-color-0"
                        className="ml-3 text-sm text-gray-600"
                      >
                        Ready-to-write
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="filter-color-1"
                        name="color[]"
                        defaultValue="beige"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-color-1"
                        className="ml-3 text-sm text-gray-600"
                      >
                        Mobile-first
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="filter-color-2"
                        name="color[]"
                        defaultValue="blue"
                        type="checkbox"
                        defaultChecked=""
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-color-2"
                        className="ml-3 text-sm text-gray-600"
                      >
                        Themes Available
                      </label>
                    </div>
                    <div className="flex items-center">
                      <input
                        id="filter-color-3"
                        name="color[]"
                        defaultValue="brown"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="filter-color-3"
                        className="ml-3 text-sm text-gray-600"
                      >
                        New
                      </label>
                    </div>
                    
                    
                  </div>
                </div>
              </div>


            </form>
            {/* Product grid */}
            <div className="lg:col-span-3">


            <FadeInStagger faster className="">

            <div className="space-y-10 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <FadeIn>
              <a href="#" className="group block">
                <div
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-[1/1.5] overflow-scroll no-scrollbar group-hover:scale-105 transition-all duration-300"
                >
                  <img
                    src={captureImage.src}
                    alt="Brown leather key ring with brass metal loops and rivets on wood table."
                    className="w-full"
                  />

                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <img
                    src={logoReprintBlack.src}
                    alt="Brown leather key ring with brass metal loops and rivets on wood table."
                    className="w-24 mt-6 mb-2"
                  />
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  A general purpose site perfect for tech, finance, security, gaming, politics and more.
                </p>
              </a>
              </FadeIn>
              <FadeIn>
              <a href="#" className="group block">
                <div
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-[1/1.5] overflow-scroll no-scrollbar group-hover:scale-105 transition-all duration-300 bg-slate-200"
                >
                  <img
                    src={capturePixels.src}
                    alt="Brown leather key ring with brass metal loops and rivets on wood table."
                    className="w-full opacity-50"
                  />

                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  <img
                    src={logoMatineeBlack.src}
                    alt="Brown leather key ring with brass metal loops and rivets on wood table."
                    className="w-24 mt-7 mb-3"
                  />
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  A business and news site for legal, entertainment, policy, opinion, and more.
                </p>
              </a>
              </FadeIn>
              <FadeIn>
              <a href="#" className="group block">
                <div
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-[1/1.5] overflow-scroll no-scrollbar group-hover:scale-105 transition-all duration-300 bg-slate-200"
                >
                  

                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  Coming soon
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Something else in mind? Get in touch today to make a reservation in our upcoming release rounds.
                </p>
              </a>
              </FadeIn>
            </div>
          </FadeInStagger>


        <Bolt />

        <FadeInStagger faster className="">

            <div className="space-y-10 mt-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
              <FadeIn>
              <a href="#" className="group block">
                <div
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-[1/1.5] overflow-scroll no-scrollbar group-hover:scale-105 transition-all duration-300 bg-slate-200"
                >
                  

                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  Coming soon
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Something else in mind? Get in touch today to make a reservation in our upcoming release rounds.
                </p>
              </a>
              </FadeIn>
              <FadeIn>
              <a href="#" className="group block">
                <div
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-[1/1.5] overflow-scroll no-scrollbar group-hover:scale-105 transition-all duration-300 bg-slate-200"
                >
                  

                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  Coming soon
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Something else in mind? Get in touch today to make a reservation in our upcoming release rounds.
                </p>
              </a>
              </FadeIn>
              <FadeIn>
              <a href="#" className="group block">
                <div
                  aria-hidden="true"
                  className="relative aspect-square md:aspect-[1/1.5] overflow-scroll no-scrollbar group-hover:scale-105 transition-all duration-300 bg-slate-200"
                >
                  

                </div>
                <h3 className="mt-4 text-base font-semibold text-gray-900">
                  Coming soon
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  Something else in mind? Get in touch today to make a reservation in our upcoming release rounds.
                </p>
              </a>
              </FadeIn>
            </div>
          </FadeInStagger>



            </div>
          </div>
        </section>
      </main>
    </div>
  </div>
</>


  )
}

export const metadata = {
  title: 'Pub Market - Newsroom',
  description:
    'Ready-to-write publications that just need journalists. Absolutely turnkey and ready to publish right now.',
    other: { "view-transition": "same-origin" }
}

export default function Process() {
  return (
    <>

      <Shop />

      <ContactSection />
    </>
  )
}
