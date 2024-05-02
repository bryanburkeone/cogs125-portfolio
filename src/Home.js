import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  const styles = {
    wrapper: {
      display: 'flex',
      flexDirection: 'column',
    },
    imageAndQuoteWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '15% 20%', 
    },
    navWrapper: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between', 
      alignItems: 'center', 
      padding: '10px 20px', 
    },
    navList: {
      listStyleType: 'none',
      margin: 0,
      padding: 0,
      overflow: 'hidden',
      display: 'flex', 
      alignItems: 'center', 
    },
    navItem: {
      marginLeft: '20px',
    },
    link: {
      textDecoration: 'none',
      color: 'black',
    },
    picture: {

    },
    quote: {
      fontSize: '24px', 
      fontWeight: 'bold' 
    },
    
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.navWrapper}>
        <div>Hi, I'm Bryan | A UX Designer.</div>
        <nav>
          <ul style={styles.navList}>
            <li style={styles.navItem}><Link to="/projects" style={styles.link}>Projects</Link></li>
            <li style={styles.navItem}><Link to="/about" style={styles.link}>About</Link></li>
            <li style={styles.navItem}><Link to="/contact" style={styles.link}>Contact</Link></li>
          </ul>
        </nav>
      </div>

      <div style={styles.imageAndQuoteWrapper}>
        <div style={styles.quote}> Im a gradutaing senior from <br /> UCSD majoring in Cognitive Science <br /> with a specializaiton in Design and Interaction</div> 

        <img src="./profile.jpg" alt="Profile Avatar" />

      </div>
    </div>
  );
}

export default Home;
