import FlyoutPanel from '@/shared/ui/FlyoutPanel'
import { useFlyout, useFlyoutStore } from '@/shared/lib/hooks/useFlyout'
import { Avatar, useUser } from '@/entities/user'
import styles from './FlyoutAccount.module.scss'

const FlyoutAccount = () => {
  const { closeAccount } = useFlyout();
  const isOpen = useFlyoutStore((s) => s.isOpen('account'));
  const { user } = useUser();

  return (
    <FlyoutPanel
      isOpen={isOpen}
      direction="right"
      onClose={closeAccount}
      className={styles.panel}
    >
      {user ? (
        <>
          <Avatar />
        </>
      ) : (
        <></>
      )}
    </FlyoutPanel>
  )
}

export default FlyoutAccount