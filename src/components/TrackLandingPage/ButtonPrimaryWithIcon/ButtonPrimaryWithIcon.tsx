import { memo } from 'react';
import type { FC, ReactNode } from 'react';

import resets from '../../_resets.module.css';
import { IconOutlineArrowRight } from '../IconOutlineArrowRight/IconOutlineArrowRight';
import classes from './ButtonPrimaryWithIcon.module.css';
import { IconOutlineArrowRightIcon } from './IconOutlineArrowRightIcon.js';

interface Props {
  className?: string;
  classes?: {
    root?: string;
  };
  hide?: {
    icon?: boolean;
  };
  text?: {
    buttonName?: ReactNode;
  };
}
/* @figmaId 1:2 */
export const ButtonPrimaryWithIcon: FC<Props> = memo(function ButtonPrimaryWithIcon(props = {}) {
  return (
    <button
      className={`${resets.storybrainResets} ${props.classes?.root || ''} ${props.className || ''} ${classes.root}`}
    >
      <div className={classes.frame1}>
        {props.text?.buttonName != null ? (
          props.text?.buttonName
        ) : (
          <div className={classes.buttonName}>Button name</div>
        )}
        {!props.hide?.icon && (
          <div className={classes.icon2}>
            <IconOutlineArrowRight
              className={classes.iconOutlineArrowRight}
              swap={{
                icon: <IconOutlineArrowRightIcon className={classes.icon} />,
              }}
            />
          </div>
        )}
      </div>
    </button>
  );
});
