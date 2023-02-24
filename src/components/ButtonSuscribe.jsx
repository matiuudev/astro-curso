import React, { useState } from "react";
import { toast } from "react-toastify";
const ButtonSuscribe = () => {
  const [suscribe, setSuscribe] = useState(false);

  const handleClick = (e) => {
    setSuscribe(!suscribe);
    return !suscribe
      ? toast.success("Ya estas suscrito")
      : toast.error("No estas suscrito");
  };

  return (
    <button onClick={handleClick}>
      {suscribe ? "Ya estas suscrito" : "No estas suscrito"}
    </button>
  );
};

export default ButtonSuscribe;
