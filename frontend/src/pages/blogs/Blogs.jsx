import React from 'react'
import PageHeader from '../../components/shared/PageHeader'
import { Helmet } from 'react-helmet'

const Blogs = () => {
  return (
    <div>
      <Helmet>
        <title>Furnito | Blogs</title>
      </Helmet>
      <PageHeader page='All Blogs'/>
    </div>
  )
}

export default Blogs