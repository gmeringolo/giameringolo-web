import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import sobreMi from '../public/img/homeSobreMi.png';
import cv from '../public/img/homeCV.png';
import freelance from '../public/img/homeFreelance.png';
import voluntariado from '../public/img/homeVoluntariado.png';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title className={utilStyles.headingTitle}>{siteTitle}</title>
      </Head>
      <section className={utilStyles.sectionImg}>
        <div className={utilStyles.homeImg}>
          <Image
            priority
            src={sobreMi}
            height={160}
            width={160}
            alt=""
          />
          <Link href="/sobre_mi" className={utilStyles.homeTxt}>Sobre Mi</Link>
        </div>
        <div className={utilStyles.homeImg}>
          <Image
            priority
            src={cv}
            height={160}
            width={160}
            alt=""
          />
          <Link href="/cv" className={utilStyles.homeTxt}>CV</Link>
        </div>
        <div className={utilStyles.homeImg}>
          <Image
            priority
            src={freelance}
            height={160}
            width={160}
            alt=""
          />
          <Link href="/freelance" className={utilStyles.homeTxt}>Freelance</Link>
        </div>
        <div className={utilStyles.homeImg}>
          <Image
            priority
            src={voluntariado}
            height={160}
            width={160}
            alt=""
          />
          <Link href="/voluntariado"  className={utilStyles.homeTxt}>Voluntariado</Link>
        </div>
      </section>
    </Layout>
  );
}