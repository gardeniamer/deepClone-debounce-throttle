let count = 0
let timer = null

const bgc = document.getElementsByClassName("bgc")[0]
bgc.textContent = count

//鼠标在盒子内移动触发事件
bgc.addEventListener("mousemove", () => {
    if (timer === null) {
        
        //节流注意是在一定时间内触发一次
        timer = setTimeout(() => {
            count++
            bgc.textContent = count
            timer = null
        }, 1000);
    }
})