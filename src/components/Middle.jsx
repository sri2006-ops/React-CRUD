function Middle() {
  const handleSubmit = (e) => {
    e.preventDefault();

    alert("Form Submitted!");
  };

  return (
    <div className="middle">
      <h1>Registration Form</h1>

      <form onSubmit={handleSubmit} className="form">

        <input
          type="text"
          placeholder="Enter Name"
        />

        <input
          type="email"
          placeholder="Enter Email"
        />

        <input
          type="number"
          placeholder="Enter Age"
        />

        <input
          type="tel"
          placeholder="Enter Mobile Number"
        />

        <button type="submit">
          Submit
        </button>

      </form>
    </div>
  );
}

export default Middle;