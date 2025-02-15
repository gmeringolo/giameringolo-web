import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
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
        <div class="flex justify-center flex-col w-1/3 h-[32rem] rounded-3xl overflow-hidden shadow-xl bg-pale mr-6">
          <Image
            priority
            src={grupoIot}
            class="w-auto"
            alt=""
          />
          <div class="text-dark p-5">
            <h3 class="font-inter_tight font-semibold text-lg">Rescatista de gatos - Grupo Iot</h3>
            <p class="text-sm mb-4">May 2010 - Presente</p>
            <p class="text-base">En 2010 me uní a este grupo de voluntarios, con el objetivo de cambiar la triste realidad en la que viven los gatos callejeros y mejorar su calidad de vida esterilizándolos, alimentándolos y buscándoles nuevos hogares.
            </p>
          </div>
        </div>
        <div class="flex justify-center flex-col w-1/3 h-[32rem] rounded-3xl overflow-hidden shadow-xl bg-pale mr-6">
          <Image
            priority
            src={mujeresIT}
            class="w-auto"
            alt=""
          />
          <div class="text-dark p-5">
            <h3 class="font-inter_tight font-semibold text-lg">Rescatista de gatos - Grupo Iot</h3>
            <p class="text-sm mb-4">May 2010 - Presente</p>
            <p class="text-base">En 2021 me uní a esta diversa comunidad de mujeres como colaboradora.
            Su misión es hablar cara a cara con la mujer informática. Entenderla desde su papel de madre, de cabeza de familia, de mujer que se proyecta o que ha percibido la desigualdad de género en el sector.
            </p>
          </div>
        </div>
        <div class="flex justify-center flex-col w-1/3 h-[32rem] rounded-3xl overflow-hidden shadow-xl bg-pale mr-6">
          <Image
            priority
            src={rsg}
            class="w-auto"
            alt=""
          />
          <div class="text-dark p-5">
            <h3 class="font-inter_tight font-semibold text-lg">Rescatista de gatos - Grupo Iot</h3>
            <p class="text-sm mb-4">May 2010 - Presente</p>
            <p class="text-base">Me uní a este grupo de voluntarios que ayudan a la comunidad en diferentes iniciativas que surgen a lo largo del año. Realizamos campañas de donación de sangre, recolección de alimentos para canastas familiares, donación de juguetes a instituciones infantiles, etc.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
}