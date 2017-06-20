

function open_header_menu() {
	var $menu_header = document.getElementById('menu_header');
	var $pos = -250;
	var $id = setInterval(frame, 2);
	function frame() {
		for (var i = 0; i < 5; i++) {
			if ($pos == 0) {
				clearInterval($id);
			}
			else{
				$pos++;
				$menu_header.style.left = $pos + "px ";
			}
		}
	}
}

function close_header_menu() {
	var $menu_header = document.getElementById('menu_header');
	var $pos = 0;
	var $id = setInterval(frame, 2);
	function frame() {
		for (var i = 0; i < 5; i++) {
			if ($pos == -250) {
				clearInterval($id);
			}
			else{
				$pos--;
				$menu_header.style.left = $pos + "px ";
			}
		}
	}
}

//////////////////////////////////////////////////////////////////////

function second_menu_open() {
	var $second_menu_mini = document.getElementById('second_menu_mini');
	var $pos = -200;
	var $id = setInterval(frame, 2);
	function frame() {
		for (var i = 0; i < 5; i++) {
			if ($pos == 0) {
				clearInterval($id);
			}
			else{
				$pos++;
				$second_menu_mini.style.right = $pos + "px ";
			}
		}
	}
}

function second_menu_close() {
	var $second_menu_mini = document.getElementById('second_menu_mini');
	var $pos = 0;
	var $id = setInterval(frame, 2);
	function frame() {
		for (var i = 0; i < 5; i++) {
			if ($pos == -200) {
				clearInterval($id);
			}
			else{
				$pos--;
				$second_menu_mini.style.right = $pos + "px ";
			}
		}
	}
}


////////////////////////////////////////////////////////////////////


