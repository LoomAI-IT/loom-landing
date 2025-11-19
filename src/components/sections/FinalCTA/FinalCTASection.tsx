import {ArrowRight} from 'lucide-react';
import {motion} from 'framer-motion';
import {Section, Container, Button} from '../../ui';
import styles from './FinalCTASection.module.css';

export const FinalCTASection = () => {
    return (
        <Section spacing="lg" className={styles.section}>
            <Container size="narrow">
                <motion.div
                    initial={{opacity: 0, y: 30}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.6}}
                    className={styles.content}
                >
                    <h2 className={styles.title}>
                        Попробуйте бесплатно
                    </h2>
                    <p className={styles.subtitle}>
                        Создайте 3 поста прямо сейчас — без регистрации, без карты. <br/>
                        Убедитесь, что это работает для вашего бизнеса за 2 минуты
                    </p>
                    <Button size="lg" className={styles.button}>
                        Создать первый пост бесплатно
                        <ArrowRight size={20}/>
                    </Button>
                    <p className={styles.note}>
                        Не требуется кредитная карта • Результат за 60 секунд
                    </p>
                </motion.div>
            </Container>
        </Section>
    );
};
