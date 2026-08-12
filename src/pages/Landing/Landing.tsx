import ProductCard from "@/widgets/ProductCard" 
import { mockProducts } from "@/shared/api"
import Container from "@/shared/ui/Container"
import Slider from "@/shared/ui/Slider"
import styles from './Landing.module.scss'
import Hero from "@/widgets/Hero"

const Landing = () => {
  return (
    <>
      <Container className={styles.slider}>
        <Slider slides={['/img/landing-1.jpg', '/img/landing-1.jpg', '/img/landing-1.jpg']} />
      </Container>
      <Container className={styles.hero}>
        <Hero />
      </Container>
      <Container className={styles.productArrivalsList}>
        {mockProducts.map((item) => (
          <ProductCard
            key={item.id}
            product={item}
            className={styles.productArrivalsCard}
            link={item.url}
          />
        ))}
      </Container>
    </>
  )
}

export default Landing