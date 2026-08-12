import { useCallback, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
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
}

const Slider = ({ slides, className }: SliderProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);

  const handlePrev = useCallback(() => swiper?.slidePrev(), [swiper]);
  const handleNext = useCallback(() => swiper?.slideNext(), [swiper]);

  const isMobile = useIsMobile();

  return (
    <section className={clsx(styles.slider, className)}>
      <Swiper
        modules={[Pagination]}
        loop 
        speed={600}
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
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {!isMobile && <PaginationButton onPrev={handlePrev} onNext={handleNext} />}
    </section>
  );
};

export default Slider