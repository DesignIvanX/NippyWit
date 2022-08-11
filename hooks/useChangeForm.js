import { useState } from "react";

const useChangeForm = () => {
  const [value, setValue] = useState([]);
  const handleOnChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  return { handleOnChange, value };
};

export default useChangeForm;
