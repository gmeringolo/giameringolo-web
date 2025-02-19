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
      <div class="flex flex-col items-center container mx-auto mt-8">
        <div class="mt-8 w-[1000px] flex flex-row">
          <div class="card w-1/3 mr-3">
            <div class="card__content text-center transition-transform duration-1000">
              <div class="card__front">
                <Image
                  priority
                  src={grupoIot}
                  class="w-full rounded-3xl"
                  alt=""
                />
                <div class="text font-inter_tight text-base mb-1 bg-pale w-full rounded-3xl p-2"><strong>Rescatista de gatos Grupo Iot</strong><br />May 2010 - Presente</div>
              </div>
              <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex flex-col items-center justify-center shadow-xl rounded-3xl">
                <p class="text-sm font-inter_tight">En 2010 me uní a este grupo de voluntarios, con el objetivo de cambiar la triste realidad en la que viven los gatos callejeros y mejorar su calidad de vida esterilizándolos, alimentándolos y buscándoles nuevos hogares.
                </p>
              </div>
            </div>
          </div>
          <div class="card w-1/3 mr-3">
            <div class="card__content text-center transition-transform duration-1000">
              <div class="card__front">
                <Image
                  priority
                  src={mujeresIT}
                  class="w-full rounded-3xl"
                  alt=""
                />
                <div class="text font-inter_tight text-base mb-1 bg-pale w-full rounded-3xl p-2"><strong>Colaboradora MujeresIT</strong><br />Feb 2021 - Presente</div>
              </div>
              <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex flex-col items-center justify-center shadow-xl rounded-3xl">
                <p class="text-sm font-inter_tight">En 2021 me uní a esta diversa comunidad de mujeres como colaboradora.
                  Su misión es hablar cara a cara con la mujer informática. Entenderla desde su papel de madre, de cabeza de familia, de mujer que se proyecta o que ha percibido la desigualdad de género en el sector.
                </p>
              </div>
            </div>
          </div>
          <div class="card w-1/3 mr-3">
            <div class="card__content text-center transition-transform duration-1000">
              <div class="card__front">
                <Image
                  priority
                  src={rsg}
                  class="w-full rounded-3xl"
                  alt=""
                />
                <div class="text font-inter_tight text-base mb-1 bg-pale w-full rounded-3xl p-2"><strong>Colaboratora - RSG (Globant)</strong><br/>Jan 2022 - Abr 2024</div>
              </div>
              <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex flex-col items-center justify-center shadow-xl rounded-3xl">
                <p class="text-sm font-inter_tight">Me uní a este grupo de voluntarios que ayudan a la comunidad en diferentes iniciativas que surgen a lo largo del año. Realizamos campañas de donación de sangre, recolección de alimentos para canastas familiares, donación de juguetes a instituciones infantiles, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}