import { Field, Form, Formik } from 'formik'
import styles from './ContactForm.module.css'

const initialValues = {
  userName: "",
  userNumber: "",
};


export const ContactForm = ({onContactForm}) => {
  
  const handleSubmit = (values, actions) => {
    const contactObj = {
      name: values.userName,
      number: values.userNumber,
    };
onContactForm(contactObj);
		console.log(values);
		actions.resetForm();
	};
  
  return (
    <Formik initialValues={initialValues}
      onSubmit={handleSubmit}>
      <Form className={styles.form}>
        <label className={styles.label}>
          Name
          <Field className={styles.input} type="text" name="userName"  required/>
        </label>
        <label className={styles.label}>
          Number
          <Field className={styles.input} type="tel" name="userNumber" required/>
        </label>
        <button className={styles.btn} type="submit">Add contact</button>
      </Form>
     
    </Formik>
  );
};

export default ContactForm