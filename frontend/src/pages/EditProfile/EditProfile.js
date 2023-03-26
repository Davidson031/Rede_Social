import "./EditProfile.css";

const EditProfile = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return (
    <div id="edit-profile">
        <h2>Edite seus dados!</h2>
        <p className="subtitle">Adicione uma imagem de perfil e conte mais sobre você!</p>
        <form onSubmit= { handleSubmit }>
            <input type="text" name="" id="" placeholder="Nome" />
            <input type="email" name="" id="" placeholder="E-mail" disabled/>
            <label>
                <span>Imagem de Perfil: </span>
                <input type="file" name="" id="" />
            </label>
            <label>
                <span>Bio:</span>
                <input type="text" name="" id="" placeholder="Bio"/>
            </label>
            <label>
                <span>Alterar senha</span>
                <input type="password" name="" id="" placeholder="Nova senha"/>
            </label>
            <input type="submit" value="Atualizar" />
        </form>
    </div>
  )
}

export default EditProfile