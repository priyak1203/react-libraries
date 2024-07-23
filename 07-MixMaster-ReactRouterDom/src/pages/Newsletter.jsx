const Newsletter = () => {
  return (
    <form className="form">
      <h4>our newsletter</h4>
      {/* name */}
      <div className="form-row">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input type="text" id="name" name="name" className="form-input" />
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
        />
      </div>
      <button className="btn btn-block">submit</button>
    </form>
  );
};

export default Newsletter;
