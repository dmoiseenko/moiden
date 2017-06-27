webpackJsonp([1],[function(t,e,n){t.exports=n(1)},function(t,e,n){"use strict";function r(t){t.debugInfoEnabled(!1)}n(3),n(5),n(6),n(7),n(12),n(27);var i=angular.module("app",["rx","ui.router",n(13).name,n(14).name,n(15).name,n(16).name,n(17).name,n(18).name,n(19).name,n(20).name,n(21).name,n(22).name,n(23).name]);i.config(r),r.$inject=["$compileProvider"]},,,,,,,,,,,,function(t,e,n){"use strict";t.exports=angular.module("app.core",[]).factory("charts",n(126)).factory("colors",n(127)).factory("countries",n(128)).factory("indicators",n(129)).factory("main",n(130)).factory("plot",n(131)).factory("settings",n(132)).factory("topics",n(133))},function(t,e,n){"use strict";n(8),t.exports=angular.module("app.api",["restangular"]).config(n(134)).factory("worldBank",n(135))},function(t,e,n){"use strict";t.exports=angular.module("app.page",["ui.router"]).controller("PageController",n(136)).config(n(137))},function(t,e,n){"use strict";t.exports=angular.module("app.filter",[]).directive("topics",n(139))},function(t,e,n){"use strict";n(2),t.exports=angular.module("app.chart",["n3-line-chart"]).directive("chart",n(138))},function(t,e,n){"use strict";t.exports=angular.module("app.spinner",[]).directive("spinner",n(140))},function(t,e,n){"use strict";t.exports=angular.module("app.seriesView",[]).directive("seriesView",n(143))},function(t,e,n){"use strict";t.exports=angular.module("app.countries",[]).directive("countries",n(141)).directive("countriesMin",n(142))},function(t,e,n){"use strict";t.exports=angular.module("app.indicatorInfo",[]).directive("indicatorInfo",n(144))},function(t,e,n){"use strict";t.exports=angular.module("app.indicators",[]).directive("indicators",n(146))},function(t,e,n){"use strict";t.exports=angular.module("app.selectedCountries",[]).directive("selectedCountries",n(145))},,,,function(t,e,n){},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(t,e,n){"use strict";function r(t,e,n){function r(r,o,s){if(r&&o&&0!==r.length)i.busyObservable.onNext(!0),e.Observable.from(r).flatMap(function(n){return e.Observable.fromPromise(t.getDataByIndicatorAndCountry(o,n))}).toArray().subscribe(function(t){n.setType(s);var e=n.composePlotData(t);i.plotDataObservable.onNext(e),i.busyObservable.onNext(!1)});else{var a=n.getSample();i.plotDataObservable.onNext(a)}}var i={plotDataObservable:new e.BehaviorSubject(null),draw:r,busyObservable:new e.BehaviorSubject(!1)};return i}t.exports=r,r.$inject=["worldBank","rx","plot"]},function(t,e,n){"use strict";function r(){function t(t){if(t in i)return i[t];var e=r.pop();return i[t]=e,e}function e(t){var e=i[t];delete i[t],r.push(e)}var n={getColor:t,clearColor:e},r=["#1F77B4","#FF7F0E","#2CA02C","#D62728","#9467BD","#8C564B","#E377C2","#7F7F7F","#BCBD22","#17BECF","#1F77B4"],i={};return n}t.exports=r,r.$inject=[]},function(t,e,n){"use strict";function r(t,e,n){function r(){c.countriesObservable.subscribe(function(t){l=t}),t.getCountries().then(function(t){c.countriesObservable.onNext(i(t))})}function i(t){return t.filter(function(t){return t.capitalCity})}function o(t){u(l,t),t.color=n.getColor(t.iso2Code),f.push(t),a(f),c.selectedCountriesObservable.onNext(f),c.countriesObservable.onNext(l)}function s(t){u(f,t),n.clearColor(t.iso2Code),l.push(t),a(l),c.selectedCountriesObservable.onNext(f)}function a(t){t.sort(function(t,e){return t.name<e.name?-1:t.name>e.name?1:0})}function u(t,e){var n=t.indexOf(e);n>-1&&t.splice(n,1)}var c={loadCountries:r,countriesObservable:new e.BehaviorSubject([]),selectedCountriesObservable:new e.BehaviorSubject([]),selectCountry:o,deselectCountry:s},l=[],f=[];return c}t.exports=r,r.$inject=["worldBank","rx","colors"]},function(t,e,n){"use strict";function r(t,e){function n(t){o.selectedIndicatorObservable.onNext(t)}function r(e){o.newTopicObservable.onNext(e),o.indicatorsObservable.onNext([]),o.selectedIndicatorObservable.onNext(null),e&&t.getIndicatorsByTopic(e).then(function(t){o.indicatorsObservable.onNext(t)})}function i(){t.getIndicators().then(function(t){o.indicatorsObservable.onNext(t)})}var o={setTopic:r,newTopicObservable:new e.BehaviorSubject(null),indicatorsObservable:new e.BehaviorSubject([]),selectIndicator:n,selectedIndicatorObservable:new e.BehaviorSubject(null),loadIndicators:i};return o}t.exports=r,r.$inject=["worldBank","rx"]},function(t,e,n){"use strict";function r(t,e,n,r,i,o){function s(){t.loadCountries(),n.setTopic({id:21}),o.Observable.combineLatest(t.selectedCountriesObservable,e.selectedTopicObservable,n.selectedIndicatorObservable,i.seriesTypeObservable,function(t,e,n,r){return{countries:t,source:e,indicator:n,type:r}}).subscribe(function(t){r.draw(t.countries,t.indicator,t.type)})}var a={start:s,startObservable:new o.BehaviorSubject(!1)};return a}t.exports=r,r.$inject=["countries","topics","indicators","charts","settings","rx"]},function(t,e,n){(function(e,n,r){"use strict";function i(t){function i(t){p=t}function o(t){var i=u(t).filter(function(t){return t.value});if(e.isEmpty(i))return s();var o=[];i.forEach(function(t){var e=l(o,t);e||(e={},o.push(e)),e.x=new Date(t.date),e[t.country.id]=parseInt(t.value,10)}),o=o.sort(function(t,e){return t.x-e.x});var a=h(i),c=f(i),d={axes:a,series:c,drawLegend:!1,margin:{left:30,right:15},tooltip:{mode:"scrubber",formatter:function(t,e,i){return n(t).format("L")+", "+i.countryName+" : "+r.format(",")(e)}}};return{dots:o,options:d}}function s(){return{dots:[{x:1,value:1}],options:{axes:{x:{key:"x",type:"linear",min:0,max:1},y:{type:"linear",min:0,max:1,ticks:10,grid:!0}},margin:{left:30,right:15},series:[{y:"value",drawDots:!1}],lineMode:"linear",drawLegend:!1,drawDots:!1,tooltip:{mode:"none"}}}}function a(t){var e=t.map(function(t){return t.value});return Math.max.apply(null,e)}function u(t){return[].concat.apply([],t)}function c(t){var n=t.map(function(t){return t.country});return e.uniq(n,"id")}function l(t,n){var r=new Date(n.date).getTime(),i=e.findIndex(t,function(t){return t.x.getTime()===r});return-1===i?null:t[i]}function f(e){var n=c(e);return n.map(function(e){return{y:e.id,countryName:e.value,color:t.getColor(e.id),thickness:"3px",type:p}})}function h(t){var e={},n=a(t);return n>100&&(e="s"),{x:{type:"date"},y:{grid:!0,max:n,min:0,ticksFormat:e}}}var d={composePlotData:o,setType:i,getSample:s},p="line";return d}t.exports=i,i.$inject=["colors"]}).call(e,n(4),n(11),n(10))},function(t,e,n){"use strict";function r(t){function e(t){n.seriesTypeObservable.onNext(t)}var n={setSeriesType:e,seriesTypeObservable:new t.BehaviorSubject("line")};return n}t.exports=r,r.$inject=["rx"]},function(t,e,n){(function(e){"use strict";function n(t,n){function r(){t.getTopics().then(function(t){s.topicsObservable.onNext(t)})}function i(t){o()&&t.id===a.id||(a=t,s.selectedTopicObservable.onNext(t))}function o(){return!e.isNull(a)}var s={loadTopics:r,topicsObservable:new n.BehaviorSubject([]),setTopic:i,selectedTopicObservable:new n.BehaviorSubject(null)},a=null;return s}t.exports=n,n.$inject=["worldBank","rx"]}).call(e,n(4))},function(t,e,n){"use strict";function r(t){t.setBaseUrl("https://api.worldbank.org"),t.setJsonp(!0),t.setDefaultRequestParams("jsonp",{format:"jsonP",prefix:"JSON_CALLBACK",per_page:1e4}),t.setDefaultHttpFields({cache:!0}),t.addResponseInterceptor(function(t,e){var n=[];return"getList"===e?(null!==t[1]&&(n=t[1]),n.meta=t[0]):n=t,n})}t.exports=r,r.$inject=["RestangularProvider"]},function(t,e,n){"use strict";function r(t){function e(e){return t.all(e).getList()}function n(){return u.getData("countries")}function r(){return u.getData("topics")}function i(t){return u.getData("topic/"+t.id+"/indicator")}function o(){return u.getData("indicators")}function s(t){return u.getData("countries/all/indicators/"+t.id)}function a(t,e){return u.getData("countries/"+e.iso2Code+"/indicators/"+t.id)}var u={getCountries:n,getTopics:r,getIndicatorsByTopic:i,getDataByIndicator:s,getDataByIndicatorAndCountry:a,getIndicators:o,getData:e,rest:t};return u}t.exports=r,r.$inject=["Restangular"]},function(t,e,n){"use strict";function r(t,e){function n(){t.start(),e.go("home.data")}var r=this;r.activate=n,n()}n(155),n(157),n(159),n(161),n(163),t.exports=r,r.$inject=["main","$state"]},function(t,e,n){"use strict";function r(t,e){t.state("home",{url:"","abstract":!0,template:n(179),controller:"PageController",controllerAs:"vm"}).state("home.data",{url:"/",views:{content:{template:n(180)},header:{template:n(181)},footer:{template:n(182)}}}),e.otherwise("/")}t.exports=r,r.$inject=["$stateProvider","$urlRouterProvider"]},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(184),scope:{},controller:n(150),controllerAs:"vm",bindToController:!0};return t}n(148),t.exports=r,r.$inject=[]},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(183),scope:{},controller:i,controllerAs:"vm",bindToController:!0};return t}function i(t){function e(){t.topicsObservable.subscribe(function(t){i.topics=t})}function n(){return{value:"select topic"}}function r(e){i.selectedTopic=e,t.setTopic(e)}var i=this;i.topics=[],i.selectedTopic=n(),i.selectTopic=r,i.activate=e,e()}t.exports=r,r.$inject=[],i.$inject=["topics"]},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:i};return t}n(165);var i=n(185);t.exports=r,r.$inject=[]},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(186),scope:{},controller:n(151),controllerAs:"vm",bindToController:!0};return t}n(167),t.exports=r},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(191),scope:{},controller:n(151),controllerAs:"vm",bindToController:!0};return t}n(169),t.exports=r},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(188),scope:{},controller:n(152),controllerAs:"vm",bindToController:!0};return t}n(173),t.exports=r,r.$inject=[]},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(190),scope:{},controller:n(154),controllerAs:"vm",bindToController:!0};return t}n(177),t.exports=r},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(187),scope:{},controller:i,controllerAs:"vm",bindToController:!0};return t}function i(t){function e(){t.selectedCountriesObservable.subscribe(function(t){r.selectedCountries=t})}function n(e){t.deselectCountry(e)}var r=this;r.selectedCountries=[],r.deselectCountry=n,e()}n(171),t.exports=r,r.$inject=[],i.$inject=["countries"]},function(t,e,n){"use strict";function r(){var t={restrict:"EA",template:n(189),scope:{},controller:n(153),controllerAs:"vm",bindToController:!0};return t}n(175),t.exports=r,r.$inject=[]},,function(t,e,n){},,function(t,e,n){function r(t,e){function n(){t.plotDataObservable.subscribe(function(t){t&&(r.data=t.dots,r.options=t.options)}),t.busyObservable.subscribe(function(t){t?r.isBusy=!0:e(function(){r.isBusy=!1},500)})}var r=this;r.data=[],r.options={},r.isBusy=!1,n()}t.exports=r,r.$inject=["charts","$timeout"]},function(t,e,n){"use strict";function r(t){function e(){t.countriesObservable.subscribe(function(t){r.countries=t})}function n(e){t.selectCountry(e)}var r=this;r.countries=[],r.searchedCountry="",r.selectCountry=n,e()}t.exports=r,r.$inject=["countries"]},function(t,e,n){"use strict";function r(t){function e(){t.seriesTypeObservable.subscribe(function(t){r.selectedType=t})}function n(){t.setSeriesType(r.selectedType)}var r=this;r.selectedType="",r.activate=e,r.selectType=n,e()}t.exports=r,r.$inject=["settings"]},function(t,e,n){(function(e){"use strict";function n(t){function n(){t.indicatorsObservable.subscribe(function(t){o.isDisabled=e.isEmpty(t),o.indicators=t}),t.selectedIndicatorObservable.subscribe(function(t){o.selectedIndicator=t}),t.newTopicObservable.subscribe(function(){o.selectedIndicator=i()})}function r(e){t.selectIndicator(e)}function i(){return{name:"select indicator"}}var o=this;o.indicators=t,o.isDisabled=!0,o.selectedIndicator=i(),o.selectIndicator=r,n()}t.exports=n,n.$inject=["indicators"]}).call(e,n(4))},function(t,e,n){"use strict";function r(t){function e(){t.selectedIndicatorObservable.subscribe(function(t){t?(n.indicatorName=t.name,n.indicatorDescription=t.sourceNote):(n.indicatorName="",n.indicatorDescription="")})}var n=this;n.indicatorName="",n.indicatorDescription="",e()}t.exports=r,r.$inject=["indicators"]},function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){},,function(t,e,n){t.exports="<div class=page><div ui-view=header class=header-wrapper></div><div ui-view=content class=content-wrapper></div><div ui-view=footer class=footer-wrapper></div></div>"},function(t,e,n){t.exports="<div class=indicators-wrapper><indicators></indicators></div><div class=countries-chart-wrapper><countries class=countries-wrapper></countries><div class=chart-wrapper><indicators></indicators><countries-min></countries-min><selected-countries></selected-countries><chart></chart><indicator-info></indicator-info></div></div>"},function(t,e,n){t.exports='<div class=header><p class=logo>world bank data viewer</p><div class=world-bank__container><a class=world-bank__link href="http://www.worldbank.org/">data from World Bank</a></div></div>'},function(t,e,n){t.exports="<div class=footer><div class=footer--label>&#169; 2015 Moiden</div></div>"},function(t,e,n){t.exports='<div class="filters__topic dropdown"><button class="btn btn-primary dropdown-toggle" type=button id=dropdownMenu1 data-toggle=dropdown aria-haspopup=true aria-expanded=true>{{ vm.selectedTopic.value }} <span class=caret></span></button><ul class=dropdown-menu aria-labelledby=dropdownMenu1><li><a href=# ng-repeat="topic in vm.topics" ng-click=vm.selectTopic(topic)>{{ topic.value }}</a></li></ul></div>'},function(t,e,n){t.exports="<linechart data=vm.data options=vm.options ng-show=!vm.isBusy class=chart></linechart><series-view class=series-view-wrapper ng-show=!vm.isBusy></series-view><spinner class=busy-indicator ng-show=vm.isBusy></spinner>"},function(t,e,n){t.exports='<div class=sk-double-bounce><div class="sk-child sk-double-bounce1"></div><div class="sk-child sk-double-bounce2"></div></div>'},function(t,e,n){t.exports='<div class=countries><div class=countries__scroll><div class=countries__list><div ng-repeat="country in vm.countries"><a href="" ng-click=vm.selectCountry(country)><div class=country>{{ country.name }}</div></a></div></div></div></div>'},function(t,e,n){t.exports='<div class=countries__selected-list><div ng-repeat="country in vm.selectedCountries" class=selected-country__container><a href="" ng-click=vm.deselectCountry(country)><div class=selected-country><div class=selected-country__circle ng-style="{\'background\': country.color}"></div>{{ country.name }}</div></a></div></div>'},function(t,e,n){t.exports="<div class=series-view__container><label class=radio-inline><input type=radio name=optradio value=line ng-model=vm.selectedType ng-change=vm.selectType()> line</label><label class=radio-inline><input type=radio name=optradio value=area ng-model=vm.selectedType ng-change=vm.selectType()> area</label><label class=radio-inline><input type=radio name=optradio value=column ng-model=vm.selectedType ng-change=vm.selectType()> column</label></div>"},function(t,e,n){t.exports='<div class="dropdown indicators__container"><button class="btn btn-primary dropdown-toggle" type=button id=indicatorsDropdown data-toggle=dropdown aria-haspopup=true aria-expanded=false data-ng-disabled=vm.isDisabled>{{ vm.selectedIndicator.name }} <span class=caret></span></button><ul class="dropdown-menu indicators__indicators-list" aria-labelledby=indicatorsDropdown><li><a href=# ng-repeat="indicator in vm.indicators" ng-click=vm.selectIndicator(indicator)>{{ indicator.name }}</a></li></ul></div>'},function(t,e,n){t.exports="<div class=indicator-info__container><div class=indicator-info__name>{{ vm.indicatorName}}</div><div class=indicator-info__description>{{ vm.indicatorDescription}}</div></div>"},function(t,e,n){t.exports='<div class=dropdown><button class="btn btn-primary dropdown-toggle" type=button id=dropdownMenu2 data-toggle=dropdown aria-haspopup=true aria-expanded=true ng-disabled=vm.isDisabled>Select countries <span class=caret></span></button><ul class="dropdown-menu countries-min__list" aria-labelledby=dropdownMenu2><li><a href=# ng-repeat="country in vm.countries" ng-click=vm.selectCountry(country)>{{ country.name }}</a></li></ul></div>'}]);