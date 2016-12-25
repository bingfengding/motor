function setRem(){
	document.documentElement.style.fontSize = innerWidth/20 + "px";
}
setRem();
onresize = setRem;
function classOne(option) {
	return document.querySelector(option);
}
function classAll(option) {
	return document.querySelectorAll(option);
}
//时间
function startTime() {
	var today=new Date(),
		h=today.getHours(),
		m=today.getMinutes();
	m=checkTime(m);
	classOne(".h_date").innerHTML=h+":"+m;
}
function checkTime(i) {
	if(i<10){
		i += "0";
	}
	return i;
}
t=setInterval(function () {
	startTime()
},500);
//主页界面
var JOSNObject1 = {
	"sex":"男",
	"age":"80后",
	"money":"29万-36万",
	"buyTime":"随便看看",
	"occupation":"喵呜",
	"address":{"Province":"浙江","city":"杭州","locality":"滨江"},
	"nickname":"小羊咩咩",
	"head":"./image/head.png"
};
(function () {
	classOne(".money .sign-s").innerHTML = JOSNObject1.money;
	classOne(".sex .sign-s").innerHTML = JOSNObject1.sex;
	classOne(".age .sign-s").innerHTML = JOSNObject1.age;
	classOne(".buyTime .sign-s").innerHTML = JOSNObject1.buyTime;
	classOne(".occupation .sign-s").innerHTML = JOSNObject1.occupation;
	classOne(".add .sign-s").innerHTML = JOSNObject1.address.Province+"&nbsp"+JOSNObject1.address.city+"&nbsp"+JOSNObject1.address.locality;
	classOne(".head .head-img p").innerHTML = JOSNObject1.nickname;
	var oHeadFile = classOne(".head .head-file"),
		oIpFile = classOne(".head .head-file input"),
		favA1 = classOne(".favourite .fav-head .fav-a1");
	//console.log(oHeadFile.getElementsByTagName("input")[0]);
	oHeadFile.style.backgroundImage = "url("+JOSNObject1.head + ")";
	if(typeof FileReader === "undefined"){
		alert("抱歉，你的浏览器不支持 FileReader");
		oIpFile.setAttribute("disable","disable");
	}else {
		oIpFile.addEventListener("change",readFile,false);
	}
	function readFile() {
		console.log(this);
		var file = this.files[0];
		var reader = new FileReader();
		if(!/jpe?g|png|bmp|gif/.test(file.type)){
			alert("上传图片只支持JPEG,PNG,BMP,GIF格式！");
			return false;
		}
		reader.readAsDataURL(file);
		reader.onload = function () {
			JOSNObject1.head = this.result;
			oHeadFile.style.backgroundImage = "url("+JOSNObject1.head + ")";
			favA1.style.backgroundImage = "url("+JOSNObject1.head + ")";
		}
	}

})();
//考虑购买车型
var JOSNObject3={
	"data":[
	{"name":"轿车(三厢)","src":"./image/models01.png"},
	{"name":"轿车(二厢)","src":"./image/models02.png"},
	{"name":"跑车","src":"./image/models03.png"},
	{"name":"自行车","src":"./image/models04.png"},
	{"name":"三轮车","src":"./image/models05.png"},
	{"name":"11路公交车","src":"./image/models06.png"}
		]
};
(function () {
	classAll(".models .pre-nav p")[0].innerHTML = JOSNObject1.nickname;
	classAll(".models .pre-nav p")[1].innerHTML = "更偏向购买的车型是"+JOSNObject3.data[0].name+","+JOSNObject3.data[1].name+","+JOSNObject3.data[2].name;
	classOne(".models .place-num2 .place-name").innerHTML = JOSNObject3.data[1].name;
	classOne(".models .place-num1 .place-name").innerHTML = JOSNObject3.data[0].name;
	classOne(".models .place-num3 .place-name").innerHTML = JOSNObject3.data[2].name;
	classOne(".models .place-num2 .place-car").style.backgroundImage = "url("+JOSNObject3.data[1].src+")";
	classOne(".models .place-num1 .place-car").style.backgroundImage = "url("+JOSNObject3.data[0].src+")";
	classOne(".models .place-num3 .place-car").style.backgroundImage = "url("+JOSNObject3.data[2].src+")";
})();

//偏好
var JOSNObject2 = {
	"data": [{"src":"./image/pre-icon01.png","name":"林肯"},{"src":"./image/pre-icon02.png","name":"别克"},{"src":"./image/pre-icon03.png","name":"凯迪拉克"},{"src":"./image/pre-icon04.png","name":"大众"},{"src":"./image/pre-icon05.png","name":"丰田"},{"src":"./image/pre-icon06.png","name":"本田"},{"src":"./image/pre-icon07.png","name":"保时捷"},{"src":"./image/pre-icon08.png","name":"法拉利"}]
};
(function () {
	classAll(".preference .pre-nav p")[0].innerHTML = JOSNObject1.nickname;
	classAll(".preference .pre-nav p")[1].innerHTML = "更偏向"+JOSNObject2.data[0].name+","+JOSNObject2.data[1].name+","+JOSNObject2.data[2].name+"等品牌";
})();
(function () {
	var len = classAll(".pre-icon").length;
	for(var i=0;i<len;i++){
		classAll(".pre-icon")[i].style.backgroundImage = "url("+JOSNObject2.data[i].src+")";
	}
})();
//去掉重复的
var iDivWidth = 80/320*innerWidth,
	iDivHeight = 80/320*innerWidth,
	iMaxX = 230/320*innerWidth,
	iMaxY = 230/320*innerWidth;
	oPosition ={},
	oPosition.x = 0,
	oPosition.y = 0,
	aX = [],
    aY = [],
	num = 0;
function removal(obj) {
	var oTest = false;
	for(var i=0;i<aX.length;i++){
		if(((obj.x >(aX[i]-iDivWidth))&&(obj.x < (aX[i]+iDivWidth)))&&((obj.y > (aY[i]-iDivHeight))&&(obj.y < (aY[i]+iDivHeight)))){
			oTest = true;
			break;
		}
	}
	if(!oTest){
		aX[aX.length] = obj.x;
		aY[aY.length] = obj.y;
	}
	return oTest;
}
for(var i = 0;i <classAll(".pre-icon").length;i++){
	do
	{
		oPosition.x = Math.ceil(Math.random()*iMaxX);
		oPosition.y = Math.ceil(Math.random()*iMaxY);
		num++;
		if(num >1000) break;

	}
	while(removal(oPosition));
		classAll(".pre-icon")[i].style.left = oPosition.x  + "px";
		classAll(".pre-icon")[i].style.top = oPosition.y  + "px";
	if(num>1000){
		classAll(".pre-icon")[i].style.display = "none";
	}
}
//机动派推荐

var JOSNObject4 = {
	"data": [
		{"src":"./image/recommend01.png","name":"华晨宝马 3系","href":"https://www.baidu.com/"},
		{"src":"./image/recommend02.png","name":"上汽大众 雷昂","href":"http://www.qq.com/"},
		{"src":"./image/recommend03.png","name":"上汽通用 凯迪拉克","href":"https://www.tmall.com/"},
		{"src":"./image/recommend01.png","name":"华晨宝马 3系","href":"http://www.163.com/"},
		{"src":"./image/recommend02.png","name":"上汽大众 雷昂","href":"http://lol.qq.com/"},
		{"src":"./image/recommend03.png","name":"上汽通用 凯迪拉克","href":"https://www.baidu.com/"},
		{"src":"./image/recommend01.png","name":"华晨宝马 3系","href":"https://www.baidu.com/"},
		{"src":"./image/recommend02.png","name":"上汽大众 雷昂","href":"https://www.baidu.com/"}]
};
(function () {


	var oLi =  classAll(".recommend .list li"),
		oUl = classOne(".recommend .list ul"),
		oA = classAll(".recommend .list li a"),
		oP = classAll(".recommend .list li p"),
		startX;
	for(var i = 0;i <oLi.length;i++) {
		oA[i].style.backgroundImage = "url(" + JOSNObject4.data[i].src + ")";
		oA[i].href = JOSNObject4.data[i].href;
		oP[i].innerHTML = JOSNObject4.data[i].name;
	}
	oUl.addEventListener("touchstart", function(e){
        startX = e.touches[0].pageX -oUl.offsetLeft;
    });
	oUl.addEventListener("touchmove",function (e) {
		oUl.style.left = e.touches[0].pageX - startX + "px";
    });
	oUl.addEventListener("touchend",function (e) {
		var oLeft = parseInt(oUl.style.left),
			computedStyle = document.defaultView.getComputedStyle(oUl, null),
			oRight = parseInt(computedStyle.width),
			mRight = parseInt(document.documentElement.clientWidth);
		if(oLeft>0){
            oUl.style.left = 0;
		}else if(oLeft< -(oRight-mRight) ){
            oUl.style.left = -(oRight-mRight)+ "px";
		}
    });
})();
//Favourite
var JOSNObject5 = {
    "data": [
        {"src":"./image/favourite01.png","name":"美国","href":"https://www.baidu.com/"},
        {"src":"./image/favourite02.png","name":"德国","href":"http://www.qq.com/"}
        ]
};
(function () {
    function computedStyle (a) {
        return document.defaultView.getComputedStyle(a, null)
    }
    function oPosition(id,r,rd) {
		return [((parseInt(computedStyle(favHead).width) - parseInt(computedStyle(id).width))/2 + Math.sin(rd)* (parseInt(computedStyle(r).width))/2)+"px",((parseInt(computedStyle(favHead).width) - parseInt(computedStyle(id).width))/2 - Math.cos(rd) * parseInt(computedStyle(r).width)/2) + "px"]
    }
    var favA1 = classOne(".favourite .fav-head .fav-a1"),
        favA2 = classOne(".favourite .fav-head .fav-a2"),
        favInside = classOne(".favourite .fav-inside"),
        favMin = classOne(".favourite .fav-mid"),
        favOut = classOne(".favourite .fav-out"),
        favHead = classOne(".favourite .fav-head"),
		oRd = 2*Math.PI / 360*(360*Math.random());
    	oRd1 = 2*Math.PI / 360*(360*Math.random());
        favA3 = classOne(".favourite .fav-head .fav-a3");

	classAll(".favourite .pre-nav p")[0].innerHTML = JOSNObject1.nickname;
    classAll(".favourite .pre-nav p")[1].innerHTML = "更偏向"+JOSNObject5.data[0].name+","+JOSNObject5.data[1].name;
    favA1.style.backgroundImage = "url(" + JOSNObject1.head + ")";
    favA2.style.backgroundImage = "url(" + JOSNObject5.data[0].src + ")";
    favA2.style.left = oPosition(favA2,favInside,oRd)[0];
    favA2.style.top = oPosition(favA2,favInside,oRd)[1];
    favA3.style.backgroundImage = "url(" + JOSNObject5.data[1].src + ")";
    favA3.style.left =oPosition(favA3,favMin,oRd1)[0];
    favA3.style.top = oPosition(favA3,favMin,oRd1)[1];
})();
var JOSNObject6 = {
	"data": [
		{"num":65,"name":"用车成本","type":1},
		{"num":100,"name":"性能","type":2},
		{"num":100,"name":"驾驶","type":3},
		{"num":60,"name":"乘坐","type":4},
		{"num":50,"name":"通过性","type":5},
		{"num":30,"name":"定价","type":6},
		{"num":40,"name":"配置","type":7},
		{"num":100,"name":"安全","type":8}

	]
};
(function () {
	classAll(".eightImg .pre-nav p")[0].innerHTML = JOSNObject1.nickname;
	classAll(".eightImg .pre-nav p")[1].innerHTML = "更偏向"+JOSNObject6.data[0].name+","+JOSNObject6.data[1].name;
	var oLi = classAll(".eightImg ul li");
	for (var i = 0; i<oLi.length;i++){
		oLi[i].getElementsByTagName("p")[0].innerHTML = JOSNObject6.data[i].name;

	}
})();