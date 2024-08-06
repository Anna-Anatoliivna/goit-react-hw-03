import {Contact} from '../Contact/Contact'
import styles from './ContactList.module.css'

export const ContactList = ({contacts}) => {
    return (
        <div className={styles.box}>
            <ul>
                {contacts.map(({ id, name, number }) => (
                    <li className={styles.item} key={id}>
                        <Contact
                            name={name}
                            number={number} />
                    </li>)
                )}
            </ul>
        </div>
    );
};
