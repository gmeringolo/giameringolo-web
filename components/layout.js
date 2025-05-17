import Head from 'next/head';
import Link from 'next/link';
import { memo } from 'react';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import MenuHamburguesa from './menuHamburguesa';

const name = 'GIANELLA MERINGOLO';
const career = 'Licenciada en TI- Diseñadora UX/UI';
export const siteTitle = 'Gianella Meringolo';
const siteDescription = 'Portfolio profesional de Gianella Meringolo - Licenciada en TI y Diseñadora UX/UI. Explora mi experiencia laboral, proyectos de diseño y trabajo voluntario.';
const siteUrl = 'https://gianellameringolo.com';

const Layout = memo(({ children, home }) => {
    return (
        <>
            <Head>
                <meta charSet="UTF-8" />
                <link rel='icon' href='/favicon.ico' />
                <meta name="description" content={siteDescription} />
                <meta name="keywords" content="UX/UI, Diseño Web, Desarrollo Web, Portfolio, Gianella Meringolo, Diseñadora, Uruguay" />
                <meta name="author" content="Gianella Meringolo" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                
                {/* Open Graph / Facebook */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={siteUrl} />
                <meta property="og:title" content={siteTitle} />
                <meta property="og:description" content={siteDescription} />
                <meta property="og:image" content={`${siteUrl}/img/og-image.jpg`} />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={siteUrl} />
                <meta property="twitter:title" content={siteTitle} />
                <meta property="twitter:description" content={siteDescription} />
                <meta property="twitter:image" content={`${siteUrl}/img/og-image.jpg`} />

                {/* Otros metadatos */}
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <link rel="canonical" href={siteUrl} />
            </Head>

            <header className="flex flex-col items-center mt-4 lg:mt-8 mb-0">
                {home ? (
                    <div className="flex">
                        <div className="flex flex-col text-center">
                            <h1 className="text-primary text-3xl md:text-6xl mb-0 font-mirza">{name}</h1>
                            <h2 className="mt-0 text-dark text-xs md:text-lg lg:text-xl font-inter-tight">{career}</h2>
                        </div>
                        <MenuHamburguesa/>
                    </div>
                ) : (
                    <>
                        <Link href="/">
                            <h1 className="text-primary text-3xl md:text-6xl mb-0 font-mirza">{name}</h1>
                            <h2 className="mt-0 text-dark text-xs md:text-lg lg:text-xl font-inter-tight text-center">{career}</h2>
                        </Link>
                        <Navbar />
                    </>
                )}
            </header>
            <main className="max-w-screen-lg ml-4 mr-3 lg:ml-16 lg:mr-16">{children}</main>
            <Footer />
        </>
    );
});

Layout.displayName = 'Layout';

export default Layout;