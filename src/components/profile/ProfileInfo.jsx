import { FaEdit } from "react-icons/fa"
import EditUserModal from "../user-management/EditUserModal"

const ProfileInfo = ({uid, name,email, phone, address})=>{
    const handleUserEdit = () => {
        document.getElementById('edit_user_modal').showModal()
    }

    return (
        <div>
                 <div>
            <div className="overflow-x-auto shadow-2xl">
  <table className="table table-zebra">
    {/* head */}
    <thead>
      <tr>
       
        <th>Name</th>
        <th>Phone</th>
        <th>Email</th>
        <th>Address</th>

      </tr>
    </thead>
    <tbody>
   
      <tr>
        
        <td>{name}</td>
        <td>{phone}</td>
        <td>{email}</td>
        <td>{address}</td>
      </tr>
    </tbody>
  </table>
</div>
<br />
        <div className="flex justify-center">
        <button 
                    value={uid} 
                    className="btn btn-success
                        hover:bg-teal-600 hover:text-white"
                    onClick={(event)=>handleUserEdit(event.target.value)}>
                        <FaEdit></FaEdit> Edit
                    </button>
                    <dialog id="edit_user_modal" className="modal">
                <EditUserModal uid={uid}></EditUserModal>
            </dialog>
        </div>
            </div>
        </div>
    )
}

export default ProfileInfo