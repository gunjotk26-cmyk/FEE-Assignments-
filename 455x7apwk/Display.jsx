
import { useContext } from "react";
import { FormContext } from "./FormContext.jsx";

function Display() {
  const { user } = useContext(FormContext);

  return (
    <div>
      <h2>User Details</h2>

      {user ? (
        <>
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>No data submitted yet</p>
      )}
    </div>
  );
}

export default Display;
