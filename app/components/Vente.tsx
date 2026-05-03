"use client";
import Link from "next/link";

function Vente({ closeVente }: {
    closeVente?: () => void;
}) {
    // const { isOpen, setOpen } = useMenuStore();

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
            <Link
                href="/vente-maison"
                scroll={true}
                onClick={() => closeVente?.()}
            >
                Maison
            </Link>
            <Link
                href="/vente-appartement"
                scroll={true}
                onClick={() => closeVente?.()}
            >
                Appartement
            </Link>
            <Link
                href="/vente-bureau"
                scroll={true}
                onClick={() => closeVente?.()}
            >
                Bureau
            </Link>
        </div>
    );
}

export default Vente;