import { Link } from "react-router-dom"
import { ROUTES } from "../../../routes";

const Category = ({category})=>{
    return(
        <Link
        to={`${ROUTES.BOOKS}/${category}`}
        >
            <div className="card bg-base-100 w-72 h-72 shadow-xl">
  <figure className="px-10 pt-10 py-4">
    <img
      src="https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg?t=st=1730040142~exp=1730043742~hmac=7cddf393b5b3d7f767d1f22db49b1a5f7cf2df732c8c4886b931770fae10bfa5&w=996"
      alt="books"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">Category</h2>

    <div className="card-actions">
      <button className="btn btn-primary"> {category}</button>
    </div>
  </div>
</div>
        </Link>
    )
}

export default Category