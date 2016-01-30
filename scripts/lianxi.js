<html>
<div class='banner show'></div>
<div class='banner '></div>
<div class='banner '></div>
<div class='banner '></div>
<div class='banner '></div>
<div class='yuandian show'></div>
<div class='yuandian '></div>
<div class='yuandian '></div>
<div class='yuandian '></div>
<div class='yuandian '></div>
</html>
<css>
.show{
	display:block;
}
</css>



var curentbanner=banner[0];
var curentyuandian=yuandian[0];

闭包:(让I轮播（0，1，2，0，1，2...0,1,2...）)
var fn=(function() {
	var i=0,limit=banner.length;
	return function(){
		curentbanner.setAttribute('class','banner');
		curentyuandian.setAttribute('class','yuandian');
		banner.[i].setAttribute('class','banner show');
		yuandian.[i].setAttribute('class','yuandian show');
		curentyuandian=yuandian[i];
		curentbanner=banner[i];
		i++;
		if(i==limit){i=0}
	}
})()
var timerId=setInterval(fn,1000);