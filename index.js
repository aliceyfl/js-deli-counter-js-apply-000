 var takeANumber = function(katzDeliLine, newCustomer) {
    
 if (katzDeliLine.length > 0);
katzDeliLine.push(newCustomer);
 return ('Welcome, ' + newCustomer + '. You are number ' + katzDeliLine.length + ' in line.')
   }
 
 function nowServing (katzDeliLine) {
   if(katzDeliLine.length === 0) 
   return 'There is nobody waiting to be served!'; 
   }
 var customer = katzDeliLine.shift(); 
 return "Currently serving " + customer + "."; //return string with customer name
// }