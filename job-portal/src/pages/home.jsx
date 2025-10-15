import React from 'react';
import Header from '../components/HomePage/header/header';
import Main from '../components/HomePage/main';
import Footer from '../components/HomePage/footer';

const Home = () => {
    return (
        <div className='bg-[#2e2e2e] text-white h-screen'>
            <Header/>
            <Main/>
            <Footer/>
            
        </div>
    ); 
}

export default Home;
