import { Clock, TrendingDown, Frown, Timer, Users, MessageSquare } from 'lucide-react';
import { Section, Container, Card, SlideUp, StaggerContainer, StaggerItem } from '../ui';
import styles from './PainPointsSection.module.css';

const painPoints = [
  {
    icon: Clock,
    emoji: '⏰',
    text: 'Открываете Instagram — "надо запостить", но закрываете. Нет времени.',
  },
  {
    icon: TrendingDown,
    emoji: '📉',
    text: 'Конкуренты постят каждый день, а у вас 1 пост в неделю.',
  },
  {
    icon: Frown,
    emoji: '😰',
    text: 'Стыдно показывать соцсети клиентам — там пусто или непрофессионально.',
  },
  {
    icon: Timer,
    emoji: '😤',
    text: 'Контент съедает время, которое можно потратить на продажи.',
  },
  {
    icon: Users,
    emoji: '❌',
    text: 'Весь день в делах бизнеса — на посты времени не остаётся.',
  },
  {
    icon: MessageSquare,
    emoji: '⚙️',
    text: 'SMM-специалист тонет в рутине вместо стратегии.',
  },
];

export const PainPointsSection = () => {
  return (
    <Section background="default" spacing="lg">
      <Container>
        <SlideUp>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Узнаёте себя?
            </h2>
            <p className={styles.subtitle}>
              Вы хотите развивать бизнес через соцсети, но...
            </p>
          </div>
        </SlideUp>

        <StaggerContainer>
          <div className={styles.grid}>
            {painPoints.map((point, index) => (
              <StaggerItem key={index}>
                <Card
                  variant="bordered"
                  padding="lg"
                  className={styles.card}
                >
                  <div className={styles.emoji}>{point.emoji}</div>
                  <p className={styles.text}>{point.text}</p>
                </Card>
              </StaggerItem>
            ))}
          </div>
        </StaggerContainer>
      </Container>
    </Section>
  );
};
