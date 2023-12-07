import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <span></span>
  )
}

export function Logo({
  className,
  invert = true,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      width="132"
      viewBox="0 0 90 12"
      aria-hidden="true"
      className={clsx(
              'logo group',
              invert ? 'border-red-400' : 'text-center',
            )}
      {...props}
    >
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M77.0865 10.8647V3.61164H79.008L79.0757 4.92422H79.1569C79.5222 3.96346 80.4018 3.47632 81.3761 3.47632C82.391 3.47632 83.2841 3.90934 83.6765 5.10013H83.7847C84.123 4.01759 85.0838 3.47632 86.1799 3.47632C87.5737 3.47632 88.6562 4.30176 88.6562 6.48038V10.8647H86.667V6.9134C86.667 5.69553 86.2881 5.10013 85.3815 5.10013C84.4207 5.10013 83.8659 5.91204 83.8659 6.8322V10.8647H81.8768V6.9134C81.8768 5.69553 81.4843 5.10013 80.5912 5.10013C79.617 5.10013 79.0757 5.91204 79.0757 6.8322V10.8647H77.0865Z" fill="black"/>
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M72.193 10.9865C70.0143 10.9865 68.5529 9.59269 68.5529 7.23816C68.5529 4.99188 69.8926 3.47632 72.193 3.47632C74.3581 3.47632 75.8195 4.88363 75.8195 7.23816C75.8195 9.48444 74.4798 10.9865 72.193 10.9865ZM72.1794 9.37618C73.1537 9.37618 73.8033 8.68606 73.8033 7.23816C73.8033 5.80379 73.1808 5.10013 72.193 5.10013C71.2051 5.10013 70.5556 5.79026 70.5556 7.23816C70.5556 8.67253 71.1916 9.37618 72.1794 9.37618Z" fill="black"/>
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M63.9602 10.9865C61.7816 10.9865 60.3202 9.59269 60.3202 7.23816C60.3202 4.99188 61.6598 3.47632 63.9602 3.47632C66.1253 3.47632 67.5868 4.88363 67.5868 7.23816C67.5868 9.48444 66.2471 10.9865 63.9602 10.9865ZM63.9467 9.37618C64.921 9.37618 65.5705 8.68606 65.5705 7.23816C65.5705 5.80379 64.9481 5.10013 63.9602 5.10013C62.9724 5.10013 62.3229 5.79026 62.3229 7.23816C62.3229 8.67253 62.9589 9.37618 63.9467 9.37618Z" fill="black"/>
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M55.4806 10.8647V3.61164H57.2803L57.3615 4.77538H57.4291C57.7539 3.84168 58.5117 3.51692 59.4318 3.51692H59.8378V5.38431H59.3912C58.0516 5.38431 57.4968 5.99324 57.4697 7.07578V10.8647H55.4806Z" fill="black"/>
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M50.8576 11C48.7466 11 47.5558 10.0257 47.5693 8.57781H49.5179C49.5314 9.34912 50.1268 9.66035 50.9117 9.66035C51.7236 9.66035 52.1431 9.36265 52.1431 8.87551C52.1431 8.21245 51.683 8.11773 50.6546 7.96888C49.0443 7.75237 47.7588 7.37348 47.7588 5.77672C47.7588 4.24763 49.0308 3.47632 50.9252 3.47632C52.7791 3.47632 53.9563 4.32882 53.9969 5.76319H52.0484C52.0484 5.15426 51.5883 4.81597 50.8711 4.81597C50.1268 4.81597 49.7479 5.1272 49.7479 5.57375C49.7479 6.11502 50.208 6.2774 51.277 6.41272C52.7791 6.6157 54.1458 6.9134 54.1458 8.68606C54.1458 10.2828 52.9009 11 50.8576 11Z" fill="black"/>
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M38.3237 10.8647L36.5917 3.61164H38.6485L39.7716 8.87551H39.8528L40.8812 3.61164H43.0463L44.0747 8.90258H44.1289L45.2655 3.61164H47.2412L45.4956 10.8647H42.8975L41.9097 6.14209H41.842L40.8812 10.8647H38.3237Z" fill="black"/>
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M32.8127 10.9865C30.5393 10.9865 29.1997 9.5115 29.1997 7.29229C29.1997 4.95128 30.5935 3.47632 32.745 3.47632C35.2619 3.47632 36.4527 5.27605 36.2092 7.68471H31.1618C31.1483 8.83491 31.8113 9.48444 32.8127 9.48444C33.5705 9.48444 34.1388 9.11908 34.2877 8.56428H36.1686C35.9791 10.0257 34.6395 10.9865 32.8127 10.9865ZM32.745 4.97835C31.8384 4.97835 31.2565 5.53315 31.1753 6.41272H34.2606C34.2065 5.45196 33.5705 4.97835 32.745 4.97835Z" fill="black"/>
      <path className={clsx(
              'path',
              invert ? 'fill-white' : 'text-center',
            )} d="M19 10.8647V1H21.5169L25.6712 7.96888H25.7659L25.6847 4.81597V1H27.7145V10.8647H25.3329L21.1786 4.04466H21.0839L21.138 6.89987V10.8647H19Z" fill="black"/>
      <path className={clsx(
              'path group-hover:fill-[#00EAC1] transition',
              invert ? 'fill-white' : 'text-center',
            )} fill-rule="evenodd" clip-rule="evenodd" d="M12 0H0V12H12V0ZM6 8C7.10457 8 8 7.10457 8 6C8 4.89543 7.10457 4 6 4C4.89543 4 4 4.89543 4 6C4 7.10457 4.89543 8 6 8Z" fill="black"/>

    </svg>
  )
}


