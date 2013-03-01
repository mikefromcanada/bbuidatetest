//Global vars
//file loaded with file picker
var fileload;
var coverphoto;
var coverlabel;

function dosomething(){

}

function updateCover() {

	//reset cover if necessary
	//blackberry.ui.cover.resetCover();
	
	//set cover photo
	//cover.photo can be any variable with style "file://..."
	blackberry.ui.cover.setContent(blackberry.ui.cover.TYPE_IMAGE, {
		path: coverphoto
	});

	// set cover label
	// cover.label can be any string
	blackberry.ui.cover.labels.push({
		label: coverlabel,
		size: 10,
		wrap: false
	});

	// update the cover
	blackberry.ui.cover.updateCover();

}


// load filepicker card
function openFilepicker() {

	// filepicker options
	var details = {
		mode: blackberry.invoke.card.FILEPICKER_MODE_PICKER,
		viewMode: blackberry.invoke.card.FILEPICKER_VIEWER_MODE_GRID,
		sortBy: blackberry.invoke.card.FILEPICKER_SORT_BY_NAME,
		sortOrder: blackberry.invoke.card.FILEPICKER_SORT_ORDER_DESCENDING
	};

	//fileload will store path to file loaded
	blackberry.invoke.card.invokeFilePicker(details, function(path) {
		fileload = ('file://' + path);
	},

	// cancel callback
	function(reason) {
		alert("cancelled " + reason);
	},

	// error callback
	function(error) {
		if(error) {
			alert("invoke error " + error);
		} else {
			console.log("invoke success ");
		}
	});
}