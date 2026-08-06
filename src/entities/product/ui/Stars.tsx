import Svg from "@/shared/ui/Svg"
import styles from './Stars.module.scss'

const Stars = ({ count }: { count: number }) => {
  return (
    <div className={styles.stars}>
      {Array.from({ length: count }, (_, i) => (
        <Svg 
          key={i}
          iconName='star-filled'
          spriteType="mono"
          variant='fill-middle'
        />
      ))}
    </div>
  )
}

export default Stars