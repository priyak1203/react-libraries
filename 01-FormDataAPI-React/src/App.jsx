import { useState } from 'react';

function Register() {
  const [isMember, setIsMember] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);
    console.log(formData);

    // getting values using get
    const name = formData.get('name');
    console.log(name);

    const email = formData.get('email');
    console.log(email);

    const password = formData.get('password');
    console.log(password);
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
