import * as React from 'react'

import Layout from '../components/layout'
import Seo from '../components/seo'
import Map from '../components/map'

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Map />
  </Layout>
)

export default IndexPage
