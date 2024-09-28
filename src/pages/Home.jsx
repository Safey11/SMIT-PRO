import React from 'react'
import HomeServices from '../component/HomeServices'
import AppHero from '../component/hero'
import AppReview from '../component/Review'
import Sponsors from '../component/Sponsers'
import WhatWeWorkOn from '../component/skills'
import AppWork from '../component/work'
import HomeTeam from '../component/HomeTeam'
import AppContact from '../component/HomeContact'
const Home = () => {
  return (
    <>
      <div>
        <AppHero />
      </div>
      <div>
        <HomeServices />
      </div>
      <div>
        <AppReview />
      </div>
      <div>
        <Sponsors />
      </div>
      <div>
        <WhatWeWorkOn />
      </div>
      <div>
        <AppWork />
      </div>
      <div>
        <HomeTeam />
      </div>
      <div>
        <AppContact />
      </div>
    </>
  )
}

export default Home;