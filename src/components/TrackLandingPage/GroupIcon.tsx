import { memo, SVGProps } from 'react';

const GroupIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M29.562 17.4609C29.0511 16.9392 28.4292 16.5392 27.7426 16.2907C27.0559 16.0422 26.3221 15.9516 25.5956 16.0256C24.8692 16.0996 24.1687 16.3362 23.5462 16.718C22.9237 17.0998 22.3952 17.6169 22 18.2309C21.6049 17.6167 21.0764 17.0995 20.4539 16.7176C19.8315 16.3357 19.1309 16.099 18.4044 16.025C17.6779 15.951 16.944 16.0417 16.2573 16.2903C15.5706 16.5389 14.9488 16.939 14.438 17.4609C13.5163 18.4035 13.0002 19.6695 13.0002 20.9879C13.0002 22.3063 13.5163 23.5722 14.438 24.5149L22 32.1999L29.564 24.5159C30.485 23.5726 31.0004 22.3064 31 20.988C30.9997 19.6696 30.4835 18.4037 29.562 17.4609V17.4609Z'
      fill='#D4D4D8'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M40 40H4C2.93913 40 1.92172 39.5786 1.17157 38.8284C0.421427 38.0783 0 37.0609 0 36V0H16L21 8H44V36C44 37.0609 43.5786 38.0783 42.8284 38.8284C42.0783 39.5786 41.0609 40 40 40Z'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GroupIcon);
export { Memo as GroupIcon };
