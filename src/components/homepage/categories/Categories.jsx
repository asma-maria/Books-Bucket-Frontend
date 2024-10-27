import { useEffect, useState } from "react"
import url from "../../../routes/sites";
import SectionHeader from "../../common/SectionHeader";
import Category from "./Category";

const Categories = ()=>{
    const [categories, setCategories] = useState();
    
    const fetchCategories = async()=>{
        const categoryJson = await fetch(`${url}/categories`)
        const categories = await categoryJson.json()
        setCategories(categories)
    }

    useEffect(()=>{
        fetchCategories()
    }, [])

    return(
        <div className="p-4">
          <h1 className="text-center text-lg font-bold">Available Books</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                categories?.map((category)=><Category {...category}></Category>)
            }
            </div>
        </div>
    )
}

export default Categories