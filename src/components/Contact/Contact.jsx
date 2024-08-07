import styles from './Contact.module.css'

export const Contact = ({ name, number, handleClick }) => {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.listItem}>{name}</li>
                <li className={styles.listItem}>{number}</li>
            </ul>
            <button className={styles.btn} type="button" onClick={()=>{handleClick(name)}}>Delete</button>
        </>
    );
};

 