import React from 'react'
import MainHome from '../components/Home/mainHome'
import Section from '../components/Home/Section'
import CauseForFund from '../components/Home/CauseForFund'
import WhyStarted from '../components/Home/WhyStarted'

function Home() {
  return (
    <div>
      <MainHome/>
      <Section/>
      <CauseForFund/>
      <WhyStarted/>
    </div>
  )
}

export default Home
