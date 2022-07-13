export default function findItemsOver(lists, threshold){
    var itemList = lists;
       var currentList =[];
    
    for(var i=0; i< itemList.length; i++){
       var current = itemList[i] 
     if(current["qty"] > threshold){
      currentList.push(current)
     }
    
    }
    return currentList
}