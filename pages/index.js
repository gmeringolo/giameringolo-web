import Head from 'next/head';
import Image from 'next/image';
import Layout, { siteTitle } from '../components/layout';
import foto from '../public/img/fotoPerfil.png';
import { PiHandHeartBold } from "react-icons/pi";
import { MdComputer } from "react-icons/md";
import { MdPerson } from "react-icons/md";



export default function Home() {
  return (
    <Layout home>
      <Head>
        <title class="headingTitle">{siteTitle}</title>
      </Head>
      <section class="flex justify-center items-center mt-20">
        <div class="flex justify-center items-center w-62">
          <Image
            priority
            src={foto}
            height={300}
            width={300}
            alt="Foto Gianella Meringolo"
          />
          <div class="ml-12">
            <p class="font-inter_tight text-dark text-xl font-bold">Hola</p>
            <p class="font-inter_tight text-dark text-base/7 mt-2">Mi nombre es Gianella Meringolo, soy Uruguaya y actualmente vivo en Montevideo. 
            <br/>En el 2022 culmine la Licenciatura en tecnologías de la información, además soy Diseñadora de interiores, estudié Arquitectura 8 años y en el 2021 me certifique en diseño UX/UI.
            </p>
            <p class="font-inter_tight text-dark text-base/7 mt-2">Desde que comence a trabajar en tecnología, desempeñe roles como Java developer, web ui developer, diseñadora de interfaz de usuario y Analista Genexus. Actualmente trabajo freelance como diseñadora gráfica y desarrollando páginas web.</p>
            <p class="font-inter_tight text-dark text-base/7  mt-2">Soy una persona organizada, responsable, detallista, proactiva, empática, comprometida, con buena comunicación, buena trabajando en equipo y con facilidad de aprendizaje y adaptación.</p>
            <div class="flex flex-row items-center mt-10">
              <a href="/voluntariado" class="group bg-pale p-4 shadow-xl rounded-3xl w-[120px] flex flex-col items-center mr-5">
                <MdPerson size={60} class="text-primary" />
                <p href="/voluntariado" class="font-inter_tight text-dark text-base">CV</p>
              </a>
              <a href="/voluntariado" class="group bg-pale p-4 shadow-xl rounded-3xl w-[120px] flex flex-col items-center mr-5">
                <MdComputer size={60} class="text-primary" />
                <p href="/trabajos" class="font-inter_tight text-dark text-base">Trabajos</p>
              </a>
              <a href="/voluntariado" class="group bg-pale p-4 shadow-xl rounded-3xl w-[120px] flex flex-col items-center">
                <PiHandHeartBold size={60} class="text-primary" />
                <p href="/voluntariado" class="font-inter_tight text-dark text-base">Voluntariado</p>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}