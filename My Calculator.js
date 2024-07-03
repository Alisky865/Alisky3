
 let maths = '';
   //JSON.parse(localStorage.getItem('maths'))

 function myCalculator(value)
   {maths += value;
   document.querySelector('#display').value = maths;
   //equalTo();
   //maths = eval(maths); 
   //document.querySelector('.display2').value = maths;
   localStorage.setItem('maths', JSON.stringify(maths));}

 function equalTo()
   {maths = eval(maths); 
    document.querySelector('.display2').value = maths;
   }
 
 
 function power(value2)
   {if(value2 === 'power2')
     {maths = Math.pow(maths,2)}


     else if(value2 === 'sqrt')
     {maths = maths = Math.sqrt(maths)}
     
     document.querySelector('.display2').value = maths;

     localStorage.setItem('maths', JSON.stringify(maths));
   }

 function percentage()
   {maths = maths/100;
     document.querySelector('.display2').value = maths;
   }

   
 function resetCalc()
   {maths = '';
   document.querySelector('#display').value = 0;
   document.querySelector('.display2').value = '';};



 function deleteNumber()
   {let display = document.querySelector('#display');
    display.value = display.value.substring(0,display.value.length - 1);
  
   maths=display.value;
 
   localStorage.setItem('maths', JSON.stringify(maths));};

    
   