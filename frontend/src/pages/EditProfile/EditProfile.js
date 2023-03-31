import "./EditProfile.css";

import { uploads } from "../../utils/config";

//hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

//redux
import { profile, resetMessage, updateProfile } from "../../slices/userSlice";

//components
import Message from "../../components/Message";


const Profile = () => {

    const handleFile = (e) => {

        const image = e.target.files[0];

        setPreviewImage(image);
        setProfileImage(image);
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

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
        }

        if (profileImage) {
            userData.profileImage = profileImage;
        }

        if (bio) {
            userData.bio = bio;
        }

        if (password) {
            userData.password = password;
        }

        //formData
        const formData = new FormData();

        Object.keys(userData).forEach((key) => formData.append(key, userData[key]))
        await dispatch(updateProfile(formData));


        setTimeout(() => {
            dispatch(resetMessage());
        }, 2000);
    }



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
            {(user.profileImage || previewImage) && (
                <img className="profile-image"
                    src={previewImage ? URL.createObjectURL(previewImage) : `${uploads}/users/${user.profileImage}`} alt={user.name}
                />
            )}
            <form onSubmit={handleSubmit}>
                <input type="text" name="" id="" placeholder="Nome" onChange={(e) => setName(e.target.value)} value={name || ""} />
                <input type="email" name="" id="" placeholder="E-mail" disabled value={email || ""} />
                <label>
                    <span>Imagem de Perfil: </span>
                    <input type="file" name="" id="" onChange={handleFile} />
                </label>
                <label>
                    <span>Bio:</span>
                    <input type="text" name="" id="" placeholder="Bio" onChange={(e) => setBio(e.target.value)} value={bio || ""} />
                </label>
                <label>
                    <span>Alterar senha</span>
                    <input type="password" name="" id="" placeholder="Nova senha" onChange={(e) => setPassword(e.target.value)} value={password || ""} />
                </label>
                {!loading && <input type="submit" value="Atualizar" />}
                {loading && <input type="submit" value="Aguarde..." disabled />}
                {error && <Message msg={error} type="error" />}
                {message && <Message msg={message} type="success" />}
            </form>
        </div>
    )
}

export default Profile