import React from 'react';
import Layout from './components/layout/Layout';
import Hero from './components/home/Hero';
import Features from './components/home/Features';
import Demo from './components/home/Demo';
import Pricing from './components/home/Pricing';
import FormBuilder from './components/builder/FormBuilder';

function App() {
  // Update the document title
  React.useEffect(() => {
    const defaultTitle = document.querySelector('title[data-default]')?.textContent;
    document.title = 'FormGenius - AI Form Builder';
    
    return () => {
      if (defaultTitle) document.title = defaultTitle;
    };
  }, []);

  return (
    <Layout>
      <Hero />
      <FormBuilder />
      <Features />
      <Demo />
      <Pricing />
    </Layout>
  );
}

export default App;