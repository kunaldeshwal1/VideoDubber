'use client';

import Head from 'next/head';
import styled from 'styled-components';
import styles from './Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [upvotes, setUpvotes] = useState(19);
  const [isUpvoted, setIsUpvoted] = useState(false);

  const handleUpvote = () => {
    setUpvotes(isUpvoted ? upvotes - 1 : upvotes + 1);
    setIsUpvoted(!isUpvoted);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>VideoDubber - Fast Video Translator</title>
      </Head>

      <header className={styles.header}>
        <nav className="navigation">
          <ul className='navList' style={{ display: 'flex', flexDirection: 'row' }}>
            <li style={{ margin: '30px' }}>Launches</li>
            <li style={{ margin: '30px' }}>Products</li>
            <li style={{ margin: '30px' }}>News</li>
            <li style={{ margin: '30px' }}>Community</li>
            <li style={{ margin: '30px' }}>Advertise</li>
          </ul>
        </nav>
        <div className={styles.logo}></div>
        <div className={styles.search}>
          <input type="text" placeholder="Search ( ctrl + k )" />
        </div>
      </header>

      <div className={styles.onboarding}>
        <span>Hey there! Please, complete your onboarding.</span>
        <button>Complete onboarding</button>
      </div>

      <main className={styles.main}>
        <div className={styles.breadcrumb}>
          Home &gt; Product &gt; VideoDubber - Fast Video Translator
        </div>
        <div className={styles.product}>
          <div className={styles.icon}>
            <span role="img" aria-label="kiss">💋</span>
          </div>
          <div className={styles.info}>
            <h1>VideoDubber - Fast Video Translator</h1>
            <p>Translate videos in your own voice, globalize in a click!</p>
          </div>
          <div className={styles.actions}>
            <button className={styles.visit}>Visit</button>
            <StyledButton  onClick={handleUpvote} isUpvoted={isUpvoted}>
              {isUpvoted?"UPVOTED":"UPVOTE"} {upvotes}
            </StyledButton>
          </div>
        </div>
      </main>
    </div>
  );
}

const StyledButton = styled.button`
  width: 100%;
  min-width: 224px;
  padding: 20px;
  background-color: ${({ isUpvoted }) => (isUpvoted ?  'white':'#ff6154' )};
  color: ${({ isUpvoted }) => (isUpvoted ?'grey':'#fff' )};
  text-align: center;
  appearance: none;
  outline: none;
  border-radius: 4px;
  border: 1px solid transparent;
  position: relative;
  display: inline-block;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #ff4500;
  &:hover {
    background-color: ${({ isUpvoted }) => (isUpvoted ? '#ff7a69' : '#f0f0f0')};
    color: ${({ isUpvoted }) => (isUpvoted ? '#fff' : 'grey')};
  }
`;
