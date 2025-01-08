import logo from "../assets/KrajaLogo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import englishCvFile from "../assets/KHAOULA_RAJA_CV_EN.pdf";
import frenchCvFile from "../assets/KHAOULA_RAJA_CV_FR.pdf";

const Navbar = ({ language, toggleLanguage }) => {

    const cvFile = language === 'en' ? englishCvFile : frenchCvFile;

    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt="logo" />
            </div>

            <div className="m-8 flex items-center justify-center gap-4 text-2xl">

                <a
                    href={cvFile}
                    download={`KHAOULA_RAJA_CV_${language === 'en' ? 'EN' : 'FR'}.pdf`}
                    className="px-4 py-2 text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text border border-gray-300 rounded-lg hover:shadow-lg hover:border-gray-400 transition text-sm"
                >
                    {language === 'en' ? 'Download CV' : 'Télécharger CV'}
                </a>

                <a
                    href="#contact"
                    className="px-4 py-2 text-transparent bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text border border-gray-300 rounded-lg hover:shadow-lg hover:border-gray-400 transition text-sm"
                >
                    {language === 'en' ? 'Contact Me' : 'Contactez-moi'}
                </a>

                <a href="https://www.linkedin.com/in/khaoula-raja/">
                    <FaLinkedin />
                </a>

                <a href="https://github.com/khaoularj">
                    <FaGithub />
                </a>


                <button
                    className="ml-4 px-4 py-2 border border-gray-300 rounded-lg hover:shadow-lg hover:border-gray-400 transition text-sm"
                    onClick={toggleLanguage}
                >
                    {language === 'en' ? 'FR' : 'EN'}
                </button>
            </div>
        </nav>
    );
};

export default Navbar;