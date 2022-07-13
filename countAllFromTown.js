export default function countAllFromTown(regNo,regLocation){

    let registration = regNo.split(",");
    var counter = 0;

    for(var i =0; i<registration.length; i++){

        var currentReg = registration[i].trim();

        if(currentReg.startsWith(regLocation)){
            counter++
        }
    }
    return counter++;
}