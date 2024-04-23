import React from 'react';
import styles from './wiki.module.css';

type WikiLayoutProps = {
  children: React.ReactNode;
};

const WikiLayout: React.FC<WikiLayoutProps> = ({ children }) => {
  return (
    <div className={styles.wikiContainer}>
      <main className={styles.wikiContent}>
        {children}
      </main>
    </div>
  );
};

export default WikiLayout;

