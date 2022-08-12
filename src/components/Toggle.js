import React, { useState } from "react";
import styled from "styled-components";

const Toggle = ({ children }) => {
  const [toggle, setToggle] = useState(true);
  return (
    <div onClick={() => setToggle(!toggle)}>
      {toggle ? children : <Check>Checked</Check>}
    </div>
  );
};

const Check = styled.p`
  padding: 1rem;
  font-weight: bold;
  /* color: rgb(35, 217, 151); */
  /* text-shadow: 2px 2px 5px #23d99656; */
`;

export default Toggle;
