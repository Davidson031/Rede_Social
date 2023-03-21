import "./Auth.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => { 
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    console.log(user);

  };

  return (
    <div className="register">
      <h2>React Gram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="" id="" placeholder="Nome" onChange={ (e) => setName(e.target.value)} value = { name || ""} />
        <input type="email" name="" id="" placeholder="E-mail" onChange={ (e) => setEmail(e.target.value)} value = { email || "" } />
        <input type="password" name="" id="" placeholder="Senha" onChange={ (e) => setPassword(e.target.value)} value = { password || "" } />
        <input type="password" name="" id="" placeholder="Confirme a Senha"onChange={ (e) => setConfirmPassword(e.target.value)} value = { confirmPassword || "" } />
        <input type="submit" value="Cadastrar" />
      </form>
      <p>Já tem conta? <Link to="/">Clique aqui</Link></p>
    </div>
  )
}

export default Register