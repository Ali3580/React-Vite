import { useEffect } from 'react';
import HeroSection from './Components/HeroSection';
import { useGlobalContext } from './Context';
import Services from './Services';
import Contact from './Contact';
import "./App.css";
import Search from './Search';
import Pagination from './Pagination';


const Home = () => {


  const { updateHomePage} = useGlobalContext();
  useEffect(()=> updateHomePage(), []);
  return (
    <>
    <HeroSection/>
    {/* <Search/>
    <Pagination/> */}
    <Services/>
    <Contact/>
    </>
  );
};

export default Home;