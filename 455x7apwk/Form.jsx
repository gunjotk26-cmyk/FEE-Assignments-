
import { useReducer, useContext } from "react";
import { FormContext } from "./FormContext.jsx";

const initialState = {
  form: {
    name: "",
    email: "",
    password: "",
    confirm: ""
  },
  error: "",
  message: ""
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE":
      return {
        ...state,
        form: {
          ...state.form,
          [action.name]: action.value
        },
        error: "",
        message: ""
      };

    case "ERROR":
      return {
        ...state,
        error: action.message,
        message: ""
      };

    case "SUCCESS":
      return {
        ...initialState,
        message: "Registration successful!"
      };

    default:
      return state;
  }
}

function Form() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { setUser } = useContext(FormContext);
  const { form, error, message } = state;

  function handleChange(e) {
    dispatch({
      type: "CHANGE",
      name: e.target.name,
      value: e.target.value
    });
  }

  function handleBlur(e) {
    if (!e.target.value.trim()) {
      dispatch({
        type: "ERROR",
        message: e.target.name + " is required"
      });
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.password ||
      !form.confirm
    ) {
      dispatch({
        type: "ERROR",
        message: "All fields are required"
      });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      dispatch({
        type: "ERROR",
        message: "Enter a valid email"
      });
      return;
    }

    if (form.password.length < 8) {
      dispatch({
        type: "ERROR",
        message: "Password must be at least 8 characters"
      });
      return;
    }

    if (!/[A-Z]/.test(form.password)) {
      dispatch({
        type: "ERROR",
        message: "Password needs an uppercase letter"
      });
      return;
    }

    if (!/[0-9]/.test(form.password)) {
      dispatch({
        type: "ERROR",
        message: "Password needs a number"
      });
      return;
    }

    if (form.password !== form.confirm) {
      dispatch({
        type: "ERROR",
        message: "Passwords do not match"
      });
      return;
    }

    setUser({
      name: form.name,
      email: form.email
    });

    dispatch({ type: "SUCCESS" });
  }

  return (
    <div>
      <h2>Registration Form</h2>

      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input
          name="name"
          placeholder="Enter name"
          value={form.name}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label>Email</label>
        <input
          name="email"
          type="email"
          placeholder="Enter email"
          value={form.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label>Password</label>
        <input
          name="password"
          type="password"
          placeholder="Enter password"
          value={form.password}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <label>Confirm Password</label>
        <input
          name="confirm"
          type="password"
          placeholder="Confirm password"
          value={form.confirm}
          onChange={handleChange}
          onBlur={handleBlur}
        />

        <button type="submit">Submit</button>
      </form>

      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
    </div>
  );
}

export default Form;
