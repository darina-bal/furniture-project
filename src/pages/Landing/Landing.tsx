import Container from "@/shared/ui/Container"
import Slider from "@/shared/ui/Slider"
import Hero from "@/widgets/Hero"
import CategoryShowcase from "@/widgets/CategoryShowcase"
import { mockCategory } from '@/entities/category'
import TitleArrivals from "@/widgets/TitleArrivals"
import ProductSlider from "@/widgets/ProductSlider"
import Benefits from "@/widgets/Benefits"
import styles from './Landing.module.scss'

const Landing = () => {
  return (
    <>
      <Container className={styles.slider}>
        <Slider slides={['/img/landing-1.jpg', '/img/forSlide-1.png', '/img/forSlide-2.jpg']} autoPlay />
      </Container>
      <Container className={styles.hero}>
        <Hero />
      </Container>
      <Container className={styles.showcase}>
        <CategoryShowcase categories={mockCategory} />
      </Container>
      <Container className={styles.titleArrivals}>
        <TitleArrivals />
      </Container>
      <Container className={styles.sliderArrivals}>
        <ProductSlider />
      </Container>
      <Container className={styles.benefits}>
        <Benefits />
      </Container>
    </>
  )
}

export default Landing