const allIndicator = document.querySelectorAll('.experience_container .indicator li');
const allContent = document.querySelectorAll('.experience_container .content li');

allIndicator.forEach(item => {
  item.addEventListener('click', function () {
    const content = document.querySelector(this.dataset.target);

    allIndicator.forEach(i => {
      i.classList.remove('exp_active');
    })

    allContent.forEach(i => {
      i.classList.remove('exp_active');
    })

    content.classList.add('exp_active');
    this.classList.add('exp_active');
  })
})