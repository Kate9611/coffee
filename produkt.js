function app() {
  const buttons = document.querySelectorAll('.button')
  const cards = document.querySelectorAll('.products__item')

  function filter (category, items) {
      items.forEach((item) => {
          const isItemFiltered = !item.classList.contains(category)
          const isShowAll = category.toLowerCase() === 'all'
          if (isItemFiltered && !isShowAll) {
              item.classList.add('anime')
          } else {
              item.classList.remove('hide')
              item.classList.remove('anime')
          }
      })
  }

  buttons.forEach((button) => {
      button.addEventListener('click', () => {
          const currentCategory = button.dataset.filter
          filter(currentCategory, cards)
      })
  })

  cards.forEach((products__item) => {
    products__item.ontransitionend = function () {
          if (products__item.classList.contains('anime')) {
            products__item.classList.add('hide')
          }
      }
  })
  $('button').on('click', function(){
    $(this).addClass('active').siblings().removeClass('active')
  })
}
app()

