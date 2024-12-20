import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import sobreMi from '../public/img/homeSobreMi.png';
import cv from '../public/img/homeCV.png';
import freelance from '../public/img/homeFreelance.png';
import voluntariado from '../public/img/homeVoluntariado.png';


export default function Home() {
  return (
    <Layout home>
      <Head>
        <title class="headingTitle">{siteTitle}</title>
      </Head>
      <section class="sectionImg">
        <div class="flex flex-col items-center ml-8 mr-8">
          <Image
            priority
            src={sobreMi}
            height={130}
            width={130}
            alt=""
          />
          <Link href="/sobre_mi" class="homeTxt">Sobre Mi</Link>
        </div>
        <div class="flex flex-col items-center ml-8 mr-8">
          <Image
            priority
            src={cv}
            height={130}
            width={130}
            alt=""
          />
          <Link href="/cv" class="homeTxt">CV</Link>
        </div>
        <div class="flex flex-col items-center ml-8 mr-8">
          <Image
            priority
            src={freelance}
            height={130}
            width={130}
            alt=""
          />
          <Link href="/freelance" class="homeTxt">Freelance</Link>
        </div>
        <div class="flex flex-col items-center ml-8 mr-8">
          <Image
            priority
            src={voluntariado}
            height={130}
            width={130}
            alt=""
          />
          <Link href="/voluntariado" class="homeTxt">Voluntariado</Link>
        </div>
      </section>
    </Layout>
  );
}