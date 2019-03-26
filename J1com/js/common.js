/*
	公共函数：经常使用的函数，大家都可以用，自己的库 
	
 */

/*
	getid(id) :通过id查找元素
	形参：
		id: id值
	
*/
function getid(id) {
	return document.getElementById(id);
}

/*
 	返回某个范围内的随机数
 	randomNum(min,max)
 	参数：
 		min ： 最小值
 		max ： 最大值
 
 */

function randomNum(min, max) {
	//Math.random()    0 - 0.999
	//Math.random()*101   0- 100.999
	//parsInt(Math.random()*101)  0-100
	return parseInt(Math.random() * (max - min + 1)) + min;
}

/*
 	随机颜色
 	randomColor(type)
 	参数：
 		type ：
 			16 返回16进制颜色
 			rgb：返回rbg颜色
 		
 */

function randomColor(type) {
	if (type == 16) {
		//当传过来的实参是16，就生成16进制的随机颜色返回
		var str = '0123456789abcdef';
		var color = '#';
		for (var i = 0; i < 6; i++) {
			var num = randomNum(0, 15);
			color += str[num];
		}

		return color; // #162743
	} else if (type == 'rgb') {
		//如果传过来的实参是；rgb，就返回rgb颜色
		var r = randomNum(0, 255);
		var g = randomNum(0, 255);
		var b = randomNum(0, 255);

		return 'rgb(' + r + ',' + g + ',' + b + ')';
	}
}

/*
 pullMenu(box, menu)
 	参数：
 		box ：外层节点
 		memu ：隐藏的菜单节点
 **/

function pullMenu(box, menu) {
	//事件
	box.onmouseover = function () {
		menu.style.display = 'block';
	}

	box.onmouseout = function () {
		menu.style.display = 'none';
	}
}

/*
	生成4位数的随机数：小写大小字母和数字的组合
	randomCode()
 		* 返回值：4位数的随机数
 */

function randomCode() {
	var str = '';
	var str2 = '0123456789zxcvbnmlkjhgfdsaqwertyuiopZXCVBNMLKJHGFDSAQWERTYUIOP';

	//只要可以生成随机下标就可以获取到对应的字符
	for (var i = 0; i < 4; i++) {
		var num = randomNum(0, str2.length - 1);
		str += str2.charAt(num);
	}

	return str; //返回值
}

/*
  过滤敏感词：filterTex(str)
  参数：
   * str 传字符串进来
   * 返回值： 过滤好的字符串

 */
function filterTex(str) {
	//只要是直接可以发布留言不需要审核的内容，都应该过滤敏感词
	var sensitive = ['傻B', '妈蛋', 'bitch', 'fuck', '操', '小学生', '反清复明'];

	for (var i = 0; i < sensitive.length; i++) {
		var reg = new RegExp(sensitive[i], 'gi');
		str = str.replace(reg, '***');
	}

	return str; //处理好的数据
}

/*
 	字符串转成对象：strToObj(str)
 	参数：str 字符串 key0=0&key1=1&key2=2
 	返回值：obj
 	
 		{
			key0 : 0,
			key1 : 1,
			Key2 : 2
		}

 */

function strToObj(str) {
	//key0=0&key1=1&key2=2
	var obj = {};
	var arr1 = str.split('&'); //[key0=0,key1=1,key2=2]
	for (var i = 0; i < arr1.length; i++) {
		var arr2 = arr1[i].split('='); //[key0,0]
		obj[arr2[0]] = arr2[1]; //键值对
	}
	return obj;
}

/*
 	补零函数:toDB(num)
 	参数：num数字
 	返回值：小于10的补零返回

 */
function toDB(num) {
	//补零操作
	if (num < 10) {
		return '0' + num;
	} else {
		return '' + num;
	}
}

/*
 	秒转成时间：xx天xx时xx分xx秒   ：  -
 	setTime(num)
 		* 参数： 秒
 		* 返回值： {}数据返回(灵活一点)
 		
 */

function setTime(num) {
	//num是秒数    98876秒  有多少天： xx天xx时xx分xx秒
	var sec = toDB(num % 60); //06 秒
	var min = toDB(Math.floor(num / 60) % 60); //Math.floor(num / 60) % 60     分
	var hour = toDB(Math.floor(num / 60 / 60) % 24); //时
	var day = toDB(Math.floor(num / 60 / 60 / 24)); //天数

	return {
		secs: sec,
		mins: min,
		hours: hour,
		days: day
	}

}

/*
	对象转成字符串：objToStr(obj)
	参数：obj   
	对象{
			key0: "0",
			key1: "1",
			key2: "2"
		}
	返回值：str
		key0=0&key1=1&key2=2
 */

function objToStr(obj) {
	var html = '';
	for (var key in obj) {
		html += key + '=' + obj[key] + '&';
	}

	html = html.slice(0, -1);
	return html;
}

/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
 */

function firstChild(parent) {
	if (parent.firstElementChild) {
		//高级浏览器
		return parent.firstElementChild;
	} else {
		return parent.firstChild;
	}
}
/*
 	查找首节点：
 	参数： 父节点
 	返回值： 第一个子节点
 
 */

function lastChild(parent) {
	if (parent.lastElementChild) {
		//高级浏览器
		return parent.lastElementChild;
	} else {
		return parent.lastChild;
	}
}

/*
 	事件监听：bind(ele, type, fn)
 	参数一：对象名
 	参数二：事件类型
 	参数三：执行函数
 */

function bind(ele, type, fn) {
	if (ele.addEventListener) {
		//高级浏览器 IE9+
		ele.addEventListener(type, fn, false);
	} else {
		//IE8-
		ele.attachEvent('on' + type, fn);
	}
}

/*
 
 滚轮方向判断：rollerDir(ele,callback)
 	参数：
 		ele 对象名
 		callback 回调函数
 	返回值： 返回true（向上滚了） 或者false(向下滚了)

 */
function rollerDir(ele, callback) {
	var istrue = true;
	//IE 谷歌
	ele.onmousewheel = fn;

	//火狐
	if (ele.addEventListener) {
		ele.addEventListener('DOMMouseScroll', fn, false);
	}

	function fn(ev) {
		//判断滚轮方向
		var ev = ev || event;
		//true:向上滚了，false：向下滚了

		if (ev.wheelDelta) {
			//ie 谷歌  规定：大于0 上滚，小于0下滚
			istrue = ev.wheelDelta > 0 ? true : false;
		} else {
			//火狐
			istrue = ev.detail < 0 ? true : false;
		}

		callback(istrue); //实参
	}

}

/*
 	表单验证的方法： 调用里面的子功能  (json对象里面有很多子功能)
 	var checkReg = {
 		tel : function() {}
 	}
 	
 	调用方法：
 	checkReg.tel();
 	
*/

//正则
var checkReg = {
	tel: function (str) {
		var reg = /^1[3-9]\d{9}$/;
		return reg.test(str);
	},
	email: function (str) {
		var reg = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
		return reg.test(str);
	},
	idcard: function (str) {
		var reg = /^\d{15}|\d{17}[\dXx]$/;
		return reg.test(str);
	},
	userName: function (str) {
		var reg = /^\w{6,20}$/;
		return reg.test(str);
	},
	nickName: function (str) {
		var reg = /^[a-zA-Z]{6,16}$/;
		return reg.test(str);
	},
	passW: function (str) {
		var reg = /^.{6,20}$/;
		return reg.test(str)
	},
	apassW: function (str1, str2) {
		return str1 === str2;
	}

}

/*
 	cookie的相关操作：var cookie = {}
	子功能：
		存 ：set
		取：get
		删：remove
		
 */

var cookie = {
	set: function (name, value, prop) {
		//name和value是必写参数。prop是json格式的数据
		var str = name + '=' + value; //必写的

		//prop
		//expires:设置失效时间
		if (prop.expires) {
			str += ';expires=' + prop.expires.toUTCString(); //把时间转成字符串 toUTCString
		}
		//prop.path :设置路径
		if (prop.path) {
			str += ';path=' + prop.path;
		}
		//设置访问权限domain
		if (prop.domain) {
			str += ';domain=' + prop.domain;
		}

		//设置：存
		document.cookie = str;

	},
	get: function (key) {
		//获取
		var str = document.cookie; //name=jingjing; psw=123456
		var arr = str.split('; '); //[name=jingjing , psw=123456]
		for (var i = 0; i < arr.length; i++) {
			var arr2 = arr[i].split('='); //[name,jingjing] [psw,123456]
			if (key == arr2[0]) {
				return arr2[1]; //通过键名取键值
			}
		}
	},
	remove: function (key) {
		//cookie:设置时间失效，设置时间为过去的某个时间
		var now = new Date();
		now.setDate(now.getDate() - 1); //设置成昨天
		cookie.set(key, '', {
			expires: now
		});
	}
}

/*
 	设置和获取行内样式：css(节点,'width','40px') 设置样式  css(节点，'color') 获取样式
 	两个个参数：获取行内样式
 	三个参数：设置样式
*/

function css() { //设置样式：设置行内的样式
	if (arguments.length == 2) {
		//获取样式
		return arguments[0].style[arguments[1]];
	} else if (arguments.length == 3) {
		arguments[0].style[arguments[1]] = arguments[2];
	}
}

/*
	深度拷贝：deepClone() 很重要
	参数：对象（数组或json对象）
	返回值：新的对象（拷贝）
 */
function deepClone(obj) {
	var str = JSON.stringify(obj); //把对象转成字符串
	return JSON.parse(str); //把字符串转成对象
}

/*
 	getstyle(obj,name)
 	参数： 
 	obj:对象名
 	name ：要获取的样式属性名
 	返回：样式值
*/

function getStyle(obj, name) { //用来获取样式
	if (getComputedStyle(obj, false)) {
		//主流  IE9+
		return getComputedStyle(obj, false)[name];
	} else {
		//IE8-
		return obj.currentStyle(name);
	}
}

/*
	运动框架封装：startMove()过渡    jq animate()
	最终版：多对象，多属性，链式运动框架(运动队列)
	参数一：对象名
	参数二：属性，目标值  键名：属性名，键值：目标值    {'width':200,'heigth':400}  实现：宽度和高度一起改变，宽度变成200，高度变成400
	参数三：回调函数(可选参数)
 */

function startMove(obj, json, fnend) {

	clearInterval(obj.timer); //防止定时器叠加
	obj.timer = setInterval(function () {

		var istrue = true;

		//1.获取属性名，获取键名：属性名->初始值
		for (var key in json) {
			//			console.log(key); //width heigth opacity
			var cur = 0; //存初始值

			if (key == 'opacity') { //初始值
				cur = getStyle(obj, key) * 100; //透明度
			} else {
				cur = parseInt(getStyle(obj, key)); //width heigth borderwidth px为单位的

			}

			//2.根据初始值和目标值，进行判断确定speed方向，变形：缓冲运动
			//距离越大，速度越大,下面的公式具备方向
			var speed = (json[key] - cur) / 6;
			speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed); //不要小数部分，没有这句话或晃动

			if (cur != json[key]) { //width 200 heigth 400
				istrue = false; //如果没有达到目标值，开关false
			} else {
				istrue = true; //true true
			}

			//3、运动
			if (key == 'opacity') {
				obj.style.opacity = (cur + speed) / 100;
				obj.style.filter = 'alpha(opacity:' + (cur + speed) + ')';
			} else {
				obj.style[key] = cur + speed + 'px'; //针对普通属性 left  top height 
			}

		}

		//4.回调函数:准备一个开关,确保以上json所有的属性都已经达到目标值,才能调用这个回调函数
		if (istrue) { //如果为true,证明以上属性都达到目标值了
			clearInterval(obj.timer);
			if (fnend) {
				fnend();
			}
		}

	}, 30); //obj.timer 每个对象都有自己定时器

}