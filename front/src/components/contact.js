import { useState } from "react";
import validator from "validator";
import "./contact.css";
// import axios from "axios";

const Contact = () => {
  const initialstate = {
    username: "",
    email: "",
    description: "",
  };
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  // const [names, setName] = useState([]);

  const [form, setForm] = useState(initialstate);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:8080/")
  //     .then((response) => {
  //       setName(response.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // });

  const validateEmail = () => {
    const isEmailValid = validator.isEmail(email);
    setIsValid(isEmailValid);
  };

  const handleForm = (e) => {
    setEmail(e.target.value);

    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:8080/", {
      method: "POST",
      body: JSON.stringify(form),
      headers: {
        "Content-Type": "application/json",
      },
    });
    setForm(initialstate);

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <div className="contact max-md-600px " id="contact">
        <h1>What's next?</h1>
        <h2>
          Thanks for taking the time to reach out. How can I help you today?
        </h2>

        <form className="forms" onSubmit={handleSubmit}>
          <div className="field">
            <div className="names">
              <label>Name</label>
              <input
                className="alvb"
                value={form.username}
                name="username"
                type="text"
                onChange={handleForm}
              />
            </div>
            <div className="email">
              <label>Email</label>
              <input
                className="vals"
                name="email"
                type="text"
                style={{ borderColor: isValid ? "green" : "red" }}
                onChange={handleForm}
                value={form.email}
              />
            </div>

            <div className="description">
              <label>Description</label>
              <input
                className="desc"
                name="description"
                value={form.description}
                type="text"
                onChange={handleForm}
              />
            </div>
            <div className="hello">
              <button className="hi" type="submit" onClick={validateEmail}>
                Say hello
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Contact;
