(self.webpackChunkcondition_mongo_query=self.webpackChunkcondition_mongo_query||[]).push([[721],{6721:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ExerciceModule:()=>m});var o=r(8583),s=r(665),i=r(4330);class n{constructor(){this.name="",this.releaseDate="",this.franchise=!1,this.budget=0,this.worldwide=0,this.summary=""}}var l=r(7716);const a=[{path:"",component:(()=>{class e{constructor(){this.name=new s.NI(""),this.releaseDate=new s.NI(""),this.franchise=new s.NI(""),this.budget=new s.NI(""),this.worldwide=new s.NI(""),this.summary=new s.NI(""),this.movie=new n}ngOnInit(){this.updateControls()}updateClass(){this.movie.name="Avengers: Endgame",this.movie.releaseDate="26/04/2019",this.movie.franchise=!0,this.movie.budget=356e6,this.movie.worldwide=2797800564,this.movie.summary="After the devastating events of Avengers: Infinity War (2018), the universe is in ruins."}updateControls(){this.updateClass(),this.name.setValue(this.movie.name),this.releaseDate.setValue(this.movie.releaseDate),this.franchise.setValue(this.movie.franchise),this.budget.setValue(this.movie.budget),this.worldwide.setValue(this.movie.worldwide),this.summary.setValue(this.movie.summary)}resetControls(){this.name.setValue(null),this.releaseDate.setValue(null),this.franchise.setValue(null),this.budget.setValue(null),this.worldwide.setValue(null),this.summary.setValue(null)}getClass(){this.movie.name=this.name.value,this.movie.releaseDate=this.releaseDate.value,this.movie.franchise=this.franchise.value,this.movie.budget=this.budget.value,this.movie.worldwide=this.worldwide.value,this.movie.summary=this.summary.value}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=l.Xpm({type:e,selectors:[["app-form-control-class"]],decls:75,vars:15,consts:[[1,"card"],[1,"card-body"],[1,"row"],[1,"col-7"],[1,"card-title","text-center","text-info"],[1,"form-row"],[1,"form-group","col-md-12"],["for","name"],["type","text","id","name",1,"form-control",3,"formControl"],[1,"form-group","col-md-4"],["for","releaseDate"],["type","text","id","releaseDate",1,"form-control",3,"formControl"],["for","budget"],["type","text","id","budget",1,"form-control",3,"formControl"],["for","worldwide"],["type","text","id","worldwide",1,"form-control",3,"formControl"],["for","summary"],["id","summary","rows","2",1,"form-control",3,"formControl"],[1,"form-group"],[1,"form-check"],["type","checkbox","id","franchise",1,"form-check-input",3,"formControl"],["for","franchise",1,"form-check-label"],["type","submit",1,"btn","btn-info","mr-2",3,"click"],[1,"col-5"]],template:function(e,t){1&e&&(l.TgZ(0,"div",0),l.TgZ(1,"div",1),l.TgZ(2,"div",2),l.TgZ(3,"div",3),l.TgZ(4,"h5",4),l._uU(5,"FormControl with Class"),l.qZA(),l.TgZ(6,"form"),l.TgZ(7,"div",5),l.TgZ(8,"div",6),l.TgZ(9,"label",7),l._uU(10,"Name"),l.qZA(),l._UZ(11,"input",8),l.qZA(),l.qZA(),l.TgZ(12,"div",5),l.TgZ(13,"div",9),l.TgZ(14,"label",10),l._uU(15,"Date"),l.qZA(),l._UZ(16,"input",11),l.qZA(),l.TgZ(17,"div",9),l.TgZ(18,"label",12),l._uU(19,"Budget"),l.qZA(),l._UZ(20,"input",13),l.qZA(),l.TgZ(21,"div",9),l.TgZ(22,"label",14),l._uU(23,"Worlwide"),l.qZA(),l._UZ(24,"input",15),l.qZA(),l.qZA(),l.TgZ(25,"div",5),l.TgZ(26,"div",6),l.TgZ(27,"label",16),l._uU(28,"Summary"),l.qZA(),l._UZ(29,"textarea",17),l.qZA(),l.qZA(),l.TgZ(30,"div",18),l.TgZ(31,"div",19),l._UZ(32,"input",20),l.TgZ(33,"label",21),l._uU(34," Franchise "),l.qZA(),l.qZA(),l.qZA(),l.TgZ(35,"button",22),l.NdJ("click",function(){return t.resetControls()}),l._uU(36,"Reset Controls"),l.qZA(),l.TgZ(37,"button",22),l.NdJ("click",function(){return t.updateControls()}),l._uU(38,"Update Controls"),l.qZA(),l.TgZ(39,"button",22),l.NdJ("click",function(){return t.getClass()}),l._uU(40,"Get Class"),l.qZA(),l.qZA(),l.qZA(),l.TgZ(41,"div",23),l.TgZ(42,"h5",4),l._uU(43,"FormControl Result"),l.qZA(),l.TgZ(44,"strong"),l._uU(45,"Name"),l.qZA(),l._uU(46),l._UZ(47,"br"),l.TgZ(48,"strong"),l._uU(49,"Release Date"),l.qZA(),l._uU(50),l._UZ(51,"br"),l.TgZ(52,"strong"),l._uU(53,"Budget"),l.qZA(),l._uU(54),l._UZ(55,"br"),l.TgZ(56,"strong"),l._uU(57,"Worldwide"),l.qZA(),l._uU(58),l._UZ(59,"br"),l.TgZ(60,"strong"),l._uU(61,"Summary"),l.qZA(),l._uU(62),l._UZ(63,"br"),l.TgZ(64,"strong"),l._uU(65,"Franchise"),l.qZA(),l._uU(66),l._UZ(67,"br"),l.TgZ(68,"h5",4),l._uU(69,"Movie Class Result"),l.qZA(),l.TgZ(70,"strong"),l._uU(71,"Movie"),l.qZA(),l._uU(72),l.ALo(73,"json"),l._UZ(74,"br"),l.qZA(),l.qZA(),l.qZA(),l.qZA()),2&e&&(l.xp6(11),l.Q6J("formControl",t.name),l.xp6(5),l.Q6J("formControl",t.releaseDate),l.xp6(4),l.Q6J("formControl",t.budget),l.xp6(4),l.Q6J("formControl",t.worldwide),l.xp6(5),l.Q6J("formControl",t.summary),l.xp6(3),l.Q6J("formControl",t.franchise),l.xp6(14),l.hij(" : ",t.name.value,""),l.xp6(4),l.hij(" : ",t.releaseDate.value,""),l.xp6(4),l.hij(" : ",t.budget.value,""),l.xp6(4),l.hij(" : ",t.worldwide.value,""),l.xp6(4),l.hij(" : ",t.summary.value,""),l.xp6(4),l.hij(" : ",t.franchise.value,""),l.xp6(6),l.hij(" : ",l.lcZ(73,13,t.movie),""))},directives:[s._Y,s.JL,s.F,s.Fj,s.JJ,s.oH,s.Wl],pipes:[o.Ts],styles:[""]}),e})(),children:[]}];let u=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({imports:[[i.Bz.forChild(a)],i.Bz]}),e})(),m=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=l.oAB({type:e}),e.\u0275inj=l.cJS({providers:[],imports:[[o.ez,u,s.u5,s.UX]]}),e})()}}]);