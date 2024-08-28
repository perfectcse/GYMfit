import React from 'react';

const Footer = () => {
  return (
    <footer style={styles.footerContainer}>
      <p style={styles.footerText}>
        Designed and Developed by <a href="https://codewithzeeshu.com" style={styles.link} target="_blank" rel="noopener noreferrer">Vishal Mishra</a>
      </p>
    </footer>
  );
};

const styles = {
  footerContainer: {
    backgroundColor: '#282c34', // A dark background color for contrast
    padding: '20px',
    textAlign: 'center',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    color: 'white',
  },
  footerText: {
    margin: 0,
    fontSize: '14px',
  },
  link: {
    color: '#61dafb', // A color that stands out against the dark background
    textDecoration: 'none',
  },
};

export default Footer;
