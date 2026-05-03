"use client";
import Link from "next/link";
import { ScrollFadeIn } from '../components/ScrollFadeIn';

const Images = [
  { src: '/Proprio3.png', alt: 'House' },
  { src: '/HowToUse.png', alt: 'How' },
];

function OffreImmobilierePage() {

  return (
    <div>
      <ScrollFadeIn>
        <p className="text-sm uppercase tracking-[0.3em] text-[#BFA75C]">Offre Immobilière</p>
        {/* <h2 className='text-4xl text-center mt-20 mb-5 lg:my-20 font-bold'>Offre Immobilière</h2> */}
        <div className='lg:text-xl mx-10 flex flex-col lg:flex-row lg:items-center lg:justify-center lg:w-[1100px] lg:mx-auto'>

          {/* Texte */}
          <div className='lg:w-1/2 flex flex-col'>
            <ScrollFadeIn>
              <p className='text-center lg:text-left'>
                Êtes-vous propriétaire d’un bien immobilier (maison, appartement,
                terrain, bureau, maison commerciale ou parcelle) et souhaitez le
                mettre en location ou le vendre ?<br /><br />

                {/* IMAGE MOBILE après ce paragraphe */}
                <span className='block lg:hidden'>
                  <img
                    src={Images[0].src}
                    alt="Notre Mission"
                    className="h-80 w-full rounded-[15px] mb-6 object-cover"
                  />
                </span>

                Vous êtes au bon endroit pour réaliser votre opération immobilière
                en toute sécurité et en toute sérénité.<br /><br />

                <span className='font-bold text-[#E9CD73] text-2xl'>Immo 24</span> est une
                plateforme immobilière 100 % en ligne qui permet à
                votre offre de toucher un grand nombre de demandeurs en un temps
                record, tout en vous aidant à bénéficier des meilleures opportunités du marché.<br /><br />

                Rejoignez dès maintenant la liste de propriétaires qui ont vendu ou loué leurs
                biens en toute sérénité avec Immo 24.
              </p>
            </ScrollFadeIn>
          </div>

          {/* IMAGE DESKTOP */}
          <div className='lg:w-1/2 hidden lg:flex justify-center items-center'>
            <ScrollFadeIn>
              <img
                src={Images[0].src}
                alt="Notre Mission"
                className="h-[420px] w-[520px] rounded-[15px] object-cover"
              />
            </ScrollFadeIn>
          </div>

        </div>

        <ScrollFadeIn>
          <h2 className='text-3xl text-center mt-10 mb-5 lg:my-20 font-bold mx-4'>Comment ça marche ?</h2>
        </ScrollFadeIn>
        <ScrollFadeIn>
          <div className='mx-10 lg:w-[1100px] flex flex-col lg:flex-row  lg:gap-60 lg:mx-auto lg:text-xl'>
            <span className=''>
              <img
                src={Images[1].src}
                alt="Notre Mission"
                className="lg:w-[350px] lg:h-[500px] rounded-[15px] mb-6 object-cover"
              />
            </span>
            <p className='text-left lg:w-1/2'>
              Nous recherchons des biens immobiliers, qu’il s’agisse de terrains,
              appartements, parcelles, bureaux ou espaces commerciaux, de toutes
              tailles, situés dans toutes les communes et quartiers de la ville-province de Kinshasa.<br /><br />

              Notre processus est simple et rapide : <br />
              Remplissez ce{" "}
              <Link href="/contact-form" className="text-sky-600 cursor-pointer">
                formulaire
              </Link>
              , une fois vos informations reçues,
              nous vous contacterons pour fixer un rendez-vous à l’adresse
              de votre bien (propiété). Notre équipe d’agents prendra tous les détails concernant votre offre,
              la géolocalisation, ainsi que des photos de haute qualité de votre propriété.<br /><br />

              Vos biens immobiliers seront ensuite exposés sur notre plateforme, visitée
              quotidiennement par des milliers de demandeurs.<br /><br />

              Nous nous engageons à trouver pour vous les meilleurs acquéreurs ou locataires,
              en tenant compte des spécificités de votre bien.<br /><br />
            </p>
          </div>
        </ScrollFadeIn>
      </ScrollFadeIn>
    </div>
  )
}

export default OffreImmobilierePage;