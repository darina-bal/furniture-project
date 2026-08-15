import Svg from '@/shared/ui/Svg'
import styles from './Benefits.module.scss'
import Heading from '@/shared/ui/Heading'

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Svg 
            spriteType='mono'
            iconName='delivery'
          />
          <div className={styles.wrapperText}>
            <Heading level='h4' className={styles.title}>Free Shipping</Heading>
            <p className={styles.description}>Order above $200</p>
          </div>
        </li>
        <li className={styles.item}>
          <Svg 
            spriteType='mono'
            iconName='money'
          />
          <div className={styles.wrapperText}>
            <Heading level='h4' className={styles.title}>Money-back</Heading>
            <p className={styles.description}>30 days guarantee</p>
          </div>
        </li>
      </ul>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Svg 
            spriteType='mono'
            iconName='lock'
          />
          <div className={styles.wrapperText}>
            <Heading level='h4' className={styles.title}>Secure Payments</Heading>
            <p className={styles.description}>Secured by Stripe</p>
          </div>
        </li>
        <li className={styles.item}>
          <Svg 
            spriteType='mono'
            iconName='call'
          />
          <div className={styles.wrapperText}>
            <Heading level='h4' className={styles.title}>24/7 Support</Heading>
            <p className={styles.description}>Phone and Email support</p>
          </div>
        </li>
      </ul>
    </section>
  )
}

export default Benefits