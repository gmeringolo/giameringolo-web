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
        <title>Gianella Meringolo |Voluntariado</title>
      </Head>
      <div className="flex flex-col items-center justify-center container mt-8">
        <h1 className="text-dark font-black text-xl lg:text-2xl font-inter_tight">
          VOLUNTARIADOS
        </h1>
        <div className="mt-8 w-[300px] md:w-[400px] lg:w-[1000px] flex flex-col lg:flex-row">
          <div className="card lg:w-1/3 lg:mr-3">
            <div className="card__content text-center transition-transform duration-1000">
              <div className="card__front">
                <Image
                  priority
                  src={grupoIot}
                  className="w-full rounded-3xl"
                  alt="Grupo Iot"
                />
                <div className="text font-inter_tight text-base mb-1 bg-pale w-full rounded-3xl p-2"><strong>Rescatista de gatos Grupo Iot</strong><br />May 2010 - Presente</div>
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex flex-col items-center justify-center shadow-xl rounded-3xl">
                <p className="text-sm font-inter_tight">En 2010 me uní a este grupo de voluntarios, con el objetivo de cambiar la triste realidad en la que viven los gatos callejeros y mejorar su calidad de vida esterilizándolos, alimentándolos y buscándoles nuevos hogares.
                </p>
              </div>
            </div>
          </div>
          <div className="card mt-8 lg:w-1/3 lg:mr-3 lg:mt-0">
            <div className="card__content text-center transition-transform duration-1000">
              <div className="card__front">
                <Image
                  priority
                  src={mujeresIT}
                  className="w-full rounded-3xl"
                  alt=""
                />
                <div className="text font-inter_tight text-base mb-1 bg-pale w-full rounded-3xl p-2"><strong>Colaboradora MujeresIT</strong><br />Feb 2021 - Presente</div>
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex flex-col items-center justify-center shadow-xl rounded-3xl">
                <p className="text-sm font-inter_tight">En 2021 me uní a esta diversa comunidad de mujeres como colaboradora.
                  Su misión es hablar cara a cara con la mujer informática. Entenderla desde su papel de madre, de cabeza de familia, de mujer que se proyecta o que ha percibido la desigualdad de género en el sector.
                </p>
              </div>
            </div>
          </div>
          <div className="card mt-8 lg:w-1/3 lg:mr-3 lg:mt-0">
            <div className="card__content text-center transition-transform duration-1000">
              <div className="card__front">
                <Image
                  priority
                  src={rsg}
                  className="w-full rounded-3xl"
                  alt=""
                />
                <div className="text font-inter_tight text-base mb-1 bg-pale w-full rounded-3xl p-2"><strong>Colaboratora - RSG (Globant)</strong><br />Jan 2022 - Abr 2024</div>
              </div>
              <div className="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex flex-col items-center justify-center shadow-xl rounded-3xl">
                <p className="text-sm font-inter_tight">Me uní a este grupo de voluntarios que ayudan a la comunidad en diferentes iniciativas que surgen a lo largo del año. Realizamos campañas de donación de sangre, recolección de alimentos para canastas familiares, donación de juguetes a instituciones infantiles, etc.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}