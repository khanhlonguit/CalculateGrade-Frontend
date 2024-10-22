import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaGraduationCap, FaBook, FaPencilAlt } from 'react-icons/fa';

function NavigationBar() {
  const navItems = [
    { to: "/grade", icon: FaGraduationCap, text: "Chấm bài" },
    { to: "/syllabus", icon: FaBook, text: "Rút trích syllabus" },
    { to: "/exam", icon: FaPencilAlt, text: "Soạn đề" },
  ];

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 mb-8 shadow-lg">
      <div className="container mx-auto">
        <ul className="flex justify-start space-x-6">
          {navItems.map((item, index) => (
            <li key={index}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-purple-600 shadow-md transform scale-105'
                      : 'text-white hover:bg-white/20'
                  }`
                }
              >
                <item.icon className="mr-2" />
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default NavigationBar;
