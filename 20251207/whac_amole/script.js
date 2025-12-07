const
    timeContent = document.getElementById("time"),
combo = document.getElementById("score"),
animals = document.querySelectorAll(".imgs-box>img"),
startBtn = document.querySelector("button");


startBtn.addEventListener("click", startGame, { once: true });

animals.forEach((node, idx) => {
    node.addEventListener("click", () => getCount(node, idx));
});


//函式區

function getCount(node) {
    if (node.src.includes("on")) {
        //目前是紅色圖，所以要計分並轉綠色1秒再自動變回黃色
        node.src = "./img/off.png";
        setTimeout(() => { node.src = "./img/state.png"; }, 1000);
        combo.textContent =Number( combo.textContent) + 1;
    }
}

function startGame() {

    startBtn.disabled = true;
    combo.textContent = 0;
    let sec = 60;
    timeContent.textContent = sec;

    const timerID = setInterval(() => {
        timeContent.textContent = --sec;
        if (sec === 0) {
            clearInterval(timerID);
            startBtn.disabled = false;
            startBtn.addEventListener("click", startGame, { once: true });
        }
    }, 1000);
        for (let i = 0; i < 100; i++) {
    const space = Math.floor(Math.random() * 9);//rand0~8
    const showtime = Math.floor(Math.random() * 57000);//rand 0~56999(ms)
    const delay = Math.floor(Math.random() * 3) + 2;//rand 2~4(s)
    setTimeout(() => toRedEvent({ space, delay }), showtime);
}

    }


//規劃紅色事件


function toRedEvent({ space, delay }) {
    if (animals[space].src.includes("state")) {
        animals[space].src = "./img/on.png";
        setTimeout(() => animals[space].src = "./img/state.png", delay * 1000);
    } else {
        console.log('位置已被占用，重新排列', space, delay);
        setTimeout(() => toRedEvent({ space: (space + 1) % 9, delay }), 100);
    }
}