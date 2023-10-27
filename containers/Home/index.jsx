"use client"

import React from 'react'
import DefaulHeader from "@/components/template/header/DefaulHeader"
import DefaultFooter from '@/components/template/footer/DefaultFooter'
import MobileMenu from '@/components/template/header/MobileMenu'
import Hero11 from "@/components/template/hero/hero-11";
const HomeContainer = () => {
  return (
    <>
      <DefaulHeader />
      {/* End Header with upload cv btn */}

      <MobileMenu />
      {/* End MobileMenu */}

      <Hero11 />
      {/* End Hero Section */}


      <DefaultFooter/>

    </>
  )
}

export default HomeContainer
