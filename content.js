
function start(){
	chrome.extension.sendMessage({cmd: "start"}, function (response) {
		;
	});
}

$(function(){
	$('#start-run').click(function() {
		start();
	});
});
