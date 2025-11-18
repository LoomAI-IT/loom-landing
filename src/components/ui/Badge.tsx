import { ReactNode, HTMLAttributes } from 'react';
import clsx from 'clsx';
import styles from './Badge.module.css';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children: ReactNode;
  variant?: 'default' | 'primary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md';
}

export const Badge = ({
  children,
  variant = 'default',
  size = 'md',
  className,
  ...props
}: BadgeProps) => {
  return (
    <span
      className={clsx(styles.badge, styles[variant], styles[size], className)}
      {...props}
    >
      {children}
    </span>
  );
};
