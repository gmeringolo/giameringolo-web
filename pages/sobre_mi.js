import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import foto from '../public/img/fotoPerfil.png';


export default function SobreMi() {
    return (
        <Layout>
            <Head>
                <title class="headingTitle">Sobre mi</title>
            </Head>
            <section class="flex justify-center items-center mt-10">
                <div class="flex justify-center items-center w-62">
                    <Image
                        priority
                        src={foto}
                        height={250}
                        width={250}
                        alt=""
                    />
                    <div class="ml-12">
                        <p class="pTxt">Hola,</p>
                        <p class="pTxt mt-2">mi nombre es Gianella Meringolo, soy Licenciada en tecnologías de la información y vivo en Uruguay. Estudié Arquitectura varios años y en el 2021 me certifique en diseño UX/UI.
                        </p>
                        <p class="pTxt mt-2">Desde que comence a trabajar en tecnología, desempeñe roles como Java developer, web ui developer, diseñadora de interfaz de usuario y Analista Genexus. Actualmente trabajo freelance diseñando anuncios para sus campañas en redes sociales y desarrollando páginas web.</p>
                        <p class="pTxt mt-2">Soy una persona organizada, responsable, detallista, proactiva, empática, comprometida, con buena comunicación, buena trabajando en equipo y con facilidad de aprendizaje y adaptación.</p>

                    </div>
                </div>
            </section>
        </Layout>
    );
}