import Head from 'next/head';
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
    
            <header class="flex flex-col items-center">
                {home ? (
                    <>
                        <h1 class="mt-5">{name}</h1>
                        <h3>{career}</h3>
                    </>
                ) : (
                    <>
                        <h1 class="mt-5">{name}</h1>
                        <h3>{career}</h3>
                        <Navbar/>
                    </>
                )}
            </header>
            <main>{children}</main>
        </>

    );
}