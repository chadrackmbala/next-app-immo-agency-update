import Link from "next/link";
import Image from "next/image";

function Logo() {
    return (
        <Link href="/">
            <Image
                src="/logo-f-b.png"
                alt="Logo IMMO 24"
                width={90}
                height={30}
                loading="eager"
                priority
                className="h-auto cursor-pointer"
            />
        </Link>
    );
}

export default Logo;