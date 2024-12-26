import Link from 'next/link'
import clsx from 'clsx'
import Image from 'next/image';
import ximage from '@/images/logos/xLogo.png';

export function SocialMedia({ className, invert = false }) {
  return (
    <div
      className={clsx(
        'flex gap-x-10',
        invert ? 'text-white' : 'text-neutral-950',
        className,
      )}
    >
      <Link
        href="https://x.com/insidepicoin"
        className={clsx(
          'transition',
          invert ? 'hover:text-neutral-200' : 'hover:text-neutral-700',
        )}
      >
        <Image className="h-6 w-6 fill-current" height="50" width="50" src={ximage} alt="X Logo" />
      </Link>
    </div>
  )
}
