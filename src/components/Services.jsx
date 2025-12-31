import React from "react";
import assets from "../assets/assets";
import Title from "./Title.jsx"
import ServiceCard from "./ServiceCard.jsx";

const Services=()=>{

    const servicesData=[
        {
            title:"Advertising",
            description:"Good deals don’t wait. Upgrade your everyday routine with something better.",
            icon:assets.ads_icon

        },
         
         {
            title:"Content-Marketing",
            description:"People don’t need more products — they need solutions. That’s why we focus on quality, durability, and real results.",
            icon:assets.marketing_icon

        },
         
         {
            title:"Content-Writing",
            description:"We believe everyone deserves products that are reliable, affordable, and easy to use.",
            icon:assets.content_icon

        },
          
         {
            title:"Social Media",
            description:"Because quality matters. Try it once — you’ll feel the difference.",
            icon:assets.social_icon

        }
         
        
    ]
    return(
        <div id="services" className="relative flex flex-col items-center gap-7 px-4 sm:px-12 lg:px-24 
        xl:px-40 pt-30 text-gray-700 dark:text-white">
            <img src={assets.bgImage2} alt="" className="absolute -top-110 -left-70 -z-1 dark:hidden" />

            <Title title="How can we Help?" desc="From strategy to execution,we carft digital solutions hath movw your bussiness forward"/>

            <div className="flex flex-col md:grid grid-cols-2">
                {servicesData.map((service,index)=>(
                    <ServiceCard key={index} service={service} index={index}/>
                ))}
            </div>
        </div>
    )
}
export default Services