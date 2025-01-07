import React from 'react';
import { RiReactjsFill } from 'react-icons/ri';
import { SiJavascript } from 'react-icons/si';
import { SiPython } from 'react-icons/si';
import { SiC } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiSqlite } from 'react-icons/si';
import { SiDocker } from "react-icons/si";
import { motion } from "motion/react";

const iconVariants = (duration) => ({
    initial: { y: -10 },
    animate: {
        y: [10, -10],
        transittion: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className='border-b border-neutral-800 pb-24'>
            <h2 className='my-20 text-center text-4xl'>Technologies</h2>
            <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} transition={{ duration: 1.5 }}
                className="flex flex-wrap items-center justify-center gap-4">
                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsFill className='text-7xl text-cyan-400' />
                </motion.div>

                <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiJavascript className='text-7xl' color="#F7DF1E" />
                </motion.div>

                <motion.div variants={iconVariants(5)} initial="initial" animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiPython className='text-7xl' color="#306998" />
                </motion.div>

                <motion.div variants={iconVariants(6)} initial="initial" animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiC className='text-7xl' color="#A8B9CC" />
                </motion.div>

                <motion.div variants={iconVariants(4)} initial="initial" animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMysql className='text-7xl' color="#4479A1" />
                </motion.div>

                <motion.div variants={iconVariants(2.5)} initial="initial" animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiSqlite className='text-7xl' color="#003B57" />
                </motion.div>

                <motion.div variants={iconVariants(3)} initial="initial" animate="animate"
                    className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiDocker className='text-7xl' color="#2496ED" />
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies