import { memo, SVGProps } from 'react';

const IconOutlineArrowRightIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 14 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.5 0.75L13.75 6M13.75 6L8.5 11.25M13.75 6L0.25 6'
      stroke='#F9FAFB'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(IconOutlineArrowRightIcon);
export { Memo as IconOutlineArrowRightIcon };
