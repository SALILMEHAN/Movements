var ball = document.getElementById('ball');
ball.style.left = 0 + 'px';
ball.style.top = 0 + 'px';
document.addEventListener('keydown', function (e) {
    var inp = e.key;
    inp = inp.toLowerCase();
    console.log(ball.style.left);
    if (inp == 'a' && parseInt(ball.style.left) > 0) {
        var a = setInterval(function () {
            if (parseInt(ball.style.left) <= 0) clearInterval(a);
            ball.style.left = parseInt(ball.style.left) - 1 + 'px';
        }, 10);
        document.addEventListener('keyup', function () {
            clearInterval(a);
        });
    }
    else if (inp == 's' && parseInt(ball.style.top) < 450) {
        var a = setInterval(function () {
            if (parseInt(ball.style.top) >= 450) clearInterval(a);
            ball.style.top = parseInt(ball.style.top) + 1 + 'px';
        }, 10);
        document.addEventListener('keyup', function () {
            clearInterval(a);
        });
    }
    else if (inp == 'd' && parseInt(ball.style.left) < 650) {
        var a = setInterval(function () {
            if (parseInt(ball.style.left) >= 650) clearInterval(a);
            ball.style.left = parseInt(ball.style.left) + 1 + 'px';
        }, 10);
        document.addEventListener('keyup', function () {
            clearInterval(a);
        });
    }
    else if (inp == 'w' && parseInt(ball.style.top) > 0) {
        var a = setInterval(function () {
            if (parseInt(ball.style.top) <= 0) clearInterval(a);
            ball.style.top = parseInt(ball.style.top) - 1 + 'px';
        }, 10);
        document.addEventListener('keyup', function () {
            clearInterval(a);
        });
    }
});