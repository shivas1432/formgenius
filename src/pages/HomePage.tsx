import React from 'react';
import Layout from '../components/layout/Layout';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import Demo from '../components/home/Demo';
import Pricing from '../components/home/Pricing';

const HomePage: React.FC = () => {
  return (
    <Layout>
      <Hero />
      <Features />
      <Demo />
      <Pricing />
    </Layout>
  );
};

export default HomePage;