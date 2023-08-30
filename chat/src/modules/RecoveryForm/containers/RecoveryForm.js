import { withFormik } from 'formik';
import { RecoveryForm } from '../components/RecoveryForm';
import { validateFunc } from '../../../utils/validate'

export default withFormik({
  mapPropsToValues: () => ({ new_password: '', confirm_new_password: '' }),

  validate: values => {
    const errors = {};

    validateFunc({ isAuth: false, values, errors });

    return errors;
  },

  handleSubmit: (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 1000);
  },

  displayName: 'RecoveryForm',
})(RecoveryForm);
