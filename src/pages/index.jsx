import React from 'react';
import Layout from '@theme/Layout';
import HeroSection from '../components/homepage/HeroSection';
import SDKsSection from '../components/homepage/SDKsSection';
import APIReferenceSection from '../components/homepage/APIReferenceSection';
import HomeFooter from '../components/homepage/HomeFooter';

export default function Homepage() {
  return (
    <Layout
      description="Direct purchases where consumers spend their time is the next evolution of online commerce."
      wrapperClassName="homepage"
      noFooter
    >
      <HeroSection />
      <SDKsSection />

      <div className="relative">
        <APIReferenceSection />
        <div className="absolute top-1/2 bottom-0 -z-10 w-full bg-secondary-800 dark:bg-secondary-900"></div>
        <div className="absolute top-0 bottom-1/2 -z-10 w-full bg-secondary-1000"></div>
      </div>

      <HomeFooter />
    </Layout>
  );
}
