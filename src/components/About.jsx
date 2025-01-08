import React from 'react';
import aboutImg from "../assets/about.jpg";
import { ABOUT_TEXT_EN, ABOUT_TEXT_FR } from '../constants';
import { motion } from "motion/react";

const About = ({ language }) => {
    const aboutText = language === 'en' ? ABOUT_TEXT_EN : ABOUT_TEXT_FR;

    return (
        <div className='border-b border-neutral-900 pb-4'>
            <h2 className='my-20 text-center text-4xl'>
                {language === 'en' ? 'About Me' : 'À propos de moi'}
            </h2>
            <div className="flex flex-wrap">
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2 lg:p-6"
                >
                    <div className="flex items-center justify-center">
                        <img className='w-[900px] h-[300px] rounded-2xl -ml-12' src={aboutImg} alt='about' />
                    </div>
                </motion.div>
                <motion.div
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className="w-full lg:w-1/2"
                >
                    <div className="flex justify-center lg:justify-start">
                        <p className='my-2 max-w-xl py-6 ml-6'>
                            {aboutText}
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default About;
