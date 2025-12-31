import React from 'react'
import Card from './Card'

function Projects() {

    const projects = [
        {
            title: "CRISP",
            description: "A ticket management system built with Laravel and Bootstrap that handles calls, requests, and task tracking efficiently.",
            stacks: ["Laravel", "Laravel", "Laravel"],
            img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "CRISP",
            description: "A ticket management system built with Laravel and Bootstrap that handles calls, requests, and task tracking efficiently.",
            stacks: ["Laravel", "Laravel", "Laravel"],
            img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "CRISP",
            description: "A ticket management system built with Laravel and Bootstrap that handles calls, requests, and task tracking efficiently.",
            stacks: ["Laravel", "Laravel", "Laravel"],
            img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "CRISP",
            description: "A ticket management system built with Laravel and Bootstrap that handles calls, requests, and task tracking efficiently.",
            stacks: ["Laravel", "Laravel", "Laravel"],
            img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "CRISP",
            description: "A ticket management system built with Laravel and Bootstrap that handles calls, requests, and task tracking efficiently.",
            stacks: ["Laravel", "Laravel", "Laravel"],
            img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
        {
            title: "CRISP",
            description: "A ticket management system built with Laravel and Bootstrap that handles calls, requests, and task tracking efficiently.",
            stacks: ["Laravel", "Laravel", "Laravel"],
            img: "https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        },
       
    ]


    return (
        <div>
            <div className="header flex flex-col items-center gap-5 mb-20">
                <p className='text-white poppins-semibold text-2xl'>My Projects</p>
                <p className='text-white italic'>Here are a few personal projects showcasing my experience in full-stack development.
</p>
            </div>
            <div className='grid grid-cols-3 gap-5 place-items-center mx-auto max-w-6xl'>
                {projects.map((item) => (
                    <Card title={item.title} desc={item.description} slug={item.stacks} img={item.img}/>
                ))}
            </div>
        </div>
    )
}

export default Projects