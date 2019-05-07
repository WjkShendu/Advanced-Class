$(function(){
	$("input[name='loginbtn']").click(function(event){
		var $name = $("input[name='username']");
		var $password = $("input[name='password']");
		var $verify = $("input[name='veri']");
		var $text = $("#text");
		var _name = $.trim($name.val());
		var _password = $.trim($password.val());
		var _verify = $.trim($verify.val());
		window.localStorage.setItem("userName",_name);
		window.localStorage.setItem("userPassword",_password);
		if ("" == _name) {
			$text.text("请输入用户名！");
			$password.focus();
			return;
		}
		if ("" == _password) {
			$text.text("请输入密码！");
			$password.focus();
			return;
		}
		if ("" == _verify) {
			$text.text("请输入验证码！");
			$password.focus();
			return;
		}
		$text.text("登陆成功，请稍后!");
		if ($text.text() == "登陆成功，请稍后!") {
			setInterval(function(){
				window.location.href = "index.html";
			},3000)
		}
	})
})