import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import sobreMi from '../public/homeSobreMi.png';
import cv from '../public/homeCV.png';
import freelance from '../public/homeFreelance.png';
import voluntariado from '../public/homeVoluntariado.png';


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
          <p className={utilStyles.homeTxt}>Sobre Mi</p>
        </div>
        <div className={utilStyles.homeImg}>
          <Image
            priority
            src={cv}
            height={160}
            width={160}
            alt=""
          />
          <p className={utilStyles.homeTxt}>CV</p>
        </div>
        <div className={utilStyles.homeImg}>
          <Image
            priority
            src={freelance}
            height={160}
            width={160}
            alt=""
          />
          <p className={utilStyles.homeTxt}>Freelance</p>
        </div>
        <div className={utilStyles.homeImg}>
          <Image
            priority
            src={voluntariado}
            height={160}
            width={160}
            alt=""
          />
          <p className={utilStyles.homeTxt}>Voluntariado</p>
        </div>
      </section>
    </Layout>
  );
}