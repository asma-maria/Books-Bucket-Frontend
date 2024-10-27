import { Link } from "react-router-dom"
import Rating from "../common/Rating"
import { ROUTES } from "../../routes"

const Book = (book)=>{
    const {_id, bookName, author, image, tags, category, rating, price} = book

    return (
        <div className="card bg-base-100 max-w-72 shrink h-full shadow-xl">
            <Link to={`${ROUTES.BOOKS}/${category}`}>
            <figure className="h-32 bg-base-300">
                <img
                src={image}
                alt={bookName} />
            </figure>
            <div className="card-body">
                <div className="md:flex ">
                    <div className="font-bold text-xl text-ellipsis line-clamp-1 overflow-hidden mr-2">{ bookName }</div>
                    
                </div>
                <h3 className="card">
                {author}
                </h3>
                <h3 className="card">
                <Link 
                    to={`${ROUTES.BOOKS}/${category}`}
                    className=" bg-white cursor-pointer ">{category}</Link>
                </h3>
                <div className="flex flex-wrap justify-between">
                    <div className="card-actions">  
                        <Rating ratingValue={rating}></Rating> 
                    </div>
                    <div className="card-actions flex items-center text-lg font-semibold">  
                        ${price}
                    </div>
                </div>
                <div className="flex justify-center mt-auto mb-2">
                    <Link 
                    className="btn w-24 bg-slate-100 text-black hover:bg-red-950 hover:text-white"
                    state={{book: book}} 
                    to={`${ROUTES.BOOK_DETAIL}/${_id}`}>Details</Link>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default Book