import { NavLink } from 'react-router-dom';
import { menuData } from './data';
import { useState } from 'react';

export function MegaMenu() {
    const [activeTab, setActiveTab] = useState(null);
    const activeTabContent = menuData.find(item => item.title === activeTab);

    return (
        <>
            <ul className="flex gap-10 h-full ">
                {menuData.map((item, index) => (
                    <li 
                        key={index} 
                        className="flex items-center h-full group"
                        onMouseEnter={() => setActiveTab(item.title)}
                        onMouseLeave={() => setActiveTab(null)}
                    >
                        <NavLink 
                            to={item.link}
                            className={({ isActive }) => 
                                `flex items-center h-full border-b-2 transition-all ${
                                    (isActive && activeTab === null) 
                                    ? 'border-text' 
                                    : 'border-transparent hover:border-text'
                                }`
                            }
                        >
                            {item.title}
                        </NavLink>
                    </li>
                ))}  
            </ul>
            {activeTab && activeTabContent?.dropdown && (
                <div 
                    className="w-3/4 flex justify-evenly gap-20 absolute top-[80px] bg-white rounded-b-3xl shadow-md p-7 z-10 transition-all" 
                    onMouseEnter={() => setActiveTab(activeTab)}
                    onMouseLeave={() => setActiveTab(null)}
                >
                    {activeTabContent.dropdown.map(subitem => (
                        <div key={subitem.category} className="relative">
                            <h2 className="font-semibold pb-4">{subitem.category}</h2>
                            {subitem.links.map((link, linkIndex) => (
                                <NavLink 
                                    key={linkIndex}
                                    to={link}
                                    className={({ isActive }) => 
                                        isActive ? 'text-indigo_accent' : 'block hover:text-indigo_accent'
                                    }
                                >
                                    {link}
                                </NavLink>
                            ))}
                        </div>   
                    ))}
                </div>
            )}
        </>
    );
}
