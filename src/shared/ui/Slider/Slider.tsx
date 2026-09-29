import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import type { Swiper as SwiperClass } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import PaginationButton from '../PaginationButton'; 
import clsx from 'clsx';
import { useIsMobile } from '../../lib/hooks/useMediaQuery'
import styles from './Slider.module.scss'

interface SliderProps {
  slides: string[];
  className?: string;

  /**
   * Включает автопролистывание.
   * Если передать число — это будет задержка в миллисекундах.
   *
   * Пример:
   * autoPlay = true -> 10 секунд по умолчанию
   * autoPlay = 5000 -> 5 секунд
   */
  autoPlay?: boolean | number;

  /**
   * Задержка автопролистывания в миллисекундах.
   * Используется, если autoPlay = true.
   *
   * По умолчанию 10000 мс = 10 секунд.
   */
  autoplayDelay?: number;

  /**
   * Скорость анимации переключения слайда в миллисекундах.
   *
   * Например:
   * speed = 300 — быстро
   * speed = 1000 — медленно
   */
  speed?: number;

  /**
   * Останавливать ли автопролистывание при наведении мыши.
   */
  pauseOnMouseEnter?: boolean;

  /**
   * Отключать ли автопролистывание после взаимодействия пользователя со слайдером.
   * Обычно лучше оставить false, чтобы автопролистывание продолжалось.
   */
  disableOnInteraction?: boolean;
}

const Slider = (props: SliderProps) => {
  const {
    slides,
    className,
    autoPlay = false,
    autoplayDelay = 10000,
    speed = 600,
    pauseOnMouseEnter = true,
    disableOnInteraction = false,
  } = props; 

  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handlePrev = useCallback(() => swiper?.slidePrev(), [swiper]);
  const handleNext = useCallback(() => swiper?.slideNext(), [swiper]);

  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.slider, className)}>
      <Swiper
        modules={[Pagination, Autoplay]}
        loop 
        speed={speed}
        autoplay={{
          delay: typeof autoPlay === 'number' ? autoPlay : autoplayDelay,
          disableOnInteraction,
          pauseOnMouseEnter,
        }}
        pagination={{ 
          clickable: true,
          bulletClass: styles.bullet,
          bulletActiveClass: styles.bulletActive,
        }} 
        onSwiper={setSwiper}
      >
        {slides.map((src, index) => (
          <SwiperSlide key={src}>
            <img
              className={styles.image}
              src={src}
              alt={`Слайд ${index + 1}`}
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isMobile && <PaginationButton onPrev={handlePrev} onNext={handleNext} />}
    </section>
  );
};

export default Slider