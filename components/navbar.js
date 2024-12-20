import Head from 'next/head';
import Link from 'next/link';
import { FaHome } from "react-icons/fa";

export default function Navbar() {
    return (
        <>
            <Head>
                <title>Navbar</title>
            </Head>
            <nav class="mt-6">
                <ul class="ul">
                    <li class="li">
                        <Link class="navbar-icon-mt" href="/" title="home">
                            <FaHome />
                        </Link>
                    </li>
                    <li class="li">
                        <Link href="/sobre_mi" title="sobre mi">
                            Sobre mi
                        </Link>
                    </li>
                    <li class="li">
                        <Link href="/cv" title="cv">
                            CV
                        </Link>
                    </li>
                    <li class="li">
                        <Link href="/freelance" title="freelance">
                            Freelance
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