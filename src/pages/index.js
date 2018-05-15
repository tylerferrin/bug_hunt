import React, { Component } from 'react'
import Link from 'gatsby-link'
import Splash from '../components/Splash'

class IndexPage extends Component {
  constructor() {
    super()
    this.state = {
      displaySplash: true
    }
  }

  renderSplash() {
    const { splashImage } = this.props.data;

    if (this.state.displaySplash) {
      return (
        <div
          css={{
            margin: '2vh 1vw',
            height: '96vh',
            width: '98vw',
            position: 'relative'
          }}
        >
          <Splash
            splashImage={splashImage}
            releaseDate="12'' / DIGITAL | 07.20.18"
            preOrderLink="http://music.thefourthwallband.com/"
            callToAction="Listen to the first single 'Circular Ruins'"
            callToActionLink="/"
          />
        </div>
      );
    }
  }


  render() {

    return (
      <div>
        {this.renderSplash()}
      </div>
    );
  }
}

export default IndexPage;

export const splashQuery = graphql`
  query SplashImageQuery {
    splashImage: imageSharp(id: { regex: "/io_splash/" }) {
      sizes(maxWidth: 1500 ) {
        ...GatsbyImageSharpSizes
      }
    }
  }
`
