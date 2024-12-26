import { useId } from 'react'
import clsx from 'clsx'
import logoImage from '@/images/logo.png';
import Image from 'next/image';

export function Logomark({ invert = false, filled = false, ...props }) {
  let id = useId()

  return (
    <Image src={logoImage} height={75} width={75} alt="Inside Pi Networks" />
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}) {
  return (
    <svg
      viewBox="0 0 130 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <p>Inside Pi Network</p>
    </svg>
  )
}
