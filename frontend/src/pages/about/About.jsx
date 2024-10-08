import React from 'react'
import PageHeader from '../../components/shared/PageHeader'
import OurInfo from './OurInfo'
import OurStory from './OurStory'
import OurTeam from './OurTeam'
import ShopInfo from '../../components/shared/ShopInfo'
import { Helmet } from 'react-helmet'
const About = () => {
  return (
    <div>
      <Helmet>
        <title>Furnito | About us</title>
      </Helmet>
      <PageHeader page='About Us' />
      <OurInfo/>
      <OurStory/>
     <OurTeam/>
     <ShopInfo/>
    </div>
  )
}

export default About