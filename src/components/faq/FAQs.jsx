import { useEffect, useState } from "react";
import FAQ from "./FAQ";
import { useLoaderData } from "react-router-dom";
import baseUrl from "../../routes/sites";

const FAQs = ()=>{
    const [faqs, setFaqs] = useState([])

    useEffect(() => {
        const fetchFaqs = async () => {
            try {
                const res = await fetch(`${baseUrl}/faq`);
                const data = await res.json();
                setFaqs(data);
            } catch (error) {
                console.error('Error fetching faqs:', error);
            }
        };

        fetchFaqs();
    }, [])

    return (
        <>
            <div className=" bg-slate-100">
                <h3 className="font-bold text-lg text-center">Frequently Asked Questions</h3>
                { faqs.map((faq)=>(<FAQ {...faq}></FAQ>)) }
            </div>
        </>
    )
}

export default FAQs