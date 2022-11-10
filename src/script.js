const formButton = document.querySelector('.form-btn'),
      city = document.querySelector('.city-form'),
      input = document.querySelector('.input-form'),
      wrapperMes = document.querySelector('.select-wrapper .error-mes'),
      inputMes = document.querySelector('.input-error-mes'),
      requestBtn = document.querySelector('.request-btn'),
      form = document.querySelector('.form-section'),
      fillingCourse = document.querySelector('.filling-course-panel'),
      cityArrow = document.querySelector('.select-arrow')

wrapperMes.classList.add('visually-hidden');
inputMes.classList.add('visually-hidden');

formButton.addEventListener('click',function(evt){
    evt.preventDefault();
    city.value ? wrapperMes.classList.add('visually-hidden') : wrapperMes.classList.remove('visually-hidden');
    input.value ? inputMes.classList.add('visually-hidden') : inputMes.classList.remove('visually-hidden');
    wrapperMes.classList.contains('visually-hidden') ? city.style.backgroundColor = '#ECF1F7' : city.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
    inputMes.classList.contains('visually-hidden') ? input.style.backgroundColor = '#ECF1F7' : input.style.backgroundColor = 'rgba(224, 31, 25, 0.12)';
});

requestBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    form.scrollIntoView();
});

city.addEventListener('focus',() => {
    cityArrow.classList.toggle('toggle');
});
city.addEventListener('focusout',() => {
    cityArrow.classList.toggle('toggle');
});
fillingCourse.addEventListener('click', (evt) => {
    evt.preventDefault();
    const arrow = evt.target.parentNode.querySelector('.arrow');
    const infoList = evt.target.parentNode.nextElementSibling.lastElementChild;
    arrow.classList.toggle('toggle');
    console.log(infoList);
    infoList.classList.toggle('visible');
   
});
