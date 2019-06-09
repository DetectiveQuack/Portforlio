import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, Theme } from '@material-ui/core';
import { useTheme } from '@material-ui/styles';
import React from 'react';
import { IconButton } from '@material-ui/core';

interface Props {
  icon: IconDefinition;
  color?: string;
  href: string
}

const LinkIconButton: React.FC<Props> = ({ icon, color, href }) => {
  const theme: Theme = useTheme();

  return (
    <Link component={IconButton} rel="noopener" target="_blank" href={href}>
      <FontAwesomeIcon icon={icon} style={{ color: color || theme.palette.primary.contrastText }} />
    </Link>
  );
}

export default LinkIconButton;
