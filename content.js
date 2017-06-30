
function start(){
	chrome.extension.sendMessage({cmd: "start"}, function (response) {

	});
}

function sendData(data){
	chrome.extension.sendMessage({cmd: "data", data: data}, function (response) {

	});
}

$(function(){
	$('#start-run').click(function() {
		start();
	});

	if(window.location.host == 'detail.tmall.com') {
		// 月销量
		var yxl = $('.tm-ind-sellCount').find('.tm-indcon');
		var yxl_count = yxl.find('.tm-count').text();

		// 累计评价
		var ljpj = $('.tm-ind-reviewCount').find('.tm-indcon');
		var ljpj_count = ljpj.find('.tm-count').text();

		// 送天猫积分
		var stmjf = $('.tm-ind-emPointCount').find('.tm-indcon');
		var stmjf_count = stmjf.find('.tm-count').text();

		// 库存
		var kucun = $('#J_EmStock').text();

		// 价格
		var price = $('#J_StrPriceModBox').find('.tm-price').text();

		// 促销价
		var cx_price = $('#J_PromoPrice').find('.tm-price').text();

		//组装数据发送到 background
		var data = {
			yxl_count:yxl_count,
			ljpj_count:ljpj_count,
			stmjf_count:stmjf_count,
			kucun:kucun,
			price:price,
			cx_price:cx_price
		};
		sendData(data);
	}

});
