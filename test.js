//内閣総理大臣のデータ
var data=[
  {"id":1,"name":"伊藤博文","start":19851222,"end":18880430},
  {"id":2,"name":"黒田清隆","start":18880501,"end":18891224},
  {"id":3,"name":"山縣有朋","start":18891225,"end":18910506},
  {"id":4,"name":"松方正義","start":18910507,"end":18920808},
  {"id":5,"name":"伊藤博文","start":18920809,"end":18960918},
  {"id":6,"name":"松方正義","start":18960919,"end":18980112},
  {"id":7,"name":"伊藤博文","start":18980113,"end":18980630},
  {"id":8,"name":"大隈重信","start":18980701,"end":18981108},
  {"id":9,"name":"山縣有朋","start":18981109,"end":19001019},
  {"id":10,"name":"伊藤博文","start":19001020,"end":19010602},
  {"id":11,"name":"桂太郎","start":19010603,"end":19060107},
  {"id":12,"name":"西園寺公望","start":19060108,"end":19080714},
  {"id":13,"name":"桂太郎","start":19080715,"end":19110830},
  {"id":14,"name":"西園寺公望","start":19110831,"end":19121221},
  {"id":15,"name":"桂太郎","start":19121222,"end":19130220},
  {"id":16,"name":"山本権兵衛","start":19130220,"end":19140416},
  {"id":17,"name":"大隈重信","start":19140417,"end":19161009},
  {"id":18,"name":"寺内正毅","start":19161010,"end":19180929},
  {"id":19,"name":"原敬","start":19180929,"end":19211113},
  {"id":20,"name":"高橋是清","start":19211114,"end":19220612},
  {"id":21,"name":"加藤友三郎","start":19220613,"end":19230902},
  {"id":22,"name":"山本権兵衛","start":19230903,"end":19240107},
  {"id":23,"name":"清浦奎吾","start":19240108,"end":19240611},
  {"id":24,"name":"加藤高明","start":19240612,"end":19260130},
  {"id":25,"name":"若槻禮次郎","start":19260131,"end":19270420},
  {"id":26,"name":"田中義一","start":19270421,"end":19290702},
  {"id":27,"name":"濱口雄幸","start":19290703,"end":19310414},
  {"id":28,"name":"若槻禮次郎","start":19310415,"end":19311213},
  {"id":29,"name":"犬養毅","start":19311214,"end":19320526},
  {"id":30,"name":"斎藤実","start":19320527,"end":19340708},
  {"id":31,"name":"岡田啓介","start":19340709,"end":19360309},
  {"id":32,"name":"広田弘毅","start":19360310,"end":19370202},
  {"id":33,"name":"林銑十郎","start":19370203,"end":19370604},
  {"id":34,"name":"近衛文麿","start":19370605,"end":19390105},
  {"id":35,"name":"平沼騏一郎","start":19390106,"end":19390830},
  {"id":36,"name":"阿部信行","start":19390831,"end":19400116},
  {"id":37,"name":"米内光政","start":19400117,"end":19400722},
  {"id":38,"name":"近衛文麿","start":19400723,"end":19411018},
  {"id":39,"name":"東條英機","start":19411019,"end":19440722},
  {"id":40,"name":"小磯国昭","start":19440723,"end":19450407},
  {"id":41,"name":"鈴木貫太郎","start":19450408,"end":19450817},
  {"id":42,"name":"東久邇宮稔彦王","start":19450817,"end":19451009},
  {"id":43,"name":"幣原喜重郎","start":19451010,"end":19460522},
  {"id":44,"name":"吉田茂","start":19460523,"end":19470524},
  {"id":45,"name":"片山哲","start":19470524,"end":19480310},
  {"id":33,"name":"芦田均","start":19480311,"end":19481015},
  {"id":44,"name":"吉田茂","start":19481016,"end":19541210},
  {"id":45,"name":"鳩山一郎","start":19541211,"end":19561223},
  {"id":46,"name":"石橋湛山","start":19561224,"end":19570225},
  {"id":47,"name":"岸信介","start":19570226,"end":19600719},
  {"id":48,"name":"池田勇人","start":19600720,"end":19641109},
  {"id":49,"name":"佐藤栄作","start":19641109,"end":19720707},
  {"id":50,"name":"田中角栄","start":19720708,"end":19741209},
  {"id":51,"name":"三木武夫","start":19741210,"end":19761224},
  {"id":52,"name":"福田赳夫","start":19771225,"end":19781207},
  {"id":53,"name":"大平正芳","start":19781208,"end":19800717},
  {"id":54,"name":"鈴木善幸","start":19800718,"end":19821127},
  {"id":55,"name":"中曽根康弘","start":19821128,"end":19871106},
  {"id":56,"name":"竹下登","start":19871106,"end":19890603},
  {"id":57,"name":"宇野宗佑","start":19890603,"end":19890810},
  {"id":58,"name":"海部俊樹","start":19890811,"end":19911105},
  {"id":59,"name":"宮澤喜一","start":19911106,"end":19930809},
  {"id":60,"name":"細川護熙","start":19930810,"end":19940428},
  {"id":61,"name":"羽田孜","start":19940429,"end":19940630},
  {"id":62,"name":"村山富市","start":19940701,"end":19960111},
  {"id":63,"name":"橋本龍太郎","start":19960112,"end":19980730},
  {"id":64,"name":"小渕恵三","start":19980731,"end":20000405},
  {"id":65,"name":"森喜朗","start":20000406,"end":20010426},
  {"id":66,"name":"小泉純一郎","start":20010427,"end":20060926},
  {"id":67,"name":"安倍晋三","start":20060927,"end":20070926},
  {"id":68,"name":"福田康夫","start":20070927,"end":20080924},
  {"id":69,"name":"麻生太郎","start":20080925,"end":20090916},
  {"id":70,"name":"鳩山由紀夫","start":20090916,"end":20100618},
  {"id":71,"name":"菅直人","start":20100608,"end":20110902},
  {"id":72,"name":"野田佳彦","start":20110903,"end":20121226},
  {"id":73,"name":"安倍晋三","start":20121227,"end":20191122}
]

//セレクトボックス
$(document).ready(function(){
    const selectItems = [];
    var map = {};
    for(const key in data){
      selectItems.push((data[key].name))
    }
    for(var i=0; i<selectItems.length; i++){
      var tmp = selectItems[i];
      map[tmp] = 1
    }
    const selectList = Object.keys(map).map(function(data){
      $("[id^='daijin']").append("<option value='"+data+"'>"+data+"</option>");
    })
});

//セレクトボックスが切り替わった時
$("[id^='daijin']").change(function() {
  var val = $(this).val();
  //選択したValue値をp要素に出力
  $('.' + $(this).attr('id')).text(val);
});

//確定ボタンクリック時
$('.btn').click(function(){
  //配列に入れる
  var array = $.makeArray($("[class^='daijin']"));
  var tmpList = [];
  for(var i=0; i<array.length; i++){
    var arrStr = array[i].innerText;
    tmpList.push(arrStr);
  }
  //配列内の要素に重複があるか確認する
  var map = {};
  for(var i=0; i<tmpList.length; i++){
    var tmp = tmpList[i];
    map[tmp] = 1
  }
  if(Object.keys(map).length == 25){
    //sessionStorageへデータを保存する
    for(var i=0; i<=24; i++){
      var key = $('.elements')[i].children[1].className;
      var value = $('.elements')[i].children[1].innerText;
      sessionStorage.setItem(key,value);
    }
    //次の画面へ遷移
    window.location.href = 'bingo.html';

  }else{
    //次の画面へ遷移させない
    alert('選択された大臣に重複もしくは不足があります。\n修正してください。')
  }
});
