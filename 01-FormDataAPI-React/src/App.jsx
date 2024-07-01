import { useState } from 'react';
import getFormValues from './getFormValues';

function Register() {
  const [isMember, setIsMember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const { isEmpty, data } = getFormValues(e.currentTarget);

    // check for empty values
    if (isEmpty) {
      console.log('please provide all values ');
      return;
    }

    // do something
    console.log(data);

    // ======= clear inputs
    e.currentTarget.reset();
  };

  return (
    <section className="register-page full-page">
      <form className="form" onSubmit={handleSubmit}>
        <h3>{isMember ? 'login' : 'register'}</h3>
        {/* name field */}
        {!isMember && (
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              name
            </label>
            <input type="text" id="name" name="name" className="form-input" />
          </div>
        )}

        {/* email field */}
        <div className="form-row">
          <label htmlFor="email" className="form-label">
            email
          </label>
          <input type="email" id="email" name="email" className="form-input" />
        </div>
        {/* password field */}
        <div className="form-row">
          <label htmlFor="password" className="form-label">
            password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
        <p>
          {isMember ? 'Not a member yet? ' : 'Already a member?'}
          <button
            type="button"
            className="member-btn"
            onClick={() => setIsMember(!isMember)}
          >
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </section>
  );
}

export default Register;
