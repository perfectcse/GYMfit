import React, { useState } from "react";
import { toast } from "react-toastify";

const BMICalculator = () => {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [gender, setGender] = useState("");
  const [bmi, setBmi] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();

    if (!height || !weight || !gender) {
      toast.error("Please enter valid height, weight and gender.");
      return;
    }

    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) {
      toast.warning(
        "You are underweight. Consider seeking advice from a healthcare provider."
      );
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      toast.success("You have a normal weight. Keep maintaining a healthy lifestyle.");
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      toast.warning(
        "You are overweight. Consider seeking advice from a healthcare provider."
      );
    } else {
      toast.error(
        "You are in the obese range. It is recommended to seek advice from a healthcare specialist."
      );
    }
  };

  return (
    <section style={styles.bmiSection}>
      <h1 style={styles.heading}>BMI Calculator</h1>
      <div style={styles.container}>
        <div style={styles.formWrapper}>
          <form onSubmit={calculateBMI} style={styles.form}>
            <div style={styles.formGroup}>
              <label style={styles.label}>Height (cm)</label>
              <input
                type="number"
                value={height}
                onChange={(e) => setHeight(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Weight (kg)</label>
              <input
                type="number"
                value={weight}
                onChange={(e) => setWeight(e.target.value)}
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label style={styles.label}>Gender</label>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                style={styles.select}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <button type="submit" style={styles.button}>
              Calculate BMI
            </button>
          </form>
          {bmi && (
            <div style={styles.result}>
              <h2>Your BMI: {bmi}</h2>
            </div>
          )}
        </div>
        <div style={styles.imageWrapper}>
          <img src="/bmi.jpg" alt="BMI Illustration" style={styles.image} />
        </div>
      </div>
    </section>
  );
};

const styles = {
  bmiSection: {
    backgroundColor: '#f5f7fa',
    padding: '50px 20px',
    fontFamily: "'Roboto', sans-serif",
  },
  heading: {
    fontSize: '2.5rem',
    textAlign: 'center',
    marginBottom: '30px',
    color: '#333',
    textTransform: 'uppercase',
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '50px',
    flexWrap: 'wrap',
  },
  formWrapper: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  formGroup: {
    display: 'flex',
    flexDirection: 'column',
  },
  label: {
    marginBottom: '10px',
    fontSize: '1rem',
    color: '#555',
  },
  input: {
    padding: '12px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  select: {
    padding: '12px 15px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '1rem',
    backgroundColor: '#fff',
  },
  button: {
    padding: '15px',
    borderRadius: '4px',
    border: 'none',
    backgroundColor: '#ff5722',
    color: '#fff',
    fontSize: '1.2rem',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
    textTransform: 'uppercase',
    letterSpacing: '1px',
  },
  buttonHover: {
    backgroundColor: '#e64a19',
  },
  result: {
    marginTop: '30px',
    textAlign: 'center',
    fontSize: '1.5rem',
    color: '#333',
  },
  imageWrapper: {
    maxWidth: '500px',
    width: '100%',
  },
  image: {
    width: '100%',
    height: 'auto',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
  },
};

export default BMICalculator;
