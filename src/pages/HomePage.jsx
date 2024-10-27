

import FAQs from "../components/faq/FAQs"
import Categories from "../components/homepage/categories/Categories"
import AboutUs from "./AboutUs"
import BooksBanner from "./BooksBanner"
import ContactUs from "./ContactUs"
import HowWorks from "./HowWorks"

function HomePage() {
   
    return (
        <div className="min-h-screen flex flex-col">
            <BooksBanner></BooksBanner>
            <div className="space-y-12 md:mx-32 md:my-14">
            
                <HowWorks></HowWorks>
                <Categories></Categories>
                <ContactUs></ContactUs>
                <FAQs></FAQs>
                <AboutUs></AboutUs>
                
            </div>
        </div>
    )
}

export default HomePage