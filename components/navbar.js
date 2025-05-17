import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaHome } from "react-icons/fa";
import { memo } from 'react';

const Navbar = memo(() => {
    const router = useRouter();

    return (
        <>
            <nav className="mt-6 w-[375px] md:w-[400px]">
                <ul className="flex justify-around items-center text-md md:text-lg text-dark">
                    <li>
                        <Link 
                            className={`navbar-icon-mt nav-link ${router.pathname === '/' ? 'active' : ''}`} 
                            href="/" 
                            title="home"
                            prefetch={true}
                        >
                            <FaHome size={20}/>
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`nav-link ${router.pathname === '/experiencia' ? 'active' : ''}`} 
                            href="/experiencia" 
                            title="experiencia"
                            prefetch={true}
                        >
                            Experiencia
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`nav-link ${router.pathname === '/portfolio' ? 'active' : ''}`} 
                            href="/portfolio" 
                            title="portfolio"
                            prefetch={true}
                        >
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link 
                            className={`nav-link ${router.pathname === '/voluntariado' ? 'active' : ''}`} 
                            href="/voluntariado" 
                            title="voluntariado"
                            prefetch={true}
                        >
                            Voluntariado
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
});

Navbar.displayName = 'Navbar';

export default Navbar;