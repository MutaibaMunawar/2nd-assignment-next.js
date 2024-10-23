import React from 'react'
import styles from '../styles/Contact.module.css';


const Contact = () => {
 return(
    <div>
           <form className={styles.form}>
    <div className={styles.fGroup}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" required className={styles.input} />
    </div>
    <div className={styles.fGroup}>
        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" required className={styles.input} />
    </div>
    <div className={styles.fGroup}>
        <label htmlFor="message">Message</label>
        <textarea id="message" name="message" required className={styles.text}></textarea>
    </div>
    <button type="submit" className={styles.button}>Submit</button>
</form>
    </div>
 )

};


export default Contact