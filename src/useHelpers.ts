export default () => {
  function switchPages (activePage: { value: number }) {
    let currentPage = 0
    const totalPages = 4
    let isTransitioning = false
    let additionalScrollCount = 0
    const additionalScrollThreshold = 5

    function switchPage (newPage: number): void {
      if (newPage < 0 || newPage >= totalPages || isTransitioning) return

      // Переключение на страницу: currentPage

      isTransitioning = true
      currentPage = newPage

      activePage.value = totalPages + 1
      setTimeout(() => {
        activePage.value = currentPage
      }, 500)

      setTimeout(() => {
        isTransitioning = false
        additionalScrollCount = 0
      }, 1500)
    }

    window.addEventListener('wheel', (e: WheelEvent) => {
      if (isTransitioning) {
        return
      }

      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight = document.documentElement.scrollHeight
      const clientHeight = document.documentElement.clientHeight
      const atBottom = scrollTop + clientHeight >= scrollHeight
      const atTop = scrollTop <= 0

      if (e.deltaY > 0) {
        if (atBottom) {
          additionalScrollCount++
        } else {
          additionalScrollCount = 0
        }
        if (additionalScrollCount >= additionalScrollThreshold) {
          switchPage(currentPage + 1)
        }
      } else if (e.deltaY < 0) {
        if (atTop) {
          additionalScrollCount++
        } else {
          additionalScrollCount = 0
        }
        if (additionalScrollCount >= additionalScrollThreshold) {
          switchPage(currentPage - 1)
        }
      }
      // eslint-disable-next-line
    }, { passive: false })

  }

  return { switchPages }
}
