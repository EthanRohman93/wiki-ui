import React from 'react';
import styles from './wiki.module.css';

type WikiLayoutProps = {
  children: React.ReactNode;
};

const WikiLayout: React.FC<WikiLayoutProps> = ({ children }) => {
  return (
    <div className=styles.colorScheme}>
      <main className={styles.wikiContent}>
 p       {children}
      </main>
    </div>
  );
};

export default WikiLayout;

