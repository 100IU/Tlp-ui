(async function () {
  const _fengniao_getGoods_list = window._fengniao_getGoods_list;

  let str = `10011163,10001500,10012965,10011131,10011151`;




  const res = await _fengniao_getGoods_list({
    goods_id: str.replace(/\s/g, ''),
    disable_goods_number: 1
  });

  
  

  const goods_list = res.result
  console.log(goods_list);
let container = []
container = document.querySelectorAll('.recommen_swiper .swiper-slide')
console.log(container)

container.forEach((item,index)=>{
    let goodsItem = goods_list[index];
     console.log(item,'item')
     
      
      let a = item.querySelector('a')
      a.setAttribute('href', goodsItem.goods_url)
      let img = item.querySelector('img');
      img.src = goodsItem.goods_thumb
      let slide_name = item.querySelector(".slide_name");
     
      let slide_price = item.querySelector(".slide_price");
     
      // slide_name.innerHTML = goodsItem.goods_title;
      // slide_price.innerHTML = goodsItem.shop_price_converted;
      // if (goodsItem.shop_price != goodsItem.old_shop_price) {
      //   slide_price.innerHTML =
      //   slide_price.innerHTML +
      //     `<span class='hx-price'>${goods_list[index].old_shop_price_converted}</span>`;
      // }
    });
     

  // let pro_card = []
  
  // pro_card = window.innerWidth < 768 ? document.querySelectorAll(".mobile-tab-wrap .pro-card") : document.querySelectorAll(".pc-tab-wrap .pro-card");

  // // console.log('goods_list', goods_list)
  // // console.log('pro_card', pro_card)
  // pro_card.forEach((item, index) => {
  //   // console.log('item', item)
  //   let goodsItem = goods_list[index];
  //   // console.log('item', item)
  //   // let discount_dom = document.createElement('div');
  //   // discount_dom.innerHTML = `<div class='discount-text'>UP TO 35% OFF WITH CODE LOVEV</div>`
  //   // item.append(discount_dom)
  //   item.setAttribute('href', goodsItem.goods_url)
  //   let img = item.querySelector('img');
  //   img.src = goodsItem.goods_thumb
  //   let pro_name = item.querySelector(".pro-name");
  //   // console.log('pro_name', pro_name)
  //   let pro_price = item.querySelector(".pro-price");
  //   // console.log('pro_name', pro_name, goods_list[index])
  //   pro_name.innerHTML = goodsItem.goods_title;
  //   pro_price.innerHTML = goodsItem.shop_price_converted;
  //   if (goodsItem.shop_price != goodsItem.old_shop_price) {
  //     pro_price.innerHTML =
  //       pro_price.innerHTML +
  //       `<span class='hx-price'>${goods_list[index].old_shop_price_converted}</span>`;
  //   }
  // });

})()
