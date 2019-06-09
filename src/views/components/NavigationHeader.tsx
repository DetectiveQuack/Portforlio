import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { AppBar, Toolbar, Typography } from '@material-ui/core';
import ElevationScroll from 'components/ElevationScroll';
import LinkIconButton from 'components/LinkIconButton';
import RouterLink from 'components/RouterLink';
import React from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps, withRouter } from 'react-router-dom';

const mapStateToProps = (state: any) => state.get('router').toJS();

const NavigationHeader: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <>
      <ElevationScroll>
        <AppBar>
          <Toolbar>
            <Typography style={{ flex: '0 1 auto', textTransform: 'uppercase' }} variant="h6">Home</Typography>
            <div style={{ flex: '1 1 auto' }}></div>
            <RouterLink to="/contact" text="contact" color="textPrimary" underline={location.pathname === '/contact' ? 'always' : 'hover' } />
            <LinkIconButton icon={faGithub} href={'https://github.com/ssoobratty'} />
            <LinkIconButton icon={faLinkedin} href={'https://www.linkedin.com/in/saffaanh-soobratty-b9a07871/'} />
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <Toolbar />
    </>
  );
}

export default withRouter(connect(mapStateToProps)(NavigationHeader) as any);
