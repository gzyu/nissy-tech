(function(){"use strict";var t={9569:function(t,e,o){var i=o(6369),a=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home-nav-wrapper",attrs:{id:"app"}},[e("nav",{staticClass:"home-nav"},[e("router-link",{attrs:{to:"/"}},[t._v("ホーム")]),e("router-link",{attrs:{to:"/model-viewer/demo"}},[t._v("3D家具グリグリ")]),e("router-link",{attrs:{to:"/model-viewer/heat-map-3d"}},[t._v("グリグリを使った3Dヒートマップ")])],1),e("router-view")],1)},n=[],s=o(1001),r={},l=(0,s.Z)(r,a,n,!1,null,null,null),d=l.exports,c=o(2631),u=function(){var t=this,e=t._self._c;return e("div",{staticClass:"home"},[e("h1",[t._v("にっしーの技術ノート")]),e("ul",{staticClass:"page-box-list"},t._l(t.pages,(function(o){return e("li",{key:`page-${o.key}`},[e("router-link",{attrs:{to:o.to}},[e("div",{staticClass:"page-box"},[e("img",{staticClass:"page-box-img",attrs:{src:o.thumbnail,alt:o.key,width:"250",height:"250"}}),e("div",[e("h2",{staticClass:"page-box-title"},[t._v(t._s(o.title))]),e("p",{staticClass:"page-box-text"},[t._v(t._s(o.detail))])])])])],1)})),0)])},m=[],h={name:"HomeView",data(){return{pages:[{key:"model-viewer-demo",to:"/model-viewer/demo",thumbnail:"assets/images/thumbnail-model-viewer.jpg",title:"3D家具グリグリ",detail:"お客さんが家具を360度自由に見られる技術を紹介！\n購買意欲を搔き立てること間違いなし！"},{key:"heat-map-3d",to:"/model-viewer/heat-map-3d",thumbnail:"assets/images/thumbnail-heat-map-3d.jpg",title:"グリグリを使った3Dヒートマップ",detail:"お客さんが家具のどこを注目しているか分析するための技術を紹介！\n商品開発の助けになるかも？"}]}}},p=h,v=(0,s.Z)(p,u,m,!1,null,null,null),b=v.exports,f=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"introduction"},[e("h1",{staticClass:"page-title"},[t._v("グリグリを使った3Dヒートマップ")]),e("h2",{staticClass:"introduction-title"},[t._v("技術紹介")]),e("div",{staticClass:"introduction-top-wrapper"},[e("div",{staticClass:"introduction-top-inner"},[t.isMounted?e("model-viewer",{staticClass:"model-viewer",attrs:{id:"heat-map-3d-demo",src:"assets/models/cube.glb","camera-controls":""}}):t._e(),e("p",{staticClass:"introduction-top-text",attrs:{id:"search-text",hidden:""}},[t._v("計測中..")]),e("div",{staticClass:"introduction-btn-wrapper"},[e("button",{staticClass:"introduction-btn",attrs:{id:"start-btn"},on:{click:function(e){return t.startMeasuremunt()}}},[t._v("計測を開始")]),e("button",{staticClass:"introduction-btn",attrs:{id:"stop-btn",disabled:""},on:{click:function(e){return t.stopMeasuremunt()}}},[t._v("計測を終了")])])],1),t._m(0),e("div",{staticClass:"introduction-score-wrapper"},[e("h3",[t._v("ユーザーが閲覧した割合")]),e("ul",{staticClass:"introduction-score-list"},t._l(t.scores,(function(o){return e("li",{key:o.key,class:`introduction-score-itme-${o.key}`},[e("style",{tag:"component"},[t._v(" .introduction-score-itme-"+t._s(o.key)+"{ color: rgb("+t._s(o.color[0])+","+t._s(o.color[1])+","+t._s(o.color[2])+"); } ")]),t._v(" "+t._s(o.name)+"："+t._s(o.value)+" % ")],1)})),0),t._m(1)])])])])},y=[function(){var t=this,e=t._self._c;return e("div",[e("img",{attrs:{src:"assets/images/color-bar.png",alt:"color-bar",width:"30",height:"400"}})])},function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("操作説明")]),e("ul",{staticClass:"introduction-detail-list"},[e("li",[t._v(" 計測を開始ボタンを押す ")]),e("li",[t._v(" 好きなだけキューブをグリグリする ")]),e("li",[t._v(" 計測を終了ボタンを押す ")]),e("li",[t._v(" キューブの面に、その面を見た時間の長さに応じたヒートマップが生成される ")])])])}],_={name:"HeatMap3d",data(){return{isMounted:!1,timer:null,deltaTime:100,thetaArray:[],phiArray:[],scores:[{key:"front",name:"正面",value:0,color:[0,0,0]},{key:"back",name:"裏面",value:0,color:[0,0,0]},{key:"right",name:"右面",value:0,color:[0,0,0]},{key:"left",name:"左面",value:0,color:[0,0,0]},{key:"up",name:"上面",value:0,color:[0,0,0]},{key:"down",name:"下面",value:0,color:[0,0,0]}]}},methods:{startMeasuremunt(){document.getElementById("start-btn").disabled=!0,document.getElementById("stop-btn").disabled=!1,document.getElementById("search-text").hidden=!1,this.resetMaterialColor(),this.timer=window.setInterval((()=>{this.getCameraLocation()}),100)},stopMeasuremunt(){document.getElementById("start-btn").disabled=!1,document.getElementById("stop-btn").disabled=!0,document.getElementById("search-text").hidden=!0,clearInterval(this.timer),this.time=null,this.scores[0].value=this.calculateFrontScore(),this.scores[1].value=this.calculateBackScore(),this.scores[2].value=this.calculateRightScore(),this.scores[3].value=this.calculateLeftScore(),[this.scores[4].value,this.scores[5].value]=this.calculateUpDownScore(),this.scoreToColor(),this.setMaterialColor(),this.NormalizeScore(),this.thetaArray=[],this.phiArray=[]},getCameraLocation(){const t=document.querySelector("model-viewer#heat-map-3d-demo"),e=t.getCameraOrbit().theta,o=t.getCameraOrbit().phi,i=this.convertTheta(e),a=this.convertPhi(o);this.thetaArray.push(i),this.phiArray.push(a)},convertTheta(t){let e=2-2*(t/Math.PI/2-Math.floor(t/Math.PI/2));return e>1&&(e-=2),e=Math.floor(100*e)/100,e},convertPhi(t){let e=2*(t/Math.PI/2-Math.floor(t/Math.PI/2));return e>1&&(e-=2),e=Math.floor(100*e)/100,e},calculateFrontScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let o=0,i=0;Math.abs(this.thetaArray[e])<.5&&(o=Math.cos(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=o*i}return t/=this.thetaArray.length,t},calculateBackScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let o=0,i=0;Math.abs(this.thetaArray[e])>.5&&(o=-Math.cos(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=o*i}return t/=this.thetaArray.length,t},calculateRightScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let o=0,i=0;this.thetaArray[e]>0&&(o=Math.sin(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=o*i}return t/=this.thetaArray.length,t},calculateLeftScore(){let t=0;for(let e=0;e<this.thetaArray.length;e++){let o=0,i=0;this.thetaArray[e]<0&&(o=-Math.sin(this.thetaArray[e]*Math.PI)),Math.abs(this.phiArray[e])>0&&Math.abs(this.phiArray[e])<1&&(i=Math.sin(this.phiArray[e]*Math.PI)),t+=o*i}return t/=this.thetaArray.length,t},calculateUpDownScore(){let t=0,e=0;for(let o=0;o<this.phiArray.length;o++)Math.abs(this.phiArray[o])<.5?t+=Math.cos(this.phiArray[o]*Math.PI):e-=Math.cos(this.phiArray[o]*Math.PI);return t/=this.phiArray.length,e/=this.phiArray.length,[t,e]},scoreToColor(){const t=Math.max(this.scores[0].value,this.scores[1].value,this.scores[2].value,this.scores[3].value,this.scores[4].value,this.scores[5].value);for(let e=0;e<this.scores.length;e++){const o=this.scores[e].value/t;let i=0,a=0,n=0;o>=.5&&(i=255*(2*o-1)),o>=.25&&o<=.5?a=510*o:o>.5&&o<=.75&&(a=255*(-2*o+2)),o<=.5&&(n=255*(-2*o+1)),this.scores[e].color=[Math.floor(i),Math.floor(a),Math.floor(n)]}},setMaterialColor(){const t=document.querySelector("model-viewer#heat-map-3d-demo");for(let e=0;e<t.model.materials.length;e++){const o=t.model.materials[e];o.pbrMetallicRoughness.setBaseColorFactor([this.scores[e].color[0]/255,this.scores[e].color[1]/255,this.scores[e].color[2]/255])}},resetMaterialColor(){const t=document.querySelector("model-viewer#heat-map-3d-demo");for(let e=0;e<t.model.materials.length;e++){const o=t.model.materials[e];o.pbrMetallicRoughness.setBaseColorFactor([.5,.5,.5])}},NormalizeScore(){let t=0;for(let e=0;e<this.scores.length;e++)t+=this.scores[e].value;for(let e=0;e<this.scores.length;e++)this.scores[e].value=Math.floor(this.scores[e].value/t*100)}},mounted(){this.isMounted=!0,this.loadComponent()},computed:{loadComponent(){return()=>o.e(25).then(o.bind(o,5025))}}},g=_,C=(0,s.Z)(g,f,y,!1,null,"35bd1d68",null),w=C.exports,x=function(){var t=this,e=t._self._c;return e("div",[e("section",{staticClass:"introduction"},[e("h1",{staticClass:"page-title"},[t._v("3D家具グリグリ")]),e("h2",{staticClass:"introduction-title"},[t._v("家具の3Dモデルを表示してユーザーが操作可能！")]),e("defaultDemo"),e("defaultRoomDemo"),e("turnTableDemo"),e("exposureDemo"),e("annotationDemo"),e("sizeViewDemo"),e("animationDemo"),e("functionalityAnimation")],1)])},M=[],A=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{staticClass:"model-viewer",attrs:{id:"default-demo",src:"assets/models/model.glb","camera-controls":"","enable-pan":"",exposure:"0.7","touch-action":"none"}}),t._m(0)],1)},V=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("操作説明")]),e("h4",[t._v("-PCの場合-")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" マウスの左クリックをホールドしながら、上下左右に動かすことで家具を回転 ")]),e("li",[t._v(" マウスの右クリックをホールドしながら、上下左右に動かすことで家具を平行移動 ")]),e("li",[t._v(" マウスのホイールで拡大縮小が可能 ")])]),e("h4",[t._v("-スマホの場合-")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" スワイプ操作で家具を回転させることができる ")]),e("li",[t._v(" 2本指で拡大縮小が可能 ")])])])}];const k=()=>o.e(25).then(o.bind(o,5025));var O={name:"defaultDemo",data(){return{modelViewerObj:null}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#default-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t}))}}},$=O,S=(0,s.Z)($,A,V,!1,null,null,null),j=S.exports,z=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{staticClass:"model-viewer",attrs:{id:"room-demo",src:"assets/models/room.glb","camera-controls":"","enable-pan":"",exposure:"0.7","touch-action":"none","camera-target":"0.7m 1m -0.5m","camera-orbit":"60deg 70deg 90%"}}),t._m(0)],1)},P=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("部屋を丸ごと表示することも可能！")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" コーディネートを丸ごと3Dにしてお部屋を覗くことも ")])])])}],Z={name:"defaultRoomDemo",data(){return{modelViewerObj:null}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#room-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t}))}}},D=Z,B=(0,s.Z)(D,z,P,!1,null,null,null),E=B.exports,I=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{staticClass:"model-viewer",attrs:{id:"turn-table-demo",src:"assets/models/model.glb","auto-rotate":"",exposure:"0.7","rotation-per-second":t.rotateSpeed*Math.PI+"rad"}},[e("div",{staticClass:"model-viewer-rotation-range-bar"},[e("p",{staticClass:"range-bar-text"},[t._v("回転速度: "+t._s(t.rotateSpeed))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.rotateSpeed,expression:"rotateSpeed"}],attrs:{type:"range",min:"-1.2",max:"1.2",step:"0.01"},domProps:{value:t.rotateSpeed},on:{__r:function(e){t.rotateSpeed=e.target.value}}})])]),t._m(0)],1)},T=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("ターンテーブル")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 回転・拡縮・移動など永続的な動きを加えられる ")]),e("li",[t._v(" この動きはglbファイル内に埋め込まなくとも、フロント側で設定可能 ")])])])}],X={name:"turnTableDemo",data(){return{modelViewerObj:null,rotateSpeed:1}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#default-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t}))}}},N=X,q=(0,s.Z)(N,I,T,!1,null,null,null),Y=q.exports,H=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{staticClass:"model-viewer",attrs:{id:"exposure-demo",src:"assets/models/model.glb","camera-controls":"","enable-pan":"","touch-action":"none",exposure:t.exposure}},[e("div",{staticClass:"model-viewer-rotation-range-bar"},[e("p",{staticClass:"range-bar-text"},[t._v("光の強さ(露出):"+t._s(t.exposure))]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.exposure,expression:"exposure"}],attrs:{type:"range",min:"0",max:"1",step:"0.01",value:"0.7"},domProps:{value:t.exposure},on:{__r:function(e){t.exposure=e.target.value}}})])]),t._m(0)],1)},L=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("光の強さ(露出)")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 家具に当たる光の強さを調整することができる ")])])])}],F={name:"exposureDemo",data(){return{modelViewerObj:null,exposure:.7}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#default-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t}))}}},R=F,G=(0,s.Z)(R,H,L,!1,null,null,null),U=G.exports,W=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{staticClass:"model-viewer",attrs:{id:"annotation-demo",src:"assets/models/model.glb","camera-controls":"","enable-pan":"","touch-action":"none",exposure:"0.7"}},[e("button",{attrs:{slot:"hotspot-point1","data-position":"0.38m 0.15m -0.18m","data-normal":"0 0 -1","data-orbit":"150deg 60deg 50%"},on:{click:function(e){t.annotations[0].detailOpen=!t.annotations[0].detailOpen}},slot:"hotspot-point1"},[t.annotations[0].detailOpen?e("span",{staticClass:"annotation1-detail"},[e("span",{staticClass:"annotation1-detail-ttl"},[t._v(t._s(t.annotations[0].ttl))]),e("span",{staticClass:"annotation1-detail-text"},[t._v(t._s(t.annotations[0].detailText))])]):e("span",{staticClass:"annotation1"},[t._v(t._s(t.annotations[0].ttl))])]),e("button",{attrs:{slot:"hotspot-point2","data-position":"0m 0.6m 0.2m","data-normal":"0 0 1","data-orbit":"0deg 90deg"},on:{click:function(e){t.annotations[1].detailOpen=!t.annotations[1].detailOpen}},slot:"hotspot-point2"},[t.annotations[1].detailOpen?e("span",{staticClass:"annotation2-detail"},[e("span",{staticClass:"annotation2-detail-ttl"},[t._v(t._s(t.annotations[1].ttl))]),e("img",{attrs:{src:"assets/images/detail-img01.jpg",alt:"中までテラゾー柄",width:"200",height:"200"}})]):e("span",{staticClass:"annotation2"},[t._v(t._s(t.annotations[1].ttl))])]),e("button",{attrs:{slot:"hotspot-point3","data-position":"0.25m 0.7m -0.18m","data-normal":"0 0 -1","data-orbit":"150deg 60deg 50%"},on:{click:function(e){t.annotations[2].detailOpen=!t.annotations[2].detailOpen}},slot:"hotspot-point3"},[e("div",{staticClass:"annotation-point"}),t.annotations[2].detailOpen?e("span",{staticClass:"annotation1-detail"},[e("span",{staticClass:"annotation1-detail-ttl"},[t._v(t._s(t.annotations[2].ttl))])]):t._e()])]),t._m(0)],1)},J=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("注釈追加")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 3Dモデル上に注釈を追加でき、家具を回転させると注釈が隠れる ")])])])}],K={name:"defaultDemo",data(){return{modelViewerObj:null,annotations:[{detailOpen:!1,ttl:"コードリール付き！",detailText:"背面のコード穴近くにはコードリールを設け、コード類をスッキリ巻き付けることが出来ます。配線を見せない、美しいリビングづくりに一役買うポイントです。"},{detailOpen:!1,ttl:"中までテラゾー柄！",detailText:"扉収納の内側まで、余すことなくテラゾー柄を使用。表面だけではなく、細かいところまで美しく仕上げました。"},{detailOpen:!1,ttl:"コードスリット付き！",detailText:"天板は飾り棚として使用したり、よく使う小物を置くスペースとして使うのもオススメ！スマホの充電やスタンドライトなどの家電も置けるよう、天板奥にはコードスリットを設けました。"}]}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#annotation-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t,this.setUpHotspot()}))},setUpHotspot(){const t=t=>{let e=t.dataset;this.modelViewerObj.cameraTarget=e.position,this.modelViewerObj.cameraOrbit=e.orbit,this.modelViewerObj.fieldOfView="45deg"};this.modelViewerObj.querySelectorAll("button").forEach((e=>{e.addEventListener("click",(()=>t(e)))}))}}},Q=K,tt=(0,s.Z)(Q,W,J,!1,null,"56402096",null),et=tt.exports,ot=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{key:t.selectedModel,staticClass:"model-viewer",attrs:{id:"size-view-demo",src:t.selectedModel,"camera-controls":"","enable-pan":"",exposure:"0.7","camera-orbit":"-30deg 60deg","touch-action":"none"}},[t._l(t.endPoints,(function(o,i){return e("button",{key:`end-point${i}`,staticClass:"end-point",style:"display: "+(t.annotationVisibility?"block":"none"),attrs:{slot:`hotspot-end-point${o.slot}`,"data-normal":o.dataNormal},slot:`hotspot-end-point${o.slot}`})})),t._l(t.sizePanels,(function(o,i){return e("button",{key:`size-panel${i}`,staticClass:"size-panel",style:"display: "+(t.annotationVisibility?"block":"none"),attrs:{slot:`hotspot-size-panel${o.slot}`,"data-normal":o.dataNormal},slot:`hotspot-size-panel${o.slot}`})})),e("div",{staticClass:"toggle-button-wrapper"},[e("div",{staticClass:"toggle-button"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.annotationVisibility,expression:"annotationVisibility"}],staticClass:"toggle-input",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.annotationVisibility)?t._i(t.annotationVisibility,null)>-1:t.annotationVisibility},on:{change:function(e){var o=t.annotationVisibility,i=e.target,a=!!i.checked;if(Array.isArray(o)){var n=null,s=t._i(o,n);i.checked?s<0&&(t.annotationVisibility=o.concat([n])):s>-1&&(t.annotationVisibility=o.slice(0,s).concat(o.slice(s+1)))}else t.annotationVisibility=a}}}),e("label",{class:t.annotationVisibility?"toggle-label-visible":"toggle-label-hidden",attrs:{for:"toggle"}})])]),e("div",{staticClass:"pulldown-wrapper"},[e("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedModel,expression:"selectedModel"}],on:{change:function(e){var o=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedModel=e.target.multiple?o:o[0]}}},[e("option",{attrs:{disabled:"",value:""}},[t._v("3Dモデル")]),t._l(t.models,(function(o){return e("option",{key:o.id,domProps:{value:o.name}},[t._v(" "+t._s(o.skuCode)+" ")])}))],2)])],2),t._m(0)],1)},it=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("操作説明")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 3Dモデル上に縦・横・高さのサイズを追加でる ")])])])}],at={name:"sizeViewDemo",data(){return{models:[{id:0,name:"assets/models/model.glb",skuCode:"3HWFL_LXMS8V"},{id:1,name:"assets/models/model2.glb",skuCode:"F201_G1036_1000P1"},{id:2,name:"assets/models/model3.glb",skuCode:"F402_G1027_1000W1"}],selectedModel:"assets/models/model.glb",modelViewerObj:null,annotationVisibility:!1,endPoints:[{slot:"+X-Y+Z",dataNormal:"1 0 1"},{slot:"+X-Y-Z",dataNormal:"1 0 0"},{slot:"+X+Y-Z",dataNormal:"0 1 0"},{slot:"-X+Y-Z",dataNormal:"0 1 0"},{slot:"-X-Y-Z",dataNormal:"-1 0 0"},{slot:"-X-Y+Z",dataNormal:"-1 0 0"}],sizePanels:[{slot:"+X-Y",dataNormal:"1 0 0"},{slot:"+X-Z",dataNormal:"1 0 0"},{slot:"+Y-Z",dataNormal:"0 1 0"},{slot:"-X-Z",dataNormal:"-1 0 0"},{slot:"-X-Y",dataNormal:"-1 0 0"}]}},watch:{async selectedModel(){this.annotationVisibility=!1;const t=t=>new Promise((e=>setTimeout(e,t)));await t(500);const e=document.querySelector("#size-view-demo");this.modelViewerObj=e,this.updateSizeHotspot(this.modelViewerObj),this.annotationVisibility=!0}},computed:{modelCenter(){return this.modelViewerObj.getCameraTarget()}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#size-view-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t})),t.addEventListener("progress",(t=>{1===t.detail.totalProgress&&(this.updateSizeHotspot(this.modelViewerObj),this.annotationVisibility=!0)}))},updateSizeHotspot(t){const e=t.getDimensions(),o=e.x/2,i=e.y/2,a=e.z/2;t.querySelector('button[slot="hotspot-size-panel+X-Y"]').textContent=`${(100*e.z).toFixed(0)} cm`,t.querySelector('button[slot="hotspot-size-panel+X-Z"]').textContent=`${(100*e.y).toFixed(0)} cm`,t.querySelector('button[slot="hotspot-size-panel+Y-Z"]').textContent=`${(100*e.x).toFixed(0)} cm`,t.querySelector('button[slot="hotspot-size-panel-X-Z"]').textContent=`${(100*e.y).toFixed(0)} cm`,t.querySelector('button[slot="hotspot-size-panel-X-Y"]').textContent=`${(100*e.z).toFixed(0)} cm`,t.updateHotspot({name:"hotspot-end-point+X-Y+Z",position:`${this.modelCenter.x+o} ${this.modelCenter.y-i} ${this.modelCenter.z+a}`}),t.updateHotspot({name:"hotspot-size-panel+X-Y",position:`${this.modelCenter.x+1.2*o} ${this.modelCenter.y-1.1*i} ${this.modelCenter.z}`}),t.updateHotspot({name:"hotspot-end-point+X-Y-Z",position:`${this.modelCenter.x+o} ${this.modelCenter.y-i} ${this.modelCenter.z-a}`}),t.updateHotspot({name:"hotspot-size-panel+X-Z",position:`${this.modelCenter.x+1.2*o} ${this.modelCenter.y} ${this.modelCenter.z-1.2*a}`}),t.updateHotspot({name:"hotspot-end-point+X+Y-Z",position:`${this.modelCenter.x+o} ${this.modelCenter.y+i} ${this.modelCenter.z-a}`}),t.updateHotspot({name:"hotspot-size-panel+Y-Z",position:`${this.modelCenter.x} ${this.modelCenter.y+1.1*i} ${this.modelCenter.z-1.1*a}`}),t.updateHotspot({name:"hotspot-end-point-X+Y-Z",position:`${this.modelCenter.x-o} ${this.modelCenter.y+i} ${this.modelCenter.z-a}`}),t.updateHotspot({name:"hotspot-size-panel-X-Z",position:`${this.modelCenter.x-1.2*o} ${this.modelCenter.y} ${this.modelCenter.z-1.2*a}`}),t.updateHotspot({name:"hotspot-end-point-X-Y-Z",position:`${this.modelCenter.x-o} ${this.modelCenter.y-i} ${this.modelCenter.z-a}`}),t.updateHotspot({name:"hotspot-size-panel-X-Y",position:`${this.modelCenter.x-1.2*o} ${this.modelCenter.y-1.1*i} ${this.modelCenter.z}`}),t.updateHotspot({name:"hotspot-end-point-X-Y+Z",position:`${this.modelCenter.x-o} ${this.modelCenter.y-i} ${this.modelCenter.z+a}`})}}},nt=at,st=(0,s.Z)(nt,ot,it,!1,null,"19775775",null),rt=st.exports,lt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{staticClass:"model-viewer",attrs:{id:"animation-demo",src:"assets/models/model-animation.glb","camera-controls":"","enable-pan":"",exposure:"0.7","touch-action":"none"}},t._l(t.animationButtons,(function(o,i){return e("button",{key:`animation-button${i}`,staticClass:"animation-button",style:"display: "+(t.animationButtonVisibility?"block":"none"),attrs:{slot:`hotspot-animation-button${i}`,"data-position":`${o.translation[0]} ${o.translation[1]} ${o.translation[2]}`,"data-normal":"0 0 1"},on:{click:function(e){return t.playAnimationByIndex(i)}},slot:`hotspot-animation-button${i}`})})),0),t._m(0)],1)},dt=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("操作説明")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" アニメーションの再生が可能 ")])])])}],ct={name:"animationDemo",data(){return{modelViewerObj:null,animationButtons:[],animationButtonVisibility:!1}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#animation-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t,this.tryGetAnimationButtons(this.modelViewerObj)}))},tryGetAnimationButtons(t){t.addEventListener("progress",(e=>{1===e.detail.totalProgress&&(this.getAnimationButtons(t),this.animationButtonVisibility=!0)}))},getAnimationButtons(t){t.originalGltfJson.nodes.forEach((t=>{t.name.indexOf("animation-button")||this.animationButtons.push(t)}))},async playAnimationByIndex(t){await this.disableAllAnimationButtons(),await this.playAnimation(t,this.modelViewerObj),this.enableAllAnimationButtons()},disableAllAnimationButtons(){const t=document.querySelectorAll(".animation-button");t.forEach((t=>{t.disabled=!0}))},enableAllAnimationButtons(){const t=document.querySelectorAll(".animation-button");t.forEach((t=>{t.disabled=!1}))},async playAnimation(t,e){const o=t=>new Promise((e=>setTimeout(e,t)));e.animationName=e.availableAnimations[t];const i=1e3*e.duration/2;e.timeScale=1,e.currentTime=0,await o(100),e.play(),await o(i),e.pause()}}},ut=ct,mt=(0,s.Z)(ut,lt,dt,!1,null,"3e0187d0",null),ht=mt.exports,pt=function(){var t=this,e=t._self._c;return e("div",{staticClass:"introduction-top-wrapper"},[e("div",{staticClass:"introduction-top-wrapper"},[e("model-viewer",{staticClass:"model-viewer",attrs:{id:"functionality-animation-demo",src:"assets/models/functionality-animation.glb","camera-controls":"","enable-pan":"",exposure:"0.7","touch-action":"none","camera-target":"0m 1m 0m","camera-orbit":"30deg 80deg 10%",autoplay:""}}),t._m(0)],1)])},vt=[function(){var t=this,e=t._self._c;return e("div",[e("h3",{staticClass:"introduction-detail-title"},[t._v("家具の利用方法もアニメーションに")]),e("ul",{staticClass:"introduction-detail-text"},[e("li",[t._v(" 機能性を推したい家具では、アニメーションを使うことでその用途を効果的に説明可能 ")])])])}],bt={name:"functionalityAnimation",data(){return{modelViewerObj:null}},async mounted(){await k(),this.initModelViewer()},methods:{initModelViewer(){const t=document.querySelector("#functionality-animation-demo");t.addEventListener("load",(()=>{this.modelViewerObj=t}))}}},ft=bt,yt=(0,s.Z)(ft,pt,vt,!1,null,null,null),_t=yt.exports,gt={name:"ModelViewerDemo",components:{defaultDemo:j,defaultRoomDemo:E,turnTableDemo:Y,exposureDemo:U,annotationDemo:et,sizeViewDemo:rt,animationDemo:ht,functionalityAnimation:_t}},Ct=gt,wt=(0,s.Z)(Ct,x,M,!1,null,"7fff080e",null),xt=wt.exports;i.ZP.use(c.Z);const Mt=[{path:"/",name:"home",component:b},{path:"/model-viewer/heat-map-3d",name:"model-viewer.heat-map-3d",component:w},{path:"/model-viewer/demo",name:"model-viewer.demo",component:xt}],At=new c.Z({base:"",routes:Mt});var Vt=At;i.ZP.config.productionTip=!1,new i.ZP({router:Vt,render:t=>t(d)}).$mount("#app")}},e={};function o(i){var a=e[i];if(void 0!==a)return a.exports;var n=e[i]={exports:{}};return t[i](n,n.exports,o),n.exports}o.m=t,function(){var t=[];o.O=function(e,i,a,n){if(!i){var s=1/0;for(c=0;c<t.length;c++){i=t[c][0],a=t[c][1],n=t[c][2];for(var r=!0,l=0;l<i.length;l++)(!1&n||s>=n)&&Object.keys(o.O).every((function(t){return o.O[t](i[l])}))?i.splice(l--,1):(r=!1,n<s&&(s=n));if(r){t.splice(c--,1);var d=a();void 0!==d&&(e=d)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[i,a,n]}}(),function(){o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,{a:e}),e}}(),function(){o.d=function(t,e){for(var i in e)o.o(e,i)&&!o.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})}}(),function(){o.f={},o.e=function(t){return Promise.all(Object.keys(o.f).reduce((function(e,i){return o.f[i](t,e),e}),[]))}}(),function(){o.u=function(t){return"js/"+t+".cf0b8c78.js"}}(),function(){o.miniCssF=function(t){}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){var t={},e="nissy-tech:";o.l=function(i,a,n,s){if(t[i])t[i].push(a);else{var r,l;if(void 0!==n)for(var d=document.getElementsByTagName("script"),c=0;c<d.length;c++){var u=d[c];if(u.getAttribute("src")==i||u.getAttribute("data-webpack")==e+n){r=u;break}}r||(l=!0,r=document.createElement("script"),r.charset="utf-8",r.timeout=120,o.nc&&r.setAttribute("nonce",o.nc),r.setAttribute("data-webpack",e+n),r.src=i),t[i]=[a];var m=function(e,o){r.onerror=r.onload=null,clearTimeout(h);var a=t[i];if(delete t[i],r.parentNode&&r.parentNode.removeChild(r),a&&a.forEach((function(t){return t(o)})),e)return e(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:r}),12e4);r.onerror=m.bind(null,r.onerror),r.onload=m.bind(null,r.onload),l&&document.head.appendChild(r)}}}(),function(){o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){o.p=""}(),function(){var t={143:0};o.f.j=function(e,i){var a=o.o(t,e)?t[e]:void 0;if(0!==a)if(a)i.push(a[2]);else{var n=new Promise((function(o,i){a=t[e]=[o,i]}));i.push(a[2]=n);var s=o.p+o.u(e),r=new Error,l=function(i){if(o.o(t,e)&&(a=t[e],0!==a&&(t[e]=void 0),a)){var n=i&&("load"===i.type?"missing":i.type),s=i&&i.target&&i.target.src;r.message="Loading chunk "+e+" failed.\n("+n+": "+s+")",r.name="ChunkLoadError",r.type=n,r.request=s,a[1](r)}};o.l(s,l,"chunk-"+e,e)}},o.O.j=function(e){return 0===t[e]};var e=function(e,i){var a,n,s=i[0],r=i[1],l=i[2],d=0;if(s.some((function(e){return 0!==t[e]}))){for(a in r)o.o(r,a)&&(o.m[a]=r[a]);if(l)var c=l(o)}for(e&&e(i);d<s.length;d++)n=s[d],o.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return o.O(c)},i=self["webpackChunknissy_tech"]=self["webpackChunknissy_tech"]||[];i.forEach(e.bind(null,0)),i.push=e.bind(null,i.push.bind(i))}();var i=o.O(void 0,[998],(function(){return o(9569)}));i=o.O(i)})();
//# sourceMappingURL=app.c379ca86.js.map