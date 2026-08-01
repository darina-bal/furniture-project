import FlyoutAccount from "@/widgets/FlyoutAccount"
import FlyoutSearch from "@/widgets/FlyoutSearch"
import Header from "@/widgets/Header"
import NotificationBar from "@/widgets/NotificationBar"

const Landing = () => {
  return (
    <>
      <NotificationBar />
      <Header />
      <FlyoutSearch />
      <FlyoutAccount />
    </>
  )
}

export default Landing