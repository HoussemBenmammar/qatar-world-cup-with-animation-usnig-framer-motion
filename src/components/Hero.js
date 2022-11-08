import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import PlanetOne from '../images/qatarBall.png';
import PlanetTwo from '../images/qatarBall2.png';
import PlanetThree from '../images/qatarBall5.png';
import PlanetFour from '../images/qatarBall4.png';

const Section = styled.section`
  height: 100vh;
  display: flex;  
  justify-content: center;
  align-items: center;
  background: white;
  overflow-x: hidden;
  overflow-y: hidden;
`;



const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr ;
  height: 100vh;
  padding: 32rem calc((100vw - 1300px) / 2);
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  align-items: flex-start;
  padding: 5rem 2rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 3rem;
    color:#8a1538;
    font-family:Georgia, 'Times New Roman', Times, serif;
    font-weight: 900;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }

  

  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
    color:#8a1538;
    @media screen and (max-width: 768px) {
      font-size: 2rem;
    }
  }
`;

const Button = styled(motion.button)`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: #8a1538;
  color:white;
`;

const Image = styled(motion.img)`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 300px;
  max-height: 300px;
  min-height: 200px;
  min-width: 200px;
  @media screen and (max-width: 768px) {
    max-width: 200px;
  max-height: 200px;
  }
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }

  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }

  ${Image}:nth-child(3) {
    top: 350px;
    left: 140px;
  }

  ${Image}:nth-child(4) {
    bottom: 100px;
    right: 74px;
    @media screen and (max-width: 768px) {
      bottom: 20px;
      right: 50px;
    }
  }
  @media screen and (max-width: 768px) {
    grid-column-start: 1;
    grid-row-start: 1;
  }
`;
const CardWrapper = styled.div`
  height: 100vh;
  width: 500px;
  background-color: blueviolet;
  margin: 0 auto;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;

`
const ImageWrapper = styled.div`
  height: 200px;
  width: 300px;
  border-radius: 25px;
  background-color: greenyellow;
  margin: 30px  10px;
  box-shadow: 10px 10px 10px 10px rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;

`
const Title = styled.div`
 color: white;
 font-size: 1.5rem;
`
const SubTitle = styled.div`
color: white;

`

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div>
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
           Welcome to Qatar
            
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial='hidden'
            animate='visible'
            transition={{ duration: 1 }}
          >
            Fifa World Cup 2022
          </motion.p>
          <Button
            whileHover={{ scale: 1.3 }}
            whileTap={{
              scale: 0.95,
              backgroundColor: '#67F6E7',
              border: 'none',
              color: '#000'
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 3 } }}
          >
            Get Started
          </Button>
        </ColumnLeft>
        <ColumnRight>
          <Image
            src={PlanetOne}
            alt='planet'
            whileTap={{ scale: 0.9 }}
            drag={true}
            dragConstraints={{ left: 200, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetTwo}
            alt='planet'
            drag={true}
            dragConstraints={{ left: 100, right: 0, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          <Image
            src={PlanetThree}
            alt='planet'
            whileTap={{ scale: 0.8 }}
            drag={true}
            dragConstraints={{ left: 0, right: 250, top: 0, bottom: 50 }}
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0, transition: { duration: 1 } }}
          />
          
        </ColumnRight>
      </Container>
    </Section>
    </div>
    
  );
};

export default Hero;
