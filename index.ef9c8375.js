const e={select:document.querySelector("select.breed-select"),loader:document.querySelector("p.loader"),error:document.querySelector("p.error"),catInfo:document.querySelector("div.catInfo")},o=new URLSearchParams({"x-api-key":"live_CUkWo8xwKlZSCAX2lEuoE15SIepz7g84yjkY3DzjbuN143fz7YOxwdY7dSYPAVOA"});fetch(`https://api.thecatapi.com/v1/breeds?${o}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((o=>{let t="";o.forEach((e=>{t+=`<option value="${e.id}">${e.name}</option>`})),console.log(t),e.select.innerHTML=t})).catch((e=>{console.log(e)}));
//# sourceMappingURL=index.ef9c8375.js.map
