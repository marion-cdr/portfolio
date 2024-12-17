
import { style } from 'framer-motion/client';
import styles from '../styles/About.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';




function About() {
  return (
  
    <div className={styles.main}>
        <div className={styles.mainTitle}>
            <span>Hi, I’m Marion. Nice to meet you 🙋🏻‍♀️</span>
        </div>

        <div className={styles.container}>
            <p>Je suis une développeuse web et mobile passionnée, 
              avec un parcours unique combinant 4 ans d'expérience dans la finance et une reconversion réussie dans le développement. 
              Après une formation intensive de 3 mois à La Capsule 🚀
              et un stage enrichissant de 6 mois en tant que développeuse frontend dans une startup 👩🏻‍💻, <br></br>
              je suis prête à relever de nouveaux défis. 
              </p>
              
              <p>Ce que j’aime, c’est apprendre en continu, relever des défis et concevoir de nouveaux projets.
              En dehors du code, je me passionne pour les voyages, la lecture et les découvertes, toujours en quête d’inspiration et de nouvelles expériences. 🌍
              </p>
            
        </div>
        <div className={styles.sourcesContainer}>
          <a href="https://www.linkedin.com/in/marion-coudreau-8845a6b7" target="_blank">
          <p>Mon CV </p> 
              <FontAwesomeIcon className={styles.icon} icon={faUserSecret}></FontAwesomeIcon>
          </a>
          <a href="hhttps://github.com/marion-cdr" target="_blank">
          <p>Mon Github </p> 
              <FontAwesomeIcon className={styles.icon} icon={faGithub}></FontAwesomeIcon>
          </a>
          <a href="https://www.linkedin.com/in/marion-coudreau-8845a6b7" target="_blank">
              <p>Mon Linkedin </p>  
              <FontAwesomeIcon className={styles.icon} icon={faLinkedin}></FontAwesomeIcon>
                
          </a>
        </div>

    </div>
  );
}

export default About;
