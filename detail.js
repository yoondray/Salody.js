/**
 * 
 */

function btn_click(str) {
	//alert(str)
	//str이 "update"라면 수정 action
	if(str=="update"){
		frm1.method="get";
		frm1.action="/board/update";
		
	//str이 "delete"라면 삭제 action		
	}else {
		var msg=confirm("삭제하시겠습니까?");
		//alert("삭제" + msg)
		//msg의 값을 찾는 것
		if(msg){
			frm1.action="/board/delete";
			frm1.method="post";
		}else {
			frm1.action="/board/list";
		}

		
	}
}