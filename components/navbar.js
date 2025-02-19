import Head from 'next/head';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <nav class="mt-6">
                <ul class="flex justify-around items-center text-lg text-dark">
                    <li>
                        <Link class="navbar-icon-mt hover:text-primary" href="/" title="home">
                            <FaHome size={20}/>
                        </Link>
                    </li>
                    <li>
                        <Link class="hover:text-primary hover:font-semibold  focus:text-primary" href="/cv" title="experiencia">
                            Experiencia
                        </Link>
                    </li>
                    <li>
                        <Link class="hover:text-primary hover:font-semibold" href="/trabajos" title="trabajos">
                            Trabajos
                        </Link>
                    </li>
                    <li>
                        <Link class="hover:text-primary hover:font-semibold" href="/voluntariado" title="voluntariado">
                            Voluntariado
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}