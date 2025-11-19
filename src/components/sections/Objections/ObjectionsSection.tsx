import {Bot, Target, Shield, Users, Zap, TrendingUp} from 'lucide-react';
import {Section, Container, Card, SlideUp, StaggerContainer, StaggerItem} from '../../ui';
import styles from './ObjectionsSection.module.css';

const objections = [
    // Блок 1: Реальные сомнения
    {
        type: 'concern',
        icon: Bot,
        title: '"Это будет звучать роботно и шаблонно"',
        answer: 'AI адаптируется под ваш стиль ещё при создании рубрики. Также можете сказать "добавь экспертности" или "сделай проще" — контент меняется под запрос. Каждый пост уникален',
    },
    {
        type: 'concern',
        icon: Target,
        title: '"У меня специфичная ниша, AI не разберётся"',
        answer: 'AI анализирует вашу нишу и создаёт умные рубрики. Работает для юристов, психологов, фитнес-тренеров, строителей — любой профессии',
    },
    {
        type: 'concern',
        icon: Shield,
        title: '"Я потеряю контроль над контентом"',
        answer: 'Вы редактируете перед публикацией. AI — это ассистент, а не замена. Полный контроль остаётся за вами',
    },
    // Блок 2: Альтернативы
    {
        type: 'alternative',
        icon: Users,
        title: 'Нанять SMM-специалиста',
        answer: 'Месяц работы Loom значительно дешевле зарплаты SMM. AI работает 24/7 и создаёт контент мгновенно. Также инструмент разгружает специалиста от рутины — он сможет сфокусироваться на стратегии',
    },
    {
        type: 'alternative',
        icon: Zap,
        title: 'ChatGPT + Canva + планировщик',
        answer: '4 инструмента, 40 минут на пост, ручная адаптация под каждую соцсеть. Loom = 1 клик, 60 секунд, автоадаптация. При этом система использует лучшие практики работы с AI и контентом',
    },
    {
        type: 'alternative',
        icon: TrendingUp,
        title: 'Не вести соцсети вообще',
        answer: 'Ваши конкуренты постят каждый день и забирают клиентов. С Loom: 5 минут = месяц контента = поток лидов',
    },
];

export const ObjectionsSection = () => {
    return (
        <Section background="secondary" spacing="lg">
            <Container>
                <SlideUp>
                    <div className={styles.header}>
                        <h2 className={styles.title}>
                            Что вас останавливает?
                        </h2>
                        <p className={styles.subtitle}>
                            Разбираем реальные сомнения и честно сравниваем с альтернативами
                        </p>
                    </div>
                </SlideUp>

                <StaggerContainer>
                    <div className={styles.grid}>
                        {objections.map((objection, index) => {
                            const Icon = objection.icon;
                            return (
                                <StaggerItem key={index}>
                                    <Card
                                        variant="bordered"
                                        padding="lg"
                                        className={styles.card}
                                    >
                                        <div className={styles.cardHeader}>
                                            <div className={styles.iconWrapper}>
                                                <Icon size={20} strokeWidth={2}/>
                                            </div>
                                            <h3 className={styles.cardTitle}>{objection.title}</h3>
                                        </div>
                                        <p className={styles.cardAnswer}>{objection.answer}</p>
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
