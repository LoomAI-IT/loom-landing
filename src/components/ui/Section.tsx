import {type ReactNode, type HTMLAttributes} from 'react';
import clsx from 'clsx';
import styles from './Section.module.css';

interface SectionProps extends HTMLAttributes<HTMLElement> {
    children: ReactNode;
    background?: 'default' | 'secondary' | 'tertiary';
    spacing?: 'sm' | 'md' | 'lg';
}

export const Section = ({
                            children,
                            background = 'default',
                            spacing = 'md',
                            className,
                            ...props
                        }: SectionProps) => {
    return (
        <section
            className={clsx(styles.section, styles[background], styles[spacing], className)}
            {...props}
        >
            {children}
        </section>
    );
};
