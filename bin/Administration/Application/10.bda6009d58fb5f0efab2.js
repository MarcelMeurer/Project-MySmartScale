(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{kcag:function(n,l,t){"use strict";t.r(l);var e=t("CcnG"),o=t("TtU4"),a=t("Sy1n"),r=t("6qAK"),i=function(){function n(n){this.siteCollectionDashboards=[],this.siteCollectionDashboardsToDisplay=null,this.siteCollectionStatesCollection=[],this.app=n}return n.prototype.ngOnInit=function(){var n=this;this.app.globalDataService.getSiteStatistics.subscribe(function(l){if(null!=l&&null!=n.app.configuration){n.siteStatistics=l,n.siteStatistics.forEach(function(l,t){var e=n.app.configuration.SiteCollectionConfigurations.find(function(n){return n.Name===l.SiteCollection}),o={Index:t,IsManaged:!0,Name:l.SiteCollection,SortIndex:l.LastReportedSessionsCountAll};null==e&&(o.IsManaged=!1);var a=n.siteCollectionDashboards.findIndex(function(n){return n.Name===l.SiteCollection});a>-1?n.siteCollectionDashboards[a]=o:n.siteCollectionDashboards.push(o)}),n.siteCollectionDashboards=n.siteCollectionDashboards.sort(function(n,l){return n.SortIndex>l.SortIndex?-1:1}).sort(function(n,l){return n.IsManaged>l.IsManaged?-1:1});for(var t=0;t<n.siteCollectionDashboards.length;t++)n.siteCollectionDashboards[t].Index=t;null==n.siteCollectionDashboardsToDisplay&&(n.siteCollectionDashboardsToDisplay=n.siteCollectionDashboards),console.log("siteCollectionDashboardsToDisplay: ",n.siteCollectionDashboards)}})},n}(),s=(t("PQro"),function(){function n(n,l,t){this.theme=n,this.chartsComponent=l,this.app=t}n.prototype.runEngine=function(){this.data.command="RunNow",this.configurationDataService.setCommand(this.data)},n.prototype.ngOnInit=function(){var n=this;this.app.globalDataService.getCommand.subscribe(function(l){n.data=l})},n.prototype.ngOnDestroy=function(){}}(),function(){function n(n){this.alive=!0,this.app=n,this.progressInfoData=[{title:"Loading data...",value:0,activeProgress:0,description:"..."}]}return n.prototype.ngOnInit=function(){var n=this;console.log("Running for collection: ",this.SiteCollection.Name),this.app.globalDataService.getSiteStatistics.subscribe(function(l){if(0!=l.length&&null!=n.app.siteStatistics){if(n.siteStatistics=n.app.siteStatistics.find(function(l){return l.SiteCollection===n.SiteCollection.Name}),n.configuration=n.app.configuration.SiteCollectionConfigurations.find(function(l){return l.Name===n.SiteCollection.Name}),n.siteStatistics=n.app.siteStatistics.find(function(l){return l.SiteCollection===n.SiteCollection.Name}),null!=n.siteStatistics){var t="unknown",e="unknown",o=0,a=0,r=0,i="";if(null!=n.siteStatistics&&(o=(n.siteStatistics.CurrentWorkersActiveAzure+n.siteStatistics.CurrentWorkersActiveLocal)/n.siteStatistics.WorkerCount*100,t=n.siteStatistics.WorkerCount.toString()),null!=n.configuration){if(null!=n.siteStatistics){var s=n.siteStatistics.CurrentWorkersActiveAzure+n.siteStatistics.CurrentWorkersActiveLocal,c=s*n.configuration.ScaleParameters.SessionsPerWorker;e=c.toString()+" ("+s.toString()+" worker)",a=n.siteStatistics.LastReportedSessionsCountAll/c*100}r=n.siteStatistics.LastReportedSessionsCountAll/(n.siteStatistics.CurrentWorkersActiveAzure+n.siteStatistics.CurrentWorkersActiveLocal)/n.configuration.ScaleParameters.SessionsPerWorker*100,n.configuration.ScaleParameters.Enabled||(i+="\nScaling of this Site Collection is disabled.")}else i="\nThis Site Collection is not managed.";i+="\nLast updated on local time: "+n.siteStatistics.LastSessionDataLocal+" ("+n.siteStatistics.LocaTimeZone+")";var u=new Date;u.setMinutes(u.getMinutes()-3);var d=new Date(n.siteStatistics.LastSessionDataUtc),g=Date.UTC(d.getFullYear(),d.getMonth(),d.getDate(),d.getHours(),d.getMinutes());n.isOlder=new Date(g)<u,n.progressInfoData={Title:n.siteStatistics.SiteCollection,SessionCount:n.siteStatistics.LastReportedSessionsCountAll,SessionCountProgress:a,MaxSessions:e,WorkerActive:n.siteStatistics.CurrentWorkersActiveAzure+n.siteStatistics.CurrentWorkersActiveLocal,WorkerActiveProgress:o,MaxWorker:t,SessionsPerWorker:n.siteStatistics.LastReportedSessionsCountAll/(n.siteStatistics.CurrentWorkersActiveAzure+n.siteStatistics.CurrentWorkersActiveLocal),SessionsPerWorkerProgress:r,Note:i,description:"Session count"}}}else console.log("Not all data ready to display data. Maybe StatisitcData is missing. Skipping view for now.")})},n.prototype.ngOnDestroy=function(){},n}()),c=function(){return function(){}}(),u=t("pMnS"),d=t("fdPT"),g=t("MoCo"),h=t("cdOV"),p=t("9AJC"),m=t("8VM6"),C=t("Xoj0"),b=t("4/Py"),f=t("8DeE"),v=t("y9XU"),M=t("y1sj"),P=t("tThw"),O=t("Ti/5"),_=t("AS1V"),S=t("cMIS"),x=t("H1uz"),y=t("H6Y4"),D=t("byrr"),w=t("0HQI"),A=t("81d9"),k=t("ZYCi"),j=t("Ip0R"),I=t("t/Na"),T=t("XrUY"),R=e["\u0275crt"]({encapsulation:2,styles:[],data:{}});function L(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[],null,null,null,null,null)),(n()(),e["\u0275eld"](1,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),e["\u0275did"](2,212992,null,0,k.q,[k.b,e.ViewContainerRef,e.ComponentFactoryResolver,[8,null],e.ChangeDetectorRef],null,null)],function(n,l){n(l,2,0)},null)}function W(n){return e["\u0275vid"](0,[(n()(),e["\u0275and"](16777216,null,null,1,null,L)),e["\u0275did"](1,16384,null,0,j.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null)],function(n,l){n(l,1,0,l.component.siteCollectionDashboards.length>0)},null)}function N(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"ngx-charts",[],null,null,null,W,R)),e["\u0275prd"](135680,null,r.a,r.a,[I.c,T.c]),e["\u0275did"](2,114688,null,0,i,[a.a],null,null)],function(n,l){n(l,2,0)},null)}var z=e["\u0275ccf"]("ngx-charts",i,N,{},{},[]),E=t("4bAE"),F=t("mc3f"),U=t("YWWh"),Z=t("ZYjt"),H=t("ubjK"),V=t("4lCF"),Y=t("uw3t"),q=e["\u0275crt"]({encapsulation:0,styles:[[".nb-theme-default   [_nghost-%COMP%]   .progress-info[_ngcontent-%COMP%]{color:#2a2a2a;margin-top:2.5rem}.nb-theme-default   [_nghost-%COMP%]   .progress-info[_ngcontent-%COMP%]:first-child{margin-top:0}.nb-theme-default   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Exo;font-size:1.125rem;font-weight:600}.nb-theme-default   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:3rem;font-weight:300;margin-top:.5rem}.nb-theme-default   [_nghost-%COMP%]   .description[_ngcontent-%COMP%]{color:#a4abb3;margin-top:.5rem}.nb-theme-default   [_nghost-%COMP%]     nb-progress-bar{margin-top:.2rem}.nb-theme-default   [_nghost-%COMP%]     nb-progress-bar .progress-container{height:.8rem;border-radius:0}.nb-theme-default   [_nghost-%COMP%]     nb-progress-bar .progress-value{height:.6rem;background:-webkit-gradient(linear,left top,right top,from(#3edd81),to(#3bddaf));background:linear-gradient(90deg,#3edd81 0,#3bddaf 100%)}.nb-theme-cosmic   [_nghost-%COMP%]   .progress-info[_ngcontent-%COMP%]{color:#fff;margin-top:2.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .progress-info[_ngcontent-%COMP%]:first-child{margin-top:0}.nb-theme-cosmic   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Exo;font-size:1.125rem;font-weight:600}.nb-theme-cosmic   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:3rem;font-weight:300;margin-top:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]   .description[_ngcontent-%COMP%]{color:#a1a1e5;margin-top:.5rem}.nb-theme-cosmic   [_nghost-%COMP%]     nb-progress-bar{margin-top:.2rem}.nb-theme-cosmic   [_nghost-%COMP%]     nb-progress-bar .progress-container{height:.8rem;border-radius:0}.nb-theme-cosmic   [_nghost-%COMP%]     nb-progress-bar .progress-value{height:.6rem;background:-webkit-gradient(linear,left top,right top,from(#00c7c7),to(#00d977));background:linear-gradient(90deg,#00c7c7 0,#00d977 100%);-webkit-box-shadow:0 .2rem #00977e;box-shadow:0 .2rem #00977e}.nb-theme-corporate   [_nghost-%COMP%]   .progress-info[_ngcontent-%COMP%]{color:#181818;margin-top:2.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .progress-info[_ngcontent-%COMP%]:first-child{margin-top:0}.nb-theme-corporate   [_nghost-%COMP%]   .title[_ngcontent-%COMP%]{font-family:Exo;font-size:1.125rem;font-weight:600}.nb-theme-corporate   [_nghost-%COMP%]   .value[_ngcontent-%COMP%]{font-size:3rem;font-weight:300;margin-top:.5rem}.nb-theme-corporate   [_nghost-%COMP%]   .description[_ngcontent-%COMP%]{color:#a4abb3;margin-top:.5rem}.nb-theme-corporate   [_nghost-%COMP%]     nb-progress-bar{margin-top:.2rem}.nb-theme-corporate   [_nghost-%COMP%]     nb-progress-bar .progress-container{height:.8rem;border-radius:0}.nb-theme-corporate   [_nghost-%COMP%]     nb-progress-bar .progress-value{background:-webkit-gradient(linear,left top,right top,from(#ff9f6f),to(#ff8b97));background:linear-gradient(90deg,#ff9f6f 0,#ff8b97 100%);height:100%}"]],data:{}});function J(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"i",[["title","Data lacks. There are not updated data in the last minutes. Maybe the workers are powered down or the agents cannot reached the endpoint."]],[[8,"innerHTML",1]],null,null,null,null)),e["\u0275pod"](1,{animationType:0}),e["\u0275ppd"](2,2)],null,function(n,l){var t=e["\u0275unv"](l,0,0,n(l,2,0,e["\u0275nov"](l.parent,0),"alert-circle",n(l,1,0,"pulse")));n(l,0,0,t)})}function K(n){return e["\u0275vid"](0,[e["\u0275pid"](0,U.a,[Z.c]),e["\u0275pid"](0,H.a,[]),(n()(),e["\u0275eld"](2,0,null,null,35,"nb-card",[["size","medium"]],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,E.f,E.b)),e["\u0275did"](3,49152,null,0,F.b,[],{setSize:[0,"setSize"]},null),(n()(),e["\u0275eld"](4,0,null,1,33,"nb-card-body",[],null,null,null,E.e,E.a)),e["\u0275did"](5,49152,null,0,F.a,[],null,null),(n()(),e["\u0275and"](16777216,null,0,1,null,J)),e["\u0275did"](7,16384,null,0,j.NgIf,[e.ViewContainerRef,e.TemplateRef],{ngIf:[0,"ngIf"]},null),(n()(),e["\u0275eld"](8,0,null,0,29,"div",[["class","progress-info"]],null,null,null,null,null)),(n()(),e["\u0275eld"](9,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(n()(),e["\u0275ted"](10,null,["",""])),(n()(),e["\u0275eld"](11,0,null,null,2,"div",[["class","value"]],null,null,null,null,null)),(n()(),e["\u0275ted"](12,null,["",""])),e["\u0275ppd"](13,1),(n()(),e["\u0275eld"](14,0,null,null,1,"nb-progress-bar",[],null,null,null,V.b,V.a)),e["\u0275did"](15,49152,null,0,Y.a,[],{value:[0,"value"]},null),(n()(),e["\u0275eld"](16,0,null,null,2,"div",[["class","description"]],null,null,null,null,null)),(n()(),e["\u0275eld"](17,0,null,null,1,"bdi",[],null,null,null,null,null)),(n()(),e["\u0275ted"](18,null,["Session count from max. ",""])),(n()(),e["\u0275eld"](19,0,null,null,2,"div",[["class","value"]],null,null,null,null,null)),(n()(),e["\u0275ted"](20,null,["",""])),e["\u0275ppd"](21,1),(n()(),e["\u0275eld"](22,0,null,null,1,"nb-progress-bar",[],null,null,null,V.b,V.a)),e["\u0275did"](23,49152,null,0,Y.a,[],{value:[0,"value"]},null),(n()(),e["\u0275eld"](24,0,null,null,2,"div",[["class","description"]],null,null,null,null,null)),(n()(),e["\u0275eld"](25,0,null,null,1,"bdi",[],null,null,null,null,null)),(n()(),e["\u0275ted"](26,null,["Active worker from ",""])),(n()(),e["\u0275eld"](27,0,null,null,2,"div",[["class","value"]],null,null,null,null,null)),(n()(),e["\u0275ted"](28,null,["",""])),e["\u0275ppd"](29,1),(n()(),e["\u0275eld"](30,0,null,null,1,"nb-progress-bar",[],null,null,null,V.b,V.a)),e["\u0275did"](31,49152,null,0,Y.a,[],{value:[0,"value"]},null),(n()(),e["\u0275eld"](32,0,null,null,2,"div",[["class","description"]],null,null,null,null,null)),(n()(),e["\u0275eld"](33,0,null,null,1,"bdi",[],null,null,null,null,null)),(n()(),e["\u0275ted"](-1,null,["Average sessions per worker"])),(n()(),e["\u0275eld"](35,0,null,null,2,"div",[["class","description"]],null,null,null,null,null)),(n()(),e["\u0275eld"](36,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275ted"](37,null,["",""]))],function(n,l){var t=l.component;n(l,3,0,"medium"),n(l,7,0,t.isOlder),n(l,15,0,t.progressInfoData.SessionCountProgress),n(l,23,0,t.progressInfoData.WorkerActiveProgress),n(l,31,0,t.progressInfoData.SessionsPerWorkerProgress)},function(n,l){var t=l.component;n(l,2,1,[e["\u0275nov"](l,3).xxsmall,e["\u0275nov"](l,3).xsmall,e["\u0275nov"](l,3).small,e["\u0275nov"](l,3).medium,e["\u0275nov"](l,3).large,e["\u0275nov"](l,3).xlarge,e["\u0275nov"](l,3).xxlarge,e["\u0275nov"](l,3).active,e["\u0275nov"](l,3).disabled,e["\u0275nov"](l,3).primary,e["\u0275nov"](l,3).info,e["\u0275nov"](l,3).success,e["\u0275nov"](l,3).warning,e["\u0275nov"](l,3).danger,e["\u0275nov"](l,3).hasAccent,e["\u0275nov"](l,3).primaryAccent,e["\u0275nov"](l,3).infoAccent,e["\u0275nov"](l,3).successAccent,e["\u0275nov"](l,3).warningAccent,e["\u0275nov"](l,3).dangerAccent,e["\u0275nov"](l,3).activeAccent,e["\u0275nov"](l,3).disabledAccent]),n(l,10,0,t.progressInfoData.Title);var o=e["\u0275unv"](l,12,0,n(l,13,0,e["\u0275nov"](l,1),t.progressInfoData.SessionCount));n(l,12,0,o),n(l,18,0,t.progressInfoData.MaxSessions);var a=e["\u0275unv"](l,20,0,n(l,21,0,e["\u0275nov"](l,1),t.progressInfoData.WorkerActive));n(l,20,0,a),n(l,26,0,t.progressInfoData.MaxWorker);var r=e["\u0275unv"](l,28,0,n(l,29,0,e["\u0275nov"](l,1),t.progressInfoData.SessionsPerWorker));n(l,28,0,r),n(l,37,0,t.progressInfoData.Note)})}var B=function(){function n(n){this.siteCollectionDashboardsToDisplay=null,this.chartsComponent=n}return n.prototype.ngOnInit=function(){this.siteCollectionDashboardsToDisplay=this.chartsComponent.siteCollectionDashboardsToDisplay},n}(),G=e["\u0275crt"]({encapsulation:0,styles:[[""]],data:{}});function X(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,8,"div",[["class","col-lg-6"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,7,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,E.f,E.b)),e["\u0275did"](2,49152,null,0,F.b,[],null,null),(n()(),e["\u0275eld"](3,0,null,0,1,"nb-card-header",[],null,null,null,E.h,E.d)),e["\u0275did"](4,49152,null,0,F.d,[],null,null),(n()(),e["\u0275eld"](5,0,null,1,3,"nb-card-body",[],null,null,null,E.e,E.a)),e["\u0275did"](6,49152,null,0,F.a,[],null,null),(n()(),e["\u0275eld"](7,0,null,0,1,"ngx-sitecollection-tile",[],null,null,null,K,q)),e["\u0275did"](8,245760,null,0,s,[a.a],{SiteCollection:[0,"SiteCollection"]},null)],function(n,l){n(l,8,0,l.context.$implicit)},function(n,l){n(l,1,1,[e["\u0275nov"](l,2).xxsmall,e["\u0275nov"](l,2).xsmall,e["\u0275nov"](l,2).small,e["\u0275nov"](l,2).medium,e["\u0275nov"](l,2).large,e["\u0275nov"](l,2).xlarge,e["\u0275nov"](l,2).xxlarge,e["\u0275nov"](l,2).active,e["\u0275nov"](l,2).disabled,e["\u0275nov"](l,2).primary,e["\u0275nov"](l,2).info,e["\u0275nov"](l,2).success,e["\u0275nov"](l,2).warning,e["\u0275nov"](l,2).danger,e["\u0275nov"](l,2).hasAccent,e["\u0275nov"](l,2).primaryAccent,e["\u0275nov"](l,2).infoAccent,e["\u0275nov"](l,2).successAccent,e["\u0275nov"](l,2).warningAccent,e["\u0275nov"](l,2).dangerAccent,e["\u0275nov"](l,2).activeAccent,e["\u0275nov"](l,2).disabledAccent])})}function $(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,2,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275and"](16777216,null,null,1,null,X)),e["\u0275did"](2,278528,null,0,j.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null)],function(n,l){n(l,2,0,l.component.siteCollectionDashboardsToDisplay)},null)}function Q(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ngx-overview-tiles",[],null,null,null,$,G)),e["\u0275did"](1,114688,null,0,B,[i],null,null)],function(n,l){n(l,1,0)},null)}var nn=e["\u0275ccf"]("ngx-overview-tiles",B,Q,{},{},[]),ln=t("4GxJ"),tn=t("mcnf"),en=t("SU4i"),on=t("FZvA"),an=function(){function n(n,l,t){var e=this;this.theme=t,this.selectedSiteCollection="",this.siteCollectionDashboardsToDisplay=null,this.chartsComponent=n,this.app=l,this.themeSubscription=this.theme.getJsTheme(),this.themeSubscription=this.theme.getJsTheme().subscribe(function(n){e.colors=n.variables,e.chartjs=n.variables.chartjs})}return n.prototype.toggleLoadingAnimation=function(){var n=this;this.loading=!0,setTimeout(function(){return n.loading=!1},3e3)},n.prototype.ngOnInit=function(){var n=this;console.log("2"),this.chartDelay=1e3,this.setOptions(this.chartDelay),this.siteCollectionDashboardsToDisplay=this.chartsComponent.siteCollectionDashboardsToDisplay,this.siteCollectionDashboardsToDisplay.length>0&&this.onChange_selectedSiteCollection(this.siteCollectionDashboardsToDisplay[0].Name),this.app.globalDataService.getConfiguration.subscribe(function(l){null!=l&&(n.configuration=l)}),this.loading=!0,this.app.globalDataService.getSiteCollectionStatesRunning.subscribe(function(l){if(console.log("Incomming data"),n.loading=!1,null!=l){var t=l.find(function(l){return l.SiteCollection==n.selectedSiteCollection}).SiteCollectionStates,e=n.configuration.SiteCollectionConfigurations.find(function(l){return l.Name==n.selectedSiteCollection}),a=1;null!=e&&(a=e.ScaleParameters.SessionsPerWorker),n.setOptions(n.chartDelay);var r=[],i=[],s=[],c=[];t.forEach(function(n){r.push(n.LocalTime),i.push(n.WorkerActive*a),s.push(n.SessionCountAll),c.push(n.SessionCountConnected)}),n.data={labels:r,datasets:[{data:i,label:"Worker capacity",backgroundColor:o.m.hexToRgbA(n.colors.primary,.3),borderColor:n.colors.primary,borderWidth:1},{data:s,label:"Session count - All",backgroundColor:o.m.hexToRgbA(n.colors.danger,.3),borderColor:n.colors.danger,borderWidth:.8},{data:c,label:"Session count - Active",backgroundColor:o.m.hexToRgbA(n.colors.info,.3),borderColor:n.colors.info,borderWidth:.5}]},n.chartDelay=0}})},n.prototype.onChange_selectedSiteCollection=function(n){this.selectedSiteCollection=n,console.log("SiteCollection selection changed"),this.loading=!0,this.chartDelay=1e3,this.app.globalDataService.initSiteCollectionStatesRunning(this.selectedSiteCollection)},n.prototype.setOptions=function(n){t("aJAY"),this.options={elements:{point:{radius:0}},animation:{duration:n},responsive:!0,maintainAspectRatio:!1,scales:{xAxes:[{gridLines:{display:!0,color:this.chartjs.axisLineColor},ticks:{fontColor:this.chartjs.textColor}}],yAxes:[{gridLines:{display:!0,color:this.chartjs.axisLineColor},ticks:{fontColor:this.chartjs.textColor}}]},legend:{labels:{fontColor:this.chartjs.textColor}}}},n}(),rn=t("/PiY"),sn=e["\u0275crt"]({encapsulation:0,styles:[[".nb-theme-default   [_nghost-%COMP%]   chart[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%], .nb-theme-default   [_nghost-%COMP%]   ngx-overview-charts[_ngcontent-%COMP%]{display:block;height:456px;width:100%}.nb-theme-default   [_nghost-%COMP%]   chart[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart, .nb-theme-default   [_nghost-%COMP%]   ngx-overview-charts[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   chart[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%], .nb-theme-cosmic   [_nghost-%COMP%]   ngx-overview-charts[_ngcontent-%COMP%]{display:block;height:456px;width:100%}.nb-theme-cosmic   [_nghost-%COMP%]   chart[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart, .nb-theme-cosmic   [_nghost-%COMP%]   ngx-overview-charts[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   chart[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%], .nb-theme-corporate   [_nghost-%COMP%]   ngx-overview-charts[_ngcontent-%COMP%]{display:block;height:456px;width:100%}.nb-theme-corporate   [_nghost-%COMP%]   chart[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-bar-horizontal[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-line[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-multiple-xaxis[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-pie[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-chartjs-radar[_ngcontent-%COMP%]     chart, .nb-theme-corporate   [_nghost-%COMP%]   ngx-overview-charts[_ngcontent-%COMP%]     chart{display:block;height:100%;width:100%}"]],data:{}});function cn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"li",[["class","dropdown-item"]],null,[[null,"click"]],function(n,l,t){var e=!0;return"click"===l&&(e=!1!==n.component.onChange_selectedSiteCollection(n.context.$implicit.Name)&&e),e},null,null)),(n()(),e["\u0275ted"](1,null,[" "," "]))],null,function(n,l){n(l,1,0,l.context.$implicit.Name)})}function un(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,13,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](1,0,null,null,12,"div",[["class","col-lg-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](2,0,null,null,11,"div",[["class","dropdown"],["ngbDropdown",""]],[[2,"show",null]],null,null,null,null)),e["\u0275did"](3,212992,null,2,ln.t,[e.ChangeDetectorRef,ln.u,j.DOCUMENT,e.NgZone],null,null),e["\u0275qud"](335544320,1,{_menu:0}),e["\u0275qud"](335544320,2,{_anchor:0}),(n()(),e["\u0275eld"](6,0,null,null,3,"button",[["aria-haspopup","true"],["class","btn btn-primary dropdown-toggle"],["ngbDropdownToggle",""],["type","button"]],[[1,"aria-expanded",0]],[[null,"click"]],function(n,l,t){var o=!0;return"click"===l&&(o=!1!==e["\u0275nov"](n,7).toggleOpen()&&o),o},null,null)),e["\u0275did"](7,16384,null,0,ln.fb,[ln.t,e.ElementRef],null,null),e["\u0275prd"](2048,[[2,4]],ln.eb,null,[ln.fb]),(n()(),e["\u0275ted"](9,null,[" "," "])),(n()(),e["\u0275eld"](10,0,null,null,3,"ul",[["class","dropdown-menu"],["ngbDropdownMenu",""]],[[2,"dropdown-menu",null],[2,"show",null],[1,"x-placement",0]],null,null,null,null)),e["\u0275did"](11,16384,[[1,4]],0,ln.db,[ln.t,e.ElementRef,e.Renderer2],null,null),(n()(),e["\u0275and"](16777216,null,null,1,null,cn)),e["\u0275did"](13,278528,null,0,j.NgForOf,[e.ViewContainerRef,e.TemplateRef,e.IterableDiffers],{ngForOf:[0,"ngForOf"]},null),(n()(),e["\u0275eld"](14,0,null,null,0,"br",[],null,null,null,null,null)),(n()(),e["\u0275eld"](15,0,null,null,11,"div",[["class","row"]],null,null,null,null,null)),(n()(),e["\u0275eld"](16,0,null,null,10,"div",[["class","col-lg-12"]],null,null,null,null,null)),(n()(),e["\u0275eld"](17,0,null,null,9,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,E.f,E.b)),e["\u0275did"](18,49152,null,0,F.b,[],null,null),(n()(),e["\u0275eld"](19,0,null,0,2,"nb-card-header",[],null,null,null,E.h,E.d)),e["\u0275did"](20,49152,null,0,F.d,[],null,null),(n()(),e["\u0275ted"](-1,0,["Chart"])),(n()(),e["\u0275eld"](22,0,null,1,4,"nb-card-body",[],null,null,null,E.e,E.a)),e["\u0275did"](23,49152,null,0,F.a,[],null,null),(n()(),e["\u0275eld"](24,16777216,null,0,2,"chart",[["type","line"]],[[2,"nb-spinner-container",null]],null,null,tn.b,tn.a)),e["\u0275did"](25,81920,null,0,en.a,[e.ViewContainerRef,e.ComponentFactoryResolver,e.Renderer2,e.ElementRef],{nbSpinner:[0,"nbSpinner"]},null),e["\u0275did"](26,638976,null,0,on.ChartComponent,[e.ElementRef],{type:[0,"type"],data:[1,"data"],options:[2,"options"]},null)],function(n,l){var t=l.component;n(l,3,0),n(l,13,0,t.siteCollectionDashboardsToDisplay),n(l,25,0,t.loading),n(l,26,0,"line",t.data,t.options)},function(n,l){var t=l.component;n(l,2,0,e["\u0275nov"](l,3).isOpen()),n(l,6,0,e["\u0275nov"](l,7).dropdown.isOpen()),n(l,9,0,t.selectedSiteCollection),n(l,10,0,!0,e["\u0275nov"](l,11).dropdown.isOpen(),e["\u0275nov"](l,11).placement),n(l,17,1,[e["\u0275nov"](l,18).xxsmall,e["\u0275nov"](l,18).xsmall,e["\u0275nov"](l,18).small,e["\u0275nov"](l,18).medium,e["\u0275nov"](l,18).large,e["\u0275nov"](l,18).xlarge,e["\u0275nov"](l,18).xxlarge,e["\u0275nov"](l,18).active,e["\u0275nov"](l,18).disabled,e["\u0275nov"](l,18).primary,e["\u0275nov"](l,18).info,e["\u0275nov"](l,18).success,e["\u0275nov"](l,18).warning,e["\u0275nov"](l,18).danger,e["\u0275nov"](l,18).hasAccent,e["\u0275nov"](l,18).primaryAccent,e["\u0275nov"](l,18).infoAccent,e["\u0275nov"](l,18).successAccent,e["\u0275nov"](l,18).warningAccent,e["\u0275nov"](l,18).dangerAccent,e["\u0275nov"](l,18).activeAccent,e["\u0275nov"](l,18).disabledAccent]),n(l,24,0,e["\u0275nov"](l,25).isSpinnerExist)})}function dn(n){return e["\u0275vid"](0,[(n()(),e["\u0275eld"](0,0,null,null,1,"ngx-overview-charts",[],null,null,null,un,sn)),e["\u0275did"](1,114688,null,0,an,[i,a.a,rn.a],null,null)],function(n,l){n(l,1,0)},null)}var gn=e["\u0275ccf"]("ngx-overview-charts",an,dn,{},{},[]),hn=t("7Z8E"),pn=t("gIcY"),mn=t("nA+Y"),Cn=t("eDkP"),bn=t("Fzqc"),fn=t("U4uc"),vn=t("AKna"),Mn=t("Bvtr"),Pn=t("gpGP"),On=t("Se1k"),_n=t("k/Rj"),Sn=t("P8+w"),xn=t("Ku2q"),yn=t("w//a"),Dn=t("niCt"),wn=t("UIEa"),An=t("o0Gp"),kn=t("M18m"),jn=t("zTyf"),In=t("TcUH"),Tn=t("4c35"),Rn=t("dWZg"),Ln=t("qAlS"),Wn=t("hle7"),Nn=t("lOUe"),zn=t("yHPJ"),En=t("wZaT"),Fn=t("GGqN"),Un=t("rNHn"),Zn=t("tSKX"),Hn=t("uLH1"),Vn=t("WCnA"),Yn=t("DiBj"),qn=t("6wBL"),Jn=t("TvC7"),Kn=t("7qhI"),Bn=t("aTFX"),Gn=t("7fDR"),Xn=t("y3Bk"),$n=t("IR2U"),Qn=t("sE+l"),nl=t("V6uK"),ll=t("9mtI"),tl=t("1zNU"),el=t("SdSL"),ol=t("GF5i"),al=t("3Zza"),rl=t("ZMzl"),il=t("tt4K"),sl=t("eBEu"),cl=t("kmuJ"),ul=t("MMI5"),dl=t("vTDv"),gl=function(){return function(){}}(),hl=t("CVdl"),pl=t("/qvy"),ml=t("b3E/"),Cl=t("w6+6"),bl=t("IZET"),fl=t("1jDe"),vl=t("T8sE"),Ml=t("skic"),Pl=t("KeWI"),Ol=t("UsZU"),_l=t("50k4"),Sl=t("o56U"),xl=t("U3vz"),yl=t("r6ye"),Dl=t("KktT"),wl=t("eby4"),Al=t("AE88");t.d(l,"ChartsModuleNgFactory",function(){return kl});var kl=e["\u0275cmf"](c,[],function(n){return e["\u0275mod"]([e["\u0275mpd"](512,e.ComponentFactoryResolver,e["\u0275CodegenComponentFactoryResolver"],[[8,[u.a,d.a,g.a,h.a,p.a,p.b,p.i,p.e,p.f,p.g,p.h,m.a,C.a,b.a,f.a,f.b,v.a,M.a,P.a,O.a,_.a,S.a,x.a,y.a,D.a,w.a,A.a,z,nn,gn,hn.a]],[3,e.ComponentFactoryResolver],e.NgModuleRef]),e["\u0275mpd"](4608,j.NgLocalization,j.NgLocaleLocalization,[e.LOCALE_ID,[2,j["\u0275angular_packages_common_common_a"]]]),e["\u0275mpd"](4608,pn["\u0275angular_packages_forms_forms_j"],pn["\u0275angular_packages_forms_forms_j"],[]),e["\u0275mpd"](4608,pn.FormBuilder,pn.FormBuilder,[]),e["\u0275mpd"](4608,mn.a,mn.a,[k.l]),e["\u0275mpd"](4608,j.LocationStrategy,j.PathLocationStrategy,[j.PlatformLocation,[2,j.APP_BASE_HREF]]),e["\u0275mpd"](4608,j.Location,j.Location,[j.LocationStrategy]),e["\u0275mpd"](4608,Cn.d,Cn.d,[Cn.k,Cn.f,e.ComponentFactoryResolver,Cn.i,Cn.g,e.Injector,e.NgZone,j.DOCUMENT,bn.b,[2,j.Location]]),e["\u0275mpd"](5120,Cn.l,Cn.m,[Cn.d]),e["\u0275mpd"](4608,fn.a,fn.a,[]),e["\u0275mpd"](4608,ln.x,ln.x,[e.ComponentFactoryResolver,e.Injector,ln.Y,ln.y]),e["\u0275mpd"](4608,vn.a,Mn.a,[e.LOCALE_ID]),e["\u0275mpd"](4608,j.DatePipe,j.DatePipe,[e.LOCALE_ID]),e["\u0275mpd"](4608,Pn.a,Pn.a,[vn.a]),e["\u0275mpd"](4608,On.a,On.a,[e.ApplicationRef,e.ComponentFactoryResolver,e.Injector]),e["\u0275mpd"](4608,_n.a,_n.a,[On.a]),e["\u0275mpd"](1073742336,j.CommonModule,j.CommonModule,[]),e["\u0275mpd"](1073742336,pn["\u0275angular_packages_forms_forms_bc"],pn["\u0275angular_packages_forms_forms_bc"],[]),e["\u0275mpd"](1073742336,pn.FormsModule,pn.FormsModule,[]),e["\u0275mpd"](1073742336,pn.ReactiveFormsModule,pn.ReactiveFormsModule,[]),e["\u0275mpd"](1073742336,k.p,k.p,[[2,k.v],[2,k.l]]),e["\u0275mpd"](1073742336,Sn.a,Sn.a,[]),e["\u0275mpd"](1073742336,xn.a,xn.a,[]),e["\u0275mpd"](1073742336,yn.a,yn.a,[]),e["\u0275mpd"](1073742336,Dn.a,Dn.a,[]),e["\u0275mpd"](1073742336,wn.a,wn.a,[]),e["\u0275mpd"](1073742336,An.a,An.a,[]),e["\u0275mpd"](1073742336,kn.a,kn.a,[]),e["\u0275mpd"](1073742336,jn.a,jn.a,[]),e["\u0275mpd"](1073742336,In.a,In.a,[]),e["\u0275mpd"](1073742336,bn.a,bn.a,[]),e["\u0275mpd"](1073742336,Tn.f,Tn.f,[]),e["\u0275mpd"](1073742336,Rn.b,Rn.b,[]),e["\u0275mpd"](1073742336,Ln.b,Ln.b,[]),e["\u0275mpd"](1073742336,Cn.h,Cn.h,[]),e["\u0275mpd"](1073742336,Wn.a,Wn.a,[]),e["\u0275mpd"](1073742336,Nn.a,Nn.a,[]),e["\u0275mpd"](1073742336,zn.a,zn.a,[]),e["\u0275mpd"](1073742336,En.a,En.a,[]),e["\u0275mpd"](1073742336,Fn.a,Fn.a,[]),e["\u0275mpd"](1073742336,Un.a,Un.a,[]),e["\u0275mpd"](1073742336,Zn.a,Zn.a,[]),e["\u0275mpd"](1073742336,Hn.a,Hn.a,[]),e["\u0275mpd"](1073742336,ln.c,ln.c,[]),e["\u0275mpd"](1073742336,ln.g,ln.g,[]),e["\u0275mpd"](1073742336,ln.h,ln.h,[]),e["\u0275mpd"](1073742336,ln.l,ln.l,[]),e["\u0275mpd"](1073742336,ln.n,ln.n,[]),e["\u0275mpd"](1073742336,ln.s,ln.s,[]),e["\u0275mpd"](1073742336,ln.v,ln.v,[]),e["\u0275mpd"](1073742336,ln.z,ln.z,[]),e["\u0275mpd"](1073742336,ln.D,ln.D,[]),e["\u0275mpd"](1073742336,ln.E,ln.E,[]),e["\u0275mpd"](1073742336,ln.H,ln.H,[]),e["\u0275mpd"](1073742336,ln.L,ln.L,[]),e["\u0275mpd"](1073742336,ln.O,ln.O,[]),e["\u0275mpd"](1073742336,ln.S,ln.S,[]),e["\u0275mpd"](1073742336,ln.T,ln.T,[]),e["\u0275mpd"](1073742336,ln.U,ln.U,[]),e["\u0275mpd"](1073742336,ln.A,ln.A,[]),e["\u0275mpd"](1073742336,Vn.a,Vn.a,[]),e["\u0275mpd"](1073742336,Yn.a,Yn.a,[]),e["\u0275mpd"](1073742336,qn.a,qn.a,[]),e["\u0275mpd"](1073742336,Jn.a,Jn.a,[]),e["\u0275mpd"](1073742336,Kn.a,Kn.a,[]),e["\u0275mpd"](1073742336,Bn.a,Bn.a,[]),e["\u0275mpd"](1073742336,Gn.a,Gn.a,[]),e["\u0275mpd"](1073742336,Xn.a,Xn.a,[]),e["\u0275mpd"](1073742336,$n.a,$n.a,[]),e["\u0275mpd"](1073742336,Qn.a,Qn.a,[]),e["\u0275mpd"](1073742336,nl.a,nl.a,[]),e["\u0275mpd"](1073742336,ll.a,ll.a,[]),e["\u0275mpd"](1073742336,tl.a,tl.a,[]),e["\u0275mpd"](1073742336,el.a,el.a,[]),e["\u0275mpd"](1073742336,ol.a,ol.a,[]),e["\u0275mpd"](1073742336,al.a,al.a,[]),e["\u0275mpd"](1073742336,rl.a,rl.a,[]),e["\u0275mpd"](1073742336,il.a,il.a,[]),e["\u0275mpd"](1073742336,sl.a,sl.a,[]),e["\u0275mpd"](1073742336,cl.a,cl.a,[]),e["\u0275mpd"](1073742336,ul.a,ul.a,[]),e["\u0275mpd"](1073742336,dl.a,dl.a,[]),e["\u0275mpd"](1073742336,gl,gl,[]),e["\u0275mpd"](1073742336,hl.a,hl.a,[]),e["\u0275mpd"](1073742336,pl.a,pl.a,[]),e["\u0275mpd"](1073742336,ml.a,ml.a,[]),e["\u0275mpd"](1073742336,Cl.a,Cl.a,[]),e["\u0275mpd"](1073742336,bl.a,bl.a,[]),e["\u0275mpd"](1073742336,fl.a,fl.a,[]),e["\u0275mpd"](1073742336,vl.a,vl.a,[]),e["\u0275mpd"](1073742336,Ml.a,Ml.a,[]),e["\u0275mpd"](1073742336,Pl.a,Pl.a,[]),e["\u0275mpd"](1073742336,Ol.a,Ol.a,[]),e["\u0275mpd"](1073742336,_l.a,_l.a,[]),e["\u0275mpd"](1073742336,Sl.a,Sl.a,[]),e["\u0275mpd"](1073742336,xl.a,xl.a,[]),e["\u0275mpd"](1073742336,yl.a,yl.a,[]),e["\u0275mpd"](1073742336,Dl.a,Dl.a,[]),e["\u0275mpd"](1073742336,wl.a,wl.a,[]),e["\u0275mpd"](1073742336,Al.ChartModule,Al.ChartModule,[]),e["\u0275mpd"](1073742336,c,c,[]),e["\u0275mpd"](1024,k.j,function(){return[[{path:"",component:i,children:[{path:"tiles",component:B},{path:"charts",component:an}]}]]},[])])})}}]);