import Head from 'next/head';
import Link from 'next/link';
import { RiLinkedinFill } from "react-icons/ri";
import { FaGithub } from "react-icons/fa";
import { FaBehance } from "react-icons/fa";

export default function Footer() {
    return (
        <>
            <footer className="flex  flex-col items-center mt-20 justify-center" >
                <div className="flex flex-row items-center justify-center">
                <a href="https://www.behance.net/gmeringoloa08a" target='_blanck' className="group bg-primary p-2 mr-3 shadow-xl rounded-xl w-[35px] h-[35px] flex flex-col items-center">
                    <FaBehance size={25} className="text-white" />
                </a>
                <a href="https://www.linkedin.com/in/gianella-meringolo/" target='_blanck' className="group bg-primary p-2 mr-3 shadow-xl rounded-xl w-[35px] h-[35px] flex flex-col items-center">
                    <RiLinkedinFill size={25} className="text-white" />
                </a>
                <a href="https://github.com/gmeringolo" target='_blanck' className="group bg-primary p-2 shadow-xl rounded-xl w-[35px] h-[35px] flex flex-col items-center">
                    <FaGithub size={25} className="text-white" />
                </a>
                </div>
                <div className="mb-3 mt-2 text-dark text-sm">
                    <p>
                    Copyright© 2025 Gianella Meringolo
                    </p>
                </div>
            </footer>
        </>
    );
}