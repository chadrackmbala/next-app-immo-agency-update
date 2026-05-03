"use client";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import Contacts from "../components/Contacts";
import Parteners from "../components/Parteners";
import NewsLetter from "../components/NewsLetter";
import { ScrollFadeIn } from "../components/ScrollFadeIn";

export default function Footer() {
  return (
    <div className="w-full flex justify-center bg-[#FFFFFF]">
      <div className="w-full">
        <div className="bg-[#F0F0F0] p-10 flex flex-col items-center justify-center gap-5 lg:flex-row lg:gap-50">
          <ScrollFadeIn>
            <div className="text-black">
              <h2 className='text-2xl font-bold'>Join our newsletter</h2>
              <p>We'll send you a nice letter once per week. No spam.</p>
            </div>
            <NewsLetter />
          </ScrollFadeIn>
        </div>
        <Parteners />
        <ScrollFadeIn>
          <Contacts />
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="w-[90%] sm:w-[70%] lg:w-[95%] mx-auto h-px bg-[#7F7C72]"></div>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className="bg-[#FFF9E6] flex flex-col items-center gap-5 lg:flex-row lg:justify-center lg:items-center text-black">
            <h2 className='text-2xl font-bold mt-2 lg:mt-0'>IMMO 24</h2>
            <h2 className='text-center px-10'>© 2026 Tous droits réservés || Conçu par Chadrack Mbala</h2>
            <div className='flex justify-center gap-5 p-5'>
              <a
                href="https://web.facebook.com/chadrack.mbala.10"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100 hover:text-black transition-all duration-300" />
              </a>
              <a
                href="https://www.linkedin.com/in/chadrack-mbala-m-8b3a7326b/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100 hover:text-black transition-all duration-300" />
              </a>
              <a
                href="https://x.com/mbala_chadrack"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaXTwitter className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100 hover:text-black transition-all duration-300" />
              </a>
              <a
                href="https://www.instagram.com/chadrack3979/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagramSquare className="w-5 h-5 cursor-pointer opacity-50 hover:opacity-100 hover:text-black transition-all duration-300" />
              </a>
            </div>
          </div>
        </ScrollFadeIn>
      </div>
    </div>
  );
}
