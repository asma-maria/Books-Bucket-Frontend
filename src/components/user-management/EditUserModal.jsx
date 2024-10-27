import { useEffect, useState } from "react"
import url from "../../routes/sites";
import toast from "react-hot-toast";

const EditUserModal = ({uid})=>{
    const [user, setUser] = useState({
        _id: null,
        email: '',
        name: '',
        phone: '',
        address: '',
        isAdmin: false
    })

    const {_id, email, name, phone, address, isAdmin} = user;
    const fetchUser = async()=>{
        try {
            const res = await fetch( `${url}/user/${uid}`);
            if (!res.ok) {
                throw new Error("Failed to fetch user data.");
            }
            const data = await res.json();
            setUser(data);
        } catch (error) {
            console.error("Error fetching user data:", error.message);
        }
    }

    const handleSaveUser = async(event)=>{
        event.preventDefault()

        const name = event.target.name.value
        const phone = event.target.phone.value
        const address = event.target.address.value

        const userInfo = {name, phone, address}
        
        fetch(`${url}/user/${uid}`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(userInfo)
        })
        .then(res=>res.json())
        .then(data=>{
            if(data?.acknowledged) {
                toast.success("User is successfully updated");
                
            } else {
                console.error("Error Fetching while updating user");
            }
        })
    }

    useEffect(()=>{
        fetchUser()
    }, [uid] )
    
    return(
        <div className="modal-box w-full h-full">
            <h3 className="font-bold text-red-950 text-lg text-center">Edit {name}'s Profile</h3>
            <div className="my-8">
                <form onSubmit={handleSaveUser}>
                    <div className='grid grid-cols-3 gap-x-4 gap-y-2'>
                    </div>
                    <div className="divider"></div>
                    <div className='grid grid-cols-3 gap-x-4 gap-y-2'>
                        <span className='col-span-1 font-semibold'>Name</span>
                        <span className='col-span-2 flex'>
                            <input 
                            name="name" 
                            className="flex-1 border rounded-md h-8 p-1"
                            defaultValue={name}></input>
                        </span>
                        <span className='col-span-1 font-semibold'>Phone</span>
                        <span className='col-span-2 flex'>
                            <input 
                            name="phone" 
                            className="flex-1 border rounded-md h-8 p-1"
                            defaultValue={phone}></input>
                        </span>
                        <span className='col-span-1 font-semibold'>Address</span>
                        <span className='col-span-2 flex'>
                            <textarea 
                            name="address" 
                            defaultValue={address}
                            className="border border-black p-2 outline-none rounded-md flex-1 h-24"></textarea>
                        </span>
                    </div>
                    <div className="flex gap-2 items-center justify-center mt-8">
                        <button 
                        type="submit"
                        
                        className="btn bg-white border border-teal-600 text-teal-600 
                        hover:bg-teal-600 hover:text-white">
                            Update User
                        </button>
                        <form method="dialog">
                            <button className="btn btn-outline w-24">Close</button>
                        </form>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUserModal