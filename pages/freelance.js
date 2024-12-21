import Head from 'next/head';
import Image from 'next/image';
import Layout  from '../components/layout';
import infoProd from '../public/img/infoProd.png';
import posadaHorizonte from '../public/img/posadaHorizonte.png';




export default function freelance() {
  return (
    <Layout>
      <Head>
        <title class="headingTitle">Freelance</title>
      </Head>
      <section class="flex justify-center items-center mt-10">
        <div class="flex justify-center flex-col items-center">
          <Image
            priority
            src={posadaHorizonte}
            height={200}
            alt=""
          />
          <h3 class="mt-5">POSADA HORIZONTE
          </h3>
          <p class="pTxt mt-2 w-62 text-center">Diseño arquitectónico- Diseño de marca - Diseño y desarrollo web</p>
        </div>
        <div class="flex justify-center flex-col items-center">
          <Image
            priority
            src={infoProd}
            height={200}
            alt=""
          />
          <h3 class="mt-5">INFO PROD</h3>
          <p class="pTxt mt-2 w-62 text-center">Caso de estudio final de carrera Diseño UX/UI </p>
        </div>
       
      </section>
    </Layout>
  );
}