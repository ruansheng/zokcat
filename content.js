
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
		// 名字
		var name = $('.tb-detail-hd').find('h1').text();

		// 月销量
		var yxl = $('.tm-ind-sellCount').find('.tm-indcon');
		var yxl_count = yxl.find('.tm-count').text();

		// 累计评价
		var ljpj = $('.tm-ind-reviewCount').find('.tm-indcon');
		var ljpj_count = ljpj.find('.tm-count').text();

		// 库存
		var kucun = $('#J_EmStock').text();

		// 价格
		var price = $('#J_StrPriceModBox').find('.tm-price').text();

		// 促销价
		var cx_price = $('#J_PromoPrice').find('.tm-price').text();

		// 多张图片
		var imgs = $('#J_UlThumb').find('img');

		var imgs_urls = new Array();
		for(var i = 0; i < imgs.length; i++) {
			var img_url = imgs.eq(i).attr('src');
			imgs_urls.push(img_url);
		}

		console.log($('#J_DcShopArchive'));

		// 店铺名字
		var shop_name = $('#J_DcShopArchive').find('.shopLink').text();

		// 店铺信誉
		var shop_xinyu = $('#J_DcShopArchive').find('.shop-cert').find('.text').text();

		//组装数据发送到 background
		var data = {
			type:'tmall',
			name:name,
			yxl_count:yxl_count,
			ljpj_count:ljpj_count,
			kucun:kucun,
			price:price,
			cx_price:cx_price,
			imgs_urls:imgs_urls,
			shop_name:shop_name,
			shop_xinyu:shop_xinyu
		};
		console.log(data);
		//sendData(data);
	}

});
