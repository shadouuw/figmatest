import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 252 252' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle cx={125.575} cy={125.575} r={125.575} fill='#E2E8F0' stroke='white' strokeWidth={11} />
  </svg>
);
const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
