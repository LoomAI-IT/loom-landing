import {Zap, Palette, ImageIcon, Send, Users, Globe} from 'lucide-react';
import {Section, Container, Card, SlideUp, StaggerContainer, StaggerItem} from '../../ui';
import styles from './FeaturesSection.module.css';

const features = [
    {
        icon: Palette,
        title: 'Умные рубрики для вашей ниши',
        description: 'AI анализирует вашу тематику и предлагает рубрики, которые найдут отклик у аудитории — ваш контент всегда будет актуальным и разнообразным.',
    },
    {
        icon: ImageIcon,
        title: 'AI-студия генерации и редактирования изображений',
        description: 'Генерация визуалов, которые точно попадают в тему поста — не нужно искать стоки или ждать дизайнера.',
    },
    {
        icon: Users,
        title: 'Доступ для всей команды',
        description: 'Создавать посты могут не только SMM-специалисты — дайте доступ сотрудникам, которые знают продукт изнутри.',
    },
    {
        icon: Zap,
        title: 'Готовый пост за пару кликов',
        description: 'От идеи до финального варианта — несколько секунд. Текст, изображение и форматирование готовы к публикации.',
    },
    {
        icon: Send,
        title: 'Публикация во все соцсети одним кликом',
        description: 'Адаптация под VK, Telegram автоматически — экономьте часы на переделке одного и того же поста.',
    },
    {
        icon: Globe,
        title: 'Проверка фактов через интернет',
        description: 'AI обращается к актуальным источникам, чтобы ваш контент был точным и достоверным — никаких устаревших данных.',
    },
];

export const FeaturesSection = () => {
    return (
        <Section background="default" spacing="lg">
            <Container>
                <SlideUp>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            Как Loom помогает создавать профессиональный контент?
                        </h2>
                    </div>
                </SlideUp>

                <StaggerContainer>
                    <div className={styles.grid}>
                        {features.map((feature, index) => {
                            const Icon = feature.icon;
                            return (
                                <StaggerItem key={index}>
                                    <Card
                                        variant="bordered"
                                        padding="lg"
                                        className={styles.card}
                                    >
                                        <div className={styles.iconWrapper}>
                                            <Icon size={28} strokeWidth={1.5}/>
                                        </div>
                                        <h3 className={styles.cardTitle}>{feature.title}</h3>
                                        <p className={styles.cardDescription}>{feature.description}</p>
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
