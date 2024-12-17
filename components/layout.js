import Head from 'next/head';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';

const name = 'GIANELLA MERINGOLO';
const career = 'Licenciada en TI- Web developer- UX/UI designer';
export const siteTitle = 'Gianella Meringolo'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name="description"
                    content="Gianella Meringolo website"
                />
                <meta name="og:title" content={siteTitle} />

            </Head>
    
            <header className={styles.header}>
                {home ? (
                    <>
                        <h1>{name}</h1>
                        <h3>{career}</h3>
                    </>
                ) : (
                    <>
                        <h1>{name}</h1>
                        <h3>{career}</h3>
                        <Navbar/>

                    </>
                )}
            </header>
            <main>{children}</main>
        </>

    );
}