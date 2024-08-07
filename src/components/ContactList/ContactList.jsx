import {Contact} from '../Contact/Contact'
import styles from './ContactList.module.css'

export const ContactList = ({ contacts }) => {
//     const handleClick = (userName) => {
// console.log('userName: ', userName);
//     }
    
    return (
        <div className={styles.box}>
            <ul className={styles.list}>
                {contacts.map(({ id, name, number }) => (
                    <li className={styles.item} key={id}>
                        <Contact
                            // handleClick={handleClick}
                            name={name}
                            number={number} />
                    </li>)
                )}
            </ul>
        </div>
    );
};
