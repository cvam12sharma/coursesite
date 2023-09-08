import React from "react"
import Navbar from "./component/Navbar"
import Hero from "./component/Hero"
import Card from "./component/Card"
import data from "./data"


export default function App() {
    const cards = data.map(item => {
        return (
            <Card 
              img={item.coverImg}
                rating={item.stats.rating}
                reviewCount={item.stats.reviewCount}
                location={item.location}
                title={item.title}
                price={item.price}    
            />
        )
    })        
    
    return (
        <div>
            <Navbar />
         <Hero/>
<section className=" card-list flex    overflow-x-auto">
    {cards }
    </section>    
        </div>
    )
}
