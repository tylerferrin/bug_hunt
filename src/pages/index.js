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
        <Splash
          splashImage={splashImage}
          releaseDate="07.20.18"
          preOrderLink="http://music.thefourthwallband.com/"
          callToAction="Listen to the first single 'Circular Ruins'"
          callToActionLink="/"
        />
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
