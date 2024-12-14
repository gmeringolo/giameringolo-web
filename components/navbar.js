import Head from 'next/head';
import styles from './navbar.module.css';

export default function Navbar() {
    return (
        <>
            <Head>
                <title>Navbar</title>
            </Head>
            <nav>
                <ul>
                    <li>
                        <a href="#sobre-mi" title="sobre mi">
                            Sobre mi
                        </a>
                    </li>
                    <li>
                        <a href="#cv" title="cv">
                            CV
                        </a>
                    </li>
                    <li>
                        <a href="#freelance" title="freelance">
                            Freelance
                        </a>
                    </li>
                    <li>
                        <a href="#voluntariado" title="voluntariado">
                            Voluntariado
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}