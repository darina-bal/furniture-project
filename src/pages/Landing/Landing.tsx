import ProductCard from "@/widgets/ProductCard" 
import { mockProducts } from "@/shared/api"
import Container from "@/shared/ui/Container"
import styles from './Landing.module.scss'

const Landing = () => {
  return (
    <>
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