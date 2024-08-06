import styles from './Contact.module.css'

export const Contact = ({ name, number }) => {
    return (
        <>
            <ul className={styles.list}>
                <li className={styles.listItem}>{name}</li>
                <li className={styles.listItem}>{number}</li>
            </ul>
            <button type="button">Delete</button>
        </>
    );
};

 