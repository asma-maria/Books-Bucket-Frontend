import { useLoaderData } from "react-router-dom"
import Title from "../dashboard/Title";
import { FaEdit } from "react-icons/fa";
import { FaTrashCan } from "react-icons/fa6";
import EditProductModal from "./EditProductModal";
import { useState } from "react";
import url from "../../routes/sites";
import toast from "react-hot-toast";

const Products = ()=>{
    const [selectedProduct, setSelectedProduct] = useState(null)
    const products = useLoaderData();
    const tableColumns = ['Name', 'Author', 'Category', 'Price', 'Action'];
    const tableColumnsClass = ['text-start min-w-60', 'text-start min-w-60', 'min-w-24', 'min-w-24'];

    const handleEditProduct = (id)=>{
        const product = products.find(({_id})=>_id==id)
        setSelectedProduct(product)
        document.getElementById('edit_product_modal').showModal()
    }

    const handleDeleteProduct = async (id)=>{
        const available = false;
        const product = {available}

        const result = await fetch(`${url}/product/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(product)
        });

        const data = await result.json();
        if (data.acknowledged) {
            toast.success(`Product deleted successfully`);
        } else {
            toast.error('Failed to delete product.');
        }
    }

    return(
        <div className="p-8">
            <Title title="All Books List"></Title>
            <table className="w-full">
                <thead>
                    <tr>
                    {
                        tableColumns.map((tableColumn, index)=>{
                            return(<th key={index+1} className={`p-2 ${tableColumnsClass[index]}`}>{tableColumn}</th>)
                        })
                    }
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map(({_id, image, bookName, author, category, price})=>{
                            return(
                                <tr key={_id} className="max-w-full">
                                    <td className="flex items-center gap-2">
                                        <img className="w-8 h-8" src={image}></img>
                                        { bookName }
                                    </td>
                                    <td>{ author }</td>
                                    <td className="text-center">
                                        <div 
                                        className="text-lg w-32"
                                        title={category}>
                                        { category }
                                        </div>
                                    </td>
                                    <td className="text-center">${ price }</td>
                                    <td className="justify-center flex gap-2 p-2">
                                        <button 
                                        value={_id}
                                        onClick={(event)=>handleEditProduct(event.target.value)}
                                        className="btn btn-outline">
                                            <FaEdit className="pointer-events-none"></FaEdit> Edit
                                        </button>
                                        <button 
                                        value={_id}
                                        onClick={(event)=>handleDeleteProduct(event.target.value)}
                                        className="btn btn-error">
                                            <FaTrashCan className="pointer-events-none"></FaTrashCan> Delete
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <dialog id="edit_product_modal" className="modal">
                <EditProductModal key={selectedProduct?._id} {...selectedProduct}></EditProductModal>
            </dialog>
        </div>
    )
}

export default Products