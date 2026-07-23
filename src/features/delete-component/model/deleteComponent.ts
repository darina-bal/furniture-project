export const deleteComponent = (
  element: HTMLElement,
  onComplete: () => void
) => {
  const initialHeight = element.scrollHeight

  const animation = element.animate(
    [
      { 
        height: `${initialHeight}px`, 
        opacity: 1, 
        transform: 'translateY(0)' 
      },
      { 
        height: '0px', 
        opacity: 0, 
        transform: 'translateY(-20px)', 
        paddingTop: '0px',
        paddingBottom: '0px',
        marginTop: '0px',
        marginBottom: '0px'
      }
    ],
    {
      duration: 400,
      easing: 'ease-in-out',
      fill: 'forwards' 
    }
  )

  animation.onfinish = () => {
    onComplete()
  }
}