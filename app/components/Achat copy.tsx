import { NavLink } from 'react-router-dom';

function Achat({ closeAchat }: {
    closeAchat?: () => void
}) {


    return (
        <div className='flex flex-col p-2 gap-2'>
            <NavLink
                to="/achat-maison"
                onClick={closeAchat}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Maison
            </NavLink>
            <NavLink
                to="/achat-appartement"
                onClick={closeAchat}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Appartement
            </NavLink>
            <NavLink
                to="/achat-bureau"
                onClick={closeAchat}
                // className={({ isActive }) => isActive ? '!text-[#BFA75C]' : '!text-white hover:!text-sky-400'}
            >
                Bureau
            </NavLink>
        </div>
    );
}

export default Achat;