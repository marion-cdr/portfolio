import { useState } from 'react';
import styles from '../styles/Projects.module.css';
// import Image from 'next/image';

//Font Awesome
import { faClose, faGift, faGlobe, faCodeBranch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//NextUI components
import {Card, CardFooter, Image, Button} from "@nextui-org/react";

//MUI components
import Box from "@mui/material/Box";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function Projects() {


  
//TABLEAU DE DATA  
  const projects = [
    {
      id: 1,
      name: 'My Moviz',
      description: 'MyMoviz est une application permettant d’afficher les derniers films sortis avec la possibilité d’ajouter un film à ses favoris, gérer un compteur de vues et évaluer chacun des films présentés.',
      image: '/myMoviz.png',
      techno: ["React", "Next js", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/marion-cdr/myMoviz-frontend",
        "https://github.com/marion-cdr/myMoviz-backend",
        "https://my-moviz-frontend-red.vercel.app",
      ],
    },
    {
      id: 2,
      name: 'Morning News',
      description: "Il s'agit d'une application web qui vous permet d’afficher les news du journal Tech Crunch, de sauvegarder vos articles préférés et de les retrouver en vous connectant à votre compte.",
      image: '/morningNews.png',
      techno: ["React", "Next js", "MongoDb", "Express", "NodeJs", "API"],
      link: [
        "https://github.com/marion-cdr/morningNews-frontend",
        "https://github.com/marion-cdr/morningNews-backend",
        "https://morning-news-frontend-steel.vercel.app",
      ],
    },
    {
      id: 3,
      name: 'FaceUp',
      description: "FaceUp est une application mobile permettant de prendre des photos et de les stocker dans une galerie d’images.",
      image: '/faceUp.png',
      techno: ["React Native", "TypeScript", "NodeJs"],
      link: [
        "https://github.com/marion-cdr/faceUp-frontend",
        "https://github.com/marion-cdr/faceUp-backend",
      ],
    },
    {
      id: 4,
      name: 'Locapic',
      description: "Locapic est une application mobile permettant de géolocaliser un utilisateur en matérialisant ses déplacements sur une carte interactive et en offrant la possibilité d’y ajouter des points d'intérêt.",
      image: '/locapic.png',
      techno: ["React Native", "NodeJs"],
      link: [
        "https://github.com/marion-cdr/faceUp-frontend",
        "https://github.com/marion-cdr/faceUp-backend",
      ],
    },
  ];




  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)", //centrer le modal
    width: 1000,
    height: 500, 
    bgcolor: "background.paper",
    border: "1px solid grey",
    borderRadius: 3,
    boxShadow: 24,
    p: 4,
  };


  
// Définition des Etats
  const [isOpen, setIsOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const [id, setId] = useState(1);


  const handleClose = (() => {
    setIsOpen(false);
});

const handleClick = (project) => {
    setSelectedProject(project);
    setId(project.id);
    setIsOpen(true);
};




  const projectsCards = projects.map((project, i) => {
    return (
      <Card key={project.id} className={styles.projectsCard} >
      <Image
        alt="Project image"
        className={styles.image} 
        height={200}
        src={project.image}
        width={200}
      />
      <CardFooter className={styles.textDiv} >
        <p className={styles.textBold}>{project.name}</p>
        <Button className={styles.buttonDark} onClick={() => handleClick(project)}>
          DISCOVER
        </Button>
      </CardFooter>
    </Card>
      
    )
  });


  

  return (
    <div className={styles.main}>
   
        <div className={styles.mainTitle}> My last projects</div>

        <div className={styles.cards}>
          {projectsCards}
        </div>
        


        <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box className={styles.modal}>

        <div className={styles.headProject}>
          <Typography id="modal-modal-title" variant="h6" component="h2" ></Typography>
              {projects[id-1].name}
          <Button className={styles.buttonProject} onClick={handleClose}>✖</Button> 
        </div> 

        <div className={styles.containerProject}>
          <div className={styles.imageProject}>
          < Image src={projects[id-1].image} alt="Avatar" width={400} height={300}/>
          </div>

          <div className={styles.textProject}>
            {projects[id-1].description}

            <h4>Technologies utilisées :</h4>
            <div className={styles.technoContent}>
                {projects[id-1].techno.map((techno) => (
                  <span key={techno}>{techno}</span>
                  ))}   
            </div>

            <div className={styles.linkContent}>
                  {projects[id-1].link.length === 0 ? 
                  (<button>Pas encore de lien 🥲</button>) :
                  projects[id-1].link.length === 1 ?
                  (<a href={projects[0].link[0]} target="_blank">Lien vers la page</a>) :
                  projects[id-1].link.length === 2 ? (
                    <>
                    <a href={projects[id-1].link[0]} target="_blank">Voir sur github</a>
                    <a href={projects[id-1].link[1]} target="_blank" className={styles.linkWeb}>
                      <FontAwesomeIcon className={styles.iconLinkWeb} icon={faGlobe}></FontAwesomeIcon>
                      Voir le site</a>
                  </>
                  ) : (
                    <>
                    <a href={projects[id-1].link[0]} target="_blank" className={styles.linkWeb}>
                    <FontAwesomeIcon className={styles.iconLinkWeb} icon={faCodeBranch}></FontAwesomeIcon>
                      FrontEnd</a>
                    <a href={projects[id-1].link[1]} target="_blank" className={styles.linkWeb}>
                    <FontAwesomeIcon className={styles.iconLinkWeb} icon={faCodeBranch}></FontAwesomeIcon>
                      BackEnd</a>
                    <a href={projects[id-1].link[2]} target="_blank" className={styles.linkWeb}>
                      <FontAwesomeIcon className={styles.iconLinkWeb} icon={faGlobe}></FontAwesomeIcon>
                      Voir le site</a>
                  </>
                  )}
            </div>

          </div>
        </div>

          
          
        </Box>
      </Modal>
        
    </div>
  );
}

export default Projects;
