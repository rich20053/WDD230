/* const lastModDate = new Date(document.lastModified);
let strLMD = "Last Updated: " + lastModDate.getMonth()+1 + "/" + lastModDate.getDate() + "/" 
           + lastModDate.getFullYear() + " " + lastModDate.getHours() + ":" 
           + lastModDate.getMinutes() + ":" + lastModDate.getSeconds();
document.getElementById("datemodified").textContent = strLMD;
*/
const options = {weekday: 'long', day: 'numeric', month: 'long', year: 'numeric'};
document.getElementById("datemodified").textContent = "Last Updated: " + new Date().toLocaleDateString('en-US', options);


