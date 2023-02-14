import './App.css';

import React from 'react';

import FeatureOne from './components/FeatureOne';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

const App = () => {
    return (
        <div className="home">
            <Header />
            <HeroSection />
            <FeatureOne />
        </div>
    );
}

export default App;
