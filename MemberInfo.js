/**
 * 
 */

function btn_click(str) {
	
	if(str=="update") {
	alert("Move on membership Modify Page.")
		frm2.action="/member/update";
		frm2.method="get";
		//get사용이유: 수정할때, 화면으로 이동 -> 수정		
	}else {
		var msg=confirm("Would you like delete it?");
		
		if(msg) {
			frm2.action="/member/delete";
			frm2.method="post";
			//post사용이유: 삭제할때, 화면이동이 없고 -> 삭제
		}else {
			frm2.action="/member/list"
		}
	}

	
}