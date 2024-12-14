import Head from 'next/head';
import styles from './layout.module.css';
import Link from 'next/link';
import Navbar from '../components/navbar';
import  { Mirza, Kavivanar, Kite_One, Inter_Tight, Inspiration} from 'next/font/google'

const mirza = Mirza({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mirza',
  display: 'swap',
});

const kite_one = Kite_One({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-kite-one',
    display: 'swap',
  });

const kavivanar = Kavivanar({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-kavivanar',
    display: 'swap',
  });

  const inter_tight = Inter_Tight({
    subsets: ['latin'],
    weight: ['300'],
    variable: '--font-inter-tight',
    display: 'swap',
  });
  const inspiration = Inspiration({
    subsets: ['latin'],
    weight: ['400'],
    variable: '--font-inspiration',
    display: 'swap',
  });

const name = 'GIANELLA MERINGOLO';
const career = 'Licenciada en TI- Web developer- UX/UI designer';
export const siteTitle = 'Gianella Meringolo'

export default function Layout({ children, home }) {
    return (
        <div className={`${inter_tight.variable} ${mirza.variable} ${kite_one.variable} ${kavivanar.variable} ${inspiration.variable}`}>
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
                        <Navbar/>
                    </>
                ) : (
                    <>
                        <h1 className={utilStyles.headingTitle}>{name}</h1>
                        <h3 className={utilStyles.headingTitle}>{career}</h3>

                    </>
                )}
            </header>
            <main>{children}</main>
        </div>

    );
}