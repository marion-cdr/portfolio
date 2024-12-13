import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import Image from "next/image";

import styles from "../styles/Experiences.module.css";

function Experiences() {
    const [isOpen, setIsOpen] = useState(false);
    const [currentDiploma, setCurrentDiploma] = useState(null);

    const handleClose = () => {
        setIsOpen(false);
        setCurrentDiploma(null);
    };

    const handleOpen = (diplomaImage) => {
        setCurrentDiploma(diplomaImage);
        setIsOpen(true);
    };

    const style = {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        width: "auto",
        maxWidth: "90%",
        bgcolor: "background.paper",
        border: "1px solid grey",
        borderRadius: 3,
        boxShadow: 24,
        p: 4,
    };

    const experiencesTab = [
        {
            title: "Développeuse web frontend",
            period: "Mai 2024 - Octobre 2024",
            description: "Stage de 6 mois en start-up",
            logo: "Logo-Gottaphish.png",
            titleMission : "Missions :",
            missions: [
                "Refonte du site internet",
                "Création des visuels sur Figma",
                "Maintenance de la partie Wordpress",
                "Création des reporting financier",
            ],
        },
        {
            title: "Bootcamp Développement web & mobile",
            period: "Janvier 2024 - Mars 2024",
            description: "Titre RNCP de niveau 6",
            logo: "Logo-Capsule.png",
            titleMission : "Compétences techniques :",
            diplomaImage: "/diplome_lacapsule.png",
            missions: [
                "Setup : outil de versionning Git",
                "Frontend : JavaScript, HTML/CSS, Redux",
                "Backend : NodeJS, Express.JS",
                "Architecture SPA & mobile : React/native, Next.JS, Expo",
                "Base de données : MongoDB",
                "Déploiement : Vercel",
            ],
        },
        {
            title: "Contrôleuse de gestion achat et marge",
            period: "Janvier 2020 - Janvier 2024",
            description: `Contrat de 2 ans en alternance et de 2 ans en CDI.`,
            logo: "Logo-Monoprix.png",
            titleMission : "Missions :",
            missions: [
                "Business Partner de la direction frais métier",
                "Analyses et suivis des performances (CA, démarque,...)",
                "Présentations des résultats, clôtures mensuelles",
                "Elaboration et suivi des budgets de frais",
                "Management d’un stagiaire",
            ],
        },
        {
            title: "Burgundy School of Business",
            period: "Septembre 2017 - Décembre 2022",
            description: "Spécialité contrôle financier",
            logo: "Logo-BSB.png",
            diplomaImage: "/diplome_lacapsule.png",
            titleMission : "Compétences techniques :",
            missions: [
                "Controle de gestion",
                "Controle financier",
                "Marketing",
                "Droit des entreprises",
            ],
        },
       
    ];

    return (
        <div className={styles.main}>
            <div className={styles.mainTitle}>
                <span>LAST EXPERIENCES</span>
            </div>

            <div className={styles.mainBackground}>
            {experiencesTab.map((experience, index) => (
                <div key={index} className={styles.container}>
                    {/* Logo */}
                    <img
                        className={styles.logoExperience}
                        src={experience.logo}
                        alt="Logo"
                    />

                    {/* Content */}
                    <div className={styles.mainContent}>
                        <h3>{experience.title}</h3>
                        <div>
                            {experience.period}
                            <br />
                            {experience.description}
                            {experience.diplomaImage && (
                                <div>
                                    <br />
                                    <Button
                                        variant="contained"
                                        color="inherit"
                                        onClick={() => handleOpen(experience.diplomaImage)}
                                        className={styles.diplomaButton}
                                    >
                                        Voir le diplôme
                                    </Button>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Missions */}
                    <div className={styles.content}>
                        <h3>{experience.titleMission}</h3>
                        <ul>
                            {experience.missions.map((mission, missionIndex) => (
                                <li key={missionIndex}>{mission}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            ))}

            {/* Modal */}
            <Modal open={isOpen} onClose={handleClose}>
                <Box sx={style}>
                    <Button
                        onClick={handleClose}
                        sx={{
                            position: "absolute",
                            top: 8,
                            right: 8,
                            minWidth: "32px",
                            minHeight: "32px",
                        }}
                    >
                        ✖
                    </Button>
                    {currentDiploma && (
                        <Image
                            src={currentDiploma}
                            alt="Diplôme"
                            width={750}
                            height={450}
                            className={styles.diplomaImage}
                        />
                    )}
                </Box>
            </Modal>
        </div>    
        </div>
    );
}

export default Experiences;
