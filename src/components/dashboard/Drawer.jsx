import { Link } from "react-router-dom"
import { ROUTES } from "../../routes"
import { AuthContext } from "../../provider/AuthProvider"
import User from "../common/User"
import { useContext } from "react"
import { FaUser, FaUsersLine } from "react-icons/fa6"
import { FaBook, FaHeart, FaList, FaPlusSquare, FaShoppingCart } from "react-icons/fa"

const Drawer = ()=>{
    return (
        <div className="drawer h-full ">
            <div className="h-full">
                <ul className="menu shadow-md min-h-full w-80 p-4 bg-green-200">
                {/* Sidebar content here */}
                    <li>
                        <Link to={ROUTES.PROFILE}>
                            <FaUser></FaUser>
                            Profile
                        </Link>
                    </li>
                    <div className="divider"></div>
                   
                    <div></div>
                    <li>
                        <Link to={ROUTES.USERS}>
                            <FaUsersLine></FaUsersLine>
                            User List
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.NEW_BOOK}>
                            <FaPlusSquare></FaPlusSquare>
                            New Product
                        </Link>
                    </li>
                   
                    <li>
                        <Link to={ROUTES.ALL_PRODUCTS}>
                            <FaBook></FaBook>
                            All Products
                        </Link>
                    </li>

                    <li>
                        <Link to={ROUTES.PRODUCT_CATEGORY}>
                            <FaList></FaList>
                            Product Categories
                        </Link>
                    </li>
                    <li>
                        <Link to={ROUTES.ORDERS}>
                            <FaShoppingCart></FaShoppingCart>
                            Orders
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Drawer