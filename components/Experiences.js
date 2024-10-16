import styles from '../styles/Experiences.module.css';

function Experiences() {
  







  return (
    <div className={styles.main}>
        <div className={styles.mainTitle}>
            <span>LAST EXPERIENCES</span>
        </div>

        <div className={styles.containerFormation}>
             <img className={styles.logoFormation} src="Logo-Capsule.png" alt="Logo" />
             <div className={styles.content}>
                <h3 className={styles.h3}>Bootcamp Développement web & mobile</h3>
                <div>Janvier 2024 - mars 2024 <br/>
                Titre RNCP de niveau 6 <br/>
                </div>
            </div>
             <div className={styles.content2}>
                <div>
                    <h4>Compétences techniques :</h4>
                   <ul>- Setup : outil de versionning Git. </ul>
                   <ul>- Frontend : JavaScript, HTML/CSS, Redux.</ul>
                   <ul>- Backend : NodeJS, Express.JS. </ul>
                   <ul>- Architecture SPA & mobile : React/native, Next.JS, Expo. </ul>
                   <ul>- Base de données : MongoDB. </ul>
                   <ul>- Déploiement : Vercel. </ul>
                </div>
                
            </div>
        </div>

        <div className={styles.containerExperience}>
                <img className={styles.logoExperience} src="Logo-Monoprix.png" alt="Logo" />
                <div className={styles.content}>
                    <h3 className={styles.h3}>Contrôleuse de gestion achat et marge</h3>
                    <div>Janvier 2020 - janvier 2024 <br/>
                    Contrat de 2 ans en alternance et de 2 ans en CDI. <br/>
                    </div>
                </div>
                <div className={styles.content2}>    
                    <div> 
                        <h4>Missions : </h4>
                        <ul> - Business Partner de la direction frais métier, </ul>
                        <ul> - Analyses et suivis des performances (CA, démarque,...) </ul>
                        <ul> - Présentations des résultats, clôtures mensuelles, </ul>
                        <ul> - Elaboration et suivi des budgets de frais, </ul>
                        <ul> - Management d’un stagiaire. </ul>
                    </div>
                </div>
                
            </div>
        </div>

    
  );
}

export default Experiences;
