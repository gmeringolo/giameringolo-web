import Head from 'next/head';
import Image from 'next/image';
import Layout  from '../components/layout';
import grupoIot from '../public/img/grupoIot.png';
import mujeresIT from '../public/img/mujeresIT.png';
import rsg from '../public/img/rsg.png';



export default function Voluntariado() {
  return (
    <Layout>
      <Head>
        <title class="headingTitle">Voluntariado</title>
      </Head>
      <section class="flex justify-center items-center mt-10">
        <div class="flex justify-center flex-col items-center">
          <Image
            priority
            src={grupoIot}
            height={150}
            alt=""
          />
          <p class="pTxt mt-2 w-62 text-center">En 2010 me uní a este grupo de voluntarios, con el objetivo de cambiar la triste realidad en la que viven los gatos callejeros y mejorar su calidad de vida esterilizándolos, alimentándolos y buscándoles nuevos hogares.
          </p>
        </div>
        <div class="flex justify-center flex-col items-center">
          <Image
            priority
            src={mujeresIT}
            height={150}
            alt=""
          />
          <p class="pTxt mt-2 w-62 text-center">En 2021 me uní a esta diversa comunidad de mujeres como colaboradora. 
          Su misión es hablar cara a cara con la mujer informática. Entenderla desde su papel de madre, de cabeza de familia, de mujer que se proyecta o que ha percibido la desigualdad de género en el sector</p>
        </div>
        <div class="flex justify-center flex-col items-center">
          <Image
            priority
            src={rsg}
            height={150}
            alt=""
          />
          <p class="pTxt mt-2 w-62 text-center">Me uní a este grupo de voluntarios que ayudan a la comunidad en diferentes iniciativas que surgen a lo largo del año. Realizamos campañas de donación de sangre, recolección de alimentos para canastas familiares, donación de juguetes a instituciones infantiles, etc.</p>
        </div>
      </section>
    </Layout>
  );
}