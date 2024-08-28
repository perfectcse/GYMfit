import React from "react";

const Hero = () => {
  return (
    <section style={styles.hero}>
      <div style={styles.overlay}>
        <div style={styles.content}>
          <div style={styles.title}>
            <h1 style={styles.titleLine}>LET'S</h1>
            <h1 style={styles.titleLine}>GET</h1>
            <h1 style={styles.titleLine}>MOVING</h1>
          </div>
          <div style={styles.subTitle}>
            <p style={styles.subTitleLine}>Your Journey to Fitness Starts Here</p>
            <p style={styles.subTitleLine}>Unleash Your Potential</p>
          </div>
          <div style={styles.buttons}>
            <button style={styles.button}>Start Your Journey</button>
            <button style={styles.buttonSecondary}>Discover Your Plan</button>
          </div>
        </div>
      </div>
    </section>
  );
};

const styles = {
  hero: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: 'url("/path-to-your-image.jpg")', // Replace with your image path
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
    color: '#fff',
    textAlign: 'center',
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Dark overlay for better text contrast
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    zIndex: 2, // Ensures content stays above the overlay
    maxWidth: '800px',
    padding: '20px',
  },
  title: {
    marginBottom: '20px',
  },
  titleLine: {
    margin: 0,
    fontSize: '4rem',
    letterSpacing: '5px',
    textShadow: '2px 2px 10px rgba(0, 0, 0, 0.7)', // Text shadow for added depth
  },
  subTitle: {
    marginBottom: '30px',
  },
  subTitleLine: {
    margin: '10px 0',
    fontSize: '1.5rem',
    fontWeight: '300',
    textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)', // Text shadow for subtitle
  },
  buttons: {
    display: 'flex',
    gap: '20px',
    justifyContent: 'center',
  },
  button: {
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#fff',
    backgroundColor: '#ff5722',
    border: 'none',
    borderRadius: '50px', // Rounded buttons for a modern look
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Button shadow for depth
  },
  buttonSecondary: {
    padding: '15px 30px',
    fontSize: '1rem',
    fontWeight: 'bold',
    color: '#ff5722',
    backgroundColor: 'transparent',
    border: '2px solid #ff5722',
    borderRadius: '50px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, color 0.3s ease',
    boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)', // Button shadow for depth
  },
};

export default Hero;
