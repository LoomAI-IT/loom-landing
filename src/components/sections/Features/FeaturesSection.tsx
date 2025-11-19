import { Zap, Palette, Wand2, Smartphone, ImageIcon, Send } from 'lucide-react';
import { Section, Container, Card, SlideUp, StaggerContainer, StaggerItem } from '../../ui';
import styles from './FeaturesSection.module.css';

const features = [
  {
    icon: Zap,
    title: 'Генерация текста + фото за 60 секунд',
    value: 'Ценность: Пост за 60 секунд — без подбора слов',
  },
  {
    icon: Palette,
    title: '5 профессиональных рубрик на выбор',
    value: 'Ценность: Всегда знаете ЧТО писать — без ступора',
  },
  {
    icon: Wand2,
    title: 'AI-редактор для доработки',
    value: 'Ценность: "Добавь эмоций" — текст меняется моментально',
  },
  {
    icon: Smartphone,
    title: 'Адаптация под VK, Instagram, Telegram',
    value: 'Ценность: Экономия 70% времени на адаптацию',
  },
  {
    icon: ImageIcon,
    title: 'AI-генерация или загрузка своих фото',
    value: 'Ценность: Не нужен стоковый поиск или дизайнер',
  },
  {
    icon: Send,
    title: 'Публикация напрямую в соцсети',
    value: 'Ценность: От идеи до поста — один клик',
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
