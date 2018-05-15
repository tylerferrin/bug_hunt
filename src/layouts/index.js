import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => {
  return (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Bug Hunt Record Label' },
        { name: 'keywords', content: 'Tender Loving Empire, records, vinyl, Portland, Oregon, record label' },
      ]}
    />
    <div>
      {children()}
    </div>
  </div>
);
}

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
