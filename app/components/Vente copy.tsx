import { NavLink } from 'react-router-dom';

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
            <NavLink
                to="/vente-maison"
                onClick={closeVente}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Maison
            </NavLink>
            <NavLink
                to="/vente-appartement"
                onClick={closeVente}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Appartement
            </NavLink>
            <NavLink
                to="/vente-bureau"
                onClick={closeVente}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Bureau
            </NavLink>
        </div>
    );
}

export default Vente;