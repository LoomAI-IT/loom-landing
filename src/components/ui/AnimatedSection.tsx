import {type ReactNode} from 'react';
import {motion} from 'framer-motion';

interface AnimatedSectionProps {
    children: ReactNode;
    delay?: number;
    className?: string;
}

export const AnimatedSection = ({children, delay = 0, className}: AnimatedSectionProps) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 30}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-100px'}}
            transition={{
                duration: 0.6,
                delay,
                ease: [0.21, 0.45, 0.27, 0.9],
            }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const FadeIn = ({children, delay = 0}: { children: ReactNode; delay?: number }) => {
    return (
        <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 0.6, delay}}
        >
            {children}
        </motion.div>
    );
};

export const SlideUp = ({children, delay = 0}: { children: ReactNode; delay?: number }) => {
    return (
        <motion.div
            initial={{opacity: 0, y: 40}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true, margin: '-50px'}}
            transition={{duration: 0.5, delay, ease: [0.21, 0.45, 0.27, 0.9]}}
        >
            {children}
        </motion.div>
    );
};

export const StaggerContainer = ({children}: { children: ReactNode }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{once: true, margin: '-100px'}}
            variants={{
                visible: {
                    transition: {
                        staggerChildren: 0.1,
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};

export const StaggerItem = ({children}: { children: ReactNode }) => {
    return (
        <motion.div
            variants={{
                hidden: {opacity: 0, y: 20},
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        duration: 0.5,
                        ease: [0.21, 0.45, 0.27, 0.9],
                    },
                },
            }}
        >
            {children}
        </motion.div>
    );
};
