import { memo, SVGProps } from 'react';

const Board21Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 40' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M40 0H0V40H40V0Z'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17 6H6V19H17V6Z'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M17 25H6V34H17V25Z'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M34 6H23V34H34V6Z'
      fill='#D4D4D8'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(Board21Icon);
export { Memo as Board21Icon };
