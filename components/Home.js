import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faUser, faLocationDot, faLinkedinIn } from '@fortawesome/free-solid-svg-icons';
import styles from '../styles/Home.module.css';
import Projects from './Projects';
import Experiences from './Experiences';
import About from './About';
import Contact from './Contact';
import { Link } from 'react-scroll';

//nextUI
import {Image} from "@nextui-org/image";

function Home() {


  return (
    <div>
      <main className={styles.main}>
        <div className={styles.header}>
            
            <div className={styles.photo}>
            <Image
              width={300}
              alt="Photo de profil"
              src="Photo-profil.png"

            />
            </div> 
        </div>
          

          <div className={styles.stickySection}>
            
            <div className={styles.divColumn}>
              <span>Développeuse web & mobile</span>
              <span className={styles.textBold}>Marion COUDREAU</span>
            </div>

          <div> 
            <button className={styles.buttonDark}>
              <Link
                activeClass="active"
                to="projets"
                spy={true}
                smooth={true}
                offset={-0}
                duration={500}
              >
                PROJETS
              </Link>
            </button>

            <button className={styles.buttonDark}>
              <Link
                activeClass="active"
                to="experiences"
                spy={true}
                smooth={true}
                offset={-0}
                duration={500}
              >
                EXPERIENCES
              </Link>
            </button>

            <button className={styles.buttonDark}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-0}
                duration={500}
              >
                ABOUT
              </Link>
            </button>

            <button className={styles.buttonDark}>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-0}
                duration={500}
              >
                CONTACT
              </Link>
            </button>


            </div>
          </div>
       

        <div id="projets"> <Projects /> </div>
        <div id="experiences"> <Experiences /> </div>
        <div id="about"> <About /> </div>
        <div id="contact"> <Contact /> </div>
        
      </main>
    </div>
  );
}

export default Home;
