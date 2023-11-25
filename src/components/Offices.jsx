import clsx from 'clsx'

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
        <Office name="Clark Wimberly" invert={invert}>
          Founder, Product<br />
          <a href="https://twitter.com/clarklab">@clarklab</a>
        </Office>
      </li>
      <li>
        <Office name="Angie Wimberly" invert={invert}>
          Founder, Design<br />
          <a href="https://twitter.com/angiedoes">@angiedoes</a>
        </Office>
      </li>
    </ul>
  )
}
