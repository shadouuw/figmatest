import { memo, SVGProps } from 'react';

const Headphones31Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 44 44' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M44 28V22C44 9.85 34.15 0 22 0C9.85 0 0 9.85 0 22V28'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M12 28H0V40C0 42.209 1.791 44 4 44H12V28Z'
      fill='#D4D4D8'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M44 28H32V44H40C42.209 44 44 42.209 44 40V28Z'
      fill='#D4D4D8'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(Headphones31Icon);
export { Memo as Headphones31Icon };
