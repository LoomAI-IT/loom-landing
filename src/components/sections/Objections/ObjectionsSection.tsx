import { ShieldCheck, Zap, DollarSign, Users, Repeat, TrendingUp } from 'lucide-react';
import { Section, Container, Card, SlideUp, StaggerContainer, StaggerItem } from '../../ui';
import styles from './ObjectionsSection.module.css';

const objections = [
  {
    type: 'barrier',
    icon: ShieldCheck,
    title: '"AI — это сложно"',
    answer: 'Проще Instagram Stories: выбрал рубрику → написал → готово',
  },
  {
    type: 'barrier',
    icon: Zap,
    title: '"Роботный контент"',
    answer: 'Скажите "добавь эмоций" — AI адаптируется под ваш стиль',
  },
  {
    type: 'barrier',
    icon: DollarSign,
    title: '"Зачем платить?"',
    answer: 'ChatGPT + Canva = 40 мин. Loom = 60 сек. Ваше время дороже',
  },
  {
    type: 'competitor',
    icon: Users,
    title: 'VS Нанять SMM-щика',
    answer: 'Loom = стоимость 1 часа работы, но создаёт контент 24/7',
  },
  {
    type: 'competitor',
    icon: Repeat,
    title: 'VS Делать в Canva',
    answer: 'Переключение между 4 инструментами vs один клик в Loom',
  },
  {
    type: 'competitor',
    icon: TrendingUp,
    title: 'VS Не вести соцсети',
    answer: 'Конкуренты забирают клиентов. Loom = 5 минут = поток лидов',
  },
];

export const ObjectionsSection = () => {
  return (
    <Section background="secondary" spacing="lg">
      <Container>
        <SlideUp>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Почему именно Loom?
            </h2>
            <p className={styles.subtitle}>
              Отвечаем на частые сомнения и сравниваем с альтернативами
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
                        <Icon size={20} strokeWidth={2} />
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
