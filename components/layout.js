import Head from 'next/head';
import Link from 'next/link';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MenuHamburguesa from './menuHamburguesa';



const name = 'GIANELLA MERINGOLO';
const career = 'Licenciada en TI- Diseñadora UX/UI';
export const siteTitle = 'Gianella Meringolo'

export default function Layout({ children, home }) {
    return (
        <>
            <Head>
                <meta charset="UTF-8" />
                <link rel='icon' href='/favicon.ico' />
                <meta
                    name="description"
                    content="En esta pagina doy a conocer mi trabajos de diseñadora ux/ui y desarrolladora web. Tambien pueden ver mi experiencia laboral y descargar mi cv en formato pdf"
                />
                <meta name="keywords" content="HTML, CSS, JavaScript" />
                <meta name="og:title" content={siteTitle} />
                <meta name="author" content="Gianella Meringolo"></meta>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="googlebot" content="notranslate" />
                <meta name="google" content="nopagereadaloud" />
            </Head>

            <header class="flex flex-col items-center mt-4 lg:mt-8 mb-0">
                {home ? (
                    <div class="flex justify-around items-center">
                        <div class="flex flex-col items-center">
                            <h1 class="text-primary text-3xl md:text-6xl mb-1">{name}</h1>
                            <h2 class="mt-0 text-dark text-xs md:text-lg lg:text-xl font-inter_tight">{career}</h2>
                        </div>
                        <MenuHamburguesa/>
                    </div>
                ) : (
                    <>
                        <Link href="/">
                            <h1 class="text-primary text-3xl md:text-6xl mb-1">{name}</h1>
                            <h2 class="mt-0 text-dark text-xs md:text-lg lg:text-xl font-inter_tight text-center">{career}</h2>
                        </Link>
                        <Navbar />
                    </>
                )}
            </header>
            <main class="max-w-screen-lg ml-4 mr-3 lg:ml-16 lg:mr-16">{children}</main>
            <Footer />
        </>

    );
}