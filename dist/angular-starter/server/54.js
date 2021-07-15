exports.id=54,exports.ids=[54],exports.modules={4054:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ExerciceModule:()=>ExerciceModule});var common=__webpack_require__(8583),fesm2015_forms=__webpack_require__(665),router=__webpack_require__(4152),core=__webpack_require__(639);class PrettyJsonPipe{transform(value,...args){return JSON.stringify(value,null,2).replace(/ /g,"&nbsp;").replace(/\n/g,"<br/>")}}PrettyJsonPipe.\u0275fac=function PrettyJsonPipe_Factory(t){return new(t||PrettyJsonPipe)},PrettyJsonPipe.\u0275pipe=core.Yjl({name:"prettyjson",type:PrettyJsonPipe,pure:!0});class ExerciceComponent{constructor(fb){this.fb=fb,this.name=new fesm2015_forms.NI(""),this.email=new fesm2015_forms.NI(""),this.job=new fesm2015_forms.NI(""),this.comment=new fesm2015_forms.NI(""),this.friend01=new fesm2015_forms.NI(""),this.friend02=new fesm2015_forms.NI(""),this.exampleForm2=new fesm2015_forms.cw({name:new fesm2015_forms.NI(""),email:new fesm2015_forms.NI(""),job:new fesm2015_forms.NI(""),comment:new fesm2015_forms.NI("")}),this.exampleForm3=this.fb.group({name:[""],email:[""],job:[""],comment:[""],friends:this.fb.array([])}),this.onResetForm1(),this.onResetForm2(),this.onResetForm3()}ngOnInit(){}onResetForm1(){this.name.setValue("Darth Vader"),this.email.setValue("darthvader@starwars.com"),this.job.setValue("Sith"),this.comment.setValue("Father of Luke Skywalker"),this.friend01.setValue("friend01"),this.friend02.setValue("friend02")}onSetValueForm1(){this.name.setValue("Anakin Skywalker"),this.email.setValue("anakinskywalker@starwars.com"),this.job.setValue("Jedi"),this.comment.setValue("Son of Shmi Skywalker")}onPatchValueForm2(){this.exampleForm2.patchValue({name:"Ben solo",email:"bensolo@starwars.com",job:"Jedi",comment:"Son of Han Solo : PatchValue"})}onSetValueForm2(){this.exampleForm2.setValue({name:"Ben solo",email:"bensolo@starwars.com",job:"Jedi",comment:"Son of Han Solo : SetValue"})}onResetForm2(){}get friends(){return this.exampleForm3.get("friends")}onResetForm3(){this.exampleForm3.patchValue({name:"Rey Palpatine",email:"reypalpatine@starwars.com",job:"Sith",comment:"Granddaughter of Palpatine"}),this.friends.push(this.fb.control("Finn")),this.friends.push(this.fb.control("Poe Damaron")),this.friends.push(this.fb.control("C-3PO"))}onUpdateForm3(){this.exampleForm3.patchValue({name:"Rey Skywalker",email:"reyskywalker@starwars.com",job:"Jedi",comment:"Padawan of Luke Skywalker"})}}ExerciceComponent.\u0275fac=function ExerciceComponent_Factory(t){return new(t||ExerciceComponent)(core.Y36(fesm2015_forms.qu))},ExerciceComponent.\u0275cmp=core.Xpm({type:ExerciceComponent,selectors:[["app-form-appli"]],decls:181,vars:22,consts:[[1,"container-fluid","mb-5"],[1,"row","mb-5"],[1,"col","mt-5"],["id","exampleForms"],[1,"text-center"],["data-toggle","collapse","data-target","#form1",1,"btn","btn-outline-primary","font-weight-bold"],["data-toggle","collapse","data-target","#form2",1,"btn","btn-outline-success","font-weight-bold","ml-4"],["data-toggle","collapse","data-target","#form3",1,"btn","btn-outline-danger","font-weight-bold","ml-4"],[1,"accordion-group"],["id","form1","data-parent","#exampleForms",1,"collapse","show"],[1,"col-4","mt-5"],[1,"card"],[1,"card-body"],[1,"card-title","text-primary","font-weight-bold"],[1,"font-weight-bold"],[1,"col-8","mt-5"],[1,"form-row"],[1,"form-group","col-md-4"],["for","name"],["type","text",1,"form-control",3,"formControl"],["for","email"],["type","email",1,"form-control",3,"formControl"],["for","job"],[1,"form-control",3,"formControl"],[1,"form-group","col-md-6"],["for","comment"],["rows","2",1,"form-control",3,"formControl"],[1,"form-row","justify-content-center"],["type","submit",1,"btn","btn-primary","mr-4",3,"click"],["id","form2","data-parent","#exampleForms",1,"collapse"],[1,"card-title","text-success","font-weight-bold"],[3,"innerHTML"],[3,"formGroup"],["type","text","formControlName","name",1,"form-control"],["type","email","formControlName","email",1,"form-control"],["formControlName","job",1,"form-control"],["rows","2","formControlName","comment",1,"form-control"],[1,"table","table-bordered","table-sm"],["type","submit",1,"btn","btn-success","mr-4",3,"click"],["id","form3","data-parent","#exampleForms",1,"collapse"],[1,"card-title","text-danger","font-weight-bold"],["scope","col"],["type","submit",1,"btn","btn-danger","mr-4",3,"click"]],template:function ExerciceComponent_Template(rf,ctx){1&rf&&(core.TgZ(0,"div",0),core.TgZ(1,"div",1),core.TgZ(2,"div",2),core.TgZ(3,"div",3),core.TgZ(4,"div",4),core.TgZ(5,"button",5),core._uU(6,"Form Control"),core.qZA(),core.TgZ(7,"button",6),core._uU(8,"Form Group"),core.qZA(),core.TgZ(9,"button",7),core._uU(10,"Form Builder"),core.qZA(),core.qZA(),core.TgZ(11,"div",8),core.TgZ(12,"div",9),core.TgZ(13,"div",0),core.TgZ(14,"div",1),core.TgZ(15,"div",10),core.TgZ(16,"div",11),core.TgZ(17,"div",12),core.TgZ(18,"h5",13),core._uU(19,"Result With formControl "),core.qZA(),core._UZ(20,"br"),core.TgZ(21,"span",14),core._uU(22,"ExampleForm1 : Value"),core.qZA(),core._UZ(23,"br"),core._UZ(24,"br"),core._uU(25),core.ALo(26,"json"),core._UZ(27,"br"),core._uU(28),core.ALo(29,"json"),core._UZ(30,"br"),core._uU(31),core.ALo(32,"json"),core._UZ(33,"br"),core._uU(34),core.ALo(35,"json"),core._UZ(36,"br"),core.qZA(),core.qZA(),core.qZA(),core.TgZ(37,"div",15),core.TgZ(38,"div",11),core.TgZ(39,"div",12),core.TgZ(40,"h5",13),core._uU(41,"Reactive Form with FormControl"),core.qZA(),core.TgZ(42,"div",16),core.TgZ(43,"div",17),core.TgZ(44,"label",18),core._uU(45,"Name"),core.qZA(),core._UZ(46,"input",19),core.qZA(),core.TgZ(47,"div",17),core.TgZ(48,"label",20),core._uU(49,"Email"),core.qZA(),core._UZ(50,"input",21),core.qZA(),core.TgZ(51,"div",17),core.TgZ(52,"label",22),core._uU(53,"Job"),core.qZA(),core.TgZ(54,"select",23),core.TgZ(55,"option"),core._uU(56,"Jedi"),core.qZA(),core.TgZ(57,"option"),core._uU(58,"Sith"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(59,"div",16),core.TgZ(60,"div",24),core.TgZ(61,"label",25),core._uU(62,"Comment"),core.qZA(),core._UZ(63,"textarea",26),core.qZA(),core.qZA(),core.TgZ(64,"div",27),core.TgZ(65,"button",28),core.NdJ("click",function ExerciceComponent_Template_button_click_65_listener(){return ctx.onSetValueForm1()}),core._uU(66,"SetValue"),core.qZA(),core.TgZ(67,"button",28),core.NdJ("click",function ExerciceComponent_Template_button_click_67_listener(){return ctx.onResetForm1()}),core._uU(68,"Reset"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(69,"div",29),core.TgZ(70,"div",0),core.TgZ(71,"div",1),core.TgZ(72,"div",10),core.TgZ(73,"div",11),core.TgZ(74,"div",12),core.TgZ(75,"h5",30),core._uU(76,"Result with FormGroup & FormControl"),core.qZA(),core._UZ(77,"br"),core.TgZ(78,"span",14),core._uU(79,"ExampleForm2 : Value"),core.qZA(),core._UZ(80,"br"),core._UZ(81,"br"),core._UZ(82,"div",31),core.ALo(83,"prettyjson"),core.qZA(),core.qZA(),core.qZA(),core.TgZ(84,"div",15),core.TgZ(85,"div",11),core.TgZ(86,"div",12),core.TgZ(87,"h5",30),core._uU(88,"Reactive Form with FormGroup & FormControl "),core.qZA(),core.TgZ(89,"form",32),core.TgZ(90,"div",16),core.TgZ(91,"div",17),core.TgZ(92,"label",18),core._uU(93,"Name"),core.qZA(),core._UZ(94,"input",33),core.qZA(),core.TgZ(95,"div",17),core.TgZ(96,"label",20),core._uU(97,"Email"),core.qZA(),core._UZ(98,"input",34),core.qZA(),core.TgZ(99,"div",17),core.TgZ(100,"label",22),core._uU(101,"Job"),core.qZA(),core.TgZ(102,"select",35),core.TgZ(103,"option"),core._uU(104,"Jedi"),core.qZA(),core.TgZ(105,"option"),core._uU(106,"Sith"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(107,"div",16),core.TgZ(108,"div",24),core.TgZ(109,"label",25),core._uU(110,"Comment"),core.qZA(),core._UZ(111,"textarea",36),core.qZA(),core.TgZ(112,"div",24),core.TgZ(113,"table",37),core.TgZ(114,"thead"),core.TgZ(115,"tr"),core.TgZ(116,"th"),core._uU(117,"Friends"),core.qZA(),core.qZA(),core.qZA(),core._UZ(118,"tbody"),core.qZA(),core.qZA(),core.qZA(),core.TgZ(119,"div",27),core.TgZ(120,"button",38),core.NdJ("click",function ExerciceComponent_Template_button_click_120_listener(){return ctx.onSetValueForm2()}),core._uU(121,"SetValue"),core.qZA(),core.TgZ(122,"button",38),core.NdJ("click",function ExerciceComponent_Template_button_click_122_listener(){return ctx.onPatchValueForm2()}),core._uU(123,"PatchValue"),core.qZA(),core.TgZ(124,"button",38),core.NdJ("click",function ExerciceComponent_Template_button_click_124_listener(){return ctx.onResetForm2()}),core._uU(125,"Reset"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.TgZ(126,"div",39),core.TgZ(127,"div",0),core.TgZ(128,"div",1),core.TgZ(129,"div",10),core.TgZ(130,"div",11),core.TgZ(131,"div",12),core.TgZ(132,"h5",40),core._uU(133,"Result with FormBuilder "),core.qZA(),core._UZ(134,"br"),core.TgZ(135,"span",14),core._uU(136,"ExampleForm3 : Value"),core.qZA(),core._UZ(137,"br"),core._UZ(138,"br"),core._UZ(139,"div",31),core.qZA(),core.qZA(),core.qZA(),core.TgZ(140,"div",15),core.TgZ(141,"div",11),core.TgZ(142,"div",12),core.TgZ(143,"h5",40),core._uU(144,"Reactive Form with FormBuilder"),core.qZA(),core.TgZ(145,"form",32),core.TgZ(146,"div",16),core.TgZ(147,"div",17),core.TgZ(148,"label",18),core._uU(149,"Name"),core.qZA(),core._UZ(150,"input",33),core.qZA(),core.TgZ(151,"div",17),core.TgZ(152,"label",20),core._uU(153,"email"),core.qZA(),core._UZ(154,"input",34),core.qZA(),core.TgZ(155,"div",17),core.TgZ(156,"label",22),core._uU(157,"Job"),core.qZA(),core.TgZ(158,"select",35),core.TgZ(159,"option"),core._uU(160,"Jedi"),core.qZA(),core.TgZ(161,"option"),core._uU(162,"Sith"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core._UZ(163,"div",16),core.TgZ(164,"div",16),core.TgZ(165,"div",24),core.TgZ(166,"label",25),core._uU(167,"Comment"),core.qZA(),core._UZ(168,"textarea",36),core.qZA(),core.TgZ(169,"div",24),core.TgZ(170,"table",37),core.TgZ(171,"thead"),core.TgZ(172,"tr"),core.TgZ(173,"th",41),core._uU(174,"Friends"),core.qZA(),core.qZA(),core.qZA(),core._UZ(175,"tbody"),core.qZA(),core.qZA(),core.qZA(),core.TgZ(176,"div",27),core.TgZ(177,"button",42),core.NdJ("click",function ExerciceComponent_Template_button_click_177_listener(){return ctx.onUpdateForm3()}),core._uU(178,"Load"),core.qZA(),core.TgZ(179,"button",42),core.NdJ("click",function ExerciceComponent_Template_button_click_179_listener(){return ctx.onResetForm3()}),core._uU(180,"Reset"),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA(),core.qZA()),2&rf&&(core.xp6(25),core.hij(" name : ",core.lcZ(26,12,ctx.name.value),""),core.xp6(3),core.hij(" email : ",core.lcZ(29,14,ctx.email.value),""),core.xp6(3),core.hij(" job : ",core.lcZ(32,16,ctx.job.value),""),core.xp6(3),core.hij(" comment : ",core.lcZ(35,18,ctx.comment.value),""),core.xp6(12),core.Q6J("formControl",ctx.name),core.xp6(4),core.Q6J("formControl",ctx.email),core.xp6(4),core.Q6J("formControl",ctx.job),core.xp6(9),core.Q6J("formControl",ctx.comment),core.xp6(19),core.Q6J("innerHTML",core.lcZ(83,20,ctx.exampleForm2.value),core.oJD),core.xp6(7),core.Q6J("formGroup",ctx.exampleForm2),core.xp6(50),core.Q6J("innerHTML",ctx.exampleForm3.value,core.oJD),core.xp6(6),core.Q6J("formGroup",ctx.exampleForm3))},directives:[fesm2015_forms.Fj,fesm2015_forms.JJ,fesm2015_forms.oH,fesm2015_forms.EJ,fesm2015_forms.YN,fesm2015_forms.Kr,fesm2015_forms._Y,fesm2015_forms.JL,fesm2015_forms.sg,fesm2015_forms.u],pipes:[common.Ts,PrettyJsonPipe],styles:[""]});const routes=[{path:"",component:ExerciceComponent,children:[]}];class ExerciceRoutingModule{}ExerciceRoutingModule.\u0275fac=function ExerciceRoutingModule_Factory(t){return new(t||ExerciceRoutingModule)},ExerciceRoutingModule.\u0275mod=core.oAB({type:ExerciceRoutingModule}),ExerciceRoutingModule.\u0275inj=core.cJS({imports:[[router.Bz.forChild(routes)],router.Bz]});class ExerciceModule{}ExerciceModule.\u0275fac=function ExerciceModule_Factory(t){return new(t||ExerciceModule)},ExerciceModule.\u0275mod=core.oAB({type:ExerciceModule}),ExerciceModule.\u0275inj=core.cJS({providers:[],imports:[[common.ez,ExerciceRoutingModule,fesm2015_forms.u5,fesm2015_forms.UX]]})}};