import "./Auth.css";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Message from "../../components/Message";

//redux
import { register, reset } from "../../slices/authSlice";
import { useSelector, useDispatch } from "react-redux";


const Register = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const dispatch = useDispatch();

  //pegando estados
  const { loading, error } = useSelector((state) => state.auth);



  //--------------------------------

  const handleSubmit = (e) => { 
    e.preventDefault();

    const user = {
      name,
      email,
      password,
      confirmPassword
    }

    dispatch(register(user));

  };

  //limpando estados
  useEffect(() => { 
    dispatch(reset());
  }, [dispatch])

  return (
    <div className="register">
      <h2>React Gram</h2>
      <p className="subtitle">Cadastre-se para ver as fotos dos seus amigos</p>
      <form onSubmit={ handleSubmit }>
        <input type="text" name="" id="" placeholder="Nome" onChange={ (e) => setName(e.target.value)} value = { name || ""} />
        <input type="email" name="" id="" placeholder="E-mail" onChange={ (e) => setEmail(e.target.value)} value = { email || "" } />
        <input type="password" name="" id="" placeholder="Senha" onChange={ (e) => setPassword(e.target.value)} value = { password || "" } />
        <input type="password" name="" id="" placeholder="Confirme a Senha"onChange={ (e) => setConfirmPassword(e.target.value)} value = { confirmPassword || "" } />
        { !loading && <input type="submit" value="Cadastrar" /> }
        { loading && <input type="submit" value="Aguarde..." disabled/>}
        { error && <Message msg={ error } type="error" />}
      </form>
      <p>Já tem conta? <Link to="/">Clique aqui</Link></p>
    </div>
  )
}

export default Register