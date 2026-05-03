"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMenuStore from './Provider';
import useOperationContextProvider from '../context/OperationsContextProvider';
import Operations from "./Operations";

type NavLinksProps = {
  mobile?: boolean;
  onLinkClick?: () => void;
};

function NavLinks({ mobile = false, onLinkClick }: NavLinksProps) {

    const [isToggleOperations, setIsToggleOperations] = useState(false);
    const operationsRef = useRef<HTMLDivElement | null>(null);
    const { isCliked, setIsCliked } = useOperationContextProvider();
    const { setOpen } = useMenuStore();

    const pathname = usePathname();

    useEffect(() => {
        const routesOperations = ['/achat', '/vente', '/location'];
        setIsCliked(routesOperations.includes(pathname));
    }, [pathname, setIsCliked]);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (
                operationsRef.current &&
                !operationsRef.current.contains(event.target as Node)
            ) {
                setIsToggleOperations(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const linkClass = (path: string) =>
        pathname === path
            ? "text-[#BFA75C]"
            : "text-white hover:text-sky-400";

    const navClass = mobile
        ? "flex flex-col gap-6 px-6 py-6 text-white"
        : "hidden lg:flex gap-8 ml-10 items-center mr-30";

    const handleLinkClick = () => {
        if (!mobile) {
            onLinkClick?.();
            setOpen(false);
        }
    };

    return (
        <nav className={navClass}>

            <Link href="/homepage" scroll={true} className={linkClass("/homepage")} onClick={handleLinkClick}>
                Accueil
            </Link>

            <Link href="/about-us" scroll={true} className={linkClass("/about-us")} onClick={handleLinkClick}>
                A propos de nous
            </Link>

            {/* ✅ WRAPPER RELATIVE (TRÈS IMPORTANT) */}
            <div ref={operationsRef} className="relative">

                {/* bouton */}
                <div
                    onClick={() => setIsToggleOperations(prev => !prev)}
                    className="flex items-center gap-1 cursor-pointer"
                >
                    <span className={isCliked ? "text-[#BFA75C]" : "text-white"}>
                        Opérations
                    </span>

                    {isToggleOperations
                        ? <ChevronRightIcon className="text-white" />
                        : <ExpandMoreIcon className="text-white" />
                    }
                </div>

                {/* dropdown */}
                {isToggleOperations && (
                    <div className="absolute left-0 top-full mt-7.5 w-full lg:w-40 bg-[#1E3866] shadow-lg rounded-b-md z-50">

                        <div className="bg-[#BFA75C] h-0.5"></div>

                        <Operations
                            closeOperations={() => {
                                setIsToggleOperations(false);
                                setOpen(false);
                                if (!mobile) {
                                    onLinkClick?.();
                                }
                            }}
                        />
                    </div>
                )}

            </div>

            <Link href="/offre-immobiliere" scroll={true} className={linkClass("/offre-immobiliere")} onClick={handleLinkClick}>
                Offre Immobilière
            </Link>

            <Link href="/documentation" scroll={true} className={linkClass("/documentation")} onClick={handleLinkClick}>
                Documentation
            </Link>

            <Link href="/ajout" scroll={true} className={linkClass("/ajout")} onClick={handleLinkClick}>
                Ajout d'informations
            </Link>

        </nav>
    );
}

export default NavLinks;