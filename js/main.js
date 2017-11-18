function toss_coin()
{
    var rand = Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random();
    var coin = $("#coin");
    if (rand >= 3) {
        coin.text('1');
    }
    else {
        coin.text('0');
    }
    coin_spin(10);
}


function coin_spin(n)
{
    var coin = $("#coin");
    if (n > 0) {
        if (coin.text() === '0')
            coin.text('1');
        else
            coin.text('0');
        setTimeout('coin_spin(' + String(n-1) + ')', 50);
    }
}