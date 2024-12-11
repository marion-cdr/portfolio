import { useState } from 'react';
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Image from 'next/image';
import Typography from "@mui/material/Typography";

import styles from '../styles/Experiences.module.css';


function Experiences() {
  
    const [isOpen, setIsOpen] = useState(false);

    const handleClose = () => {
      setIsOpen(false);
    };
  
    const handleOpen = () => {
      setIsOpen(true);
    };


    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: 500,
        bgcolor: "background.paper",
        border: "1px solid grey",
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
        outline: "none",
      };


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
                <Button variant="contained" color="primary" onClick={handleOpen}>
                    Voir le diplôme
                    </Button>
                </div> <br/>

            <Modal
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="diploma-modal-title"
                aria-describedby="diploma-modal-description"
            >
                <Box sx={style}>
                <div className={styles.modalHeader}>
                    <Typography id="diploma-modal-title" variant="h6" component="h2">
                    Diplôme
                    </Typography>
                    <Button onClick={handleClose} className={styles.closeButton}>✖</Button>
                </div>
                <Image
                    src="/diplome_lacapsule.pdf"
                    alt="Diplôme"
                    width={400}
                    height={500}
                    className={styles.diplomaImage}
                />
                </Box>
            </Modal>

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
