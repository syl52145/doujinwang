
function change() {
	var pic = document.getElementById("preview"),
	    file = document.getElementById("f");
	var ext=file.value.substring(file.value.lastIndexOf(".")+1).toLowerCase();
     // gif��IE�������ʱ�޷���ʾ
     if(ext!='png'&&ext!='jpg'&&ext!='jpeg'&&ext!='gif'){
         alert("ͼƬ�ĸ�ʽ����Ϊpng����jpg����jpeg��ʽ����gif��ʽ��"); 
		 return;
     }
	 var isIE = navigator.userAgent.match(/MSIE/)!= null,
		 isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;

	 if(isIE) {
		file.select();
		var reallocalpath = document.selection.createRange().text;

		// IE6���������img��srcΪ����·������ֱ����ʾͼƬ
         if (isIE6) {
			pic.src = reallocalpath;
		 }else {
			// ��IE6�汾��IE���ڰ�ȫ����ֱ������img��src�޷���ʾ����ͼƬ�����ǿ���ͨ���˾���ʵ��
             pic.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
             // ����img��srcΪbase64�����͸��ͼƬ ȡ����ʾ�����Ĭ��ͼƬ
             pic.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
		 }
	 }else {
		html5Reader(file);
	 }
	  function html5Reader(file){
	     var file = file.files[0];
	     var reader = new FileReader();
	     reader.readAsDataURL(file);
	     reader.onload = function(e){
	         var pic = document.getElementById("preview");
	         pic.src=this.result;
	     }
	 }
}


 function changee() {
 	var picc = document.getElementById("previeww"),
 	    filee= document.getElementById("e");
 	var ext=filee.value.substring(filee.value.lastIndexOf(".")+1).toLowerCase();
      // gif��IE�������ʱ�޷���ʾ
      if(ext!='png'&&ext!='jpg'&&ext!='jpeg'&&ext!='gif'){
          alert("ͼƬ�ĸ�ʽ����Ϊpng����jpg����jpeg��ʽ����gif��ʽ��"); 
 		 return;
      }
 	 var isIE = navigator.userAgent.match(/MSIE/)!= null,
 		 isIE6 = navigator.userAgent.match(/MSIE 6.0/)!= null;
 
 	 if(isIE) {
 		filee.select();
 		var reallocalpath = document.selection.createRange().text;
 
 		// IE6���������img��srcΪ����·������ֱ����ʾͼƬ
          if (isIE6) {
 			picc.src = reallocalpath;
 		 }else {
 			// ��IE6�汾��IE���ڰ�ȫ����ֱ������img��src�޷���ʾ����ͼƬ�����ǿ���ͨ���˾���ʵ��
              picc.style.filter = "progid:DXImageTransform.Microsoft.AlphaImageLoader(sizingMethod='image',src=\"" + reallocalpath + "\")";
              // ����img��srcΪbase64�����͸��ͼƬ ȡ����ʾ�����Ĭ��ͼƬ
              picc.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
 		 }
 	 }else {
 		html5Reader(filee);
 	 }
	  function html5Reader(file){
	     var file = file.files[0];
	     var reader = new FileReader();
	     reader.readAsDataURL(file);
	     reader.onload = function(e){
	         var pic = document.getElementById("previeww");
	         pic.src=this.result;
	     }
	 }
 }
 
 