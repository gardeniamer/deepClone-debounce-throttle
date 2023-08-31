let count = 0
let timer

const bgc = document.getElementsByClassName("bgc")[0]
bgc.textContent = count

//鼠标在盒子内移动触发事件
bgc.addEventListener("mousemove", () => {
    if (timer) {
        clearTimeout(timer)
    }

    //防抖以最后一次操作为主，期间再次触发清理计时器
    timer = setTimeout(() => {
        count++
        bgc.textContent = count
    }, 1000);

})