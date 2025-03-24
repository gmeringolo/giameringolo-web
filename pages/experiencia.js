import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import { MdComputer } from "react-icons/md";
import { IoIosFootball } from "react-icons/io";
import { IoColorPaletteOutline } from "react-icons/io5";
import { RxHome } from "react-icons/rx";
import { FaDrawPolygon } from "react-icons/fa";
import { FaRegBuilding } from "react-icons/fa";
import { GoDownload } from "react-icons/go";
import figma from "../public/svg2/figma.svg";
import illustrator from "../public/svg2/illustrator.svg";
import html from "../public/svg2/html.svg";
import css from "../public/svg2/css.svg";
import javascript from "../public/svg2/javascript.svg";
import react from "../public/svg2/react.svg";
import next from "../public/svg2/next-js.svg";
import tailwind from "../public/svg2/tailwind.svg";
import bootstrap from "../public/svg2/bootstrap.svg";
import sass from "../public/svg2/sass.svg";


export default function Experiencia() {
    return (
        <Layout>
            <Head>
                <title>Gianella Meringolo | Experiencia</title>
            </Head>
            <div class="flex flex-col items-center  container mx-auto mt-8">
                <h1 class="text-dark font-black text-xl lg:text-2xl font-inter_tight">
                    EXPERIENCIA LABORAL
                </h1>
                <div class="bg-purple text-pale pr-5 pl-5 pt-2 pb-2 shadow-xl rounded-3xl hover:bg-dark mt-8 flex flex-row items-center">
                <GoDownload />
                    <a href='pdf/Gianella2025es.pdf' target="_blank" class="ml-1">Descargar cv</a>
                </div>
                <div class="mt-8 w-[300px] md:w-[400px] lg:w-[900px] flex flex-col lg:flex-row">
                    <div class="card lg:w-1/3 lg:mr-3">
                        <div class="card__content text-center relative p-5 transition-transform duration-1000 h-[14rem] lg:h-[17rem]">
                            <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pale flex flex-col items-center justify-center shadow-xl rounded-3xl">
                                <IoColorPaletteOutline size={50} class="text-dark mb-2" />
                                <h3 class="font-inter_tight text-lg lg:text-xl text-primary font-semibold mb-4">
                                    Diseñadora y Maquetadora Web
                                </h3>
                                <h3 class="font-inter_tight text-sm lg:text-base font-semibold text-dark">
                                    Freelance Abstracta Academy
                                </h3>
                                <p class="text-sm font-inter_tight text-dark">
                                    Jun 2024 - Presente
                                </p>
                            </div>
                            <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex items-center justify-center shadow-xl rounded-3xl">
                                <p class="text-sm font-inter_tight">
                                    Colaboración estrecha con equipos multidisciplinarios para diseñar y desarrollar soluciones web personalizadas utilizando tecnologías como Nuxt.js, HTML5 y CSS3. Experiencia en la optimización de sitios web para mejorar la velocidad de carga y la experiencia del usuario, así como en la creación de recursos visuales atractivos y funcionales.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:w-1/3 mt-4 lg:mt-0 lg:mr-3">
                        <div class="card__content text-center relative p-5 transition-transform duration-1000 h-[14rem] lg:h-[17rem]">
                            <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pale bg-pañe flex flex-col items-center justify-center shadow-xl rounded-3xl">
                                <IoIosFootball size={50} class="text-dark mb-2" />
                                <h3 class="font-inter_tight text-lg lg:text-xl
                                font-semibold text-primary mb-4">
                                    Administrativa y Soporte Técnico 
                                </h3>
                                <h3 class="font-inter_tight text-dark   text-sm lg:text-base font-semibold">
                                    Freelance Liga América
                                </h3>
                                <p class="text-sm text-dark font-inter_tight">
                                    Feb 2015 - Presente
                                </p>
                            </div>
                            <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex items-center justify-center shadow-xl rounded-3xl">
                                <p class="text-sm font-inter_tight">
                                    Brindé apoyo integral a los equipos que forman parte de la liga. Gestioné de manera eficiente los procesos de control de pagos, priorizando la precisión y la puntualidad para garantizar una experiencia positiva. Asimismo, desempeñé un papel clave en las pruebas y actualizaciones de las funcionalidades web.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:w-1/3 mt-4 lg:mt-0 lg:mr-0">
                        <div class="card__content text-center relative p-3 lg:p-5 transition-transform duration-1000 h-[14rem] lg:h-[17rem]">
                            <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-12 bg-pale flex flex-col items-center justify-center shadow-xl rounded-3xl">
                                <MdComputer size={50} class="text-dark mb-2" />
                                <h3 class="font-inter_tight text-lg lg:text-xl font-semibold mb-4 text-primary lg:pr-5 lg:pl-5">
                                    Desarrolladora Web UI
                                </h3>
                                <h3 class="font-inter_tight  text-sm lg:text-base font-semibold text-dark">
                                    Globant
                                </h3>
                                <p class="text-sm font-inter_tight text-dark">
                                    Jul 2021 - Feb 2024
                                </p>
                            </div>
                            <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex items-center justify-center shadow-xl rounded-3xl">
                                <p class="text-sm font-inter_tight">
                                    Durante mi tiempo en Globant trabaje en varios proyectos como Desarrollador Web UI, Desarrollador Java, Diseñador UX/UI y analista Genexus, cada rol me aportó valiosa experiencia y conocimientos en el campo de la tecnología y el diseño.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mt-0 lg:mt-6 w-[300px] lg:w-[900px] flex flex-col lg:flex-row">
                    <div class="card lg:w-1/3 mt-4 lg:mt-0 lg:mr-3">
                        <div class="card__content text-center relative p-5 transition-transform duration-1000 h-[14rem] lg:h-[17rem]">
                            <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pale flex flex-col items-center justify-center shadow-xl rounded-3xl">
                                <RxHome size={49} class="text-dark mb-2" />
                                <h3 class="font-inter_tight text-lg lg:text-xl text-primary font-semibold mb-4">
                                    Dibujante CAD y diseñador grafico
                                </h3>
                                <h3 class="font-inter_tight  text-sm lg:text-base font-semibold text-dark">
                                    Freelance
                                </h3>
                                <p class="text-sm font-inter_tight text-dark">
                                    Jul 2012 - Mar 2015
                                </p>
                            </div>
                            <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex items-center justify-center shadow-xl rounded-3xl">
                                <p class="text-sm font-inter_tight">
                                    He trabajado en la creación de planos técnicos detallados, modelado de espacios y diseño de material gráfico, adaptando cada proyecto a las necesidades específicas de los clientes. Mi enfoque es proporcionar soluciones visuales y técnicas efectivas, asegurando la satisfacción del cliente y la calidad en cada entrega.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:w-1/3 mt-4 lg:mt-0 lg:mr-3">
                        <div class="card__content text-center relative p-5 transition-transform duration-1000 h-[14rem] lg:h-[17rem]">
                            <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-8 bg-pale flex flex-col items-center justify-center shadow-xl rounded-3xl">
                                <FaDrawPolygon size={50} class="text-dark mb-2" />
                                <h3 class="font-inter_tight text-lg lg:text-xl font-semibold mb-4 text-primary lg:pr-6 lg:pl-6">
                                    Dibujante Técnico 2D y 3D
                                </h3>
                                <h3 class="font-inter_tight  text-sm lg:text-base font-semibold text-dark">
                                    Suite Home
                                </h3>
                                <p class="text-sm font-inter_tight text-dark">
                                    Feb 2015 - Presente
                                </p>
                            </div>
                            <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex items-center justify-center shadow-xl rounded-3xl">
                                <p class="text-sm font-inter_tight">
                                    Elaboración y diseño de proyectos para viviendas unifamiliares, incluyendo el desarrollo de planos y detalles constructivos para carpetas de obra. Además, realizo los planos necesarios para su presentación ante el IMM y el BPS, asegurando el cumplimiento de las normativas y facilitando los trámites administrativos.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="card lg:w-1/3 mt-4 lg:mt-0 lg:mr-0">
                        <div class="card__content text-center relative p-5  transition-transform duration-1000 h-[14rem] lg:h-[17rem]">
                            <div class="card__front absolute top-0 bottom-0 right-0 left-0 p-12 bg-pale flex flex-col items-center justify-center shadow-xl rounded-3xl">
                                <FaRegBuilding size={49} class="text-dark mb-2" />
                                <h3 class="font-inter_tight text-lg lg:text-xl
                                font-semibold mb-4 text-primary lg:pr-5 lg:pl-5">
                                    Dibujante Técnico 2D
                                </h3>
                                <h3 class="font-inter_tight  text-sm lg:text-base font-semibold text-dark">
                                    Eliseo Cabrera & Asoc
                                </h3>
                                <p class="text-sm font-inter_tight text-dark">
                                    Jul 2021 - Feb 2024
                                </p>
                            </div>
                            <div class="card__back absolute top-0 bottom-0 right-0 left-0 p-8 bg-primary text-white flex items-center justify-center shadow-xl rounded-3xl">
                                <p class="text-sm font-inter_tight">
                                    Elaboración de planos 2D y 3D en AutoCAD y SketchUp, con especialización en el diseño de baños y cocinas. Asesoramiento a estudiantes de arquitectura para la realización de carpetas de trabajo. Venta telefónica de cursos y servicios, organización de archivos y funciones de telefonista-recepcionista, brindando soporte administrativo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="flex flex-col justify-center items-center w-[350px] lg:w-[900px] mt-10">
                <h1 class="text-dark font-black text-xl lg:text-2xl font-inter_tight">
                    HABILIDADES TÉCNICAS
                </h1>
                <div class="w-full lg:w-[500px] flex  justify-around items-center mt-6">
                    <Image
                        priority
                        src={figma}
                        alt="Figma"
                        class="w-1/6 lg:h[50px]"
                    />
                    <Image
                        priority
                        src={illustrator}
                        alt="Illustrator"
                        class="w-1/6"
                    />
                    <Image
                        priority
                        src={html}
                        alt="Html"
                        class="w-1/6"
                    />
                    <Image
                        priority
                        src={css}
                        alt="Css"
                        class="w-1/6"
                    />
                    <Image
                        priority
                        src={javascript}
                        alt="Javascript"
                        class="w-1/6"
                    />
                </div>
                <div class="w-full lg:w-[500px] flex justify-around items-center mt-4">
                    <Image
                        priority
                        src={react}
                        alt="React"
                        class="w-1/6"
                    />
                    <Image
                        priority
                        src={next}
                        alt="Next.js"
                        class="w-1/6"
                    />
                    <Image
                        priority
                        src={tailwind}
                        alt="Tailwind"
                        class="w-1/6"
                    /> 
                    <Image
                        priority
                        src={bootstrap}
                        alt="Bootstrap"
                        class="w-1/6"
                    />
                    <Image
                        priority
                        src={sass}
                        alt="sass"
                        class="w-1/6"
                    /> 
                </div>
            </div>
        </Layout>
    );
}