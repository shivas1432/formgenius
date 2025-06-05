import React from 'react';
import Layout from '../components/layout/Layout';
import Pricing from '../components/home/Pricing';

const PricingPage: React.FC = () => {
  return (
    <Layout>
      <div className="pt-12 pb-6">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Pricing Plans</h1>
          <p className="text-gray-600 mt-2">
            Choose the perfect plan for your form-building needs
          </p>
        </div>
      </div>
      <Pricing />
    </Layout>
  );
};

export default PricingPage;