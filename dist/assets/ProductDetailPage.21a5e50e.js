import{_ as r,o as a,c as h,a as s,t as c,n as d,j as _,w as p,p as m,g as v}from"./index.66b0bfab.js";const u={data(){return{color:"Pink",description:null,img:null,type:null,price:null,name:null,pix:45}},created(){fetch(this.$store.getters.url+"/"+this.$route.params.id).then(o=>o.json()).then(o=>{this.description=o.description,this.img=o.image,this.type=o.type,this.price=o.price,this.name=o.name})},methods:{transform(o){this.pix=o,o==0?this.color="Silver":o==45?this.color="Pink":o==90?this.color="Yellow":o==135&&(this.color="Black")}}},i=o=>(m("data-v-3c92b986"),o=o(),v(),o),g={id:"pricing",class:"pricing-section"},w=i(()=>s("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css",integrity:"sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u",crossorigin:"anonymous"},null,-1)),f=i(()=>s("link",{rel:"stylesheet",href:"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"},null,-1)),y={class:"container"},b=i(()=>s("i",{class:"bx bx-arrow-back"},null,-1)),k=[b],I={class:"section-header text-center"},x={class:"wow fadeInUp","data-wow-delay":".2s"},S=i(()=>s("p",{class:"wow fadeInUp","data-wow-delay":".4s"},"\xA0",-1)),C={class:"row"},P={class:"product-block"},U={class:"col-md-6 wow fadeInUp","data-wow-delay":".4s"},B=i(()=>s("div",{class:"background-element",id:"background-element"},null,-1)),O=i(()=>s("div",{class:"highlight-overlay",id:"highlight-overlay"},null,-1)),R=[O],j={class:"col-md-6 wow fadeInUp","data-wow-delay":".4s"},T={class:"product-item"},D={class:"main-content"},V={class:"description",id:"description"},Y=i(()=>s("h3",{class:"h3"},"ABOUT THE PRODUCT:",-1)),A=i(()=>s("div",{class:"highlight-window mobile",id:"product-img"},[s("div",{class:"highlight-overlay",id:"highlight-overlay-mobile"})],-1)),E={class:"options"},H={class:"color-options"},N=i(()=>s("span",{class:"h3"},"COLOR",-1)),z={class:"color-picker"},K=i(()=>s("div",{class:"check"},null,-1)),F=[K],G={class:"small"},J={id:"color-name"},L={class:"row"},M={class:"col-sm-12"},W=i(()=>s("div",{class:"divider"},null,-1)),X={class:"purchase-info"},$={class:"price"},q=i(()=>s("input",{type:"button",class:"button",value:"BUY NOW"},null,-1));function Q(o,t,Z,ss,e,l){return a(),h("section",g,[w,f,s("div",y,[s("div",{class:"back",onClick:t[0]||(t[0]=n=>o.$router.push("/products"))},k),s("div",I,[s("h2",x,c(e.type),1),S]),s("div",C,[s("div",P,[s("div",U,[B,s("div",{class:"highlight-window",style:d({backgroundImage:"url("+e.img+")"}),id:"product-img"},R,4)]),s("div",j,[s("div",T,[s("div",D,[s("h2",null,c(e.name),1),s("div",V,[Y,s("p",null,c(e.description),1)]),A,s("div",E,[s("div",H,[N,s("div",z,[s("div",{class:"color overlay",style:d({transform:"translateX("+e.pix+"px)"}),id:"color-overlay"},F,4),s("div",{class:"color color-a",id:"color-a",onClick:t[1]||(t[1]=n=>l.transform(0))}),s("div",{class:"color color-b",id:"color-b",onClick:t[2]||(t[2]=n=>l.transform(45))}),s("div",{class:"color color-c",id:"color-c",onClick:t[3]||(t[3]=n=>l.transform(90))}),s("div",{class:"color color-d",id:"color-d",onClick:t[4]||(t[4]=n=>l.transform(135))})]),s("span",G,[_("Color : "),s("span",J,c(e.color),1)])])]),s("form",{action:"",class:"shop-form",onSubmit:t[5]||(t[5]=p(()=>{},["prevent"]))},[s("div",L,[s("div",M,[W,s("div",X,[s("div",$,"Rs. "+c(e.price),1),q])])])],32)])])])])])])])}const ts=r(u,[["render",Q],["__scopeId","data-v-3c92b986"]]);export{ts as default};