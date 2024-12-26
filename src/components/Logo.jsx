import logoImage from '@/images/logo.png';
import Image from 'next/image';

export function Logomark({ invert = false, filled = false, ...props }) {
  return (
    <Image src={logoImage} height={75} width={75} alt="Inside Pi Networks" />
  )
}

export function Logo() {
  return (
    <Image src={logoImage} height={75} width={75} alt="Inside Pi Networks" />
  )
}
