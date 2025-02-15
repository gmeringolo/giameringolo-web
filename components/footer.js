import Head from 'next/head';
import Link from 'next/link';
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <Head>
                <title>Footer</title>
            </Head>
            <footer class="flex  flex-col items-center mt-20 justify-center" >
                <div class="flex flex-row items-center justify-center">
                <a href="https://www.behance.net/gmeringoloa08a" target='_blanck' class="group bg-primary p-2 mr-3 shadow-xl rounded-xl w-[35px] h-[35px] flex flex-col items-center">
                    <FaBehance size={25} class="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/gianella-meringolo/" target='_blanck' class="group bg-primary p-2 mr-3 shadow-xl rounded-xl w-[35px] h-[35px] flex flex-col items-center">
                    <RiLinkedinFill size={25} class="text-white" />
                </a>
                <a href="https://github.com/gmeringolo" target='_blanck' class="group bg-primary p-2 shadow-xl rounded-xl w-[35px] h-[35px] flex flex-col items-center">
                    <FaGithub size={25} class="text-white" />
                </a>
                </div>
                <div class="mb-3 mt-2 text-dark text-s">
                    <p>
                    Copyright© 2025 Gianella Meringolo
                    </p>
                </div>
            </footer>
        </>
    );
}