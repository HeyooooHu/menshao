    //菜单列表  对象数组
    orderList = [{
        foodId: '001',
        foodImg: 'images/diet1.png',
        foodSinglePrice: 12.50,
        foodSales: 30,
        foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;玉米 半根 & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;干香菇 10 - 12 个 & lt;/li & gt; & lt;li & gt;腊肠 2 根 & lt;/li&gt; &lt;li & gt;菜花 1 /3 & lt;/li&gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; & lt;li & gt;虾仁 10 个 & lt;/li&gt; &lt;/ul & gt;',
    }, {
        foodId: '002',
        foodImg: 'images/diet2.png',
        foodSinglePrice: 11.50,
        foodSales: 26,
        foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;玉米 半根 & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;干香菇 10 - 12 个 & lt;/li & gt; & lt;li & gt;腊肠 2 根 & lt;/li&gt; &lt;li & gt;菜花 1 /3 & lt;/li&gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; & lt;li & gt;虾仁 10 个 & lt;/li&gt; &lt;/ul & gt;',
    }, {
        foodId: '003',
        foodImg: 'images/diet3.png',
        foodSinglePrice: 10.50,
        foodSales: 35,
        foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;玉米 半根 & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;干香菇 10 - 12 个 & lt;/li & gt; & lt;li & gt;腊肠 2 根 & lt;/li&gt; &lt;li & gt;菜花 1 /3 & lt;/li&gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; & lt;li & gt;虾仁 10 个 & lt;/li&gt; &lt;/ul & gt;',
    }, {
        foodId: '004',
        foodImg: 'images/diet4.png',
        foodSinglePrice: 10.50,
        foodSales: 40,
        foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;玉米 半根 & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;干香菇 10 - 12 个 & lt;/li & gt; & lt;li & gt;腊肠 2 根 & lt;/li&gt; &lt;li & gt;菜花 1 /3 & lt;/li&gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; & lt;li & gt;虾仁 10 个 & lt;/li&gt; &lt;/ul & gt;',
    }];


    //购物车列表  对象数组
    cartList = [{
        foodId: '003',
        foodImg: 'images/diet3.png',
        foodSinglePrice: 10.50,
        foodNum: 1,
        foodTotal: 10.50
    }, {
        foodId: '002',
        foodImg: 'images/diet2.png',
        foodSinglePrice: 11.50,
        foodNum: 1,
        foodTotal: 11.50
    }];

    //确认订单列表  对象数组
    confirmList = [{
        foodId: '003',
        foodImg: 'images/diet3.png',
        foodSinglePrice: 10.50,
        foodNum: 2,
        foodTotal: 10.50
    }, {
        foodId: '002',
        foodImg: 'images/diet2.png',
        foodSinglePrice: 11.50,
        foodNum: 1,
        foodTotal: 11.50
    }];

    //展示菜单列表
    function showOrderList() {
        for (let i = 0; i < orderList.length; i++) {
            const element = orderList[i];
            var SinglePriceFirst = parseInt(element.foodSinglePrice);
            var SinglePriceNext = (element.foodSinglePrice - SinglePriceFirst) * 100;

            // var $figure = `<figure class="t-c-v" id="test">  </figure>`;
            var $figure = $("<figure></figure>");
            $figure.addClass('t-c-v');
            $figure.attr('foodid', element.foodId);
            var $img = `<img src="${element.foodImg}" alt="每日推荐1" class="w55 h30">`;

            // var $figcaption = `<figcaption style="display: inline-block" class="t-c w25 pr5"> </figcaption>`;
            var $figucaption = $("<figcaption></figucaption>");
            $figucaption.addClass('t-c w25 pr5');
            $figucaption.css('display', 'inline-block');
            var $p1 = `<p> <span class="sp1">${SinglePriceFirst}</span> <span class="sp2">.${SinglePriceNext}元</span> </p>`;
            var $p2 = `<p class="pt2 f28" style="font-family: jianti">月销量：<span class="f28" style="font-family: jianti">${element.foodSales}</span></p>`;

            $figucaption.append($p1);
            $figucaption.append($p2);
            $figure.append($img);
            $figure.append($figucaption);

            $('#main').append($figure);
        }
        $('#cartshu').text(getTotalNum());
    }


    //在main2中显示刚刚点击的食品
    function showClickFood(id) {
        //在菜单中获取到这个食品对象
        var showFood = findFood(id, orderList);

        var SinglePriceFirst = parseInt(showFood.foodSinglePrice);
        var SinglePriceNext = (showFood.foodSinglePrice - SinglePriceFirst) * 100;

        // var $figure = `<figure class="t-c-v" id="test">  </figure>`;
        var $figure = $("<figure></figure>");
        $figure.addClass('t-c-v');
        $figure.attr('foodid', showFood.foodId);
        var $img = `<img src="${showFood.foodImg}" alt="每日推荐1" class="w55 h30">`;

        // var $figcaption = `<figcaption style="display: inline-block" class="t-c w25 pr5"> </figcaption>`;
        var $figucaption = $("<figcaption></figucaption>");
        $figucaption.addClass('t-c w25 pr5');
        $figucaption.css('display', 'inline-block');
        var $p1 = `<p> <span class="sp1">${SinglePriceFirst}</span> <span class="sp2">.${SinglePriceNext}元</span> </p>`;
        var $p2 = `<p class="pt2 f28" style="font-family: jianti">月销量：<span class="f28" style="font-family: jianti">${showFood.foodSales}</span></p>`;

        $figucaption.append($p1);
        $figucaption.append($p2);
        $figure.append($img);
        $figure.append($figucaption);

        $('#main2 figure').replaceWith($figure);
    }


    //展示购物车中的商品
    function showCartList() {
        for (let i = 0; i < cartList.length; i++) {
            const element = cartList[i];
            var $figure = $('<figure></figure>');
            $figure.addClass('t-c-v w75');

            //复选框
            var $p = $('<p></p>');
            $p.addClass('pl3 pr1');
            $p.css('display', 'inline-block');
            // var $input = $('<input>');
            // $input.attr('type', 'checkbox');
            // $input.addClass('ui-checkbox');

            var $input = `<input type="checkbox" class="ui-checkbox" foodid="${element.foodId}">`;
            $p.append($input);
            $figure.append($p);

            //购物车商品显示
            var $img = `<img src="${element.foodImg}" class="w45 h30">`;
            var $figucaption = $('<figucaption></figucaption>');
            $figucaption.css('display', 'inline-block');
            $figucaption.addClass('t-c w25 pr5');

            var $p1 = `<p><span class="sp1">${element.foodSinglePrice}</span>元</p>`;
            var $p2 = `<p class="pt2 f28 pl2 mt2">购买数量</p>`;
            var $p3 = ` <p class="t-c w20 mt3" foodid="${element.foodId}">
                        <span class="fr w6 t-c jia">+</span>
                        <span class="w8 shu">${element.foodNum}</span>
                        <span class="fl w6 t-c jian">-</span>
                    </p>`;
            $figucaption.append($p1);
            $figucaption.append($p2);
            $figucaption.append($p3);

            $figure.append($img);
            $figure.append($figucaption);
            $('#content').append($figure);
        }

    }

    //展示确认订单中的东西
    function showConfirmList() {
        var yajinliang = 0;
        for (let i = 0; i < confirmList.length; i++) {
            const element = confirmList[i];
            var $figure = $('<figure></figure>');
            $figure.addClass('t-c-v');

            var $img = `<img src="${element.foodImg}" class="w55 h30">`;
            var $figucaption = $('<figucaption></figucaption>');
            $figucaption.addClass('t-c w25 pr5');
            $figucaption.css('display', 'inline-block');
            var $p1 = `<p>
                    <span class="sp">${element.foodSinglePrice}</span>元
                </p>`;
            var $p2 = `<p class="pt2 f28" style="font-family: jianti">购买数量：
                    <span class="f28 shu" style="font-family: jianti">${element.foodNum}</span>
                </p>`;
            var $p3 = `<p class="pt2 f28" style="font-family: jianti">总价：
                    <span class="f28 shu" style="font-family: jianti">${element.foodTotal}</span>
                </p>`;
            $figucaption.append($p1);
            $figucaption.append($p2);
            $figucaption.append($p3);

            $figure.append($img);
            $figure.append($figucaption);

            $('#content').append($figure);

            yajinliang += element.foodNum;
        }
        $('#yajinliang').text('*' + yajinliang);
        $('#yajin').text(yajinliang * 10);
    }

    //在菜单、购物车中查找某个食品
    function findFood(id, list) {
        for (let i = 0; i < list.length; i++) {
            const element = list[i];
            if (element.foodId == id) {
                return element;
            }
        }
        return null;
    }

    //新添加食品到购物车中
    function addToCart(id) {
        var oldFood = findFood(id, orderList);
        var newFood = new Object();
        newFood.foodId = id;
        newFood.foodImg = oldFood.foodImg;
        newFood.foodSinglePrice = oldFood.foodSinglePrice;
        newFood.foodNum = 1;
        newFood.foodTotal = oldFood.foodSinglePrice * oldFood.foodNum;

        cartList.push(newFood);
    }

    //更改购物车中已存在的食品的数量和总价
    function updateFoodInCart(id, num) {
        var i = cartList.indexOf(findFood(id, cartList));
        cartList[i].foodNum = num;
        cartList[i].foodTotal = num * cartList[i].foodSinglePrice;
    }

    //删除在购物车中的食品
    function deleteInCart(id) {
        var i = cartList.indexOf(findFood(id, cartList));
        if (i > -1) {
            cartList.splice(i, 1);
        } else {
            alert('删除失败');
        }
    }

    //获取购物车中的物品总数
    function getTotalNum() {
        var totalNum = 0;
        for (let i = 0; i < cartList.length; i++) {
            const element = cartList[i];
            totalNum += element.foodNum;
        }
        if (totalNum == 0) {
            return '';
        } else {
            return totalNum;
        }
    }

    //获取选中的总金额
    function getCheckMoney(ids) {
        var totalMoney = 0;
        for (let i = 0; i < cartList.length; i++) {
            const element = cartList[i];
            for (let j = 0; j < ids.length; j++) {
                const id = ids[j];
                if (element.foodId == id) {
                    totalMoney += element.foodTotal;
                    break;
                }
            }
        }
        return totalMoney;
    }

    //获取购物车中的总金额   不用传id参数
    function getTotalMoney() {
        var totalMoney = 0;
        for (let i = 0; i < cartList.length; i++) {
            const element = cartList[i];
            totalMoney += element.foodTotal;
        }
        return totalMoney;
    }

    //将确认的订蛋添加到确认数组中
    function addToConfirm(id) {
        var oldFood = findFood(id, cartList);
        var newFood = new Object();
        newFood.foodId = id;
        newFood.foodImg = oldFood.foodImg;
        newFood.foodSinglePrice = oldFood.foodSinglePrice;
        newFood.foodNum = oldFood.foodNum;
        newFood.foodTotal = oldFood.foodSinglePrice * oldFood.foodNum;

        confirmList.push(newFood);
    }

    //计算确认订单里面的总金额
    function calculate() {
        var totalMoney = 0;
        for (let i = 0; i < confirmList.length; i++) {
            const element = confirmList[i];
            totalMoney += element.foodTotal;
        }
        return totalMoney;
    }