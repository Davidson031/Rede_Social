import "./Auth.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

const Register = () => {

  const handleSubmit = (e) => { 
    e.preventDefault();
  }

  return (
    <div className="register">
      <h2>React Gram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="" id="" placeholder="Nome"/>
        <input type="email" name="" id="" placeholder="E-mail"/>
        <input type="password" name="" id="" placeholder="Senha"/>
        <input type="password" name="" id="" placeholder="Confirme a Senha"/>
        <input type="submit" value="Cadastrar" />
      </form>
      <p>Já tem conta? <Link to="/">Clique aqui</Link></p>
    </div>
  )
}

export default Register