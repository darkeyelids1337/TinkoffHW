const formButton = document.querySelector('.form__button'),
      city = document.querySelector('.form__city-form'),
      input = document.querySelector('.form__input-form'),
      wrapperMes = document.querySelector('.form__select-wrapper .form__error-mes'),
      inputMes = document.querySelector('.form__input-error-mes'),
      requestBtn = document.querySelector('.text-block__request-button'),
      form = document.querySelector('.form'),
      fillingCourse = document.querySelector('.filling-course__panel'),
      cityArrow = document.querySelector('.form__arrow')

wrapperMes.classList.add('_hidden');
inputMes.classList.add('_hidden');

formButton.addEventListener('click',function(event){
    event.preventDefault();
    city.value ? wrapperMes.classList.add('_hidden') : wrapperMes.classList.remove('_hidden');
    input.value ? inputMes.classList.add('_hidden') : inputMes.classList.remove('_hidden');
    wrapperMes.classList.contains('_hidden') ? city.style.backgroundColor = '#ECF1F7' : city.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
    inputMes.classList.contains('_hidden') ? input.style.backgroundColor = '#ECF1F7' : input.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
});

requestBtn.addEventListener('click', (event) => {
    event.preventDefault();
    form.scrollIntoView();
});

city.addEventListener('focus',() => {
    cityArrow.classList.toggle('_toggle');
});
city.addEventListener('focusout',() => {
    cityArrow.classList.toggle('_toggle');
});
fillingCourse.addEventListener('click', (event) => {
    event.preventDefault();
    const arrow = event.target.parentNode.querySelector('.filling-course__arrow');
    const infoList = event.target.parentNode.nextElementSibling.lastElementChild;
    arrow.classList.toggle('_toggle');
    infoList.classList.toggle('_visible');
   
});
