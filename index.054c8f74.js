!function(){function e(e,t,n,r,a){this.template=document.createElement("div"),this.template.className=`button ${e}`,this.template.textContent=n,this.render=function(){document.querySelector(t).append(this.template)},this.template.onclick=()=>{r(a)}}const t=document.createElement("template");function n(e){this.component=t.content.querySelector("div").cloneNode(!0),e.description&&(this.component.querySelector(".textarea-description").innerHTML=e.description),e.comment&&(this.component.querySelector(".textarea-actions").innerHTML=e.comment),e.position&&(this.component.querySelector(".new__card-header-ststus-span").innerHTML=e.position),e.title&&(this.component.querySelector(".new__card-header-name").innerHTML=e.title),e.users&&e.users.forEach((e=>{let t=document.createElement("div");t.innerHTML=e,t.className="classUser",this.component.querySelector(".card-info__container-users-icons").append(t)})),this.render=function(){document.querySelector(".container-global").append(this.component)}}function r(e,t){this.template=document.createElement("input"),t.data&&(this.template.value=t.data),this.template.type=type="date",this.template.className="myDate user-content",this.render=function(){document.querySelector(e).append(this.template)}}t.innerHTML='\n<div class="wrapper__new-card">\n<div class="new__card">\n        <div class="new__card-header">\n            <div class="new__card-header-right">\n                <textarea class="new__card-header-name user-content">Наименование новой карты</textarea>\n                <div class="new__card-header-ststus">колонка нахождения\n                    <span class="new__card-header-ststus-span">статус</span>\n                    <span class="icn__btneye"></span>\n                </div>\n            </div>\n            <div class="new__card-header-left close">\n            </div>\n        </div>\n        <div class="new__card-wrapper">\n            <div class="new__card-info">\n                <div class="card-info__container">\n                    <div class="card-info__container-users">\n                        <div class="card-info__container-users-title">УЧАСТНИКИ</div>\n                        <div class="card-info__container-users-icons"></div>\n                    </div>\n                    <div class="card-info__container-term">\n                        <div class="card-info__container-term-title">СРОК</div>\n                        <div class="card-info__container-term-wrapper">\n                            <div class="card-info__container-term-input"><input type="checkbox" class="user-content"></div>\n                            <div class="card-info__container-term-btn">\n                                <span class="container-term-btn__data"></span>\n                                <span class="container-term-btn__status">статус</span>\n                                <span></span>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class="card-info__description">\n                    <div class="card-info__description-wrapper">\n                        <div class="card-info__description-title">\n                            <span></span>\n                            Описание задачи\n                        </div>\n                        <div class="card-info__description-btn"></div>\n                    </div>\n                    <div class="card-info__description-text">\n                        <textarea class="textarea-description user-content" placeholder="Введите отписание задачи!"></textarea>\n                    </div>\n                </div>\n                <div class="card-info__actions">\n                    <div class="card-info__actions-wrapper">\n                        <div class="card-info__actions-title">\n                            <span></span>\n                            Комментарий\n                        </div>\n                        <div class="card-info__actions-btn"></div>\n                    </div>\n                    <div class="card-info__actions-text">\n                        <textarea class="textarea-actions user-content" placeholder="Напишите комментарий..."></textarea>\n                    </div>\n                </div>\n            </div>\n            <div class="new__card-create">\n                <div class="new__card-create-wrapper">\n                    <ul class="card-create">\n                        <div class="card-create__title">ДОБАВИТЬ НА КАРТОЧКУ</div>\n                        <li class="card-create__button user"></li>\n                        <li class="card-create__button data"></li>\n                    </ul>\n                    <ul class="card-create">\n                        <div class="card-create__title">ДЕЙСТВИЯ</div>\n                        <li class="card-create__button moving"></li>\n                        <li class="card-create__button archiving"></li>\n                    </ul>\n                    <ul class="card-create">\n                    <li class="card-create__button save"></li>\n                </ul>\n                </div>\n            </div>\n        </div>\n    </div>\n    </div>\n';const a=document.createElement("template");function c(e){this.component=a.content.querySelector("div").cloneNode(!0),this.component.querySelector(".card_list-tasks").setAttribute("id",e),this.component.querySelector(".card__title-text").innerHTML=e,this.render=function(){document.querySelector(".container-cards").append(this.component)}}a.innerHTML='\n<div class="card">\n<div class="card__title">\n  <div class="card__title-text"></div>\n</div>\n<div class="card_list">\n  <div class="card_list-tasks">\n  <div class="card-task"></div>\n  </div>\n  <div class="textarea"></div>\n</div>\n  <div class="card__button">\n  </div>\n</div>\n        ';const s=document.createElement("template");function i(e,t){this.component=s.content.querySelector("div").cloneNode(!0),this.component.querySelector(".eventCard__title").innerHTML=e,this.component.querySelector(".eventCard__text").innerHTML=t,this.render=function(){document.querySelector(".container-global").append(this.component)}}s.innerHTML='\n<div class = "wrapper_eventCard">\n  <div class = "eventCard"> \n    <div class = "eventCard__title"></div>\n    <div class = "eventCard__text"></div>\n    <div class = "eventCard__footer">\n      <div class = "eventCard__footer_button cancel"></div>\n      <div class = "eventCard__footer_button event"></div>\n    </div>\n</div>\n</div>';const o=document.createElement("template");function d(){this.component=o.content.querySelector("div").cloneNode(!0),this.render=function(){document.querySelector(".container-global").append(this.component)}}o.innerHTML='\n<div class = "wrapper_limitCard">\n<div class = "limitCard"> \n<div class = "limitCard__title"> Предупреждение </div>\n<div class = "limitCard__notice"> В списке in_progress может быть не больше 6 задач </div>\n<div class = "limitCard__footer">\n<div class = "limitCard__footer_button close"></div>\n</div>\n</div>\n</div>\n';const l=document.createElement("template");function u(){this.component=l.content.querySelector("div").cloneNode(!0),this.render=function(){document.querySelector(".container-global").append(this.component)}}l.innerHTML='\n<div class = "wrapper_menu">\n<div class="menu">\n<div class="menu_header">\n  <div class="menu_header-tittle">Очистить список</div>\n  <div class="menu_header-close"></div>\n</div>\n\n  <ul class="menu_list">\n    <li class="menu_list clrtodo"></li>\n    <li class="menu_list clrinprcs"></li>\n    <li class="menu_list clrdone"></li>\n    <li class="menu_list clrall"></li>\n  </ul>\n</div>\n</div>\n';const _=document.createElement("template");function m(e){this.component=_.content.querySelector("div").cloneNode(!0),this.component.querySelector(".input__date").value=document.querySelector(".myDate").value,"todo"!=e.position&&this.component.querySelector(".input__date").setAttribute("disabled",!0),this.render=function(){document.querySelector(".container-global").append(this.component)}}_.innerHTML='\n        <div class="date__card-wrapper">\n        <div class="date__card" >\n            <div class="date__card-header">\n                <div class="card__header-name">\n                    Даты\n                </div>\n                <div class="card__header-close">\n                    x\n                </div>\n            </div>\n            <div class="data__card-input">\n            <input class="input__date" type="date">\n            </div>\n        </div>\n        </div>\n';const v=document.createElement("template");function p(){this.component=v.content.querySelector("div").cloneNode(!0),this.render=function(){document.querySelector(".container-global").append(this.component)}}async function f(e){const t=await fetch("https://jsonplaceholder.typicode.com/users");(await t.json()).forEach((function(e){document.querySelector("#app").insertAdjacentHTML("beforeend",function(e){return`<div class="user-search__form--user-list">\n          <div class="user-list__avatar">\n            <div class="user-list__initial">\n            ${e.name.split(" ").map((function(e){return e[0]})).join("")}\n            </div>\n          </div>\n          <div class="user-list--ticker">\n          <div class="user-list__name">\n              ${e.name}\n          </div>\n          </div>\n          </div>`}(e))})),function(e){let t=document.querySelector(".card-info__container-users-icons");document.querySelectorAll(".user-search__form--user-list").forEach((n=>{n.addEventListener("click",(n=>{let r=n.currentTarget;userName=r.children[1].innerText;const a=JSON.parse(localStorage.getItem("tasksArray"));a.forEach((t=>{t.id===e.id&&(t.users?t.users.push(userName):t.users=[userName])}));let c=document.createElement("div");c.innerHTML=userName,c.className="classUser",t.append(c),localStorage.setItem("tasksArray",JSON.stringify(a))}))}))}(e)}function S(e){O(e,"Архивация","удалить задачу?",y)}function y(e){let t=JSON.parse(localStorage.getItem("tasksArray")),n=t.findIndex((t=>t.id==e.id));document.getElementById(`${e.id}`).remove(),document.querySelector(".wrapper__new-card").remove(),document.querySelector(".wrapper_eventCard").remove(),t.splice(n,1),localStorage.setItem("tasksArray",JSON.stringify(t))}function h(e){switch(e){case"todo":O(e,"Удаление списка","очистить список TODO?",g);break;case"in_progress":O(e,"Удаление списка","очистить список IN_PROGRESS? ",g);break;case"done":O(e,"Удаление списка","очистить список DONE?",g);break;case"task":O(e,"Удаление списка","очистить весь список?",w)}}function g(e){let t=JSON.parse(localStorage.getItem("tasksArray")),n=document.querySelectorAll(`.${e}`);for(let e of n)e.remove();document.querySelector(".wrapper_menu").remove(),document.querySelector(".wrapper_eventCard").remove();let r=t.filter((t=>t.position!=e));null==r&&(r=[]),localStorage.setItem("tasksArray",JSON.stringify(r))}function w(){let e=document.querySelectorAll(".task");for(let t of e)t.remove();document.querySelector(".wrapper_menu").remove(),document.querySelector(".wrapper_eventCard").remove();localStorage.setItem("tasksArray",JSON.stringify([]))}function q(t){switch(t.position){case"todo":document.querySelectorAll(".in_progress").length>=6?function(){(new d).render();new e("",".limitCard__footer_button","Ок",x).render()}():O(t,"Перемещение карточки","переместить в колонку IN PROGRESS",k);break;case"in_progress":O(t,"Перемещение карточки","переместить в колонку DONE",k);break;case"done":O(t,"Перемещение карточки","переместить в колонку TODO",k)}}function k(e){switch(e.position){case"todo":b(e,"in_progress");break;case"in_progress":b(e,"done");break;case"done":!function(e){const t=JSON.parse(localStorage.getItem("tasksArray"));t.forEach((t=>{t.id===e.id&&(t.data="",t.description="",t.comment="",t.users=[])})),localStorage.setItem("tasksArray",JSON.stringify(t))}(e),b(e,"todo")}document.querySelector(".wrapper__new-card").remove()}function b(e,t){let n=document.getElementById(`${e.id}`),r=document.querySelector(`#${t}`);n.classList.remove(e.position),n.classList.add(t),r.append(n),document.querySelector(".wrapper_eventCard").remove();const a=JSON.parse(localStorage.getItem("tasksArray"));a.forEach((n=>{n.id===e.id&&(n.position=t)})),localStorage.setItem("tasksArray",JSON.stringify(a))}function N(){document.querySelector(".wrapper__new-card").remove()}function E(e){new m(e).render(),function(e){const t=document.querySelector(".input__date"),n=document.querySelector(".myDate");t.addEventListener("change",(()=>{n.value=t.value;const r=JSON.parse(localStorage.getItem("tasksArray"));r.forEach((n=>{n.id===e.id&&(n.data=t.value)})),localStorage.setItem("tasksArray",JSON.stringify(r))}))}(e);document.querySelector(".card__header-close").addEventListener("click",A)}function A(){document.querySelector(".date__card-wrapper").remove()}function I(e){(new p).render(),f(e);const t=document.querySelector(".user-search__header--exit"),n=document.querySelector(".overlay");t.addEventListener("click",L),n.addEventListener("click",L)}function L(){document.querySelector(".popup__users-template").remove()}function x(){document.querySelector(".wrapper_limitCard").remove()}function O(t,n,r,a){new i(n,r).render();new e("",".cancel","Отменить",T).render();new e("",".event","Да",a,t).render()}function T(){document.querySelector(".wrapper_eventCard").remove()}function C(){document.querySelector(".wrapper_menu").remove()}function H(){if(!document.querySelector(".card_task")){const e=document.createElement("div");return e.innerHTML='<textarea class="card_task"></textarea>',document.querySelector(".textarea").append(e)}}function M(){document.querySelector(".card_task")&&document.querySelector(".card_task").remove()}function J(e,t,n){let r=document.querySelector(".card-task").cloneNode(!0);r.className=`task ${e}`,r.id=`${n}`,r.innerHTML=t,document.querySelector(`#${e}`).append(r)}function $(e,t,n){const r=document.querySelector(e);r.addEventListener("change",(()=>{const e=JSON.parse(localStorage.getItem("tasksArray"));e.forEach((e=>{e.id===t.id&&(e[n]=r.value)})),"title"==n&&(document.getElementById(t.id).innerHTML=r.value),localStorage.setItem("tasksArray",JSON.stringify(e))}))}v.innerHTML='\n<div class="popup__users-template">    \n<div class="overlay"></div>\n      <div class="user-search">\n      <div class="user-search__header">\n          <div class="user-search__header--title">Участники</div>\n          <div class="user-search__header--exit ">X</div>\n      </div>\n      <div class="user-search__list-wraper">\n        <div class="user-search__title2"></div>\n                \n                  <div id="app"></div>\n                  \n              </div>\n      </div>\n      </div>\n    </div>\n          ',new c("todo").render(),new c("in_progress").render(),new c("done").render(),new e("",".card__button","+ Добавить",H).render(),new e("",".card__button","отмена",M).render(),localStorage.getItem("tasksArray")&&function(){let e=JSON.parse(localStorage.getItem("tasksArray"));e&&e.forEach((e=>{J(e.position,e.title,e.id)}))}();let D=document.querySelector(".textarea"),j=!0;D.onclick=function(){let e=document.querySelector(".card_task");j&&e.addEventListener("change",(()=>{localStorage.getItem("cal")||localStorage.setItem("cal",0);let t=+localStorage.getItem("cal");t++;let n,r={title:e.value,position:"todo",id:t};n=localStorage.getItem("tasksArray")?JSON.parse(localStorage.getItem("tasksArray")):[],n.push(r),localStorage.setItem("tasksArray",JSON.stringify(n)),J(r.position,e.value,t),localStorage.setItem("cal",t),e.remove(),j=!0})),j=!1},document.querySelectorAll(".card").forEach((t=>{t.addEventListener("click",(t=>{let a=t.target;var c;a.matches(".task")&&function(t){if(new n(t).render(),new e("icn__btnuser",".user","Участники",I,t).render(),new e("icn__btnaccess_time",".data","Дата",E,t).render(),new e("icn__btnarrow-right2",".moving","Перемещение",q,t).render(),new e("icn__btnvideo_label",".archiving","Архивация",S,t).render(),new e("icn__btnattachment",".save","Сохранить",N).render(),new e("",".close","X",N).render(),new r(".container-term-btn__data",t).render(),"todo"!=t.position){let e=document.querySelectorAll(".user-content");for(let t of e)t.setAttribute("disabled",!0)}$(".myDate",t,"data"),$(".textarea-description",t,"description"),$(".textarea-actions",t,"comment"),$(".new__card-header-name",t,"title")}((c=a.id,JSON.parse(localStorage.getItem("tasksArray")).filter((e=>e.id==c))[0]))}))}));document.querySelector(".icon-users").addEventListener("click",(function(){(new u).render(),new e("",".menu_header-close","X",C).render(),new e("",".clrtodo","Очистить todo",h,"todo").render(),new e("",".clrinprcs","Очистить in progress",h,"in_progress").render(),new e("",".clrdone","Очистить done",h,"done").render(),new e("",".clrall","Очистить всё",h,"task").render()}))}();
//# sourceMappingURL=index.054c8f74.js.map
