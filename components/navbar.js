import Head from 'next/head';
import Link from 'next/link';

export default function Navbar() {
    return (
        <>
            <Head>
                <title>Navbar</title>
            </Head>
            <nav>
                <ul>
                    <li>
                        <Link href="/sobre_mi" title="sobre mi">
                            Sobre mi
                        </Link>
                    </li>
                    <li>
                        <Link href="/cv" title="cv">
                            CV
                        </Link>
                    </li>
                    <li>
                        <Link href="/freelance" title="freelance">
                            Freelance
                        </Link>
                    </li>
                    <li>
                        <Link href="/voluntariado" title="voluntariado">
                            Voluntariado
                        </Link>
                    </li>
                </ul>
            </nav>
        </>
    );
}