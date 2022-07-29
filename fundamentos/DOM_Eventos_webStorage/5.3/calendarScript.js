function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.

  function verifyDays(array) {
    
  }

  function createDaysOfTheMonth() {
    let decemberDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    for (let index = 0; index < decemberDaysList.length; index += 1) {
        let daysList = document.querySelector('#days');
        let monthDay = document.createElement('li');
        monthDay.className = 'day';
        monthDay.innerText = decemberDaysList[index];
        if (decemberDaysList[index] === 24 || decemberDaysList[index] === 31) {
            monthDay.className = 'day holiday';
        } else if (decemberDaysList[index] === 25) {
            monthDay.className = 'day friday holiday';
        } else if (decemberDaysList[index] === 4 || decemberDaysList[index] === 11 || decemberDaysList[index] === 18) {
            monthDay.className = 'day friday';
        }
        daysList.appendChild(monthDay);
    }
  }
  createDaysOfTheMonth();

  function createButtom(feriados) {
    let button = document.createElement('button');
    let buttonDiv = document.querySelector('buttons-container');
    button.setAttribute('id', 'btn-holiday');
    buttonDiv.appendChild(button);
  }
  
  createButtom();