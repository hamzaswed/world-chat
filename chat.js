window.onload = setInterval(
    function(){   //*get hour onloade bage
    var date = new Date(),
        h = date.getHours(),
        m =date.getMinutes(),
        headerDate = document.getElementsByClassName("hour")[0];//*get hour and minutes in the  header
    if(h<10){
        h = "0"+ h;
    }
    if(m<10){
        m = "0"+ m
    }else{
        headerDate.children[3].innerHTML = h + ":" + m;
    }
        headerDate.children[3].innerHTML = h + ":" + m;
    }
)//*set hour and minute in header saction

var online = document.getElementsByClassName("name")[0],
    today = document.getElementsByClassName("today")[0];

var but = document.getElementsByClassName("but")[0],//*get button element from Html file
    input = document.getElementById("input"),//*get input element from Html file
    online = document.getElementsByClassName("name")[0],//*get online in header saction
    today = document.getElementsByClassName("today")[0];//*get today in containe saction
    massageCont = document.getElementById("container");
but.onclick = function(){
    //*get hours and minutes 
    var date = new Date(),
        h = date.getHours(),
        m =date.getMinutes();
    //*create Massage elements
    var massageDiv = document.createElement("div"),
        massageP = document.createElement("p"),
        checkDiv = document.createElement("div"),
        hourSpan = document.createElement("span"),
        space = document.createElement("br");
        icon = document.createElement("i");
    //*add classs to created elements
    massageDiv.classList.add("massage");
    checkDiv.classList.add("check");
    icon.classList.add("fa");
    icon.style.fontSize = '10px';//?style icon size
    //*add time hour and minutes to created span 
    if(h<10){
        h = "0" + h
    }
    else if (h == "0" + h){
        h = h
    }
    if(m<10){
        m = "0" + m
    }
    else if (m == "0" + m){
        m = m
    }    
    else{
        hourSpan.innerHTML = h + ":" + m;
    }
    hourSpan.innerHTML = h + ":" + m;
    massageP.innerHTML = input.value;
    icon.innerHTML = '&#xf00c;';//?set icon from font awesome
    //*append created Elements to massage div
    massageDiv.appendChild(massageP);
    massageDiv.appendChild(checkDiv);
    checkDiv.appendChild(hourSpan);
    checkDiv.appendChild(icon);
    //*append massage div to container
    massageCont.appendChild(massageDiv);
    today.style.top = "4%";
    //*style marign of massage div
    var n = massageCont.children.length;//?get massage length
    if(n == "2"){
        massageDiv.style.marginTop = "50px";
    }else{
        massageDiv.style.marginTop = "5px";
    }
    //*set time to change icon and icon color
    if(n == "2"){
        setTimeout(() => {
            online.children[1].innerHTML = "online";//*set online statu 
            icon.innerHTML = "&#xf560"
        }, 1500);
        setTimeout(() => {
            icon.style.color = "#03a9f4"
        }, 2500);
    }else{
        icon.innerHTML = "&#xf560;";
        setTimeout(() => {
            icon.style.color = "#03a9f4"
        }, 300);
    }
    massageCont.scrollTop = massageCont.children.length * 1000;//?set scrool width massage length
    input.value = "";//?to empty input elemnt
}
