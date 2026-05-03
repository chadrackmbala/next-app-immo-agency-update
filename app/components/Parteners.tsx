import { ScrollFadeIn } from './ScrollFadeIn';

const logos = [
  { src: '/meta.svg', alt: 'Meta' },
  { src: '/google.svg', alt: 'Google' },
  { src: '/microsoft.ico', alt: 'Microsoft' },
  { src: '/amazon.svg', alt: 'Amazon' },
  { src: '/vodacom.png', alt: 'Vodacom' },
  { src: '/presidence.png', alt: 'Presidence' },
  { src: '/ey.png', alt: 'EY' },
  { src: '/apple.png', alt: 'Apple' },
  { src: '/deloitte.png', alt: 'Deloitte' },
];

function Parteners() {
  return (
    <div className="bg-transparent pb-7 px-4 sm:px-6 lg:px-8">
      <ScrollFadeIn>
        <h3 className="text-black font-bold text-2xl text-center mb-6">Nos Partenaires</h3>
      </ScrollFadeIn>
      <ScrollFadeIn>
        <div className="overflow-hidden relative w-full">
          <div
            className="inline-flex gap-8 min-w-max whitespace-nowrap"
            style={{ animation: 'marquee 20s linear infinite' }}
          >
            {[...logos, ...logos].map((logo, index) => (
              <img
                key={`${logo.alt}-${index}`}
                src={logo.src}
                alt={logo.alt}
                loading="lazy"
                className="inline-block w-[63px] h-[61px] object-contain opacity-90 hover:opacity-100 transition duration-300"
              />
            ))}
          </div>
        </div>
      </ScrollFadeIn>
    </div>
  );
}

export default Parteners;
