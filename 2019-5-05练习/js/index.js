$(function(){
	//动态添加用户名
	$("#link_0 a").html("你好，"+window.localStorage.getItem("userName"));
	//退出事件
	$("#link_4").click(function(){
		window.localStorage.removeItem("userName");
		window.localStorage.removeItem("userPassword");
		setInterval(function(){
			window.location.href = "Login.html";
		},2000)
	})
	//给headNav下的li标签添加点击事件
	$(".headNav li").click(function(){
		//将当前元素的下标值用一个变量来保存
		var _id = $(this).index();
		//给当前点击的li标签添加class名，将旁边相邻的li标签删除class名
		$(this).addClass("current-menu").siblings().removeClass("current-menu");
		//获取id为leftNav的元素，查找它下边的leftNav-item元素，找到与_id相同的元素，让他显示，让周围相邻的隐藏
		$("#leftNav").find(".leftNav-item").eq(_id).css("display","block").siblings(".leftNav-item").css("display","none");
	})
	//给id为link_1的元素添加点击事件
	$("#link_1").click(function(){
//		如果id为leftNav的元素当前是可见的
		if ($("#leftNav").is(":visible")) {
			//隐藏
			$("#leftNav").css("display","none")
			//改变文本样式
			$(this).children("a").text("显示菜单");
		} else{
			//显示
			$("#leftNav").css("display","block")
			//改变文本样式
			$(this).children("a").text("隐藏菜单");
		}
	})
	//设置一个属性
	var d = true;
	//给left下的每一个dt添加点击事件
	$("#leftNav dl dt").click(function(){
		//给当前点击的dt元素相邻的dd元素添加slideToggle方法(滑动效果改变高度)
		$(this).siblings("dd").slideToggle("fast");
		if (d == true) {
			//改变精灵图位置
			$(this).css("background-position","right -40px");
			d = false;
		} else{
			//改变精灵图位置
			$(this).css("background-position","right 12px");
			d = true;
		}
	})
	
	//左侧栏切换
	$("#leftNav dl dd ul li a").click(function(){	//获取所有的左侧栏下的a标签
		var _link = $(this).attr("_link");	//用_link变量保存当前_link值
		$("#main").attr("src",_link);	//设置main的src属性(右侧主体)
		$(this).addClass("current-menuleft").siblings().children().removeClass("current-menuleft");
		$(this).parents("dl").siblings().find("dd ul li a").removeClass("current-menuleft");
	})
	
	
	
})