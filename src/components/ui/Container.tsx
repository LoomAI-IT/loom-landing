import { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Container.module.css';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: 'default' | 'narrow' | 'wide';
}

export const Container = ({
  children,
  size = 'default',
  className,
  ...props
}: ContainerProps) => {
  return (
    <div className={clsx(styles.container, styles[size], className)} {...props}>
      {children}
    </div>
  );
};
