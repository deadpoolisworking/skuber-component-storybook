import{j as n}from"./jsx-runtime-6d9837fe.js";/* empty css              */import{r as p}from"./index-93f6b7ae.js";import{I as x}from"./index-d74c6a26.js";import{T as v}from"./index-5d3e6ce4.js";const S=""+new URL("page_arrow_back-276dde9b.svg",import.meta.url).href,T=""+new URL("page_arrow_next-d6a77573.svg",import.meta.url).href,_=["Su","Mo","Tu","We","Th","Fr","Sa"],u=new Date,R=k=>{const{from:h,to:f,onFromChange:$,onToChange:j}=k,[m,M]=p.useState(new Date(u.getFullYear(),u.getMonth(),1)),[d,F]=p.useState(new Date(u.getFullYear(),u.getMonth()+2,0)),[o,N]=p.useState(h||null),[r,O]=p.useState(f||null),a="component-range-calender",C=(e,t)=>{const l=e.getFullYear(),s=e.getMonth()-(t==="from"?1:0),i=t==="from"?1:0;t==="from"?M(new Date(l,s,i)):F(new Date(l,s,i))},Y=(e,t)=>{const l=e.getFullYear(),s=e.getMonth()+(t==="from"?1:2),i=t==="from"?1:0;t==="from"?M(new Date(l,s,i)):F(new Date(l,s,i))},q=()=>{const e=window.crypto,t=new Uint32Array(1);return e.getRandomValues(t),n.jsx("div",{},t[0].toString(10))},B=e=>{const t=new Date(e.getFullYear(),e.getMonth(),e.getDate(),0,0,0),l=new Date(e.getFullYear(),e.getMonth(),e.getDate(),23,59,59),s=`${a}-body-dates-item`,i=`${s}-${(o==null?void 0:o.valueOf())===t.valueOf()||r&&r.valueOf()>=t.valueOf()&&r.valueOf()<=l.valueOf()?"selected":"unselected"}`,c=`${s}-${o&&r&&t.valueOf()>o.valueOf()&&l.valueOf()<r.valueOf()?"ranged":"unranged"}`,y=`${s}${e.valueOf()===(o==null?void 0:o.valueOf())?"-from":""}${l.valueOf()===(r==null?void 0:r.valueOf())||e.valueOf()===(r==null?void 0:r.valueOf())?"-to":""}`,w=g=>{N(g),$&&$(g)},D=g=>{O(g),j&&j(g)},E=()=>{if(!o)w(t);else if(r)w(t),D(null);else if(o.valueOf()<e.valueOf())D(l);else{const g=new Date(o.getFullYear(),o.getMonth(),o.getDate(),23,59,59);D(g),w(t)}};return n.jsx("div",{className:`${s} ${i} ${c} ${y}`,onClick:()=>E(),children:n.jsx(v,{variant:"b1",weight:"regular",style:{color:c.includes("unranged")?"var(--text-ui-text-secondary)":"var(--interation-ui-interation-primary-contrast)"},children:e.getDate().toString()})},e.valueOf())},b=e=>{const t=new Date(e.getFullYear(),e.getMonth(),1),l=new Date(e.getFullYear(),e.getMonth()+1,0),s=[],i=t.getDay();for(let c=0;c<i;++c)s.push(q());for(let c=1;c<=l.getDate();++c){const y=new Date(t.getFullYear(),t.getMonth(),c);s.push(B(y))}return s};return p.useEffect(()=>{N(h||null),O(f||null)},[h,f]),n.jsxs("div",{className:`${a}-container`,children:[n.jsxs("div",{className:`${a}`,style:{marginRight:"20px"},children:[n.jsxs("div",{className:`${a}-head ${a}-head-from`,children:[n.jsx(x,{icon:S,onClick:()=>C(m,"from"),style:{width:"32px",height:"32px"}}),n.jsx(v,{variant:"s1",style:{width:"216px",height:"19px",textAlign:"center"},children:`${m.getMonth()+1} ${m.getFullYear()}`}),!(m.getFullYear()===u.getFullYear()&&m.getMonth()===u.getMonth())&&n.jsx(x,{icon:T,onClick:()=>Y(m,"from"),style:{width:"32px",height:"32px"}})]}),n.jsxs("div",{className:`${a}-body`,children:[n.jsx("div",{className:`${a}-body-days`,children:_.map((e,t)=>n.jsx(v,{variant:"b1",weight:"medium",style:{color:"var(--text-tertiary)"},children:e},`${a}-body-days-${e}__${t}`))}),n.jsx("div",{className:`${a}-body-dates`,children:b(m)})]})]}),n.jsxs("div",{className:`${a}`,children:[n.jsxs("div",{className:`${a}-head ${a}-head-to`,children:[!(d.getFullYear()===u.getFullYear()&&d.getMonth()===u.getMonth()+1)&&n.jsx(x,{icon:S,onClick:()=>C(d,"to"),style:{width:"32px",height:"32px"}}),n.jsx(v,{variant:"s1",style:{width:"216px",height:"19px",textAlign:"center"},children:`${d.getMonth()+1} ${d.getFullYear()}`}),n.jsx(x,{icon:T,onClick:()=>Y(d,"to"),style:{width:"32px",height:"32px"}})]}),n.jsxs("div",{className:`${a}-body`,children:[n.jsx("div",{className:`${a}-body-days`,children:_.map((e,t)=>n.jsx(v,{variant:"b1",weight:"medium",style:{color:"var(--text-tertiary)"},children:e},`${a}-body-days-${e}__${t}`))}),n.jsx("div",{className:`${a}-body-dates`,children:b(d)})]})]})]})},V=R;R.__docgenInfo={description:"",methods:[],displayName:"RangeCalender",props:{from:{required:!1,tsType:{name:"union",raw:"Date | null | undefined",elements:[{name:"Date"},{name:"null"},{name:"undefined"}]},description:""},to:{required:!1,tsType:{name:"union",raw:"Date | null | undefined",elements:[{name:"Date"},{name:"null"},{name:"undefined"}]},description:""},onFromChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""},onToChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(date: Date | null) => void",signature:{arguments:[{type:{name:"union",raw:"Date | null",elements:[{name:"Date"},{name:"null"}]},name:"date"}],return:{name:"void"}}},description:""}}};export{V as R};