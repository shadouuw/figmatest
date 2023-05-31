import { memo, SVGProps } from 'react';

const UnionIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 186 91' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M19 0C8.50659 0 0 8.50659 0 19V61C0 71.4934 8.50659 80 19 80H85.5502C85.6141 80.0784 85.6854 80.154 85.7642 80.2261L96.2006 89.7664C96.9646 90.4648 98.1354 90.4648 98.8994 89.7663L109.336 80.2261C109.415 80.154 109.486 80.0784 109.55 80H166.1C176.593 80 185.1 71.4934 185.1 61V19C185.1 8.50659 176.593 0 166.1 0H19Z'
      fill='white'
      fillOpacity={0.85}
    />
  </svg>
);
const Memo = memo(UnionIcon);
export { Memo as UnionIcon };
