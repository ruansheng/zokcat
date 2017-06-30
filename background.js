chrome.browserAction.onClicked.addListener(function(activeTab)
{
    //chrome.tabs.update( activeTab.id , { url: 'index.html?url='+activeTab.url } );
    chrome.tabs.create({ url: 'index.html?url='+activeTab.url });
    

});

chrome.runtime.onInstalled.addListener(function (object) 
{
    chrome.tabs.create({ url: 'index.html' });
});


chrome.extension.onMessage.addListener(function (request, sender, sendResponse) {
	if(request.cmd == 'start') {
		// 调接口获取一个商品id
		
		// 打开一个标签页 并且 
		chrome.tabs.create({ url: 'http://v3.bootcss.com/css/#forms' },function(tab) {
			chrome.tabs.executeScript(tab.id, {file: "execute_script.js"});
		});

	}

});
