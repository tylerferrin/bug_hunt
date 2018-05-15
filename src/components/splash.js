import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';

const Splash = ({ data, splashImage }) => {

  const { splashWrapper, splashImageStyles } = styles
  return (
    <div
      className="splash-wrapper"
      style={splashWrapper}
    >
      <Img
        title="Infinite Other"
        alt="Infinite Other Album Cover"
        sizes={splashImage.sizes}
        style={splashWrapper}
      />
    </div>
  );
}

Splash.propTypes = {

}

const styles = {
  splashWrapper: {
    width: '100%',
    height: '100vh'
  },
  splashImageStyles: {
    width: '100%',
    height: '100%'
  }
}

export default Splash;
