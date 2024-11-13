import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

function Dropdown({ setActiveTab, activeTab, activeTabContent, dropdownPosition }) {
  const { left } = dropdownPosition;

  const dropdownVariants = {
    initial: {
      opacity: 0,
      y: -10,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.05,
      },
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.05,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        when: "afterChildren",
        staggerChildren: 0.05,
        staggerDirection: -1,
      },
    },
  };

  const categoryVariants = {
    initial: {
      opacity: 0,
      y: -10,
      scale: 0.9,
    },
    animate: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 25,
      },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <AnimatePresence>
      {activeTab && activeTabContent?.dropdown && (
        <motion.div
          variants={dropdownVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="flex top-20 gap-20 absolute bg-white rounded-b-3xl shadow-md p-7 z-10 transition-all"
          style={{ left: left }}
          onMouseEnter={() => setActiveTab(activeTab)}
          onMouseLeave={() => setActiveTab(null)}
        >
          {activeTabContent.dropdown.map((subitem) => (
            <motion.div key={subitem.category} variants={categoryVariants}>
              <motion.h2
                className="font-semibold pb-4 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                {subitem.category}
              </motion.h2>
              {subitem.links.map((link, linkIndex) => (
                <motion.div key={linkIndex}>
                  <NavLink
                    to={link}
                    className={({ isActive }) =>
                      `block py-1 transition-colors duration-200 ${
                        isActive
                          ? 'text-indigo_accent'
                          : 'text-gray-600 hover:text-indigo_accent'
                      }`
                    }
                  >
                    {link}
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default Dropdown;