const clock = document.getElementById('clock')


setInterval(function() {
    let newDate = new Date()
    // console.log(date.toLocaleTimeString());
    clock.innerHTML = newDate.toLocaleTimeString();
},1000)