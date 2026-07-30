import FlyoutPanel from '@/shared/ui/FlyoutPanel'
import { useFlyout, useFlyoutStore } from '@/shared/lib/hooks/useFlyout'
import Logo from '@/shared/ui/Logo'
import Button from '@/shared/ui/Button'
import Svg from '@/shared/ui/Svg'
import styles from './FlyoutSearch.module.scss'
import Field from '@/shared/ui/Field'

const FlyoutSearch = () => {
  const { closeSearch } = useFlyout()
  const isOpen = useFlyoutStore((s) => s.isOpen('search'))

  return (
    <FlyoutPanel
      isOpen={isOpen}
      direction='left'
      onClose={closeSearch}
    >
      <div className={styles.header}>
        <Logo />
        <Button
          variant='ghost'
          className={styles.crossButton}
          onClick={closeSearch}
        >
          <Svg 
            iconName='cross'
            spriteType='mono'
            variant='fill-fair'
            className={styles.cross} />
        </Button>
      </div>
      <Field 
        label='Search'
        type='search'/>
    </FlyoutPanel>
  )
}

export default FlyoutSearch