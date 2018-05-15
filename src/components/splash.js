import React from 'react';
import PropTypes from 'prop-types';
import Img from 'gatsby-image';
import Link from 'gatsby-link'

const Splash = ({
  data,
  splashImage,
  releaseDate,
  preOrderLink,
  callToAction,
  callToActionLink
}) => {

  const {
    splashWrapper,
    splashImageStyles,
    textContainerStyles,
    linkStyles
  } = styles;

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
      <div
        style={textContainerStyles}
      >
        <p
          css={{
            fontSize: '12px',
            fontFamily: 'Times New Roman',
            letterSpacing: '1.5px'
          }}
        >
          Available {releaseDate}
        </p>
        <a
          href={preOrderLink}
          target="_blank"
          css={linkStyles}
          >
            Pre-order
          </a>
        <a
          href={callToActionLink}
          target="_blank"
          css={linkStyles}
        >
          {callToAction}
        </a>
      </div>
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
  },
  textContainerStyles: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, 50%)',
    textAlign: 'center',
    color: 'white',
    'letterSpacing': '1px',
    textTransform: 'uppercase'
  },
  linkStyles: {
    display: 'block',
    position: 'relative',
    marginTop: '15px',
    color: 'white',
    fontFamily: 'Times New Roman',
    fontSize: '12px',
    textDecoration: 'none',
    '&:hover::after': {
      width: '100%'
    },
    '&:after': {
      position: 'absolute',
      bottom: '-2px',
      left: 0,
      content: ' ',
      width: 0,
      height: '2px',
      backgroundColor: 'white',
      transition: 'all .35s ease-in-out',
    }
  }
}

export default Splash;
