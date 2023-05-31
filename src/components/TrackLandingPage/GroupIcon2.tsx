import { memo, SVGProps } from 'react';

const GroupIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 42 42' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M24 6C33.941 6 42 14.059 42 24C42 33.941 33.941 42 24 42C14.059 42 6 33.941 6 24'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M18 0C8.059 0 0 8.059 0 18H18V0Z'
      fill='#D4D4D8'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(GroupIcon2);
export { Memo as GroupIcon2 };
