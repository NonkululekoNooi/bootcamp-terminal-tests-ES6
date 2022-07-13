export default function totalPhoneBill(totalBill){

    var callSms = totalBill.split(",");

    var counter =0;

     console.log(totalBill);

    for(var i=0;i<callSms.length;i++){

      var phoneCalls = callSms[i].trim();

      console.log(phoneCalls);
      
      if(phoneCalls === ('call')){

        counter+=2.75;

        }else if(phoneCalls === ('sms')){
            
             counter+=0.65;
        }
    }console.log('R'+counter);
    
     return 'R'+counter.toFixed(2);
   }
   