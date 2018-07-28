function Loadjson(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState ===4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
Loadjson("data.json",function(text){
var data = JSON.parse(text);
console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
})
var child1 = document.querySelector(".child1")
function basics(det){
  var image = document.createElement("img")
  var name = document.createElement("h4")
  var phone = document.createElement("h4")
  var email = document.createElement("a")
  email.href = "mailto:birjiskhatoon213@gmail.com";
  image.src = det.image;
  name.textContent = det.name;
  phone.textContent = det.phoneno;
  email.textContent = det.email;
  child1.appendChild(image);
  child1.appendChild(name);
  child1.appendChild(phone);
  child1.appendChild(email);

  var add = document.createElement("h2");
  add.textContent = "address";
  child1.appendChild(add);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var p = document.createElement("p");
  p.textContent = det.address;
  child1.appendChild(p);
}
var child2 = document.querySelector(".child2");
function careerinfo(info){
  var heading = document.createElement("h2");
  heading.textContent = "Career Objective:";
child2.appendChild(heading);

var hr = document.createElement("hr");
child2.appendChild(hr);

  var c = document.createElement("h2");
  c.textContent = info.info;
  child2.appendChild(c)
}
function education(edu){
  var hd = document.createElement("h2");
  hd.textContent = "Education Qualification:";
child2.appendChild(hd);

var hr = document.createElement("hr");
child2.appendChild(hr);

var table1 =  document.createElement("table");
table1.border = "1";
child2.appendChild(table1);

tabledata="";
for(i=0;i<edu.length;i++){
  tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].institute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
}
table1.innerHTML=tabledata;
}
