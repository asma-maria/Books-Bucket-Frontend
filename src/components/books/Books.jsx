import Book from "./Book";
import { useLoaderData, useParams } from "react-router-dom";

const Books = ()=>{
    const books = useLoaderData();
    const { category } = useParams();
    console.log(category)
    window.scrollTo(0,0);

    return (
        <div id='bookList' className="flex flex-col items-center mx-auto my-16 w-fit rounded-2xl">
            <h1 className="text-center text-xl font-bold mb-8">
                
                     Category based Available Books 
                
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-3 w-fit gap-5">
            {
                books?.map((book)=>(<Book key={book._id} {...book}></Book>))
            }
            </div>
        </div>
    )
}

export default Books