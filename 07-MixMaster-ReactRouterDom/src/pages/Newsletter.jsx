import axios from 'axios';
import { Form, redirect, useNavigation } from 'react-router-dom';
import { toast } from 'react-toastify';

const newsletterUrl = 'https://www.course-api.com/cocktails-newsletter';

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    const response = await axios.post(newsletterUrl, data);
    toast.success(response.data.msg);
    return redirect('/');
  } catch (error) {
    console.log(error);
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Newsletter = () => {
  const navigate = useNavigation();

  const isSubmitting = navigate.state === 'submitting';

  return (
    <Form className="form" method="POST">
      <h4>our newsletter</h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          className="form-input"
          required
        />
      </div>
      {/* last name */}
      <div className="form-row">
        <label htmlFor="lastName" className="form-label">
          last name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          className="form-input"
          required
        />
      </div>
      <div className="form-row">
        <label htmlFor="email" className="form-label">
          email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          className="form-input"
          defaultValue="test@test.com"
          required
        />
      </div>
      <button className="btn btn-block" disabled={isSubmitting}>
        {isSubmitting ? 'submitting...' : 'submit'}
      </button>
    </Form>
  );
};

export default Newsletter;
