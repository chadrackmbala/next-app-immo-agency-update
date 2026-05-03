import Image from "next/image";

function Logo() {
    return (
        <Image
            src="/logo-f-b.png"
            alt="Logo IMMO 24"
            width={90}
            height={30}
            loading="eager"
            priority
            className="h-auto"
        />
    );
}

export default Logo;