function Home() {
    return (
      <div>
        <main className={styles.main}>
            
          {/* Section principale qui défile normalement */}
          <div className={styles.header}>
            <div className={styles.photo}>
              <Image width={300} alt="Photo de profil" src="Photo-profil.png" />
            </div>
            <div className={styles.divColumn}>
              <span>Développeuse web & mobile</span>
              <span className={styles.textBold}>Marion COUDREAU</span>
            </div>
          </div>
  
          {/* Cette section devient "sticky" quand elle atteint la fin de la page d'accueil */}
          <div className={styles.stickySection}>
            <button className={styles.buttonDark}>PROJETS</button>
            <button className={styles.buttonDark}>EXPERIENCES</button>
            <button className={styles.buttonDark}>ABOUT</button>
            <button className={styles.buttonDark}>CONTACT</button>
          </div>
  
          {/* Les autres sections défilent normalement */}
          <div id="projets">
            <Projects />
          </div>
          <div id="experiences">
            <Experiences />
          </div>
          <div id="about">
            <About />
          </div>
          <div id="contact">
            <Contact />
          </div>
        </main>
      </div>
    );
  }
  
  export default Home;
  