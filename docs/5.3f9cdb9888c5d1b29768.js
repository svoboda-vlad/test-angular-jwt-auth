(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{FScs:function(t,e,n){"use strict";n.r(e),n.d(e,"TestModule",(function(){return p}));var s=n("ofXK"),r=n("tyNb"),c=n("fXoL"),o=n("AytR"),i=n("tk/3");let b=(()=>{class t{constructor(t){this.http=t,this.testUrl="test"}getTest(){return this.http.get(o.a.SERVER_URL+this.testUrl)}}return t.\u0275fac=function(e){return new(e||t)(c.Ib(i.a))},t.\u0275prov=c.zb({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();function u(t,e){if(1&t&&(c.Gb(0,"div"),c.Ub(1),c.Fb()),2&t){const t=e.ngIf;c.ub(1),c.Vb(" ",t.id,", ",t.text,"\n")}}const a=[{path:"",component:(()=>{class t{constructor(t){this.testService=t}ngOnInit(){this.test=this.testService.getTest()}}return t.\u0275fac=function(e){return new(e||t)(c.Db(b))},t.\u0275cmp=c.xb({type:t,selectors:[["taja-test"]],decls:4,vars:3,consts:[[4,"ngIf"]],template:function(t,e){1&t&&(c.Gb(0,"div"),c.Ub(1,"ID, Text"),c.Fb(),c.Tb(2,u,2,2,"div",0),c.Nb(3,"async")),2&t&&(c.ub(2),c.Pb("ngIf",c.Ob(3,1,e.test)))},directives:[s.j],pipes:[s.b],styles:[""]}),t})()}];let f=(()=>{class t{}return t.\u0275mod=c.Bb({type:t}),t.\u0275inj=c.Ab({factory:function(e){return new(e||t)},imports:[[r.b.forChild(a)],r.b]}),t})(),p=(()=>{class t{}return t.\u0275mod=c.Bb({type:t}),t.\u0275inj=c.Ab({factory:function(e){return new(e||t)},imports:[[s.c,f]]}),t})()}}]);