import { Smile, Shield, Rocket, CheckCircle, TrendingUp, Star } from 'lucide-react';
import { Section, Container, Card, SlideUp, StaggerContainer, StaggerItem } from '../ui';
import styles from './BenefitsSection.module.css';

const emotions = [
  {
    icon: Smile,
    emoji: '😌',
    title: 'Спокойствие',
    text: 'Можете создать пост за минуту в любой момент',
  },
  {
    icon: Shield,
    emoji: '💪',
    title: 'Уверенность',
    text: 'С гордостью показываете соцсети клиентам',
  },
  {
    icon: Rocket,
    emoji: '🚀',
    title: 'Контроль',
    text: 'Публикуете когда хотите, без зависимости',
  },
];

const results = [
  {
    icon: CheckCircle,
    title: 'Активные соцсети каждый день',
    text: '15-20 постов в месяц без напряжения',
  },
  {
    icon: Star,
    title: 'Вас признают экспертом',
    text: 'Клиенты обращаются, доверяя вашей экспертизе',
  },
  {
    icon: TrendingUp,
    title: 'Бизнес растёт через соцсети',
    text: 'Регулярные лиды — контент как магнит для аудитории',
  },
];

export const BenefitsSection = () => {
  return (
    <Section background="default" spacing="lg">
      <Container>
        <SlideUp>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Какой результат вы получите
            </h2>
            <p className={styles.subtitle}>
              Изменения в эмоциях и реальных бизнес-результатах
            </p>
          </div>
        </SlideUp>

        <div className={styles.columns}>
          <div className={styles.column}>
            <SlideUp delay={0.1}>
              <h3 className={styles.columnTitle}>Ваши эмоции</h3>
            </SlideUp>
            <StaggerContainer>
              <div className={styles.grid}>
                {emotions.map((emotion, index) => {
                  const Icon = emotion.icon;
                  return (
                    <StaggerItem key={index}>
                      <Card
                        variant="bordered"
                        padding="lg"
                        className={styles.card}
                      >
                        <div className={styles.emoji}>{emotion.emoji}</div>
                        <h4 className={styles.cardTitle}>{emotion.title}</h4>
                        <p className={styles.cardText}>{emotion.text}</p>
                      </Card>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          </div>

          <div className={styles.column}>
            <SlideUp delay={0.2}>
              <h3 className={styles.columnTitle}>Реальные результаты</h3>
            </SlideUp>
            <StaggerContainer>
              <div className={styles.grid}>
                {results.map((result, index) => {
                  const Icon = result.icon;
                  return (
                    <StaggerItem key={index}>
                      <Card
                        variant="bordered"
                        padding="lg"
                        className={styles.card}
                      >
                        <div className={styles.iconWrapper}>
                          <Icon size={24} strokeWidth={1.5} />
                        </div>
                        <h4 className={styles.cardTitle}>{result.title}</h4>
                        <p className={styles.cardText}>{result.text}</p>
                      </Card>
                    </StaggerItem>
                  );
                })}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </Container>
    </Section>
  );
};
