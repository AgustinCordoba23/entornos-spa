"use strict";(self.webpackChunkentornos_spa=self.webpackChunkentornos_spa||[]).push([[325],{8325:(N,P,a)=>{a.r(P),a.d(P,{AuthModule:()=>R});var y=a(9808),c=a(1083),M=a(5861),i=a(3075),n=a(5e3),O=a(6518),v=a(2803),f=a(7322),x=a(7531),w=a(7423),Z=a(5245);let A=(()=>{class e{constructor(t,o,r){this.authService=t,this.snackBar=o,this.router=r,this.hidePassword=!0}ngOnInit(){this.setForm()}setForm(){this.form=new i.cw({email:new i.NI(""),password:new i.NI("")})}submit(){var t=this;return(0,M.Z)(function*(){var o,r,g,m,s;if(""!=(null===(o=t.form.get("email"))||void 0===o?void 0:o.value)&&""!=(null===(r=t.form.get("password"))||void 0===r?void 0:r.value)){if(!(null===(g=t.form.get("email"))||void 0===g?void 0:g.value.includes("@")))return void t.snackBar.show("El email no es una direcci\xf3n de corre v\xe1lida.");yield t.authService.login(null===(m=t.form.get("email"))||void 0===m?void 0:m.value,null===(s=t.form.get("password"))||void 0===s?void 0:s.value),t.router.navigateByUrl("/")}})()}volver(){this.router.navigateByUrl("/")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(O.e),n.Y36(v.c),n.Y36(c.F0))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-login"]],decls:34,vars:4,consts:[[1,"pagina"],[1,"imagen"],["alt","imagen-login","src","../../../../assets/images/login.png"],[1,"form"],[1,"form-box"],[1,"titulo"],[1,"subtitulo"],[1,"form-box",3,"formGroup","autocomplete","ngSubmit"],["appearance","outline"],["for","email","hidden",""],["name","email","id","email","formControlName","email","matInput","","required",""],["for","password","hidden",""],["name","password","id","password","formControlName","password","matInput","","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["alt","icono-password"],["type","submit",1,"submit-button"],[1,"link"],[1,"label"],["routerLink","/auth/register",1,"registrate"],["type","button",1,"volver-button",3,"click"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.qZA(),n.TgZ(3,"div",3)(4,"div",4)(5,"h1",5),n._uU(6,"Ingresar"),n.qZA(),n.TgZ(7,"span",6),n._uU(8,"Escriba su mail y contrase\xf1a para ingresar"),n.qZA(),n.TgZ(9,"form",7),n.NdJ("ngSubmit",function(){return o.submit()}),n.TgZ(10,"mat-form-field",8)(11,"mat-label"),n._uU(12,"Email"),n.qZA(),n.TgZ(13,"label",9),n._uU(14,"Email"),n.qZA(),n._UZ(15,"input",10),n.qZA(),n.TgZ(16,"mat-form-field",8)(17,"mat-label"),n._uU(18,"Contrase\xf1a"),n.qZA(),n.TgZ(19,"label",11),n._uU(20,"Contrase\xf1a"),n.qZA(),n._UZ(21,"input",12),n.TgZ(22,"button",13),n.NdJ("click",function(){return o.hidePassword=!o.hidePassword}),n.TgZ(23,"mat-icon",14),n._uU(24),n.qZA()()(),n.TgZ(25,"button",15),n._uU(26," Ingresar "),n.qZA(),n.TgZ(27,"div",16)(28,"span",17),n._uU(29,"\xbfNo tienes cuenta?"),n.qZA(),n.TgZ(30,"a",18),n._uU(31,"Registrate"),n.qZA()(),n.TgZ(32,"button",19),n.NdJ("click",function(){return o.volver()}),n._uU(33," Volver "),n.qZA()()()()()),2&t&&(n.xp6(9),n.Q6J("formGroup",o.form)("autocomplete",!1),n.xp6(12),n.Q6J("type",o.hidePassword?"password":"text"),n.xp6(3),n.Oqu(o.hidePassword?"visibility_off":"visibility"))},directives:[i._Y,i.JL,i.sg,f.KE,f.hX,i.Fj,x.Nt,i.JJ,i.u,i.Q7,w.lW,f.R9,Z.Hw,c.yS],styles:[".pagina[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100vh}.pagina[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]{width:50%;display:flex;height:100vh}.pagina[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:50%;background:#F0F2F5;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:13px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:22px;line-height:140%;color:#344767}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .subtitulo[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#7b809a}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:10px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:360px;height:40px;margin-bottom:25px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:0}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding:0}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:360px;height:40px;background:linear-gradient(180deg,#1A7F9D 0%,#019234 100%);border-radius:8px;border:0;margin-bottom:10px;font-weight:700;font-size:14px;line-height:140%;color:#fff;cursor:pointer}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .volver-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;justify-content:center;align-items:center;gap:10px;width:360px;height:40px;background:#0A3066;border-radius:8px;border:0;margin-bottom:10px;margin-top:5px;font-weight:700;font-size:14px;line-height:140%;color:#fff;cursor:pointer}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:5px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:140%;color:#7b809a}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .registrate[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:140%;color:#1c819f;text-decoration:none}"]}),e})();var T=a(4107),U=a(508);const q=[{path:"login",component:A},{path:"register",component:(()=>{class e{constructor(t,o,r){this.authService=t,this.router=o,this.snackBar=r,this.hidePassword=!0,this.hideConfirmPassword=!0}ngOnInit(){this.setForm()}setForm(){this.form=new i.cw({nombre:new i.NI(""),email:new i.NI(""),password:new i.NI(""),confirmarPassword:new i.NI(""),rol:new i.NI("")})}submit(){var t=this;return(0,M.Z)(function*(){var o,r,g,m,s,u,d,p,C,_,h,b;if(""!=(null===(o=t.form.get("email"))||void 0===o?void 0:o.value)&&""!=(null===(r=t.form.get("password"))||void 0===r?void 0:r.value)&&""!=(null===(g=t.form.get("nombre"))||void 0===g?void 0:g.value)&&""!=(null===(m=t.form.get("confirmarPassword"))||void 0===m?void 0:m.value)){if(!(null===(s=t.form.get("email"))||void 0===s?void 0:s.value.includes("@")))return void t.snackBar.show("El email no es una direcci\xf3n de corre v\xe1lida.");if((null===(u=t.form.get("password"))||void 0===u?void 0:u.value)!=(null===(d=t.form.get("confirmarPassword"))||void 0===d?void 0:d.value))return void t.snackBar.show("Las contrase\xf1as no coinciden.");if((null===(p=t.form.get("password"))||void 0===p?void 0:p.value.length)<6)return void t.snackBar.show("La contrase\xf1a debe tener m\xe1s de 6 caracteres.");yield t.authService.registrar(null===(C=t.form.get("nombre"))||void 0===C?void 0:C.value,null===(_=t.form.get("email"))||void 0===_?void 0:_.value,null===(h=t.form.get("password"))||void 0===h?void 0:h.value,null===(b=t.form.get("rol"))||void 0===b?void 0:b.value),t.router.navigateByUrl("/auth/login"),t.snackBar.show("Cuenta creada con \xe9xito.")}})()}volver(){this.router.navigateByUrl("/")}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(O.e),n.Y36(c.F0),n.Y36(v.c))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-register"]],decls:61,vars:9,consts:[[1,"pagina"],[1,"imagen"],["alt","imagen-registro","src","../../../../assets/images/register.png"],[1,"form"],[1,"form-box"],[1,"titulo"],[1,"subtitulo"],[1,"form-box",3,"formGroup","autocomplete","ngSubmit"],["appearance","outline"],["for","nombre","hidden",""],["id","nombre","name","nombre","formControlName","nombre","matInput","","required",""],["for","email","hidden",""],["name","email","id","email","formControlName","email","matInput","","required",""],["for","password","hidden",""],["name","password","id","password","formControlName","password","matInput","","required","",3,"type"],["mat-icon-button","","matSuffix","","type","button",3,"click"],["alt","icono-password"],["for","confirm-password","hidden",""],["name","confirm-password","id","confirm-password","formControlName","confirmarPassword","matInput","","required","",3,"type"],["for","rol","hidden",""],["title","rol","id","rol","name","rol","formControlName","rol"],[3,"value"],["type","submit",1,"submit-button"],[1,"link"],[1,"label"],["routerLink","/auth/login",1,"ingresar"],["type","button",1,"volver-button",3,"click"]],template:function(t,o){1&t&&(n.TgZ(0,"div",0)(1,"div",1),n._UZ(2,"img",2),n.qZA(),n.TgZ(3,"div",3)(4,"div",4)(5,"h1",5),n._uU(6,"Registro"),n.qZA(),n.TgZ(7,"span",6),n._uU(8,"Complete el formulario para registrarse "),n.qZA(),n.TgZ(9,"form",7),n.NdJ("ngSubmit",function(){return o.submit()}),n.TgZ(10,"mat-form-field",8)(11,"mat-label"),n._uU(12,"Nombre completo"),n.qZA(),n.TgZ(13,"label",9),n._uU(14,"Nombre"),n.qZA(),n._UZ(15,"input",10),n.qZA(),n.TgZ(16,"mat-form-field",8)(17,"mat-label"),n._uU(18,"Email"),n.qZA(),n.TgZ(19,"label",11),n._uU(20,"Email"),n.qZA(),n._UZ(21,"input",12),n.qZA(),n.TgZ(22,"mat-form-field",8)(23,"mat-label"),n._uU(24,"Contrase\xf1a"),n.qZA(),n.TgZ(25,"label",13),n._uU(26,"Contrase\xf1a"),n.qZA(),n._UZ(27,"input",14),n.TgZ(28,"button",15),n.NdJ("click",function(){return o.hidePassword=!o.hidePassword}),n.TgZ(29,"mat-icon",16),n._uU(30),n.qZA()()(),n.TgZ(31,"mat-form-field",8)(32,"mat-label"),n._uU(33,"Confirmar contrase\xf1a"),n.qZA(),n.TgZ(34,"label",17),n._uU(35,"Confirmar contrase\xf1a"),n.qZA(),n._UZ(36,"input",18),n.TgZ(37,"button",15),n.NdJ("click",function(){return o.hideConfirmPassword=!o.hideConfirmPassword}),n.TgZ(38,"mat-icon",16),n._uU(39),n.qZA()()(),n.TgZ(40,"mat-form-field",8)(41,"mat-label"),n._uU(42,"Rol"),n.qZA(),n.TgZ(43,"label",19),n._uU(44,"Rol"),n.qZA(),n.TgZ(45,"mat-select",20)(46,"mat-option",21),n._uU(47,"Jefe de C\xe1tedra"),n.qZA(),n.TgZ(48,"mat-option",21),n._uU(49,"Responsable Administrativo"),n.qZA(),n.TgZ(50,"mat-option",21),n._uU(51,"Usuario"),n.qZA()()(),n.TgZ(52,"button",22),n._uU(53," Registrarse "),n.qZA(),n.TgZ(54,"div",23)(55,"span",24),n._uU(56,"\xbfYa tienes cuenta?"),n.qZA(),n.TgZ(57,"a",25),n._uU(58,"Ingresar"),n.qZA()(),n.TgZ(59,"button",26),n.NdJ("click",function(){return o.volver()}),n._uU(60," Volver "),n.qZA()()()()()),2&t&&(n.xp6(9),n.Q6J("formGroup",o.form)("autocomplete",!1),n.xp6(18),n.Q6J("type",o.hidePassword?"password":"text"),n.xp6(3),n.Oqu(o.hidePassword?"visibility_off":"visibility"),n.xp6(6),n.Q6J("type",o.hideConfirmPassword?"password":"text"),n.xp6(3),n.Oqu(o.hidePassword?"visibility_off":"visibility"),n.xp6(7),n.Q6J("value",1),n.xp6(2),n.Q6J("value",2),n.xp6(2),n.Q6J("value",3))},directives:[i._Y,i.JL,i.sg,f.KE,f.hX,i.Fj,x.Nt,i.JJ,i.u,i.Q7,w.lW,f.R9,Z.Hw,T.gD,U.ey,c.yS],styles:[".pagina[_ngcontent-%COMP%]{display:flex;flex-direction:row;height:100vh}.pagina[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]{width:50%;display:flex;height:100vh}.pagina[_ngcontent-%COMP%]   .imagen[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:100%;height:100%}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]{width:50%;background:#F0F2F5;height:100vh;display:flex;flex-direction:column;justify-content:center;align-items:center}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center;gap:13px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .titulo[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:700;font-size:22px;line-height:140%;color:#344767}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .subtitulo[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:16px;line-height:140%;color:#7b809a}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]{display:flex;flex-direction:column;align-items:center;margin-top:10px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%]{width:360px;height:40px;margin-bottom:25px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]     .mat-form-field-appearance-outline .mat-form-field-wrapper{margin:0}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]     .mat-form-field-wrapper{padding:0}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .submit-button[_ngcontent-%COMP%]{width:360px;height:40px;background:linear-gradient(180deg,#1A7F9D 0%,#00CA48 100%);border-radius:8px;border:0;margin-bottom:10px;font-weight:700;font-size:14px;line-height:140%;color:#fff;cursor:pointer}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .volver-button[_ngcontent-%COMP%]{display:flex;flex-direction:row;align-content:center;justify-content:center;align-items:center;gap:10px;width:360px;height:40px;background:#0A3066;border-radius:8px;border:0;margin-bottom:10px;margin-top:5px;font-weight:700;font-size:14px;line-height:140%;color:#fff;cursor:pointer}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]{display:flex;flex-direction:row;gap:5px}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .label[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:140%;color:#7b809a}.pagina[_ngcontent-%COMP%]   .form[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .form-box[_ngcontent-%COMP%]   .link[_ngcontent-%COMP%]   .ingresar[_ngcontent-%COMP%]{font-family:Roboto;font-style:normal;font-weight:400;font-size:14px;line-height:140%;color:#1c819f;text-decoration:none}"]}),e})()}];let F=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[c.Bz.forChild(q)],c.Bz]}),e})();var k=a(7826);let R=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({imports:[[y.ez,F,k.m]]}),e})()}}]);