import logo from "../assets/KrajaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import cvFile from "../assets/KHAOULA_RAJA_CV.pdf"

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />


            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">

                <a
                    href={cvFile}
                    download="KHAOULA_RAJA_CV.pdf"
                    className="px-4 py-2 text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text border border-gray-300 rounded-lg hover:shadow-lg hover:border-gray-400 transition text-sm"
                >
                    Download CV
                </a>


                <a
                    href="#contact"
                    className="px-4 py-2 text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text border border-gray-300 rounded-lg hover:shadow-lg hover:border-gray-400 transition text-sm"
                >
                    Contact Me
                </a>

                <a href="https://www.linkedin.com/in/khaoula-raja/">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/khaoularj">
                    <FaGithub />
                </a>
            </div>

        </nav>
    );
};

export default Navbar;