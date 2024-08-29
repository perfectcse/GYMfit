import React from "react";

const WorkoutSessions = () => {
  return (
    <section style={styles.workoutSession}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Top Workout Session</h1>
        <p style={styles.description}>
          Elevate your fitness with our premier workout sessions. 
          Designed for all levels, these sessions offer expert guidance, diverse workouts, and state-of-the-art equipment. 
          Experience a supportive community, flexible scheduling, and a fun, 
          results-driven approach to achieving your fitness goals!
        </p>
        <img src="/img5.jpg" alt="workout" style={styles.image} />
      </div>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Featured Bootcamps</h1>
        <p style={styles.description}>
        Discover our top-rated bootcamps designed to push your limits and achieve your fitness goals. 
        Each bootcamp offers intensive training, expert coaching, and a motivating environment to help you succeed.
         Choose the one that fits your needs and start your transformation today!
        </p>
        <div style={styles.bootcamps}>
          {bootcampData.map((bootcamp, index) => (
            <div key={index} style={styles.bootcamp}>
              <h4 style={styles.bootcampTitle}>{bootcamp.title}</h4>
              <p style={styles.bootcampDescription}>{bootcamp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const bootcampData = [
  {
    title: "Bootcamp 1",
    description:
      "Jumpstart your fitness journey with our beginner-friendly . Experience a mix of cardio, strength training, and flexibility exercises tailored to build a strong foundation. Perfect for those new to fitness or looking to get back on track.",
  },
  {
    title: "Bootcamp 2",
    description:
      "Elevate your workout with Bootcamp 2, designed for those seeking a challenging and dynamic fitness experience.",
  },
  {
    title: "Bootcamp 3",
    description:
      "Transform your fitness journey with Bootcamp 4, designed to challenge and inspire. This program includes high-intensity interval training (HIIT), strength conditioning, and endurance drills, perfect for pushing your limits and achieving significant results.",
  },
  {
    title: "Bootcamp 4",
    description:
      " This program features intense, varied workouts that incorporate functional training, plyometrics, and advanced strength exercises. Ideal for those looking to break through plateaus and achieve peak physical performance.",
  },
];

const styles = {
  workoutSession: {
    backgroundColor: '#f8f9fa',
    padding: '50px 20px',
  },
  wrapper: {
    maxWidth: '1200px',
    margin: '0 auto 50px auto',
    padding: '20px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    ':hover': {
      boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-5px)',
    },
  },
  heading: {
    fontSize: '2rem',
    marginBottom: '20px',
    textAlign: 'center',
    color: '#333',
  },
  description: {
    fontSize: '1rem',
    marginBottom: '30px',
    textAlign: 'center',
    color: '#555',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    transition: 'transform 0.3s ease',
    ':hover': {
      transform: 'scale(1.05)',
    },
  },
  bootcamps: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
    gap: '20px',
  },
  bootcamp: {
    backgroundColor: '#e9ecef',
    padding: '20px',
    borderRadius: '8px',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease, transform 0.3s ease',
    ':hover': {
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
      transform: 'translateY(-3px)',
    },
  },
  bootcampTitle: {
    fontSize: '1.25rem',
    marginBottom: '10px',
    color: '#333',
  },
  bootcampDescription: {
    fontSize: '1rem',
    color: '#555',
  },
};

export default WorkoutSessions;
