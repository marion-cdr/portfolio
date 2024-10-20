import { useState } from 'react';
import styles from '../styles/Contact.module.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.name) formErrors.name = 'Nom est requis';
    if (!formData.email) formErrors.email = 'Email est requis';
    if (!formData.subject) formErrors.subject = 'Sujet est requis';
    if (!formData.message) formErrors.message = 'Message est requis';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    setErrors({});
    setSuccess('Message envoyé avec succès !');
    
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: '',
    });
  };

  return (
    <>

    <div className={styles.main}>

      <div className={styles.mainTitle}>
             <span>Contactez moi</span>
       </div>
     
<div className={styles.container}>
      <div className={styles.contactForm}>
        <form onSubmit={handleSubmit} className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>Prénom</label>
            <input
              type="text"
              id="firstName"
              name="name"
              value={formData.firstName}
              onChange={handleChange}
              className={`${styles.input} ${errors.firstName ? styles.errorInput : ''}`}
            />
            {errors.firstName && <span className={styles.errorMessage}>{errors.firstName}</span>}
            <label htmlFor="name" className={styles.label}>Nom</label>
            <input
              type="text"
              id="lastName"
              name="name"
              value={formData.lastName}
              onChange={handleChange}
              className={`${styles.input} ${errors.lastName ? styles.errorInput : ''}`}
            />
            {errors.lastName && <span className={styles.errorMessage}>{errors.lastName}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className={styles.label}>Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.errorInput : ''}`}
            />
            {errors.email && <span className={styles.errorMessage}>{errors.email}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="subject" className={styles.label}>Sujet</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className={`${styles.input} ${errors.subject ? styles.errorInput : ''}`}
            />
            {errors.subject && <span className={styles.errorMessage}>{errors.subject}</span>}
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className={styles.label}>Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className={`${styles.textarea} ${errors.message ? styles.errorInput : ''}`}
            />
            {errors.message && <span className={styles.errorMessage}>{errors.message}</span>}
          </div>

          <button type="submit" className={styles.submitButton}>Envoyer</button>
          {success && <p className={styles.successMessage}>{success}</p>}
        </form>
      </div>

      </div>
    </div>
    </>
  );
}

export default Contact;
