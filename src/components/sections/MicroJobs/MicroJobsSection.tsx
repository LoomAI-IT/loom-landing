import { Lightbulb, TrendingUp, Megaphone, HelpCircle, ShieldAlert } from 'lucide-react';
import { Section, Container, Card, SlideUp, StaggerContainer, StaggerItem } from '../../ui';
import styles from './MicroJobsSection.module.css';

const microJobs = [
  {
    icon: Lightbulb,
    title: 'Создать пост с экспертным мнением',
    description: 'Поделитесь вашим опытом и знаниями в профессиональном формате',
  },
  {
    icon: TrendingUp,
    title: 'Опубликовать кейс клиента',
    description: 'Покажите реальные результаты и социальное доказательство',
  },
  {
    icon: Megaphone,
    title: 'Анонсировать акцию или новость',
    description: 'Держите аудиторию в курсе важных событий вашего бизнеса',
  },
  {
    icon: HelpCircle,
    title: 'Ответить на частый вопрос клиентов',
    description: 'Закрывайте возражения и помогайте принять решение о покупке',
  },
  {
    icon: ShieldAlert,
    title: 'Развенчать миф в вашей нише',
    description: 'Позиционируйте себя как эксперта, который знает правду',
  },
];

export const MicroJobsSection = () => {
  return (
    <Section background="secondary">
      <Container>
        <SlideUp>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Любая задача SMM — за 60 секунд
            </h2>
            <p className={styles.subtitle}>
              Выберите что нужно сделать, опишите суть — получите готовый пост
            </p>
          </div>
        </SlideUp>

        <StaggerContainer>
          <div className={styles.grid}>
            {microJobs.map((job, index) => {
              const Icon = job.icon;
              return (
                <StaggerItem key={index}>
                  <Card
                    variant="bordered"
                    padding="lg"
                    hover
                    className={styles.card}
                  >
                    <div className={styles.iconWrapper}>
                      <Icon size={24} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.cardTitle}>{job.title}</h3>
                    <p className={styles.cardDescription}>{job.description}</p>
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
