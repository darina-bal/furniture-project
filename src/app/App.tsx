import Container from '@/shared/ui/Container'
import { BrowserRouter } from 'react-router'
import RouterLink from '@/shared/ui/RouterLink'
import './styles'

const App = () => {
  return (
    <BrowserRouter>
      <Container>
        <Container.Split>
          <Container.SplitLeft>
            <RouterLink
              linkType='navlink'
              to='/'
            >
              Shop
            </RouterLink>
            <RouterLink
              linkType='navlink'
              to='about'
            >
              Products
            </RouterLink>
            <RouterLink
              linkType='navlink'
              to='contact'
            >
              Contact Us
            </RouterLink>
          </Container.SplitLeft>
          <Container.SplitRight>
            
          </Container.SplitRight>
        </Container.Split>
      </Container>

    </BrowserRouter>
  )
}

export default App