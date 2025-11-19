import { Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import { Section, Container, Button } from '../../ui';
import styles from './HeroSection.module.css';

export const HeroSection = () => {
  return (
    <Section spacing="lg" className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className={styles.badge}
            >
              <Sparkles size={16} />
              <span>AI-помощник для соцсетей</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className={styles.title}
            >
              Поддерживайте активность и экспертность в соцсетях без рутины
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={styles.subtitle}
            >
              AI создаёт профессиональный контент за 60 секунд, пока вы занимаетесь бизнесом
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className={styles.cta}
            >
              <Button size="lg">
                Создать первый пост бесплатно
              </Button>
              <Button size="lg" variant="ghost">
                Посмотреть как это работает
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={styles.stats}
            >
              {[
                { value: '60 сек', label: 'на создание поста' },
                { value: '15-20', label: 'постов в месяц' },
                { value: '10x', label: 'рост продуктивности' },
              ].map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={styles.visual}
          >
            <div className={styles.gradientBlob}></div>
            <div className={styles.mockup}>
              <div className={styles.mockupCard}>
                <div className={styles.mockupHeader}>
                  <div className={styles.mockupDots}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                  <div className={styles.mockupTitle}>Ваш пост готов</div>
                </div>
                <div className={styles.mockupBody}>
                  <div className={styles.mockupImage}></div>
                  <div className={styles.mockupText}>
                    <div className={styles.mockupLine}></div>
                    <div className={styles.mockupLine}></div>
                    <div className={styles.mockupLine} style={{ width: '70%' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </Section>
  );
};
