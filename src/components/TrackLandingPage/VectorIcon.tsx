import { memo, SVGProps } from 'react';

const VectorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 12 12' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M6 12C2.6863 12 0 9.3137 0 6C0 2.6863 2.6863 0 6 0C9.3137 0 12 2.6863 12 6C12 9.3137 9.3137 12 6 12Z'
      fill='#1901F3'
    />
  </svg>
);
const Memo = memo(VectorIcon);
export { Memo as VectorIcon };
