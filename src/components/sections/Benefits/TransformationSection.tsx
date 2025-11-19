import {Clock, Calendar, Award, Heart, Users, TrendingUp} from 'lucide-react';
import {Section, Container, Card, SlideUp, StaggerContainer, StaggerItem} from '../../ui';
import styles from './TransformationSection.module.css';

interface Transformation {
    icon: typeof Clock;
    title: string;
    before: string;
    after: string;
}

const transformations: Transformation[] = [
    {
        icon: Clock,
        title: 'Время на контент',
        before: '1-4 часа на создание одного поста',
        after: '60 секунд от идеи до публикации'
    },
    {
        icon: Calendar,
        title: 'Регулярность публикаций',
        before: '2-3 поста в месяц, когда есть вдохновение',
        after: '15-20 качественных постов каждый месяц'
    },
    {
        icon: Award,
        title: 'Качество контента',
        before: 'Тексты "на коленке", стоковые картинки, стыдно показать',
        after: 'Экспертный тон, уникальные визуалы, гордость за соцсети'
    },
    {
        icon: Heart,
        title: 'Эмоциональное состояние',
        before: 'Стресс от дедлайнов, вина за неактивность',
        after: 'Спокойствие, контроль, уверенность в экспертности'
    },
    {
        icon: Users,
        title: 'Узнаваемость эксперта',
        before: 'Клиенты не находят в соцсетях или видят пустой аккаунт',
        after: 'Вас узнают как эксперта, рекомендуют, доверяют'
    },
    {
        icon: TrendingUp,
        title: 'Поток клиентов',
        before: 'Сарафанное радио и случайные заявки',
        after: 'Регулярные лиды через контент-маркетинг'
    }
];

export const TransformationSection = () => {
    return (
        <Section background="secondary" spacing="lg">
            <Container>
                <SlideUp>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            Что меняется в вашей жизни
                        </h2>
                        <p className={styles.subtitle}>
                            Трансформация от хаоса в соцсетях к системному росту бизнеса
                        </p>
                    </div>
                </SlideUp>

                <StaggerContainer>
                    <div className={styles.grid}>
                        {transformations.map((item, index) => {
                            const Icon = item.icon;
                            return (
                                <StaggerItem key={index}>
                                    <Card
                                        variant="bordered"
                                        padding="lg"
                                        hover
                                        className={styles.card}
                                    >
                                        <div className={styles.cardHeader}>
                                            <div className={styles.iconWrapper}>
                                                <Icon size={24} strokeWidth={1.5}/>
                                            </div>
                                            <h3 className={styles.cardTitle}>{item.title}</h3>
                                        </div>

                                        <div className={styles.comparisonTable}>
                                            <div className={styles.row}>
                                                <div className={`${styles.rowLabel} ${styles.rowLabelBefore}`}>
                                                    <span className={styles.icon}>✕</span>
                                                    Было:
                                                </div>
                                                <div className={styles.rowContent}>{item.before}</div>
                                            </div>

                                            <div className={styles.divider}></div>

                                            <div className={styles.row}>
                                                <div className={`${styles.rowLabel} ${styles.rowLabelAfter}`}>
                                                    <span className={styles.icon}>✓</span>
                                                    Стало:
                                                </div>
                                                <div className={styles.rowContent}>{item.after}</div>
                                            </div>
                                        </div>
                                    </Card>
                                </StaggerItem>
                            );
                        })}
                    </div>
                </StaggerContainer>
            </Container>
        </Section>
    );
};
