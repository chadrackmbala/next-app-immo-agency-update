"use client";
import Link from "next/link";
import { ScrollFadeIn } from '../components/ScrollFadeIn';

const Images = [
  { src: '/quisommesnous.jpg', alt: 'House' },
  { src: '/valeur3.jpg', alt: 'QuiSommesNous' },
  { src: '/mission.jpg', alt: 'Mission' },
  { src: '/Vision.jpg', alt: 'Vision' },
];

function AboutUs() {
  return (
    <div className='px-10 mt-20 pb-10'>

      {/* Qui sommes-nous */}
      <div className='mb-20 flex flex-col lg:flex-row lg:gap-10 lg:items-center'>
        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <img
              src={Images[0].src}
              alt="Notre Mission"
              className="h-60 w-full rounded-[15px] lg:h-80 lg:w-full object-cover"
            />
          </ScrollFadeIn>
        </div>
        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <h2 className='font-bold text-2xl text-center lg:text-left mt-5 lg:mt-0'>
              Qui sommes-nous ?
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className='mt-5 text-center lg:text-left'>
              <span className='font-bold text-[#E9CD73] text-2xl'>Immo 24</span> est une agence immobilière 100 % en ligne, 
              dédiée à la simplification de la recherche et de l’investissement 
              immobilier au cœur de Kinshasa.<br />
              Nous vous accompagnons à chaque étape du processus, en toute 
              simplicité, qu’il s’agisse de l’achat, de la vente ou de la 
              location de maisons, bureaux, appartements ou terrains.<br />
              Nous prenons également en charge l’ensemble des démarches 
              administratives et juridiques, afin de vous offrir une expérience 
              sécurisée et sans stress.<br />
              Notre équipe d’agents immobiliers expérimentés est pleinement engagée 
              à vous fournir un service professionnel et de qualité à chaque étape.
            </p>
          </ScrollFadeIn>
        </div>
      </div>
      {/* Nos Valeurs */}
      <div className="mb-20 flex flex-col lg:flex-row lg:gap-10 lg:items-center">
        {/* Texte */}
        <div className="order-2 lg:order-1 lg:w-1/2">
          <ScrollFadeIn>
            <h2 className="font-bold text-2xl text-center lg:text-left mt-5 lg:mt-0">
              Nos Valeurs
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="mt-5 text-center lg:text-left">
              ✔ <span className='font-bold'>Accessibilité : </span>
              Un accès simple et rapide à une large base de données
              de biens immobiliers à vendre et à louer, partout à Kinshasa.<br /><br />

              ✔ <span className='font-bold'>Fiabilité : </span>
              Des annonces immobilières et des informations systématiquement
              vérifiées, authentiques et juridiquement sécurisées.<br /><br />

              ✔ <span className='font-bold'>Efficacité et rapidité : </span>
              Un processus immobilier simplifié grâce à des outils numériques
              innovants et à une équipe d’agents immobiliers expérimentés.<br /><br />

              ✔ <span className='font-bold'>Service complet : </span>
              Un accompagnement de A à Z tout au long du processus immobilier,
              incluant la prise en charge de toutes les démarches administratives, juridiques et logistiques.
            </p>
          </ScrollFadeIn>
        </div>
        {/* Image */}
        <div className="order-1 lg:order-2 lg:w-1/2">
          <ScrollFadeIn>
            <img
              src={Images[1].src}
              alt="Nos Valeurs"
              className="h-60 w-full rounded-[15px] lg:h-80 lg:w-full object-cover"
            />
          </ScrollFadeIn>
        </div>
      </div>

      {/* Notre Mission */}
      <div className='lg:flex lg:gap-10 lg:items-center'>
        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <img
              src={Images[2].src}
              alt="Notre Mission"
              className="h-60 w-full rounded-[15px] lg:h-80 lg:w-full object-cover"
            />
          </ScrollFadeIn>
        </div>


        <div className='lg:w-1/2'>
          <ScrollFadeIn>
            <h2 className='font-bold text-2xl text-center lg:text-left mt-5 lg:mt-0'>
              Notre Mission
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className='mt-5 text-center lg:text-left'>
              Faciliter l’accès à l’immobilier à Kinshasa en
              proposant une solution moderne, efficace et fiable,
              mettant rapidement en relation les propriétaires avec les locataires et les acheteurs, dans un cadre professionnel.
            </p>
          </ScrollFadeIn>
        </div>
      </div>

      {/* Notre Vision */}
      <div className="mt-20 flex flex-col lg:flex-row lg:gap-10 lg:items-center">
        {/* Texte */}
        <div className="order-2 lg:order-1 lg:w-1/2">
          <ScrollFadeIn>
            <h2 className="font-bold text-2xl text-center lg:text-left mt-5 lg:mt-0">
              Notre Vision
            </h2>
          </ScrollFadeIn>
          <ScrollFadeIn>
            <p className="mt-5 text-center lg:text-left">
              Devenir la référence de l’immobilier digital à Kinshasa
              en créant des passerelles entre les quartiers et les projets,
              grâce à une agence toujours ouverte, accessible 24h/24 et 7j/7.
            </p>
          </ScrollFadeIn>
        </div>
        {/* Image */}
        <div className="order-1 lg:order-2 lg:w-1/2">
          <ScrollFadeIn>
            <img
              src={Images[3].src}
              alt="Nos Valeurs"
              className="h-60 w-full rounded-[15px] lg:h-80 lg:w-full object-cover"
            />
          </ScrollFadeIn>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
