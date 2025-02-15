import Head from 'next/head';
import Navbar from '../components/navbar';
import Footer from '../components/footer';

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
                        <h1 class="mt-10 mb-0 text-primary text-6xl">{name}</h1>
                        <h2 class="mt-0 text-dark text-xl font-inter_tight">{career}</h2>
                    </>
                ) : (
                    <>
                        <h1 class="mt-10 mb-0 text-primary text-6xl">{name}</h1>
                        <h2 class="mt-0 text-dark text-xl font-inter_tight">{career}</h2>
                        <Navbar/>
                    </>
                )}
            </header>
            <main class="max-w-screen-lg ml-10 mr-10">{children}</main>
            <Footer/>
        </>

    );
}