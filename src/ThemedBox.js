import React from 'react';

const ThemedBox = ({ theme }) => {
  const styles = {
    width: '180px',
    height: '180px',
    backgroundColor: theme === 'light' ? '#fff' : '#333',
    color: theme === 'light' ? '#000' : '#fff',
    border: theme === 'light' ? '1px solid #ccc' : '1px solid #666',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: '12px',
    boxShadow: theme === 'light'
      ? '0 4px 8px rgba(0, 0, 0, 0.1)'
      : '0 4px 12px rgba(255, 255, 255, 0.05)',
    transition: 'all 0.3s ease',
    fontWeight: 'bold'
  };

  return <div style={styles}>This is {theme} mode</div>;
};

export default ThemedBox;
