import React from "react"

export default function Card(props) {
    let badgeText
    if (props.openSpots === 0) {
        badgeText = "SOLD OUT"
    } else if (props.location === "Online") {
        badgeText = "ONLINE"
    }
    
    return (
        <div className="card w-175  text-lg  flex  flex-none  flex-col relative bg-gradient-to-r from-blue-600 to-blue-300">
          
        
                <img src={`/images/${props.img}`} className="card--image w-[300px] rounded-lg  mb-4" />
            <div className="card--stats flex align-middle ">
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card--title overflow-hidden truncate  ">{props.title}</p>
            <p className="card--price  ">
                <span className="bold">From ${props.price}</span> / person
                </p>
        </div>
    )
}
