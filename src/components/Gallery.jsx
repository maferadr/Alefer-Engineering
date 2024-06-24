import React, {useEffect} from "react";

export default function Gallery(){

    const imgGallery = [
        {
            id: 1,
            imgSrc: '/assets/testing-1.jpg'
        },
        {
            id: 2,
            imgSrc: '/assets/testing-2.JPG'
        },
        {
            id: 3,
            imgSrc: '/assets/testing-3.JPG'
        },
        {
            id: 4,
            imgSrc: '/assets/testing-4.JPG'
        },
    ]

    return(
        <div className="bg-sky-100/60">
            <div className="grid grid-cols-2 gap-4 mb-10 sm:grid-cols-2 lg:grid-cols-4">
                {imgGallery.map((image)=>(
                    <div key={image.id} className="group relative">
                        <div className="gradient-black gallery-grad"></div>
                        <img src={image.imgSrc} className="object-cover img-gallery"></img>
                    </div>
                ))}
            </div>
        </div>
    )
}