const formButton = document.querySelector('.form-btn'),
      city = document.querySelector('.city-form'),
      input = document.querySelector('.input-form'),
      wrapperMes = document.querySelector('.select-wrapper .error-mes'),
      inputMes = document.querySelector('.input-error-mes'),
      requestBtn = document.querySelector('.request-btn'),
      form = document.querySelector('.form-section'),
      fillingCourse = document.querySelector('.filling-course-panel');

let sheet = document.styleSheets[0];
let rules = sheet.rules;

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
    sheet.insertRule('.select-wrapper::after {transform: rotate(180deg); }', rules.length);
});
city.addEventListener('focusout',() => {
    sheet.removeRule(rules.length - 1);
});
fillingCourse.addEventListener('click', (evt) => {
    evt.preventDefault();
    const child = evt.target.parentNode.querySelector('.info-list');
    child.hidden = !child.hidden;
    if(child.hidden){
        child.style.display = 'none';
        sheet.removeRule(rules.length - 1);
    }
    else 
    {
        child.style.display = 'block';
        sheet.insertRule('.filling-course-panel h2::after {transform: rotate(180deg); }', rules.length);
    }
});
