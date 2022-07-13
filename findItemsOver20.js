export default function findItemsOver20(list){
    var itemLists = list;
       var currentLists = [];
    
    for(var i=0; i<list.length; i++){
       var currentList = list[i] 
     if(currentList["qty"] > 20){
      currentLists.push(currentList)
      
     }
     }
     return  currentLists;
    }