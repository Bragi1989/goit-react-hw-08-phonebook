import React from 'react';
const styles = {
  container: {
    paddingTop: 84,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 700,
    fontSize: 58,
    textAlign: 'center',
    color: 'red',
    },
};

const HomePage = () => {
  return (
    <div>
      <div style={styles.container}>
        <h1 style={styles.title}>
          Welcome to the Phone Book app.<br />
          We are very glad to see you!{' '}
        </h1>
      </div>
    </div>
  );
};

export default HomePage;
