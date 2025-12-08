import { useState } from "react";
const UserForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  return (
    <>
      <h1>Formularip de cadastro: </h1>
      <br />
      <form>
        <input type="text" placeholder="Digite deu nome" />
        <br />
        <input type="email" placeholder="Digite seu e-mail" />
        <br />
        <button type="submit">Cadastro</button>
      </form>
    </>
  );
};
export default UserForm;
