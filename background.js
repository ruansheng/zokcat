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

		var detail_url = "https://detail.tmall.com/item.htm?id=550773197674&spm=a223v.7835278.t0.2.469d35e6XYWk61&pvid=86d58fdb-e5e6-43b7-b0f3-9b6a633de30e&scm=1007.12144.81309.9011_8949";

		// 打开一个标签页 并且 注入js代码
		chrome.tabs.create({ url: detail_url },function(tab) {
			//chrome.tabs.executeScript(tab.id, {file: "execute_script.js"});
		});

	} else if(request.cmd == 'data') {
		alert(request.data);
	}

});
