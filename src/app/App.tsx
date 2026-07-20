import Container from '@/shared/ui/Container'
import Heading from '@/shared/ui/Heading'
import './styles'

const App = () => {
  return (
    <Container>
      <Container.Split>
        <Container.SplitLeft>
          <Heading
            level='h1'

          >
            Заголовок 1
          </Heading>
        </Container.SplitLeft>
        <Container.SplitRight>
          <Heading
            level='h1'

          >
            Заголовок 2
          </Heading>
        </Container.SplitRight>
      </Container.Split>
    </Container>
  )
}

export default App