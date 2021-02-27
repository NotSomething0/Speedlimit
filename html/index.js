const speedText = document.getElementById('speedLimit');
const speedSign = document.getElementById('speedLimitSign')
let speed;
window.addEventListener('message', function (event) {
    const item = event.data;
    
    if (item.hudStatus == true) {
        speedText.style.display = 'block';
        speedSign.style.display = 'block';
    } else if (item.hudStatus == false) {
        speedText.style.display = 'none';
        speedSign.style.display = 'none';
    }
    
    if (item.hudStatus) {
        if (item.limit != speed) {
            speed = item.limit
            document.getElementById('speedLimit')
                .innerHTML = item.limit;
        }
    }
})
