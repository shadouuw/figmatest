import { memo, SVGProps } from 'react';

const ArchiveContent1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 40 41' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M8.66667 24H5C2.23858 24 0 26.2386 0 29V36C0 38.7614 2.23858 41 5 41H35C37.7614 41 40 38.7614 40 36V29C40 26.2386 37.7614 24 35 24H30.8333C29.2685 24 28 25.2685 28 26.8333C28 28.3981 26.7315 29.6667 25.1667 29.6667H14.3333C12.7685 29.6667 11.5 28.3981 11.5 26.8333C11.5 25.2685 10.2315 24 8.66667 24Z'
      fill='#D4D4D8'
    />
    <path
      d='M8 8H32'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M8 16H32'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M0 24H12V30H28V24H40'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <path
      d='M36 0H4C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 1.79086 38.2091 0 36 0Z'
      stroke='#161616'
      strokeWidth={2}
      strokeMiterlimit={10}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ArchiveContent1Icon);
export { Memo as ArchiveContent1Icon };
