import { Check } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF-YEARLY",
      price: 34000,
      length: 6,
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
    },
  ];

  return (
    <section style={styles.pricingSection}>
      <h1 style={styles.heading}>ELITE EDGE FITNESS PLANS</h1>
      <div style={styles.wrapper}>
        {pricing.map((plan) => (
          <div style={styles.card} key={plan.title}>
            <img src={plan.imgUrl} alt={plan.title} style={styles.image} />
            <div style={styles.title}>
              <h2 style={styles.planTitle}>{plan.title} PACKAGE</h2>
              <h3 style={styles.price}>Rs {plan.price}</h3>
              <p style={styles.duration}>For {plan.length} Months</p>
            </div>
            <div style={styles.description}>
              <p style={styles.feature}>
                <Check style={styles.icon} /> Equipment
              </p>
              <p style={styles.feature}>
                <Check style={styles.icon} /> All Day Free Training
              </p>
              <p style={styles.feature}>
                <Check style={styles.icon} /> Free Restroom
              </p>
              <p style={styles.feature}>
                <Check style={styles.icon} /> 24/7 Skilled Support
              </p>
              <p style={styles.feature}>
                <Check style={styles.icon} /> 20 Days Freezing Option
              </p>
              <Link to={"/"} style={styles.joinLink}>
                Join Now
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const styles = {
  pricingSection: {
    padding: '50px 20px',
    backgroundColor: '#f4f4f4',
    textAlign: 'center',
  },
  heading: {
    fontSize: '2.5rem',
    color: '#333',
    marginBottom: '40px',
  },
  wrapper: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    flexWrap: 'wrap',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    maxWidth: '300px',
    transition: 'transform 0.3s ease',
  },
  cardHover: {
    transform: 'scale(1.05)',
  },
  image: {
    width: '100%',
    height: 'auto',
  },
  title: {
    padding: '20px',
    borderBottom: '1px solid #eaeaea',
  },
  planTitle: {
    fontSize: '1.8rem',
    color: '#007BFF',
    margin: 0,
  },
  price: {
    fontSize: '1.5rem',
    color: '#555',
    margin: '10px 0',
  },
  duration: {
    fontSize: '1rem',
    color: '#777',
  },
  description: {
    padding: '20px',
    textAlign: 'left',
  },
  feature: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '1rem',
    color: '#333',
    margin: '10px 0',
  },
  icon: {
    marginRight: '10px',
    color: '#28a745',
  },
  joinLink: {
    display: 'inline-block',
    marginTop: '20px',
    padding: '10px 20px',
    fontSize: '1.1rem',
    color: '#fff',
    backgroundColor: '#007BFF',
    borderRadius: '5px',
    textDecoration: 'none',
    textAlign: 'center',
    transition: 'background-color 0.3s ease',
  },
  joinLinkHover: {
    backgroundColor: '#0056b3',
  },
};

export default Pricing;
