import Container from '@/shared/ui/Container'
import Paragraph from '@/shared/ui/Paragraph'
import './styles'

const App = () => {
  return (
    <Container>
      <Container.Split>
        <Container.SplitLeft>
          <Paragraph
            variantText='body_1'
          >
            Параграф 1
          </Paragraph>
        </Container.SplitLeft>
        <Container.SplitRight>
          <Paragraph
            variantText='body_2'
          >
            Параграф 2
          </Paragraph>
        </Container.SplitRight>
      </Container.Split>
    </Container>
  )
}

export default App