
import { createContext, useState } from "react";

export const FormContext = createContext();

export function FormProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <FormContext.Provider value={{ user, setUser }}>
      {children}
    </FormContext.Provider>
  );
}
