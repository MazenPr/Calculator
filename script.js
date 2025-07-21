const result = document.getElementById('result');
const buttons = document.querySelectorAll('.buttons button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.textContent;


    if(value === 'C'){
      result.value = '';
    }else if (value === 'DEL'){
      result.value = result.value === 'Error' ? '' : result.value.slice(0 , -1);

    }else if (value === '='){
      try{
        result.value = eval(result.value);
      }catch{
        result.value = 'Error';
      }
    }else {
      if(result.value === 'Error') {
        result.value = '';
      }
      result.value += value;
    }
  })
})