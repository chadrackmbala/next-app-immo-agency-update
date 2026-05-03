"use client";
import Link from "next/link";

function Achat({ closeAchat }: {
    closeAchat?: () => void
}) {

    return (
        <div className='flex flex-col p-2 gap-2'>
            <Link
                href="/achat-maison"
                scroll={true}
                onClick={() => closeAchat?.()}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Maison
            </Link>
            <Link
                href="/achat-appartement"
                scroll={true}
                onClick={() => closeAchat?.()}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Appartement
            </Link>
            <Link
                href="/achat-bureau"
                scroll={true}
                onClick={() => closeAchat?.()}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Bureau
            </Link>
        </div>
    );
}

export default Achat;