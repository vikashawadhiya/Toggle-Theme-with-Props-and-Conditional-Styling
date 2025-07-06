import React, { useState, useEffect } from 'react';
import ThemedBox from './ThemedBox';

const App = () => {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  const toggleTheme = () => {
    setTheme(prev => (prev === "light" ? "dark" : "light"));
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div
  style={{
    padding: '40px',
    textAlign: 'center',
    backgroundColor: theme === 'light' ? '#f5f5f5' : '#1a1a1a',
    minHeight: '100vh',
    transition: 'background-color 0.3s ease'
  }}
>
  <h1 style={{ color: theme === 'light' ? '#222' : '#eee' }}>
    Theme Toggle App
  </h1>
  <button
    onClick={toggleTheme}
    style={{
      padding: '10px 20px',
      margin: '20px 0',
      borderRadius: '8px',
      border: 'none',
      backgroundColor: theme === 'light' ? '#222' : '#eee',
      color: theme === 'light' ? '#fff' : '#222',
      cursor: 'pointer',
      transition: 'all 0.3s ease'
    }}
  >
    Switch to {theme === 'light' ? 'Dark' : 'Light'} Mode
  </button>

  <div
    style={{
      display: 'flex',
      justifyContent: 'center',
      gap: '20px',
      flexWrap: 'wrap',
      marginTop: '30px'
    }}
  >
    <ThemedBox theme={theme} />
    
    <ThemedBox theme={theme} />
  </div>
</div>
  );
};

export default App;
