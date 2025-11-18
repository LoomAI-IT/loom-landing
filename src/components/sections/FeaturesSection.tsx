import { Zap, Palette, Wand2, Smartphone, ImageIcon, Send } from 'lucide-react';
import { Section, Container, Card, SlideUp, StaggerContainer, StaggerItem } from '../ui';
import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: Zap,
    title: 'Генерация текста + фото за 60 секунд',
    value: 'Один пост создаётся быстрее, чем вы читаете это предложение',
  },
  {
    icon: Palette,
    title: '5 профессиональных рубрик на выбор',
    value: 'Вы всегда знаете ЧТО писать: кейсы, анонсы, мифы, вопросы',
  },
  {
    icon: Wand2,
    title: 'AI-редактор для доработки',
    value: 'Скажите "добавь эмоций" — текст меняется без ручного редактирования',
  },
  {
    icon: Smartphone,
    title: 'Адаптация под VK, Instagram, Telegram',
    value: 'Один контент подстраивается под правила каждой платформы',
  },
  {
    icon: ImageIcon,
    title: 'AI-генерация или загрузка своих фото',
    value: 'Не нужно искать стоки или дизайнера — красивое изображение автоматически',
  },
  {
    icon: Send,
    title: 'Публикация напрямую в соцсети',
    value: 'От идеи до поста — один клик, без переключения между инструментами',
  },
];

export const FeaturesSection = () => {
  return (
    <Section background="default" spacing="lg">
      <Container>
        <SlideUp>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Как Loom помогает поддерживать активность и экспертность?
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
                      <Icon size={28} strokeWidth={1.5} />
                    </div>
                    <h3 className={styles.cardTitle}>{feature.title}</h3>
                    <p className={styles.cardValue}>{feature.value}</p>
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
