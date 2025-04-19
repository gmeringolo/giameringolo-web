import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Layout, { siteTitle } from '../components/layout';
import foto from '../public/img/fotoPerfil.png';
import { PiHandHeartBold } from "react-icons/pi";
import { MdComputer } from "react-icons/md";
import { MdPerson } from "react-icons/md";



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="flex justify-center items-center mt-12">
        <div className="flex flex-col justify-center items-center lg:flex-row">
          <Image
            priority
            src={foto}
            className="rounded-full w-[210px] h-[210px] lg:w-[300px] lg:h-[300px]"
            alt="Foto Gianella Meringolo"
          />
          <div className="ml-0 sm:ml-12 md:ml-16 lg:ml-12 mr-1 sm:mr-6 md:mr-10 lg:mr-2 ">
            <p className="font-inter_tight text-dark text-xl font-bold mt-8 lg:mt-1">Hola</p>
            <p className="font-inter_tight text-dark text-base/7 mt-2">Mi nombre es Gianella Meringolo, soy Uruguaya y actualmente vivo en Montevideo. 
            <br/>En el 2022 culmine la Licenciatura en tecnologías de la información, además soy Diseñadora de interiores, estudié Arquitectura 8 años y en el 2021 me certifique en diseño UX/UI.
            </p>
            <p className="font-inter_tight text-dark text-base/7 mt-2">Desde que comence a trabajar en tecnología, desempeñe roles como Java developer, web ui developer, diseñadora de interfaz de usuario y Analista Genexus. Actualmente trabajo freelance como diseñadora gráfica y desarrollando páginas web.</p>
            <p className="font-inter_tight text-dark text-base/7  mt-2">Soy una persona organizada, responsable, detallista, proactiva, empática, comprometida, con buena comunicación, buena trabajando en equipo y con facilidad de aprendizaje y adaptación.</p>
            <div className="flex flex-row items-center mt-4 lg:mt-6">
              <Link href="/experiencia" className="group bg-pale p-4 shadow-xl rounded-3xl w-[90px] md:w-[120px] flex flex-col items-center mr-5 hover:bg-rose-50 ">
                <MdPerson className="text-primary size-[30px] md:size-[40px]" />
                <p className="font-inter_tight text-dark text-xs md:text-sm hover:text-primary hover:font-semibold">Experiencia</p>
              </Link>
              <Link href="/portfolio" className="group bg-pale p-4 shadow-xl rounded-3xl w-[90px] md:w-[120px] flex flex-col items-center mr-5 hover:bg-rose-50 ">
                <MdComputer className="text-primary size-[30px] md:size-[40px]" />
                <p className="font-inter_tight text-dark text-xs md:text-sm hover:text-primary hover:font-semibold">Portfolio</p>
              </Link>
              <Link href="/voluntariado" className="group bg-pale hover:bg-rose-50 p-4 shadow-xl rounded-3xl w-[90px] md:w-[120px] flex flex-col items-center">
                <PiHandHeartBold className="text-primary size-[30px] md:size-[40px]" />
                <p className="font-inter_tight text-dark text-xs md:text-sm hover:text-primary hover:font-semibold">Voluntariado</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}