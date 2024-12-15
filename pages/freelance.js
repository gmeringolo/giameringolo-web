import Head from 'next/head';
import Image from 'next/image';
import Layout  from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import infoProd from '../public/img/infoProd.png';
import posadaHorizonte from '../public/img/posadaHorizonte.png';




export default function freelance() {
  return (
    <Layout>
      <Head>
        <title className={utilStyles.headingTitle}>Freelance</title>
      </Head>
      <section className={utilStyles.sectionImg}>
        <div className={utilStyles.voluntImg}>
          <Image
            priority
            src={posadaHorizonte}
            height={300}
            alt=""
          />
          <h3>POSADA HORIZONTE
          </h3>
          <p className={utilStyles.pTxt}>Diseño arquitectónico- Diseño de marca - Diseño y desarrollo web</p>
        </div>
        <div className={utilStyles.voluntImg}>
          <Image
            priority
            src={infoProd}
            height={300}
            alt=""
          />
          <h3>INFO PROD</h3>
          <p className={utilStyles.pTxt}>Caso de estudio final de carrera Diseño UX/UI </p>
        </div>
       
      </section>
    </Layout>
  );
}