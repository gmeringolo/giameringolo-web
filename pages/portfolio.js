import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import infoprod from '../public/img/infoprod1.png';
import posada from '../public/img/posada.png';
import salvica from '../public/img/salvica.png';
import cuadros from '../public/img/paredcreativa.png';
import Link from 'next/link';
import { IoIosArrowRoundForward } from "react-icons/io";

export default function Portfolio() {
  return (
    <Layout>
      <Head>
        <title>Gianella Meringolo |Portfolio</title>
      </Head>
      <section className="flex flex-col justify-center items-center mt-8 mx-auto">
        <h1 className="text-dark font-black text-2xl font-inter_tight mb-8">
          PORTFOLIO
        </h1>
        <div className="flex flex-col justify-center items-center mb-12">
          <Link href="https://www.behance.net/gallery/115905061/Diseno-UXUI-Buscador-Nutricional" target='_blank' className="flex justify-center">
            <Image
              priority
              src={cuadros}
              className="md:w-3/4"
              alt="Sitio web paredcreativa.com"
              width={1200}
              height={675}
            />
          </Link>
          <div className="flex flex-col items-baseline md:flex-row pt-5 md:w-3/4">
            <h3 className="font-inter_tight font-bold text-xl md:w-1/3 pl-0 md:pl-2">PARED CREATIVA</h3>
            <div className="md:w-2/3">
              <p className="font-inter_tight text-lg font-semibold mb-1">Diseño y desarrollo de un e-coomerce</p>
              <div className="flex flex-row items-center">
                <div className="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/4 md:w-1/6 rounded-xl mb-3 text-xs">
                  WordPress
                </div>
                <div className="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/4 md:w-1/5 rounded-xl mb-3 text-xs ml-1">
                  WooCommerce
                </div>
                <div className="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/4 md:w-1/6 rounded-xl mb-3 text-xs ml-1">
                  Hostinger
                </div>                
              </div>
              <p className="font-inter_tight text-base">Este proyecto consistió en el diseño y desarrollo de una tienda online especializada en la venta de cuadros impresos. Utilicé WordPress y WooCommerce para crear una solución de e-commerce robusta y funcional.</p>
              <p className="font-inter_tight text-base mt-2">Se implementó una estética minimalista y limpia para que la riqueza visual de los cuadros de vinilo no compitiera con el diseño de la web. Cada elemento de la interfaz (botones, menús y fondos) fue simplificado para destacar el producto, facilitando al usuario la elección y compra sin distracciones visuales innecesarias.</p>
              <Link href="https://www.paredcreativa.com" target='_blank' className="text-sm text-primary flex flex-row items-center mr-1 mt-2">
                Conoce el proyecto
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-12">
          <Link href="https://www.behance.net/gallery/115905061/Diseno-UXUI-Buscador-Nutricional" target='_blank' className="flex justify-center">
            <Image
              priority
              src={infoprod}
              className="md:w-3/4"
              alt="proyecto infoprod"
              width={1200}
              height={675}
            />
          </Link>
          <div className="flex flex-col items-baseline md:flex-row pt-5 md:w-3/4">
            <h3 className="font-inter_tight font-bold text-xl md:w-1/3 pl-0 md:pl-2">INFOPROD</h3>
            <div className="md:w-2/3">
              <p className="font-inter_tight text-lg font-semibold mb-1">Diseño UX/UI- Caso de estudio</p>
              <div className="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/5 md:w-1/6 rounded-xl mb-3 text-xs">
                Figma
              </div>
              <p className="font-inter_tight text-base">Este proyecto busca facilitar el acceso a la información nutricional de alimentos envasados, permitiendo a los usuarios consultar datos a través del código de barras, nombre del producto o empresa. La aplicación también ofrece recetas caseras para elaborar el producto o ideas para usarlo como ingrediente, promoviendo un consumo más saludable y consciente.</p>
              <Link href="https://www.behance.net/gallery/115905061/Diseno-UXUI-Buscador-Nutricional" target='_blank' className="text-sm text-primary flex flex-row items-center mr-1 mt-2">
                Conoce el proyecto
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col justify-center items-center mb-12">
          <Link href="https://www.posadahorizonte.com" target='_blank' className="flex justify-center">
            <Image
              priority
              src={posada}
              className="md:w-3/4"
              alt="proyecto Posada Horizonte"
            />
          </Link>
          <div className="flex flex-col items-baseline md:flex-row pt-5 md:w-3/4">
            <h3 className="font-inter_tight font-bold text-xl md:w-1/3 pl-0 md:pl-2">POSADA HORIZONTE</h3>
            <div className="md:w-2/3">
              <p className="font-inter_tight text-lg font-semibold mb-2">Proyecto arquitectónico y Diseño web responsive</p>
              <div className="flex flex-row items-center">
                <div className="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/4 md:w-1/6 rounded-xl mb-3 text-xs">
                  Html/Css
                </div>
                <div className="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/4 md:w-1/6 rounded-xl mb-3 text-xs ml-1">
                  React
                </div>
              </div>
              <p className="font-inter_tight text-base">Este proyecto se centra en el diseño de viviendas temporales, creadas específicamente para ofrecer comodidad e independencia a sus usuarios. Además, se desarrolló una página web con un enfoque mobile-first y diseño responsive, dado que el público objetivo utiliza predominantemente dispositivos móviles en lugar de computadoras de escritorio. La experiencia de usuario fue una prioridad en cada fase del proyecto, asegurando una navegación intuitiva y fluida en cualquier dispositivo.</p>
              <Link href="https://www.posadahorizonte.com" target='_blank' className="text-sm text-primary flex flex-row items-center mr-1 mt-2">
                Conoce el proyecto web
                <IoIosArrowRoundForward />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-12">
          <Link href="https://www.behance.net/gallery/112077671/Diseno-de-marca-Salvica" target='_blank' className="flex justify-center">
            <Image
              priority
              src={salvica}
              className="md:w-3/4"
              alt="proyecto Salvica"
            />
          </Link>
          <div className="flex flex-col items-baseline md:flex-row pt-5 md:w-3/4">
            <h3 className="font-inter_tight font-bold text-xl md:w-1/3 pl-0 md:pl-2">SALVICA STORE</h3>
            <div className="md:w-2/3">
              <p className="font-inter_tight text-lg font-semibold mb-2">Proyecto de identidad de marca</p>
              <div className="flex flex-row items-center justify-center p-1 bg-primary text-pale w-1/4 md:w-1/6 rounded-xl mb-3">
                <p className="text-xs">Illustrator</p>
              </div>
              <p className="font-inter_tight text-base">Este proyecto consistió en el desarrollo de la identidad de marca para la comercialización de sal del Himalaya. Se diseñaron todos los materiales gráficos, incluyendo el logo y las imágenes para redes sociales, con el objetivo de crear una presencia visual coherente y atractiva para la marca.</p>
              <Link href="https://www.behance.net/gallery/112077671/Diseno-de-marca-Salvica" target='_blank' className="text-sm text-primary flex flex-row items-center mr-1 mt-2">
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