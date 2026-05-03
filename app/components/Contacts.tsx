"use client";
import { FaClock } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { styled } from '@mui/material/styles';

const logo = [
  { src: '/logo-fond-blanc.png', alt: 'Logo' },
];

const LogoImg = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    width: 140,
    height: 120,
    transition: 'width 0.3s, height 0.3s',
    [theme.breakpoints.up('lg')]: {
        width: 220,
        height: 190,
    },
}));

const scrollToTop = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

function Contacts() {

    return (
        <div className='pt-1 bg-[#FFF9E6] text-black px-6 sm:px-10 lg:px-14'>
            <div className="flex pb-10 mt-10 justify-center">
                <div className="flex flex-col items-center justify-center w-full gap-8 lg:flex-row lg:items-center lg:justify-center lg:gap-12">
                    <a href="#" className='mb-0 lg:mb-0 flex-shrink-0'>
                        <LogoImg
                            src={logo[0].src}
                            alt={logo[0].alt}
                            onClick={() => {
                                window.scrollTo({ top: 0, behavior: "smooth" });
                            }}
                        />
                    </a>
                    <div className='flex justify-center w-full max-w-3xl lg:pl-100'>
                        <div className='flex flex-col items-start gap-5 w-full max-w-2xl text-left'>
                            <div className='flex flex-col gap-3 items-start'>
                                <h3 className='font-semibold text-black'>Adresse</h3>
                                <div className='text-slate-600 flex items-center justify-start gap-2'>
                                    <FaLocationDot color="#BFA75C" className="w-6 h-6" />
                                    <span>277, Av : Marine, Q : UPN, C : Ngaliema</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 items-start'>
                                <h3 className='font-semibold text-black'>Contacts</h3>
                                <div className='text-slate-600 flex items-center justify-start gap-2'>
                                    <FaPhoneAlt color="#BFA75C" className="w-5 h-5" />
                                    <span>+243 81 49 84 424</span>
                                </div>
                                <div className='text-slate-600 flex items-center justify-start gap-2'>
                                    <IoIosMail color="#BFA75C" className="w-7 h-7" />
                                    <span>chadrackmbala20@gmail.com</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-3 items-start'>
                                <h3 className='font-semibold text-black'>Programmes</h3>
                                <div className='text-slate-600 flex items-center justify-start gap-2'>
                                    <FaClock color="#BFA75C" className="w-6 h-6" />
                                    <span>Du lundi au vendredi, de 08h à 17h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contacts;