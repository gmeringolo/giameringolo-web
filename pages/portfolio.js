import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import infoprod from '../public/img/infoprod1.png';
import posada from '../public/img/posada.png';
import salvica from '../public/img/salvica.png';
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Gianella Meringolo |Portfolio</title>
      </Head>
      <section class="flex flex-col justify-center items-center mt-8 mx-auto">
        <h1 class="text-dark font-black text-2xl font-inter_tight mb-8">
          PORTFOLIO
        </h1>
        <div class="flex flex-col justify-center items-center mb-12">
          <Link href="https://www.behance.net/gallery/115905061/Diseno-UXUI-Buscador-Nutricional" target='_blank' class="flex justify-center">
            <Image
              priority
              src={infoprod}
              class="w-3/4"
              alt="proyecto infoprod"
            />
          </Link>
          <div class="flex flex-row pt-5 w-3/4">
            <h3 class="font-inter_tight font-bold text-xl w-1/3 pl-2">INFOPROD</h3>
            <div class="w-2/3">
              <p class="font-inter_tight text-lg font-semibold mb-1">Diseño UX/UI- Caso de estudio</p>
              <div class="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/6 rounded-xl mb-3 text-xs">
                Figma
              </div>
              <p class="font-inter_tight text-base">Este proyecto busca facilitar el acceso a la información nutricional de alimentos envasados, permitiendo a los usuarios consultar datos a través del código de barras, nombre del producto o empresa. La aplicación también ofrece recetas caseras para elaborar el producto o ideas para usarlo como ingrediente, promoviendo un consumo más saludable y consciente.</p>
              <Link href="https://www.behance.net/gallery/115905061/Diseno-UXUI-Buscador-Nutricional" target='_blank' class="text-sm text-primary flex flex-row items-center mr-1 mt-2">
                Conoce el proyecto
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>

        </div>
        <div class="flex flex-col justify-center items-center mb-12">
          <Link href="https://www.posadahorizonte.com" target='_blank' class="flex justify-center">
            <Image
              priority
              src={posada}
              class="w-3/4"
              alt="proyecto Posada Horizonte"
            />
          </Link>
          <div class="flex flex-row pt-5 w-3/4">
            <h3 class="font-inter_tight font-bold text-xl w-1/3 pl-2">POSADA HORIZONTE</h3>
            <div class="w-2/3">
              <p class="font-inter_tight text-lg font-semibold mb-2">Proyecto arquitectónico y Diseño web responsive</p>
              <div class="flex flex-row items-center">
                <div class="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/6 rounded-xl mb-3 text-xs">
                  Html/Css
                </div>
                <div class="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/6 rounded-xl mb-3 text-xs">
                  React
                </div>
              </div>
              <p class="font-inter_tight text-base">Este proyecto se centra en el diseño de viviendas temporales, creadas específicamente para ofrecer comodidad e independencia a sus usuarios. Además, se desarrolló una página web con un enfoque mobile-first y diseño responsive, dado que el público objetivo utiliza predominantemente dispositivos móviles en lugar de computadoras de escritorio. La experiencia de usuario fue una prioridad en cada fase del proyecto, asegurando una navegación intuitiva y fluida en cualquier dispositivo.</p>
              <Link href="https://www.posadahorizonte.com" target='_blank' class="text-sm text-primary flex flex-row items-center mr-1 mt-2">
                Conoce el proyecto web
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
        <div class="flex flex-col justify-center items-center mb-12">
          <Link href="https://www.behance.net/gallery/112077671/Diseno-de-marca-Salvica" target='_blank' class="flex justify-center">
            <Image
              priority
              src={salvica}
              class="w-3/4"
              alt="proyecto Salvica"
            />
          </Link>
          <div class="flex flex-row pt-5 w-3/4">
            <h3 class="font-inter_tight font-bold text-xl w-1/3 pl-2">SALVICA STORE</h3>
            <div class="w-2/3">
              <p class="font-inter_tight text-lg font-semibold mb-2">Proyecto de identidad de marca</p>
              <div class="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/6 rounded-xl mb-3">
                <p class="text-xs">Illustraitor</p>
              </div>
              <p class="font-inter_tight text-base">Este proyecto consistió en el desarrollo de la identidad de marca para la comercialización de sal del Himalaya. Se diseñaron todos los materiales gráficos, incluyendo el logo y las imágenes para redes sociales, con el objetivo de crear una presencia visual coherente y atractiva para la marca.</p>
              <Link href="https://www.behance.net/gallery/112077671/Diseno-de-marca-Salvica" target='_blank' class="text-sm text-primary flex flex-row items-center mr-1 mt-2">
                Conoce el proyecto
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}