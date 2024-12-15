import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import foto from '../public/img/fotoPerfil.png';


export default function Voluntariado() {
    return (
        <Layout>
            <Head>
                <title className={utilStyles.headingTitle}>Voluntariado</title>
            </Head>
            <section className={utilStyles.sectionSobreMi}>
                <div className={utilStyles.flex}>
                    <Image
                        priority
                        src={foto}
                        height={300}
                        width={300}
                        alt=""
                    />
                    <div className={utilStyles.ml60}>
                        <p className={utilStyles.pTxt}>Hola,</p>
                        <p className={utilStyles.pTxt}>mi nombre es Gianella Meringolo, soy Licenciada en tecnologías de la información y vivo en Uruguay. Estudié Arquitectura varios años y en el 2021 me certifique en diseño UX/UI.
                        </p>
                        <p className={utilStyles.pTxt}>Desde que comence a trabajar en tecnología, desempeñe roles como Java developer, web ui developer, diseñadora de interfaz de usuario y Analista Genexus. Actualmente trabajo freelance diseñando anuncios para sus campañas en redes sociales y desarrollando páginas web.</p>

                        <p className={utilStyles.pTxt}>Soy una persona organizada, responsable, detallista, proactiva, empática, comprometida, con buena comunicación, buena trabajando en equipo y con facilidad de aprendizaje y adaptación.</p>

                    </div>
                </div>
            </section>
        </Layout>
    );
}