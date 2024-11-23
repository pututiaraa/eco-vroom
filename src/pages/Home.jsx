import React from 'react';
import NavigationBar from '../component/NavigationBar.jsx';
import Banner from './Banner.jsx';
import About from './About.jsx';
import Products from './Products.jsx';
import Faq from './Faq.jsx';
import Footer from '../component/Footer';
import Branch from '../component/Branch.jsx';


const Home = () => {
  return (
    <>
    <div className="home">
        <NavigationBar />
        <Banner />
        <About />
        <Products />
        <Faq />
        <Branch />
    </div>
    <Footer />
    </>
  )
}

export default Home;