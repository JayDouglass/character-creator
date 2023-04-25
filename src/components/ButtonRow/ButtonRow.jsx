import React from 'react';

import styles from './ButtonRow.module.css';

const ButtonRow = ({ children }) => {
  return <div className={`${styles.buttonRow} whitespace-nowrap overflow-x-auto`}>{children}</div>;
};

export default ButtonRow;
