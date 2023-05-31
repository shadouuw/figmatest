import { memo, SVGProps } from 'react';

const Ellipse45Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1388 3263' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse
      cx={694}
      cy={1631.5}
      rx={693.589}
      ry={1631.35}
      stroke='#9489F2'
      strokeOpacity={0.12}
      strokeWidth={5}
      strokeDasharray='20 20'
    />
  </svg>
);
const Memo = memo(Ellipse45Icon);
export { Memo as Ellipse45Icon };
