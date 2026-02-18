import Link from 'next/link';
import Image from 'next/image';


export default function Navbar() {
    return (
        <nav className="h-25 flex justify-between items-center p-4 bg-[#2E95B8] text-white border-b-1 border-solid border-white">
            <div className="flex items-center gap-8">
                <Image src="/WaveCircle/image1.png" alt="Logo" width={91} height={91} />
                <div className="w-1 h-20.5 bg-[#ffffff] rounded-full"></div>
                <p className="heading2 text-white">G.S.</p>
            </div>
            <div className="flex items-center gap-10">
                <Link href="/" className="heading4 text-white">
                    About Me
                </Link>
                <Link href="/projects" className="heading4 text-white">
                    Projects
                </Link>
                <Link href="/contact" className="heading4 text-white">
                    Contact
                </Link>
            </div>
        </nav>
    );
}