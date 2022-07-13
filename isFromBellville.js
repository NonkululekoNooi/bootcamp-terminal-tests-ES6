export default function isFromBellville(vehicle) {

    if(vehicle.startsWith('CY')){

        return true;
    }
    else if(vehicle.startsWith('CJ')){
        return false;
    }
    
}