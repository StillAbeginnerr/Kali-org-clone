import React from 'react'
import Header from './../components/Header/index';
import ContainerOne from './../components/Container-1/index';
import Footer from '../components/Footer';
import ContainerTwo from './../components/Container-2/index';
import ContainerThree from '../components/Container-3';
import ContainerFour from '../components/Container-4';
import ConatinerFive from '../components/Container-5';
import ConatinerSix from '../components/Container-6';

const Home = () => {
  return (
    <div>
        <Header></Header>
        <ContainerOne></ContainerOne>
        <ContainerTwo></ContainerTwo>
        <ContainerThree></ContainerThree>
        <ContainerFour></ContainerFour>
        <ConatinerFive></ConatinerFive>
        <ConatinerSix></ConatinerSix>
        <Footer></Footer>
        </div>
  )
}

export default Home