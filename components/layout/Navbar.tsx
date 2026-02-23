
import Link from 'next/link';
import Image from "next/image";




 
const Navbar = () => {
    return ( 
        <nav className="flex flex-row gap-20 border-b-2 border-gray-200 items-center p-4">
            <Link href="/"><Image src="/Compare Black.svg" alt="Logo" width={100} height={100} /></Link>
            <ul className="flex flex-row gap-20 items-center">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about ">About</Link></li>
                <li><Link href="/products">Products</Link></li>
            </ul>
        </nav>
     );
}
 
export default Navbar;   