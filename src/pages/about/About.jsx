import React from 'react'
import PageHeader from '../../components/shared/PageHeader'
import OurInfo from './OurInfo'
import OurStory from './OurStory'
import OurTeam from './OurTeam'
const About = () => {
  return (
    <div>
      <PageHeader page='About Us' />
      <OurInfo/>
      <OurStory/>
     <OurTeam/>
    </div>
  )
}

export default About