import { useForm } from 'react-hook-form';
import styles from '../styles/Contact.module.css';
import emailjs from 'emailjs-com';

function Contact() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();




  const onSubmit = async (data) => {
    try {
      console.log('Données envoyées :', data); // Debugging
      await emailjs.send(
        'service_r72kynl',    // Service ID
        'template_uvxiefh',   // Template ID
        data,
        'XFUg2f9RruSRqNRzU'   // User ID
      );

      alert('Message envoyé avec succès !');
      reset({
        first_name: '',
        last_name: '',
        email: '',
        subject: '',
        message: '',
      });
    } catch (error) {
      console.error('Erreur EmailJS :', error.text);
      alert("Erreur lors de l'envoi du message.");
    }
  };


  return (
    <div className={styles.main}>
      <div className={styles.mainTitle}>
        <span>Contactez-moi</span>
      </div>

      <div className={styles.container}>
        <div className={styles.contactForm}>
          <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
            <div className={styles.formGroup}>
              <label htmlFor="first_name" className={styles.label}>Prénom</label>
              <input
                type="text"
                id="first_name"
                {...register('first_name', { required: 'Un prénom est requis' })}
                className={`${styles.input} ${errors.first_name ? styles.errorInput : ''}`}
              />
              {errors.first_name && <span className={styles.errorMessage}>{errors.first_name.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="last_name" className={styles.label}>Nom</label>
              <input
                type="text"
                id="last_name"
                {...register('last_name', { required: 'Un nom est requis' })} // Remplacez 'name' par 'last_name'
                className={`${styles.input} ${errors.last_name ? styles.errorInput : ''}`}
              />
              {errors.last_name && <span className={styles.errorMessage}>{errors.last_name.message}</span>}
          </div>


            <div className={styles.formGroup}>
              <label htmlFor="email" className={styles.label}>Email</label>
              <input
                type="email"
                id="email"
                {...register('email', {
                  required: 'Email est requis',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ ]+$/,
                    message: 'Adresse email invalide',
                  },
                })}
                className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
              />
              {errors.email && <span className={styles.errorMessage}>{errors.email.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>Sujet</label>
              <input
                type="text"
                id="subject"
                {...register('subject', { required: 'Sujet est requis' })}
                className={`${styles.input} ${errors.subject ? styles.errorInput : ''}`}
              />
              {errors.subject && <span className={styles.errorMessage}>{errors.subject.message}</span>}
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>Message</label>
              <textarea
                id="message"
                rows="5"
                {...register('message', { required: 'Message est requis' })}
                className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
              />
              {errors.message && <span className={styles.errorMessage}>{errors.message.message}</span>}
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? 'Envoi...' : 'Envoyer'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
