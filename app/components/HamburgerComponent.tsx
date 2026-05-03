"use client";
import { useState, useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Hamburger from "hamburger-react";
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import NavLinks from "./navlinks";
import useMenuStore from "../context/HamburgerProvider";
import { ScrollFadeIn } from './ScrollFadeIn';

function HamburgerComponent() {
    const pathname = usePathname();
    const prevPathname = useRef(pathname);
    const { overLay, setOverLay } = useMenuStore();

    useEffect(() => {
        document.body.style.overflow = overLay ? "hidden" : "auto";

        return () => {
            document.body.style.overflow = "auto";
        };
    }, [overLay]);

    useEffect(() => {
        if (pathname !== prevPathname.current && overLay) {
            setOverLay(false);
        }
        prevPathname.current = pathname;
    }, [pathname, overLay, setOverLay]);

    return (
        <>
            <Hamburger toggled={overLay} toggle={setOverLay} color="#ffffff" />
            {overLay && (
                <div className="fixed inset-0 bg-slate-900 dark:bg-slate-900 text-black dark:text-white z-[9999]">
                    <ScrollFadeIn>
                    <div className="flex justify-end p-4">
                        <Hamburger toggled={overLay} toggle={setOverLay} color="#ffffff" />
                    </div>
                    </ScrollFadeIn>
                            <ScrollFadeIn>
                        <main className="flex flex-col gap-4 items-start text-2xl text-left px-6 pt-0">
                            <NavLinks mobile onLinkClick={() => setOverLay(false)} />
                        </main>
                    </ScrollFadeIn>
                </div>
            )}
        </>
    );
}

export default HamburgerComponent;
