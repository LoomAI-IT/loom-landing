import { Briefcase, Users, MessageSquare, Calendar, Sparkles, Globe, Bot, ArrowRight, Wand2 } from 'lucide-react';
import { Section, Container, SlideUp } from '../../ui';
import styles from './EcosystemSection.module.css';

const ecosystemFeatures = [
    {
        icon: Wand2,
        title: 'Ручная генерация контента',
        description: 'Создавайте уникальный контент с помощью AI прямо сейчас',
        status: 'ready',
    },
    {
        icon: Calendar,
        title: 'Контент-план',
        description: 'Автоматическая генерация и публикация по расписанию',
        status: 'soon',
    },
    {
        icon: Sparkles,
        title: 'Автогенерация контента',
        description: 'AI отбирает релевантный контент для вашей аудитории',
        status: 'soon',
    },
    {
        icon: MessageSquare,
        title: 'Сбор обратной связи',
        description: 'Мини-исследования с AI-анализом и выявлением точек роста',
        status: 'planned',
    },
    {
        icon: Globe,
        title: 'Генерация лендингов',
        description: 'Быстрое создание посадочных страниц для клиентов',
        status: 'planned',
    },
    {
        icon: Bot,
        title: 'AI-бот продажник',
        description: 'Автоматизация продаж в Telegram и на сайте',
        status: 'planned',
    },
];

const getStatusLabel = (status: string) => {
    switch (status) {
        case 'ready':
            return 'Готово';
        case 'soon':
            return 'Скоро';
        case 'planned':
            return 'Планируется';
        default:
            return '';
    }
};

export const EcosystemSection = () => {
    return (
        <Section background="tertiary" spacing="lg">
            <Container>
                <SlideUp>
                    <div className={styles.header}>
                        <div className={styles.badge}>Coming Soon</div>
                        <h2 className={styles.title}>Полная Экосистема для Коммуникации с клиентом</h2>
                        <p className={styles.subtitle}>
                            Комплексное решение, которое станет связующим звеном между вашим бизнесом и клиентами.
                            Закройте все вопросы коммуникации быстро и доступно с помощью AI.
                        </p>
                    </div>
                </SlideUp>

                <div className={styles.diagram}>
                    {/* Left circle - Business */}
                    <div className={styles.endpoint}>
                        <div className={`${styles.circle} ${styles.businessCircle}`}>
                            <Briefcase className={styles.endpointIcon} />
                        </div>
                        <div className={styles.endpointLabel}>Ваш Бизнес</div>
                    </div>

                    {/* Arrow left */}
                    <div className={styles.arrow}>
                        <ArrowRight className={styles.arrowIcon} />
                    </div>

                    {/* Center - Ecosystem features wrapper */}
                    <div className={styles.ecosystemWrapper}>
                        <div className={styles.features}>
                            {ecosystemFeatures.map((feature, index) => {
                                const Icon = feature.icon;
                                return (
                                    <div key={index} className={styles.featureNode}>
                                        <div className={styles.featureCircle}>
                                            <Icon className={styles.featureIcon} />
                                        </div>
                                        <div className={styles.featureInfo}>
                                            <div className={styles.featureTitleRow}>
                                                <div className={styles.featureTitle}>{feature.title}</div>
                                                <span className={`${styles.statusBadge} ${styles[`status${feature.status.charAt(0).toUpperCase() + feature.status.slice(1)}`]}`}>
                                                    {getStatusLabel(feature.status)}
                                                </span>
                                            </div>
                                            <div className={styles.featureDescription}>{feature.description}</div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Arrow right */}
                    <div className={styles.arrow}>
                        <ArrowRight className={styles.arrowIcon} />
                    </div>

                    {/* Right circle - Clients */}
                    <div className={styles.endpoint}>
                        <div className={`${styles.circle} ${styles.clientsCircle}`}>
                            <Users className={styles.endpointIcon} />
                        </div>
                        <div className={styles.endpointLabel}>Ваши Клиенты</div>
                    </div>
                </div>
            </Container>
        </Section>
    );
};
