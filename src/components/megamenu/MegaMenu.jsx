import { NavLink } from 'react-router-dom';
import { menuData } from './data';
import { useEffect, useRef, useState } from 'react';
import Dropdown from './Dropdown';
import { motion, AnimatePresence } from 'framer-motion';

export function MegaMenu() {
    const [activeTab, setActiveTab] = useState(null);
    const [dropdownPosition, setDropdownPosition] = useState({left:0, top:0});
    const activeTabRef = useRef(null)

    const activeTabContent = menuData.find(item => item.title === activeTab);

    const underlineVariants = {
        hidden:{scaleX:0},
        visible:{scaleX:1}
    }
    const updateDropdownPosition = () => {
        const { left, width} = activeTabRef.current.getBoundingClientRect();
        setDropdownPosition({
            left: left + width / 2 - 280,
        })
    }

    useEffect(() => {
        if(activeTab){
            updateDropdownPosition()
            console.log(activeTab)
        }
    }, [activeTab] )

    return (
        <>
            <ul className="flex gap-10 h-full ">
                {menuData.map((item, index) => (
                    <li 
                        key={index} 
                        className='relative flex column items-center group'
                        
                        onMouseEnter={() => setActiveTab(item.title)}
                        onMouseLeave={() => setActiveTab(null)}
                    >
                        <NavLink 
                            to={item.link}
                            ref={item.title === activeTab ? activeTabRef : null }
                            style={({ isActive }) => isActive ? {color:"#3d5afe"} : {}}
                            className={` ${item.title === activeTab ? "text-indigo_accent" :""}`}
                        >
                            {item.title}
                        </NavLink>
                        <motion.div
                            variants={underlineVariants}
                            initial="hidden"
                            animate={item.title === activeTab ? "visible" : "hidden"}
                            transition={{
                                type: "spring",
                                stiffness: 300,
                                damping: 20,
                                delay: 0.2
                            }}
                            className="bg-indigo_accent absolute bottom-0 left-0 right-0 h-0.5"
                        />
                    </li>
                ))}  
            </ul>
            <AnimatePresence >
                {activeTab && activeTabContent?.dropdown && (
                <Dropdown  layout setActiveTab={setActiveTab} activeTab={activeTab} activeTabContent={activeTabContent} dropdownPosition={dropdownPosition}/>
                )}
            </AnimatePresence>
        </>
    );
}
