import React from 'react'

export default function NavBar() {

    const nav = [
        {
            tabName: "Home",
            path: "#home",
        },
        {
            tabName: "Projects",
            path: "#projects",
        },
        {
            tabName: "Experience",
            path: "#exp",
        },
        {
            tabName: "About",
            path: "#about",
        },
        {
            tabName: "Contact",
            path: "#contact",
        },
    ]
  return (
    <nav className='flex justify-center py-10'>
        <ul className='text-white flex gap-10 poppins-regular'>
            {nav.map((item, key) => (
                <a href={item.path} className='navtab transition-all duration-300 hover:drop-shadow-[0_0_6px_#21AE6C] hover:drop-shadow-[0_0_16px_#21AE6C]'>
                    <li key={key}>
                        {item.tabName}
                    </li>
                </a>
            ))}
        </ul>
    </nav>
  )
}
