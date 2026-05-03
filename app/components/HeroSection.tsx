"use client";

import { styled } from '@mui/material/styles';
import { ScrollFadeIn } from './ScrollFadeIn';

const LogoImg = styled('img')(({ theme }) => ({
    cursor: 'pointer',
    width: 130,
    height: 120,
    marginTop: -60,
    marginBottom: -50,
    transition: 'width 0.3s, height 0.3s',
    [theme.breakpoints.up('lg')]: {
        width: 200,
        height: 200,
    },
}));

function HeroSection() {
    return (
        <>
            <div className="relative w-full h-[462px] overflow-hidden z-0">
                {/* Vidéo en arrière-plan */}
                <video
                    src="/video.mp4"
                    className="w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                />
                {/* Overlay sombre */}
                <div className="absolute inset-0 bg-black opacity-50 z-10"></div>
                {/* Texte au-dessus de tout */}
                <div className="absolute inset-0 flex justify-center items-center z-11">
                    <div className="text-center max-w-[90%]">
                        <ScrollFadeIn>
                            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-white font-semibold leading-snug">
                                Trouvez le logement de vos rêves avec IMMO 24
                            </h2>
                            <p className="text-base sm:text-lg md:text-3xl text-white mt-2 lg:mt-4">
                                Au-delà d’une agence, la puissance du changement.
                            </p>
                        </ScrollFadeIn>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HeroSection;
