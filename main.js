a=0;
function qwe() {
  try{

    function asd(){
      
      var begin=Date.now();
      while (a<10000000){
       console.log(a);
       a++
       var end= Date.now();
       var timeSpent=(end-begin);
       if (timeSpent == 600){
         break;
       }
      };
      console.log ('Время работы цикла:  ' + timeSpent + ' миллисекунд'); //ms
      
    }asd();
  
  } catch (err){
    console.log ('Ошибка!');
  }
}; qwe();




