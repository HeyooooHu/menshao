var cookie = {
    set: function(key, val, time) { //设置cookie方法
        var date = new Date(); //获取当前时间
        var expiresDays = time; //将date设置为n天以后的时间
        date.setTime(date.getTime() + expiresDays * 24 * 3600 * 1000); //格式化为cookie识别的时间
        document.cookie = key + "=" + val + ";expires=" + date.toGMTString(); //设置cookie
    },
    get: function(key) { //获取cookie方法
        /*获取cookie参数*/
        var getCookie = document.cookie.replace(/[ ]/g, ""); //获取cookie，并且将获得的cookie格式化，去掉空格字符
        var arrCookie = getCookie.split(";") //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
        var tips; //声明变量tips
        for (var i = 0; i < arrCookie.length; i++) { //使用for循环查找cookie中的tips变量
            var arr = arrCookie[i].split("="); //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
            if (key == arr[0]) { //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
                tips = arr[1]; //将cookie的值赋给变量tips
                break; //终止for循环遍历
            }
        }
        return tips;
    },
    delete: function(key) { //删除cookie方法
        var date = new Date(); //获取当前时间
        date.setTime(date.getTime() - 10000); //将date设置为过去的时间
        document.cookie = key + "=v; expires =" + date.toGMTString(); //设置cookie
    }
}


//菜单列表  对象数组
orderList = [{
    foodId: '009',
    foodImg: 'images/Monday.png',
    foodSinglePrice: 11.50,
    foodSales: 13,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li &gt;大米 半杯 &lt;/li &gt;& lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】  &lt;li & gt;鸡块 400g & lt;/li & gt; &lt;li & gt;辣椒 1 - 3 个 & lt;/li & gt;  &lt;/ul & gt;',
}, {
    foodId: '010',
    foodImg: 'images/Tuesday.png',
    foodSinglePrice: 12.50,
    foodSales: 23,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt;  & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;排骨 300g & lt;/li & gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; &lt;li & gt;甜椒 500g & lt;/li & gt; & lt;li & gt;葱花 1 把 & lt;/li&gt; &lt;/ul & gt;',
}, {
    foodId: '011',
    foodImg: 'images/Wednesday.png',
    foodSinglePrice: 13.50,
    foodSales: 33,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;玉米 半根 & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;干香菇 10 - 12 个 & lt;/li & gt; & lt;li & gt;腊肠 2 根 & lt;/li&gt; &lt;li & gt;菜花 1 /3 & lt;/li&gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; & lt;li & gt;虾仁 10 个 & lt;/li&gt; &lt;/ul & gt;',
}, {
    foodId: '012',
    foodImg: 'images/Thursday.png',
    foodSinglePrice: 12.50,
    foodSales: 21,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;红薯 500g & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;银耳 5 - 7 个 & lt;/li & gt; & lt;li & gt;枸杞 50g & lt;/li&gt; &lt;li & gt;莲子 100g & lt;/li&gt;  &lt;/ul & gt;',
}, {
    foodId: '013',
    foodImg: 'images/Friday.png',
    foodSinglePrice: 13.50,
    foodSales: 18,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt;  & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;排骨 300g & lt;/li & gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; &lt;li & gt;甜椒 500g & lt;/li & gt; & lt;li & gt;葱花 1 把 & lt;/li&gt; &lt;/ul & gt;',
}, {
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
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt;  & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;排骨 300g & lt;/li & gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; &lt;li & gt;甜椒 500g & lt;/li & gt; & lt;li & gt;葱花 1 把 & lt;/li&gt; &lt;/ul & gt;',
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
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt;& lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】  &lt;li & gt;鸡块 400g & lt;/li & gt; &lt;li & gt;辣椒 1 - 3 个 & lt;/li & gt;  &lt;/ul & gt;',
}, {
    foodId: '005',
    foodImg: 'images/diet5.png',
    foodSinglePrice: 12.50,
    foodSales: 23,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;玉米 半根 & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;干香菇 10 - 12 个 & lt;/li & gt; & lt;li & gt;腊肠 2 根 & lt;/li&gt; &lt;li & gt;菜花 1 /3 & lt;/li&gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; & lt;li & gt;虾仁 10 个 & lt;/li&gt; &lt;/ul & gt;',
}, {
    foodId: '006',
    foodImg: 'images/diet6.png',
    foodSinglePrice: 12.50,
    foodSales: 33,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt;  & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;排骨 300g & lt;/li & gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; &lt;li & gt;甜椒 500g & lt;/li & gt; & lt;li & gt;葱花 1 把 & lt;/li&gt; &lt;/ul & gt;',
}, {
    foodId: '007',
    foodImg: 'images/diet7.png',
    foodSinglePrice: 10.50,
    foodSales: 23,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt; &lt;li & gt;玉米 半根 & lt;/li & gt; & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;干香菇 10 - 12 个 & lt;/li & gt; & lt;li & gt;腊肠 2 根 & lt;/li&gt; &lt;li & gt;菜花 1 /3 & lt;/li&gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; & lt;li & gt;虾仁 10 个 & lt;/li&gt; &lt;/ul & gt;',
}, {
    foodId: '008',
    foodImg: 'images/diet8.png',
    foodSinglePrice: 14.50,
    foodSales: 13,
    foodRecipe: '&lt;ul class="w75 t-c  mt5 mb5"&gt;【主食】 &lt; li & gt;大米 半杯 & lt;/li &gt;  & lt;/ul &gt; &lt;ul class = "w75 t-c mt5 mb5" & gt;【蒸菜】 &lt;li & gt;排骨 300g & lt;/li & gt; &lt;li & gt;鸡蛋 2 枚 & lt;/li & gt; &lt;li & gt;甜椒 500g & lt;/li & gt; & lt;li & gt;葱花 1 把 & lt;/li&gt; &lt;/ul & gt;',
}, ];


//自定义食材
orderList2 = [{
    foodId: '108',
    foodImg: 'images/d108.jpg',
    foodSinglePrice: 0.80,
    foodUnit: "500g",
    foodRecipe: '茄子的营养丰富，含有蛋白质、脂肪、碳水化合物、维生素以及钙、磷、铁等多种营养成分。茄子中维生素P的含量很高，每100克中即含维生素P750毫克。能增强人体细胞间的黏着力，增强毛细血管的弹性，减低脆性及渗透性，防止微血管破裂出血。茄子还含磷、钙、钾等微量元素和胆碱、胡芦巴碱、水苏碱、龙葵碱等多种生物碱。可以抑制消化道肿瘤细胞的增值。茄子纤维中所含的维生素C和皂草甙，具有降低胆固醇的功效。',
}, {
    foodId: '109',
    foodImg: 'images/d109.jpg',
    foodSinglePrice: 1.25,
    foodUnit: "500g",
    foodRecipe: '马铃薯块茎含有大量的淀粉，淀粉是食用马铃薯的主要能量来源。此外马铃薯块茎含有多种维生素和无机盐，蛋白质营养价值高，马铃薯块茎中含有丰富的膳食纤维，并含有丰富的钾盐，属于碱性食品。块茎还含有葡萄糖、果糖和蔗糖等。',
}, {
    foodId: '110',
    foodImg: 'images/d110.jpg',
    foodSinglePrice: 0.94,
    foodUnit: "500g",
    foodRecipe: '“红”萝卜是为“十字花科萝卜属”，又名“大红萝卜”、“胭脂萝卜”“东北红萝卜”，一、二年生草本，根肉质，球形、根皮红色、根肉白色。原产于我国，各地均有栽培，东北是我国大红萝卜主要产区，因气候及品种等因素形成了其极高的营养价值和药用价值。红萝卜性微温，入肺、胃二经，具有清热、解毒、利湿、散瘀、健胃消食、化痰止咳、顺气、利便、生津止渴、补中、安五脏等功能。萝卜种类繁多，生吃以辣味少者为好。',
}, {
    foodId: '100',
    foodImg: 'images/d100.jpg',
    foodSinglePrice: 9.20,
    foodUnit: "500g",
    foodRecipe: '猪肉又名豚肉，是主要家畜之一、猪科动物家猪的肉。其性味甘咸平，含有丰富的蛋白质及脂肪、碳水化合物、钙、铁、磷等营养成分。猪肉是日常生活的主要副食品，具有补虚强身，滋阴润燥、丰肌泽肤的作用。凡病后体弱、产后血虚、面黄赢瘦者，皆可用之作营养滋补之品。',
}, {
    foodId: '101',
    foodImg: 'images/d101.jpg',
    foodSinglePrice: 19.70,
    foodUnit: "500g",
    foodRecipe: '猪排骨是指猪的排骨，有非常丰富的营养成分。猪排骨提供人体生理活动必需的优质蛋白质、脂肪，尤其是丰富的钙质可维护骨骼健康。一般人都可食用，湿热痰滞内蕴者慎服，肥胖、血脂较高者不宜多食。猪排骨提供人体生理活动必需的优质蛋白质、脂肪，尤其是丰富的钙质可维护骨骼健康',
}, {
    foodId: '102',
    foodImg: 'images/d102.jpg',
    foodSinglePrice: 8.70,
    foodUnit: "500g",
    foodRecipe: '五花肉（又称肋条肉、三层肉）位于猪的腹部，猪腹部脂肪组织很多，其中又夹带着肌肉组织，肥瘦间隔，故称“五花肉”。这部分的瘦肉也最嫩且最多汁。味甘咸、性平，入脾、胃、肾经；补肾养血，滋阴润燥；主治热病伤津、消渴羸瘦、肾虚体弱、产后血虚、燥咳、便秘、补虚、滋阴、润燥、滋肝阴，润肌肤，利二便和止消渴。猪肉煮汤饮下可急补由于津液不足引起的烦躁、干咳、便秘和难产。',
}, {
    foodId: '103',
    foodImg: 'images/d103.jpg',
    foodSinglePrice: 3.10,
    foodUnit: "500g",
    foodRecipe: '味辛、性温、无毒，入肝、肺、脾；茎、叶可以消肿解毒，治痈肿丹毒、血痢、劳伤吐血。种子可行滞活血，治产后心、腹诸疾及恶露不下、蛔虫肠梗阻。 ',
}, {
    foodId: '104',
    foodImg: 'images/d104.jpg',
    foodSinglePrice: 3.80,
    foodUnit: "500g",
    foodRecipe: '娃娃菜富含维生素A、维生素C、维生素B族、钾、硒等。娃娃菜富含异硫氰酸盐，这种硫化物有着抗肿瘤活性的作用。娃娃菜所含钙的含量较高，几乎等于白菜含量的2-3倍；是防治维生素D缺乏(佝偻病)的理想蔬菜。娃娃菜味道甘甜，价格比普通白菜略高，营养价值和大白菜差不多，富含维生素和硒，叶绿素含量较高，具有丰富的营养价值。娃娃菜还含有丰富的纤维素及微量元素，也有助于预防结肠癌。',
}, {
    foodId: '105',
    foodImg: 'images/d105.jpg',
    foodSinglePrice: 1.20,
    foodUnit: "500g",
    foodRecipe: '利肠通便，帮助消化 大白菜中含有大量的粗纤维，可促进肠壁蠕动，帮助消化，防止大便干燥，促进排便，稀释肠道毒素，既能治疗便秘，又有助于营养吸收。消食健胃，补充营养 大白菜味美清爽，开胃健脾，含有蛋白质、脂肪、多种维生素及钙、磷、铁等矿物质，常食有助于增强机体免疫功能，对减肥健美也具有意义。防癌抗癌 ，帮助体内分解与乳腺癌发生相关的雌激素，可使乳腺癌发生率减少。',
}, {
    foodId: '106',
    foodImg: 'images/d106.jpg',
    foodSinglePrice: 4.00,
    foodUnit: "500g",
    foodRecipe: '西蓝花的平均营养价值及防病作用远远超出其他蔬菜，名列第一。西蓝花维生素C含量比辣椒高。西蓝花中的营养成分，不仅含量高，而且十分全面，主要包括蛋白质、碳水化合物、脂肪、矿物质、维生素C和胡萝卜素等。据分析，每100克新鲜西蓝花的花球中，含蛋白质3.5克—4.5克，是菜花的3倍、番茄的4倍。此外，西蓝花中矿物质成分比其他蔬菜更全面，钙、磷、铁、钾、锌、锰等含量都很丰富，比同属于十字花科的白菜花高出很多。',
}, {
    foodId: '107',
    foodImg: 'images/d107.jpg',
    foodSinglePrice: 3.00,
    foodUnit: "500g",
    foodRecipe: '花菜能够抗癌防癌、清化血管、丰富的维K、解毒肝脏、提高免疫力、消除水肿、防癌，此外，研究表明，菜花中提取的一种酶能预防癌症，这种物质叫萝卜子素，有提高致癌物解毒酶活性的作用',
}, ]


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
        var $p2 = `<p class="pt2 f28">月销量：<span class="f28">${element.foodSales}</span></p>`;

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
    var $p2 = `<p class="pt2 f28">月销量：<span class="f28">${showFood.foodSales}</span></p>`;

    $figucaption.append($p1);
    $figucaption.append($p2);
    $figure.append($img);
    $figure.append($figucaption);

    $('#main2 figure').replaceWith($figure);

    var recipe = showFood.foodRecipe;
    // recipe = escape2Html(recipe);
    // $('#main2 article').html(recipe);
}


//展示自定义菜谱
function showOrderList2() {
    for (let i = 0; i < orderList2.length; i++) {
        const element = orderList2[i];
        var SinglePriceFirst = parseInt(element.foodSinglePrice);
        var SinglePriceNext = ((element.foodSinglePrice - SinglePriceFirst) * 100).toFixed(0);

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
        var $p2 = `<p class="pt2 f28"><span class="f28">/${element.foodUnit}</span></p>`;

        $figucaption.append($p1);
        $figucaption.append($p2);
        $figure.append($img);
        $figure.append($figucaption);

        $('#main').append($figure);
    }
    $('#cartshu').text(getTotalNum());
}

//在main2中显示刚刚点击的食品
function showClickFood2(id) {
    //在菜单中获取到这个食品对象
    var showFood = findFood(id, orderList2);

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
    var $p2 = `<p class="pt2 f28"><span class="f28">/${showFood.foodUnit}</span></p>`;

    $figucaption.append($p1);
    $figucaption.append($p2);
    $figure.append($img);
    $figure.append($figucaption);

    $('#main2 figure').replaceWith($figure);
    $('#main2 article p').text(showFood.foodRecipe);
}


//展示购物车中的商品
function showCartList(list) {
    cartList = list;
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
function showConfirmList(list) {
    confirmList = list;
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
        var $p2 = `<p class="pt2 f28">购买数量：
                    <span class="f28 shu">${element.foodNum}</span>
                </p>`;
        var $p3 = `<p class="pt2 f28">总价：
                    <span class="f28 shu">${element.foodTotal}</span>
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
function addToCart(id, list) {
    var oldFood = findFood(id, list);
    var newFood = new Object();
    newFood.foodId = id;
    newFood.foodImg = oldFood.foodImg;
    newFood.foodSinglePrice = oldFood.foodSinglePrice;
    newFood.foodNum = 1;
    newFood.foodTotal = oldFood.foodSinglePrice;

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

//将确认的订单添加到确认数组中
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

function escape2Html(str) {
    var arrEntities = { 'lt': '<', 'gt': '>', 'nbsp': ' ', 'amp': '&', 'quot': '"' };
    return str.replace(/&(lt|gt|nbsp|amp|quot);/ig, function(all, t) { return arrEntities[t]; });
}