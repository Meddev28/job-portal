// NavLinks.js
import React from 'react';
import { Link } from 'react-router-dom';
import { IconHome, IconBriefcase, IconBuilding, IconHeart, IconFileDescription } from "@tabler/icons-react";

const NavLinks = () => {
    const links = [
        { to: "/", icon: IconHome, label: "Home" },
        { to: "/jobs", icon: IconBriefcase, label: "Jobs" },
        { to: "/talents", icon: IconFileDescription, label: "Talents" },
        { to: "/companies", icon: IconBuilding, label: "Companies" },
       // { to: "/saved", icon: IconHeart, label: "Saved" },
        { to: "/applications", icon: IconFileDescription, label: "Applications" }
    ];

    return (
        <nav className="flex flex-col lg:flex-row gap-4 lg:gap-8">
            {links.map((link) => {
                const IconComponent = link.icon;
                return (
                    <Link
                        key={link.to}
                        to={link.to}
                        className="flex items-center gap-2 text-gray-700 hover:text-amber-400 transition-colors duration-200 font-medium py-2 lg:py-0"
                    >
                        <IconComponent className="h-4 w-4" />
                        <span>{link.label}</span>
                    </Link>
                );
            })}
        </nav>
    );
}

export default NavLinks;