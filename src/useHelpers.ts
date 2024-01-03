export default () => {
  function switchPages (activePage: { value: number }) {
    let currentPage = 0
    const totalPages = 4
    let isTransitioning = false
    let additionalScrollCount = 0
    const additionalScrollThreshold = 5
    let startY = 0
    let endY = 0

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

    function isAtScrollEdge (): { atTop: boolean; atBottom: boolean } {
      const scrollTop: number = window.pageYOffset || document.documentElement.scrollTop
      const scrollHeight: number = document.documentElement.scrollHeight
      const clientHeight: number = document.documentElement.clientHeight

      const atBottom: boolean = scrollTop + clientHeight >= scrollHeight
      const atTop: boolean = scrollTop <= 0

      return { atTop, atBottom }
    }

    window.addEventListener('wheel', (e: WheelEvent) => {
      if (isTransitioning) {
        return
      }

      const { atTop, atBottom } = isAtScrollEdge()

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
    window.addEventListener('touchstart', handleTouchStart, { passive: false })
    window.addEventListener('touchend', handleTouchEnd, { passive: false })

    function handleTouchStart (e: TouchEvent): void {
      startY = e.touches[0].clientY
    }

    function handleTouchEnd(e: TouchEvent): void {
      if (isTransitioning) {
        e.preventDefault();
        return;
      }

      endY = e.changedTouches[0].clientY;
      const { atTop, atBottom } = isAtScrollEdge();

      if (startY > endY && atBottom) {
        switchPage(currentPage + 1);
      } else if (startY < endY && atTop) {
        switchPage(currentPage - 1);
      }
    }
  }

  return { switchPages }
}
