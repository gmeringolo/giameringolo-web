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
      <section class="flex justify-center items-center mt-12">
        <div class="flex justify-center items-center">
          <Image
            priority
            src={foto}
            height={300}
            width={300}
            class="rounded-full"
            alt="Foto Gianella Meringolo"
          />
          <div class="ml-12">
            <p class="font-inter_tight text-dark text-xl font-bold">Hola</p>
            <p class="font-inter_tight text-dark text-base/7 mt-2">Mi nombre es Gianella Meringolo, soy Uruguaya y actualmente vivo en Montevideo. 
            <br/>En el 2022 culmine la Licenciatura en tecnologías de la información, además soy Diseñadora de interiores, estudié Arquitectura 8 años y en el 2021 me certifique en diseño UX/UI.
            </p>
            <p class="font-inter_tight text-dark text-base/7 mt-2">Desde que comence a trabajar en tecnología, desempeñe roles como Java developer, web ui developer, diseñadora de interfaz de usuario y Analista Genexus. Actualmente trabajo freelance como diseñadora gráfica y desarrollando páginas web.</p>
            <p class="font-inter_tight text-dark text-base/7  mt-2">Soy una persona organizada, responsable, detallista, proactiva, empática, comprometida, con buena comunicación, buena trabajando en equipo y con facilidad de aprendizaje y adaptación.</p>
            <div class="flex flex-row items-center mt-6">
              <Link href="/experiencia" class="group bg-pale p-4 shadow-xl rounded-3xl w-[105px] flex flex-col items-center mr-5 hover:bg-rose-50 ">
                <MdPerson size={40} class="text-primary" />
                <p class="font-inter_tight text-dark text-sm hover:text-primary hover:font-semibold">Experiencia</p>
              </Link>
              <Link href="/portfolio" class="group bg-pale p-4 shadow-xl rounded-3xl w-[105px] flex flex-col items-center mr-5 hover:bg-rose-50 ">
                <MdComputer size={40} class="text-primary" />
                <p class="font-inter_tight text-dark text-sm hover:text-primary hover:font-semibold">Portfolio</p>
              </Link>
              <Link href="/voluntariado" class="group bg-pale hover:bg-rose-50 p-4 shadow-xl rounded-3xl w-[105px] flex flex-col items-center">
                <PiHandHeartBold size={40} class="text-primary" />
                <p class="font-inter_tight text-dark text-sm hover:text-primary hover:font-semibold">Voluntariado</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}