import { useContext } from "react"

import { AuthContext } from "../../provider/AuthProvider"
import ProfileInfo from "./ProfileInfo";

const Profile = ()=>{
    const {user} = useContext(AuthContext);
    
    return (
        <div>
            <div>
                <ProfileInfo {...user}></ProfileInfo>
            </div>
        </div>
    )
}

export default Profile