const hundred = {
    '1':'сто',
    '2':'двісті',
    '3':'триста',
    '4':'чотириста',
    '5':'п`ятьсот',
    '6':'шістьсот',
    '7':'сімсот',
    '8':'вісімсот',
    '9':'дев`ятьсот'
    };
const decades = {
    '0': " ",
    '2':'двадцять',
    '3':'тридцять',
    '4':'сорок',
    '5':'п`ятдесят',
    '6':'шістдесят',
    '7':'сімдесят',
    '8':'вісімдесят',
    '9':'дев`яносто'
    };
const single = {
    '0': " ",
    '1':'одна гривня',
    '2':'дві гривні',
    '3':'три гривні',
    '4':'чотири гривні',
    '5':'п`ять гривень',
    '6':'шість гривень',
    '7':'сім гривень',
    '8':'вісім гривень',
    '9':'дев`ять гривень'
    };

const teenth = {
    '10':'десять гривень',
    '1':'оддинадцять гривень',
    '2':'дванадцять гривень',
    '3':'тринадцять гривень',
    '4':'чотирнадцять гривень',
    '5':'п`ятнадцять гривень',
    '6':'шістнадцять гривень',
    '7':'сімнадцять гривень',
    '8':'вісімнадцять гривень',
    '9':'дев`ятнадцять гривень'
    };
    
    let number = prompt ('Введіть число від 1 до 999');
    let arrnumber = [...number];
          console.log (`Ваше число = ${arrnumber}`);
          console.log (`lenght = ${arrnumber.length}`);
        

      let result = 0; 
      let result1 = 0; 
      let result2 = 0; 
      let result3 = 0;

    if (arrnumber.length==1)
       
        {result= single[arrnumber[0]];}    

    else if (arrnumber.length==2)

        {   if (arrnumber[0]==1)
                { result = teenth[arrnumber[1]];}
            else if (arrnumber[0] >1)
                {result1 = decades[arrnumber[0]];
                 result1 = result1.split(" "); 
                 result2 = single[arrnumber[1]];
                 result = result1.concat(result2); 

                }
        }
    else if (arrnumber.length==3) 
        {  result1 = hundred[arrnumber[0]];
           result1 = result1.split(" "); 
            if (arrnumber[1]==1)
                {result2 = teenth[arrnumber[2]];}
            else if (arrnumber[0] >1)
                {result2 = decades[arrnumber[1]];
                 result3 = single[arrnumber[2]];}
                 result = result1.concat(result2).concat(result3); 
         }   

    console.log (`2-й = ${arrnumber[1]}`);
    console.log (`result = ${result}`);