import Head from 'next/head';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <nav class="mt-6">
                <ul class="flex justify-around items-center text-lg text-dark">
                    <li class="">
                        <Link class="navbar-icon-mt" href="/" title="home">
                            <FaHome size={20}/>
                        </Link>
                    </li>
                    <li>
                        <Link href="/cv" title="cv">
                            Experiencia
                        </Link>
                    </li>
                    <li class="">
                        <Link href="/trabajos" title="trabajos">
                            Trabajos
                        </Link>
                    </li>
                    <li class="li">
                        <Link href="/voluntariado" title="voluntariado">
                            Voluntariado
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}