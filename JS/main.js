function findDay() {
    var year=document.getElementById("year");
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("date").value);
    var gender=document.getElementById("gend1").value;

    var hundred=Math.floor(parseInt((year.value/100)+1));
    var time=year.value.substr(2,4);

    var dayOfTheWeek= Math.floor(( ( (hundred/4) -2*hundred-1) + ((5*parseInt(year.value)/4) ) + ((26*(month+1)/10)) + day ) % 7);
    // alert(dayOfTheWeek);
    
    var maleNames = ["Kwasi", "Kudwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysOfTheWeek = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

    if(gender.value == "Male"){
        alert(maleNames[dayOfTheWeek] +" "+daysOfTheWeek[dayOfTheWeek]);
      }else{
      alert(femaleNames[dayOfTheWeek]+" "+daysOfTheWeek[dayOfTheWeek]);
    }
    
} 