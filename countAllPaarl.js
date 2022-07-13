export default function countAllPaarl(regNo){

    var registrationNo = regNo.split(",");
    var counter =0;

    for(var i=0;i<registrationNo.length;i++){

        var currrentReg = registrationNo[i].trim();
        
        if(currrentReg.startsWith('CJ')){

            counter ++;
        }

return counter ++;

    }
}