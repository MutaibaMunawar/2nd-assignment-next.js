// pages/about.js

import Head from 'next/head';
import styles from '../styles/About.module.css';

const About = () => {
  return (
    <>
      <Head>
        <title className='text-xs'>About Us - Fitness Club</title>
        <meta name="description" content="Learn more about our fitness club and our mission to help you achieve your health goals." />
      </Head>
      <div className={styles.container}>
        <h1 className={styles.abttitle}>About Us</h1>
        <div className={styles.content}>
          <div className={styles.textbox}>
            <p>
              Welcome to 'Fitness Club', where we believe in empowering individuals to achieve their fitness goals. 
              Our club offers a supportive and motivating environment, with state-of-the-art facilities and a variety of classes to suit every fitness level.
            </p>
            <h2 className={styles.sub}>Our Mission</h2>
            <p>
              Our mission is to provide a welcoming community that inspires and motivates our members to lead healthier, happier lives. 
              We are committed to helping you discover your potential through fitness.
            </p>
            <h2 className={styles.sub}>What We Offer</h2>
            <ul className={styles.list}>
              <li>Personal Training</li>
              <li>Group Classes</li>
              <li>Nutrition Counseling</li>
              <li>State-of-the-art Equipment</li>
              <li>Wellness Programs</li>
            </ul>
            <h2 className={styles.sub}>Join Us</h2>
            <p>
              Whether you are a beginner or a seasoned athlete, we have something for everyone. Join our fitness family today and start your journey towards a healthier you!
            </p>
          </div>
      
        </div>
      </div>
    </>
  );
};

export default About;
