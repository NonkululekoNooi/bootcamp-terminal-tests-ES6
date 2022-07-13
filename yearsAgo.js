export default function yearAgo(year){
  
const date = new Date();
  
var years = date.getFullYear()- year;
  
  return years;
}
 