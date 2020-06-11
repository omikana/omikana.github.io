(function (){  //即時関数で囲んでグローバル変数を消すため、この行はこのままで
  
    //★シャボン玉の画像指定。増減可能。画像を順番に"●",と区切って、いくつでも並べる。最後の ] の前には ,(カンマ) 無し
    var hosi=["img/shabon1.png","img/shabon2.png","img/shabon3.png","img/shabon4.png"];
    var myurl="";     //★画像パス。文書とは別のフォルダーなどに入っている時は指定。全画像共通部分
    
    var n=30;         //★画像表示数。原本30
    var inZ=-1;       //★画像や文章の上に浮くなら 1 。下に隠れるなら -1
    var Pos="absolute";  //★スクロールで移動するか？　固定:fixed 　移動:absolute
    var doc_x=1300;    //★原本700。単位px。吹き出し位置(横方向) left
    var doc_y=600;    //★原本500。単位px。吹き出し位置(縦方向) top
    var maxOp=1;      //★透過の最大値。ランダム変化です。0.1から1の間で指定。miniOpより同じか大きくする
    var miniOp=0.5;   //★透過の最小値。ランダム変化です。0.1から1の間で指定。maxOpより同じか小さくする
    var spd=50;       //★原本50。吹き出す速度。小さいほど速い
    var xxx=8;        //★原本8。散らばりの広さ。数字が大きいほど広い
    
    //指定ここまで------------------------------------------------------------------
    var xp=[], yp=[], i=[], l=[], dx=[], stx=[], am=[], ae=[], opa=[];
    var len=hosi.length;
    var xp0=doc_x, yp0=doc_y, w=window.innerWidth, h=window.innerHeight;
    var sss="";
    for (var m=1;m<(n+1);m++){
    ae[m]=1;
    xp[m]=w*Math.random(); 
    yp[m]=h*Math.random();
    i[m]=xxx*Math.random()+10;
    l[m]=xxx*Math.random()+10;
    dx[m]=0;
    stx[m]=0.05+Math.random()/10;
    am[m]=Math.random()*40;  
    opa[m]=Math.random()*(maxOp-miniOp)+miniOp;//追加
    sss+="<img src="+myurl+hosi[m%len]+" id='dot"+m+"' style='position:"+Pos+";left:-500px; z-index:"+inZ+"; opacity:"+opa[m]+";'>";
    document.write(sss);
    }
    function STAR_WARS() {
    for (m=1;m<(n+1);m++){
    var ob=document.getElementById("dot"+m).style;
    if(ae[m]===1){ob.display="none";}else{ob.display="block";}
    dx[m]+=stx[m];
    ob.top=yp[m]+"px";
    ob.left=xp[m]-am[m]*Math.sin(dx[m])+"px";
    xp[m]=xp[m]-i[m];
    yp[m]=yp[m]-l[m];
    if(l[m]>3){l[m]=l[m]-0.2;}else{l[m]=l[m];}
    if(i[m]>1){i[m]=i[m]-0.4;}else{i[m]=i[m];}
    if ((xp[m]<=10)||(yp[m]<=10)){
    xp[m]=doc_x-xxx*Math.random()-8; 
    yp[m]=doc_y-xxx*Math.random()-6;
    i[m]=-xp[m]+xp0; l[m]=-yp[m]+yp0; ae[m]=2;
    }
    else if (yp[m]>h*9/10){
    xp[m]=doc_x-xxx*Math.random()-8; 
    yp[m]=doc_y-xxx*Math.random()-6;
    i[m]=-xp[m]+xp0; l[m]=-yp[m]+yp0; ae[m]=2;
    }
    }
    setTimeout(STAR_WARS,spd);
    }
    STAR_WARS();
    }());