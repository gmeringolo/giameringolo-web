import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import foto from '../public/img/fotoPerfil.png';


export default function Cv() {
    return (
        <Layout>
            <Head>
                <title className={utilStyles.headingTitle}>CV</title>
            </Head>
            <div class="container mx-auto">
                <div>
                    <h5>Perfil</h5>
                    <p>Me mueve la pasión por la colaboración y la creatividad, y siempre me esfuerzo por fomentar un entorno orientado al trabajo en equipo dónde florezcan las ideas. Con unos cimientos basados en la flexibilidad y la responsabilidad, afronto los retos con mente abierta y adaptabilidad, garantizando una comunicación eficaz en todo momento.</p>
                </div>
                <div class="m-8 rounded overflow-hidden">
                    {/*  accordion-tab  */}
                    <div class="group outline-none accordion-section" tabindex="1">
                        <div class="group bg-purple flex justify-between px-4 py-3 items-center text-white transition ease duration-500 cursor-pointer pr-10 relative">
                            <div class="group-focus:text-white transition ease duration-500">
                                Experiencia Laboral
                            </div>
                            <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="group-focus:max-h-screen max-h-0 bg-rosa px-4 overflow-hidden ease duration-500">
                            <h3>Diseñadora, Abstracta Academy</h3>
                            <p class="p-2 text-gray-400 text-justify">
                                Jul 2024 - Presente
                            </p>
                            <ul class="b">
                                <li>Coffee</li>
                                <li>Tea</li>
                                <li>Coca Cola</li>
                            </ul>
                        </div>
                    </div>
                    {/*  accordion-tab  */}
                    {/*  accordion-tab  */}
                    <div class="group outline-none accordion-section" tabindex="2">
                        <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
                            <div class="group-focus:text-white transition ease duration-500">
                                Title for Tab - 2
                            </div>
                            <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
                            <p class="p-2 text-gray-400 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                repellat amet doloribus consequuntur eos similique provident
                                tempora voluptates iure quia fuga dicta voluptatibus culpa
                                mollitia recusandae delectus id suscipit labore?
                            </p>
                        </div>
                    </div>
                    {/*  accordion-tab  */}
                    {/*  accordion-tab  */}
                    <div class="group outline-none accordion-section" tabindex="3">
                        <div class="group bg-gray-900 flex justify-between px-4 py-3 items-center text-gray-500 transition ease duration-500 cursor-pointer pr-10 relative">
                            <div class="group-focus:text-white transition ease duration-500">
                                Title for Tab - 3
                            </div>
                            <div class="h-8 w-8 border border-gray-700 rounded-full items-center inline-flex justify-center transform transition ease duration-500 group-focus:text-white group-focus:-rotate-180 absolute top-0 right-0 mb-auto ml-auto mt-2 mr-2">
                                <i class="fas fa-chevron-down"></i>
                            </div>
                        </div>
                        <div class="group-focus:max-h-screen max-h-0 bg-gray-800 px-4 overflow-hidden ease duration-500">
                            <p class="p-2 text-gray-400 text-justify">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                                repellat amet doloribus consequuntur eos similique provident
                                tempora voluptates iure quia fuga dicta voluptatibus culpa
                                mollitia recusandae delectus id suscipit labore?
                            </p>
                        </div>
                    </div>
                </div>
            </div>


        </Layout>
    );
}