function timeConversion(s) {
    const hour = s.substring(0,2);
    const minute = s.substring(3,5);
    const second = s.substring(6,8);
    const period = s.substring(8,10);

    let militaryHour = "";
    if (period === "AM") {
        militaryHour = (hour === "12") ? "00" : hour;
    } else {
        militaryHour = (hour === "12") ? "12" : String(parseInt(hour) + 12); 
    }
    return militaryHour.concat(":", minute, ":", second);
} 



let s = "09:05:45PM";

console.log(timeConversion(s));



// .padStart(2, '0')