window.onload=function() {
	// var jizhuangxiang=document.getElementById('jizhuangxiang');
	// var your=document.getElementById('your');
	// var leftz=document.getElementById('leftz');
	// var yuandian=document.getElementsByClassName('yuandian');
	// var bner=document.getElementsByClassName('bner');
// 	var y1=document.getElementsByClassName('y1');
	var cha=document.getElementById('chart-t1');
// 	var kaiguan=true;
// 	var gjk=false;
// 	var hong=yuandian[0];
// 	var indes=0;
// 	var fn=(function(){
// 		return function(){
// 		jizhuangxiang.style.marginLeft=indes*(-1240)+'px';
// 		hong.style.background='black';
// 		yuandian[indes].style.background='white';
// 		hong=yuandian[indes];
// 		indes++;
// 		if(indes==5){indes=0};
// 		}	
// 	})()

// 	var jdi=setInterval(fn,1000)

// 	your.onclick=function(){
// 		if(indes==0){indes=1;}
// 		if(indes>=5){indes=0;}	
// 		jizhuangxiang.style.marginLeft=indes*(-1240)+'px';
// 		hong.style.background='black';
// 		yuandian[indes].style.background='white';
// 		hong=yuandian[indes];
// 		indes++;
// 		clearInterval(jdi)
		
// 		kaiguan=false;
	
	
// }
// 	leftz.onclick=function(){

// 		if(indes==0){indes=5;}
// 		indes--;
// 		jizhuangxiang.style.marginLeft=(indes)*(-1240)+'px';
// 		hong.style.background='black';
// 		yuandian[Number(indes)].style.background='white';
// 		hong=yuandian[indes];
// 		clearInterval(jdi)
// 		kaiguan=false;
	
// }
// 	for(var i=0;i<yuandian.length;i++){
// 		yuandian[i].index=i;
// 		yuandian[i].onclick=function(){
// 		hong.style.background='black';
// 		this.style.background='white';
// 		hong=this;
// 		indes=this.index;
// 		jizhuangxiang.style.marginLeft=this.index*(-1240)+'px';
// 		clearInterval(jdi);
// 		kaiguan=false;
// 		gjk=true;
// 		}
// 	}

// 	cha.onmouseover=function(){
// 		clearInterval(jdi);
// 	}
// 	cha.onmouseout=function(){
// 		if(kaiguan){
// 		clearInterval(jdi);
// 		jdi=setInterval(fn,1000)
// 	}

// }

// for(var j=0;j<yuandian.length;j++){
// 	yuandian[j].index=j
// 	yuandian[j].onmouseover=function(){
// 		this.style.background='white';
// 		clearInterval(jdi);
// 		gjk=false;
// 	}
// 	yuandian[j].onmouseout=function(){
// 		if(!gjk){
// 		this.style.background='black';
// 		yuandian[r].style.background='white';
// 		jdi=setInterval(fn,1000)

// 	}
// 	}
// }

// cha.onmousedown=function(e){
// 	e.preventDefault();
// }
// your.onmousedown=function(e){
// 	e.preventDefault();
// }
// leftz.onmousedown=function(e){
// 	e.preventDefault();
// }

	var yuandian=document.getElementsByClassName('yuandian');
	var bner=document.getElementsByClassName('bner');
	var your=document.getElementById('your');
	var leftz=document.getElementById('leftz');
	var jizhuangxiang=document.getElementById('jizhuangxiang');

	var currenthong=yuandian[0],
		currentbner=bner[0];

	var fn=(function(){
		var i=0,limit=bner.length;
		return function(){
		currentbner.setAttribute('class','bner');
		currenthong.setAttribute('class','yuandian');
		bner[i].setAttribute('class','bner show');
		yuandian[i].setAttribute('class','yuandian y1');
		currenthong=yuandian[i];
		currentbner=bner[i];
		i++;
		if(i==limit){i=0};
		}
	})()
	var timerId=setInterval(fn,1000);

	jizhuangxiang.onmouseover=function(){
		clearInterval(timerId);
	};

	jizhuangxiang.onmouseout=function(){
		if(kaiguan){
			clearInterval(timerId);
			timerId=setInterval(fn,1000);
		}
	}
	var kaiguan=true;
	for(var i=0;i<yuandian.length;i++){
		yuandian[i].index=i;
		yuandian[i].onclick=function(){
			clearInterval(timerId);
			kaiguan=false;
			currentbner.setAttribute('class','bner');
			var index=this.getAttribute('index');
			bner[this.index].setAttribute('class','bner show');
			currentbner=bner[this.index];
			currenthong.setAttribute('class','yuandian');
			this.setAttribute('class','yuandian y1');
			currenthong=this;
		}
	}

	your.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		currentbner.setAttribute('class','bner');
		var your=(currentbner.nextElementSibling)?currentbner.nextElementSibling:bner[0];
		your.setAttribute('class','bner show');
		currentbner=your;

		currenthong.setAttribute('class','yuandian');
		var youry=(currenthong.nextElementSibling)?currenthong.nextElementSibling:yuandian[0];
		youry.setAttribute('class','yuandian y1');
		currenthong=youry;
	}

	leftz.onclick=function(){
		clearInterval(timerId);
		kaiguan=false;
		currentbner.setAttribute('class','bner');
		var leftz=(currentbner.previousElementSibling)?currentbner.previousElementSibling:bner[4];
		leftz.setAttribute('class','bner show');
		currentbner=leftz;
		
		currenthong.setAttribute('class','yuandian');
		var leftzzy=(currenthong.previousElementSibling)?currenthong.previousElementSibling:yuandian[4];
		leftzy.setAttribute('class','yuandian y1');
		currenthong=leftzy;
}


















}