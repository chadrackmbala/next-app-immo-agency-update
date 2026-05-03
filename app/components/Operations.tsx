"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useRef } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import useMenuStore from '../context/Provider';
import useOperationContextProvider from '../context/OperationsContextProvider';
import Location from "./Location";
import Vente from "./Vente";
import Achat from "./Achat";

function Operations({ closeOperations }: {
  closeOperations: () => void;
}) {
  

  const { overLay, setOverLay, isOpen, setOpen } = useMenuStore();

  const [isToggleLocation, setIsToggleLocation] = useState(false);
  const [isToggleAchat, setIsToggleAchat] = useState(false);
  const [isToggleVente, setIsToggleVente] = useState(false);
  const { setIsCliked } = useOperationContextProvider();
  const pathname = usePathname();
  const [openSubMenu, setOpenSubMenu] = useState<string | null>(null);
  
  // valeurs possibles : 'location' | 'achat' | 'vente' | null

  function closeAll() {
  setOpen(false);        // menu mobile
  setOpenSubMenu(null);  // sous-menu
  closeOperations();     // dropdown opérations
  setOverLay(false);
}

  function toggleSubMenu(name: string) {
    setOpenSubMenu(prev => (prev === name ? null : name));
  }

  useEffect(() => {
  const operationsRoutes = ['/achat', '/vente', '/location'];
  setIsCliked(operationsRoutes.includes(pathname));
}, [pathname, setIsCliked]);

  return (

    <div>
      <div className="flex flex-col text-white pl-2 gap-2">
        <div
          onClick={() => toggleSubMenu('location')}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h2 className={openSubMenu === 'location' ? 'text-[#BFA75C]' : 'text-white'}>
            Location
          </h2>
          {openSubMenu === 'location'
            ? <ChevronRightIcon />
            : <ExpandMoreIcon />}
        </div>

        {openSubMenu === 'location' && (
          <div className=" w-40">
            <Location closeLocation={closeAll} />
          </div>
        )}

        <div
          onClick={() => toggleSubMenu('vente')}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h2 className={openSubMenu === 'achat' ? 'text-[#BFA75C]' : 'text-white'}>
            Vente
          </h2>
          {openSubMenu === 'vente'
            ? <ChevronRightIcon />
            : <ExpandMoreIcon />}
        </div>

        {openSubMenu === 'vente' && (
          <div className=" w-40">
            <Vente closeVente={closeAll} />
          </div>
        )}

        <div
          onClick={() => toggleSubMenu('achat')}
          className="flex items-center gap-1 cursor-pointer"
        >
          <h2 className={openSubMenu === 'achat' ? 'text-[#BFA75C]' : 'text-white'}>
            Achat
          </h2>
          {openSubMenu === 'achat'
            ? <ChevronRightIcon />
            : <ExpandMoreIcon />}
        </div>

        {openSubMenu === 'achat' && (
          <div className=" w-40">
            <Achat closeAchat={closeAll} />
          </div>
        )}
      </div>
    </div>
  );
}

export default Operations;
