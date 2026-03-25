import React from 'react';
import { CONTACT } from '../constants';
import { motion } from "motion/react";
import { FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = ({ language }) => {
    return (
        <div id="contact" className='border-b border-neutral-900 pb-20'>
            <motion.h2
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: -100 }}
                transition={{ duration: 0.5 }}
                className='my-10 text-center text-4xl'
            >
                {language === 'en' ? 'Contact me' : 'Contactez-moi'}
            </motion.h2>
            {/* <div className='text-center tracking-tighter'> */}
            <div className="flex flex-col items-center gap-6 text-center tracking-tighter">
                {/* <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                    className='my-4'
                >
                    {language === 'en' ? CONTACT.address.en : CONTACT.address.fr}
                </motion.p>

                <motion.p
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: 100 }}
                    transition={{ duration: 0.5 }}
                    className='my-4'
                >
                    {CONTACT.phoneN}
                </motion.p> */}

                {/* <a className='border-b' href={`mailto:${CONTACT.email}`}>
                    {CONTACT.email}
                </a> */}
                
                {/* LinkedIn */}
                <motion.a
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                href="https://www.linkedin.com/in/khaoula-raja/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 text-xl hover:text-blue-400 transition"
                >
                <FaLinkedin className="text-2xl" />
                <span>LinkedIn</span>
                </motion.a>

                {/* Email */}
                <motion.a
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.5 }}
                href="mailto:your.email@example.com"
                className="flex items-center gap-3 text-xl hover:text-blue-400 transition"
                >
                <FaEnvelope className="text-2xl" />
                <span>kraja@marynsoft.com</span>
                </motion.a>
                
            </div>
        </div>
    );
};

export default Contact;
