import { Link as MuiLink } from "@material-ui/core";
import React, { PropsWithChildren } from 'react';
import { Link } from "react-router-dom";

interface Props {
  to: string;
  text: string;
  underline?: 'none' | 'hover' | 'always';
  color?: string;
}

const RouterLink: React.FC<PropsWithChildren<Props>> = ({ to, text, underline }) => <MuiLink component={Link} to={to} underline={underline}>{text}</MuiLink>

export default RouterLink;
