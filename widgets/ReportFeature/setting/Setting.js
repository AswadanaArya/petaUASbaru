// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See http://js.arcgis.com/3.15/esri/copyright.txt and http://www.arcgis.com/apps/webappbuilder/copyright.txt for details.
//>>built
require({cache:{"esri/tasks/datareviewer/ReviewerResultsTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/json dojo/has ./_DRSBaseTask ../../request ../FeatureSet ../../layers/FeatureEditResult ../../kernel".split(" "),function(p,m,t,q,v,u,w,r,y,z,k){p=p(w,{declaredClass:"esri.tasks.datareviewer.ReviewerResultsTask",constructor:function(g){this.onGetResultsComplete=m.hitch(this,this.onGetResultsComplete);this.onWriteResultComplete=m.hitch(this,this.onWriteResultComplete);
this.onWriteFeatureAsResultComplete=m.hitch(this,this.onWriteFeatureAsResultComplete);this.onGetLayerDefinitionComplete=m.hitch(this,this.onGetLayerDefinitionComplete);this.onGetBatchRunDetailsComplete=m.hitch(this,this.onGetBatchRunDetailsComplete)},getResults:function(g,l){var b=this._successHandler,e=this._errorHandler,d=this._appendQueryParams,c=this._url+"/ReviewerResults/getResults";c=d(c);var a=new q;g={queryParameters:g.toJSON(),f:"json"};null!==l&&void 0!==l&&(g.filtersArray=l.toJSON());
r({callbackParamName:"callback",url:c,content:g}).then(m.hitch(this,function(f,h){if(void 0!==f.error)h=Error(),h.message=f.error.message,h.code=f.error.code,e(h,a);else try{if(void 0===f.features||void 0===f.fieldAliases||void 0===f.fields)e(null,a);else{var n=new y(f);b({featureSet:n},"onGetResultsComplete",a)}}catch(x){e(x,a)}}),function(f,h){e(f,a)});return a},writeResult:function(g,l){var b=this._successHandler,e=this._errorHandler,d=this._appendQueryParams,c=this._url+"/ReviewerResults/writeResult";
c=d(c);var a=new q;r({callbackParamName:"callback",url:c,content:{reviewerAttributes:g.toJSON(),geometry:v.stringify(l.toJson()),f:"json"}}).then(m.hitch(this,function(f,h){h=Error();if(void 0!==f.error)h.message=f.error.message,h.code=f.error.code,e(h,a);else try{void 0!==f.result&&"error"===f.result?(h.message=f.messages,h.code=f.result,e(h,a)):"success"===f.result?b({success:!0},"onWriteResultComplete",a):e(null,a)}catch(n){e(n,a)}}),function(f,h){e(f,a)});return a},writeFeatureAsResult:function(g,
l){var b=this._successHandler,e=this._errorHandler,d=this._appendQueryParams,c=this._url+"/ReviewerResults/writeFeatureAsResult";c=d(c);var a=new q;r({callbackParamName:"callback",url:c,content:{reviewerAttributes:g.toJSON(),feature:v.stringify(l.toJson()),f:"json"}}).then(m.hitch(this,function(f,h){h=Error();if(void 0!==f.error)h.message=f.error.message,h.code=f.error.code,e(h,a);else try{void 0!==f.result&&"error"===f.result?(h.message=f.messages,h.code=f.result,e(h,a)):"success"===f.result?b({success:!0},
"onWriteFeatureAsResultComplete",a):e(null,a)}catch(n){e(n,a)}}),function(f,h){e(f,a)});return a},getLayerDefinition:function(g){var l=this._successHandler,b=this._errorHandler,e=this._appendQueryParams,d=this._url+"/ReviewerResults/getLayerDefinition";d=e(d);var c=new q;e={f:"json"};if(null!==g||void 0!==g)e.filtersArray=g.toJSON();r({callbackParamName:"callback",url:d,content:e}).then(m.hitch(this,function(a,f){if(void 0!==a.error)f=Error(),f.message=a.error.message,f.code=a.error.code,b(f,c);else try{void 0===
a.whereClause?b(null,c):l({whereClause:a.whereClause},"onGetLayerDefinitionComplete",c)}catch(h){b(h,c)}}),function(a,f){b(a,c)});return c},getBatchRunDetails:function(g){var l=this._successHandler,b=this._errorHandler,e=this._appendQueryParams,d=this._url+"/ReviewerResults/getBatchRunDetails";d=e(d);var c=new q;r({callbackParamName:"callback",url:d,content:{batchRunIds:v.stringify(g),f:"json"}}).then(m.hitch(this,function(a,f){if(void 0!==a.error)f=Error(),f.message=a.error.message,f.code=a.error.code,
b(f,c);else try{if(void 0===a.features||void 0===a.fieldAliases||void 0===a.fields)b(null,c);else{var h=new y(a);l({featureSet:h},"onGetBatchRunDetailsComplete",c)}}catch(n){b(n,c)}}),function(a,f){b(a,c)});return c},updateLifecycleStatus:function(g,l,b,e){var d=this._successHandler,c=this._errorHandler,a=this._appendQueryParams,f=this._url+"/ReviewerResults/updateLifecycleStatus";f=a(f);var h=new q;r({callbackParamName:"callback",url:f,content:{sessionId:g,lifecycleStatus:l,technicianName:b,filtersArray:e.toJSON(),
f:"json"}}).then(m.hitch(this,function(n,x){if(void 0!==n.error)x=Error(),x.message=n.error.message,x.code=n.error.code,c(x,h);else try{var C=[];t.forEach(n.updateResults,function(A){var B=new z;B.error=Error(A.description);B.success=A.success;B.objectId=A.objectId;C.push(B)});d({featureEditResults:C},"onUpdateLifecycleStatusComplete",h)}catch(A){c(A,h)}}),function(n,x){c(n,h)});return h},getResultsFieldNames:function(){return"recordId objectId subtype category sessionId checktitle resourceName checkName notes severity reviewStatus correctionStatus verificationStatus reviewTechnician correctionTechnician verificationTechnician reviewDateUtc correctionDateUtc verificationDateUtc lifecycleStatus".split(" ")},
onGetResultsComplete:function(g){},onWriteResultComplete:function(g){},onWriteFeatureAsResultComplete:function(g){},onGetLayerDefinitionComplete:function(g){},onGetBatchRunDetailsComplete:function(g){},onUpdateLifecycleStatusComplete:function(g){}});u("extend-esri")&&m.setObject("tasks.datareviewer.ReviewerResultsTask",p,k);return p})},"esri/tasks/datareviewer/_DRSBaseTask":function(){define("dojo/_base/declare dojo/_base/lang dojo/_base/array dojo/Deferred dojo/has ../../request ../../urlUtils ../../kernel ../Task ./ReviewerSession".split(" "),
function(p,m,t,q,v,u,w,r,y,z){p=p(y,{declaredClass:"esri.tasks.datareviewer.DRSBaseTask",_url:null,_queryParams:null,_reviewerMapServerUrl:null,constructor:function(k){"/"==k[k.length-1]&&(k=k.slice(0,-1));k=w.urlToObject(k);this._url=k.path;this._queryParams=k.query;k=this._url.toLowerCase().lastIndexOf("/exts/");0<k&&(this._reviewerMapServerUrl=this._url.substring(0,k));this._successHandler=m.hitch(this,this._successHandler);this._errorHandler=m.hitch(this,this._errorHandler);this._appendQueryParams=
m.hitch(this,this._appendQueryParams);this.onError=m.hitch(this,this.onError)},_appendQueryParams:function(k){if(this._queryParams)for(var g in this._queryParams)k=w.urlToObject(k).query?k+("\x26"+g+"\x3d"+this._queryParams[g]):k+("?"+g+"\x3d"+this._queryParams[g]);return k},_successHandler:function(k,g,l){g&&this[g].apply(this,[k]);l&&l.resolve(k)},_errorHandler:function(k,g){null===k&&(k=Error("Unexpected response received from server"),k.code=500);this.onError(k);g&&g.reject(k)},getReviewerMapServerUrl:function(){var k=
null;if(k=this._reviewerMapServerUrl){if(this._queryParams)for(var g in this._queryParams)k=w.urlToObject(k).query?k+("\x26"+g+"\x3d"+this._queryParams[g]):k+("?"+g+"\x3d"+this._queryParams[g]);return k}return null},getLifecycleStatusStrings:function(){var k=this._successHandler,g=this._errorHandler,l=this._appendQueryParams,b=this._url+"/Utilities/getLifecycleStatusStrings";b=l(b);var e=new q;u({callbackParamName:"callback",url:b,content:{f:"json"}}).then(m.hitch(this,function(d,c){if(void 0!==d.error)c=
Error(),c.message=d.error.message,c.code=d.error.code,g(c,e);else try{var a=d.lifecycleStatusString;if(void 0===a)g(null,e);else{var f=[];t.forEach(a,function(h,n){f[h.descriptionCode]=h.descriptionString});k({lifecycleStatusStrings:f},"onGetLifecycleStatusStringsComplete",e)}}catch(h){g(h,e)}}),function(d,c){g(d,e)});return e},createReviewerSession:function(k,g){var l=this._successHandler,b=this._errorHandler,e=this._appendQueryParams,d=this._url+"/Utilities/createReviewerSession";d=e(d);var c=new q;
u({callbackParamName:"callback",url:d,content:{sessionName:k,sessionProperties:g.toJsonSessionOptions(),f:"json"}}).then(m.hitch(this,function(a,f){if(void 0!==a.error)f=Error(),f.message=a.error.message,f.code=a.error.code,b(f,c);else try{if(void 0===a.sessionAttributes)b(null,c);else{var h=a.sessionAttributes,n=new z(h.sessionId,h.sessionName,h.userName,h.versionName);l({reviewerSession:n},"onCreateReviewerSessionComplete",c)}}catch(x){b(x,c)}}),function(a,f){b(a,c)});return c},getReviewerSessions:function(){var k=
this._successHandler,g=this._errorHandler,l=this._appendQueryParams,b=this._url+"/Utilities/getReviewerSessions";b=l(b);var e=new q;u({callbackParamName:"callback",url:b,content:{f:"json"}}).then(m.hitch(this,function(d,c){if(void 0!==d.error)c=Error(),c.message=d.error.message,c.code=d.error.code,g(c,e);else try{var a=d.sessionAttributes;if(void 0===a)g(null,e);else{var f=[];t.forEach(a,function(h,n){f[n]=new z(h.sessionId,h.sessionName,h.userName,h.versionName)});k({reviewerSessions:f},"onGetReviewerSessionsComplete",
e)}}catch(h){g(h,e)}}),function(d,c){g(d,e)});return e},getCustomFieldNames:function(){var k=this._successHandler,g=this._errorHandler,l="BATCHJOBCHECKGROUP CHECKTITLE FEATUREOBJECTCLASS LIFECYCLEPHASE LIFECYCLESTATUS SESSIONID SEVERITY SUBTYPE".split(" "),b=this._appendQueryParams,e=this._url+"/Dashboard";e=b(e);var d=new q;u({callbackParamName:"callback",url:e,content:{f:"json"}}).then(m.hitch(this,function(c,a){if(void 0!==c.error)a=Error(),a.message=c.error.message,a.code=c.error.code,g(a,d);
else try{var f=[];void 0===c.reviewerResultsBy&&g(null,d);t.forEach(c.reviewerResultsBy,function(h,n){-1===l.indexOf(h.name)&&f.push(h.name)});k({customFieldNames:f},"onGetCustomFieldNamesComplete",d)}catch(h){g(h,d)}}),function(c,a){g(c,d)});return d},onGetLifecycleStatusStringsComplete:function(k){},onGetReviewerSessionsComplete:function(k){},onCreateReviewerSessionComplete:function(k){},onGetCustomFieldNamesComplete:function(k){},onError:function(k){}});v("extend-esri")&&m.setObject("tasks.datareviewer.DRSBaseTask",
p,r);return p})},"esri/tasks/datareviewer/ReviewerSession":function(){define(["dojo/_base/declare","dojo/has","dojo/_base/lang","../../kernel"],function(p,m,t,q){p=p(null,{declaredClass:"esri.tasks.datareviewer.ReviewerSession",sessionId:NaN,sessionName:"",userName:"",versionName:"",constructor:function(v,u,w,r){this.sessionId=v;this.sessionName=u;this.userName=w;void 0!==r&&(this.versionName=r)},toString:function(){return isNaN(this.sessionId)?null:"Session "+this.sessionId+" : "+this.sessionName}});
m("extend-esri")&&t.setObject("tasks.datareviewer.ReviewerSession",p,q);return p})},"widgets/ReportFeature/setting/_build-generate_module":function(){define(["dojo/text!./Setting.html","dojo/text!./css/style.css","dojo/i18n!./nls/strings"],function(){})},"url:widgets/ReportFeature/setting/Setting.html":'\x3cdiv style\x3d"width:100%;"\x3e\r\n  \x3ctable class\x3d"setting-table input-table" cellspacing\x3d"0"\x3e\r\n    \x3ctbody\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first  jimu-trailing-padding1"\x3e${nls.drsUrl}\x3c/td\x3e\r\n        \x3ctd style\x3d"width:auto;"\x3e\r\n          \x3cinput type\x3d"text" data-dojo-type\x3d"dijit/form/ValidationTextBox" required\x3d"true" \r\n          data-dojo-attach-point\x3d"drsUrl" style\x3d"width:650px;" class\x3d"inputBox"/\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd  style\x3d"width:80px;"\x3e\r\n            \x3cdiv data-dojo-attach-event\x3d"onclick:_onBtnSetSourceClicked" class\x3d"jimu-btn  jimu-float-trailing" style\x3d"padding:0px 15px !important;" \x3e${nls.setSource}\x3c/div\x3e       \r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e\r\n      \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.includeReportedBy}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n           \x3cdiv\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"currentUser"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"currentLogin" value\x3d"logon" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getCurrentUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025" data-dojo-attach-point\x3d"userName"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"defaultUser" value\x3d"default" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getDefaultUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n              \x3cdiv class\x3d"revTechnician-item jimu-trailing-margin025 " data-dojo-attach-point\x3d"userInput"\x3e\r\n                \x3cdiv data-dojo-type\x3d"jimu/dijit/RadioBtn" data-dojo-props\x3d"group:\'UserName\'" data-dojo-attach-point\x3d"allowUser" value\x3d"user" class\x3d"jimu-radio"\x3e\x3c/div\x3e\r\n                \x3clabel class\x3d"jimu-leading-margin025"\x3e${nls.getUser}\x3c/label\x3e\r\n              \x3c/div\x3e\r\n          \x3c/div\x3e\r\n        \x3c/td\x3e\r\n       \x3c/tr\x3e\r\n        \x3cdiv data-dojo-attach-point\x3d"userNameSettings" \x3e\r\n       \x3ctr class\x3d\'dynamicRow\'\x3e\r\n       \x3ctd class\x3d"first jimu-trailing-padding1"\x3e\r\n       ${nls.userName}\r\n       \x3c/td\x3e\r\n       \x3ctd class\x3d"second"\x3e   \x3cinput type\x3d"text" class\x3d"inputBox" data-dojo-type\x3d"dijit/form/ValidationTextBox" \r\n            data-dojo-attach-point\x3d"defaultUserName" placeHolder\x3d"${nls.revTechName}"\r\n            data-dojo-props\x3d\'style:{width:"30%"}\' /\x3e\x3c/td\x3e\r\n       \x3c/tr\x3e\r\n       \x3c/div\x3e\r\n       \x3ctr\x3e\r\n        \x3ctd class\x3d"first jimu-trailing-padding1"\x3e${nls.defaultSessionId}\x3c/td\x3e\r\n        \x3ctd class\x3d"second"\x3e\r\n          \x3cselect data-dojo-type\x3d"dijit/form/Select" data-dojo-attach-point\x3d"defaultSessionSelect" class\x3d"selectBox"\x3e\r\n        \x3c/select\x3e\r\n        \x3c/td\x3e\r\n        \x3ctd class\x3d"third"\x3e\r\n          \x3cdiv class\x3d"help-icon"\x3e\x3c/div\x3e\r\n        \x3c/td\x3e\r\n      \x3c/tr\x3e \r\n    \x3c/tbody\x3e\r\n  \x3c/table\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableLayerInfos"\x3e\x3c/div\x3e\r\n  \x3cdiv data-dojo-attach-point\x3d"tableNoLayersError" style\x3d"display:none"\x3e\x3c/div\x3e\r\n\x3c/div\x3e\r\n',
"url:widgets/ReportFeature/setting/css/style.css":".drs-widget-report-feature-setting{margin:0; padding:0; font-size:15px;}.drs-widget-report-feature-setting .setting-table \x3e thead \x3e tr \x3e th,.drs-widget-report-feature-setting .setting-table \x3e tbody \x3e tr \x3e td{height:40px; line-height:40px; vertical-align:middle;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .first{width:auto;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .second{width:120px;}.drs-widget-report-feature-setting .input-table \x3e tbody \x3e tr \x3e .third{width:35px;}.drs-widget-report-feature-setting .revTechnician-item{display: inline-block; vertical-align: middle;}.drs-widget-report-feature-setting .revTechnician-item .jimu-radio,.drs-widget-report-feature-setting .revTechnician-item .jimu-leading-margin025{vertical-align: middle;}",
"*now":function(p){p(['dojo/i18n!*preload*widgets/ReportFeature/setting/nls/Setting*["ar","bg","bs","ca","cs","da","de","en","el","es","et","fi","fr","he","hr","hu","id","it","ja","ko","lt","lv","nb","nl","pl","pt-br","pt-pt","ro","ru","sk","sl","sr","sv","th","tr","zh-cn","uk","vi","zh-hk","zh-tw","ROOT"]'])},"*noref":1}});
define("dojo/_base/declare dojo/_base/array dojo/_base/lang dijit/_WidgetsInTemplateMixin jimu/BaseWidgetSetting jimu/dijit/SimpleTable dojo/_base/html dojo/query dojo/on dijit/registry esri/tasks/datareviewer/ReviewerResultsTask jimu/dijit/Message dojo/dom-style dijit/form/ValidationTextBox jimu/dijit/RadioBtn".split(" "),function(p,m,t,q,v,u,w,r,y,z,k,g,l){return p([v,q],{baseClass:"drs-widget-report-feature-setting",includeUserBy:"",defaultUserName:"",selectedUserType:"",postCreate:function(){this.own(y(this.currentUser,
"click",t.hitch(this,function(){this._setRadioItem(this.currentUser)})));this.own(y(this.userName,"click",t.hitch(this,function(){this._setRadioItem(this.userName)})));this.own(y(this.userInput,"click",t.hitch(this,function(){this._setRadioItem(this.userInput)})))},startup:function(){this.inherited(arguments);this.config.layers||(this.config.layers=[]);var b=[{name:"label",title:this.nls.label,width:"40%",type:"text"},{name:"id",title:"index",type:"text",hidden:!0},{name:"alias",title:this.nls.alias,
type:"text",width:"40%",editable:"true","class":"symbol"},{name:"show",title:this.nls.show,width:"auto",type:"checkbox","class":"show"},{name:"layerType",title:"layerType",type:"text",hidden:!0},{name:"url",title:"url",type:"text",hidden:!0}];this._setUserNameVisibility(!1);this.displayFieldsTable=new u({fields:b,selectable:!0});this.displayFieldsTable.placeAt(this.tableLayerInfos);w.setStyle(this.displayFieldsTable.domNode,{height:"100%"});this.displayFieldsTable.startup();this.setConfig(this.config)},
_setUserNameVisibility:function(b){var e=r(this.userNameSettings);b?(this.set("includeUserBy","default"),e.style({display:"block"}),this.showHideDynamicRows(!0,this.userNameSettings)):this.showHideDynamicRows(!1,this.userNameSettings)},showHideDynamicRows:function(b){var e=r(".dynamicRow");if(void 0!==e&&null!==e&&0<e.length)for(var d=0;d<e.length;d++)e[d].style.display=b?"":"none"},setConfig:function(b){this.config=b;this.populateSessionNames(this.config.drsUrl);b.drsUrl&&this.drsUrl.set("value",
b.drsUrl);""===b.includeReportedBy||"logon"===b.includeReportedBy||void 0===b.includeReportedBy?this._setRadioItem(this.currentUser):"default"===b.includeReportedBy?(this._setRadioItem(this.userName),this.defaultUserName.set("value",b.defaultUserName)):"user"===b.includeReportedBy&&this._setRadioItem(this.userInput);b=this.map.itemInfo.itemData.operationalLayers;0>=b.length?(l.set(this.tableNoLayersError,"display",""),this.tableNoLayersError.innerHTML=this.nls.noLayers):l.set(this.tableNoLayersError,
"display","none");for(var e=0;e<b.length;e++){var d=b[e];if(d.hasOwnProperty("url")&&0<d.url.indexOf("MapServer")||"ArcGISFeatureLayer"===d.layerType){var c="ArcGISMapServiceLayer";var a=this.isLayerInConfig(d,"alias");var f=this.isLayerInConfig(d,"show");d.layerType&&(c=d.layerType);this.displayFieldsTable.addRow({label:d.title,id:d.id,alias:""===a?d.title:a,show:""===f?!0:f,layerType:c,url:d.url})}}},_onBtnSetSourceClicked:function(){this.populateSessionNames(this.drsUrl.value)},populateSessionNames:function(b){this.defaultSessionSelect.options.length=
null;(new k(b)).getReviewerSessions().then(t.hitch(this,function(e){m.forEach(e.reviewerSessions,t.hitch(this,function(d){this.defaultSessionSelect.addOption({value:d.sessionId,label:d.toString()})}));this.config.sessionID&&this.defaultSessionSelect.set("value",this.config.sessionID.toString())}))},isLayerInConfig:function(b,e){if(this.config.layers)for(var d=this.config.layers,c=d.length,a=0;a<c;a++)if(d[a].id.toLowerCase()===b.id.toLowerCase()){if("show"===e)return d[a].show;if("alias"===e)return d[a].alias}return""},
_setRadioItem:function(b){b=z.byNode(r(".jimu-radio",b)[0]);b.check(!0);this.selectedUserType=b.value;"default"===b.value?this._setUserNameVisibility(!0):this._setUserNameVisibility(!1)},getConfig:function(){if(!this.drsUrl.value)return new g({message:this.nls.warning}),!1;this.config.drsUrl=this.drsUrl.value;if(""===this.defaultSessionSelect.value||void 0===this.defaultSessionSelect.value)return new g({message:this.nls.noSessionName}),!1;this.config.sessionID=this.defaultSessionSelect.value;var b=
this.displayFieldsTable.getData();this.config.layers=[];for(var e=[],d=b.length,c=0;c<d;c++){var a={};a.label=b[c].label;a.id=b[c].id;a.alias=b[c].alias;a.show=b[c].show;a.layerType=b[c].layerType;a.url=b[c].url;e.push(a)}this.config.layers=e;if("default"===this.selectedUserType&&""===this.defaultUserName.value)return new g({message:this.nls.noUserName}),!1;this.config.includeReportedBy=this.selectedUserType;this.config.defaultUserName=this.defaultUserName.value;return this.config}})});