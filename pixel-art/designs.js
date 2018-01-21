//Start file when the HTML is ready
$(document).ready(function() { //Open backets for ready function

/*
makeGrid - adds a grid of row divs to the HTML text

input :
	- nRows - number of rows specified for the grid
	- nCols - number of columns specified for the grid
*/
function makeGrid(nRows, nCols) {
	grid = $(".grid");
	for (i=0; i<nRows; i++) {
		htmlRow = "<div class=\"row "+i+"\"></div>\n";
		console.log(htmlRow);
		grid.append(htmlRow);
	};

	row = $(".row")
	for (j=0; j<nCols; j++) {
		htmlCol = "<div class=\"box col "+j+"\"><div class=\"inner\"></div></div>\n";
		console.log(htmlCol);
		row.append(htmlCol);
	};
}

/*
makeTable - adds a grid of tr and td to the HTML file

input :
	- nRows - number of rows specified for the grid
	- nCols - number of columns specified for the grid
*/
function makeTable(nRows, nCols) {
	table = $("#pixel_canvas");
	table.empty()
	for (i=0; i<nRows; i++) {
		htmlRow = "<tr class = \"row\"></tr>\n";
		console.log(htmlRow);
		table.append(htmlRow);
	};

	row = $(".row")
	for (j=0; j<nCols; j++) {
		htmlCell = "<td class = \"cell\"></td>";
		console.log(htmlCell);
		row.append(htmlCell);
	};
}


//Action to be performed when the form is submitted
buildGrid = function() {
	console.log("event working");
	$(".grid").empty();

	nRows = $("#input_height").val();
	nCols = $("#input_width").val();
	makeGrid(nRows, nCols);
	return false;

	//Change colour of a grid square
	//Must be run after the table is defined
	$(".box").on("click", function(evt) {
		console.log("Box clicked")
		$( evt.target ).css( 'background-color', 'yellow' )
	})
}
buildTable = function() {
	console.log("table working");

	nRows = $("#input_height").val();
	nCols = $("#input_width").val();
	makeTable(nRows, nCols);

	var cellColour = "#0000"
	var backGround = "#ffffff"
	var hoverColour = "#0000"
	
	$(".cell").css('background-color', backGround)

	//When the "background colour" is changed, the full grid colour changes
	$("#backGround").on("input", function(evt) {
		colour = $("#backGround").val()
		$(".cell").css( 'background-color', colour)
	})
	$("#backGround").on("input", function(evt) {
		colour = $("#backGround").val()
		$(".cell").css( 'background-color', colour)
	})	

	// Grid display button changes whether gridlines are seen
  	gridLines = true
  	$(".gridButton").on("click", function(evt) {
  		if (gridLines) {
  			$("td, tr").css("border", "none");
  			gridLines=false;
  		} else {
  			$("td, tr").css("border", "1px solid black");
  			gridLines=true;
  		}
  	})


	/* Drawing on the grid */
	//Change colour of a grid square
	//Must be run after the table is defined
	$(".cell").on("click", function(evt) {
		console.log("Box clicked")
		colour = $("#colorPicker").val()
		console.log(colour)
		$( evt.target ).css( 'background-color', colour)
	})
	//Double click on a cell reverts to background colour
	$(".cell").on("dblclick", function(evt) {
		console.log("Box dblclicked")
		colour = $("#backGround").val()
		console.log(colour)
		$( evt.target ).css( 'background-color', colour)
	})
	//Variable which checks if the mouse is clicked
	var MouseDown = false
	$("body").on("mousedown", function(evt) {
		MouseDown = true
	})
	$("body").on("mouseup", function(evt) {
		MouseDown = false
	})
	$(".cell").on("mousemove", function(evt) {
		if (MouseDown) {
			colour = $("#colorPicker").val()
			$( evt.target ).css( 'background-color', colour)
		}
	})
/*	$(".cell").on("mouseover", function(evt) {
		hoverColour = $( evt.target ).getAttribute( 'background-color' );
		console.log(hoverColour);
		$( evt.target ).css( 'background-color', '#009900' );
	})
	$(".cell").on("mouseleave", function(evt) {
		colour = $("#backGround").val()
		$( evt.target ).css( 'background-color', hoverColour )
	})*/

	// Slide in drawing options
	//$("#drawOptions").delay(100).slideDown(800)
	//$("#drawOptions").style.transform = "rotate(7deg)";

	$("#gridOptions").css("display", "none")
	$("#drawOptions").css("display", "flex")
	$("#reset").css("display", "flex")

	//Go back to initial menu on reset click
	$("#resetB").click(function(evt) {
		$("#gridOptions").css("display", "flex")
		$("#drawOptions").css("display", "none")
		$("#reset").css("display", "none")
	})

	//resetMouse = false
	//$("#resetB").mouseover(function {

	//})

	return false;
}


//Test values of page contents by clicking button
Button = $("#my-button")
Button.on("click", function() {
	console.log("It's been clicked!!")
	console.log($("#input_height").val())
	console.log($("#input_width").val())
})

}); //Close brackets for ready() function