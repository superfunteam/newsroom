import clsx from 'clsx'
import Image from 'next/image'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import hedcutClark from '@/images/hedcut-clark-on-white.png'
import hedcutAngie from '@/images/hedcut-angie-on-white.png'
import hedcutClarkInverted from '@/images/hedcut-clark.png'
import hedcutAngieInverted from '@/images/hedcut-angie.png'


function Office({ name, children, invert = false }) {
  return (
    <address
      className={clsx(
        'text-sm not-italic',
        invert ? 'text-neutral-300' : 'text-neutral-600',
      )}
    >
      <strong className={invert ? 'text-white' : 'text-neutral-950'}>
        {name}
      </strong>
      <br />
      {children}
    </address>
  )
}

export function Offices({ invert = false, ...props }) {
  return (
    <ul role="list" {...props}>
      <li>
        <Image
                src={invert ? hedcutClarkInverted : hedcutClark}
                className="w-48 mb-4"
              />
        <Office name="Clark Wimberly" invert={invert}>
          Founder, Product<br />
          <a href="https://twitter.com/clarklab">@clarklab</a>
        </Office>
      </li>
      <li>
      <Image
                src={invert ? hedcutAngieInverted : hedcutAngie}
                className="w-48 mb-4"
              />
        <Office name="Angie Wimberly" invert={invert}>
          Founder, Design<br />
          <a href="https://twitter.com/angiedoes">@angiedoes</a>
        </Office>
      </li>
    </ul>
  )
}
