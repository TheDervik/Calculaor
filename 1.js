	function insert(num){
		document.form.textview.value=document.form.textview.value+num;
	}
				
	function equal(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=eval(exp);
	}
			}
	function c(){
		document.form.textview.value="";
	}
	function back(){
		var exp=document.form.textview.value
		document.form.textview.value=exp.substring(0,exp.length-1);
	}
	function sin(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.sin(exp);
		}
	}
		function cos(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.cos(exp);
		}
	}
	
		function tan(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.tan(exp);
		}
	}
		function exp(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.exp(exp);
		}
	}
		function sqrt(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.sqrt(exp);
		}
	}
		function log10(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.log10(exp);
		}
	}
		function log(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.log(exp);
		}
	}
		function atan(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.atan(exp);
		}
	}
		function acos(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.acos(exp);
		}
	}
		function asin(){
		var exp=document.form.textview.value;
		if(exp){
		document.form.textview.value=Math.asin(exp);
		}
	}