import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import React, { PropsWithChildren } from 'react';

const ElevationScroll: React.FC<PropsWithChildren<{}>> = ({ children }) => {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
    target: window
  });

  return React.cloneElement(children as React.ReactElement<any>, {
    elevation: trigger ? 4 : 0
  });
}
export default ElevationScroll;
