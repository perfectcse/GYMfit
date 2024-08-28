import React from "react";

const WorkoutSessions = () => {
  return (
    <section style={styles.workoutSession}>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Top Workout Session</h1>
        <p style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur,
          quisquam. Eaque alias, blanditiis quidem maiores illo unde ipsam!
        </p>
        <img src="/img5.jpg" alt="workout" style={styles.image} />
      </div>
      <div style={styles.wrapper}>
        <h1 style={styles.heading}>Featured Bootcamps</h1>
        <p style={styles.description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
          impedit quasi sunt amet rerum accusamus odio eveniet unde?
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
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe repellendus nemo sit facere ipsam!",
  },
  {
    title: "Bootcamp 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe repellendus nemo sit facere ipsam!",
  },
  {
    title: "Bootcamp 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe repellendus nemo sit facere ipsam!",
  },
  {
    title: "Bootcamp 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa saepe repellendus nemo sit facere ipsam!",
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
