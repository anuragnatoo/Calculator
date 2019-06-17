function insert(arg1){
			document.form.textview.value = document.form.textview.value+arg1;
		}
		function equal(arg1) {
			var exp=document.form.textview.value;
			if (exp) {
				document.form.textview.value=eval(exp);
			}
		}
		function clear1(){
			document.form.textview.value="";
		}
		function backspace(arg1){
			var a=document.form.textview.value;
			document.form.textview.value=a.substring(0,a.length-1);
		}