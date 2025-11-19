import { useState } from 'react';
import { Wand2, Image, Hash } from 'lucide-react';
import { Section, Container, Button, Card, SlideUp } from '../ui';
import styles from './TryNowSection.module.css';

const TOPICS = ['Кейс клиента', 'Экспертное мнение', 'Анонс акции', 'Ответ на вопрос'];

export const TryNowSection = () => {
  const [selectedTopic, setSelectedTopic] = useState(TOPICS[0]);
  const [showResult, setShowResult] = useState(false);

  const handleGenerate = () => {
    setShowResult(true);
  };

  return (
    <Section spacing="lg">
      <Container size="narrow">
        <SlideUp>
          <div className={styles.header}>
            <h2 className={styles.title}>
              Попробуйте прямо сейчас
            </h2>
            <p className={styles.subtitle}>
              Прожить опыт использования за 30 секунд — увидеть профессиональный результат
            </p>
          </div>
        </SlideUp>

        <SlideUp delay={0.2}>
          <div className={styles.widget}>
            <Card variant="elevated" padding="lg" className={styles.card}>
            <div className={styles.steps}>
              <div className={styles.step}>
                <div className={styles.stepNumber}>1</div>
                <div className={styles.stepContent}>
                  <label className={styles.label}>Выберите рубрику</label>
                  <div className={styles.topics}>
                    {TOPICS.map((topic) => (
                      <button
                        key={topic}
                        className={`${styles.topicButton} ${selectedTopic === topic ? styles.active : ''}`}
                        onClick={() => setSelectedTopic(topic)}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>2</div>
                <div className={styles.stepContent}>
                  <label className={styles.label}>Опишите суть в 2-3 предложениях</label>
                  <textarea
                    className={styles.textarea}
                    placeholder="Например: Мой клиент увеличил продажи на 250% за 3 месяца, используя нашу стратегию контент-маркетинга..."
                    rows={4}
                  />
                </div>
              </div>

              <div className={styles.step}>
                <div className={styles.stepNumber}>3</div>
                <div className={styles.stepContent}>
                  <Button size="lg" onClick={handleGenerate} className={styles.generateButton}>
                    <Wand2 size={20} />
                    Сгенерировать
                  </Button>
                </div>
              </div>
            </div>

            {showResult && (
              <div className={styles.result}>
                <div className={styles.resultHeader}>
                  <div className={styles.resultBadge}>Ваш пост готов!</div>
                </div>
                <div className={styles.resultContent}>
                  <div className={styles.resultImage}>
                    <Image size={48} />
                  </div>
                  <div className={styles.resultText}>
                    <div className={styles.resultLine}></div>
                    <div className={styles.resultLine}></div>
                    <div className={styles.resultLine} style={{ width: '80%' }}></div>
                  </div>
                  <div className={styles.resultHashtags}>
                    <Hash size={16} />
                    <span>продажи #маркетинг #кейс</span>
                  </div>
                </div>
              </div>
            )}
          </Card>
          </div>
        </SlideUp>
      </Container>
    </Section>
  );
};
