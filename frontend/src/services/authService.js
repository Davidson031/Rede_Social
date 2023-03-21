import { api, requestConfig } from "../utils/config";


//register
const register = async (data) => {

    const config = requestConfig("POST", data);

    try {

        const res = await fetch(api + "/users/register", config)
            .then((res) => res.json())
            .catch((err) => err)

        if(res){
            localStorage.setItem("user", JSON.stringify(res));
        }

    } catch (error) {
        console.log(error);
    }
}

//login



const authService = { register };

export default authService;