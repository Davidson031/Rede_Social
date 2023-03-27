import "./EditProfile.css";

import { uploads } from "../../utils/config";

//hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux
import { profile, resetMessage } from "../../slices/userSlice";

//components
import Message from "../../components/Message";

const Profile = () => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const dispatch = useDispatch();

    const { user, message, error, loading } = useSelector((state) => state.user);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [profileImage, setProfileImage] = useState("");
    const [bio, setBio] = useState("");
    const [previewImage, setPreviewImage] = useState("");

    //load userdata
    useEffect(() => {
        dispatch(profile());
    }, [dispatch]);

    //fill forms
    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            setBio(user.bio);
        }
    }, [user]);


    return (
        <div id="edit-profile">
            <h2>Edite seus dados!</h2>
            <p className="subtitle">Adicione uma imagem de perfil e conte mais sobre você!</p>
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name || ""} />
                <input type="email" name="" id="" placeholder="E-mail" disabled value={email || ""} />
                <label>
                    <span>Imagem de Perfil: </span>
                    <input type="file" name="" id="" />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" name="" id="" placeholder="Bio" onChange={(e) => setBio(e.target.value)} value={bio || ""} />
                </label>
                <label>
                    <span>Alterar senha</span>
                    <input type="password" name="" id="" placeholder="Nova senha" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                </label>
                <input type="submit" value="Atualizar" />
            </form>
        </div>
    )
}

export default Profile