const endDate = "11 august 2023 03:36 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

// const clock = () => {

// }

function clock() {
    const end = new Date(endDate)
    const now = new Date()
    const diff = (end - now) / 1000;
    // console.log(diff);
    // console.log(end);
    // console.log(now);

    if(diff < 0) return;

    inputs[0].value = Math.floor(diff / 3600 / 24);        // convert into days 
    inputs[1].value = Math.floor(diff / 24 / 3600) % 24;    // convert into hrs
    inputs[2].value = Math.floor(diff / 60) % 60;           // convert into mins
    inputs[3].value = Math.floor(diff) % 60;                // convert into sec
}
// initial call 
clock()


//  1 day = 24 Hrs
//  1 hr = 60 mins
//  60 mins = 3600  sec

setInterval(
    () => {
        clock()
    },
    1000
)