var currentMonth = 8;

function changeDate(v){
    var newMonth = currentMonth + v;
    //wrap the days => Sunday - 1 = Saturday | Saturday + 1 = Sunday
    if(newMonth < 0){
        currentMonth = 11;
    }else if(newMonth > 11){
        currentMonth = 0;
    }else{
        currentMonth = newMonth;
    }
    var monthString;
    switch(currentMonth){
        case 0:
            monthString = "January";
            break;
        case 1:
            monthString = "Febuary";
            break;
        case 2:
            monthString = "March";
            break;
        case 3:
            monthString = "April";
            break;
        case 4:
            monthString = "May";
            break;
        case 5:
            monthString = "June";
            break;
        case 6:
            monthString = "July";
            break;
        case 7:
            monthString = "August";
            break;
        case 8:
            monthString = "September";
            break;
        case 9:
            monthString = "October";
            break;
        case 10:
            monthString = "November";
            break;
        case 11:
            monthString = "December";
            break;
    }
    document.getElementById('MonthValue').innerText = monthString;
}