"use client";
import Link from "next/link";

function Location({ closeLocation }: {
    closeLocation?: () => void
}) {

    // const [activeType, setActiveType] = useState("maison");

    // const ActiveButton = {
    //     backgroundColor: '#FDD14E',
    //     textTransform: 'none',
    //     color: '#1D3865',
    //     border: 'none',
    //     width: 155,
    //     borderRadius: 0,
    //     '&:hover': {
    //         backgroundColor: '#a98f4e',
    //         border: 'none',
    //     },
    //     '&:focus': {
    //         outline: 'none',
    //     },
    // };

    // const UnactiveButton = {
    //     backgroundColor: '#1D3865',
    //     textTransform: 'none',
    //     color: 'white',
    //     border: 'none',
    //     width: 155,
    //     borderRadius: 0,
    //     '&:hover': {
    //         backgroundColor: '#a98f4e',
    //         border: 'none',
    //     },
    //     '&:focus': {
    //         outline: 'none',
    //     },
    // };

    return (
        <div className='flex flex-col p-2 gap-2'>

            {/* <NavLink
                to="/location"
                onClick={closeLocation}
                className={({ isActive }) =>
                    isActive
                        ? '!text-[#BFA75C]'
                        : 'hover:!text-sky-400 transition-colors duration-200'
                }
            >
                Louer
            </NavLink> */}
            <Link
                href="/location-maison"
                scroll={true}
                onClick={() => closeLocation?.()}
            >
                Maison
            </Link>
            <Link
                href="/location-appartement"
                scroll={true}
                onClick={() => closeLocation?.()}
            >
                Appartement
            </Link>
            <Link
                href="/location-bureau"
                scroll={true}
                onClick={() => closeLocation?.()}
            >
                Bureau
            </Link>
        </div>
    );
}

export default Location;