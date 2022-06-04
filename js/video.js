var mvls = document.querySelectorAll('.mvl');
var mvrs = document.querySelectorAll('.mvr');
/* 动画 */
function animatel(obj, target) {
    clearInterval(obj.timer);
    obj.timer = setInterval(() => {
        let step = (target - obj.offsetLeft) / 10;
        if (obj.offsetLeft === target) {
            clearInterval(obj.timer);
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 30)
}

/* 鼠标经过 */
for (let i = 0; i < mvls.length; i++) {
    mvls[i].addEventListener('mouseover', () => {
        mvls[i].style.transform = "translateX(70px)";
        mvls[i].style.cursor = "pointer";
        animatel(mvls[i], 70);
    })
    mvrs[i].addEventListener('mouseover', () => {
        mvrs[i].style.transform = "translateX(-70px)";
        mvrs[i].style.cursor = "pointer";
        animatel(mvrs[i], 830);
    })
}

/* 鼠标离开 */
for (let i = 0; i < mvls.length; i++) {
    mvls[i].addEventListener('mouseout', () => {
        mvls[i].style.transform = "translateX(0px)";
        animatel(mvls[i], 50);
    })
    mvrs[i].addEventListener('mouseout', () => {
        mvrs[i].style.transform = "translateX(0px)";
        animatel(mvrs[i], 850);
    })
}
