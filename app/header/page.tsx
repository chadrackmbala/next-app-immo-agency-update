"use client";
import Image from "next/image";
import Logo from "../components/logo";
import { ScrollFadeIn } from '../components/ScrollFadeIn';
import SearchBar from '../components/SearchBar';
import ThemeToggle from '../components/ThemeToggle';
import { useState, useEffect } from 'react';
import NavLinks from "../components/navlinks";
import HamburgerComponent from "../components/HamburgerComponent";

function Header() {

    const [hideTopNav, setHideTopNav] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Si l'utilisateur a scrollé plus de 50px vers le bas
            if (window.scrollY > 10) {
                setHideTopNav(true);
            } else {
                setHideTopNav(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // 🔹 State pour suivre la largeur de l’écran

    const [isDesktop, setIsDesktop] = useState(false);

    useEffect(() => {
        // 🔹 Vérifie la largeur au montage
        const checkScreen = () => setIsDesktop(window.innerWidth >= 768);
        checkScreen();

        // 🔹 Met à jour à chaque resize
        const handleResize = () => checkScreen();
        window.addEventListener('resize', handleResize);

        // 🔹 Nettoyage
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className='pb-[120px] mb-5.5 Z-100'>
            <header className="bg-[#1E3866] text-white fixed top-0 w-full z-10">
                <div
                    className={`transition-all duration-500 ease-in-out transform 
                    ${hideTopNav ? 'opacity-0 -translate-y-10 h-0 overflow-hidden' : 'opacity-100 translate-y-0 h-auto'}`}
                >
                    <ScrollFadeIn>
                        <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 pt-2 lg:px-8">
                            <SearchBar />
                            <ThemeToggle />
                        </div>
                    </ScrollFadeIn>
                    <div className="h-[2px] w-screen bg-[#BFA75C] mt-2" />
                </div>
                <div className="flex items-center justify-between px-4 py-2 lg:px-8">
                    <Logo />
                    {isDesktop ? <NavLinks /> : <HamburgerComponent />}
                </div>
            </header>
        </div>

    );
}

export default Header;