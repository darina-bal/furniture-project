import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode, Keyboard, Mousewheel, Scrollbar } from 'swiper/modules'
import 'swiper/css'
import ProductCard from "@/widgets/ProductCard" 
import { mockProducts } from '@/shared/api/products/mockProducts'
import styles from './ProductSlider.module.scss'

const ProductSlider = () => {
  const [scrollbarEl, setScrollbarEl] = useState<HTMLDivElement | null>(null)

  const newProducts = mockProducts.filter(product => product.isNew)

  return (
    <section className={styles.productArrivals}>
      <Swiper
        className={styles.slider}
        modules={[Mousewheel, Scrollbar, FreeMode, Keyboard]}
        slidesPerView="auto"
        spaceBetween={24}
        slidesOffsetAfter={24}
        breakpoints={{
          0:   { spaceBetween: 16, slidesOffsetAfter: 16 },
          768: { spaceBetween: 24, slidesOffsetAfter: 24 },
        }}
        mousewheel={{ forceToAxis: false, releaseOnEdges: true }}
        freeMode={{ enabled: true, momentum: true }}
        keyboard={{ enabled: true, onlyInViewport: true }}
        scrollbar={{
          el: scrollbarEl,
          draggable: true,
          dragClass: styles.scrollbarDrag,          // класс "бегунка"
          lockClass: styles.scrollbarLocked,        // когда скроллить нечего
          scrollbarDisabledClass: styles.scrollbarDisabled,
        }}
        grabCursor
      >
        {newProducts.map((item) => (
          <SwiperSlide key={item.id} className={styles.slide}>
            {item.isNew && <ProductCard product={item} link={item.url} className={styles.card} />}
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Ползунок рендерим НЕ внутри swiper, а внутри Container —
          поэтому он всегда ровно по ширине контейнера */}
      <div className={styles.scrollbarContainer}>
        <div ref={setScrollbarEl} className={styles.scrollbar} />
      </div>
    </section>
  )
}

export default ProductSlider