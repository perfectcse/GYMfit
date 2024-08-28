import React from "react";

const Gallery = () => {
  const gallery = [
    "/img1.webp",
    "/img2.jpg",
    "/img3.jpg",
    "/img4.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
  ];

  return (
    <section style={styles.gallerySection}>
      <h1 style={styles.heading}>Better Beats Best</h1>
      <div style={styles.gridContainer}>
        {gallery.map((src, index) => (
          <div key={index} style={styles.imageWrapper}>
            <img src={src} alt={`Gallery image ${index + 1}`} style={styles.image} />
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  gallerySection: {
    padding: '50px 20px',
    backgroundColor: '#f0f0f0',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    marginBottom: '40px',
    color: '#333',
    textTransform: 'uppercase',
    letterSpacing: '2px',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  imageWrapper: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '100%',
    height: 'auto',
    transition: 'transform 0.3s ease, filter 0.3s ease',
    borderRadius: '10px',
  },
  imageWrapperHover: {
    transform: 'scale(1.05)',
    filter: 'brightness(1.1)',
  },
};

export default Gallery;
