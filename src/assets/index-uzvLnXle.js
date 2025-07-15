var rc=Object.defineProperty;var ic=(e,t,n)=>t in e?rc(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;var ns=(e,t,n)=>ic(e,typeof t!="symbol"?t+"":t,n);import{r as b,a as ac,c as kn,g as Ua,u as $a,b as tt,N as oc,R as nr,d as Ha,e as Ps,L as yt,B as lc,f as cc,h as Se}from"./vendor-DBLiMRUW.js";import{a as uc,c as Rn,m as sr}from"./utils-BuTnyny9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))s(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const o of a.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function s(r){if(r.ep)return;r.ep=!0;const a=n(r);fetch(r.href,a)}})();var qa={exports:{}},Vn={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dc=b,hc=Symbol.for("react.element"),pc=Symbol.for("react.fragment"),fc=Object.prototype.hasOwnProperty,mc=dc.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,gc={key:!0,ref:!0,__self:!0,__source:!0};function Wa(e,t,n){var s,r={},a=null,o=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(o=t.ref);for(s in t)fc.call(t,s)&&!gc.hasOwnProperty(s)&&(r[s]=t[s]);if(e&&e.defaultProps)for(s in t=e.defaultProps,t)r[s]===void 0&&(r[s]=t[s]);return{$$typeof:hc,type:e,key:a,ref:o,props:r,_owner:mc.current}}Vn.Fragment=pc;Vn.jsx=Wa;Vn.jsxs=Wa;qa.exports=Vn;var i=qa.exports,Is={},$r=ac;Is.createRoot=$r.createRoot,Is.hydrateRoot=$r.hydrateRoot;const xc=e=>(t,n,s)=>{const r=s.subscribe;return s.subscribe=(o,l,c)=>{let d=o;if(l){const u=(c==null?void 0:c.equalityFn)||Object.is;let h=o(s.getState());d=f=>{const p=o(f);if(!u(h,p)){const m=h;l(h=p,m)}},c!=null&&c.fireImmediately&&l(h,h)}return r(d)},e(t,n,s)},Fn=xc,Ya=()=>{localStorage.removeItem("authToken"),localStorage.removeItem("refreshToken"),localStorage.removeItem("userInfo"),localStorage.removeItem("isAuthenticated"),sessionStorage.removeItem("authToken"),sessionStorage.removeItem("refreshToken"),console.log("已清除所有认证信息")},Es=(e="/login")=>{Ya(),window.location.href=e},Sn=()=>localStorage.getItem("authToken")||sessionStorage.getItem("authToken");class yc{constructor(){ns(this,"client");const t="https://www.gmzyjx.com";this.client=uc.create({baseURL:t,timeout:3e4,headers:{"Content-Type":"application/json"},withCredentials:!0}),this.client.interceptors.request.use(n=>{const s=this.getCSRFToken();s&&(n.headers["X-CSRFToken"]=s);const r=Sn();return r&&(n.headers.Authorization=`Bearer ${r}`),n},n=>Promise.reject(n)),this.client.interceptors.response.use(n=>n,n=>{var s,r;return((s=n.response)==null?void 0:s.status)===401&&Es(),console.error("API Error:",((r=n.response)==null?void 0:r.data)||n.message),Promise.reject(n)})}getCSRFToken(){var n;return((n=document.cookie.split("; ").find(s=>s.startsWith("csrftoken=")))==null?void 0:n.split("=")[1])||null}async get(t,n){var s,r,a,o;try{const l=await this.client.get(t,n);return l.data.hasOwnProperty("success")?l.data:{success:!0,data:l.data}}catch(l){return{success:!1,error:((r=(s=l.response)==null?void 0:s.data)==null?void 0:r.error)||((o=(a=l.response)==null?void 0:a.data)==null?void 0:o.message)||l.message}}}async post(t,n,s){var r,a,o,l;try{const c=await this.client.post(t,n,s);return c.data.hasOwnProperty("success")?c.data:{success:!0,data:c.data}}catch(c){return{success:!1,error:((a=(r=c.response)==null?void 0:r.data)==null?void 0:a.error)||((l=(o=c.response)==null?void 0:o.data)==null?void 0:l.message)||c.message}}}async put(t,n,s){var r,a,o,l;try{const c=await this.client.put(t,n,s);return c.data.hasOwnProperty("success")?c.data:{success:!0,data:c.data}}catch(c){return{success:!1,error:((a=(r=c.response)==null?void 0:r.data)==null?void 0:a.error)||((l=(o=c.response)==null?void 0:o.data)==null?void 0:l.message)||c.message}}}async delete(t,n){var s,r,a,o;try{const l=await this.client.delete(t,n);return l.data.hasOwnProperty("success")?l.data:{success:!0,data:l.data}}catch(l){return{success:!1,error:((r=(s=l.response)==null?void 0:s.data)==null?void 0:r.error)||((o=(a=l.response)==null?void 0:a.data)==null?void 0:o.message)||l.message}}}async stream(t,n){return(await this.client.get(t,{...n,responseType:"stream"})).data}}const $=new yc,Hr={};class bc{async sendMessageStream(t,n){const s=Sn();if(!s)throw new Error("No authentication token found");const r=typeof import.meta<"u"&&Hr?"https://www.gmzyjx.com":"";try{const a=await fetch(r+"/ai/api/messages/send-stream/",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${s}`,"X-Requested-With":"XMLHttpRequest",Accept:"*/*"},mode:"cors",cache:"no-store",signal:n,body:JSON.stringify(t)});if(!a.ok){if(console.error(`API错误: ${a.status} ${a.statusText}`),a.status===401)throw Es(),new Error(`HTTP error! status: ${a.status}`);if(a.status===402)return console.warn("配额耗尽 (402 Payment Required)"),Object.defineProperty(a,"quotaExhausted",{value:!0,writable:!1,enumerable:!1,configurable:!1}),a;throw new Error(`HTTP error! status: ${a.status}`)}return a}catch(a){throw console.error("流式请求失败:",a),a}}getCSRFToken(){var n;return((n=document.cookie.split("; ").find(s=>s.startsWith("csrftoken=")))==null?void 0:n.split("=")[1])||null}async cancelMessage(t){return $.post("/ai/api/messages/cancel/",{message_id:t})}async getMessages(t,n=1,s=20){return $.get(`/ai/api/sessions/${t}/messages/`,{params:{page:n,page_size:s}})}async loadMoreMessages(t,n){return $.get(`/ai/api/sessions/${t}/load-old-messages/`,{params:{oldest_message_id:n}})}async deleteMessage(t){return $.delete(`/ai/api/messages/${t}/delete/`)}async deleteMultipleMessages(t){return $.post("/ai/api/messages/delete-multiple/",{message_ids:t})}async searchMessages(t,n=1,s=12,r="messages"){return $.get("/ai/api/search_messages/",{params:{q:t,page:n,page_size:s,search_type:r}})}async searchSharedContent(t,n=1,s=12){return $.get("/ai/api/search_messages/",{params:{q:t,page:n,page_size:s,search_type:"shared"}})}async streamMessage(t){return $.stream(`/ai/chat-stream/${t}/`)}async getSymptomsSummary(t){try{const n=await $.get(`/ai/api/sessions/${t}/symptoms-summary/`);return n.success&&n.data?n.data:{}}catch(n){return console.error("获取症状总结失败:",n),{}}}async getAIModelsConfig(){try{const t=await $.get("/ai/api/models/config/");return t.success?t.data:{aiModels:[{value:"ark",label:"豆包"},{value:"arkseedthink",label:"豆包推理"},{value:"deepseekr1",label:"DeepSeek推理"}],userModelPreference:"ark",defaultModel:"ark"}}catch(t){return console.error("获取AI模型配置失败:",t),{aiModels:[{value:"ark",label:"豆包"},{value:"arkseedthink",label:"豆包推理"},{value:"deepseekr1",label:"DeepSeek推理"}],userModelPreference:"ark",defaultModel:"ark"}}}async createContinuationSessionStream(t,n){const s=Sn();if(!s)throw new Error("No authentication token found");const a=(typeof import.meta<"u"&&Hr?"https://www.gmzyjx.com":"")+`/ai/api/sessions/${t}/create-continuation-stream/`;try{const o={"Content-Type":"application/json",Authorization:`Bearer ${s}`,"X-Requested-With":"XMLHttpRequest",Accept:"text/event-stream"},l=await fetch(a,{method:"POST",headers:o,mode:"cors",cache:"no-store",signal:n});if(!l.ok)throw console.error(`API错误: ${l.status} ${l.statusText}`),l.status===401&&Es(),new Error(`HTTP error! status: ${l.status}`);return l}catch(o){throw console.error("流式请求失败:",o),o}}}const be=new bc;class wc{async getSessions(t=1,n=20){return $.get("/ai/api/sessions/",{params:{page:t,page_size:n}})}async getSession(t){return $.get(`/ai/api/sessions/${t}/`)}async createSession(t){return $.post("/ai/api/sessions/create/",t)}async createContinuationSession(t,n){return $.post(`/ai/chat/${t}/continue/`,{title:n})}async updateSession(t,n){return $.put(`/ai/api/sessions/${t}/update/`,n)}async deleteSession(t){return $.delete(`/ai/api/sessions/${t}/delete/`)}async endSession(t){return $.post(`/ai/session/${t}/end/`)}async getUserStats(){return $.get("/ai/stats/")}async getSymptomTimeline(t){return $.get(`/ai/session/${t}/symptom-timeline/`)}async setHelpNeeded(t,n){return $.put(`/ai/session/${t}/help/`,{helpNeeded:n})}async getRealtimeInfo(t){return $.get(`/ai/realtime-chat/${t}/`)}async updateHelpSettings(t,n){return $.post(`/ai/help-settings/${t}/`,n)}}const Xe=new wc;class vc{async getShareHall(t=1,n=20,s,r,a){const o={page:t,page_size:n};return s&&(o.search=s),r&&(o.tag=r),a&&(o.sort=a),$.get("/ai/api/shared-sessions/",{params:o})}async viewSharedSession(t){return $.get(`/ai/api/shared-sessions/${t}/`)}async toggleLike(t){return $.post(`/ai/api/shared-sessions/${t}/like/`)}async addComment(t,n,s){const r={content:n};return s&&(r.parent_id=s),$.post(`/ai/api/shared-sessions/${t}/comment/`,r)}async deleteComment(t){return $.delete(`/ai/comment/${t}/delete/`)}async getComments(t,n=1,s=10){return $.get(`/ai/shared/${t}/comments/`,{params:{page:n,page_size:s}})}async adminShareSession(t,n){return $.post(`/ai/admin/share/${t}/`,n)}async reviewSharedSession(t,n,s){return $.post(`/ai/admin/shared/${t}/review/`,{approved:n,reason:s})}async getPendingReviews(t=1,n=20){return $.get("/ai/admin/shared/review/",{params:{page:t,page_size:n}})}async getMySharedSessions(t=1,n=20){return $.get("/ai/api/shared-sessions/my_shared/",{params:{page:t,page_size:n}})}async searchSharedSessions(t,n={}){const s={q:t,page:n.page||1,page_size:n.pageSize||10};return n.searchType&&(s.search_type=n.searchType),n.dateRange&&(s.date_range=n.dateRange),n.role&&(s.role=n.role),$.get("/ai/api/search/",{params:s})}}const jn=new vc;class kc{async getCurrentUser(){try{const t=localStorage.getItem("userInfo"),n=localStorage.getItem("isAuthenticated");if(console.log("userService: getCurrentUser",{userInfo:t?"exists":"null",isAuthenticated:n,userInfoLength:t?t.length:0}),t&&n==="true"){const s=JSON.parse(t);return console.log("userService: getCurrentUser 成功",s),{success:!0,data:{id:s.userId,username:s.username,email:s.email||"",firstName:"",lastName:"",isStaff:!1,isActive:!0,dateJoined:new Date().toISOString(),lastLogin:new Date().toISOString()}}}return console.log("userService: getCurrentUser 失败 - 用户未认证"),{success:!1,error:"User not authenticated"}}catch(t){return console.error("userService: getCurrentUser 异常:",t),{success:!1,error:"User not authenticated"}}}async getAIUsage(){return $.get("/users/api/ai-usage/")}async initializeAIUsage(){console.log("userService: 调用initializeAIUsage API");try{const t=await $.post("/ai/api/initialize-usage/");return console.log("userService: initializeAIUsage API响应:",t),t}catch(t){return console.error("userService: initializeAIUsage API错误:",t),{success:!1,error:t instanceof Error?t.message:"初始化AI使用情况失败"}}}async claimFreeMessages(){return $.post("/ai/claim_messages/")}async checkSubscriptionStatus(){return $.get("/ai/api/subscription/status/")}async getSubscriptionHistory(){return $.get("/ai/api/subscription/history/")}async createSubscription(){return $.post("/ai/api/subscription/create/")}async createExtraPackage(){return $.post("/ai/api/subscription/extra-package/create/")}async getUserPreferences(){const t=await this.checkPrivacyAgreementStatus();return{success:!0,data:{theme:"light",language:"zh-CN",aiModel:"ark",commonHerbs:[],privacyAgreementAccepted:t.success&&t.data?t.data.hasAccepted:!1}}}async updateUserPreferences(t){return{success:!0,data:t}}async acceptPrivacyAgreement(){return $.post("/ai/privacy-agreement/api/accept/")}async getPrivacyAgreementContent(){return $.get("/ai/privacy-agreement/api/content/")}async checkPrivacyAgreementStatus(){return $.get("/ai/privacy-agreement/api/status/")}async getUserProfile(){return $.get("/users/api/profile/")}async updateUserProfile(t){return $.post("/users/profile/edit/",t)}async checkAuthStatus(){try{const t=localStorage.getItem("isAuthenticated"),n=localStorage.getItem("userInfo");if(console.log("userService: checkAuthStatus - 检查本地认证状态",{isAuthenticated:t,userInfo:n?"exists":"null",result:t==="true"&&n!==null}),t==="true"&&n!==null)return console.log("userService: checkAuthStatus - 本地已认证，跳过Django检查"),!0;console.log("userService: checkAuthStatus - 本地未认证，检查Django后端认证状态");try{const s=await $.get("/users/api/simple-auth-check/");if(s.success&&s.data&&s.data.isAuthenticated){console.log("userService: checkAuthStatus - Django后端已认证，用户信息:",s.data);const r={userId:s.data.userId,username:s.data.username,email:s.data.email||""};return localStorage.setItem("userInfo",JSON.stringify(r)),localStorage.setItem("isAuthenticated","true"),s.data.access&&(localStorage.setItem("authToken",s.data.access),console.log("userService: checkAuthStatus - 已保存JWT access token")),s.data.refresh&&(localStorage.setItem("refreshToken",s.data.refresh),console.log("userService: checkAuthStatus - 已保存JWT refresh token")),console.log("userService: checkAuthStatus - 已同步Django用户信息和JWT token到本地存储"),!0}else return console.log("userService: checkAuthStatus - Django后端未认证"),!1}catch(s){return console.log("userService: checkAuthStatus - Django认证检查失败:",s),t==="true"&&n!==null}}catch(t){return console.error("userService: checkAuthStatus error:",t),!1}}async logout(){return Ya(),{success:!0,data:void 0}}}const Ae=new kc,ue=Rn()(Fn((e,t)=>({messages:[],totalMessagesCount:0,currentMessage:"",isLoading:!1,isSending:!1,hasMore:!0,currentPage:1,isLoadingOldMessages:!1,error:null,searchResults:[],searchQuery:"",isSearching:!1,setCurrentMessage:n=>{e({currentMessage:n})},cancelMessage:async n=>{try{await be.cancelMessage(n),e({isSending:!1})}catch(s){e({error:s.message||"取消发送失败"})}},loadMessages:async(n,s=1)=>{e({isLoading:!0,error:null});try{const r=await be.getMessages(n,s);if(r.success&&r.data){const{results:a,next:o,count:l}=r.data;e({messages:s===1?a:[...t().messages,...a],totalMessagesCount:l||0,hasMore:!!o,currentPage:s})}}catch(r){e({error:r.message||"加载消息失败"})}finally{e({isLoading:!1})}},loadMoreMessages:async n=>{var o;const{hasMore:s,isLoading:r,messages:a}=t();if(!(!s||r)){e({isLoading:!0,isLoadingOldMessages:!0,error:null});try{const c=(o=[...a].sort((p,m)=>new Date(p.createdAt).getTime()-new Date(m.createdAt).getTime())[0])==null?void 0:o.id;if(!c)return;const d=t().totalMessagesCount,u=d-a.length+1;console.log(`目前显示的是第${u}到${d}条`);const f=await be.loadMoreMessages(n,c);if(f.success&&f.data){const{messages:p,has_more:m,loaded_count:x}=f.data;e(v=>{const w={messages:[...p,...v.messages],hasMore:m,isLoadingOldMessages:!1},S=t().totalMessagesCount,k=p.length+v.messages.length,C=S-k+1,M=S-v.messages.length;return console.log(`本次载入了第${C}到${M}条`),w})}else e({isLoadingOldMessages:!1})}catch(l){console.error("载入旧消息失败:",l),e({error:l.message||"载入旧消息失败",isLoadingOldMessages:!1})}finally{e({isLoading:!1})}}},deleteMessage:async n=>{try{const s=await be.deleteMessage(n);if(s.success)e(r=>({messages:r.messages.filter(a=>a.id!==n),totalMessagesCount:Math.max(0,r.totalMessagesCount-1)}));else throw new Error(s.error||"删除消息失败")}catch(s){throw console.error("删除消息失败:",s),e({error:s.message||"删除消息失败"}),s}},deleteMessagesFrom:async n=>{try{const{messages:s}=t();console.log("返回此处 - 开始处理:",{messageId:n,totalMessages:s.length,messageIds:s.map(u=>({id:u.id,content:u.content.substring(0,20)}))});const r=[...s].sort((u,h)=>new Date(u.createdAt).getTime()-new Date(h.createdAt).getTime());console.log("返回此处 - 排序后:",{sortedMessagesCount:r.length,sortedMessageIds:r.map((u,h)=>({index:h,id:u.id,content:u.content.substring(0,30),createdAt:u.createdAt}))});const a=r.findIndex(u=>u.id===n);if(a===-1)throw new Error("消息不存在");const l=r[a].content,c=r.slice(a).map(u=>u.id);console.log("返回此处 - 删除计划:",{targetIndex:a,targetMessageId:n,targetMessageContent:l.substring(0,50)+"...",messagesToDelete:c.length,messagesToDeleteIds:c,willRemainCount:a});const d=await be.deleteMultipleMessages(c);if(d.success){const u=r.slice(0,a);console.log("返回此处 - 删除完成:",{totalMessages:s.length,sortedMessagesCount:r.length,targetIndex:a,targetMessageId:n,targetMessageContent:l.substring(0,50)+"...",messagesToDelete:c.length,messagesToDeleteIds:c,remainingMessages:u.length,remainingMessageIds:u.map(h=>h.id)}),e(()=>({messages:u}));try{const h=u.length>0?u[0].sessionId:null;if(h){const f=await be.getMessages(h,1);if(f.success&&f.data){const{count:p}=f.data;e(()=>({totalMessagesCount:p||u.length})),console.log("返回此处 - 重新获取消息数量:",p)}}}catch(h){console.error("重新获取消息数量失败:",h),e(()=>({totalMessagesCount:u.length}))}return console.log("返回此处 - 最终状态:",{finalMessagesCount:u.length,finalMessageIds:u.map(h=>h.id),finalMessagesContent:u.map(h=>h.content.substring(0,20))}),l}else throw new Error(d.error||"删除消息失败")}catch(s){throw console.error("删除消息失败:",s),e({error:s.message||"删除消息失败"}),s}},clearMessages:()=>{e({messages:[],totalMessagesCount:0,currentPage:1,hasMore:!0,error:null})},setError:n=>{e({error:n})},clearError:()=>{e({error:null})},addMessage:n=>{e(s=>({messages:[...s.messages,n],totalMessagesCount:s.totalMessagesCount+1}))},updateMessage:(n,s)=>{e(r=>{const a=[...r.messages];return n>=0&&n<a.length&&(a[n]=s),{messages:a}})},removeLastMessage:()=>{e(n=>({messages:n.messages.slice(0,-1),totalMessagesCount:Math.max(0,n.totalMessagesCount-1)}))},searchMessages:async(n,s=1)=>{e({isSearching:!0,searchQuery:n,error:null});try{const r=await be.searchMessages(n,s);r.success&&r.data&&e({searchResults:s===1?r.data.results:[...t().searchResults,...r.data.results]})}catch(r){e({error:r.message||"搜索失败"})}finally{e({isSearching:!1})}},clearSearchResults:()=>{e({searchResults:[],searchQuery:"",isSearching:!1})}})));var Nn=(e=>(e.ONGOING="ongoing",e.COMPLETED="completed",e))(Nn||{}),Pe=(e=>(e.SYSTEM="system",e.USER="user",e.ASSISTANT="assistant",e))(Pe||{});const Gt=Rn()(Fn((e,t)=>({sessions:[],currentSession:null,isLoading:!1,hasMore:!0,currentPage:1,error:null,stats:null,loadSessions:async(n=1)=>{e({isLoading:!0,error:null});try{const s=await Xe.getSessions(n);if(console.log("API响应:",s),s.success&&s.data){const{results:r,next:a}=s.data,o=t().sessions||[];console.log("会话数据:",r),e({sessions:n===1?r||[]:[...o,...r||[]],hasMore:!!a,currentPage:n})}else console.error("API调用失败:",s),e({sessions:[]})}catch(s){e({error:s.message||"加载会话列表失败",sessions:[]})}finally{e({isLoading:!1})}},loadMoreSessions:async()=>{const{currentPage:n,hasMore:s,isLoading:r}=t();!s||r||await t().loadSessions(n+1)},createSession:async(n,s)=>{e({error:null});try{const r=await Xe.createSession({title:n,parentSessionId:s});return r.success&&r.data?(e(a=>({sessions:[r.data,...a.sessions],currentSession:r.data})),r.data):null}catch(r){return e({error:r.message||"创建会话失败"}),null}},updateSession:async(n,s)=>{e({error:null});try{const r=await Xe.updateSession(n,s);r.success&&r.data&&e(a=>{var o;return{sessions:a.sessions.map(l=>l.id===n?{...l,...r.data}:l),currentSession:((o=a.currentSession)==null?void 0:o.id)===n?{...a.currentSession,...r.data}:a.currentSession}})}catch(r){e({error:r.message||"更新会话失败"})}},deleteSession:async n=>{e({error:null});try{(await Xe.deleteSession(n)).success&&e(r=>{var a;return{sessions:r.sessions.filter(o=>o.id!==n),currentSession:((a=r.currentSession)==null?void 0:a.id)===n?null:r.currentSession}})}catch(s){e({error:s.message||"删除会话失败"})}},endSession:async n=>{e({error:null});try{(await Xe.endSession(n)).success&&await t().updateSession(n,{status:Nn.COMPLETED})}catch(s){e({error:s.message||"结束会话失败"})}},setCurrentSession:n=>{e({currentSession:n})},getCurrentSession:async n=>{e({isLoading:!0,error:null});try{const s=await Xe.getSession(n);s.success&&s.data&&e({currentSession:s.data})}catch(s){e({error:s.message||"获取会话详情失败"})}finally{e({isLoading:!1})}},createContinuationSession:async(n,s)=>{e({error:null});try{const r=await Xe.createContinuationSession(n,s);return r.success&&r.data?(e(a=>({sessions:[r.data,...a.sessions],currentSession:r.data})),r.data):null}catch(r){return e({error:r.message||"创建续话会话失败"}),null}},setHelpNeeded:async(n,s)=>{e({error:null});try{(await Xe.setHelpNeeded(n,s)).success&&await t().updateSession(n,{helpNeeded:s})}catch(r){e({error:r.message||"设置求助状态失败"})}},loadStats:async()=>{try{const n=await Xe.getUserStats();n.success&&n.data&&e({stats:n.data})}catch(n){console.error("加载统计信息失败:",n)}},setError:n=>{e({error:n})},clearError:()=>{e({error:null})},clearSessions:()=>{e({sessions:[],currentPage:1,hasMore:!0,error:null})},clearCurrentSession:()=>{e({currentSession:null})}}))),ze=Rn()(Fn((e,t)=>({user:null,aiUsage:null,isAuthenticated:!1,isLoading:!1,subscriptionStatus:null,preferences:null,error:null,initialized:!1,loadCurrentUser:async()=>{e({isLoading:!0,error:null});try{const n=await Ae.getCurrentUser();n.success&&n.data?(e({user:n.data,isAuthenticated:!0}),await Promise.all([t().loadAIUsage(),t().loadSubscriptionStatus(),t().loadUserPreferences()])):e({user:null,isAuthenticated:!1})}catch(n){e({error:n.message||"获取用户信息失败",user:null,isAuthenticated:!1})}finally{e({isLoading:!1})}},loadAIUsage:async()=>{try{const n=await Ae.getAIUsage();if(n.success&&n.data)e({aiUsage:n.data});else if(n.error==="未找到用户AI使用记录"){console.log("未找到用户AI使用记录，尝试初始化");const s=await Ae.initializeAIUsage();if(s.success&&s.data)return console.log("初始化AI使用情况成功:",s.data),s.data.usage&&e({aiUsage:s.data.usage}),s.data;console.error("初始化AI使用情况失败:",s.error)}}catch(n){console.error("加载AI使用情况失败:",n)}},loadSubscriptionStatus:async()=>{try{const n=await Ae.checkSubscriptionStatus();if(n.success&&n.data){const s={isVip:n.data.is_subscribed||!1,isPermanentVip:n.data.permanent_remaining>1e3,expiryDate:n.data.subscription_end_date||null,remainingMessages:n.data.monthly_remaining||0,monthlyQuota:n.data.current_month_quota||0,permanentRemaining:n.data.permanent_remaining||0,monthlyUsed:n.data.monthly_used||0,totalRemaining:n.data.total_remaining||0};return e({subscriptionStatus:s}),s}else if(n.error&&(n.error.includes("404")||n.error.includes("Not Found"))){console.log("订阅状态API不存在，使用aiUsage数据");const s=t().aiUsage;if(s){const r={isVip:s.subscriptionActive||!1,isPermanentVip:!1,expiryDate:s.subscriptionEndDate||null,remainingMessages:s.currentMonthQuota-s.currentMonthUsed||0,monthlyQuota:s.currentMonthQuota||0,permanentRemaining:s.remainingCount||0,monthlyUsed:s.currentMonthUsed||0,totalRemaining:s.remainingCount+(s.currentMonthQuota-s.currentMonthUsed)||0};return e({subscriptionStatus:r}),r}}return null}catch(n){console.error("加载订阅状态失败:",n);const s=t().aiUsage;if(s){const r={isVip:s.subscriptionActive||!1,isPermanentVip:!1,expiryDate:s.subscriptionEndDate||null,remainingMessages:s.currentMonthQuota-s.currentMonthUsed||0,monthlyQuota:s.currentMonthQuota||0,permanentRemaining:s.remainingCount||0,monthlyUsed:s.currentMonthUsed||0,totalRemaining:s.remainingCount+(s.currentMonthQuota-s.currentMonthUsed)||0};return e({subscriptionStatus:r}),r}return null}},loadUserPreferences:async()=>{try{const n=await Ae.getUserPreferences();n.success&&n.data&&e({preferences:n.data})}catch(n){console.error("加载用户偏好失败:",n)}},claimFreeMessages:async()=>{e({error:null});try{const n=await Ae.claimFreeMessages();return n.success?(await t().loadAIUsage(),!0):(e({error:n.error||"领取免费消息失败"}),!1)}catch(n){return e({error:n.message||"领取免费消息失败"}),!1}},acceptPrivacyAgreement:async()=>{e({error:null});try{const n=await Ae.acceptPrivacyAgreement();return n.success?(await t().loadUserPreferences(),e(s=>{var r,a;return{preferences:{privacyAgreementAccepted:!0,aiModel:((r=s.preferences)==null?void 0:r.aiModel)||"ark",commonHerbs:((a=s.preferences)==null?void 0:a.commonHerbs)||[]}}}),!0):(e({error:n.error||"接受隐私协议失败"}),!1)}catch(n){return e({error:n.message||"接受隐私协议失败"}),!1}},updatePreferences:async n=>{e({error:null});try{const s=await Ae.updateUserPreferences(n);s.success&&s.data&&e({preferences:s.data})}catch(s){e({error:s.message||"更新偏好设置失败"})}},checkAuthStatus:async()=>{try{console.log("userStore: 开始检查认证状态"),t().isLoading||e({isLoading:!0,error:null});const s=await Ae.checkAuthStatus();return console.log("userStore: 认证状态检查结果:",s),s?(console.log("userStore: 用户已认证，加载用户信息"),await t().loadCurrentUser()):(console.log("userStore: 用户未认证"),e({isAuthenticated:!1,user:null,isLoading:!1})),s}catch(n){return console.error("userStore: 认证状态检查失败:",n),e({isAuthenticated:!1,user:null,isLoading:!1,error:n.message||"检查认证状态失败"}),!1}},logout:async()=>{try{await Ae.logout()}catch(n){console.error("登出失败:",n)}finally{t().clearUser(),window.location.href="/login"}},setError:n=>{e({error:n})},clearError:()=>{e({error:null})},clearUser:()=>{e({user:null,aiUsage:null,isAuthenticated:!1,subscriptionStatus:null,preferences:null,error:null})},initialize:async()=>{if(t().initialized){console.log("userStore: 已经初始化过，跳过");return}console.log("userStore: 开始初始化"),e({initialized:!0,isLoading:!0}),await t().checkAuthStatus(),t().isAuthenticated&&(console.log("userStore: 用户已认证，加载其他数据"),await Promise.all([t().loadAIUsage(),t().loadSubscriptionStatus(),t().loadUserPreferences()])),console.log("userStore: 初始化完成")}}))),qe=Rn()(Fn((e,t)=>({globalLoading:!1,sidebarOpen:!0,sidebarCollapsed:!1,modals:{deleteSession:{open:!1,sessionId:null},shareSession:{open:!1,sessionId:null},helpSettings:{open:!1,sessionId:null},privacyAgreement:{open:!1}},notifications:[],theme:"light",isMobile:!1,setGlobalLoading:n=>{e({globalLoading:n})},toggleSidebar:()=>{e(n=>({sidebarOpen:!n.sidebarOpen}))},setSidebarOpen:n=>{e({sidebarOpen:n})},toggleSidebarCollapse:()=>{e(n=>({sidebarCollapsed:!n.sidebarCollapsed}))},setSidebarCollapsed:n=>{e({sidebarCollapsed:n})},openModal:(n,s={})=>{e(r=>({modals:{...r.modals,[n]:{open:!0,...s}}}))},closeModal:n=>{e(s=>({modals:{...s.modals,[n]:{...s.modals[n],open:!1}}}))},closeAllModals:()=>{e({modals:{deleteSession:{open:!1,sessionId:null},shareSession:{open:!1,sessionId:null},helpSettings:{open:!1,sessionId:null},privacyAgreement:{open:!1}}})},addNotification:n=>{const s=Date.now().toString(),r={id:s,autoClose:!0,duration:5e3,...n};e(a=>({notifications:[...a.notifications,r]})),r.autoClose&&setTimeout(()=>{t().removeNotification(s)},r.duration)},removeNotification:n=>{e(s=>({notifications:s.notifications.filter(r=>r.id!==n)}))},clearNotifications:()=>{e({notifications:[]})},setTheme:n=>{e({theme:n}),localStorage.setItem("theme",n),n==="dark"?document.documentElement.classList.add("dark"):n==="light"?document.documentElement.classList.remove("dark"):window.matchMedia("(prefers-color-scheme: dark)").matches?document.documentElement.classList.add("dark"):document.documentElement.classList.remove("dark")},toggleTheme:()=>{const{theme:n}=t(),s=n==="light"?"dark":"light";t().setTheme(s)},setIsMobile:n=>{e({isMobile:n})}}))),qr=localStorage.getItem("theme");qr&&qe.getState().setTheme(qr);if(typeof window<"u"){window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",()=>{const{theme:t}=qe.getState();t==="auto"&&qe.getState().setTheme("auto")});const e=()=>{qe.getState().setIsMobile(window.innerWidth<=768)};e(),window.addEventListener("resize",e)}const Sc=({session:e,messageCount:t})=>{const{updateSession:n}=Gt(),[s,r]=b.useState(!1),[a,o]=b.useState(e.title),[l,c]=b.useState(!1),d=async()=>{if(!s){r(!0);return}if(a.trim()===e.title||!a.trim()){o(e.title),r(!1);return}c(!0);try{await n(e.id,{title:a.trim()}),r(!1)}catch(f){console.error("更新标题失败:",f)}finally{c(!1)}},u=f=>{f.key==="Enter"?(f.preventDefault(),d()):f.key==="Escape"&&(o(e.title),r(!1))},h=()=>{switch(e.status){case Nn.ONGOING:return"进行中";case Nn.COMPLETED:return"已完成";default:return"未知状态"}};return i.jsxs("div",{className:"session-header",children:[i.jsx("div",{className:"header-main",children:s?i.jsxs("div",{className:"title-edit",children:[i.jsx("input",{type:"text",value:a,onChange:f=>o(f.target.value),onKeyDown:u,autoFocus:!0,disabled:l}),i.jsxs("div",{className:"edit-actions",children:[i.jsx("button",{onClick:d,disabled:l,className:"save-button",children:l?"保存中...":"保存"}),i.jsx("button",{onClick:()=>{o(e.title),r(!1)},disabled:l,className:"cancel-button",children:"取消"})]})]}):i.jsxs("h1",{onClick:d,children:[e.title,i.jsx("span",{className:"edit-icon",children:"✏️"})]})}),i.jsxs("div",{className:"session-meta",children:[i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-label",children:"会话ID:"})," ",e.id]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-label",children:"状态:"}),i.jsx("span",{className:`status-badge ${e.status}`,children:h()})]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-label",children:"创建时间:"}),new Date(e.createdAt).toLocaleString()]}),i.jsxs("span",{className:"meta-item",children:[i.jsx("span",{className:"meta-label",children:"消息数量:"}),t||0]})]}),i.jsx("style",{children:`
        .session-header {
          padding: 20px 24px;
          background: white;
          border-bottom: 1px solid #e9ecef;
        }
        
        .header-main {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
        }
        
        h1 {
          margin: 0;
          font-size: 20px;
          color: #2d3748;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          width: 100%;
        }
        
        .edit-icon {
          opacity: 0;
          font-size: 16px;
          transition: opacity 0.2s;
        }
        
        h1:hover .edit-icon {
          opacity: 1;
        }
        
        .title-edit {
          display: flex;
          gap: 12px;
          align-items: center;
          width: 100%;
        }
        
        .title-edit input {
          flex: 1;
          padding: 8px 12px;
          font-size: 18px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
        }
        
        .title-edit input:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }
        
        .edit-actions {
          display: flex;
          gap: 8px;
        }
        
        .save-button,
        .cancel-button {
          padding: 6px 12px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .save-button {
          background: #3182ce;
          color: white;
        }
        
        .save-button:hover:not(:disabled) {
          background: #2c5aa0;
        }
        
        .cancel-button {
          background: #e9ecef;
          color: #495057;
        }
        
        .cancel-button:hover:not(:disabled) {
          background: #dee2e6;
        }
        
        .header-actions {
          display: flex;
          gap: 12px;
        }
        
        .continuation-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          background: #4299e1;
          color: white;
        }
        
        .continuation-button:hover:not(:disabled) {
          background: #3182ce;
        }
        
        .end-button,
        .share-button {
          padding: 8px 16px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
        }
        
        .end-button {
          background: #dc3545;
          color: white;
        }
        
        .end-button:hover:not(:disabled) {
          background: #c82333;
        }
        
        .share-button {
          background: #28a745;
          color: white;
        }
        
        .share-button:hover:not(:disabled) {
          background: #218838;
        }
        
        button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .session-meta {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          font-size: 13px;
          color: #6c757d;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .meta-label {
          font-weight: 500;
        }
        
        .status-badge,
        .effect-badge {
          padding: 2px 6px;
          border-radius: 10px;
          font-size: 12px;
        }
        
        .status-badge.ongoing {
          background: #e3f2fd;
          color: #0d47a1;
        }
        
        .status-badge.completed {
          background: #e8f5e9;
          color: #1b5e20;
        }
        
        .effect-badge.positive {
          background: #e8f5e9;
          color: #1b5e20;
        }
        
        .effect-badge.negative {
          background: #ffebee;
          color: #b71c1c;
        }
        
        .effect-badge.no_effect {
          background: #fff3e0;
          color: #e65100;
        }
        
        .effect-badge.abandoned {
          background: #f3e5f5;
          color: #4a148c;
        }
        
        .effect-badge.unknown {
          background: #f5f5f5;
          color: #616161;
        }
        
        @media (max-width: 768px) {
          .session-header {
            padding: 16px;
          }
          
          .header-main {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
          
          .header-actions {
            width: 100%;
          }
          
          .end-button,
          .share-button {
            flex: 1;
            text-align: center;
          }
          
          .session-meta {
            flex-direction: column;
            gap: 8px;
          }
        }
      `})]})};function jc(e,t){const n={};return(e[e.length-1]===""?[...e,""]:e).join((n.padRight?" ":"")+","+(n.padLeft===!1?"":" ")).trim()}const Nc=/^[$_\p{ID_Start}][$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Cc=/^[$_\p{ID_Start}][-$_\u{200C}\u{200D}\p{ID_Continue}]*$/u,Tc={};function Wr(e,t){return(Tc.jsx?Cc:Nc).test(e)}const Ac=/[ \t\n\f\r]/g;function Pc(e){return typeof e=="object"?e.type==="text"?Yr(e.value):!1:Yr(e)}function Yr(e){return e.replace(Ac,"")===""}class Zt{constructor(t,n,s){this.normal=n,this.property=t,s&&(this.space=s)}}Zt.prototype.normal={};Zt.prototype.property={};Zt.prototype.space=void 0;function Ga(e,t){const n={},s={};for(const r of e)Object.assign(n,r.property),Object.assign(s,r.normal);return new Zt(n,s,t)}function Ms(e){return e.toLowerCase()}class Me{constructor(t,n){this.attribute=n,this.property=t}}Me.prototype.attribute="";Me.prototype.booleanish=!1;Me.prototype.boolean=!1;Me.prototype.commaOrSpaceSeparated=!1;Me.prototype.commaSeparated=!1;Me.prototype.defined=!1;Me.prototype.mustUseProperty=!1;Me.prototype.number=!1;Me.prototype.overloadedBoolean=!1;Me.prototype.property="";Me.prototype.spaceSeparated=!1;Me.prototype.space=void 0;let Ic=0;const J=wt(),ge=wt(),Ds=wt(),P=wt(),oe=wt(),At=wt(),De=wt();function wt(){return 2**++Ic}const Ls=Object.freeze(Object.defineProperty({__proto__:null,boolean:J,booleanish:ge,commaOrSpaceSeparated:De,commaSeparated:At,number:P,overloadedBoolean:Ds,spaceSeparated:oe},Symbol.toStringTag,{value:"Module"})),ss=Object.keys(Ls);class rr extends Me{constructor(t,n,s,r){let a=-1;if(super(t,n),Gr(this,"space",r),typeof s=="number")for(;++a<ss.length;){const o=ss[a];Gr(this,ss[a],(s&Ls[o])===Ls[o])}}}rr.prototype.defined=!0;function Gr(e,t,n){n&&(e[t]=n)}function Dt(e){const t={},n={};for(const[s,r]of Object.entries(e.properties)){const a=new rr(s,e.transform(e.attributes||{},s),r,e.space);e.mustUseProperty&&e.mustUseProperty.includes(s)&&(a.mustUseProperty=!0),t[s]=a,n[Ms(s)]=s,n[Ms(a.attribute)]=s}return new Zt(t,n,e.space)}const Ka=Dt({properties:{ariaActiveDescendant:null,ariaAtomic:ge,ariaAutoComplete:null,ariaBusy:ge,ariaChecked:ge,ariaColCount:P,ariaColIndex:P,ariaColSpan:P,ariaControls:oe,ariaCurrent:null,ariaDescribedBy:oe,ariaDetails:null,ariaDisabled:ge,ariaDropEffect:oe,ariaErrorMessage:null,ariaExpanded:ge,ariaFlowTo:oe,ariaGrabbed:ge,ariaHasPopup:null,ariaHidden:ge,ariaInvalid:null,ariaKeyShortcuts:null,ariaLabel:null,ariaLabelledBy:oe,ariaLevel:P,ariaLive:null,ariaModal:ge,ariaMultiLine:ge,ariaMultiSelectable:ge,ariaOrientation:null,ariaOwns:oe,ariaPlaceholder:null,ariaPosInSet:P,ariaPressed:ge,ariaReadOnly:ge,ariaRelevant:null,ariaRequired:ge,ariaRoleDescription:oe,ariaRowCount:P,ariaRowIndex:P,ariaRowSpan:P,ariaSelected:ge,ariaSetSize:P,ariaSort:null,ariaValueMax:P,ariaValueMin:P,ariaValueNow:P,ariaValueText:null,role:null},transform(e,t){return t==="role"?t:"aria-"+t.slice(4).toLowerCase()}});function Xa(e,t){return t in e?e[t]:t}function Qa(e,t){return Xa(e,t.toLowerCase())}const Ec=Dt({attributes:{acceptcharset:"accept-charset",classname:"class",htmlfor:"for",httpequiv:"http-equiv"},mustUseProperty:["checked","multiple","muted","selected"],properties:{abbr:null,accept:At,acceptCharset:oe,accessKey:oe,action:null,allow:null,allowFullScreen:J,allowPaymentRequest:J,allowUserMedia:J,alt:null,as:null,async:J,autoCapitalize:null,autoComplete:oe,autoFocus:J,autoPlay:J,blocking:oe,capture:null,charSet:null,checked:J,cite:null,className:oe,cols:P,colSpan:null,content:null,contentEditable:ge,controls:J,controlsList:oe,coords:P|At,crossOrigin:null,data:null,dateTime:null,decoding:null,default:J,defer:J,dir:null,dirName:null,disabled:J,download:Ds,draggable:ge,encType:null,enterKeyHint:null,fetchPriority:null,form:null,formAction:null,formEncType:null,formMethod:null,formNoValidate:J,formTarget:null,headers:oe,height:P,hidden:Ds,high:P,href:null,hrefLang:null,htmlFor:oe,httpEquiv:oe,id:null,imageSizes:null,imageSrcSet:null,inert:J,inputMode:null,integrity:null,is:null,isMap:J,itemId:null,itemProp:oe,itemRef:oe,itemScope:J,itemType:oe,kind:null,label:null,lang:null,language:null,list:null,loading:null,loop:J,low:P,manifest:null,max:null,maxLength:P,media:null,method:null,min:null,minLength:P,multiple:J,muted:J,name:null,nonce:null,noModule:J,noValidate:J,onAbort:null,onAfterPrint:null,onAuxClick:null,onBeforeMatch:null,onBeforePrint:null,onBeforeToggle:null,onBeforeUnload:null,onBlur:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onContextLost:null,onContextMenu:null,onContextRestored:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnded:null,onError:null,onFocus:null,onFormData:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLanguageChange:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadEnd:null,onLoadStart:null,onMessage:null,onMessageError:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRejectionHandled:null,onReset:null,onResize:null,onScroll:null,onScrollEnd:null,onSecurityPolicyViolation:null,onSeeked:null,onSeeking:null,onSelect:null,onSlotChange:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnhandledRejection:null,onUnload:null,onVolumeChange:null,onWaiting:null,onWheel:null,open:J,optimum:P,pattern:null,ping:oe,placeholder:null,playsInline:J,popover:null,popoverTarget:null,popoverTargetAction:null,poster:null,preload:null,readOnly:J,referrerPolicy:null,rel:oe,required:J,reversed:J,rows:P,rowSpan:P,sandbox:oe,scope:null,scoped:J,seamless:J,selected:J,shadowRootClonable:J,shadowRootDelegatesFocus:J,shadowRootMode:null,shape:null,size:P,sizes:null,slot:null,span:P,spellCheck:ge,src:null,srcDoc:null,srcLang:null,srcSet:null,start:P,step:null,style:null,tabIndex:P,target:null,title:null,translate:null,type:null,typeMustMatch:J,useMap:null,value:ge,width:P,wrap:null,writingSuggestions:null,align:null,aLink:null,archive:oe,axis:null,background:null,bgColor:null,border:P,borderColor:null,bottomMargin:P,cellPadding:null,cellSpacing:null,char:null,charOff:null,classId:null,clear:null,code:null,codeBase:null,codeType:null,color:null,compact:J,declare:J,event:null,face:null,frame:null,frameBorder:null,hSpace:P,leftMargin:P,link:null,longDesc:null,lowSrc:null,marginHeight:P,marginWidth:P,noResize:J,noHref:J,noShade:J,noWrap:J,object:null,profile:null,prompt:null,rev:null,rightMargin:P,rules:null,scheme:null,scrolling:ge,standby:null,summary:null,text:null,topMargin:P,valueType:null,version:null,vAlign:null,vLink:null,vSpace:P,allowTransparency:null,autoCorrect:null,autoSave:null,disablePictureInPicture:J,disableRemotePlayback:J,prefix:null,property:null,results:P,security:null,unselectable:null},space:"html",transform:Qa}),Mc=Dt({attributes:{accentHeight:"accent-height",alignmentBaseline:"alignment-baseline",arabicForm:"arabic-form",baselineShift:"baseline-shift",capHeight:"cap-height",className:"class",clipPath:"clip-path",clipRule:"clip-rule",colorInterpolation:"color-interpolation",colorInterpolationFilters:"color-interpolation-filters",colorProfile:"color-profile",colorRendering:"color-rendering",crossOrigin:"crossorigin",dataType:"datatype",dominantBaseline:"dominant-baseline",enableBackground:"enable-background",fillOpacity:"fill-opacity",fillRule:"fill-rule",floodColor:"flood-color",floodOpacity:"flood-opacity",fontFamily:"font-family",fontSize:"font-size",fontSizeAdjust:"font-size-adjust",fontStretch:"font-stretch",fontStyle:"font-style",fontVariant:"font-variant",fontWeight:"font-weight",glyphName:"glyph-name",glyphOrientationHorizontal:"glyph-orientation-horizontal",glyphOrientationVertical:"glyph-orientation-vertical",hrefLang:"hreflang",horizAdvX:"horiz-adv-x",horizOriginX:"horiz-origin-x",horizOriginY:"horiz-origin-y",imageRendering:"image-rendering",letterSpacing:"letter-spacing",lightingColor:"lighting-color",markerEnd:"marker-end",markerMid:"marker-mid",markerStart:"marker-start",navDown:"nav-down",navDownLeft:"nav-down-left",navDownRight:"nav-down-right",navLeft:"nav-left",navNext:"nav-next",navPrev:"nav-prev",navRight:"nav-right",navUp:"nav-up",navUpLeft:"nav-up-left",navUpRight:"nav-up-right",onAbort:"onabort",onActivate:"onactivate",onAfterPrint:"onafterprint",onBeforePrint:"onbeforeprint",onBegin:"onbegin",onCancel:"oncancel",onCanPlay:"oncanplay",onCanPlayThrough:"oncanplaythrough",onChange:"onchange",onClick:"onclick",onClose:"onclose",onCopy:"oncopy",onCueChange:"oncuechange",onCut:"oncut",onDblClick:"ondblclick",onDrag:"ondrag",onDragEnd:"ondragend",onDragEnter:"ondragenter",onDragExit:"ondragexit",onDragLeave:"ondragleave",onDragOver:"ondragover",onDragStart:"ondragstart",onDrop:"ondrop",onDurationChange:"ondurationchange",onEmptied:"onemptied",onEnd:"onend",onEnded:"onended",onError:"onerror",onFocus:"onfocus",onFocusIn:"onfocusin",onFocusOut:"onfocusout",onHashChange:"onhashchange",onInput:"oninput",onInvalid:"oninvalid",onKeyDown:"onkeydown",onKeyPress:"onkeypress",onKeyUp:"onkeyup",onLoad:"onload",onLoadedData:"onloadeddata",onLoadedMetadata:"onloadedmetadata",onLoadStart:"onloadstart",onMessage:"onmessage",onMouseDown:"onmousedown",onMouseEnter:"onmouseenter",onMouseLeave:"onmouseleave",onMouseMove:"onmousemove",onMouseOut:"onmouseout",onMouseOver:"onmouseover",onMouseUp:"onmouseup",onMouseWheel:"onmousewheel",onOffline:"onoffline",onOnline:"ononline",onPageHide:"onpagehide",onPageShow:"onpageshow",onPaste:"onpaste",onPause:"onpause",onPlay:"onplay",onPlaying:"onplaying",onPopState:"onpopstate",onProgress:"onprogress",onRateChange:"onratechange",onRepeat:"onrepeat",onReset:"onreset",onResize:"onresize",onScroll:"onscroll",onSeeked:"onseeked",onSeeking:"onseeking",onSelect:"onselect",onShow:"onshow",onStalled:"onstalled",onStorage:"onstorage",onSubmit:"onsubmit",onSuspend:"onsuspend",onTimeUpdate:"ontimeupdate",onToggle:"ontoggle",onUnload:"onunload",onVolumeChange:"onvolumechange",onWaiting:"onwaiting",onZoom:"onzoom",overlinePosition:"overline-position",overlineThickness:"overline-thickness",paintOrder:"paint-order",panose1:"panose-1",pointerEvents:"pointer-events",referrerPolicy:"referrerpolicy",renderingIntent:"rendering-intent",shapeRendering:"shape-rendering",stopColor:"stop-color",stopOpacity:"stop-opacity",strikethroughPosition:"strikethrough-position",strikethroughThickness:"strikethrough-thickness",strokeDashArray:"stroke-dasharray",strokeDashOffset:"stroke-dashoffset",strokeLineCap:"stroke-linecap",strokeLineJoin:"stroke-linejoin",strokeMiterLimit:"stroke-miterlimit",strokeOpacity:"stroke-opacity",strokeWidth:"stroke-width",tabIndex:"tabindex",textAnchor:"text-anchor",textDecoration:"text-decoration",textRendering:"text-rendering",transformOrigin:"transform-origin",typeOf:"typeof",underlinePosition:"underline-position",underlineThickness:"underline-thickness",unicodeBidi:"unicode-bidi",unicodeRange:"unicode-range",unitsPerEm:"units-per-em",vAlphabetic:"v-alphabetic",vHanging:"v-hanging",vIdeographic:"v-ideographic",vMathematical:"v-mathematical",vectorEffect:"vector-effect",vertAdvY:"vert-adv-y",vertOriginX:"vert-origin-x",vertOriginY:"vert-origin-y",wordSpacing:"word-spacing",writingMode:"writing-mode",xHeight:"x-height",playbackOrder:"playbackorder",timelineBegin:"timelinebegin"},properties:{about:De,accentHeight:P,accumulate:null,additive:null,alignmentBaseline:null,alphabetic:P,amplitude:P,arabicForm:null,ascent:P,attributeName:null,attributeType:null,azimuth:P,bandwidth:null,baselineShift:null,baseFrequency:null,baseProfile:null,bbox:null,begin:null,bias:P,by:null,calcMode:null,capHeight:P,className:oe,clip:null,clipPath:null,clipPathUnits:null,clipRule:null,color:null,colorInterpolation:null,colorInterpolationFilters:null,colorProfile:null,colorRendering:null,content:null,contentScriptType:null,contentStyleType:null,crossOrigin:null,cursor:null,cx:null,cy:null,d:null,dataType:null,defaultAction:null,descent:P,diffuseConstant:P,direction:null,display:null,dur:null,divisor:P,dominantBaseline:null,download:J,dx:null,dy:null,edgeMode:null,editable:null,elevation:P,enableBackground:null,end:null,event:null,exponent:P,externalResourcesRequired:null,fill:null,fillOpacity:P,fillRule:null,filter:null,filterRes:null,filterUnits:null,floodColor:null,floodOpacity:null,focusable:null,focusHighlight:null,fontFamily:null,fontSize:null,fontSizeAdjust:null,fontStretch:null,fontStyle:null,fontVariant:null,fontWeight:null,format:null,fr:null,from:null,fx:null,fy:null,g1:At,g2:At,glyphName:At,glyphOrientationHorizontal:null,glyphOrientationVertical:null,glyphRef:null,gradientTransform:null,gradientUnits:null,handler:null,hanging:P,hatchContentUnits:null,hatchUnits:null,height:null,href:null,hrefLang:null,horizAdvX:P,horizOriginX:P,horizOriginY:P,id:null,ideographic:P,imageRendering:null,initialVisibility:null,in:null,in2:null,intercept:P,k:P,k1:P,k2:P,k3:P,k4:P,kernelMatrix:De,kernelUnitLength:null,keyPoints:null,keySplines:null,keyTimes:null,kerning:null,lang:null,lengthAdjust:null,letterSpacing:null,lightingColor:null,limitingConeAngle:P,local:null,markerEnd:null,markerMid:null,markerStart:null,markerHeight:null,markerUnits:null,markerWidth:null,mask:null,maskContentUnits:null,maskUnits:null,mathematical:null,max:null,media:null,mediaCharacterEncoding:null,mediaContentEncodings:null,mediaSize:P,mediaTime:null,method:null,min:null,mode:null,name:null,navDown:null,navDownLeft:null,navDownRight:null,navLeft:null,navNext:null,navPrev:null,navRight:null,navUp:null,navUpLeft:null,navUpRight:null,numOctaves:null,observer:null,offset:null,onAbort:null,onActivate:null,onAfterPrint:null,onBeforePrint:null,onBegin:null,onCancel:null,onCanPlay:null,onCanPlayThrough:null,onChange:null,onClick:null,onClose:null,onCopy:null,onCueChange:null,onCut:null,onDblClick:null,onDrag:null,onDragEnd:null,onDragEnter:null,onDragExit:null,onDragLeave:null,onDragOver:null,onDragStart:null,onDrop:null,onDurationChange:null,onEmptied:null,onEnd:null,onEnded:null,onError:null,onFocus:null,onFocusIn:null,onFocusOut:null,onHashChange:null,onInput:null,onInvalid:null,onKeyDown:null,onKeyPress:null,onKeyUp:null,onLoad:null,onLoadedData:null,onLoadedMetadata:null,onLoadStart:null,onMessage:null,onMouseDown:null,onMouseEnter:null,onMouseLeave:null,onMouseMove:null,onMouseOut:null,onMouseOver:null,onMouseUp:null,onMouseWheel:null,onOffline:null,onOnline:null,onPageHide:null,onPageShow:null,onPaste:null,onPause:null,onPlay:null,onPlaying:null,onPopState:null,onProgress:null,onRateChange:null,onRepeat:null,onReset:null,onResize:null,onScroll:null,onSeeked:null,onSeeking:null,onSelect:null,onShow:null,onStalled:null,onStorage:null,onSubmit:null,onSuspend:null,onTimeUpdate:null,onToggle:null,onUnload:null,onVolumeChange:null,onWaiting:null,onZoom:null,opacity:null,operator:null,order:null,orient:null,orientation:null,origin:null,overflow:null,overlay:null,overlinePosition:P,overlineThickness:P,paintOrder:null,panose1:null,path:null,pathLength:P,patternContentUnits:null,patternTransform:null,patternUnits:null,phase:null,ping:oe,pitch:null,playbackOrder:null,pointerEvents:null,points:null,pointsAtX:P,pointsAtY:P,pointsAtZ:P,preserveAlpha:null,preserveAspectRatio:null,primitiveUnits:null,propagate:null,property:De,r:null,radius:null,referrerPolicy:null,refX:null,refY:null,rel:De,rev:De,renderingIntent:null,repeatCount:null,repeatDur:null,requiredExtensions:De,requiredFeatures:De,requiredFonts:De,requiredFormats:De,resource:null,restart:null,result:null,rotate:null,rx:null,ry:null,scale:null,seed:null,shapeRendering:null,side:null,slope:null,snapshotTime:null,specularConstant:P,specularExponent:P,spreadMethod:null,spacing:null,startOffset:null,stdDeviation:null,stemh:null,stemv:null,stitchTiles:null,stopColor:null,stopOpacity:null,strikethroughPosition:P,strikethroughThickness:P,string:null,stroke:null,strokeDashArray:De,strokeDashOffset:null,strokeLineCap:null,strokeLineJoin:null,strokeMiterLimit:P,strokeOpacity:P,strokeWidth:null,style:null,surfaceScale:P,syncBehavior:null,syncBehaviorDefault:null,syncMaster:null,syncTolerance:null,syncToleranceDefault:null,systemLanguage:De,tabIndex:P,tableValues:null,target:null,targetX:P,targetY:P,textAnchor:null,textDecoration:null,textRendering:null,textLength:null,timelineBegin:null,title:null,transformBehavior:null,type:null,typeOf:De,to:null,transform:null,transformOrigin:null,u1:null,u2:null,underlinePosition:P,underlineThickness:P,unicode:null,unicodeBidi:null,unicodeRange:null,unitsPerEm:P,values:null,vAlphabetic:P,vMathematical:P,vectorEffect:null,vHanging:P,vIdeographic:P,version:null,vertAdvY:P,vertOriginX:P,vertOriginY:P,viewBox:null,viewTarget:null,visibility:null,width:null,widths:null,wordSpacing:null,writingMode:null,x:null,x1:null,x2:null,xChannelSelector:null,xHeight:P,y:null,y1:null,y2:null,yChannelSelector:null,z:null,zoomAndPan:null},space:"svg",transform:Xa}),Ja=Dt({properties:{xLinkActuate:null,xLinkArcRole:null,xLinkHref:null,xLinkRole:null,xLinkShow:null,xLinkTitle:null,xLinkType:null},space:"xlink",transform(e,t){return"xlink:"+t.slice(5).toLowerCase()}}),Za=Dt({attributes:{xmlnsxlink:"xmlns:xlink"},properties:{xmlnsXLink:null,xmlns:null},space:"xmlns",transform:Qa}),eo=Dt({properties:{xmlBase:null,xmlLang:null,xmlSpace:null},space:"xml",transform(e,t){return"xml:"+t.slice(3).toLowerCase()}}),Dc={classId:"classID",dataType:"datatype",itemId:"itemID",strokeDashArray:"strokeDasharray",strokeDashOffset:"strokeDashoffset",strokeLineCap:"strokeLinecap",strokeLineJoin:"strokeLinejoin",strokeMiterLimit:"strokeMiterlimit",typeOf:"typeof",xLinkActuate:"xlinkActuate",xLinkArcRole:"xlinkArcrole",xLinkHref:"xlinkHref",xLinkRole:"xlinkRole",xLinkShow:"xlinkShow",xLinkTitle:"xlinkTitle",xLinkType:"xlinkType",xmlnsXLink:"xmlnsXlink"},Lc=/[A-Z]/g,Kr=/-[a-z]/g,zc=/^data[-\w.:]+$/i;function Rc(e,t){const n=Ms(t);let s=t,r=Me;if(n in e.normal)return e.property[e.normal[n]];if(n.length>4&&n.slice(0,4)==="data"&&zc.test(t)){if(t.charAt(4)==="-"){const a=t.slice(5).replace(Kr,Fc);s="data"+a.charAt(0).toUpperCase()+a.slice(1)}else{const a=t.slice(4);if(!Kr.test(a)){let o=a.replace(Lc,Vc);o.charAt(0)!=="-"&&(o="-"+o),t="data"+o}}r=rr}return new r(s,t)}function Vc(e){return"-"+e.toLowerCase()}function Fc(e){return e.charAt(1).toUpperCase()}const Oc=Ga([Ka,Ec,Ja,Za,eo],"html"),ir=Ga([Ka,Mc,Ja,Za,eo],"svg");function Bc(e){return e.join(" ").trim()}var ar={},Xr=/\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,_c=/\n/g,Uc=/^\s*/,$c=/^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,Hc=/^:\s*/,qc=/^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,Wc=/^[;\s]*/,Yc=/^\s+|\s+$/g,Gc=`
`,Qr="/",Jr="*",gt="",Kc="comment",Xc="declaration",Qc=function(e,t){if(typeof e!="string")throw new TypeError("First argument must be a string");if(!e)return[];t=t||{};var n=1,s=1;function r(m){var x=m.match(_c);x&&(n+=x.length);var v=m.lastIndexOf(Gc);s=~v?m.length-v:s+m.length}function a(){var m={line:n,column:s};return function(x){return x.position=new o(m),d(),x}}function o(m){this.start=m,this.end={line:n,column:s},this.source=t.source}o.prototype.content=e;function l(m){var x=new Error(t.source+":"+n+":"+s+": "+m);if(x.reason=m,x.filename=t.source,x.line=n,x.column=s,x.source=e,!t.silent)throw x}function c(m){var x=m.exec(e);if(x){var v=x[0];return r(v),e=e.slice(v.length),x}}function d(){c(Uc)}function u(m){var x;for(m=m||[];x=h();)x!==!1&&m.push(x);return m}function h(){var m=a();if(!(Qr!=e.charAt(0)||Jr!=e.charAt(1))){for(var x=2;gt!=e.charAt(x)&&(Jr!=e.charAt(x)||Qr!=e.charAt(x+1));)++x;if(x+=2,gt===e.charAt(x-1))return l("End of comment missing");var v=e.slice(2,x-2);return s+=2,r(v),e=e.slice(x),s+=2,m({type:Kc,comment:v})}}function f(){var m=a(),x=c($c);if(x){if(h(),!c(Hc))return l("property missing ':'");var v=c(qc),w=m({type:Xc,property:Zr(x[0].replace(Xr,gt)),value:v?Zr(v[0].replace(Xr,gt)):gt});return c(Wc),w}}function p(){var m=[];u(m);for(var x;x=f();)x!==!1&&(m.push(x),u(m));return m}return d(),p()};function Zr(e){return e?e.replace(Yc,gt):gt}var Jc=kn&&kn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(ar,"__esModule",{value:!0});ar.default=eu;var Zc=Jc(Qc);function eu(e,t){var n=null;if(!e||typeof e!="string")return n;var s=(0,Zc.default)(e),r=typeof t=="function";return s.forEach(function(a){if(a.type==="declaration"){var o=a.property,l=a.value;r?t(o,l,a):l&&(n=n||{},n[o]=l)}}),n}var On={};Object.defineProperty(On,"__esModule",{value:!0});On.camelCase=void 0;var tu=/^--[a-zA-Z0-9_-]+$/,nu=/-([a-z])/g,su=/^[^-]+$/,ru=/^-(webkit|moz|ms|o|khtml)-/,iu=/^-(ms)-/,au=function(e){return!e||su.test(e)||tu.test(e)},ou=function(e,t){return t.toUpperCase()},ei=function(e,t){return"".concat(t,"-")},lu=function(e,t){return t===void 0&&(t={}),au(e)?e:(e=e.toLowerCase(),t.reactCompat?e=e.replace(iu,ei):e=e.replace(ru,ei),e.replace(nu,ou))};On.camelCase=lu;var cu=kn&&kn.__importDefault||function(e){return e&&e.__esModule?e:{default:e}},uu=cu(ar),du=On;function zs(e,t){var n={};return!e||typeof e!="string"||(0,uu.default)(e,function(s,r){s&&r&&(n[(0,du.camelCase)(s,t)]=r)}),n}zs.default=zs;var hu=zs;const pu=Ua(hu),to=no("end"),or=no("start");function no(e){return t;function t(n){const s=n&&n.position&&n.position[e]||{};if(typeof s.line=="number"&&s.line>0&&typeof s.column=="number"&&s.column>0)return{line:s.line,column:s.column,offset:typeof s.offset=="number"&&s.offset>-1?s.offset:void 0}}}function fu(e){const t=or(e),n=to(e);if(t&&n)return{start:t,end:n}}function _t(e){return!e||typeof e!="object"?"":"position"in e||"type"in e?ti(e.position):"start"in e||"end"in e?ti(e):"line"in e||"column"in e?Rs(e):""}function Rs(e){return ni(e&&e.line)+":"+ni(e&&e.column)}function ti(e){return Rs(e&&e.start)+"-"+Rs(e&&e.end)}function ni(e){return e&&typeof e=="number"?e:1}class ke extends Error{constructor(t,n,s){super(),typeof n=="string"&&(s=n,n=void 0);let r="",a={},o=!1;if(n&&("line"in n&&"column"in n?a={place:n}:"start"in n&&"end"in n?a={place:n}:"type"in n?a={ancestors:[n],place:n.position}:a={...n}),typeof t=="string"?r=t:!a.cause&&t&&(o=!0,r=t.message,a.cause=t),!a.ruleId&&!a.source&&typeof s=="string"){const c=s.indexOf(":");c===-1?a.ruleId=s:(a.source=s.slice(0,c),a.ruleId=s.slice(c+1))}if(!a.place&&a.ancestors&&a.ancestors){const c=a.ancestors[a.ancestors.length-1];c&&(a.place=c.position)}const l=a.place&&"start"in a.place?a.place.start:a.place;this.ancestors=a.ancestors||void 0,this.cause=a.cause||void 0,this.column=l?l.column:void 0,this.fatal=void 0,this.file,this.message=r,this.line=l?l.line:void 0,this.name=_t(a.place)||"1:1",this.place=a.place||void 0,this.reason=this.message,this.ruleId=a.ruleId||void 0,this.source=a.source||void 0,this.stack=o&&a.cause&&typeof a.cause.stack=="string"?a.cause.stack:"",this.actual,this.expected,this.note,this.url}}ke.prototype.file="";ke.prototype.name="";ke.prototype.reason="";ke.prototype.message="";ke.prototype.stack="";ke.prototype.column=void 0;ke.prototype.line=void 0;ke.prototype.ancestors=void 0;ke.prototype.cause=void 0;ke.prototype.fatal=void 0;ke.prototype.place=void 0;ke.prototype.ruleId=void 0;ke.prototype.source=void 0;const lr={}.hasOwnProperty,mu=new Map,gu=/[A-Z]/g,xu=new Set(["table","tbody","thead","tfoot","tr"]),yu=new Set(["td","th"]),so="https://github.com/syntax-tree/hast-util-to-jsx-runtime";function bu(e,t){if(!t||t.Fragment===void 0)throw new TypeError("Expected `Fragment` in options");const n=t.filePath||void 0;let s;if(t.development){if(typeof t.jsxDEV!="function")throw new TypeError("Expected `jsxDEV` in options when `development: true`");s=Tu(n,t.jsxDEV)}else{if(typeof t.jsx!="function")throw new TypeError("Expected `jsx` in production options");if(typeof t.jsxs!="function")throw new TypeError("Expected `jsxs` in production options");s=Cu(n,t.jsx,t.jsxs)}const r={Fragment:t.Fragment,ancestors:[],components:t.components||{},create:s,elementAttributeNameCase:t.elementAttributeNameCase||"react",evaluater:t.createEvaluater?t.createEvaluater():void 0,filePath:n,ignoreInvalidStyle:t.ignoreInvalidStyle||!1,passKeys:t.passKeys!==!1,passNode:t.passNode||!1,schema:t.space==="svg"?ir:Oc,stylePropertyNameCase:t.stylePropertyNameCase||"dom",tableCellAlignToStyle:t.tableCellAlignToStyle!==!1},a=ro(r,e,void 0);return a&&typeof a!="string"?a:r.create(e,r.Fragment,{children:a||void 0},void 0)}function ro(e,t,n){if(t.type==="element")return wu(e,t,n);if(t.type==="mdxFlowExpression"||t.type==="mdxTextExpression")return vu(e,t);if(t.type==="mdxJsxFlowElement"||t.type==="mdxJsxTextElement")return Su(e,t,n);if(t.type==="mdxjsEsm")return ku(e,t);if(t.type==="root")return ju(e,t,n);if(t.type==="text")return Nu(e,t)}function wu(e,t,n){const s=e.schema;let r=s;t.tagName.toLowerCase()==="svg"&&s.space==="html"&&(r=ir,e.schema=r),e.ancestors.push(t);const a=ao(e,t.tagName,!1),o=Au(e,t);let l=ur(e,t);return xu.has(t.tagName)&&(l=l.filter(function(c){return typeof c=="string"?!Pc(c):!0})),io(e,o,a,t),cr(o,l),e.ancestors.pop(),e.schema=s,e.create(t,a,o,n)}function vu(e,t){if(t.data&&t.data.estree&&e.evaluater){const s=t.data.estree.body[0];return s.type,e.evaluater.evaluateExpression(s.expression)}Kt(e,t.position)}function ku(e,t){if(t.data&&t.data.estree&&e.evaluater)return e.evaluater.evaluateProgram(t.data.estree);Kt(e,t.position)}function Su(e,t,n){const s=e.schema;let r=s;t.name==="svg"&&s.space==="html"&&(r=ir,e.schema=r),e.ancestors.push(t);const a=t.name===null?e.Fragment:ao(e,t.name,!0),o=Pu(e,t),l=ur(e,t);return io(e,o,a,t),cr(o,l),e.ancestors.pop(),e.schema=s,e.create(t,a,o,n)}function ju(e,t,n){const s={};return cr(s,ur(e,t)),e.create(t,e.Fragment,s,n)}function Nu(e,t){return t.value}function io(e,t,n,s){typeof n!="string"&&n!==e.Fragment&&e.passNode&&(t.node=s)}function cr(e,t){if(t.length>0){const n=t.length>1?t:t[0];n&&(e.children=n)}}function Cu(e,t,n){return s;function s(r,a,o,l){const d=Array.isArray(o.children)?n:t;return l?d(a,o,l):d(a,o)}}function Tu(e,t){return n;function n(s,r,a,o){const l=Array.isArray(a.children),c=or(s);return t(r,a,o,l,{columnNumber:c?c.column-1:void 0,fileName:e,lineNumber:c?c.line:void 0},void 0)}}function Au(e,t){const n={};let s,r;for(r in t.properties)if(r!=="children"&&lr.call(t.properties,r)){const a=Iu(e,r,t.properties[r]);if(a){const[o,l]=a;e.tableCellAlignToStyle&&o==="align"&&typeof l=="string"&&yu.has(t.tagName)?s=l:n[o]=l}}if(s){const a=n.style||(n.style={});a[e.stylePropertyNameCase==="css"?"text-align":"textAlign"]=s}return n}function Pu(e,t){const n={};for(const s of t.attributes)if(s.type==="mdxJsxExpressionAttribute")if(s.data&&s.data.estree&&e.evaluater){const a=s.data.estree.body[0];a.type;const o=a.expression;o.type;const l=o.properties[0];l.type,Object.assign(n,e.evaluater.evaluateExpression(l.argument))}else Kt(e,t.position);else{const r=s.name;let a;if(s.value&&typeof s.value=="object")if(s.value.data&&s.value.data.estree&&e.evaluater){const l=s.value.data.estree.body[0];l.type,a=e.evaluater.evaluateExpression(l.expression)}else Kt(e,t.position);else a=s.value===null?!0:s.value;n[r]=a}return n}function ur(e,t){const n=[];let s=-1;const r=e.passKeys?new Map:mu;for(;++s<t.children.length;){const a=t.children[s];let o;if(e.passKeys){const c=a.type==="element"?a.tagName:a.type==="mdxJsxFlowElement"||a.type==="mdxJsxTextElement"?a.name:void 0;if(c){const d=r.get(c)||0;o=c+"-"+d,r.set(c,d+1)}}const l=ro(e,a,o);l!==void 0&&n.push(l)}return n}function Iu(e,t,n){const s=Rc(e.schema,t);if(!(n==null||typeof n=="number"&&Number.isNaN(n))){if(Array.isArray(n)&&(n=s.commaSeparated?jc(n):Bc(n)),s.property==="style"){let r=typeof n=="object"?n:Eu(e,String(n));return e.stylePropertyNameCase==="css"&&(r=Mu(r)),["style",r]}return[e.elementAttributeNameCase==="react"&&s.space?Dc[s.property]||s.property:s.attribute,n]}}function Eu(e,t){try{return pu(t,{reactCompat:!0})}catch(n){if(e.ignoreInvalidStyle)return{};const s=n,r=new ke("Cannot parse `style` attribute",{ancestors:e.ancestors,cause:s,ruleId:"style",source:"hast-util-to-jsx-runtime"});throw r.file=e.filePath||void 0,r.url=so+"#cannot-parse-style-attribute",r}}function ao(e,t,n){let s;if(!n)s={type:"Literal",value:t};else if(t.includes(".")){const r=t.split(".");let a=-1,o;for(;++a<r.length;){const l=Wr(r[a])?{type:"Identifier",name:r[a]}:{type:"Literal",value:r[a]};o=o?{type:"MemberExpression",object:o,property:l,computed:!!(a&&l.type==="Literal"),optional:!1}:l}s=o}else s=Wr(t)&&!/^[a-z]/.test(t)?{type:"Identifier",name:t}:{type:"Literal",value:t};if(s.type==="Literal"){const r=s.value;return lr.call(e.components,r)?e.components[r]:r}if(e.evaluater)return e.evaluater.evaluateExpression(s);Kt(e)}function Kt(e,t){const n=new ke("Cannot handle MDX estrees without `createEvaluater`",{ancestors:e.ancestors,place:t,ruleId:"mdx-estree",source:"hast-util-to-jsx-runtime"});throw n.file=e.filePath||void 0,n.url=so+"#cannot-handle-mdx-estrees-without-createevaluater",n}function Mu(e){const t={};let n;for(n in e)lr.call(e,n)&&(t[Du(n)]=e[n]);return t}function Du(e){let t=e.replace(gu,Lu);return t.slice(0,3)==="ms-"&&(t="-"+t),t}function Lu(e){return"-"+e.toLowerCase()}const rs={action:["form"],cite:["blockquote","del","ins","q"],data:["object"],formAction:["button","input"],href:["a","area","base","link"],icon:["menuitem"],itemId:null,manifest:["html"],ping:["a","area"],poster:["video"],src:["audio","embed","iframe","img","input","script","source","track","video"]},zu={};function Ru(e,t){const n=zu,s=typeof n.includeImageAlt=="boolean"?n.includeImageAlt:!0,r=typeof n.includeHtml=="boolean"?n.includeHtml:!0;return oo(e,s,r)}function oo(e,t,n){if(Vu(e)){if("value"in e)return e.type==="html"&&!n?"":e.value;if(t&&"alt"in e&&e.alt)return e.alt;if("children"in e)return si(e.children,t,n)}return Array.isArray(e)?si(e,t,n):""}function si(e,t,n){const s=[];let r=-1;for(;++r<e.length;)s[r]=oo(e[r],t,n);return s.join("")}function Vu(e){return!!(e&&typeof e=="object")}const ri=document.createElement("i");function dr(e){const t="&"+e+";";ri.innerHTML=t;const n=ri.textContent;return n.charCodeAt(n.length-1)===59&&e!=="semi"||n===t?!1:n}function Ye(e,t,n,s){const r=e.length;let a=0,o;if(t<0?t=-t>r?0:r+t:t=t>r?r:t,n=n>0?n:0,s.length<1e4)o=Array.from(s),o.unshift(t,n),e.splice(...o);else for(n&&e.splice(t,n);a<s.length;)o=s.slice(a,a+1e4),o.unshift(t,0),e.splice(...o),a+=1e4,t+=1e4}function Oe(e,t){return e.length>0?(Ye(e,e.length,0,t),e):t}const ii={}.hasOwnProperty;function Fu(e){const t={};let n=-1;for(;++n<e.length;)Ou(t,e[n]);return t}function Ou(e,t){let n;for(n in t){const r=(ii.call(e,n)?e[n]:void 0)||(e[n]={}),a=t[n];let o;if(a)for(o in a){ii.call(r,o)||(r[o]=[]);const l=a[o];Bu(r[o],Array.isArray(l)?l:l?[l]:[])}}}function Bu(e,t){let n=-1;const s=[];for(;++n<t.length;)(t[n].add==="after"?e:s).push(t[n]);Ye(e,0,0,s)}function lo(e,t){const n=Number.parseInt(e,t);return n<9||n===11||n>13&&n<32||n>126&&n<160||n>55295&&n<57344||n>64975&&n<65008||(n&65535)===65535||(n&65535)===65534||n>1114111?"�":String.fromCodePoint(n)}function Pt(e){return e.replace(/[\t\n\r ]+/g," ").replace(/^ | $/g,"").toLowerCase().toUpperCase()}const He=ct(/[A-Za-z]/),Le=ct(/[\dA-Za-z]/),_u=ct(/[#-'*+\--9=?A-Z^-~]/);function Vs(e){return e!==null&&(e<32||e===127)}const Fs=ct(/\d/),Uu=ct(/[\dA-Fa-f]/),$u=ct(/[!-/:-@[-`{-~]/);function G(e){return e!==null&&e<-2}function Ie(e){return e!==null&&(e<0||e===32)}function ne(e){return e===-2||e===-1||e===32}const Hu=ct(new RegExp("\\p{P}|\\p{S}","u")),qu=ct(/\s/);function ct(e){return t;function t(n){return n!==null&&n>-1&&e.test(String.fromCharCode(n))}}function Lt(e){const t=[];let n=-1,s=0,r=0;for(;++n<e.length;){const a=e.charCodeAt(n);let o="";if(a===37&&Le(e.charCodeAt(n+1))&&Le(e.charCodeAt(n+2)))r=2;else if(a<128)/[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(a))||(o=String.fromCharCode(a));else if(a>55295&&a<57344){const l=e.charCodeAt(n+1);a<56320&&l>56319&&l<57344?(o=String.fromCharCode(a,l),r=1):o="�"}else o=String.fromCharCode(a);o&&(t.push(e.slice(s,n),encodeURIComponent(o)),s=n+r+1,o=""),r&&(n+=r,r=0)}return t.join("")+e.slice(s)}function le(e,t,n,s){const r=s?s-1:Number.POSITIVE_INFINITY;let a=0;return o;function o(c){return ne(c)?(e.enter(n),l(c)):t(c)}function l(c){return ne(c)&&a++<r?(e.consume(c),l):(e.exit(n),t(c))}}const Wu={tokenize:Yu};function Yu(e){const t=e.attempt(this.parser.constructs.contentInitial,s,r);let n;return t;function s(l){if(l===null){e.consume(l);return}return e.enter("lineEnding"),e.consume(l),e.exit("lineEnding"),le(e,t,"linePrefix")}function r(l){return e.enter("paragraph"),a(l)}function a(l){const c=e.enter("chunkText",{contentType:"text",previous:n});return n&&(n.next=c),n=c,o(l)}function o(l){if(l===null){e.exit("chunkText"),e.exit("paragraph"),e.consume(l);return}return G(l)?(e.consume(l),e.exit("chunkText"),a):(e.consume(l),o)}}const Gu={tokenize:Ku},ai={tokenize:Xu};function Ku(e){const t=this,n=[];let s=0,r,a,o;return l;function l(k){if(s<n.length){const C=n[s];return t.containerState=C[1],e.attempt(C[0].continuation,c,d)(k)}return d(k)}function c(k){if(s++,t.containerState._closeFlow){t.containerState._closeFlow=void 0,r&&S();const C=t.events.length;let M=C,j;for(;M--;)if(t.events[M][0]==="exit"&&t.events[M][1].type==="chunkFlow"){j=t.events[M][1].end;break}w(s);let A=C;for(;A<t.events.length;)t.events[A][1].end={...j},A++;return Ye(t.events,M+1,0,t.events.slice(C)),t.events.length=A,d(k)}return l(k)}function d(k){if(s===n.length){if(!r)return f(k);if(r.currentConstruct&&r.currentConstruct.concrete)return m(k);t.interrupt=!!(r.currentConstruct&&!r._gfmTableDynamicInterruptHack)}return t.containerState={},e.check(ai,u,h)(k)}function u(k){return r&&S(),w(s),f(k)}function h(k){return t.parser.lazy[t.now().line]=s!==n.length,o=t.now().offset,m(k)}function f(k){return t.containerState={},e.attempt(ai,p,m)(k)}function p(k){return s++,n.push([t.currentConstruct,t.containerState]),f(k)}function m(k){if(k===null){r&&S(),w(0),e.consume(k);return}return r=r||t.parser.flow(t.now()),e.enter("chunkFlow",{_tokenizer:r,contentType:"flow",previous:a}),x(k)}function x(k){if(k===null){v(e.exit("chunkFlow"),!0),w(0),e.consume(k);return}return G(k)?(e.consume(k),v(e.exit("chunkFlow")),s=0,t.interrupt=void 0,l):(e.consume(k),x)}function v(k,C){const M=t.sliceStream(k);if(C&&M.push(null),k.previous=a,a&&(a.next=k),a=k,r.defineSkip(k.start),r.write(M),t.parser.lazy[k.start.line]){let j=r.events.length;for(;j--;)if(r.events[j][1].start.offset<o&&(!r.events[j][1].end||r.events[j][1].end.offset>o))return;const A=t.events.length;let D=A,V,E;for(;D--;)if(t.events[D][0]==="exit"&&t.events[D][1].type==="chunkFlow"){if(V){E=t.events[D][1].end;break}V=!0}for(w(s),j=A;j<t.events.length;)t.events[j][1].end={...E},j++;Ye(t.events,D+1,0,t.events.slice(A)),t.events.length=j}}function w(k){let C=n.length;for(;C-- >k;){const M=n[C];t.containerState=M[1],M[0].exit.call(t,e)}n.length=k}function S(){r.write([null]),a=void 0,r=void 0,t.containerState._closeFlow=void 0}}function Xu(e,t,n){return le(e,e.attempt(this.parser.constructs.document,t,n),"linePrefix",this.parser.constructs.disable.null.includes("codeIndented")?void 0:4)}function oi(e){if(e===null||Ie(e)||qu(e))return 1;if(Hu(e))return 2}function hr(e,t,n){const s=[];let r=-1;for(;++r<e.length;){const a=e[r].resolveAll;a&&!s.includes(a)&&(t=a(t,n),s.push(a))}return t}const Os={name:"attention",resolveAll:Qu,tokenize:Ju};function Qu(e,t){let n=-1,s,r,a,o,l,c,d,u;for(;++n<e.length;)if(e[n][0]==="enter"&&e[n][1].type==="attentionSequence"&&e[n][1]._close){for(s=n;s--;)if(e[s][0]==="exit"&&e[s][1].type==="attentionSequence"&&e[s][1]._open&&t.sliceSerialize(e[s][1]).charCodeAt(0)===t.sliceSerialize(e[n][1]).charCodeAt(0)){if((e[s][1]._close||e[n][1]._open)&&(e[n][1].end.offset-e[n][1].start.offset)%3&&!((e[s][1].end.offset-e[s][1].start.offset+e[n][1].end.offset-e[n][1].start.offset)%3))continue;c=e[s][1].end.offset-e[s][1].start.offset>1&&e[n][1].end.offset-e[n][1].start.offset>1?2:1;const h={...e[s][1].end},f={...e[n][1].start};li(h,-c),li(f,c),o={type:c>1?"strongSequence":"emphasisSequence",start:h,end:{...e[s][1].end}},l={type:c>1?"strongSequence":"emphasisSequence",start:{...e[n][1].start},end:f},a={type:c>1?"strongText":"emphasisText",start:{...e[s][1].end},end:{...e[n][1].start}},r={type:c>1?"strong":"emphasis",start:{...o.start},end:{...l.end}},e[s][1].end={...o.start},e[n][1].start={...l.end},d=[],e[s][1].end.offset-e[s][1].start.offset&&(d=Oe(d,[["enter",e[s][1],t],["exit",e[s][1],t]])),d=Oe(d,[["enter",r,t],["enter",o,t],["exit",o,t],["enter",a,t]]),d=Oe(d,hr(t.parser.constructs.insideSpan.null,e.slice(s+1,n),t)),d=Oe(d,[["exit",a,t],["enter",l,t],["exit",l,t],["exit",r,t]]),e[n][1].end.offset-e[n][1].start.offset?(u=2,d=Oe(d,[["enter",e[n][1],t],["exit",e[n][1],t]])):u=0,Ye(e,s-1,n-s+3,d),n=s+d.length-u-2;break}}for(n=-1;++n<e.length;)e[n][1].type==="attentionSequence"&&(e[n][1].type="data");return e}function Ju(e,t){const n=this.parser.constructs.attentionMarkers.null,s=this.previous,r=oi(s);let a;return o;function o(c){return a=c,e.enter("attentionSequence"),l(c)}function l(c){if(c===a)return e.consume(c),l;const d=e.exit("attentionSequence"),u=oi(c),h=!u||u===2&&r||n.includes(c),f=!r||r===2&&u||n.includes(s);return d._open=!!(a===42?h:h&&(r||!f)),d._close=!!(a===42?f:f&&(u||!h)),t(c)}}function li(e,t){e.column+=t,e.offset+=t,e._bufferIndex+=t}const Zu={name:"autolink",tokenize:ed};function ed(e,t,n){let s=0;return r;function r(p){return e.enter("autolink"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.enter("autolinkProtocol"),a}function a(p){return He(p)?(e.consume(p),o):p===64?n(p):d(p)}function o(p){return p===43||p===45||p===46||Le(p)?(s=1,l(p)):d(p)}function l(p){return p===58?(e.consume(p),s=0,c):(p===43||p===45||p===46||Le(p))&&s++<32?(e.consume(p),l):(s=0,d(p))}function c(p){return p===62?(e.exit("autolinkProtocol"),e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):p===null||p===32||p===60||Vs(p)?n(p):(e.consume(p),c)}function d(p){return p===64?(e.consume(p),u):_u(p)?(e.consume(p),d):n(p)}function u(p){return Le(p)?h(p):n(p)}function h(p){return p===46?(e.consume(p),s=0,u):p===62?(e.exit("autolinkProtocol").type="autolinkEmail",e.enter("autolinkMarker"),e.consume(p),e.exit("autolinkMarker"),e.exit("autolink"),t):f(p)}function f(p){if((p===45||Le(p))&&s++<63){const m=p===45?f:h;return e.consume(p),m}return n(p)}}const Bn={partial:!0,tokenize:td};function td(e,t,n){return s;function s(a){return ne(a)?le(e,r,"linePrefix")(a):r(a)}function r(a){return a===null||G(a)?t(a):n(a)}}const co={continuation:{tokenize:sd},exit:rd,name:"blockQuote",tokenize:nd};function nd(e,t,n){const s=this;return r;function r(o){if(o===62){const l=s.containerState;return l.open||(e.enter("blockQuote",{_container:!0}),l.open=!0),e.enter("blockQuotePrefix"),e.enter("blockQuoteMarker"),e.consume(o),e.exit("blockQuoteMarker"),a}return n(o)}function a(o){return ne(o)?(e.enter("blockQuotePrefixWhitespace"),e.consume(o),e.exit("blockQuotePrefixWhitespace"),e.exit("blockQuotePrefix"),t):(e.exit("blockQuotePrefix"),t(o))}}function sd(e,t,n){const s=this;return r;function r(o){return ne(o)?le(e,a,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(o):a(o)}function a(o){return e.attempt(co,t,n)(o)}}function rd(e){e.exit("blockQuote")}const uo={name:"characterEscape",tokenize:id};function id(e,t,n){return s;function s(a){return e.enter("characterEscape"),e.enter("escapeMarker"),e.consume(a),e.exit("escapeMarker"),r}function r(a){return $u(a)?(e.enter("characterEscapeValue"),e.consume(a),e.exit("characterEscapeValue"),e.exit("characterEscape"),t):n(a)}}const ho={name:"characterReference",tokenize:ad};function ad(e,t,n){const s=this;let r=0,a,o;return l;function l(h){return e.enter("characterReference"),e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),c}function c(h){return h===35?(e.enter("characterReferenceMarkerNumeric"),e.consume(h),e.exit("characterReferenceMarkerNumeric"),d):(e.enter("characterReferenceValue"),a=31,o=Le,u(h))}function d(h){return h===88||h===120?(e.enter("characterReferenceMarkerHexadecimal"),e.consume(h),e.exit("characterReferenceMarkerHexadecimal"),e.enter("characterReferenceValue"),a=6,o=Uu,u):(e.enter("characterReferenceValue"),a=7,o=Fs,u(h))}function u(h){if(h===59&&r){const f=e.exit("characterReferenceValue");return o===Le&&!dr(s.sliceSerialize(f))?n(h):(e.enter("characterReferenceMarker"),e.consume(h),e.exit("characterReferenceMarker"),e.exit("characterReference"),t)}return o(h)&&r++<a?(e.consume(h),u):n(h)}}const ci={partial:!0,tokenize:ld},ui={concrete:!0,name:"codeFenced",tokenize:od};function od(e,t,n){const s=this,r={partial:!0,tokenize:M};let a=0,o=0,l;return c;function c(j){return d(j)}function d(j){const A=s.events[s.events.length-1];return a=A&&A[1].type==="linePrefix"?A[2].sliceSerialize(A[1],!0).length:0,l=j,e.enter("codeFenced"),e.enter("codeFencedFence"),e.enter("codeFencedFenceSequence"),u(j)}function u(j){return j===l?(o++,e.consume(j),u):o<3?n(j):(e.exit("codeFencedFenceSequence"),ne(j)?le(e,h,"whitespace")(j):h(j))}function h(j){return j===null||G(j)?(e.exit("codeFencedFence"),s.interrupt?t(j):e.check(ci,x,C)(j)):(e.enter("codeFencedFenceInfo"),e.enter("chunkString",{contentType:"string"}),f(j))}function f(j){return j===null||G(j)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),h(j)):ne(j)?(e.exit("chunkString"),e.exit("codeFencedFenceInfo"),le(e,p,"whitespace")(j)):j===96&&j===l?n(j):(e.consume(j),f)}function p(j){return j===null||G(j)?h(j):(e.enter("codeFencedFenceMeta"),e.enter("chunkString",{contentType:"string"}),m(j))}function m(j){return j===null||G(j)?(e.exit("chunkString"),e.exit("codeFencedFenceMeta"),h(j)):j===96&&j===l?n(j):(e.consume(j),m)}function x(j){return e.attempt(r,C,v)(j)}function v(j){return e.enter("lineEnding"),e.consume(j),e.exit("lineEnding"),w}function w(j){return a>0&&ne(j)?le(e,S,"linePrefix",a+1)(j):S(j)}function S(j){return j===null||G(j)?e.check(ci,x,C)(j):(e.enter("codeFlowValue"),k(j))}function k(j){return j===null||G(j)?(e.exit("codeFlowValue"),S(j)):(e.consume(j),k)}function C(j){return e.exit("codeFenced"),t(j)}function M(j,A,D){let V=0;return E;function E(U){return j.enter("lineEnding"),j.consume(U),j.exit("lineEnding"),T}function T(U){return j.enter("codeFencedFence"),ne(U)?le(j,R,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(U):R(U)}function R(U){return U===l?(j.enter("codeFencedFenceSequence"),_(U)):D(U)}function _(U){return U===l?(V++,j.consume(U),_):V>=o?(j.exit("codeFencedFenceSequence"),ne(U)?le(j,H,"whitespace")(U):H(U)):D(U)}function H(U){return U===null||G(U)?(j.exit("codeFencedFence"),A(U)):D(U)}}}function ld(e,t,n){const s=this;return r;function r(o){return o===null?n(o):(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a)}function a(o){return s.parser.lazy[s.now().line]?n(o):t(o)}}const is={name:"codeIndented",tokenize:ud},cd={partial:!0,tokenize:dd};function ud(e,t,n){const s=this;return r;function r(d){return e.enter("codeIndented"),le(e,a,"linePrefix",5)(d)}function a(d){const u=s.events[s.events.length-1];return u&&u[1].type==="linePrefix"&&u[2].sliceSerialize(u[1],!0).length>=4?o(d):n(d)}function o(d){return d===null?c(d):G(d)?e.attempt(cd,o,c)(d):(e.enter("codeFlowValue"),l(d))}function l(d){return d===null||G(d)?(e.exit("codeFlowValue"),o(d)):(e.consume(d),l)}function c(d){return e.exit("codeIndented"),t(d)}}function dd(e,t,n){const s=this;return r;function r(o){return s.parser.lazy[s.now().line]?n(o):G(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),r):le(e,a,"linePrefix",5)(o)}function a(o){const l=s.events[s.events.length-1];return l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):G(o)?r(o):n(o)}}const hd={name:"codeText",previous:fd,resolve:pd,tokenize:md};function pd(e){let t=e.length-4,n=3,s,r;if((e[n][1].type==="lineEnding"||e[n][1].type==="space")&&(e[t][1].type==="lineEnding"||e[t][1].type==="space")){for(s=n;++s<t;)if(e[s][1].type==="codeTextData"){e[n][1].type="codeTextPadding",e[t][1].type="codeTextPadding",n+=2,t-=2;break}}for(s=n-1,t++;++s<=t;)r===void 0?s!==t&&e[s][1].type!=="lineEnding"&&(r=s):(s===t||e[s][1].type==="lineEnding")&&(e[r][1].type="codeTextData",s!==r+2&&(e[r][1].end=e[s-1][1].end,e.splice(r+2,s-r-2),t-=s-r-2,s=r+2),r=void 0);return e}function fd(e){return e!==96||this.events[this.events.length-1][1].type==="characterEscape"}function md(e,t,n){let s=0,r,a;return o;function o(h){return e.enter("codeText"),e.enter("codeTextSequence"),l(h)}function l(h){return h===96?(e.consume(h),s++,l):(e.exit("codeTextSequence"),c(h))}function c(h){return h===null?n(h):h===32?(e.enter("space"),e.consume(h),e.exit("space"),c):h===96?(a=e.enter("codeTextSequence"),r=0,u(h)):G(h)?(e.enter("lineEnding"),e.consume(h),e.exit("lineEnding"),c):(e.enter("codeTextData"),d(h))}function d(h){return h===null||h===32||h===96||G(h)?(e.exit("codeTextData"),c(h)):(e.consume(h),d)}function u(h){return h===96?(e.consume(h),r++,u):r===s?(e.exit("codeTextSequence"),e.exit("codeText"),t(h)):(a.type="codeTextData",d(h))}}class gd{constructor(t){this.left=t?[...t]:[],this.right=[]}get(t){if(t<0||t>=this.left.length+this.right.length)throw new RangeError("Cannot access index `"+t+"` in a splice buffer of size `"+(this.left.length+this.right.length)+"`");return t<this.left.length?this.left[t]:this.right[this.right.length-t+this.left.length-1]}get length(){return this.left.length+this.right.length}shift(){return this.setCursor(0),this.right.pop()}slice(t,n){const s=n??Number.POSITIVE_INFINITY;return s<this.left.length?this.left.slice(t,s):t>this.left.length?this.right.slice(this.right.length-s+this.left.length,this.right.length-t+this.left.length).reverse():this.left.slice(t).concat(this.right.slice(this.right.length-s+this.left.length).reverse())}splice(t,n,s){const r=n||0;this.setCursor(Math.trunc(t));const a=this.right.splice(this.right.length-r,Number.POSITIVE_INFINITY);return s&&Rt(this.left,s),a.reverse()}pop(){return this.setCursor(Number.POSITIVE_INFINITY),this.left.pop()}push(t){this.setCursor(Number.POSITIVE_INFINITY),this.left.push(t)}pushMany(t){this.setCursor(Number.POSITIVE_INFINITY),Rt(this.left,t)}unshift(t){this.setCursor(0),this.right.push(t)}unshiftMany(t){this.setCursor(0),Rt(this.right,t.reverse())}setCursor(t){if(!(t===this.left.length||t>this.left.length&&this.right.length===0||t<0&&this.left.length===0))if(t<this.left.length){const n=this.left.splice(t,Number.POSITIVE_INFINITY);Rt(this.right,n.reverse())}else{const n=this.right.splice(this.left.length+this.right.length-t,Number.POSITIVE_INFINITY);Rt(this.left,n.reverse())}}}function Rt(e,t){let n=0;if(t.length<1e4)e.push(...t);else for(;n<t.length;)e.push(...t.slice(n,n+1e4)),n+=1e4}function po(e){const t={};let n=-1,s,r,a,o,l,c,d;const u=new gd(e);for(;++n<u.length;){for(;n in t;)n=t[n];if(s=u.get(n),n&&s[1].type==="chunkFlow"&&u.get(n-1)[1].type==="listItemPrefix"&&(c=s[1]._tokenizer.events,a=0,a<c.length&&c[a][1].type==="lineEndingBlank"&&(a+=2),a<c.length&&c[a][1].type==="content"))for(;++a<c.length&&c[a][1].type!=="content";)c[a][1].type==="chunkText"&&(c[a][1]._isInFirstContentOfListItem=!0,a++);if(s[0]==="enter")s[1].contentType&&(Object.assign(t,xd(u,n)),n=t[n],d=!0);else if(s[1]._container){for(a=n,r=void 0;a--;)if(o=u.get(a),o[1].type==="lineEnding"||o[1].type==="lineEndingBlank")o[0]==="enter"&&(r&&(u.get(r)[1].type="lineEndingBlank"),o[1].type="lineEnding",r=a);else if(!(o[1].type==="linePrefix"||o[1].type==="listItemIndent"))break;r&&(s[1].end={...u.get(r)[1].start},l=u.slice(r,n),l.unshift(s),u.splice(r,n-r+1,l))}}return Ye(e,0,Number.POSITIVE_INFINITY,u.slice(0)),!d}function xd(e,t){const n=e.get(t)[1],s=e.get(t)[2];let r=t-1;const a=[];let o=n._tokenizer;o||(o=s.parser[n.contentType](n.start),n._contentTypeTextTrailing&&(o._contentTypeTextTrailing=!0));const l=o.events,c=[],d={};let u,h,f=-1,p=n,m=0,x=0;const v=[x];for(;p;){for(;e.get(++r)[1]!==p;);a.push(r),p._tokenizer||(u=s.sliceStream(p),p.next||u.push(null),h&&o.defineSkip(p.start),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=!0),o.write(u),p._isInFirstContentOfListItem&&(o._gfmTasklistFirstContentOfListItem=void 0)),h=p,p=p.next}for(p=n;++f<l.length;)l[f][0]==="exit"&&l[f-1][0]==="enter"&&l[f][1].type===l[f-1][1].type&&l[f][1].start.line!==l[f][1].end.line&&(x=f+1,v.push(x),p._tokenizer=void 0,p.previous=void 0,p=p.next);for(o.events=[],p?(p._tokenizer=void 0,p.previous=void 0):v.pop(),f=v.length;f--;){const w=l.slice(v[f],v[f+1]),S=a.pop();c.push([S,S+w.length-1]),e.splice(S,2,w)}for(c.reverse(),f=-1;++f<c.length;)d[m+c[f][0]]=m+c[f][1],m+=c[f][1]-c[f][0]-1;return d}const yd={resolve:wd,tokenize:vd},bd={partial:!0,tokenize:kd};function wd(e){return po(e),e}function vd(e,t){let n;return s;function s(l){return e.enter("content"),n=e.enter("chunkContent",{contentType:"content"}),r(l)}function r(l){return l===null?a(l):G(l)?e.check(bd,o,a)(l):(e.consume(l),r)}function a(l){return e.exit("chunkContent"),e.exit("content"),t(l)}function o(l){return e.consume(l),e.exit("chunkContent"),n.next=e.enter("chunkContent",{contentType:"content",previous:n}),n=n.next,r}}function kd(e,t,n){const s=this;return r;function r(o){return e.exit("chunkContent"),e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),le(e,a,"linePrefix")}function a(o){if(o===null||G(o))return n(o);const l=s.events[s.events.length-1];return!s.parser.constructs.disable.null.includes("codeIndented")&&l&&l[1].type==="linePrefix"&&l[2].sliceSerialize(l[1],!0).length>=4?t(o):e.interrupt(s.parser.constructs.flow,n,t)(o)}}function fo(e,t,n,s,r,a,o,l,c){const d=c||Number.POSITIVE_INFINITY;let u=0;return h;function h(w){return w===60?(e.enter(s),e.enter(r),e.enter(a),e.consume(w),e.exit(a),f):w===null||w===32||w===41||Vs(w)?n(w):(e.enter(s),e.enter(o),e.enter(l),e.enter("chunkString",{contentType:"string"}),x(w))}function f(w){return w===62?(e.enter(a),e.consume(w),e.exit(a),e.exit(r),e.exit(s),t):(e.enter(l),e.enter("chunkString",{contentType:"string"}),p(w))}function p(w){return w===62?(e.exit("chunkString"),e.exit(l),f(w)):w===null||w===60||G(w)?n(w):(e.consume(w),w===92?m:p)}function m(w){return w===60||w===62||w===92?(e.consume(w),p):p(w)}function x(w){return!u&&(w===null||w===41||Ie(w))?(e.exit("chunkString"),e.exit(l),e.exit(o),e.exit(s),t(w)):u<d&&w===40?(e.consume(w),u++,x):w===41?(e.consume(w),u--,x):w===null||w===32||w===40||Vs(w)?n(w):(e.consume(w),w===92?v:x)}function v(w){return w===40||w===41||w===92?(e.consume(w),x):x(w)}}function mo(e,t,n,s,r,a){const o=this;let l=0,c;return d;function d(p){return e.enter(s),e.enter(r),e.consume(p),e.exit(r),e.enter(a),u}function u(p){return l>999||p===null||p===91||p===93&&!c||p===94&&!l&&"_hiddenFootnoteSupport"in o.parser.constructs?n(p):p===93?(e.exit(a),e.enter(r),e.consume(p),e.exit(r),e.exit(s),t):G(p)?(e.enter("lineEnding"),e.consume(p),e.exit("lineEnding"),u):(e.enter("chunkString",{contentType:"string"}),h(p))}function h(p){return p===null||p===91||p===93||G(p)||l++>999?(e.exit("chunkString"),u(p)):(e.consume(p),c||(c=!ne(p)),p===92?f:h)}function f(p){return p===91||p===92||p===93?(e.consume(p),l++,h):h(p)}}function go(e,t,n,s,r,a){let o;return l;function l(f){return f===34||f===39||f===40?(e.enter(s),e.enter(r),e.consume(f),e.exit(r),o=f===40?41:f,c):n(f)}function c(f){return f===o?(e.enter(r),e.consume(f),e.exit(r),e.exit(s),t):(e.enter(a),d(f))}function d(f){return f===o?(e.exit(a),c(o)):f===null?n(f):G(f)?(e.enter("lineEnding"),e.consume(f),e.exit("lineEnding"),le(e,d,"linePrefix")):(e.enter("chunkString",{contentType:"string"}),u(f))}function u(f){return f===o||f===null||G(f)?(e.exit("chunkString"),d(f)):(e.consume(f),f===92?h:u)}function h(f){return f===o||f===92?(e.consume(f),u):u(f)}}function Ut(e,t){let n;return s;function s(r){return G(r)?(e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),n=!0,s):ne(r)?le(e,s,n?"linePrefix":"lineSuffix")(r):t(r)}}const Sd={name:"definition",tokenize:Nd},jd={partial:!0,tokenize:Cd};function Nd(e,t,n){const s=this;let r;return a;function a(p){return e.enter("definition"),o(p)}function o(p){return mo.call(s,e,l,n,"definitionLabel","definitionLabelMarker","definitionLabelString")(p)}function l(p){return r=Pt(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)),p===58?(e.enter("definitionMarker"),e.consume(p),e.exit("definitionMarker"),c):n(p)}function c(p){return Ie(p)?Ut(e,d)(p):d(p)}function d(p){return fo(e,u,n,"definitionDestination","definitionDestinationLiteral","definitionDestinationLiteralMarker","definitionDestinationRaw","definitionDestinationString")(p)}function u(p){return e.attempt(jd,h,h)(p)}function h(p){return ne(p)?le(e,f,"whitespace")(p):f(p)}function f(p){return p===null||G(p)?(e.exit("definition"),s.parser.defined.push(r),t(p)):n(p)}}function Cd(e,t,n){return s;function s(l){return Ie(l)?Ut(e,r)(l):n(l)}function r(l){return go(e,a,n,"definitionTitle","definitionTitleMarker","definitionTitleString")(l)}function a(l){return ne(l)?le(e,o,"whitespace")(l):o(l)}function o(l){return l===null||G(l)?t(l):n(l)}}const Td={name:"hardBreakEscape",tokenize:Ad};function Ad(e,t,n){return s;function s(a){return e.enter("hardBreakEscape"),e.consume(a),r}function r(a){return G(a)?(e.exit("hardBreakEscape"),t(a)):n(a)}}const Pd={name:"headingAtx",resolve:Id,tokenize:Ed};function Id(e,t){let n=e.length-2,s=3,r,a;return e[s][1].type==="whitespace"&&(s+=2),n-2>s&&e[n][1].type==="whitespace"&&(n-=2),e[n][1].type==="atxHeadingSequence"&&(s===n-1||n-4>s&&e[n-2][1].type==="whitespace")&&(n-=s+1===n?2:4),n>s&&(r={type:"atxHeadingText",start:e[s][1].start,end:e[n][1].end},a={type:"chunkText",start:e[s][1].start,end:e[n][1].end,contentType:"text"},Ye(e,s,n-s+1,[["enter",r,t],["enter",a,t],["exit",a,t],["exit",r,t]])),e}function Ed(e,t,n){let s=0;return r;function r(u){return e.enter("atxHeading"),a(u)}function a(u){return e.enter("atxHeadingSequence"),o(u)}function o(u){return u===35&&s++<6?(e.consume(u),o):u===null||Ie(u)?(e.exit("atxHeadingSequence"),l(u)):n(u)}function l(u){return u===35?(e.enter("atxHeadingSequence"),c(u)):u===null||G(u)?(e.exit("atxHeading"),t(u)):ne(u)?le(e,l,"whitespace")(u):(e.enter("atxHeadingText"),d(u))}function c(u){return u===35?(e.consume(u),c):(e.exit("atxHeadingSequence"),l(u))}function d(u){return u===null||u===35||Ie(u)?(e.exit("atxHeadingText"),l(u)):(e.consume(u),d)}}const Md=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],di=["pre","script","style","textarea"],Dd={concrete:!0,name:"htmlFlow",resolveTo:Rd,tokenize:Vd},Ld={partial:!0,tokenize:Od},zd={partial:!0,tokenize:Fd};function Rd(e){let t=e.length;for(;t--&&!(e[t][0]==="enter"&&e[t][1].type==="htmlFlow"););return t>1&&e[t-2][1].type==="linePrefix"&&(e[t][1].start=e[t-2][1].start,e[t+1][1].start=e[t-2][1].start,e.splice(t-2,2)),e}function Vd(e,t,n){const s=this;let r,a,o,l,c;return d;function d(g){return u(g)}function u(g){return e.enter("htmlFlow"),e.enter("htmlFlowData"),e.consume(g),h}function h(g){return g===33?(e.consume(g),f):g===47?(e.consume(g),a=!0,x):g===63?(e.consume(g),r=3,s.interrupt?t:y):He(g)?(e.consume(g),o=String.fromCharCode(g),v):n(g)}function f(g){return g===45?(e.consume(g),r=2,p):g===91?(e.consume(g),r=5,l=0,m):He(g)?(e.consume(g),r=4,s.interrupt?t:y):n(g)}function p(g){return g===45?(e.consume(g),s.interrupt?t:y):n(g)}function m(g){const O="CDATA[";return g===O.charCodeAt(l++)?(e.consume(g),l===O.length?s.interrupt?t:R:m):n(g)}function x(g){return He(g)?(e.consume(g),o=String.fromCharCode(g),v):n(g)}function v(g){if(g===null||g===47||g===62||Ie(g)){const O=g===47,se=o.toLowerCase();return!O&&!a&&di.includes(se)?(r=1,s.interrupt?t(g):R(g)):Md.includes(o.toLowerCase())?(r=6,O?(e.consume(g),w):s.interrupt?t(g):R(g)):(r=7,s.interrupt&&!s.parser.lazy[s.now().line]?n(g):a?S(g):k(g))}return g===45||Le(g)?(e.consume(g),o+=String.fromCharCode(g),v):n(g)}function w(g){return g===62?(e.consume(g),s.interrupt?t:R):n(g)}function S(g){return ne(g)?(e.consume(g),S):E(g)}function k(g){return g===47?(e.consume(g),E):g===58||g===95||He(g)?(e.consume(g),C):ne(g)?(e.consume(g),k):E(g)}function C(g){return g===45||g===46||g===58||g===95||Le(g)?(e.consume(g),C):M(g)}function M(g){return g===61?(e.consume(g),j):ne(g)?(e.consume(g),M):k(g)}function j(g){return g===null||g===60||g===61||g===62||g===96?n(g):g===34||g===39?(e.consume(g),c=g,A):ne(g)?(e.consume(g),j):D(g)}function A(g){return g===c?(e.consume(g),c=null,V):g===null||G(g)?n(g):(e.consume(g),A)}function D(g){return g===null||g===34||g===39||g===47||g===60||g===61||g===62||g===96||Ie(g)?M(g):(e.consume(g),D)}function V(g){return g===47||g===62||ne(g)?k(g):n(g)}function E(g){return g===62?(e.consume(g),T):n(g)}function T(g){return g===null||G(g)?R(g):ne(g)?(e.consume(g),T):n(g)}function R(g){return g===45&&r===2?(e.consume(g),K):g===60&&r===1?(e.consume(g),Z):g===62&&r===4?(e.consume(g),L):g===63&&r===3?(e.consume(g),y):g===93&&r===5?(e.consume(g),I):G(g)&&(r===6||r===7)?(e.exit("htmlFlowData"),e.check(Ld,X,_)(g)):g===null||G(g)?(e.exit("htmlFlowData"),_(g)):(e.consume(g),R)}function _(g){return e.check(zd,H,X)(g)}function H(g){return e.enter("lineEnding"),e.consume(g),e.exit("lineEnding"),U}function U(g){return g===null||G(g)?_(g):(e.enter("htmlFlowData"),R(g))}function K(g){return g===45?(e.consume(g),y):R(g)}function Z(g){return g===47?(e.consume(g),o="",F):R(g)}function F(g){if(g===62){const O=o.toLowerCase();return di.includes(O)?(e.consume(g),L):R(g)}return He(g)&&o.length<8?(e.consume(g),o+=String.fromCharCode(g),F):R(g)}function I(g){return g===93?(e.consume(g),y):R(g)}function y(g){return g===62?(e.consume(g),L):g===45&&r===2?(e.consume(g),y):R(g)}function L(g){return g===null||G(g)?(e.exit("htmlFlowData"),X(g)):(e.consume(g),L)}function X(g){return e.exit("htmlFlow"),t(g)}}function Fd(e,t,n){const s=this;return r;function r(o){return G(o)?(e.enter("lineEnding"),e.consume(o),e.exit("lineEnding"),a):n(o)}function a(o){return s.parser.lazy[s.now().line]?n(o):t(o)}}function Od(e,t,n){return s;function s(r){return e.enter("lineEnding"),e.consume(r),e.exit("lineEnding"),e.attempt(Bn,t,n)}}const Bd={name:"htmlText",tokenize:_d};function _d(e,t,n){const s=this;let r,a,o;return l;function l(y){return e.enter("htmlText"),e.enter("htmlTextData"),e.consume(y),c}function c(y){return y===33?(e.consume(y),d):y===47?(e.consume(y),M):y===63?(e.consume(y),k):He(y)?(e.consume(y),D):n(y)}function d(y){return y===45?(e.consume(y),u):y===91?(e.consume(y),a=0,m):He(y)?(e.consume(y),S):n(y)}function u(y){return y===45?(e.consume(y),p):n(y)}function h(y){return y===null?n(y):y===45?(e.consume(y),f):G(y)?(o=h,Z(y)):(e.consume(y),h)}function f(y){return y===45?(e.consume(y),p):h(y)}function p(y){return y===62?K(y):y===45?f(y):h(y)}function m(y){const L="CDATA[";return y===L.charCodeAt(a++)?(e.consume(y),a===L.length?x:m):n(y)}function x(y){return y===null?n(y):y===93?(e.consume(y),v):G(y)?(o=x,Z(y)):(e.consume(y),x)}function v(y){return y===93?(e.consume(y),w):x(y)}function w(y){return y===62?K(y):y===93?(e.consume(y),w):x(y)}function S(y){return y===null||y===62?K(y):G(y)?(o=S,Z(y)):(e.consume(y),S)}function k(y){return y===null?n(y):y===63?(e.consume(y),C):G(y)?(o=k,Z(y)):(e.consume(y),k)}function C(y){return y===62?K(y):k(y)}function M(y){return He(y)?(e.consume(y),j):n(y)}function j(y){return y===45||Le(y)?(e.consume(y),j):A(y)}function A(y){return G(y)?(o=A,Z(y)):ne(y)?(e.consume(y),A):K(y)}function D(y){return y===45||Le(y)?(e.consume(y),D):y===47||y===62||Ie(y)?V(y):n(y)}function V(y){return y===47?(e.consume(y),K):y===58||y===95||He(y)?(e.consume(y),E):G(y)?(o=V,Z(y)):ne(y)?(e.consume(y),V):K(y)}function E(y){return y===45||y===46||y===58||y===95||Le(y)?(e.consume(y),E):T(y)}function T(y){return y===61?(e.consume(y),R):G(y)?(o=T,Z(y)):ne(y)?(e.consume(y),T):V(y)}function R(y){return y===null||y===60||y===61||y===62||y===96?n(y):y===34||y===39?(e.consume(y),r=y,_):G(y)?(o=R,Z(y)):ne(y)?(e.consume(y),R):(e.consume(y),H)}function _(y){return y===r?(e.consume(y),r=void 0,U):y===null?n(y):G(y)?(o=_,Z(y)):(e.consume(y),_)}function H(y){return y===null||y===34||y===39||y===60||y===61||y===96?n(y):y===47||y===62||Ie(y)?V(y):(e.consume(y),H)}function U(y){return y===47||y===62||Ie(y)?V(y):n(y)}function K(y){return y===62?(e.consume(y),e.exit("htmlTextData"),e.exit("htmlText"),t):n(y)}function Z(y){return e.exit("htmlTextData"),e.enter("lineEnding"),e.consume(y),e.exit("lineEnding"),F}function F(y){return ne(y)?le(e,I,"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(y):I(y)}function I(y){return e.enter("htmlTextData"),o(y)}}const pr={name:"labelEnd",resolveAll:qd,resolveTo:Wd,tokenize:Yd},Ud={tokenize:Gd},$d={tokenize:Kd},Hd={tokenize:Xd};function qd(e){let t=-1;const n=[];for(;++t<e.length;){const s=e[t][1];if(n.push(e[t]),s.type==="labelImage"||s.type==="labelLink"||s.type==="labelEnd"){const r=s.type==="labelImage"?4:2;s.type="data",t+=r}}return e.length!==n.length&&Ye(e,0,e.length,n),e}function Wd(e,t){let n=e.length,s=0,r,a,o,l;for(;n--;)if(r=e[n][1],a){if(r.type==="link"||r.type==="labelLink"&&r._inactive)break;e[n][0]==="enter"&&r.type==="labelLink"&&(r._inactive=!0)}else if(o){if(e[n][0]==="enter"&&(r.type==="labelImage"||r.type==="labelLink")&&!r._balanced&&(a=n,r.type!=="labelLink")){s=2;break}}else r.type==="labelEnd"&&(o=n);const c={type:e[a][1].type==="labelLink"?"link":"image",start:{...e[a][1].start},end:{...e[e.length-1][1].end}},d={type:"label",start:{...e[a][1].start},end:{...e[o][1].end}},u={type:"labelText",start:{...e[a+s+2][1].end},end:{...e[o-2][1].start}};return l=[["enter",c,t],["enter",d,t]],l=Oe(l,e.slice(a+1,a+s+3)),l=Oe(l,[["enter",u,t]]),l=Oe(l,hr(t.parser.constructs.insideSpan.null,e.slice(a+s+4,o-3),t)),l=Oe(l,[["exit",u,t],e[o-2],e[o-1],["exit",d,t]]),l=Oe(l,e.slice(o+1)),l=Oe(l,[["exit",c,t]]),Ye(e,a,e.length,l),e}function Yd(e,t,n){const s=this;let r=s.events.length,a,o;for(;r--;)if((s.events[r][1].type==="labelImage"||s.events[r][1].type==="labelLink")&&!s.events[r][1]._balanced){a=s.events[r][1];break}return l;function l(f){return a?a._inactive?h(f):(o=s.parser.defined.includes(Pt(s.sliceSerialize({start:a.end,end:s.now()}))),e.enter("labelEnd"),e.enter("labelMarker"),e.consume(f),e.exit("labelMarker"),e.exit("labelEnd"),c):n(f)}function c(f){return f===40?e.attempt(Ud,u,o?u:h)(f):f===91?e.attempt($d,u,o?d:h)(f):o?u(f):h(f)}function d(f){return e.attempt(Hd,u,h)(f)}function u(f){return t(f)}function h(f){return a._balanced=!0,n(f)}}function Gd(e,t,n){return s;function s(h){return e.enter("resource"),e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),r}function r(h){return Ie(h)?Ut(e,a)(h):a(h)}function a(h){return h===41?u(h):fo(e,o,l,"resourceDestination","resourceDestinationLiteral","resourceDestinationLiteralMarker","resourceDestinationRaw","resourceDestinationString",32)(h)}function o(h){return Ie(h)?Ut(e,c)(h):u(h)}function l(h){return n(h)}function c(h){return h===34||h===39||h===40?go(e,d,n,"resourceTitle","resourceTitleMarker","resourceTitleString")(h):u(h)}function d(h){return Ie(h)?Ut(e,u)(h):u(h)}function u(h){return h===41?(e.enter("resourceMarker"),e.consume(h),e.exit("resourceMarker"),e.exit("resource"),t):n(h)}}function Kd(e,t,n){const s=this;return r;function r(l){return mo.call(s,e,a,o,"reference","referenceMarker","referenceString")(l)}function a(l){return s.parser.defined.includes(Pt(s.sliceSerialize(s.events[s.events.length-1][1]).slice(1,-1)))?t(l):n(l)}function o(l){return n(l)}}function Xd(e,t,n){return s;function s(a){return e.enter("reference"),e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),r}function r(a){return a===93?(e.enter("referenceMarker"),e.consume(a),e.exit("referenceMarker"),e.exit("reference"),t):n(a)}}const Qd={name:"labelStartImage",resolveAll:pr.resolveAll,tokenize:Jd};function Jd(e,t,n){const s=this;return r;function r(l){return e.enter("labelImage"),e.enter("labelImageMarker"),e.consume(l),e.exit("labelImageMarker"),a}function a(l){return l===91?(e.enter("labelMarker"),e.consume(l),e.exit("labelMarker"),e.exit("labelImage"),o):n(l)}function o(l){return l===94&&"_hiddenFootnoteSupport"in s.parser.constructs?n(l):t(l)}}const Zd={name:"labelStartLink",resolveAll:pr.resolveAll,tokenize:eh};function eh(e,t,n){const s=this;return r;function r(o){return e.enter("labelLink"),e.enter("labelMarker"),e.consume(o),e.exit("labelMarker"),e.exit("labelLink"),a}function a(o){return o===94&&"_hiddenFootnoteSupport"in s.parser.constructs?n(o):t(o)}}const as={name:"lineEnding",tokenize:th};function th(e,t){return n;function n(s){return e.enter("lineEnding"),e.consume(s),e.exit("lineEnding"),le(e,t,"linePrefix")}}const yn={name:"thematicBreak",tokenize:nh};function nh(e,t,n){let s=0,r;return a;function a(d){return e.enter("thematicBreak"),o(d)}function o(d){return r=d,l(d)}function l(d){return d===r?(e.enter("thematicBreakSequence"),c(d)):s>=3&&(d===null||G(d))?(e.exit("thematicBreak"),t(d)):n(d)}function c(d){return d===r?(e.consume(d),s++,c):(e.exit("thematicBreakSequence"),ne(d)?le(e,l,"whitespace")(d):l(d))}}const Te={continuation:{tokenize:ah},exit:lh,name:"list",tokenize:ih},sh={partial:!0,tokenize:ch},rh={partial:!0,tokenize:oh};function ih(e,t,n){const s=this,r=s.events[s.events.length-1];let a=r&&r[1].type==="linePrefix"?r[2].sliceSerialize(r[1],!0).length:0,o=0;return l;function l(p){const m=s.containerState.type||(p===42||p===43||p===45?"listUnordered":"listOrdered");if(m==="listUnordered"?!s.containerState.marker||p===s.containerState.marker:Fs(p)){if(s.containerState.type||(s.containerState.type=m,e.enter(m,{_container:!0})),m==="listUnordered")return e.enter("listItemPrefix"),p===42||p===45?e.check(yn,n,d)(p):d(p);if(!s.interrupt||p===49)return e.enter("listItemPrefix"),e.enter("listItemValue"),c(p)}return n(p)}function c(p){return Fs(p)&&++o<10?(e.consume(p),c):(!s.interrupt||o<2)&&(s.containerState.marker?p===s.containerState.marker:p===41||p===46)?(e.exit("listItemValue"),d(p)):n(p)}function d(p){return e.enter("listItemMarker"),e.consume(p),e.exit("listItemMarker"),s.containerState.marker=s.containerState.marker||p,e.check(Bn,s.interrupt?n:u,e.attempt(sh,f,h))}function u(p){return s.containerState.initialBlankLine=!0,a++,f(p)}function h(p){return ne(p)?(e.enter("listItemPrefixWhitespace"),e.consume(p),e.exit("listItemPrefixWhitespace"),f):n(p)}function f(p){return s.containerState.size=a+s.sliceSerialize(e.exit("listItemPrefix"),!0).length,t(p)}}function ah(e,t,n){const s=this;return s.containerState._closeFlow=void 0,e.check(Bn,r,a);function r(l){return s.containerState.furtherBlankLines=s.containerState.furtherBlankLines||s.containerState.initialBlankLine,le(e,t,"listItemIndent",s.containerState.size+1)(l)}function a(l){return s.containerState.furtherBlankLines||!ne(l)?(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,o(l)):(s.containerState.furtherBlankLines=void 0,s.containerState.initialBlankLine=void 0,e.attempt(rh,t,o)(l))}function o(l){return s.containerState._closeFlow=!0,s.interrupt=void 0,le(e,e.attempt(Te,t,n),"linePrefix",s.parser.constructs.disable.null.includes("codeIndented")?void 0:4)(l)}}function oh(e,t,n){const s=this;return le(e,r,"listItemIndent",s.containerState.size+1);function r(a){const o=s.events[s.events.length-1];return o&&o[1].type==="listItemIndent"&&o[2].sliceSerialize(o[1],!0).length===s.containerState.size?t(a):n(a)}}function lh(e){e.exit(this.containerState.type)}function ch(e,t,n){const s=this;return le(e,r,"listItemPrefixWhitespace",s.parser.constructs.disable.null.includes("codeIndented")?void 0:5);function r(a){const o=s.events[s.events.length-1];return!ne(a)&&o&&o[1].type==="listItemPrefixWhitespace"?t(a):n(a)}}const hi={name:"setextUnderline",resolveTo:uh,tokenize:dh};function uh(e,t){let n=e.length,s,r,a;for(;n--;)if(e[n][0]==="enter"){if(e[n][1].type==="content"){s=n;break}e[n][1].type==="paragraph"&&(r=n)}else e[n][1].type==="content"&&e.splice(n,1),!a&&e[n][1].type==="definition"&&(a=n);const o={type:"setextHeading",start:{...e[s][1].start},end:{...e[e.length-1][1].end}};return e[r][1].type="setextHeadingText",a?(e.splice(r,0,["enter",o,t]),e.splice(a+1,0,["exit",e[s][1],t]),e[s][1].end={...e[a][1].end}):e[s][1]=o,e.push(["exit",o,t]),e}function dh(e,t,n){const s=this;let r;return a;function a(d){let u=s.events.length,h;for(;u--;)if(s.events[u][1].type!=="lineEnding"&&s.events[u][1].type!=="linePrefix"&&s.events[u][1].type!=="content"){h=s.events[u][1].type==="paragraph";break}return!s.parser.lazy[s.now().line]&&(s.interrupt||h)?(e.enter("setextHeadingLine"),r=d,o(d)):n(d)}function o(d){return e.enter("setextHeadingLineSequence"),l(d)}function l(d){return d===r?(e.consume(d),l):(e.exit("setextHeadingLineSequence"),ne(d)?le(e,c,"lineSuffix")(d):c(d))}function c(d){return d===null||G(d)?(e.exit("setextHeadingLine"),t(d)):n(d)}}const hh={tokenize:ph};function ph(e){const t=this,n=e.attempt(Bn,s,e.attempt(this.parser.constructs.flowInitial,r,le(e,e.attempt(this.parser.constructs.flow,r,e.attempt(yd,r)),"linePrefix")));return n;function s(a){if(a===null){e.consume(a);return}return e.enter("lineEndingBlank"),e.consume(a),e.exit("lineEndingBlank"),t.currentConstruct=void 0,n}function r(a){if(a===null){e.consume(a);return}return e.enter("lineEnding"),e.consume(a),e.exit("lineEnding"),t.currentConstruct=void 0,n}}const fh={resolveAll:yo()},mh=xo("string"),gh=xo("text");function xo(e){return{resolveAll:yo(e==="text"?xh:void 0),tokenize:t};function t(n){const s=this,r=this.parser.constructs[e],a=n.attempt(r,o,l);return o;function o(u){return d(u)?a(u):l(u)}function l(u){if(u===null){n.consume(u);return}return n.enter("data"),n.consume(u),c}function c(u){return d(u)?(n.exit("data"),a(u)):(n.consume(u),c)}function d(u){if(u===null)return!0;const h=r[u];let f=-1;if(h)for(;++f<h.length;){const p=h[f];if(!p.previous||p.previous.call(s,s.previous))return!0}return!1}}}function yo(e){return t;function t(n,s){let r=-1,a;for(;++r<=n.length;)a===void 0?n[r]&&n[r][1].type==="data"&&(a=r,r++):(!n[r]||n[r][1].type!=="data")&&(r!==a+2&&(n[a][1].end=n[r-1][1].end,n.splice(a+2,r-a-2),r=a+2),a=void 0);return e?e(n,s):n}}function xh(e,t){let n=0;for(;++n<=e.length;)if((n===e.length||e[n][1].type==="lineEnding")&&e[n-1][1].type==="data"){const s=e[n-1][1],r=t.sliceStream(s);let a=r.length,o=-1,l=0,c;for(;a--;){const d=r[a];if(typeof d=="string"){for(o=d.length;d.charCodeAt(o-1)===32;)l++,o--;if(o)break;o=-1}else if(d===-2)c=!0,l++;else if(d!==-1){a++;break}}if(t._contentTypeTextTrailing&&n===e.length&&(l=0),l){const d={type:n===e.length||c||l<2?"lineSuffix":"hardBreakTrailing",start:{_bufferIndex:a?o:s.start._bufferIndex+o,_index:s.start._index+a,line:s.end.line,column:s.end.column-l,offset:s.end.offset-l},end:{...s.end}};s.end={...d.start},s.start.offset===s.end.offset?Object.assign(s,d):(e.splice(n,0,["enter",d,t],["exit",d,t]),n+=2)}n++}return e}const yh={42:Te,43:Te,45:Te,48:Te,49:Te,50:Te,51:Te,52:Te,53:Te,54:Te,55:Te,56:Te,57:Te,62:co},bh={91:Sd},wh={[-2]:is,[-1]:is,32:is},vh={35:Pd,42:yn,45:[hi,yn],60:Dd,61:hi,95:yn,96:ui,126:ui},kh={38:ho,92:uo},Sh={[-5]:as,[-4]:as,[-3]:as,33:Qd,38:ho,42:Os,60:[Zu,Bd],91:Zd,92:[Td,uo],93:pr,95:Os,96:hd},jh={null:[Os,fh]},Nh={null:[42,95]},Ch={null:[]},Th=Object.freeze(Object.defineProperty({__proto__:null,attentionMarkers:Nh,contentInitial:bh,disable:Ch,document:yh,flow:vh,flowInitial:wh,insideSpan:jh,string:kh,text:Sh},Symbol.toStringTag,{value:"Module"}));function Ah(e,t,n){let s={_bufferIndex:-1,_index:0,line:n&&n.line||1,column:n&&n.column||1,offset:n&&n.offset||0};const r={},a=[];let o=[],l=[];const c={attempt:A(M),check:A(j),consume:S,enter:k,exit:C,interrupt:A(j,{interrupt:!0})},d={code:null,containerState:{},defineSkip:x,events:[],now:m,parser:e,previous:null,sliceSerialize:f,sliceStream:p,write:h};let u=t.tokenize.call(d,c);return t.resolveAll&&a.push(t),d;function h(T){return o=Oe(o,T),v(),o[o.length-1]!==null?[]:(D(t,0),d.events=hr(a,d.events,d),d.events)}function f(T,R){return Ih(p(T),R)}function p(T){return Ph(o,T)}function m(){const{_bufferIndex:T,_index:R,line:_,column:H,offset:U}=s;return{_bufferIndex:T,_index:R,line:_,column:H,offset:U}}function x(T){r[T.line]=T.column,E()}function v(){let T;for(;s._index<o.length;){const R=o[s._index];if(typeof R=="string")for(T=s._index,s._bufferIndex<0&&(s._bufferIndex=0);s._index===T&&s._bufferIndex<R.length;)w(R.charCodeAt(s._bufferIndex));else w(R)}}function w(T){u=u(T)}function S(T){G(T)?(s.line++,s.column=1,s.offset+=T===-3?2:1,E()):T!==-1&&(s.column++,s.offset++),s._bufferIndex<0?s._index++:(s._bufferIndex++,s._bufferIndex===o[s._index].length&&(s._bufferIndex=-1,s._index++)),d.previous=T}function k(T,R){const _=R||{};return _.type=T,_.start=m(),d.events.push(["enter",_,d]),l.push(_),_}function C(T){const R=l.pop();return R.end=m(),d.events.push(["exit",R,d]),R}function M(T,R){D(T,R.from)}function j(T,R){R.restore()}function A(T,R){return _;function _(H,U,K){let Z,F,I,y;return Array.isArray(H)?X(H):"tokenize"in H?X([H]):L(H);function L(ee){return we;function we(de){const ae=de!==null&&ee[de],ie=de!==null&&ee.null,he=[...Array.isArray(ae)?ae:ae?[ae]:[],...Array.isArray(ie)?ie:ie?[ie]:[]];return X(he)(de)}}function X(ee){return Z=ee,F=0,ee.length===0?K:g(ee[F])}function g(ee){return we;function we(de){return y=V(),I=ee,ee.partial||(d.currentConstruct=ee),ee.name&&d.parser.constructs.disable.null.includes(ee.name)?se():ee.tokenize.call(R?Object.assign(Object.create(d),R):d,c,O,se)(de)}}function O(ee){return T(I,y),U}function se(ee){return y.restore(),++F<Z.length?g(Z[F]):K}}}function D(T,R){T.resolveAll&&!a.includes(T)&&a.push(T),T.resolve&&Ye(d.events,R,d.events.length-R,T.resolve(d.events.slice(R),d)),T.resolveTo&&(d.events=T.resolveTo(d.events,d))}function V(){const T=m(),R=d.previous,_=d.currentConstruct,H=d.events.length,U=Array.from(l);return{from:H,restore:K};function K(){s=T,d.previous=R,d.currentConstruct=_,d.events.length=H,l=U,E()}}function E(){s.line in r&&s.column<2&&(s.column=r[s.line],s.offset+=r[s.line]-1)}}function Ph(e,t){const n=t.start._index,s=t.start._bufferIndex,r=t.end._index,a=t.end._bufferIndex;let o;if(n===r)o=[e[n].slice(s,a)];else{if(o=e.slice(n,r),s>-1){const l=o[0];typeof l=="string"?o[0]=l.slice(s):o.shift()}a>0&&o.push(e[r].slice(0,a))}return o}function Ih(e,t){let n=-1;const s=[];let r;for(;++n<e.length;){const a=e[n];let o;if(typeof a=="string")o=a;else switch(a){case-5:{o="\r";break}case-4:{o=`
`;break}case-3:{o=`\r
`;break}case-2:{o=t?" ":"	";break}case-1:{if(!t&&r)continue;o=" ";break}default:o=String.fromCharCode(a)}r=a===-2,s.push(o)}return s.join("")}function Eh(e){const s={constructs:Fu([Th,...(e||{}).extensions||[]]),content:r(Wu),defined:[],document:r(Gu),flow:r(hh),lazy:{},string:r(mh),text:r(gh)};return s;function r(a){return o;function o(l){return Ah(s,a,l)}}}function Mh(e){for(;!po(e););return e}const pi=/[\0\t\n\r]/g;function Dh(){let e=1,t="",n=!0,s;return r;function r(a,o,l){const c=[];let d,u,h,f,p;for(a=t+(typeof a=="string"?a.toString():new TextDecoder(o||void 0).decode(a)),h=0,t="",n&&(a.charCodeAt(0)===65279&&h++,n=void 0);h<a.length;){if(pi.lastIndex=h,d=pi.exec(a),f=d&&d.index!==void 0?d.index:a.length,p=a.charCodeAt(f),!d){t=a.slice(h);break}if(p===10&&h===f&&s)c.push(-3),s=void 0;else switch(s&&(c.push(-5),s=void 0),h<f&&(c.push(a.slice(h,f)),e+=f-h),p){case 0:{c.push(65533),e++;break}case 9:{for(u=Math.ceil(e/4)*4,c.push(-2);e++<u;)c.push(-1);break}case 10:{c.push(-4),e=1;break}default:s=!0,e=1}h=f+1}return l&&(s&&c.push(-5),t&&c.push(t),c.push(null)),c}}const Lh=/\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi;function zh(e){return e.replace(Lh,Rh)}function Rh(e,t,n){if(t)return t;if(n.charCodeAt(0)===35){const r=n.charCodeAt(1),a=r===120||r===88;return lo(n.slice(a?2:1),a?16:10)}return dr(n)||e}const bo={}.hasOwnProperty;function Vh(e,t,n){return typeof t!="string"&&(n=t,t=void 0),Fh(n)(Mh(Eh(n).document().write(Dh()(e,t,!0))))}function Fh(e){const t={transforms:[],canContainEols:["emphasis","fragment","heading","paragraph","strong"],enter:{autolink:a(cn),autolinkProtocol:V,autolinkEmail:V,atxHeading:a(zt),blockQuote:a(ie),characterEscape:V,characterReference:V,codeFenced:a(he),codeFencedFenceInfo:o,codeFencedFenceMeta:o,codeIndented:a(he,o),codeText:a(Ge,o),codeTextData:V,data:V,codeFlowValue:V,definition:a(dt),definitionDestinationString:o,definitionLabelString:o,definitionTitleString:o,emphasis:a(Qn),hardBreakEscape:a(on),hardBreakTrailing:a(on),htmlFlow:a(ln,o),htmlFlowData:V,htmlText:a(ln,o),htmlTextData:V,image:a(Jn),label:o,link:a(cn),listItem:a(Zn),listItemValue:f,listOrdered:a(un,h),listUnordered:a(un),paragraph:a(es),reference:g,referenceString:o,resourceDestinationString:o,resourceTitleString:o,setextHeading:a(zt),strong:a(ts),thematicBreak:a(Q)},exit:{atxHeading:c(),atxHeadingSequence:M,autolink:c(),autolinkEmail:ae,autolinkProtocol:de,blockQuote:c(),characterEscapeValue:E,characterReferenceMarkerHexadecimal:se,characterReferenceMarkerNumeric:se,characterReferenceValue:ee,characterReference:we,codeFenced:c(v),codeFencedFence:x,codeFencedFenceInfo:p,codeFencedFenceMeta:m,codeFlowValue:E,codeIndented:c(w),codeText:c(U),codeTextData:E,data:E,definition:c(),definitionDestinationString:C,definitionLabelString:S,definitionTitleString:k,emphasis:c(),hardBreakEscape:c(R),hardBreakTrailing:c(R),htmlFlow:c(_),htmlFlowData:E,htmlText:c(H),htmlTextData:E,image:c(Z),label:I,labelText:F,lineEnding:T,link:c(K),listItem:c(),listOrdered:c(),listUnordered:c(),paragraph:c(),referenceString:O,resourceDestinationString:y,resourceTitleString:L,resource:X,setextHeading:c(D),setextHeadingLineSequence:A,setextHeadingText:j,strong:c(),thematicBreak:c()}};wo(t,(e||{}).mdastExtensions||[]);const n={};return s;function s(N){let z={type:"root",children:[]};const q={stack:[z],tokenStack:[],config:t,enter:l,exit:d,buffer:o,resume:u,data:n},Y=[];let te=-1;for(;++te<N.length;)if(N[te][1].type==="listOrdered"||N[te][1].type==="listUnordered")if(N[te][0]==="enter")Y.push(te);else{const Ne=Y.pop();te=r(N,Ne,te)}for(te=-1;++te<N.length;){const Ne=t[N[te][0]];bo.call(Ne,N[te][1].type)&&Ne[N[te][1].type].call(Object.assign({sliceSerialize:N[te][2].sliceSerialize},q),N[te][1])}if(q.tokenStack.length>0){const Ne=q.tokenStack[q.tokenStack.length-1];(Ne[1]||fi).call(q,void 0,Ne[0])}for(z.position={start:st(N.length>0?N[0][1].start:{line:1,column:1,offset:0}),end:st(N.length>0?N[N.length-2][1].end:{line:1,column:1,offset:0})},te=-1;++te<t.transforms.length;)z=t.transforms[te](z)||z;return z}function r(N,z,q){let Y=z-1,te=-1,Ne=!1,Be,Ce,Ke,nt;for(;++Y<=q;){const xe=N[Y];switch(xe[1].type){case"listUnordered":case"listOrdered":case"blockQuote":{xe[0]==="enter"?te++:te--,nt=void 0;break}case"lineEndingBlank":{xe[0]==="enter"&&(Be&&!nt&&!te&&!Ke&&(Ke=Y),nt=void 0);break}case"linePrefix":case"listItemValue":case"listItemMarker":case"listItemPrefix":case"listItemPrefixWhitespace":break;default:nt=void 0}if(!te&&xe[0]==="enter"&&xe[1].type==="listItemPrefix"||te===-1&&xe[0]==="exit"&&(xe[1].type==="listUnordered"||xe[1].type==="listOrdered")){if(Be){let re=Y;for(Ce=void 0;re--;){const ye=N[re];if(ye[1].type==="lineEnding"||ye[1].type==="lineEndingBlank"){if(ye[0]==="exit")continue;Ce&&(N[Ce][1].type="lineEndingBlank",Ne=!0),ye[1].type="lineEnding",Ce=re}else if(!(ye[1].type==="linePrefix"||ye[1].type==="blockQuotePrefix"||ye[1].type==="blockQuotePrefixWhitespace"||ye[1].type==="blockQuoteMarker"||ye[1].type==="listItemIndent"))break}Ke&&(!Ce||Ke<Ce)&&(Be._spread=!0),Be.end=Object.assign({},Ce?N[Ce][1].start:xe[1].end),N.splice(Ce||Y,0,["exit",Be,xe[2]]),Y++,q++}if(xe[1].type==="listItemPrefix"){const re={type:"listItem",_spread:!1,start:Object.assign({},xe[1].start),end:void 0};Be=re,N.splice(Y,0,["enter",re,xe[2]]),Y++,q++,Ke=void 0,nt=!0}}}return N[z][1]._spread=Ne,q}function a(N,z){return q;function q(Y){l.call(this,N(Y),Y),z&&z.call(this,Y)}}function o(){this.stack.push({type:"fragment",children:[]})}function l(N,z,q){this.stack[this.stack.length-1].children.push(N),this.stack.push(N),this.tokenStack.push([z,q||void 0]),N.position={start:st(z.start),end:void 0}}function c(N){return z;function z(q){N&&N.call(this,q),d.call(this,q)}}function d(N,z){const q=this.stack.pop(),Y=this.tokenStack.pop();if(Y)Y[0].type!==N.type&&(z?z.call(this,N,Y[0]):(Y[1]||fi).call(this,N,Y[0]));else throw new Error("Cannot close `"+N.type+"` ("+_t({start:N.start,end:N.end})+"): it’s not open");q.position.end=st(N.end)}function u(){return Ru(this.stack.pop())}function h(){this.data.expectingFirstListItemValue=!0}function f(N){if(this.data.expectingFirstListItemValue){const z=this.stack[this.stack.length-2];z.start=Number.parseInt(this.sliceSerialize(N),10),this.data.expectingFirstListItemValue=void 0}}function p(){const N=this.resume(),z=this.stack[this.stack.length-1];z.lang=N}function m(){const N=this.resume(),z=this.stack[this.stack.length-1];z.meta=N}function x(){this.data.flowCodeInside||(this.buffer(),this.data.flowCodeInside=!0)}function v(){const N=this.resume(),z=this.stack[this.stack.length-1];z.value=N.replace(/^(\r?\n|\r)|(\r?\n|\r)$/g,""),this.data.flowCodeInside=void 0}function w(){const N=this.resume(),z=this.stack[this.stack.length-1];z.value=N.replace(/(\r?\n|\r)$/g,"")}function S(N){const z=this.resume(),q=this.stack[this.stack.length-1];q.label=z,q.identifier=Pt(this.sliceSerialize(N)).toLowerCase()}function k(){const N=this.resume(),z=this.stack[this.stack.length-1];z.title=N}function C(){const N=this.resume(),z=this.stack[this.stack.length-1];z.url=N}function M(N){const z=this.stack[this.stack.length-1];if(!z.depth){const q=this.sliceSerialize(N).length;z.depth=q}}function j(){this.data.setextHeadingSlurpLineEnding=!0}function A(N){const z=this.stack[this.stack.length-1];z.depth=this.sliceSerialize(N).codePointAt(0)===61?1:2}function D(){this.data.setextHeadingSlurpLineEnding=void 0}function V(N){const q=this.stack[this.stack.length-1].children;let Y=q[q.length-1];(!Y||Y.type!=="text")&&(Y=B(),Y.position={start:st(N.start),end:void 0},q.push(Y)),this.stack.push(Y)}function E(N){const z=this.stack.pop();z.value+=this.sliceSerialize(N),z.position.end=st(N.end)}function T(N){const z=this.stack[this.stack.length-1];if(this.data.atHardBreak){const q=z.children[z.children.length-1];q.position.end=st(N.end),this.data.atHardBreak=void 0;return}!this.data.setextHeadingSlurpLineEnding&&t.canContainEols.includes(z.type)&&(V.call(this,N),E.call(this,N))}function R(){this.data.atHardBreak=!0}function _(){const N=this.resume(),z=this.stack[this.stack.length-1];z.value=N}function H(){const N=this.resume(),z=this.stack[this.stack.length-1];z.value=N}function U(){const N=this.resume(),z=this.stack[this.stack.length-1];z.value=N}function K(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=z,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function Z(){const N=this.stack[this.stack.length-1];if(this.data.inReference){const z=this.data.referenceType||"shortcut";N.type+="Reference",N.referenceType=z,delete N.url,delete N.title}else delete N.identifier,delete N.label;this.data.referenceType=void 0}function F(N){const z=this.sliceSerialize(N),q=this.stack[this.stack.length-2];q.label=zh(z),q.identifier=Pt(z).toLowerCase()}function I(){const N=this.stack[this.stack.length-1],z=this.resume(),q=this.stack[this.stack.length-1];if(this.data.inReference=!0,q.type==="link"){const Y=N.children;q.children=Y}else q.alt=z}function y(){const N=this.resume(),z=this.stack[this.stack.length-1];z.url=N}function L(){const N=this.resume(),z=this.stack[this.stack.length-1];z.title=N}function X(){this.data.inReference=void 0}function g(){this.data.referenceType="collapsed"}function O(N){const z=this.resume(),q=this.stack[this.stack.length-1];q.label=z,q.identifier=Pt(this.sliceSerialize(N)).toLowerCase(),this.data.referenceType="full"}function se(N){this.data.characterReferenceType=N.type}function ee(N){const z=this.sliceSerialize(N),q=this.data.characterReferenceType;let Y;q?(Y=lo(z,q==="characterReferenceMarkerNumeric"?10:16),this.data.characterReferenceType=void 0):Y=dr(z);const te=this.stack[this.stack.length-1];te.value+=Y}function we(N){const z=this.stack.pop();z.position.end=st(N.end)}function de(N){E.call(this,N);const z=this.stack[this.stack.length-1];z.url=this.sliceSerialize(N)}function ae(N){E.call(this,N);const z=this.stack[this.stack.length-1];z.url="mailto:"+this.sliceSerialize(N)}function ie(){return{type:"blockquote",children:[]}}function he(){return{type:"code",lang:null,meta:null,value:""}}function Ge(){return{type:"inlineCode",value:""}}function dt(){return{type:"definition",identifier:"",label:null,title:null,url:""}}function Qn(){return{type:"emphasis",children:[]}}function zt(){return{type:"heading",depth:0,children:[]}}function on(){return{type:"break"}}function ln(){return{type:"html",value:""}}function Jn(){return{type:"image",title:null,url:"",alt:null}}function cn(){return{type:"link",title:null,url:"",children:[]}}function un(N){return{type:"list",ordered:N.type==="listOrdered",start:null,spread:N._spread,children:[]}}function Zn(N){return{type:"listItem",spread:N._spread,checked:null,children:[]}}function es(){return{type:"paragraph",children:[]}}function ts(){return{type:"strong",children:[]}}function B(){return{type:"text",value:""}}function Q(){return{type:"thematicBreak"}}}function st(e){return{line:e.line,column:e.column,offset:e.offset}}function wo(e,t){let n=-1;for(;++n<t.length;){const s=t[n];Array.isArray(s)?wo(e,s):Oh(e,s)}}function Oh(e,t){let n;for(n in t)if(bo.call(t,n))switch(n){case"canContainEols":{const s=t[n];s&&e[n].push(...s);break}case"transforms":{const s=t[n];s&&e[n].push(...s);break}case"enter":case"exit":{const s=t[n];s&&Object.assign(e[n],s);break}}}function fi(e,t){throw e?new Error("Cannot close `"+e.type+"` ("+_t({start:e.start,end:e.end})+"): a different token (`"+t.type+"`, "+_t({start:t.start,end:t.end})+") is open"):new Error("Cannot close document, a token (`"+t.type+"`, "+_t({start:t.start,end:t.end})+") is still open")}function Bh(e){const t=this;t.parser=n;function n(s){return Vh(s,{...t.data("settings"),...e,extensions:t.data("micromarkExtensions")||[],mdastExtensions:t.data("fromMarkdownExtensions")||[]})}}function _h(e,t){const n={type:"element",tagName:"blockquote",properties:{},children:e.wrap(e.all(t),!0)};return e.patch(t,n),e.applyData(t,n)}function Uh(e,t){const n={type:"element",tagName:"br",properties:{},children:[]};return e.patch(t,n),[e.applyData(t,n),{type:"text",value:`
`}]}function $h(e,t){const n=t.value?t.value+`
`:"",s={};t.lang&&(s.className=["language-"+t.lang]);let r={type:"element",tagName:"code",properties:s,children:[{type:"text",value:n}]};return t.meta&&(r.data={meta:t.meta}),e.patch(t,r),r=e.applyData(t,r),r={type:"element",tagName:"pre",properties:{},children:[r]},e.patch(t,r),r}function Hh(e,t){const n={type:"element",tagName:"del",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function qh(e,t){const n={type:"element",tagName:"em",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Wh(e,t){const n=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",s=String(t.identifier).toUpperCase(),r=Lt(s.toLowerCase()),a=e.footnoteOrder.indexOf(s);let o,l=e.footnoteCounts.get(s);l===void 0?(l=0,e.footnoteOrder.push(s),o=e.footnoteOrder.length):o=a+1,l+=1,e.footnoteCounts.set(s,l);const c={type:"element",tagName:"a",properties:{href:"#"+n+"fn-"+r,id:n+"fnref-"+r+(l>1?"-"+l:""),dataFootnoteRef:!0,ariaDescribedBy:["footnote-label"]},children:[{type:"text",value:String(o)}]};e.patch(t,c);const d={type:"element",tagName:"sup",properties:{},children:[c]};return e.patch(t,d),e.applyData(t,d)}function Yh(e,t){const n={type:"element",tagName:"h"+t.depth,properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function Gh(e,t){if(e.options.allowDangerousHtml){const n={type:"raw",value:t.value};return e.patch(t,n),e.applyData(t,n)}}function vo(e,t){const n=t.referenceType;let s="]";if(n==="collapsed"?s+="[]":n==="full"&&(s+="["+(t.label||t.identifier)+"]"),t.type==="imageReference")return[{type:"text",value:"!["+t.alt+s}];const r=e.all(t),a=r[0];a&&a.type==="text"?a.value="["+a.value:r.unshift({type:"text",value:"["});const o=r[r.length-1];return o&&o.type==="text"?o.value+=s:r.push({type:"text",value:s}),r}function Kh(e,t){const n=String(t.identifier).toUpperCase(),s=e.definitionById.get(n);if(!s)return vo(e,t);const r={src:Lt(s.url||""),alt:t.alt};s.title!==null&&s.title!==void 0&&(r.title=s.title);const a={type:"element",tagName:"img",properties:r,children:[]};return e.patch(t,a),e.applyData(t,a)}function Xh(e,t){const n={src:Lt(t.url)};t.alt!==null&&t.alt!==void 0&&(n.alt=t.alt),t.title!==null&&t.title!==void 0&&(n.title=t.title);const s={type:"element",tagName:"img",properties:n,children:[]};return e.patch(t,s),e.applyData(t,s)}function Qh(e,t){const n={type:"text",value:t.value.replace(/\r?\n|\r/g," ")};e.patch(t,n);const s={type:"element",tagName:"code",properties:{},children:[n]};return e.patch(t,s),e.applyData(t,s)}function Jh(e,t){const n=String(t.identifier).toUpperCase(),s=e.definitionById.get(n);if(!s)return vo(e,t);const r={href:Lt(s.url||"")};s.title!==null&&s.title!==void 0&&(r.title=s.title);const a={type:"element",tagName:"a",properties:r,children:e.all(t)};return e.patch(t,a),e.applyData(t,a)}function Zh(e,t){const n={href:Lt(t.url)};t.title!==null&&t.title!==void 0&&(n.title=t.title);const s={type:"element",tagName:"a",properties:n,children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function ep(e,t,n){const s=e.all(t),r=n?tp(n):ko(t),a={},o=[];if(typeof t.checked=="boolean"){const u=s[0];let h;u&&u.type==="element"&&u.tagName==="p"?h=u:(h={type:"element",tagName:"p",properties:{},children:[]},s.unshift(h)),h.children.length>0&&h.children.unshift({type:"text",value:" "}),h.children.unshift({type:"element",tagName:"input",properties:{type:"checkbox",checked:t.checked,disabled:!0},children:[]}),a.className=["task-list-item"]}let l=-1;for(;++l<s.length;){const u=s[l];(r||l!==0||u.type!=="element"||u.tagName!=="p")&&o.push({type:"text",value:`
`}),u.type==="element"&&u.tagName==="p"&&!r?o.push(...u.children):o.push(u)}const c=s[s.length-1];c&&(r||c.type!=="element"||c.tagName!=="p")&&o.push({type:"text",value:`
`});const d={type:"element",tagName:"li",properties:a,children:o};return e.patch(t,d),e.applyData(t,d)}function tp(e){let t=!1;if(e.type==="list"){t=e.spread||!1;const n=e.children;let s=-1;for(;!t&&++s<n.length;)t=ko(n[s])}return t}function ko(e){const t=e.spread;return t??e.children.length>1}function np(e,t){const n={},s=e.all(t);let r=-1;for(typeof t.start=="number"&&t.start!==1&&(n.start=t.start);++r<s.length;){const o=s[r];if(o.type==="element"&&o.tagName==="li"&&o.properties&&Array.isArray(o.properties.className)&&o.properties.className.includes("task-list-item")){n.className=["contains-task-list"];break}}const a={type:"element",tagName:t.ordered?"ol":"ul",properties:n,children:e.wrap(s,!0)};return e.patch(t,a),e.applyData(t,a)}function sp(e,t){const n={type:"element",tagName:"p",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function rp(e,t){const n={type:"root",children:e.wrap(e.all(t))};return e.patch(t,n),e.applyData(t,n)}function ip(e,t){const n={type:"element",tagName:"strong",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}function ap(e,t){const n=e.all(t),s=n.shift(),r=[];if(s){const o={type:"element",tagName:"thead",properties:{},children:e.wrap([s],!0)};e.patch(t.children[0],o),r.push(o)}if(n.length>0){const o={type:"element",tagName:"tbody",properties:{},children:e.wrap(n,!0)},l=or(t.children[1]),c=to(t.children[t.children.length-1]);l&&c&&(o.position={start:l,end:c}),r.push(o)}const a={type:"element",tagName:"table",properties:{},children:e.wrap(r,!0)};return e.patch(t,a),e.applyData(t,a)}function op(e,t,n){const s=n?n.children:void 0,a=(s?s.indexOf(t):1)===0?"th":"td",o=n&&n.type==="table"?n.align:void 0,l=o?o.length:t.children.length;let c=-1;const d=[];for(;++c<l;){const h=t.children[c],f={},p=o?o[c]:void 0;p&&(f.align=p);let m={type:"element",tagName:a,properties:f,children:[]};h&&(m.children=e.all(h),e.patch(h,m),m=e.applyData(h,m)),d.push(m)}const u={type:"element",tagName:"tr",properties:{},children:e.wrap(d,!0)};return e.patch(t,u),e.applyData(t,u)}function lp(e,t){const n={type:"element",tagName:"td",properties:{},children:e.all(t)};return e.patch(t,n),e.applyData(t,n)}const mi=9,gi=32;function cp(e){const t=String(e),n=/\r?\n|\r/g;let s=n.exec(t),r=0;const a=[];for(;s;)a.push(xi(t.slice(r,s.index),r>0,!0),s[0]),r=s.index+s[0].length,s=n.exec(t);return a.push(xi(t.slice(r),r>0,!1)),a.join("")}function xi(e,t,n){let s=0,r=e.length;if(t){let a=e.codePointAt(s);for(;a===mi||a===gi;)s++,a=e.codePointAt(s)}if(n){let a=e.codePointAt(r-1);for(;a===mi||a===gi;)r--,a=e.codePointAt(r-1)}return r>s?e.slice(s,r):""}function up(e,t){const n={type:"text",value:cp(String(t.value))};return e.patch(t,n),e.applyData(t,n)}function dp(e,t){const n={type:"element",tagName:"hr",properties:{},children:[]};return e.patch(t,n),e.applyData(t,n)}const hp={blockquote:_h,break:Uh,code:$h,delete:Hh,emphasis:qh,footnoteReference:Wh,heading:Yh,html:Gh,imageReference:Kh,image:Xh,inlineCode:Qh,linkReference:Jh,link:Zh,listItem:ep,list:np,paragraph:sp,root:rp,strong:ip,table:ap,tableCell:lp,tableRow:op,text:up,thematicBreak:dp,toml:dn,yaml:dn,definition:dn,footnoteDefinition:dn};function dn(){}const So=-1,_n=0,$t=1,Cn=2,fr=3,mr=4,gr=5,xr=6,jo=7,No=8,yi=typeof self=="object"?self:globalThis,pp=(e,t)=>{const n=(r,a)=>(e.set(a,r),r),s=r=>{if(e.has(r))return e.get(r);const[a,o]=t[r];switch(a){case _n:case So:return n(o,r);case $t:{const l=n([],r);for(const c of o)l.push(s(c));return l}case Cn:{const l=n({},r);for(const[c,d]of o)l[s(c)]=s(d);return l}case fr:return n(new Date(o),r);case mr:{const{source:l,flags:c}=o;return n(new RegExp(l,c),r)}case gr:{const l=n(new Map,r);for(const[c,d]of o)l.set(s(c),s(d));return l}case xr:{const l=n(new Set,r);for(const c of o)l.add(s(c));return l}case jo:{const{name:l,message:c}=o;return n(new yi[l](c),r)}case No:return n(BigInt(o),r);case"BigInt":return n(Object(BigInt(o)),r);case"ArrayBuffer":return n(new Uint8Array(o).buffer,o);case"DataView":{const{buffer:l}=new Uint8Array(o);return n(new DataView(l),o)}}return n(new yi[a](o),r)};return s},bi=e=>pp(new Map,e)(0),St="",{toString:fp}={},{keys:mp}=Object,Vt=e=>{const t=typeof e;if(t!=="object"||!e)return[_n,t];const n=fp.call(e).slice(8,-1);switch(n){case"Array":return[$t,St];case"Object":return[Cn,St];case"Date":return[fr,St];case"RegExp":return[mr,St];case"Map":return[gr,St];case"Set":return[xr,St];case"DataView":return[$t,n]}return n.includes("Array")?[$t,n]:n.includes("Error")?[jo,n]:[Cn,n]},hn=([e,t])=>e===_n&&(t==="function"||t==="symbol"),gp=(e,t,n,s)=>{const r=(o,l)=>{const c=s.push(o)-1;return n.set(l,c),c},a=o=>{if(n.has(o))return n.get(o);let[l,c]=Vt(o);switch(l){case _n:{let u=o;switch(c){case"bigint":l=No,u=o.toString();break;case"function":case"symbol":if(e)throw new TypeError("unable to serialize "+c);u=null;break;case"undefined":return r([So],o)}return r([l,u],o)}case $t:{if(c){let f=o;return c==="DataView"?f=new Uint8Array(o.buffer):c==="ArrayBuffer"&&(f=new Uint8Array(o)),r([c,[...f]],o)}const u=[],h=r([l,u],o);for(const f of o)u.push(a(f));return h}case Cn:{if(c)switch(c){case"BigInt":return r([c,o.toString()],o);case"Boolean":case"Number":case"String":return r([c,o.valueOf()],o)}if(t&&"toJSON"in o)return a(o.toJSON());const u=[],h=r([l,u],o);for(const f of mp(o))(e||!hn(Vt(o[f])))&&u.push([a(f),a(o[f])]);return h}case fr:return r([l,o.toISOString()],o);case mr:{const{source:u,flags:h}=o;return r([l,{source:u,flags:h}],o)}case gr:{const u=[],h=r([l,u],o);for(const[f,p]of o)(e||!(hn(Vt(f))||hn(Vt(p))))&&u.push([a(f),a(p)]);return h}case xr:{const u=[],h=r([l,u],o);for(const f of o)(e||!hn(Vt(f)))&&u.push(a(f));return h}}const{message:d}=o;return r([l,{name:c,message:d}],o)};return a},wi=(e,{json:t,lossy:n}={})=>{const s=[];return gp(!(t||n),!!t,new Map,s)(e),s},Tn=typeof structuredClone=="function"?(e,t)=>t&&("json"in t||"lossy"in t)?bi(wi(e,t)):structuredClone(e):(e,t)=>bi(wi(e,t));function xp(e,t){const n=[{type:"text",value:"↩"}];return t>1&&n.push({type:"element",tagName:"sup",properties:{},children:[{type:"text",value:String(t)}]}),n}function yp(e,t){return"Back to reference "+(e+1)+(t>1?"-"+t:"")}function bp(e){const t=typeof e.options.clobberPrefix=="string"?e.options.clobberPrefix:"user-content-",n=e.options.footnoteBackContent||xp,s=e.options.footnoteBackLabel||yp,r=e.options.footnoteLabel||"Footnotes",a=e.options.footnoteLabelTagName||"h2",o=e.options.footnoteLabelProperties||{className:["sr-only"]},l=[];let c=-1;for(;++c<e.footnoteOrder.length;){const d=e.footnoteById.get(e.footnoteOrder[c]);if(!d)continue;const u=e.all(d),h=String(d.identifier).toUpperCase(),f=Lt(h.toLowerCase());let p=0;const m=[],x=e.footnoteCounts.get(h);for(;x!==void 0&&++p<=x;){m.length>0&&m.push({type:"text",value:" "});let S=typeof n=="string"?n:n(c,p);typeof S=="string"&&(S={type:"text",value:S}),m.push({type:"element",tagName:"a",properties:{href:"#"+t+"fnref-"+f+(p>1?"-"+p:""),dataFootnoteBackref:"",ariaLabel:typeof s=="string"?s:s(c,p),className:["data-footnote-backref"]},children:Array.isArray(S)?S:[S]})}const v=u[u.length-1];if(v&&v.type==="element"&&v.tagName==="p"){const S=v.children[v.children.length-1];S&&S.type==="text"?S.value+=" ":v.children.push({type:"text",value:" "}),v.children.push(...m)}else u.push(...m);const w={type:"element",tagName:"li",properties:{id:t+"fn-"+f},children:e.wrap(u,!0)};e.patch(d,w),l.push(w)}if(l.length!==0)return{type:"element",tagName:"section",properties:{dataFootnotes:!0,className:["footnotes"]},children:[{type:"element",tagName:a,properties:{...Tn(o),id:"footnote-label"},children:[{type:"text",value:r}]},{type:"text",value:`
`},{type:"element",tagName:"ol",properties:{},children:e.wrap(l,!0)},{type:"text",value:`
`}]}}const Co=function(e){if(e==null)return Sp;if(typeof e=="function")return Un(e);if(typeof e=="object")return Array.isArray(e)?wp(e):vp(e);if(typeof e=="string")return kp(e);throw new Error("Expected function, string, or object as test")};function wp(e){const t=[];let n=-1;for(;++n<e.length;)t[n]=Co(e[n]);return Un(s);function s(...r){let a=-1;for(;++a<t.length;)if(t[a].apply(this,r))return!0;return!1}}function vp(e){const t=e;return Un(n);function n(s){const r=s;let a;for(a in e)if(r[a]!==t[a])return!1;return!0}}function kp(e){return Un(t);function t(n){return n&&n.type===e}}function Un(e){return t;function t(n,s,r){return!!(jp(n)&&e.call(this,n,typeof s=="number"?s:void 0,r||void 0))}}function Sp(){return!0}function jp(e){return e!==null&&typeof e=="object"&&"type"in e}const To=[],Np=!0,vi=!1,Cp="skip";function Tp(e,t,n,s){let r;typeof t=="function"&&typeof n!="function"?(s=n,n=t):r=t;const a=Co(r),o=s?-1:1;l(e,void 0,[])();function l(c,d,u){const h=c&&typeof c=="object"?c:{};if(typeof h.type=="string"){const p=typeof h.tagName=="string"?h.tagName:typeof h.name=="string"?h.name:void 0;Object.defineProperty(f,"name",{value:"node ("+(c.type+(p?"<"+p+">":""))+")"})}return f;function f(){let p=To,m,x,v;if((!t||a(c,d,u[u.length-1]||void 0))&&(p=Ap(n(c,u)),p[0]===vi))return p;if("children"in c&&c.children){const w=c;if(w.children&&p[0]!==Cp)for(x=(s?w.children.length:-1)+o,v=u.concat(w);x>-1&&x<w.children.length;){const S=w.children[x];if(m=l(S,x,v)(),m[0]===vi)return m;x=typeof m[1]=="number"?m[1]:x+o}}return p}}}function Ap(e){return Array.isArray(e)?e:typeof e=="number"?[Np,e]:e==null?To:[e]}function Ao(e,t,n,s){let r,a,o;typeof t=="function"&&typeof n!="function"?(a=void 0,o=t,r=n):(a=t,o=n,r=s),Tp(e,a,l,r);function l(c,d){const u=d[d.length-1],h=u?u.children.indexOf(c):void 0;return o(c,h,u)}}const Bs={}.hasOwnProperty,Pp={};function Ip(e,t){const n=t||Pp,s=new Map,r=new Map,a=new Map,o={...hp,...n.handlers},l={all:d,applyData:Mp,definitionById:s,footnoteById:r,footnoteCounts:a,footnoteOrder:[],handlers:o,one:c,options:n,patch:Ep,wrap:Lp};return Ao(e,function(u){if(u.type==="definition"||u.type==="footnoteDefinition"){const h=u.type==="definition"?s:r,f=String(u.identifier).toUpperCase();h.has(f)||h.set(f,u)}}),l;function c(u,h){const f=u.type,p=l.handlers[f];if(Bs.call(l.handlers,f)&&p)return p(l,u,h);if(l.options.passThrough&&l.options.passThrough.includes(f)){if("children"in u){const{children:x,...v}=u,w=Tn(v);return w.children=l.all(u),w}return Tn(u)}return(l.options.unknownHandler||Dp)(l,u,h)}function d(u){const h=[];if("children"in u){const f=u.children;let p=-1;for(;++p<f.length;){const m=l.one(f[p],u);if(m){if(p&&f[p-1].type==="break"&&(!Array.isArray(m)&&m.type==="text"&&(m.value=ki(m.value)),!Array.isArray(m)&&m.type==="element")){const x=m.children[0];x&&x.type==="text"&&(x.value=ki(x.value))}Array.isArray(m)?h.push(...m):h.push(m)}}}return h}}function Ep(e,t){e.position&&(t.position=fu(e))}function Mp(e,t){let n=t;if(e&&e.data){const s=e.data.hName,r=e.data.hChildren,a=e.data.hProperties;if(typeof s=="string")if(n.type==="element")n.tagName=s;else{const o="children"in n?n.children:[n];n={type:"element",tagName:s,properties:{},children:o}}n.type==="element"&&a&&Object.assign(n.properties,Tn(a)),"children"in n&&n.children&&r!==null&&r!==void 0&&(n.children=r)}return n}function Dp(e,t){const n=t.data||{},s="value"in t&&!(Bs.call(n,"hProperties")||Bs.call(n,"hChildren"))?{type:"text",value:t.value}:{type:"element",tagName:"div",properties:{},children:e.all(t)};return e.patch(t,s),e.applyData(t,s)}function Lp(e,t){const n=[];let s=-1;for(t&&n.push({type:"text",value:`
`});++s<e.length;)s&&n.push({type:"text",value:`
`}),n.push(e[s]);return t&&e.length>0&&n.push({type:"text",value:`
`}),n}function ki(e){let t=0,n=e.charCodeAt(t);for(;n===9||n===32;)t++,n=e.charCodeAt(t);return e.slice(t)}function Si(e,t){const n=Ip(e,t),s=n.one(e,void 0),r=bp(n),a=Array.isArray(s)?{type:"root",children:s}:s||{type:"root",children:[]};return r&&a.children.push({type:"text",value:`
`},r),a}function zp(e,t){return e&&"run"in e?async function(n,s){const r=Si(n,{file:s,...t});await e.run(r,s)}:function(n,s){return Si(n,{file:s,...e||t})}}function ji(e){if(e)throw e}var bn=Object.prototype.hasOwnProperty,Po=Object.prototype.toString,Ni=Object.defineProperty,Ci=Object.getOwnPropertyDescriptor,Ti=function(t){return typeof Array.isArray=="function"?Array.isArray(t):Po.call(t)==="[object Array]"},Ai=function(t){if(!t||Po.call(t)!=="[object Object]")return!1;var n=bn.call(t,"constructor"),s=t.constructor&&t.constructor.prototype&&bn.call(t.constructor.prototype,"isPrototypeOf");if(t.constructor&&!n&&!s)return!1;var r;for(r in t);return typeof r>"u"||bn.call(t,r)},Pi=function(t,n){Ni&&n.name==="__proto__"?Ni(t,n.name,{enumerable:!0,configurable:!0,value:n.newValue,writable:!0}):t[n.name]=n.newValue},Ii=function(t,n){if(n==="__proto__")if(bn.call(t,n)){if(Ci)return Ci(t,n).value}else return;return t[n]},Rp=function e(){var t,n,s,r,a,o,l=arguments[0],c=1,d=arguments.length,u=!1;for(typeof l=="boolean"&&(u=l,l=arguments[1]||{},c=2),(l==null||typeof l!="object"&&typeof l!="function")&&(l={});c<d;++c)if(t=arguments[c],t!=null)for(n in t)s=Ii(l,n),r=Ii(t,n),l!==r&&(u&&r&&(Ai(r)||(a=Ti(r)))?(a?(a=!1,o=s&&Ti(s)?s:[]):o=s&&Ai(s)?s:{},Pi(l,{name:n,newValue:e(u,o,r)})):typeof r<"u"&&Pi(l,{name:n,newValue:r}));return l};const os=Ua(Rp);function _s(e){if(typeof e!="object"||e===null)return!1;const t=Object.getPrototypeOf(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)}function Vp(){const e=[],t={run:n,use:s};return t;function n(...r){let a=-1;const o=r.pop();if(typeof o!="function")throw new TypeError("Expected function as last argument, not "+o);l(null,...r);function l(c,...d){const u=e[++a];let h=-1;if(c){o(c);return}for(;++h<r.length;)(d[h]===null||d[h]===void 0)&&(d[h]=r[h]);r=d,u?Fp(u,l)(...d):o(null,...d)}}function s(r){if(typeof r!="function")throw new TypeError("Expected `middelware` to be a function, not "+r);return e.push(r),t}}function Fp(e,t){let n;return s;function s(...o){const l=e.length>o.length;let c;l&&o.push(r);try{c=e.apply(this,o)}catch(d){const u=d;if(l&&n)throw u;return r(u)}l||(c&&c.then&&typeof c.then=="function"?c.then(a,r):c instanceof Error?r(c):a(c))}function r(o,...l){n||(n=!0,t(o,...l))}function a(o){r(null,o)}}const $e={basename:Op,dirname:Bp,extname:_p,join:Up,sep:"/"};function Op(e,t){if(t!==void 0&&typeof t!="string")throw new TypeError('"ext" argument must be a string');en(e);let n=0,s=-1,r=e.length,a;if(t===void 0||t.length===0||t.length>e.length){for(;r--;)if(e.codePointAt(r)===47){if(a){n=r+1;break}}else s<0&&(a=!0,s=r+1);return s<0?"":e.slice(n,s)}if(t===e)return"";let o=-1,l=t.length-1;for(;r--;)if(e.codePointAt(r)===47){if(a){n=r+1;break}}else o<0&&(a=!0,o=r+1),l>-1&&(e.codePointAt(r)===t.codePointAt(l--)?l<0&&(s=r):(l=-1,s=o));return n===s?s=o:s<0&&(s=e.length),e.slice(n,s)}function Bp(e){if(en(e),e.length===0)return".";let t=-1,n=e.length,s;for(;--n;)if(e.codePointAt(n)===47){if(s){t=n;break}}else s||(s=!0);return t<0?e.codePointAt(0)===47?"/":".":t===1&&e.codePointAt(0)===47?"//":e.slice(0,t)}function _p(e){en(e);let t=e.length,n=-1,s=0,r=-1,a=0,o;for(;t--;){const l=e.codePointAt(t);if(l===47){if(o){s=t+1;break}continue}n<0&&(o=!0,n=t+1),l===46?r<0?r=t:a!==1&&(a=1):r>-1&&(a=-1)}return r<0||n<0||a===0||a===1&&r===n-1&&r===s+1?"":e.slice(r,n)}function Up(...e){let t=-1,n;for(;++t<e.length;)en(e[t]),e[t]&&(n=n===void 0?e[t]:n+"/"+e[t]);return n===void 0?".":$p(n)}function $p(e){en(e);const t=e.codePointAt(0)===47;let n=Hp(e,!t);return n.length===0&&!t&&(n="."),n.length>0&&e.codePointAt(e.length-1)===47&&(n+="/"),t?"/"+n:n}function Hp(e,t){let n="",s=0,r=-1,a=0,o=-1,l,c;for(;++o<=e.length;){if(o<e.length)l=e.codePointAt(o);else{if(l===47)break;l=47}if(l===47){if(!(r===o-1||a===1))if(r!==o-1&&a===2){if(n.length<2||s!==2||n.codePointAt(n.length-1)!==46||n.codePointAt(n.length-2)!==46){if(n.length>2){if(c=n.lastIndexOf("/"),c!==n.length-1){c<0?(n="",s=0):(n=n.slice(0,c),s=n.length-1-n.lastIndexOf("/")),r=o,a=0;continue}}else if(n.length>0){n="",s=0,r=o,a=0;continue}}t&&(n=n.length>0?n+"/..":"..",s=2)}else n.length>0?n+="/"+e.slice(r+1,o):n=e.slice(r+1,o),s=o-r-1;r=o,a=0}else l===46&&a>-1?a++:a=-1}return n}function en(e){if(typeof e!="string")throw new TypeError("Path must be a string. Received "+JSON.stringify(e))}const qp={cwd:Wp};function Wp(){return"/"}function Us(e){return!!(e!==null&&typeof e=="object"&&"href"in e&&e.href&&"protocol"in e&&e.protocol&&e.auth===void 0)}function Yp(e){if(typeof e=="string")e=new URL(e);else if(!Us(e)){const t=new TypeError('The "path" argument must be of type string or an instance of URL. Received `'+e+"`");throw t.code="ERR_INVALID_ARG_TYPE",t}if(e.protocol!=="file:"){const t=new TypeError("The URL must be of scheme file");throw t.code="ERR_INVALID_URL_SCHEME",t}return Gp(e)}function Gp(e){if(e.hostname!==""){const s=new TypeError('File URL host must be "localhost" or empty on darwin');throw s.code="ERR_INVALID_FILE_URL_HOST",s}const t=e.pathname;let n=-1;for(;++n<t.length;)if(t.codePointAt(n)===37&&t.codePointAt(n+1)===50){const s=t.codePointAt(n+2);if(s===70||s===102){const r=new TypeError("File URL path must not include encoded / characters");throw r.code="ERR_INVALID_FILE_URL_PATH",r}}return decodeURIComponent(t)}const ls=["history","path","basename","stem","extname","dirname"];class Io{constructor(t){let n;t?Us(t)?n={path:t}:typeof t=="string"||Kp(t)?n={value:t}:n=t:n={},this.cwd="cwd"in n?"":qp.cwd(),this.data={},this.history=[],this.messages=[],this.value,this.map,this.result,this.stored;let s=-1;for(;++s<ls.length;){const a=ls[s];a in n&&n[a]!==void 0&&n[a]!==null&&(this[a]=a==="history"?[...n[a]]:n[a])}let r;for(r in n)ls.includes(r)||(this[r]=n[r])}get basename(){return typeof this.path=="string"?$e.basename(this.path):void 0}set basename(t){us(t,"basename"),cs(t,"basename"),this.path=$e.join(this.dirname||"",t)}get dirname(){return typeof this.path=="string"?$e.dirname(this.path):void 0}set dirname(t){Ei(this.basename,"dirname"),this.path=$e.join(t||"",this.basename)}get extname(){return typeof this.path=="string"?$e.extname(this.path):void 0}set extname(t){if(cs(t,"extname"),Ei(this.dirname,"extname"),t){if(t.codePointAt(0)!==46)throw new Error("`extname` must start with `.`");if(t.includes(".",1))throw new Error("`extname` cannot contain multiple dots")}this.path=$e.join(this.dirname,this.stem+(t||""))}get path(){return this.history[this.history.length-1]}set path(t){Us(t)&&(t=Yp(t)),us(t,"path"),this.path!==t&&this.history.push(t)}get stem(){return typeof this.path=="string"?$e.basename(this.path,this.extname):void 0}set stem(t){us(t,"stem"),cs(t,"stem"),this.path=$e.join(this.dirname||"",t+(this.extname||""))}fail(t,n,s){const r=this.message(t,n,s);throw r.fatal=!0,r}info(t,n,s){const r=this.message(t,n,s);return r.fatal=void 0,r}message(t,n,s){const r=new ke(t,n,s);return this.path&&(r.name=this.path+":"+r.name,r.file=this.path),r.fatal=!1,this.messages.push(r),r}toString(t){return this.value===void 0?"":typeof this.value=="string"?this.value:new TextDecoder(t||void 0).decode(this.value)}}function cs(e,t){if(e&&e.includes($e.sep))throw new Error("`"+t+"` cannot be a path: did not expect `"+$e.sep+"`")}function us(e,t){if(!e)throw new Error("`"+t+"` cannot be empty")}function Ei(e,t){if(!e)throw new Error("Setting `"+t+"` requires `path` to be set too")}function Kp(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const Xp=function(e){const s=this.constructor.prototype,r=s[e],a=function(){return r.apply(a,arguments)};return Object.setPrototypeOf(a,s),a},Qp={}.hasOwnProperty;class yr extends Xp{constructor(){super("copy"),this.Compiler=void 0,this.Parser=void 0,this.attachers=[],this.compiler=void 0,this.freezeIndex=-1,this.frozen=void 0,this.namespace={},this.parser=void 0,this.transformers=Vp()}copy(){const t=new yr;let n=-1;for(;++n<this.attachers.length;){const s=this.attachers[n];t.use(...s)}return t.data(os(!0,{},this.namespace)),t}data(t,n){return typeof t=="string"?arguments.length===2?(ps("data",this.frozen),this.namespace[t]=n,this):Qp.call(this.namespace,t)&&this.namespace[t]||void 0:t?(ps("data",this.frozen),this.namespace=t,this):this.namespace}freeze(){if(this.frozen)return this;const t=this;for(;++this.freezeIndex<this.attachers.length;){const[n,...s]=this.attachers[this.freezeIndex];if(s[0]===!1)continue;s[0]===!0&&(s[0]=void 0);const r=n.call(t,...s);typeof r=="function"&&this.transformers.use(r)}return this.frozen=!0,this.freezeIndex=Number.POSITIVE_INFINITY,this}parse(t){this.freeze();const n=pn(t),s=this.parser||this.Parser;return ds("parse",s),s(String(n),n)}process(t,n){const s=this;return this.freeze(),ds("process",this.parser||this.Parser),hs("process",this.compiler||this.Compiler),n?r(void 0,n):new Promise(r);function r(a,o){const l=pn(t),c=s.parse(l);s.run(c,l,function(u,h,f){if(u||!h||!f)return d(u);const p=h,m=s.stringify(p,f);ef(m)?f.value=m:f.result=m,d(u,f)});function d(u,h){u||!h?o(u):a?a(h):n(void 0,h)}}}processSync(t){let n=!1,s;return this.freeze(),ds("processSync",this.parser||this.Parser),hs("processSync",this.compiler||this.Compiler),this.process(t,r),Di("processSync","process",n),s;function r(a,o){n=!0,ji(a),s=o}}run(t,n,s){Mi(t),this.freeze();const r=this.transformers;return!s&&typeof n=="function"&&(s=n,n=void 0),s?a(void 0,s):new Promise(a);function a(o,l){const c=pn(n);r.run(t,c,d);function d(u,h,f){const p=h||t;u?l(u):o?o(p):s(void 0,p,f)}}}runSync(t,n){let s=!1,r;return this.run(t,n,a),Di("runSync","run",s),r;function a(o,l){ji(o),r=l,s=!0}}stringify(t,n){this.freeze();const s=pn(n),r=this.compiler||this.Compiler;return hs("stringify",r),Mi(t),r(t,s)}use(t,...n){const s=this.attachers,r=this.namespace;if(ps("use",this.frozen),t!=null)if(typeof t=="function")c(t,n);else if(typeof t=="object")Array.isArray(t)?l(t):o(t);else throw new TypeError("Expected usable value, not `"+t+"`");return this;function a(d){if(typeof d=="function")c(d,[]);else if(typeof d=="object")if(Array.isArray(d)){const[u,...h]=d;c(u,h)}else o(d);else throw new TypeError("Expected usable value, not `"+d+"`")}function o(d){if(!("plugins"in d)&&!("settings"in d))throw new Error("Expected usable value but received an empty preset, which is probably a mistake: presets typically come with `plugins` and sometimes with `settings`, but this has neither");l(d.plugins),d.settings&&(r.settings=os(!0,r.settings,d.settings))}function l(d){let u=-1;if(d!=null)if(Array.isArray(d))for(;++u<d.length;){const h=d[u];a(h)}else throw new TypeError("Expected a list of plugins, not `"+d+"`")}function c(d,u){let h=-1,f=-1;for(;++h<s.length;)if(s[h][0]===d){f=h;break}if(f===-1)s.push([d,...u]);else if(u.length>0){let[p,...m]=u;const x=s[f][1];_s(x)&&_s(p)&&(p=os(!0,x,p)),s[f]=[d,p,...m]}}}}const Jp=new yr().freeze();function ds(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `parser`")}function hs(e,t){if(typeof t!="function")throw new TypeError("Cannot `"+e+"` without `compiler`")}function ps(e,t){if(t)throw new Error("Cannot call `"+e+"` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.")}function Mi(e){if(!_s(e)||typeof e.type!="string")throw new TypeError("Expected node, got `"+e+"`")}function Di(e,t,n){if(!n)throw new Error("`"+e+"` finished async. Use `"+t+"` instead")}function pn(e){return Zp(e)?e:new Io(e)}function Zp(e){return!!(e&&typeof e=="object"&&"message"in e&&"messages"in e)}function ef(e){return typeof e=="string"||tf(e)}function tf(e){return!!(e&&typeof e=="object"&&"byteLength"in e&&"byteOffset"in e)}const nf="https://github.com/remarkjs/react-markdown/blob/main/changelog.md",Li=[],zi={allowDangerousHtml:!0},sf=/^(https?|ircs?|mailto|xmpp)$/i,rf=[{from:"astPlugins",id:"remove-buggy-html-in-markdown-parser"},{from:"allowDangerousHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"allowNode",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowElement"},{from:"allowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"allowedElements"},{from:"className",id:"remove-classname"},{from:"disallowedTypes",id:"replace-allownode-allowedtypes-and-disallowedtypes",to:"disallowedElements"},{from:"escapeHtml",id:"remove-buggy-html-in-markdown-parser"},{from:"includeElementIndex",id:"#remove-includeelementindex"},{from:"includeNodeIndex",id:"change-includenodeindex-to-includeelementindex"},{from:"linkTarget",id:"remove-linktarget"},{from:"plugins",id:"change-plugins-to-remarkplugins",to:"remarkPlugins"},{from:"rawSourcePos",id:"#remove-rawsourcepos"},{from:"renderers",id:"change-renderers-to-components",to:"components"},{from:"source",id:"change-source-to-children",to:"children"},{from:"sourcePos",id:"#remove-sourcepos"},{from:"transformImageUri",id:"#add-urltransform",to:"urlTransform"},{from:"transformLinkUri",id:"#add-urltransform",to:"urlTransform"}];function Eo(e){const t=af(e),n=of(e);return lf(t.runSync(t.parse(n),n),e)}function af(e){const t=e.rehypePlugins||Li,n=e.remarkPlugins||Li,s=e.remarkRehypeOptions?{...e.remarkRehypeOptions,...zi}:zi;return Jp().use(Bh).use(n).use(zp,s).use(t)}function of(e){const t=e.children||"",n=new Io;return typeof t=="string"&&(n.value=t),n}function lf(e,t){const n=t.allowedElements,s=t.allowElement,r=t.components,a=t.disallowedElements,o=t.skipHtml,l=t.unwrapDisallowed,c=t.urlTransform||cf;for(const u of rf)Object.hasOwn(t,u.from)&&(""+u.from+(u.to?"use `"+u.to+"` instead":"remove it")+nf+u.id,void 0);return Ao(e,d),bu(e,{Fragment:i.Fragment,components:r,ignoreInvalidStyle:!0,jsx:i.jsx,jsxs:i.jsxs,passKeys:!0,passNode:!0});function d(u,h,f){if(u.type==="raw"&&f&&typeof h=="number")return o?f.children.splice(h,1):f.children[h]={type:"text",value:u.value},h;if(u.type==="element"){let p;for(p in rs)if(Object.hasOwn(rs,p)&&Object.hasOwn(u.properties,p)){const m=u.properties[p],x=rs[p];(x===null||x.includes(u.tagName))&&(u.properties[p]=c(String(m||""),p,u))}}if(u.type==="element"){let p=n?!n.includes(u.tagName):a?a.includes(u.tagName):!1;if(!p&&s&&typeof h=="number"&&(p=!s(u,h,f)),p&&f&&typeof h=="number")return l&&u.children?f.children.splice(h,1,...u.children):f.children.splice(h,1),h}}}function cf(e){const t=e.indexOf(":"),n=e.indexOf("?"),s=e.indexOf("#"),r=e.indexOf("/");return t===-1||r!==-1&&t>r||n!==-1&&t>n||s!==-1&&t>s||sf.test(e.slice(0,t))?e:""}const uf=({message:e,selectionMode:t,isSelected:n,onToggleSelection:s,onReturnToMessage:r})=>{const[a,o]=b.useState(!1),[l,c]=b.useState(!1),[d,u]=b.useState(!1),[h,f]=b.useState(!1),[p,m]=b.useState(null),x=e.isSummary,v=ue(A=>A.deleteMessage),w=ue(A=>A.deleteMessagesFrom),S=A=>new Date(A).toLocaleString("zh-CN",{hour:"2-digit",minute:"2-digit",month:"short",day:"numeric"}),k=async()=>{if(window.confirm(`确定要删除这条${e.role===Pe.USER?"用户":"AI"}消息吗？

删除后无法恢复。`)){o(!0);try{console.log("准备删除消息ID:",e.id),await v(e.id),console.log("消息已删除")}catch(D){console.error("删除消息失败:",D),alert("删除消息失败，请重试")}finally{o(!1)}}},C=async()=>{if(e.role!==Pe.USER){alert("只能从用户消息返回此处");return}if(window.confirm(`确定要返回此处吗？

这将删除此消息及之后的所有消息，让对话回到这个时间点。

此操作不可撤销。`)){c(!0);try{console.log("准备返回消息ID:",e.id);const D=await w(e.id);console.log("返回此处成功，消息内容:",D),r&&r(D)}catch(D){console.error("返回此处失败:",D),alert("返回此处失败，请重试")}finally{c(!1)}}},M=async()=>{if(!(!e.symptomsSummary||Object.keys(e.symptomsSummary).length===0)){if(h){f(!1);return}m(e.symptomsSummary),f(!0)}},j=()=>{const A=["message"];return x?A.push("summary-message"):A.push(e.role),t&&A.push("selection-mode"),n&&A.push("selected"),A.join(" ")};return i.jsxs("div",{className:j(),onMouseEnter:()=>!t&&u(!0),onMouseLeave:()=>!t&&u(!1),onClick:()=>t&&s&&s(e.id),children:[t&&!x&&i.jsx("div",{className:"selection-checkbox",children:i.jsx("input",{type:"checkbox",checked:n||!1,onChange:()=>s&&s(e.id),onClick:A=>A.stopPropagation()})}),i.jsxs("div",{className:"message-header",children:[i.jsx("span",{className:"message-role",children:e.role===Pe.USER?"我":"AI助手"}),i.jsxs("div",{className:"message-header-right",children:[i.jsx("span",{className:"message-time",children:S(e.createdAt)}),d&&!x&&!t&&i.jsxs(i.Fragment,{children:[e.role===Pe.USER&&i.jsx("button",{className:"return-button",onClick:C,disabled:l,title:"返回此处",children:l?i.jsx("span",{className:"spinner"}):i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:i.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"})})}),i.jsx("button",{className:"delete-button",onClick:k,disabled:a,title:"删除消息",children:a?i.jsx("span",{className:"spinner"}):i.jsx("svg",{viewBox:"0 0 24 24",width:"16",height:"16",fill:"currentColor",children:i.jsx("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"})})})]})]})]}),e.reasoningContent&&i.jsxs("div",{className:"reasoning-content alert alert-secondary",children:[i.jsx("div",{className:"reasoning-title",children:i.jsxs("strong",{children:[i.jsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"bi bi-lightbulb me-1",viewBox:"0 0 16 16",children:i.jsx("path",{d:"M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0zm0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13zm8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5zM3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8zm10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0zm-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0zm9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707zM4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708z"})}),"推理过程："]})}),i.jsx("div",{className:"reasoning-text",children:e.reasoningContent})]}),i.jsx("div",{className:"message-content",children:i.jsx(Eo,{children:e.content})}),e.role===Pe.ASSISTANT&&e.symptomsSummary&&Object.keys(e.symptomsSummary).length>0&&i.jsxs("div",{className:"diagnosis-summary-container",children:[h&&p&&i.jsxs("div",{className:"diagnosis-summary-content",children:[i.jsx("h5",{children:"诊察总结"}),i.jsxs("div",{className:"diagnosis-details",children:[p.gender&&i.jsxs("div",{className:"diagnosis-item",children:[i.jsx("strong",{children:"性别："})," ",p.gender]}),p.age&&i.jsxs("div",{className:"diagnosis-item",children:[i.jsx("strong",{children:"年龄："})," ",p.age]}),p.symptoms&&p.symptoms.length>0&&i.jsxs("div",{className:"diagnosis-item",children:[i.jsx("strong",{children:"症状："}),i.jsx("ul",{className:"symptoms-list",children:p.symptoms.map((A,D)=>i.jsx("li",{children:A},D))})]}),p.prescriptions&&p.prescriptions.length>0&&i.jsxs("div",{className:"diagnosis-item",children:[i.jsx("strong",{children:"处方："}),i.jsx("ul",{className:"prescriptions-list",children:p.prescriptions.map((A,D)=>i.jsx("li",{children:A},D))})]}),!p.gender&&!p.age&&!p.symptoms&&!p.prescriptions&&i.jsx("pre",{children:JSON.stringify(p,null,2)})]})]}),i.jsx("button",{className:"diagnosis-summary-button",onClick:M,children:h?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-eye-slash me-1"}),"隐藏诊察总结"]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-stethoscope me-1"}),"查看诊察总结"]})})]}),i.jsx("style",{children:`
        .message {
          display: flex;
          flex-direction: column;
          max-width: 80%;
          margin-bottom: 16px;
          animation: fadeIn 0.3s ease;
          position: relative;
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .message.user {
          align-self: flex-end;
        }
        
        .message.assistant {
          align-self: flex-start;
        }
        
        .message.summary-message {
          max-width: 90%;
          align-self: center;
        }
        
        .message-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 4px;
          font-size: 12px;
        }
        
        .message-header-right {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .message-role {
          font-weight: 500;
          color: #495057;
        }
        
        .message-time {
          color: #6c757d;
        }
        
        .return-button {
          background: none;
          border: none;
          color: #28a745;
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          min-width: 28px;
          min-height: 28px;
        }
        
        .return-button:hover {
          background-color: rgba(40, 167, 69, 0.1);
          color: #1e7e34;
        }
        
        .return-button:active {
          background-color: rgba(40, 167, 69, 0.2);
          transform: scale(0.95);
        }
        
        .return-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .delete-button {
          background: none;
          border: none;
          color: #dc3545;
          cursor: pointer;
          padding: 6px;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
          min-width: 28px;
          min-height: 28px;
        }
        
        .delete-button:hover {
          background-color: rgba(220, 53, 69, 0.1);
          color: #c82333;
        }
        
        .delete-button:active {
          background-color: rgba(220, 53, 69, 0.2);
          transform: scale(0.95);
        }
        
        .delete-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .spinner {
          width: 12px;
          height: 12px;
          border: 2px solid #dc3545;
          border-top: 2px solid transparent;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .message-content {
          padding: 12px 16px;
          border-radius: 12px;
          background: white;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          line-height: 1.5;
        }
        
        .message.user .message-content {
          background: #3182ce;
          color: white;
        }
        
        .message.user .message-content a {
          color: #f0f0f0;
        }
        
        .message.summary-message .message-content {
          background: white;
          border: 1px solid #e9ecef;
          color: #212529;
        }
        
        .reasoning-content {
          margin-top: 8px;
          margin-bottom: 8px;
          padding: 12px;
          background-color: #f0f7ff;
          border: 1px solid #bfdeff;
          border-radius: 6px;
          font-size: 1em;
          white-space: pre-wrap;
          line-height: 1.5;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
        }
        
        .reasoning-title {
          margin-bottom: 6px;
          font-size: 1.1em;
          color: #0057b7;
        }
        
        .reasoning-text {
          color: #1e293b;
          font-size: 1em;
        }
        
        .diagnosis-summary-container {
          margin-top: 8px;
          position: relative;
        }
        
        .diagnosis-summary-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 8px;
          padding: 8px 16px;
          background-color: #f0f9ff;
          color: #0369a1;
          border: 1px solid #bae6fd;
          border-radius: 6px;
          font-size: 0.85em;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .diagnosis-summary-button:hover {
          background-color: #e0f2fe;
          border-color: #7dd3fc;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
          transform: translateY(-1px);
        }
        
        .diagnosis-summary-button:active {
          background-color: #bae6fd;
          transform: translateY(0);
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .diagnosis-summary-button:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .diagnosis-summary-content {
          margin-bottom: 8px;
          padding: 12px;
          background-color: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 0.9em;
          animation: slideDown 0.4s cubic-bezier(0.4, 0, 0.2, 1);
          overflow: hidden;
          transform-origin: top;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
        }
        
        @keyframes slideDown {
          0% {
            opacity: 0;
            max-height: 0;
            transform: translateY(-20px) scaleY(0.8);
          }
          50% {
            opacity: 0.8;
            max-height: 500px;
            transform: translateY(-5px) scaleY(0.95);
          }
          100% {
            opacity: 1;
            max-height: 1000px;
            transform: translateY(0) scaleY(1);
          }
        }
        
        .diagnosis-summary-content h5 {
          margin-top: 0;
          margin-bottom: 16px;
          font-size: 1.1em;
          font-weight: 600;
          color: #1e293b;
          border-bottom: 2px solid #e2e8f0;
          padding-bottom: 12px;
          position: relative;
        }
        
        .diagnosis-summary-content h5::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 40px;
          height: 2px;
          background-color: #0369a1;
        }
        
        .diagnosis-details {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        
        .diagnosis-item {
          margin-bottom: 0;
          padding: 8px 0;
        }
        
        .diagnosis-item strong {
          color: #1e293b;
          font-weight: 600;
        }
        
        .symptoms-list {
          margin: 8px 0 0 0;
          padding-left: 20px;
          list-style: none;
        }
        
        .symptoms-list li {
          margin-bottom: 6px;
          position: relative;
          padding-left: 16px;
        }
        
        .symptoms-list li::before {
          content: '•';
          position: absolute;
          left: 0;
          color: #0369a1;
          font-weight: bold;
        }
        
        .prescriptions-list {
          margin: 8px 0 0 0;
          padding-left: 20px;
          list-style: none;
        }
        
        .prescriptions-list li {
          margin-bottom: 6px;
          position: relative;
          padding-left: 16px;
        }
        
        .prescriptions-list li::before {
          content: '💊';
          position: absolute;
          left: 0;
          font-size: 0.9em;
        }
        
        .raw-summary {
          margin-top: 8px;
          white-space: pre-wrap;
          line-height: 1.4;
          background: #fff;
          padding: 8px;
          border-radius: 4px;
          border: 1px solid #eee;
        }
        
        /* Markdown 样式 */
        .message-content p {
          margin: 0 0 8px 0;
        }
        
        .message-content p:last-child {
          margin-bottom: 0;
        }
        
        .message-content ul, .message-content ol {
          margin: 8px 0;
          padding-left: 20px;
        }
        
        .message-content pre {
          background: #f8f9fa;
          padding: 8px;
          border-radius: 4px;
          overflow-x: auto;
        }
        
        .message-content code {
          background: #f8f9fa;
          padding: 2px 4px;
          border-radius: 4px;
          font-size: 90%;
        }
        
        .message.user .message-content pre,
        .message.user .message-content code {
          background: rgba(255, 255, 255, 0.2);
          color: white;
        }
        
        @media (max-width: 768px) {
          .message {
            max-width: 85%;
          }
          
          .message.summary-message {
            max-width: 95%;
          }
          
          .message-header {
            font-size: 11px;
          }
          
          .delete-button {
            padding: 8px;
            min-width: 32px;
            min-height: 32px;
          }
          
          .reasoning-content {
            padding: 10px;
            font-size: 0.95em;
          }
          
          .reasoning-title {
            font-size: 1.05em;
          }
        }
        
        .message.selection-mode {
          cursor: pointer;
          border: 2px solid transparent;
          border-radius: 8px;
          transition: all 0.2s ease;
        }
        
        .message.selection-mode:hover {
          border-color: rgba(13, 110, 253, 0.25);
          background-color: rgba(13, 110, 253, 0.05);
        }
        
        .message.selection-mode.selected {
          border-color: #0d6efd;
          background-color: rgba(13, 110, 253, 0.1);
        }
        
        .selection-checkbox {
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: 10;
        }
        
        .selection-checkbox input[type="checkbox"] {
          width: 18px;
          height: 18px;
          cursor: pointer;
        }
      `})]})},df=({value:e,onChange:t,onSend:n,disabled:s=!1,placeholder:r="输入您的症状描述...",isStreaming:a=!1,onCancel:o,maxLength:l=2e3})=>{const[c,d]=b.useState(!1),u=b.useRef(null);b.useEffect(()=>{if(u.current){u.current.style.height="auto";const m=u.current.scrollHeight;u.current.style.height=`${Math.min(m,200)}px`}},[e]);const h=b.useCallback(m=>{const x=m.target.value;x.length<=l&&t(x)},[t,l]),f=async m=>{if(m.key==="Enter"&&!m.shiftKey){m.preventDefault();try{a&&o?(console.log("检测到Enter键，尝试取消流"),o(),await new Promise(x=>setTimeout(x,300)),console.log("取消流等待完成")):e.trim()&&!s&&n()}catch(x){console.error("处理键盘事件失败，但不影响继续使用:",x)}}},p=b.useCallback(()=>{o&&o()},[o]);return i.jsxs("div",{className:`message-input-container ${c?"focused":""}`,children:[i.jsxs("div",{className:"textarea-wrapper",children:[i.jsx("textarea",{ref:u,className:"message-textarea",value:e,onChange:h,onKeyDown:f,placeholder:r,disabled:s,onFocus:()=>d(!0),onBlur:()=>d(!1),rows:1}),i.jsxs("div",{className:`char-count ${e.length>l*.9?"warning":""}`,children:[e.length,"/",l]})]}),i.jsx("div",{className:"button-group",children:a?i.jsx("button",{className:"cancel-button",onClick:p,title:"停止生成",children:i.jsx("svg",{viewBox:"0 0 24 24",width:"20",height:"20",fill:"currentColor",children:i.jsx("rect",{x:"6",y:"6",width:"12",height:"12",rx:"2"})})}):i.jsx("button",{className:"send-button",onClick:n,disabled:!e.trim()||s,title:e.trim()?"发送消息 (Enter)":"请输入消息内容",children:s?i.jsxs("span",{className:"sending",children:[i.jsx("span",{className:"dot"}),i.jsx("span",{className:"dot"}),i.jsx("span",{className:"dot"})]}):i.jsxs("svg",{viewBox:"0 0 24 24",width:"20",height:"20",stroke:"currentColor",strokeWidth:"2",fill:"none",strokeLinecap:"round",strokeLinejoin:"round",children:[i.jsx("line",{x1:"22",y1:"2",x2:"11",y2:"13"}),i.jsx("polygon",{points:"22 2 15 22 11 13 2 9 22 2"})]})})}),i.jsx("style",{children:`
        .message-input-container {
          display: flex;
          align-items: flex-end;
          background: white;
          border: 1px solid #dee2e6;
          border-radius: 12px;
          padding: 8px 12px;
          transition: all 0.2s ease;
          gap: 12px;
          width: 100%;
        }
        
        .message-input-container.focused {
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }
        
        .textarea-wrapper {
          flex: 1;
          position: relative;
        }
        
        .message-textarea {
          width: 100%;
          border: none;
          resize: none;
          padding: 8px 0 24px 0;
          font-family: inherit;
          font-size: 14px;
          line-height: 1.5;
          max-height: 200px;
          overflow-y: auto;
          background: transparent;
        }
        
        .message-textarea:focus {
          outline: none;
        }
        
        .message-textarea::placeholder {
          color: #adb5bd;
        }
        
        .message-textarea:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .char-count {
          position: absolute;
          bottom: 4px;
          right: 0;
          font-size: 12px;
          color: #6c757d;
          background: white;
          padding: 2px 4px;
          border-radius: 4px;
        }
        
        .char-count.warning {
          color: #dc3545;
          font-weight: 500;
        }
        
        .button-group {
          display: flex;
          flex-shrink: 0;
        }
        
        .send-button, .cancel-button {
          border: none;
          border-radius: 50%;
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.2s ease;
          flex-shrink: 0;
        }
        
        .send-button {
          background: #3182ce;
          color: white;
        }
        
        .send-button:hover:not(:disabled) {
          background: #2c5aa0;
          transform: scale(1.05);
        }
        
        .send-button:disabled {
          background: #6c757d;
          cursor: not-allowed;
          opacity: 0.6;
          transform: none;
        }
        
        .cancel-button {
          background: #dc3545;
          color: white;
        }
        
        .cancel-button:hover {
          background: #c82333;
          transform: scale(1.05);
        }
        
        .sending {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 4px;
        }
        
        .dot {
          width: 6px;
          height: 6px;
          background: white;
          border-radius: 50%;
          animation: bounce 1.4s infinite ease-in-out both;
        }
        
        .dot:nth-child(1) {
          animation-delay: -0.32s;
        }
        
        .dot:nth-child(2) {
          animation-delay: -0.16s;
        }
        
        @keyframes bounce {
          0%, 80%, 100% {
            transform: scale(0);
          }
          40% {
            transform: scale(1);
          }
        }
        
        @media (max-width: 768px) {
          .message-input-container {
            padding: 6px 10px;
          }
          
          .send-button {
            width: 36px;
            height: 36px;
          }
        }
        
        @media (max-width: 480px) {
          .message-input-container {
            padding: 5px 8px;
            gap: 8px;
          }
          
          .send-button, .cancel-button {
            width: 34px;
            height: 34px;
          }
        }
      `})]})},hf=({sessionId:e,symptomsSummary:t,lastUpdated:n})=>{const[s,r]=b.useState(t||{}),[a,o]=b.useState(!1),[l,c]=b.useState(null),[d,u]=b.useState(!0),[h,f]=b.useState(!1),p=async()=>{if(e){o(!0),c(null);try{const x=await be.getSymptomsSummary(e);x.success&&x.data?(r(x.data),f(!1)):c("获取症状摘要失败")}catch(x){c(x.message||"获取症状摘要失败")}finally{o(!1)}}};b.useEffect(()=>{t&&Object.keys(t).length>0&&r(t)},[t]),b.useEffect(()=>{if(n){f(!0);const x=setTimeout(()=>{f(!1)},5e3);return()=>clearTimeout(x)}},[n]);const m=()=>!s||Object.keys(s).length===0?i.jsxs("div",{className:"empty-summary",children:[i.jsx("i",{className:"fas fa-info-circle"}),i.jsx("p",{children:"暂无症状摘要信息"})]}):i.jsxs("div",{className:"summary-content",children:[s.symptoms&&i.jsxs("div",{className:"summary-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("i",{className:"fas fa-thermometer-half"}),i.jsx("h4",{children:"主要症状"})]}),i.jsx("div",{className:"symptoms-grid",children:Object.entries(s.symptoms).map(([x,v],w)=>{const S=x.replace(/^\d+\.\s*/,"").replace(/^\d+\s*/,"");return i.jsxs("div",{className:"symptom-item",children:[i.jsx("div",{className:"symptom-label",children:S}),i.jsx("div",{className:"symptom-description",children:v})]},x)})})]}),s.possibleDiagnosis&&i.jsxs("div",{className:"summary-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("i",{className:"fas fa-stethoscope"}),i.jsx("h4",{children:"可能的诊断"})]}),i.jsx("div",{className:"diagnosis-content",children:s.possibleDiagnosis.replace(/^\d+\.\s*/g,"").replace(/^\d+\s*/g,"")})]}),s.recommendations&&i.jsxs("div",{className:"summary-section",children:[i.jsxs("div",{className:"section-header",children:[i.jsx("i",{className:"fas fa-lightbulb"}),i.jsx("h4",{children:"建议"})]}),i.jsx("div",{className:"recommendations-content",children:s.recommendations.replace(/^\d+\.\s*/g,"").replace(/^\d+\s*/g,"")})]})]});return i.jsxs("div",{className:`symptoms-summary ${h?"has-update":""}`,children:[i.jsxs("div",{className:"summary-header",onClick:()=>u(!d),children:[i.jsxs("div",{className:"header-content",children:[i.jsx("i",{className:"fas fa-clipboard-list"}),i.jsx("h3",{children:"症状摘要"}),h&&i.jsx("span",{className:"update-badge",children:"新更新"})]}),i.jsx("button",{className:"toggle-button",children:i.jsx("i",{className:`fas fa-chevron-${d?"up":"down"}`})})]}),d&&i.jsx("div",{className:"summary-body",children:a?i.jsxs("div",{className:"summary-loading",children:[i.jsx("i",{className:"fas fa-spinner fa-spin"}),i.jsx("p",{children:"正在加载症状摘要..."})]}):l?i.jsxs("div",{className:"summary-error",children:[i.jsx("i",{className:"fas fa-exclamation-triangle"}),i.jsx("p",{children:l}),i.jsxs("button",{onClick:p,children:[i.jsx("i",{className:"fas fa-redo"}),"重试"]})]}):m()}),i.jsx("style",{children:`
        .symptoms-summary {
          background: white;
          border-radius: 8px;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          margin-bottom: 16px;
          transition: all 0.3s ease;
        }
        
        .symptoms-summary.has-update {
          border-left: 4px solid #4caf50;
          animation: pulse 2s infinite;
        }
        
        @keyframes pulse {
          0% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0.4);
          }
          70% {
            box-shadow: 0 0 0 10px rgba(76, 175, 80, 0);
          }
          100% {
            box-shadow: 0 0 0 0 rgba(76, 175, 80, 0);
          }
        }
        
        .summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 16px 20px;
          cursor: pointer;
          border-bottom: 1px solid #f0f0f0;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border-radius: 8px 8px 0 0;
        }
        
        .header-content {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .header-content i {
          font-size: 18px;
          color: rgba(255, 255, 255, 0.9);
        }
        
        .summary-header h3 {
          margin: 0;
          font-size: 16px;
          font-weight: 600;
          color: white;
        }
        
        .update-badge {
          background: #ff6b6b;
          color: white;
          font-size: 11px;
          padding: 3px 8px;
          border-radius: 12px;
          font-weight: 500;
          animation: pulse 2s infinite;
        }
        
        .toggle-button {
          background: rgba(255, 255, 255, 0.2);
          border: none;
          color: white;
          cursor: pointer;
          font-size: 14px;
          padding: 6px 10px;
          border-radius: 6px;
          transition: all 0.2s ease;
        }
        
        .toggle-button:hover {
          background: rgba(255, 255, 255, 0.3);
        }
        
        .summary-body {
          padding: 16px;
        }
        
        .summary-loading,
        .summary-error,
        .empty-summary {
          text-align: center;
          padding: 32px 24px;
          color: #6c757d;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
        }
        
        .summary-loading i {
          font-size: 24px;
          color: #3182ce;
        }
        
        .summary-loading p {
          margin: 0;
          font-size: 14px;
          color: #495057;
        }
        
        .empty-summary i {
          font-size: 24px;
          color: #adb5bd;
        }
        
        .empty-summary p {
          margin: 0;
          font-size: 14px;
        }
        
        .summary-error {
          color: #dc3545;
        }
        
        .summary-error i {
          font-size: 24px;
          color: #dc3545;
        }
        
        .summary-error p {
          margin: 0 0 12px 0;
          font-size: 14px;
        }
        
        .summary-error button {
          background: #dc3545;
          border: none;
          color: white;
          cursor: pointer;
          padding: 8px 16px;
          border-radius: 6px;
          font-size: 13px;
          display: flex;
          align-items: center;
          gap: 6px;
          transition: all 0.2s ease;
        }
        
        .summary-error button:hover {
          background: #c82333;
        }
        
        .summary-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .summary-section {
          background: #f8f9fa;
          border-radius: 8px;
          padding: 16px;
          border-left: 4px solid #3182ce;
        }
        
        .section-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 12px;
        }
        
        .section-header i {
          color: #3182ce;
          font-size: 16px;
        }
        
        .section-header h4 {
          margin: 0;
          font-size: 14px;
          color: #495057;
          font-weight: 600;
        }
        
        .symptoms-grid {
          display: grid;
          gap: 12px;
        }
        
        .symptom-item {
          background: white;
          border-radius: 6px;
          padding: 12px;
          border: 1px solid #e9ecef;
        }
        
        .symptom-label {
          font-weight: 600;
          color: #495057;
          margin-bottom: 4px;
          font-size: 13px;
        }
        
        .symptom-description {
          color: #6c757d;
          font-size: 14px;
          line-height: 1.4;
        }
        
        .diagnosis-content,
        .recommendations-content {
          background: white;
          border-radius: 6px;
          padding: 12px;
          border: 1px solid #e9ecef;
          color: #495057;
          font-size: 14px;
          line-height: 1.5;
        }
        
        @media (max-width: 768px) {
          .symptoms-summary {
            margin-bottom: 12px;
          }
          
          .summary-header {
            padding: 10px 12px;
          }
          
          .summary-body {
            padding: 12px;
          }
        }
      `})]})},pf=new Map,fs=e=>{if(!e)return{};console.log("开始解析诊察总结内容:",e.substring(0,50)+"...");const t={gender:"",age:"",symptoms:[],prescriptions:[]},n=e.split(`
`);let s="";for(const r of n){const a=r.trim();if(a){if(a.startsWith("性别："))t.gender=a.substring(3).trim(),console.log("提取性别:",t.gender);else if(a.startsWith("年龄："))t.age=a.substring(3).trim(),console.log("提取年龄:",t.age);else if(a==="症状："||a.includes("症状：")){s="symptoms",console.log("进入症状部分");const o=a.split("症状：");o.length>1&&o[1].trim()&&(t.symptoms.push(o[1].trim()),console.log("提取症状:",o[1].trim()))}else if(s==="symptoms")if(/[汤丸散膏丹]$/.test(a))t.prescriptions.push(a),console.log("提取处方:",a);else if(a==="无")t.symptoms.push("无症状"),console.log("提取症状: 无症状");else{const o=a.replace(/^[-•*]\s*/,"").trim();o&&(t.symptoms.push(o),console.log("提取症状:",o))}}}return t.prescriptions.length===0&&delete t.prescriptions,console.log("诊察总结解析完成:",t),t},ff=()=>{const[e,t]=b.useState({isStreaming:!1,isSending:!1,error:null,warning:null,quotaExhausted:!1}),n=b.useRef(null),s=b.useRef(null),r=b.useRef(!1),a=b.useCallback(()=>{t(u=>({...u,error:null}))},[]),o=b.useCallback(()=>{t(u=>({...u,warning:null}))},[]),l=b.useCallback(()=>{t(u=>({...u,quotaExhausted:!1}))},[]),c=b.useCallback(()=>{if(console.log("取消流式输出"),r.current=!0,n.current)try{n.current.abort(),console.log("已中止AbortController")}catch(u){console.log("请求已取消",u)}t(u=>({...u,isStreaming:!1,isSending:!1}))},[]),d=b.useCallback(async(u,h,f="ark")=>{if(e.isStreaming||e.isSending){console.log("已有消息正在发送或接收中，忽略新请求");return}t({isStreaming:!1,isSending:!0,error:null,warning:null,quotaExhausted:!1});try{console.log(`开始发送消息到会话 ${u}，使用模型 ${f}`);const p=Date.now(),m={id:p,sessionId:u,role:Pe.USER,content:h,reasoningContent:"",symptomsSummary:{},promptTokens:0,completionTokens:0,createdAt:new Date().toISOString(),isSummary:!1};ue.getState().addMessage(m),console.log("添加临时用户消息:",p),n.current=new AbortController;const x=await be.sendMessageStream({session_id:u,content:h,model:f});if(x.status===402||x.quotaExhausted){const _=await x.json().catch(()=>({message:"配额耗尽"}));console.error("配额耗尽:",_),console.log("响应状态:",x.status,x.statusText),console.log("配额耗尽标记:",x.quotaExhausted?"是":"否"),t(U=>({...U,error:"您的AI对话次数已用完，请购买更多次数继续使用",isStreaming:!1,isSending:!1,quotaExhausted:!0}));const H={id:Date.now()+2,sessionId:u,role:Pe.SYSTEM,content:"⚠️ 您的AI对话次数已用完，请前往【设置】页面购买更多次数继续使用。",reasoningContent:"",symptomsSummary:{},promptTokens:0,completionTokens:0,createdAt:new Date().toISOString(),isSummary:!1};ue.getState().addMessage(H);return}if(!x.ok)throw new Error(`HTTP error! status: ${x.status}`);if(!x.body)throw new Error("Response body is null");t(_=>({..._,isStreaming:!0,isSending:!1}));const v=x.body.getReader();s.current=v;const w=new TextDecoder;let S="",k="",C="",M=null,j=null,A="",D=!1,V="",E={};const T={id:Date.now()+1,sessionId:u,role:Pe.ASSISTANT,content:"",reasoningContent:"",symptomsSummary:{},promptTokens:0,completionTokens:0,createdAt:new Date().toISOString(),isSummary:!1};ue.getState().addMessage(T);const R=ue.getState().messages.length-1;try{for(;;){if(r.current)throw console.log("检测到请求被中止，停止读取流"),new Error("Request was cancelled");const{value:_,done:H}=await v.read();if(H){console.log("流读取完成");break}const U=w.decode(_,{stream:!0});S+=U;let K;for(;(K=S.indexOf(`
`))!==-1;){const Z=S.slice(0,K).trim();if(S=S.slice(K+1),Z.startsWith("data: ")){const F=Z.slice(6).trim();if(F==="[DONE]"){if(console.log("接收到[DONE]标记，流结束"),t(I=>({...I,isStreaming:!1})),D){console.log("流结束时仍在诊察总结区域内，处理剩余内容");try{E=fs(A),console.log("解析最终诊察总结成功:",E)}catch(I){console.error("解析最终诊察总结失败:",I)}}if(j){const I=ue.getState().messages;let y=!1;for(let L=I.length-1;L>=0;L--)if(I[L].role===Pe.USER&&I[L].id>1e12){const X={...I[L],id:j};ue.getState().updateMessage(L,X),y=!0,console.log("在流结束时更新用户消息ID:",{oldId:I[L].id,newId:j,messageIndex:L});break}y||console.log("流结束时没有找到需要更新ID的用户消息")}else console.warn("流结束时没有获取到用户消息ID");if(M&&(k||C)){const I={...T,id:M,content:V,reasoningContent:C,symptomsSummary:Object.keys(E).length>0?E:{}};ue.getState().updateMessage(R,I),console.log("更新最终消息:",I.id)}return}try{const I=JSON.parse(F);if(I.message_id&&!M&&(M=I.message_id,console.log("获取AI消息ID:",M)),I.user_message_id&&!j&&(j=I.user_message_id,console.log("获取用户消息ID:",j),j)){const y=ue.getState().messages;for(let L=y.length-1;L>=0;L--)if(y[L].role===Pe.USER){const X=y[L].id;pf.set(X,j),console.log("添加ID映射关系:",X,"->",j);const g={...y[L],id:j};ue.getState().updateMessage(L,g),console.log("更新用户消息ID成功:",{oldId:y[L].id,newId:j,content:y[L].content.substring(0,30)+"..."});break}}if(I.warning&&(console.log("收到警告消息:",I.warning),t(y=>({...y,warning:I.warning}))),I.reasoning_content&&I.reasoning_content!=="none"&&I.reasoning_content!=="null"&&I.reasoning_content!=="undefined"&&(C+=I.reasoning_content),I.content){const y=I.content;if(k+=y,console.log("累积响应长度:",k.length),D){console.log("收集诊察总结内容:",y),A+=y;const L=A.indexOf("<<诊察总结>>");if(L!==-1){console.log("在诊察总结内容中检测到结束标记，位置:",L);const X=A.substring(0,L);try{E=fs(X),console.log("解析诊察总结成功:",E)}catch(g){console.error("解析诊察总结失败:",g)}D=!1,console.log("离开诊察总结区域")}}else{const L=k.indexOf("<<诊察总结>>");if(L!==-1){console.log("检测到诊察总结开始标记，位置:",L),V=k.substring(0,L),A=k.substring(L+12),console.log("初始诊察总结内容:",A);const X=A.indexOf("<<诊察总结>>");if(X!==-1){console.log("检测到诊察总结结束标记，位置:",X);const O=A.substring(0,X);try{E=fs(O),console.log("解析诊察总结成功:",E)}catch(se){console.error("解析诊察总结失败:",se)}}else D=!0,console.log("进入诊察总结区域，等待结束标记");const g={...T,id:M||T.id,content:V,reasoningContent:C,symptomsSummary:Object.keys(E).length>0?E:{}};ue.getState().updateMessage(R,g),console.log("更新消息内容，不包含诊察总结:",V.substring(0,50)+"...")}else V+=y}}if((I.reasoning_content||I.content)&&(!D||Object.keys(E).length>0)){const y={...T,id:M||T.id,content:V,reasoningContent:C,symptomsSummary:Object.keys(E).length>0?E:{}};ue.getState().updateMessage(R,y)}if(I.error)throw new Error(I.error);I.done&&(t(y=>({...y,isStreaming:!1})),I.remaining_quota!==void 0&&console.log("剩余额度:",I.remaining_quota))}catch(I){console.error("解析流数据失败:",I)}}}}}finally{s.current=null,n.current=null,r.current=!1,console.log("流处理完成，已清理所有资源")}}catch(p){if(p.message==="Request was cancelled"||p.message==="BodyStreamBuffer was aborted"||p.name==="AbortError"){console.log("用户停止了生成");return}if(console.error("发送消息失败:",p),p.message&&(p.message.includes("HTTP error! status: 402")||p.message.includes("Payment Required")||p.message.includes("配额")||p.message.includes("次数")||p.message.includes("quota")||p.message.includes("用完"))){console.log("检测到配额耗尽错误:",p.message);const x={id:Date.now()+2,sessionId:u,role:Pe.SYSTEM,content:"⚠️ 您的AI对话次数已用完，请前往【设置】页面购买更多次数继续使用。",reasoningContent:"",symptomsSummary:{},promptTokens:0,completionTokens:0,createdAt:new Date().toISOString(),isSummary:!1};ue.getState().addMessage(x),t(v=>({...v,error:"您的AI对话次数已用完，请购买更多次数继续使用",isStreaming:!1,isSending:!1,quotaExhausted:!0}))}else t(x=>({...x,error:p.message||"发送消息失败，请重试",isStreaming:!1,isSending:!1}));ue.getState().messages.length>0&&ue.getState().removeLastMessage()}finally{n.current=null,s.current=null,r.current=!1,t(p=>({...p,isStreaming:!1,isSending:!1}))}},[e.isStreaming,e.isSending]);return{streamingState:e,sendStreamMessage:d,cancelStream:c,clearError:a,clearWarning:o,resetQuotaExhausted:l}},Ri="900px",mf=()=>{const{sessionId:e}=$a(),t=Gt(B=>B.currentSession),n=Gt(B=>B.getCurrentSession),s=ue(B=>B.messages),r=ue(B=>B.totalMessagesCount),a=ue(B=>B.loadMessages),o=ue(B=>B.loadMoreMessages),l=ue(B=>B.hasMore),c=ue(B=>B.isLoading),d=ue(B=>B.isLoadingOldMessages),{streamingState:u,sendStreamMessage:h,cancelStream:f,clearWarning:p,clearError:m}=ff(),[x,v]=b.useState(""),[w,S]=b.useState("ark"),[k,C]=b.useState(null),[M,j]=b.useState(!1),[A,D]=b.useState([{value:"ark",label:"豆包"},{value:"arkseed",label:"豆包新模型"},{value:"arkseedthink",label:"豆包推理"},{value:"deepseekr1",label:"DeepSeek推理"}]),[V,E]=b.useState(!0),[T,R]=b.useState(!1),[_,H]=b.useState(new Set),[U,K]=b.useState(!1),[Z,F]=b.useState(!1),[I,y]=b.useState("normal"),[L,X]=b.useState(!1),[g,O]=b.useState(""),[se,ee]=b.useState(""),we=b.useRef(null),de=b.useRef(0),ae=b.useRef(null);b.useEffect(()=>{(async()=>{try{E(!0);const Q=await be.getAIModelsConfig();D(Q.aiModels||[]),S(Q.userModelPreference||Q.defaultModel||"ark")}catch(Q){console.error("获取AI模型配置失败:",Q)}finally{E(!1)}})()},[]);const ie=200,he=180,Ge=B=>{B>=ie?(y("limit"),F(!0)):B>=he?(y("warning"),F(!0)):(y("normal"),F(!1))};b.useEffect(()=>{if(e){const B=parseInt(e);n(B),a(B),dt(B)}},[e,n,a]),b.useEffect(()=>{Ge(r)},[r]);const dt=async B=>{try{const Q=await be.getSymptomsSummary(B);C(Q)}catch(Q){console.error("获取症状摘要失败:",Q)}};b.useEffect(()=>{if(s.length>de.current){if(d){de.current=s.length;return}const B=setTimeout(()=>{if(d)return;const Q=de.current,z=s.length-Q;if(z>0){const Y=s.slice(0,z),te=s.slice(z);Y.length>0&&Y.every(Be=>te.some(Ce=>Be.id<Ce.id))||Qn()}s.some(Y=>Y.isSummary&&new Date(Y.createdAt)>new Date(Date.now()-6e4))&&dt(parseInt(e))},100);return()=>clearTimeout(B)}de.current=s.length},[s,e,d]),b.useEffect(()=>{u.warning&&console.log("显示警告消息，用户需手动关闭")},[u.warning]);const Qn=()=>{setTimeout(()=>{we.current&&we.current.scrollIntoView({behavior:"smooth"})},100)},zt=async()=>{console.log("准备停止生成");try{if(f(),console.log("前端取消流操作完成"),await new Promise(B=>setTimeout(B,200)),console.log("等待200ms完成"),ae.current)try{console.log("调用后端取消API"),await be.cancelMessage(ae.current),console.log("已停止生成，消息ID:",ae.current)}catch(B){console.log("停止生成后端处理完成，可能有错误但不影响用户使用",B)}finally{ae.current=null}}catch(B){console.error("停止生成时出现错误:",B)}finally{ae.current=null}},on=()=>{R(!T),T&&H(new Set)},ln=B=>{const Q=new Set(_);Q.has(B)?Q.delete(B):Q.add(B),H(Q)},Jn=B=>{v(B)},cn=async()=>{if(!(d||!e))try{await o(parseInt(e))}catch(B){console.error("加载更多消息失败:",B)}},un=async()=>{if(!(_.size===0||!window.confirm(`确定要删除选中的 ${_.size} 条消息吗？

删除后无法恢复。`)))try{const Q=Array.from(_);await be.deleteMultipleMessages(Q);for(const N of Q)ue.getState().deleteMessage(N);H(new Set),R(!1)}catch(Q){console.error("批量删除消息失败:",Q),alert("批量删除消息失败，请重试")}},Zn=async()=>{var B;if(!(!e||L)){console.log("开始创建续对话，调用API路径:",`/ai/api/sessions/${e}/create-continuation-stream/`),X(!0),O("正在准备创建续对话..."),ee("");try{console.log("调用chatService.createContinuationSessionStream...");const Q=await be.createContinuationSessionStream(parseInt(e));if(console.log("API响应状态:",Q.status,Q.statusText),console.log("API响应头:",[...Q.headers.entries()]),!Q.ok)throw new Error(`HTTP error! status: ${Q.status}`);const N=(B=Q.body)==null?void 0:B.getReader();if(!N)throw new Error("无法读取响应流");console.log("成功获取响应流，开始读取数据...");const z=new TextDecoder;let q="",Y=null,te=0;for(;;){const{value:Ne,done:Be}=await N.read();if(Be){console.log("响应流读取完成，总接收数据块:",te);break}te++;const Ce=z.decode(Ne,{stream:!0});console.log(`接收到数据块 #${te}:`,Ce),q+=Ce;let Ke;for(;(Ke=q.indexOf(`
`))!==-1;){const nt=q.slice(0,Ke).trim();if(q=q.slice(Ke+1),nt.startsWith("data: ")){const xe=nt.slice(6).trim();if(console.log("解析到SSE数据行:",xe),xe==="[DONE]"){console.log("收到流结束标记 [DONE]，新会话ID:",Y),Y&&(window.location.href=`/chat/${Y}`);return}try{const re=JSON.parse(xe);if(console.log("流式响应数据解析结果:",re),re.type)switch(re.type){case"start":case"summary_start":case"summary_progress":O(re.message||"正在处理中...");break;case"summary_content":re.content?ee(ye=>ye+re.content):re.full_content&&ee(re.full_content);break;case"complete":if(re.new_session&&re.new_session.id)Y=re.new_session.id;else if(re.redirect_url){const ye=re.redirect_url.match(/\/chat\/(\d+)/);ye&&ye[1]&&(Y=ye[1])}break;case"error":throw new Error(re.message||"创建续对话时发生错误")}else re.progress&&O(re.progress),re.summary&&ee(ye=>ye+re.summary),re.new_session_id&&(Y=re.new_session_id)}catch(re){console.error("解析流数据失败:",re)}}}}}catch(Q){console.error("创建续对话失败:",Q),alert(Q.message||"创建续对话失败，请重试")}finally{X(!1)}}},es=async()=>{if(u.isStreaming){zt();return}if(!e||!x.trim()||u.isSending||u.quotaExhausted)return;if(I==="limit"){alert("当前对话已达到消息上限，请创建续对话继续。");return}const B=x.trim();v("");try{await h(parseInt(e),B,w);const Q=ue.getState().messages;if(Q.length>0){const N=Q[Q.length-1];N.role===Pe.ASSISTANT&&(ae.current=N.id)}}catch(Q){console.error("发送消息失败:",Q)}};if(!t)return i.jsxs("div",{className:"loading-container",children:[i.jsx("div",{className:"loading-spinner"}),i.jsx("div",{children:"加载会话中..."})]});const ts=()=>{console.log("显示创建续对话确认框");const B=window.confirm(`当前对话已达到${ie}条消息上限。创建续对话将基于当前对话的内容创建一个新的对话，您可以在新对话中继续交流。

确定要创建续对话吗？`);console.log("用户选择了:",B?"确认创建续对话":"取消"),B&&(console.log("用户确认创建续对话，调用handleCreateContinuation"),Zn())};return i.jsxs("div",{className:"chat-page",children:[i.jsx(Sc,{session:t,messageCount:r}),i.jsx("div",{className:"chat-container",children:i.jsxs("div",{className:"chat-messages",children:[l&&i.jsx("div",{className:"load-old-messages-container",children:i.jsx("button",{type:"button",className:"load-old-messages-btn",onClick:cn,disabled:c||d,children:c||d?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-spinner fa-spin"}),"载入中..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-chevron-up"}),"载入旧消息"]})})}),[...s].sort((B,Q)=>new Date(B.createdAt).getTime()-new Date(Q.createdAt).getTime()).map(B=>i.jsx(uf,{message:B,selectionMode:T,isSelected:_.has(B.id),onToggleSelection:ln,onReturnToMessage:Jn},B.id)),u.warning&&i.jsxs("div",{className:"warning-banner message-end-warning",children:[i.jsx("div",{className:"warning-content",dangerouslySetInnerHTML:{__html:u.warning}}),i.jsx("button",{className:"warning-close-btn",onClick:p,children:"×"})]}),i.jsx("div",{ref:we})]})}),i.jsx("div",{className:"chat-input-wrapper",children:i.jsxs("div",{className:"chat-input",children:[i.jsxs("div",{className:"toolbar",children:[i.jsxs("div",{className:"toolbar-left",children:[i.jsxs("div",{className:"model-selector",children:[i.jsx("label",{htmlFor:"model-select",children:"AI模型："}),i.jsx("select",{id:"model-select",value:w,onChange:B=>S(B.target.value),disabled:u.isStreaming||u.isSending||V,children:V?i.jsx("option",{value:"",children:"加载中..."}):A.map(B=>i.jsx("option",{value:B.value,children:B.label},B.value))})]}),i.jsx("button",{type:"button",className:`batch-delete-btn ${T?"active":""}`,onClick:on,title:T?"退出选择模式":"批量删除消息",children:i.jsx("i",{className:"fas fa-check-square"})}),T&&_.size>0&&i.jsxs("button",{type:"button",className:"confirm-delete-btn",onClick:un,title:`删除选中的 ${_.size} 条消息`,children:[i.jsx("i",{className:"fas fa-trash"}),i.jsxs("span",{children:["删除(",_.size,")"]})]}),i.jsx("button",{type:"button",className:"symptoms-summary-btn",onClick:()=>j(!M),title:"查看症状总结",children:i.jsx("i",{className:"fas fa-clipboard-list"})})]}),i.jsx("div",{className:"toolbar-right",children:u.isStreaming&&i.jsxs("span",{className:"streaming-indicator",children:[i.jsx("i",{className:"fas fa-circle"}),"AI正在思考中..."]})})]}),Z&&i.jsx("div",{className:`message-limit-warning ${I==="limit"?"limit":"warning"}`,children:i.jsxs("div",{className:"warning-content",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsxs("div",{className:"d-flex align-items-center",children:[i.jsx("div",{children:I==="limit"?`当前对话已达到${ie}条消息上限。`:`当前对话即将达到${ie}条消息上限（还剩${ie-r}条）。`}),i.jsx("button",{className:"btn btn-sm btn-primary ms-2",onClick:ts,disabled:L,children:L?"创建中...":"创建续对话"})]})]})}),u.error&&!u.quotaExhausted&&i.jsx("div",{className:"error-message-warning",children:i.jsxs("div",{className:"warning-content",children:[i.jsx("i",{className:"fas fa-exclamation-circle me-2"}),i.jsxs("div",{className:"d-flex align-items-center",children:[i.jsx("div",{children:u.error}),i.jsx("button",{className:"close-btn ms-2",onClick:m,children:i.jsx("i",{className:"fas fa-times"})})]})]})}),u.quotaExhausted&&i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"quota-exhausted-banner",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),"AI对话次数已用完",i.jsx("a",{href:"/subscription",className:"purchase-btn-small ms-2",children:"购买次数"})]}),i.jsx("div",{className:"quota-exhausted-warning",children:i.jsxs("div",{className:"warning-content",children:[i.jsx("i",{className:"fas fa-exclamation-triangle me-2"}),i.jsxs("div",{className:"d-flex align-items-center",children:[i.jsx("div",{children:"您的AI对话次数已用完，请购买更多次数继续使用。"}),i.jsx("a",{href:"/subscription",className:"purchase-btn",children:"购买次数"})]})]})})]}),L&&i.jsxs("div",{className:"continuation-progress",children:[i.jsxs("div",{className:"progress-header",children:[i.jsx("i",{className:"fas fa-spinner fa-spin me-2"}),g]}),se&&i.jsxs("div",{className:"summary-preview",children:[i.jsx("h6",{children:"正在生成总结："}),i.jsx("div",{className:"summary-content",children:se})]})]}),M&&i.jsxs("div",{className:"symptoms-summary-section",children:[i.jsxs("div",{className:"symptoms-summary-header",children:[i.jsxs("h6",{children:[i.jsx("i",{className:"fas fa-clipboard-list text-info me-2"}),"症状总结"]}),i.jsx("button",{type:"button",className:"btn-close",onClick:()=>j(!1),"aria-label":"关闭"})]}),i.jsx("div",{className:"symptoms-summary-content",children:i.jsx(hf,{sessionId:parseInt(e),symptomsSummary:k||void 0,lastUpdated:t==null?void 0:t.lastSummaryUpdate})})]}),i.jsx("div",{className:"input-container",children:i.jsx(df,{value:x,onChange:v,onSend:es,onCancel:zt,isStreaming:u.isStreaming,disabled:u.isSending||I==="limit"||u.quotaExhausted,placeholder:u.quotaExhausted?"AI对话次数已用完，请购买更多次数":I==="limit"?"对话已达到上限，请创建续对话继续":u.isStreaming?"正在生成中...按Enter停止":"输入您的症状描述...",maxLength:2e3})})]})}),i.jsx("style",{children:`
        .chat-page {
          display: flex;
          flex-direction: column;
          height: 100vh;
          background: #f8f9fa;
        }
        
        .chat-container {
          display: flex;
          flex: 1;
          overflow: hidden;
          max-width: ${Ri};
          margin: 0 auto;
          width: 100%;
        }
        
        .chat-messages {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
          display: flex;
          flex-direction: column;
        }
        
        .load-old-messages-container {
          display: flex;
          justify-content: center;
          margin-bottom: 20px;
        }
        
        .load-old-messages-btn {
          background: #f8f9fa;
          border: 1px solid #dee2e6;
          border-radius: 20px;
          padding: 8px 16px;
          cursor: pointer;
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 14px;
          color: #6c757d;
          transition: all 0.2s ease;
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        
        .load-old-messages-btn:hover:not(:disabled) {
          background: #e9ecef;
          border-color: #adb5bd;
          color: #495057;
        }
        
        .load-old-messages-btn:disabled {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          padding: 40px;
          text-align: center;
        }
        
        .loading-spinner {
          width: 40px;
          height: 40px;
          border: 4px solid #f3f3f3;
          border-top: 4px solid #3182ce;
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .chat-input-wrapper {
          padding: 20px 24px;
          background: white;
          border-top: 1px solid #e9ecef;
          width: 100%;
          display: flex;
          flex-direction: column;
          max-width: ${Ri};
          margin: 0 auto;
        }
        
        .chat-input {
          padding: 0; /* Remove padding from chat-input */
          background: white;
          border-top: 1px solid #e9ecef;
          width: 100%;
          display: flex;
          flex-direction: column;
        }
        
        .toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 12px;
          padding: 8px 0;
        }
        
        .toolbar-left {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        .toolbar-right {
          display: flex;
          align-items: center;
        }
        
        .model-selector {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .model-selector label {
          font-size: 14px;
          font-weight: 500;
          color: #495057;
        }
        
        .model-selector select {
          padding: 6px 12px;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          font-size: 14px;
          background: white;
          cursor: pointer;
        }
        
        .model-selector select:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 2px rgba(49, 130, 206, 0.1);
        }
        

        
        .batch-delete-btn,
        .confirm-delete-btn {
          background: none;
          border: 1px solid #dee2e6;
          border-radius: 4px;
          padding: 6px 12px;
          cursor: pointer;
          transition: all 0.2s ease;
          display: flex;
          align-items: center;
          gap: 4px;
          font-size: 12px;
        }
        
        .batch-delete-btn:hover {
          background-color: #f8f9fa;
          border-color: #adb5bd;
        }
        
        .batch-delete-btn.active {
          background-color: #0d6efd;
          border-color: #0d6efd;
          color: white;
        }
        
        .confirm-delete-btn {
          background-color: #dc3545;
          border-color: #dc3545;
          color: white;
        }
        
        .confirm-delete-btn:hover {
          background-color: #c82333;
          border-color: #bd2130;
        }
        
        /* 症状总结按钮 */
        .symptoms-summary-btn {
          padding: 6px 12px;
          border-radius: 4px;
          border: 1px solid #e2e8f0;
          background: white;
          color: #4a5568;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 16px;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .symptoms-summary-btn:hover {
          background: #f7fafc;
          border-color: #cbd5e0;
        }
        
        /* 警告横幅样式 */
        .warning-banner {
          position: relative;
          margin: 8px 16px 16px;
          padding: 12px 40px 12px 16px;
          background-color: #fffbe6;
          border: 2px solid #ffe58f;  /* 加粗边框 */
          border-radius: 8px;
          color: #ad6800;
          font-size: 14px;
          line-height: 1.5;
          animation: fadeIn 0.3s ease-in-out;
          z-index: 100;  /* 确保显示在其他元素之上 */
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);  /* 添加阴影 */
          max-width: 80%;
          align-self: center;
        }
        
        .message-end-warning {
          margin: 20px auto;
          width: 80%;
          display: flex;
          flex-direction: column;
          border-left: 4px solid #faad14;
        }
        
        .warning-content {
          font-weight: 500;
        }
        
        .warning-content a {
          color: #1890ff;
          text-decoration: underline;
          font-weight: 600;
        }
        
        .warning-content a:hover {
          color: #40a9ff;
        }
        
        .warning-close-btn {
          position: absolute;
          top: 12px;
          right: 12px;
          width: 20px;
          height: 20px;
          border: none;
          background: none;
          font-size: 18px;
          color: #ad6800;
          cursor: pointer;
          padding: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          opacity: 0.6;
        }
        
        .warning-close-btn:hover {
          opacity: 1;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .symptoms-summary-section {
          border: 1px solid #dee2e6;
          border-radius: 8px;
          margin: 12px 0;
          background: white;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          max-height: 400px;
          overflow: hidden;
        }
        
        .symptoms-summary-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #f8f9fa;
          border-bottom: 1px solid #dee2e6;
          border-top-left-radius: 8px;
          border-top-right-radius: 8px;
        }
        
        .symptoms-summary-header h6 {
          margin: 0;
          display: flex;
          align-items: center;
          font-weight: 500;
          color: #495057;
        }
        
        .symptoms-summary-content {
          max-height: 350px;
          overflow-y: auto;
          padding: 0;
        }

        .message-limit-warning {
          margin: 12px 24px;
          padding: 12px 16px;
          border-radius: 8px;
          border-left: 4px solid #ffc107;
          background-color: #fff3cd;
          color: #856404;
          display: flex;
          align-items: center;
        }

        .message-limit-warning.limit {
          border-left-color: #dc3545;
          background-color: #f8d7da;
          color: #721c24;
        }

        .warning-content {
          display: flex;
          align-items: center;
          width: 100%;
          font-size: 14px;
        }

        .continuation-progress {
          margin: 12px 24px;
          padding: 16px;
          border-radius: 8px;
          background-color: #e7f3ff;
          border-left: 4px solid #007bff;
        }

        .progress-header {
          font-weight: 500;
          color: #004085;
          margin-bottom: 8px;
        }

        .summary-preview {
          margin-top: 12px;
        }

        .summary-preview h6 {
          font-size: 14px;
          font-weight: 500;
          color: #004085;
          margin-bottom: 8px;
        }

        .summary-content {
          background-color: white;
          padding: 12px;
          border-radius: 6px;
          border: 1px solid #b3d7ff;
          max-height: 200px;
          overflow-y: auto;
          font-size: 13px;
          line-height: 1.4;
          white-space: pre-wrap;
        }
        
        .streaming-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          color: #28a745;
          font-size: 14px;
        }
        
        .streaming-indicator i {
          animation: pulse 1.5s ease-in-out infinite;
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        
        .input-container {
          display: flex;
          width: 100%;
          padding: 0 12px;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .chat-container,
          .chat-input-wrapper {
            max-width: 100%;  /* 移动端使用全宽 */
          }
          
          .chat-messages {
            padding: 16px;
          }
          
          .toolbar {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .toolbar-left {
            flex-wrap: wrap;
            gap: 8px;
          }
          
          .model-selector {
            min-width: 120px;
          }
          
          .symptoms-summary-section {
            margin: 8px 0;
            max-height: 300px;
          }
          
          .symptoms-summary-content {
            max-height: 250px;
          }
          
          .input-container {
            width: 100%;
            padding: 0 8px;
          }
        }
        
        /* 超小屏幕适配 */
        @media (max-width: 480px) {
          .chat-input {
            padding: 12px;
          }
          
          .input-container {
            width: 100%;
            padding: 0 6px;
          }
          
          .toolbar-left {
            gap: 6px;
          }
          
          .batch-delete-btn,
          .symptoms-summary-btn {
            padding: 4px 8px;
            font-size: 12px;
          }
        }

        /* 配额耗尽警告样式 */
        .quota-exhausted-warning {
          position: relative;
          margin: 0 0 16px;
          padding: 20px;
          background-color: #fff1f0;
          border: 1px solid #ffa39e;
          border-left: 6px solid #ff4d4f;
          border-radius: 8px;
          color: #cf1322;
          font-size: 16px;
          font-weight: 500;
          line-height: 1.6;
          animation: fadeIn 0.3s ease-in-out;
          box-shadow: 0 4px 12px rgba(255, 77, 79, 0.15);
        }
        
        .quota-exhausted-warning .warning-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .quota-exhausted-warning i {
          font-size: 26px;
          color: #ff4d4f;
        }
        
        .quota-exhausted-warning .d-flex {
          display: flex;
          justify-content: space-between;
          align-items: center;
          width: 100%;
        }
        
        .purchase-btn {
          display: inline-block;
          margin-left: 16px;
          padding: 8px 20px;
          background: #ff4d4f;
          color: white;
          border-radius: 4px;
          font-weight: 600;
          font-size: 15px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s;
          box-shadow: 0 2px 6px rgba(255, 77, 79, 0.3);
        }
        
        .purchase-btn:hover {
          background: #ff7875;
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(255, 77, 79, 0.4);
          color: white;
          text-decoration: none;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .quota-exhausted-warning {
            margin: 0 0 12px;
            padding: 16px;
            font-size: 14px;
          }
          
          .quota-exhausted-warning i {
            font-size: 22px;
          }
          
          .purchase-btn {
            padding: 6px 16px;
            font-size: 14px;
          }
        }

        /* 错误消息提示样式 */
        .error-message-warning {
          position: relative;
          margin: 12px 24px;
          padding: 12px 16px;
          border-radius: 8px;
          background-color: #f8d7da;
          border: 1px solid #f5c6cb;
          border-left: 4px solid #dc3545;
          color: #721c24;
          font-size: 14px;
          line-height: 1.6;
          animation: fadeIn 0.3s ease-in-out;
        }

        .error-message-warning .warning-content {
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .error-message-warning i {
          font-size: 22px;
          color: #dc3545;
        }

        .error-message-warning .close-btn {
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-size: 18px;
          color: #dc3545;
          opacity: 0.6;
        }

        .error-message-warning .close-btn:hover {
          opacity: 1;
        }

        /* 固定在顶部的配额耗尽提示条 */
        .quota-exhausted-banner {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background-color: #ff4d4f;
          color: white;
          padding: 10px 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 999; /* 确保在其他元素之上 */
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
          font-size: 16px;
          font-weight: 600;
          text-align: center;
          box-sizing: border-box;
        }

        .quota-exhausted-banner i {
          margin-right: 8px;
          font-size: 20px;
        }

        .quota-exhausted-banner .purchase-btn-small {
          padding: 6px 12px;
          background: white;
          color: #ff4d4f;
          border-radius: 4px;
          font-weight: 600;
          font-size: 14px;
          text-decoration: none;
          white-space: nowrap;
          transition: all 0.3s;
          box-shadow: 0 2px 6px rgba(255, 77, 79, 0.3);
        }

        .quota-exhausted-banner .purchase-btn-small:hover {
          background: #f8f9fa;
          transform: translateY(-1px);
          box-shadow: 0 4px 12px rgba(255, 255, 255, 0.4);
          color: #ff4d4f;
          text-decoration: none;
        }
      `})]})};sr.setOptions({gfm:!0,breaks:!0});const tn=new sr.Renderer;tn.code=(e,t)=>{const n=t&&(hljs!=null&&hljs.getLanguage(t))?t:"plaintext",s=(hljs==null?void 0:hljs.highlight(e,{language:n}).value)||e;return`
    <div class="code-block">
      <div class="code-header">
        <span class="language">${n}</span>
        <button class="copy-btn" onclick="copyCode(this)">复制</button>
      </div>
      <pre><code class="hljs language-${n}">${s}</code></pre>
    </div>
  `};tn.link=(e,t,n)=>{const s=t?` title="${t}"`:"";return`<a href="${e}" target="_blank" rel="noopener noreferrer"${s}>${n}</a>`};tn.table=(e,t)=>`
    <div class="table-wrapper">
      <table class="markdown-table">
        <thead>${e}</thead>
        <tbody>${t}</tbody>
      </table>
    </div>
  `;tn.blockquote=e=>`<blockquote class="markdown-blockquote">${e}</blockquote>`;sr.use({renderer:tn});const gf=e=>{var s;const t=e.closest(".code-block"),n=(s=t==null?void 0:t.querySelector("code"))==null?void 0:s.textContent;n&&navigator.clipboard&&navigator.clipboard.writeText(n).then(()=>{e.textContent="已复制",setTimeout(()=>{e.textContent="复制"},2e3)}).catch(()=>{console.error("复制失败")})};typeof window<"u"&&(window.copyCode=gf);const br=(e,t={})=>{const{showTime:n=!0,showSeconds:s=!1,relative:r=!1}=t,a=new Date(e),o=new Date;if(r){const f=o.getTime()-a.getTime(),p=Math.floor(f/(1e3*60)),m=Math.floor(p/60),x=Math.floor(m/24);if(p<1)return"刚刚";if(p<60)return`${p}分钟前`;if(m<24)return`${m}小时前`;if(x<7)return`${x}天前`}const l=a.toDateString()===o.toDateString(),c=new Date(o);c.setDate(c.getDate()-1);const d=a.toDateString()===c.toDateString(),u=a.getFullYear()===o.getFullYear();let h="";if(l?h="今天":d?h="昨天":u?h=`${a.getMonth()+1}月${a.getDate()}日`:h=`${a.getFullYear()}年${a.getMonth()+1}月${a.getDate()}日`,n){const f=a.getHours().toString().padStart(2,"0"),p=a.getMinutes().toString().padStart(2,"0");let m=`${f}:${p}`;if(s){const x=a.getSeconds().toString().padStart(2,"0");m+=`:${x}`}return`${h} ${m}`}return h},Mo=e=>br(e,{relative:!0}),Do=e=>br(e,{showTime:!1}),xf=e=>br(e,{showTime:!0,showSeconds:!0}),It=({size:e="medium",className:t=""})=>{const n={small:"w-4 h-4",medium:"w-6 h-6",large:"w-8 h-8"};return i.jsxs("div",{className:`loading-spinner ${t}`,children:[i.jsx("div",{className:`spinner-border ${n[e]}`,role:"status","aria-label":"Loading",children:i.jsx("span",{className:"sr-only",children:"加载中..."})}),i.jsx("style",{children:`
        .loading-spinner {
          display: inline-block;
        }
        
        .spinner-border {
          display: inline-block;
          border: 0.2em solid rgba(0, 0, 0, 0.1);
          border-right-color: transparent;
          border-radius: 50%;
          animation: spinner-border 0.75s linear infinite;
        }
        
        .w-4 { width: 1rem; height: 1rem; }
        .w-6 { width: 1.5rem; height: 1.5rem; }
        .w-8 { width: 2rem; height: 2rem; }
        
        @keyframes spinner-border {
          to {
            transform: rotate(360deg);
          }
        }
        
        /* 暗色主题支持 */
        .dark .spinner-border {
          border-color: rgba(255, 255, 255, 0.1);
          border-right-color: transparent;
        }
      `})]})},wr=({currentPage:e,totalPages:t,onPageChange:n})=>{const s=()=>{const r=[];if(t<=5)for(let o=1;o<=t;o++)r.push(o);else if(e<=3){for(let o=1;o<=4;o++)r.push(o);r.push("..."),r.push(t)}else if(e>=t-2){r.push(1),r.push("...");for(let o=t-3;o<=t;o++)r.push(o)}else r.push(1),r.push("..."),r.push(e-1),r.push(e),r.push(e+1),r.push("..."),r.push(t);return r};return i.jsxs("div",{className:"pagination",children:[i.jsx("button",{className:`pagination-btn prev ${e===1?"disabled":""}`,onClick:()=>{console.log("点击上一页按钮"),e>1&&(console.log(`将跳转到第 ${e-1} 页`),n(e-1))},disabled:e===1,children:i.jsx("i",{className:"fas fa-chevron-left"})}),s().map((r,a)=>r==="..."?i.jsx("span",{className:"pagination-ellipsis",children:"..."},`ellipsis-${a}`):i.jsx("button",{className:`pagination-btn ${e===r?"active":""}`,onClick:()=>{typeof r=="number"&&(console.log(`点击页码按钮: ${r}, 页码元素:`,document.activeElement),n(r))},children:r},`page-${r}`)),i.jsx("button",{className:`pagination-btn next ${e===t?"disabled":""}`,onClick:()=>{console.log("点击下一页按钮"),e<t&&(console.log(`将跳转到第 ${e+1} 页`),n(e+1))},disabled:e===t,children:i.jsx("i",{className:"fas fa-chevron-right"})}),i.jsx("style",{children:`
        .pagination {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .pagination-btn {
          min-width: 36px;
          height: 36px;
          display: flex;
          align-items: center;
          justify-content: center;
          border: 1px solid #dee2e6;
          background: white;
          color: #495057;
          border-radius: 4px;
          cursor: pointer;
          transition: all 0.2s;
          font-size: 14px;
          padding: 0 8px;
        }
        
        .pagination-btn:hover:not(.disabled):not(.active) {
          background: #e9ecef;
          border-color: #ced4da;
        }
        
        .pagination-btn.active {
          background: #3182ce;
          color: white;
          border-color: #3182ce;
        }
        
        .pagination-btn.disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        
        .pagination-ellipsis {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 36px;
          height: 36px;
          color: #6c757d;
        }
        
        .prev, .next {
          font-size: 12px;
        }
      `})]})},Lo=({value:e,onChange:t,onSubmit:n,onClear:s,placeholder:r="搜索...",className:a=""})=>i.jsxs("form",{className:`search-form ${a}`,onSubmit:n,children:[i.jsxs("div",{className:"search-input-wrapper",children:[i.jsx("i",{className:"fas fa-search search-icon"}),i.jsx("input",{type:"text",className:"search-input",placeholder:r,value:e,onChange:t}),!!e&&s&&i.jsx("button",{type:"button",className:"clear-search-btn",onClick:s,"aria-label":"清除搜索",children:i.jsx("i",{className:"fas fa-times"})})]}),i.jsxs("button",{type:"submit",className:"search-btn",children:[i.jsx("i",{className:"fas fa-search"}),"搜索"]}),i.jsx("style",{children:`
        .search-form {
          display: flex;
          gap: 12px;
          width: 100%;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .search-input-wrapper {
          position: relative;
          flex: 1;
        }
        
        .search-icon {
          position: absolute;
          left: 16px;
          top: 50%;
          transform: translateY(-50%);
          color: #6c757d;
          font-size: 14px;
          z-index: 1;
        }
        
        .search-input {
          width: 100%;
          padding: 12px 16px 12px 44px;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          font-size: 14px;
          transition: all 0.2s;
          background: white;
        }
        
        .search-input:focus {
          outline: none;
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
        }
        
        .search-input::placeholder {
          color: #a0aec0;
        }
        
        .clear-search-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #6c757d;
          cursor: pointer;
          padding: 4px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          font-size: 12px;
        }
        
        .clear-search-btn:hover {
          background: #e2e8f0;
          color: #4a5568;
        }
        
        .search-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 12px 20px;
          background: #3182ce;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        
        .search-btn:hover {
          background: #2c5282;
          transform: translateY(-1px);
        }
        
        .search-btn:active {
          transform: translateY(0);
        }
        
        /* 暗色主题支持 */
        .dark .search-input {
          background: #2d3748;
          border-color: #4a5568;
          color: #e2e8f0;
        }
        
        .dark .search-input:focus {
          border-color: #3182ce;
          box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.2);
        }
        
        .dark .search-input::placeholder {
          color: #718096;
        }
        
        .dark .search-icon {
          color: #a0aec0;
        }
        
        .dark .clear-search-btn {
          color: #a0aec0;
        }
        
        .dark .clear-search-btn:hover {
          background: #4a5568;
          color: #e2e8f0;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .search-form {
            flex-direction: column;
            gap: 8px;
          }
          
          .search-btn {
            width: 100%;
            justify-content: center;
          }
        }
        
        @media (max-width: 480px) {
          .search-input {
            padding: 10px 16px 10px 40px;
            font-size: 16px; /* 防止iOS缩放 */
          }
          
          .search-icon {
            left: 12px;
            font-size: 16px;
          }
          
          .clear-search-btn {
            right: 8px;
            padding: 6px;
          }
        }
      `})]}),ms=(e,t)=>{if(!t.trim())return e;const n=new RegExp(`(${t.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")})`,"gi");return e.split(n).map((r,a)=>n.test(r)?i.jsx("mark",{style:{backgroundColor:"#ffeb3b",padding:"0 2px"},children:r},a):r)},Vi=(e,t)=>e.length<=t?e:e.slice(0,t)+"...",zo=({results:e,searchQuery:t,onClearSearch:n,onItemClick:s,type:r,clearButtonText:a,resultsTitle:o})=>{const l=r==="sessions"?"返回全部对话":"返回全部分享",c=`搜索结果: ${e.length} 条匹配`;return i.jsxs("div",{className:"search-results",children:[i.jsxs("div",{className:"search-results-header",children:[i.jsx("h2",{children:o||c}),i.jsx("button",{className:"clear-search-btn-text",onClick:n,children:a||l})]}),Array.isArray(e)&&e.map(d=>i.jsxs("div",{className:"search-result-item",onClick:()=>s(d.id),children:[i.jsxs("div",{className:"result-header",children:[i.jsx("h3",{className:"result-title",children:d.title.toLowerCase().includes(t.toLowerCase())?ms(d.title,t):d.title}),i.jsx("span",{className:"result-time",children:r==="sessions"?new Date(d.updatedAt||"").toLocaleDateString():new Date(d.createdAt||"").toLocaleDateString()})]}),d.description&&i.jsx("div",{className:"result-description",children:ms(Vi(d.description,200),t)}),d.messages&&d.messages.length>0&&i.jsx("div",{className:"matched-messages",children:d.messages.slice(0,r==="sessions"?5:2).map((u,h)=>i.jsx("div",{className:"matched-message",children:i.jsx("div",{className:"message-content",children:ms(Vi(u.content,r==="sessions"?200:150),t)})},h))}),r==="shared"&&i.jsxs("div",{className:"result-meta",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-comment"}),d.totalComments||0," 评论"]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-eye"}),d.isPublic?"公开":"私有"]}),i.jsx("div",{className:"meta-item",children:d.isAnonymous?i.jsxs("span",{className:"anonymous",children:[i.jsx("i",{className:"fas fa-user-secret"}),"匿名分享"]}):i.jsxs("span",{className:"named",children:[i.jsx("i",{className:"fas fa-user"}),"实名分享"]})})]}),r==="sessions"&&i.jsxs("div",{className:"result-stats",children:[i.jsxs("span",{className:"message-count",children:[i.jsx("i",{className:"fas fa-comment"}),d.messagesCount||0," 条消息"]}),i.jsxs("span",{className:"token-count",children:[i.jsx("i",{className:"fas fa-coins"}),(d.totalUploadChars||0)+(d.totalDownloadChars||0)," 字符"]})]})]},d.id)),i.jsx("style",{children:`
        .search-results {
          display: flex;
          flex-direction: column;
          gap: 16px;
          width: 100%;
        }
        
        .search-results-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 8px;
        }
        
        .search-results-header h2 {
          font-size: 18px;
          margin: 0;
          color: #2d3748;
        }
        
        .clear-search-btn-text {
          background: none;
          border: none;
          color: #3182ce;
          cursor: pointer;
          font-size: 14px;
          padding: 4px 8px;
          transition: all 0.2s;
        }
        
        .clear-search-btn-text:hover {
          text-decoration: underline;
          color: #2c5282;
        }
        
        .search-result-item {
          background: white;
          border-radius: 8px;
          padding: 16px;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
          cursor: pointer;
          transition: all 0.2s;
          border: 1px solid #e2e8f0;
        }
        
        .search-result-item:hover {
          box-shadow: 0 4px 8px rgba(0,0,0,0.1);
          transform: translateY(-2px);
          border-color: #cbd5e0;
        }
        
        .result-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 8px;
        }
        
        .result-title {
          font-size: 16px;
          font-weight: 600;
          color: #2d3748;
          margin: 0;
          flex: 1;
          line-height: 1.3;
        }
        
        .result-time {
          font-size: 12px;
          color: #6c757d;
          white-space: nowrap;
          margin-left: 12px;
        }
        
        .result-description {
          color: #4a5568;
          font-size: 14px;
          margin-bottom: 8px;
          line-height: 1.5;
        }
        
        .matched-messages {
          margin-top: 8px;
        }
        
        .matched-message {
          background: #f7fafc;
          border-radius: 4px;
          padding: 8px;
          margin-bottom: 4px;
          border-left: 3px solid #3182ce;
        }
        
        .message-content {
          font-size: 13px;
          color: #4a5568;
          line-height: 1.4;
        }
        
        .result-meta {
          display: flex;
          gap: 16px;
          margin-top: 12px;
          font-size: 12px;
          color: #6c757d;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .anonymous {
          color: #6c757d;
        }
        
        .named {
          color: #3182ce;
        }
        
        .result-stats {
          display: flex;
          gap: 16px;
          margin-top: 12px;
          font-size: 12px;
          color: #6c757d;
        }
        
        .message-count,
        .token-count {
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        /* 暗色主题支持 */
        .dark .search-result-item {
          background: #2d3748;
          border-color: #4a5568;
        }
        
        .dark .search-result-item:hover {
          border-color: #718096;
        }
        
        .dark .result-title {
          color: #e2e8f0;
        }
        
        .dark .result-description {
          color: #a0aec0;
        }
        
        .dark .matched-message {
          background: #4a5568;
          border-left-color: #3182ce;
        }
        
        .dark .message-content {
          color: #a0aec0;
        }
        
        .dark .result-meta,
        .dark .result-stats {
          color: #a0aec0;
        }
        
        .dark .named {
          color: #63b3ed;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .search-result-item {
            padding: 12px;
          }
          
          .result-header {
            flex-direction: column;
            align-items: flex-start;
            gap: 4px;
          }
          
          .result-time {
            margin-left: 0;
          }
          
          .result-meta,
          .result-stats {
            flex-direction: column;
            gap: 8px;
          }
        }
      `})]})},yf=({isOpen:e,onClose:t,onCreate:n,isLoading:s=!1})=>{const[r,a]=b.useState(""),[o,l]=b.useState("");b.useEffect(()=>{e&&(a(""),l(""))},[e]);const c=u=>{u.preventDefault();const h=r.trim();if(!h){l("请输入对话标题");return}if(h.length>50){l("标题不能超过50个字符");return}l(""),n(h)},d=u=>{u.key==="Escape"&&t()};return e?i.jsx("div",{className:"modal-overlay",onClick:t,children:i.jsxs("div",{className:"modal-content",onClick:u=>u.stopPropagation(),children:[i.jsxs("div",{className:"modal-header",children:[i.jsx("h2",{children:"新建对话"}),i.jsx("button",{className:"close-btn",onClick:t,disabled:s,children:i.jsx("i",{className:"fas fa-times"})})]}),i.jsxs("form",{onSubmit:c,children:[i.jsx("div",{className:"modal-body",children:i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"session-title",children:"对话标题"}),i.jsx("input",{id:"session-title",type:"text",value:r,onChange:u=>a(u.target.value),onKeyDown:d,placeholder:"请输入对话标题...",disabled:s,autoFocus:!0,maxLength:50}),o&&i.jsx("div",{className:"error-message",children:o}),i.jsxs("div",{className:"char-count",children:[r.length,"/50"]})]})}),i.jsxs("div",{className:"modal-footer",children:[i.jsx("button",{type:"button",className:"cancel-btn",onClick:t,disabled:s,children:"取消"}),i.jsx("button",{type:"submit",className:"create-btn",disabled:s||!r.trim(),children:s?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-spinner fa-spin"}),"创建中..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-plus"}),"创建对话"]})})]})]}),i.jsx("style",{children:`
          .modal-overlay {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: rgba(0, 0, 0, 0.5);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 1000;
            backdrop-filter: blur(4px);
          }
          
          .modal-content {
            background: white;
            border-radius: 16px;
            box-shadow: 0 20px 40px rgba(0, 0, 0, 0.15);
            width: 90%;
            max-width: 480px;
            max-height: 90vh;
            overflow: hidden;
            animation: modalSlideIn 0.3s ease-out;
          }
          
          @keyframes modalSlideIn {
            from {
              opacity: 0;
              transform: translateY(-20px) scale(0.95);
            }
            to {
              opacity: 1;
              transform: translateY(0) scale(1);
            }
          }
          
          .modal-header {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 24px 24px 0 24px;
            border-bottom: 1px solid #e2e8f0;
            padding-bottom: 16px;
          }
          
          .modal-header h2 {
            margin: 0;
            font-size: 20px;
            font-weight: 600;
            color: #1a202c;
          }
          
          .close-btn {
            background: none;
            border: none;
            color: #6c757d;
            cursor: pointer;
            padding: 8px;
            border-radius: 8px;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            justify-content: center;
            width: 32px;
            height: 32px;
          }
          
          .close-btn:hover:not(:disabled) {
            background: #f7fafc;
            color: #4a5568;
          }
          
          .close-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .modal-body {
            padding: 24px;
          }
          
          .form-group {
            display: flex;
            flex-direction: column;
            gap: 8px;
          }
          
          .form-group label {
            font-weight: 500;
            color: #2d3748;
            font-size: 14px;
          }
          
          .form-group input {
            padding: 12px 16px;
            border: 2px solid #e2e8f0;
            border-radius: 8px;
            font-size: 16px;
            transition: all 0.2s;
            background: white;
          }
          
          .form-group input:focus {
            outline: none;
            border-color: #3182ce;
            box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
          }
          
          .form-group input:disabled {
            background: #f7fafc;
            color: #6c757d;
            cursor: not-allowed;
          }
          
          .error-message {
            color: #e53e3e;
            font-size: 12px;
            margin-top: 4px;
          }
          
          .char-count {
            text-align: right;
            font-size: 12px;
            color: #6c757d;
            margin-top: 4px;
          }
          
          .modal-footer {
            display: flex;
            gap: 12px;
            padding: 0 24px 24px 24px;
            justify-content: flex-end;
          }
          
          .cancel-btn {
            padding: 10px 20px;
            border: 1px solid #e2e8f0;
            background: white;
            color: #4a5568;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
          }
          
          .cancel-btn:hover:not(:disabled) {
            background: #f7fafc;
            border-color: #cbd5e0;
          }
          
          .cancel-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
          }
          
          .create-btn {
            padding: 10px 20px;
            border: none;
            background: #3182ce;
            color: white;
            border-radius: 8px;
            font-size: 14px;
            font-weight: 500;
            cursor: pointer;
            transition: all 0.2s;
            display: flex;
            align-items: center;
            gap: 6px;
          }
          
          .create-btn:hover:not(:disabled) {
            background: #2c5282;
            transform: translateY(-1px);
          }
          
          .create-btn:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
          }
          
          /* 暗色主题支持 */
          .dark .modal-content {
            background: #2d3748;
            border: 1px solid #4a5568;
          }
          
          .dark .modal-header h2 {
            color: #e2e8f0;
          }
          
          .dark .form-group label {
            color: #e2e8f0;
          }
          
          .dark .form-group input {
            background: #4a5568;
            border-color: #718096;
            color: #e2e8f0;
          }
          
          .dark .form-group input:focus {
            border-color: #3182ce;
          }
          
          .dark .cancel-btn {
            background: #4a5568;
            border-color: #718096;
            color: #e2e8f0;
          }
          
          .dark .cancel-btn:hover:not(:disabled) {
            background: #718096;
          }
          
          /* 移动端适配 */
          @media (max-width: 768px) {
            .modal-content {
              width: 95%;
              margin: 20px;
            }
            
            .modal-header,
            .modal-body,
            .modal-footer {
              padding-left: 20px;
              padding-right: 20px;
            }
            
            .modal-footer {
              flex-direction: column-reverse;
            }
            
            .cancel-btn,
            .create-btn {
              width: 100%;
              justify-content: center;
            }
          }
        `})]})}):null},bf=()=>{const e=tt(),{sessions:t,isLoading:n,loadSessions:s,createSession:r,deleteSession:a}=Gt(),{aiUsage:o,loadAIUsage:l,isAuthenticated:c,isLoading:d}=ze(),[u,h]=b.useState(""),[f,p]=b.useState([]),[m,x]=b.useState(!1),[v,w]=b.useState(1),[S,k]=b.useState(1),[C]=b.useState(12),M=b.useRef(!1);console.log("SessionListPage: 组件渲染",{sessionsCount:(t==null?void 0:t.length)||0,isLoadingSessions:n,isSearching:m,hasLoadSessions:!!s,aiUsage:o});const[j,A]=b.useState(!1),[D,V]=b.useState([]),[E,T]=b.useState(!1),[R,_]=b.useState(!1);b.useEffect(()=>{if(!t||j)return;const g=Math.ceil(t.length/C);k(Math.max(1,g)),v>g&&g>0&&w(1);const O=(v-1)*C,se=t.slice(O,O+C);p(se)},[t,v,C,j]),b.useEffect(()=>{console.log("SessionListPage: useEffect 执行，开始加载sessions"),s()},[s]),b.useEffect(()=>{console.log("SessionListPage: useEffect 执行，开始加载AI使用情况"),l()},[l]),b.useEffect(()=>{c&&!n&&t&&t.length===0&&o&&!M.current&&(console.log("用户没有会话，尝试初始化"),M.current=!0,(async()=>{try{console.log("调用initializeAIUsage API");const O=await Ae.initializeAIUsage();console.log("initializeAIUsage API响应:",O),O.success&&O.data&&O.data.newSession?(console.log("初始化成功并创建了新会话，跳转到会话页面:",O.data.newSession),e(`/chat/${O.data.newSession.id}`)):(console.log("初始化完成，重新加载会话列表"),s())}catch(O){console.error("初始化出错:",O)}})())},[c,n,t,o,e,s]);const H=async()=>{if(u.trim()){console.log(`开始执行搜索，关键词: ${u}, 页码: ${v}`),A(!0),x(!0);try{console.log(`发送API请求: 搜索"${u}", 页码=${v}, 每页=${C}`);const g=await be.searchMessages(u,v,C);if(g.success&&g.data){console.log("搜索API响应:",g.data),console.log("当前页码:",v);const O=g.data.results||[],se=g.data.count||0,ee=g.data.next,we=g.data.previous;console.log(`后端返回分页信息: 总数=${se}, 下一页=${ee}, 上一页=${we}`);const de=[];O.forEach(ie=>{const he=ie.messages.map(Ge=>({content:Ge.content,index:Ge.id}));de.push({session:{id:ie.session,title:ie.session_title||"未命名会话",updatedAt:ie.updated_at},matchedMessages:he})}),console.log("处理后的结果:",de),V(de);const ae=Math.max(1,Math.ceil(se/C));console.log("总页数:",ae),k(ae),p(de.map(ie=>ie.session)),console.log("搜索完成",{总结果数:se,当前页结果数:O.length,当前页的会话数:de.length,搜索词:u})}else console.error("搜索失败:",g),V([]),p([]),k(1)}catch(g){console.error("搜索出错:",g),V([]),p([]),k(1)}finally{x(!1)}}},U=()=>{T(!0)},K=async g=>{_(!0);try{const O=await r(g);O?(T(!1),e(`/chat/${O.id}`)):console.error("创建会话失败")}catch(O){console.error("创建会话时出错:",O)}finally{_(!1)}},Z=g=>{h(g.target.value)},F=g=>{g.preventDefault(),H()},I=()=>{h(""),A(!1),w(1)},y=async g=>{if(console.log(`切换到第 ${g} 页`),w(g),j&&u){x(!0);try{console.log(`分页请求: 搜索"${u}", 页码=${g}, 每页=${C}`),setTimeout(async()=>{try{const O=await be.searchMessages(u,g,C);if(O.success&&O.data){console.log(`第 ${g} 页搜索结果:`,O.data);const se=O.data.results||[],ee=O.data.count||0,we=O.data.next,de=O.data.previous;console.log(`分页信息: 总数=${ee}, 下一页=${we}, 上一页=${de}`);const ae=[];se.forEach(he=>{const Ge=he.messages.map(dt=>({content:dt.content,index:dt.id}));ae.push({session:{id:he.session,title:he.session_title||"未命名会话",updatedAt:he.updated_at},matchedMessages:Ge})}),console.log(`处理后的结果数量: ${ae.length}`),V(ae);const ie=Math.max(1,Math.ceil(ee/C));console.log(`总页数计算: ${ee} / ${C} = ${ie}`),k(ie),p(ae.map(he=>he.session)),console.log(`第 ${g} 页处理完成`,{总结果数:ee,当前页结果数:se.length,当前页的会话数:ae.length,搜索词:u})}else console.error("分页搜索返回错误:",O)}catch(O){console.error("分页搜索出错:",O)}finally{x(!1)}},100)}catch(O){console.error("分页函数错误:",O),x(!1)}}else{const O=(g-1)*C,se=t.slice(O,O+C);p(se)}},L=g=>{e(`/chat/${g}`)},X=async(g,O)=>{O.stopPropagation(),confirm("确定要删除这个会话吗？")&&await a(g)};return n?i.jsxs("div",{className:"loading-container",children:[i.jsx(It,{size:"large"}),i.jsx("p",{children:"正在加载对话列表..."})]}):i.jsxs("div",{className:"session-list-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsxs("div",{className:"header-content",children:[i.jsx("h1",{children:"我的对话"}),i.jsxs("button",{className:"new-session-btn",onClick:U,children:[i.jsx("i",{className:"fas fa-plus"}),"新建对话"]})]}),i.jsx("div",{className:"search-container",children:i.jsx(Lo,{value:u,onChange:Z,onSubmit:F,onClear:I,placeholder:"搜索对话标题或内容..."})})]}),i.jsxs("div",{className:"sessions-container",children:[m?i.jsxs("div",{className:"loading-container",children:[i.jsx(It,{size:"medium"}),i.jsx("p",{children:"正在搜索中..."})]}):!t||t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("i",{className:"fas fa-comment-dots"}),i.jsx("h3",{children:"还没有任何对话"}),i.jsx("p",{children:'点击"新建对话"开始您的第一次AI诊断'}),i.jsx("button",{className:"start-btn",onClick:U,children:"开始对话"})]}):j&&D.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("i",{className:"fas fa-search"}),i.jsx("h3",{children:"未找到符合条件的对话"}),i.jsxs("p",{children:['没有找到包含 "',u,'" 的对话']}),i.jsx("button",{className:"start-btn",onClick:I,children:"清除搜索"})]}):j?i.jsx(zo,{results:D.map(g=>({id:g.session.id,title:g.session.session_title||g.session.title,updatedAt:g.session.updated_at||g.session.updatedAt,messages:g.matchedMessages.map(O=>({id:O.index,content:O.content,role:"user",created_at:new Date().toISOString()})),messagesCount:g.session.messagesCount,totalUploadChars:g.session.totalUploadChars,totalDownloadChars:g.session.totalDownloadChars})),searchQuery:u,onClearSearch:I,onItemClick:L,type:"sessions"}):i.jsx("div",{className:"sessions-grid",children:f.map(g=>i.jsxs("div",{className:"session-card",onClick:()=>L(g.id),children:[i.jsxs("div",{className:"session-header",children:[i.jsx("h3",{className:"session-title",children:g.title}),i.jsx("div",{className:"session-actions",children:i.jsx("button",{className:"delete-btn",onClick:O=>X(g.id,O),title:"删除会话",children:i.jsx("i",{className:"fas fa-trash"})})})]}),i.jsx("div",{className:"session-meta",children:i.jsx("span",{className:"session-time",children:Mo(g.updatedAt)})}),g.messages&&g.messages.length>0&&i.jsx("div",{className:"session-preview",children:(()=>{const O=g.messages[g.messages.length-1],se=(O==null?void 0:O.content)||"";return i.jsxs(i.Fragment,{children:[se.slice(0,100),se.length>100&&"..."]})})()}),i.jsxs("div",{className:"session-stats",children:[i.jsxs("span",{className:"message-count",children:[i.jsx("i",{className:"fas fa-comment"}),g.messagesCount||0," 条消息"]}),i.jsxs("span",{className:"token-count",children:[i.jsx("i",{className:"fas fa-coins"}),g.totalUploadChars+g.totalDownloadChars," 字符"]})]})]},g.id))}),f.length>0&&S>1&&i.jsx("div",{className:"pagination-container",children:i.jsx(wr,{currentPage:v,totalPages:S,onPageChange:y})})]}),i.jsx(yf,{isOpen:E,onClose:()=>T(!1),onCreate:K,isLoading:R}),i.jsx("style",{children:`
        .session-list-page {
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .page-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 32px;
        }
        
        .header-content {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .page-header h1 {
          font-size: 32px;
          color: #2d3748;
          margin: 0;
        }
        
        .new-session-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: #3182ce;
          color: white;
          border: none;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .new-session-btn:hover {
          background: #2c5282;
          transform: translateY(-1px);
        }
        
        .search-container {
          margin-bottom: 24px;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }
        
        .loading-container p {
          margin-top: 16px;
          color: #6c757d;
        }
        
        .empty-state {
          text-align: center;
          padding: 60px 20px;
        }
        
        .empty-state i {
          font-size: 48px;
          color: #cbd5e0;
          margin-bottom: 16px;
        }
        
        .empty-state h3 {
          font-size: 20px;
          color: #4a5568;
          margin-bottom: 8px;
        }
        
        .empty-state p {
          color: #6c757d;
          margin-bottom: 24px;
        }
        
        .start-btn {
          background: #3182ce;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .start-btn:hover {
          background: #2c5282;
        }
        
        .sessions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }
        
        .session-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .session-card:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
          transform: translateY(-6px);
          border-color: #e2e8f0;
        }
        
        .session-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3182ce, #63b3ed);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .session-card:hover::before {
          opacity: 1;
        }
        
        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .session-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
          flex: 1;
          line-height: 1.4;
          letter-spacing: -0.025em;
        }
        
        .session-actions {
          display: flex;
          gap: 8px;
        }
        
        .delete-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          border: none;
          background: transparent;
          color: #a0aec0;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
          opacity: 0;
          font-size: 12px;
        }
        
        .session-card:hover .delete-btn {
          opacity: 1;
        }
        
        .delete-btn:hover {
          background: #fed7d7;
          color: #e53e3e;
          transform: scale(1.1);
        }
        
        .delete-btn:active {
          transform: scale(0.95);
        }
        
        .session-meta {
          display: flex;
          justify-content: flex-end;
          margin-bottom: 16px;
          font-size: 13px;
        }
        
        .session-time {
          color: #718096;
          font-weight: 500;
        }
        
        .session-preview {
          color: #4a5568;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 20px;
          flex: 1;
          background: linear-gradient(135deg, #f7fafc, #edf2f7);
          padding: 16px;
          border-radius: 12px;
          border-left: 4px solid #3182ce;
          position: relative;
        }
        
        .session-preview::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(49, 130, 206, 0.05), rgba(99, 179, 237, 0.05));
          border-radius: 12px;
          pointer-events: none;
        }
        
        .session-stats {
          display: flex;
          gap: 20px;
          font-size: 13px;
          color: #718096;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
          justify-content: center;
        }
        
        .message-count,
        .token-count {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }
        
        .message-count i,
        .token-count i {
          font-size: 14px;
          opacity: 0.8;
        }
        
        .pagination-container {
          display: flex;
          justify-content: center;
          margin-top: 32px;
        }
        
        /* 暗色主题支持 */
        .dark .session-card {
          background: #2d3748;
          border-color: #4a5568;
        }
        
        .dark .session-card:hover {
          border-color: #718096;
        }
        
        .dark .session-title {
          color: #f7fafc;
        }
        
        .dark .session-time {
          color: #a0aec0;
        }
        
        .dark .session-preview {
          background: linear-gradient(135deg, #4a5568, #2d3748);
          color: #e2e8f0;
        }
        
        .dark .session-stats {
          border-top-color: #4a5568;
          color: #a0aec0;
        }
        
        .dark .delete-btn {
          color: #718096;
        }
        
        .dark .delete-btn:hover {
          background: #742a2a;
          color: #feb2b2;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .session-list-page {
            padding: 16px;
          }
          
          .page-header {
            flex-direction: column;
            gap: 16px;
            align-items: stretch;
          }
          
          .header-content {
            justify-content: space-between;
          }
          
          .sessions-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .session-card {
            padding: 16px;
          }
          
          .session-stats {
            flex-direction: column;
            gap: 8px;
          }
        }
      `})]})},wf=()=>{const e=tt(),[t,n]=b.useState([]),[s,r]=b.useState(!0),[a,o]=b.useState(null),[l,c]=b.useState(1),[d,u]=b.useState(1),[h,f]=b.useState(0),[p]=b.useState(12),[m,x]=b.useState(""),[v,w]=b.useState(""),[S,k]=b.useState([]),[C,M]=b.useState(!1),[j,A]=b.useState(!1),[D,V]=b.useState([]);b.useEffect(()=>{E(1,p,"",v)},[p,v]);const E=async(F=1,I=12,y="",L="")=>{console.log(`加载分享大厅内容，请求页码: ${F}, 当前页码状态: ${l}`),r(!0),o(null);try{const X=await jn.getShareHall(F,I,y,L);if(X.success&&X.data){const g=X.data;n(g.results),f(g.count),u(Math.ceil(g.count/I)),F===1&&!y&&!L&&T(g.results)}else o("加载分享内容失败")}catch{o("网络错误，请重试")}finally{r(!1)}},T=F=>{const I=new Set;F.forEach(y=>{y.tags&&typeof y.tags=="string"&&y.tags.split(",").map(X=>X.trim()).filter(X=>X).forEach(X=>I.add(X))}),k(Array.from(I))},R=F=>{c(F),C&&m?_(F):E(F,p,"",v)},_=async(F=1)=>{if(m.trim()){console.log(`开始执行搜索，关键词: ${m}, 页码: ${F}`),M(!0),A(!0),c(F);try{const I=await be.searchSharedContent(m,F,p);if(I.success&&I.data){console.log("搜索API响应:",I.data);const y=Array.isArray(I.data.results)?I.data.results:[],L=I.data.count||0;console.log(`搜索结果: 总数=${L}, 当前页结果数=${y.length}`),V(y),f(L),u(Math.ceil(L/p)),console.log("搜索完成",{总结果数:L,当前页结果数:y.length,搜索词:m,当前页码:F})}else console.error("搜索失败:",I),V([]),f(0),u(1)}catch(I){console.error("搜索出错:",I),V([]),f(0),u(1)}finally{A(!1)}}},H=F=>{F.preventDefault(),_(1)},U=()=>{console.log("清除搜索，重置页码为1"),x(""),M(!1),V([]),c(1),E(1,p,"",v)},K=F=>{const I=v===F?"":F;w(I),c(1),C&&(M(!1),x(""),V([])),E(1,p,"",I)},Z=F=>{e(`/shared/${F}`)};return s&&!j?i.jsxs("div",{className:"loading-container",children:[i.jsx(It,{size:"large"}),i.jsx("p",{children:"正在加载分享内容..."})]}):a?i.jsxs("div",{className:"error-container",children:[i.jsx("i",{className:"fas fa-exclamation-triangle"}),i.jsx("h3",{children:"加载失败"}),i.jsx("p",{children:a}),i.jsx("button",{onClick:()=>E(1,p,"",""),className:"retry-btn",children:"重试"})]}):i.jsxs("div",{className:"share-hall-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"分享大厅"}),i.jsx("p",{children:"探索其他用户分享的诊断经验和讨论"}),i.jsxs("div",{className:"search-filter-container",children:[i.jsx(Lo,{value:m,onChange:F=>x(F.target.value),onSubmit:H,onClear:U,placeholder:"搜索分享内容..."}),S.length>0&&i.jsxs("div",{className:"tags-container",children:[i.jsx("span",{className:"tags-label",children:"标签:"}),i.jsx("div",{className:"tags-list",children:S.map(F=>i.jsx("span",{className:`tag ${v===F?"active":""}`,onClick:()=>K(F),children:F},F))})]})]})]}),j?i.jsxs("div",{className:"loading-container",children:[i.jsx(It,{size:"medium"}),i.jsx("p",{children:"正在搜索中..."})]}):C&&D.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("i",{className:"fas fa-search"}),i.jsx("h3",{children:"未找到符合条件的分享"}),i.jsxs("p",{children:['没有找到包含 "',m,'" 的分享内容']}),i.jsx("button",{className:"start-btn",onClick:U,children:"清除搜索"})]}):C?i.jsx(zo,{results:D.map(F=>{var I;return{...F,messages:(I=F.messages)==null?void 0:I.map(y=>({id:y.id,content:y.content,role:y.role,created_at:y.createdAt}))}}),searchQuery:m,onClearSearch:U,onItemClick:Z,type:"shared"}):t.length===0?i.jsxs("div",{className:"empty-state",children:[i.jsx("i",{className:"fas fa-share-alt"}),i.jsx("h3",{children:"暂无分享内容"}),i.jsx("p",{children:v?`没有与标签 "${v}" 相关的分享`:m?`没有与 "${m}" 相关的搜索结果`:"还没有用户分享诊断会话"}),(v||m)&&i.jsx("button",{onClick:()=>{w(""),x("")},className:"clear-filter-btn",children:"清除筛选"})]}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"sessions-grid",children:t.map(F=>i.jsxs("div",{className:"session-card",onClick:()=>Z(F.id),children:[i.jsx("div",{className:"card-header",children:i.jsx("h3",{className:"session-title",children:F.title})}),F.description&&i.jsx("div",{className:"session-description",children:F.description}),i.jsx("div",{className:"session-preview",children:F.messages&&F.messages.length>0&&i.jsxs("div",{className:"preview-message",children:[i.jsxs("span",{className:"message-role",children:[F.messages[0].role==="user"?"患者":"AI",":"]}),i.jsxs("span",{className:"message-content",children:[F.messages[0].content.slice(0,120),F.messages[0].content.length>120&&"..."]})]})}),i.jsxs("div",{className:"session-meta",children:[i.jsxs("div",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-comment"}),F.totalComments," 评论"]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-clock"}),Mo(F.createdAt)]}),i.jsxs("div",{className:"meta-item",children:[i.jsx("i",{className:"fas fa-eye"}),F.isPublic?"公开":"私有"]})]}),i.jsxs("div",{className:"session-footer",children:[F.tags&&i.jsx("div",{className:"session-tags",children:(()=>{try{return String(F.tags).split(",").map(L=>L.trim()).filter(L=>L).map((L,X)=>i.jsx("span",{className:"session-tag",children:L},X))}catch(I){return console.warn("Error processing tags:",I),null}})()}),i.jsx("button",{className:"view-btn",children:"查看详情"})]})]},F.id))}),d>1&&i.jsxs("div",{className:"pagination-container",children:[i.jsx(wr,{currentPage:l,totalPages:d,onPageChange:R}),i.jsxs("div",{className:"pagination-info",children:["共 ",h," 条记录，第 ",l,"/",d," 页"]})]})]}),i.jsx("style",{children:`
        .share-hall-page {
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .page-header {
          margin-bottom: 32px;
          text-align: center;
        }
        
        .page-header h1 {
          font-size: 32px;
          color: #2d3748;
          margin-bottom: 8px;
        }
        
        .page-header p {
          color: #6c757d;
          font-size: 16px;
          margin-bottom: 24px;
        }
        
        .search-filter-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          max-width: 800px;
          margin: 0 auto;
        }
        
        .tags-container {
          display: flex;
          align-items: center;
          gap: 12px;
          flex-wrap: wrap;
          padding: 8px 0;
        }
        
        .tags-label {
          font-weight: 500;
          color: #4a5568;
          font-size: 14px;
          white-space: nowrap;
        }
        
        .tags-list {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tag {
          padding: 6px 12px;
          background: #e2e8f0;
          color: #4a5568;
          border: none;
          border-radius: 16px;
          font-size: 12px;
          cursor: pointer;
          transition: all 0.2s;
          font-weight: 500;
        }
        
        .tag:hover {
          background: #cbd5e0;
          transform: translateY(-1px);
        }
        
        .tag.active {
          background: #3182ce;
          color: white;
        }
        
        .loading-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 20px;
          text-align: center;
        }
        
        .loading-container p {
          margin-top: 16px;
          color: #6c757d;
        }
        
        .empty-state {
          text-align: center;
          padding: 60px 20px;
        }
        
        .empty-state i {
          font-size: 48px;
          color: #cbd5e0;
          margin-bottom: 16px;
        }
        
        .empty-state h3 {
          font-size: 20px;
          color: #4a5568;
          margin-bottom: 8px;
        }
        
        .empty-state p {
          color: #6c757d;
          margin-bottom: 24px;
        }
        
        .clear-filter-btn {
          background: #3182ce;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 6px;
          cursor: pointer;
          font-size: 14px;
        }
        
        .clear-filter-btn:hover {
          background: #2c5282;
        }
        
        .sessions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
          gap: 24px;
          margin-bottom: 32px;
        }
        
        .session-card {
          background: white;
          border-radius: 16px;
          padding: 24px;
          box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          cursor: pointer;
          transition: all 0.3s ease;
          border: 1px solid #f1f5f9;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
          overflow: hidden;
        }
        
        .session-card:hover {
          box-shadow: 0 12px 32px rgba(0,0,0,0.12);
          transform: translateY(-6px);
          border-color: #e2e8f0;
        }
        
        .session-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: linear-gradient(90deg, #3182ce, #63b3ed);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        .session-card:hover::before {
          opacity: 1;
        }
        
        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .session-title {
          font-size: 20px;
          font-weight: 700;
          color: #1a202c;
          margin: 0;
          flex: 1;
          line-height: 1.4;
          letter-spacing: -0.025em;
        }
        
        .session-description {
          color: #4a5568;
          font-size: 15px;
          line-height: 1.6;
          margin-bottom: 16px;
          font-weight: 400;
        }
        
        .session-preview {
          margin-bottom: 20px;
          flex: 1;
        }
        
        .preview-message {
          background: linear-gradient(135deg, #f7fafc, #edf2f7);
          padding: 16px;
          border-radius: 12px;
          border-left: 4px solid #3182ce;
          position: relative;
        }
        
        .preview-message::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(49, 130, 206, 0.05), rgba(99, 179, 237, 0.05));
          border-radius: 12px;
          pointer-events: none;
        }
        
        .message-role {
          font-weight: 700;
          color: #2d3748;
          margin-right: 8px;
          font-size: 13px;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        .message-content {
          color: #4a5568;
          font-size: 14px;
          line-height: 1.5;
          position: relative;
          z-index: 1;
        }
        
        .session-meta {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
          font-size: 13px;
          color: #718096;
          flex-wrap: wrap;
        }
        
        .meta-item {
          display: flex;
          align-items: center;
          gap: 6px;
          font-weight: 500;
        }
        
        .meta-item i {
          font-size: 14px;
          opacity: 0.8;
        }
        
        .session-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: auto;
          padding-top: 20px;
          border-top: 1px solid #e2e8f0;
        }
        
        .session-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 6px;
          flex: 1;
          margin-right: 16px;
        }
        
        .session-tag {
          padding: 3px 8px;
          background: #f7fafc;
          color: #4a5568;
          border-radius: 8px;
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.2px;
          border: 1px solid #e2e8f0;
          transition: all 0.2s ease;
          white-space: nowrap;
        }
        
        .session-tag:hover {
          background: #edf2f7;
          color: #2d3748;
          transform: translateY(-1px);
        }
        
        .view-btn {
          background: #f7fafc;
          color: #4a5568;
          border: 1px solid #e2e8f0;
          padding: 8px 16px;
          border-radius: 8px;
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
          white-space: nowrap;
          min-width: 80px;
        }
        
        .view-btn:hover {
          background: #edf2f7;
          color: #2d3748;
          border-color: #cbd5e0;
          transform: translateY(-1px);
        }
        
        .view-btn:active {
          transform: translateY(0);
        }
        
        .pagination-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 16px;
          margin-top: 32px;
        }
        
        .pagination-info {
          color: #6c757d;
          font-size: 14px;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .share-hall-page {
            padding: 16px;
          }
          
          .sessions-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
          
          .session-card {
            padding: 16px;
          }
          
          .session-meta {
            flex-direction: column;
            gap: 8px;
          }
          
          .session-footer {
            flex-direction: column;
            gap: 12px;
            align-items: stretch;
          }
          
          .session-tags {
            margin-right: 0;
            margin-bottom: 8px;
            justify-content: center;
          }
          
          .view-btn {
            width: 100%;
            padding: 10px;
            font-size: 14px;
          }
        }
      `})]})},vf=({size:e="md"})=>{const t={sm:"w-4 h-4",md:"w-6 h-6",lg:"w-8 h-8"}[e];return i.jsx("div",{className:`spinner ${t}`,children:i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .spinner {
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 3px solid #3182ce;
          animation: spin 1s linear infinite;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}})})},kf=({icon:e,title:t,description:n})=>i.jsxs("div",{className:"empty-state",children:[i.jsx("i",{className:e}),i.jsx("h3",{children:t}),i.jsx("p",{children:n}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .empty-state {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          text-align: center;
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
        }
        
        .empty-state i {
          font-size: 48px;
          color: #a0aec0;
          margin-bottom: 16px;
        }
        
        .empty-state h3 {
          margin: 0 0 8px 0;
          color: #2d3748;
          font-size: 20px;
          font-weight: 600;
        }
        
        .empty-state p {
          color: #718096;
          margin: 0;
        }
      `}})]}),Sf=()=>{const e=tt(),[t,n]=b.useState(!0),[s,r]=b.useState(null),[a,o]=b.useState([]),[l,c]=b.useState(0),[d,u]=b.useState(1),[h]=b.useState(10),f=async(w=1)=>{try{n(!0),r(null);const S=await jn.getMySharedSessions(w,h);S.success&&S.data?(o(S.data.results),c(S.data.count)):r(S.error||"加载分享会话失败")}catch(S){r("加载分享会话时发生错误"),console.error("Failed to load shared sessions:",S)}finally{n(!1)}},p=w=>{u(w),f(w)},m=w=>{e(`/share/view/${w}`)},x=w=>{switch(w){case"approved":return"status-badge approved";case"pending":return"status-badge pending";case"rejected":return"status-badge rejected";default:return"status-badge"}},v=w=>{switch(w){case"approved":return"已审核";case"pending":return"待审核";case"rejected":return"已拒绝";default:return"未知状态"}};return b.useEffect(()=>{f()},[]),i.jsxs("div",{className:"shared-sessions-page",children:[i.jsxs("div",{className:"page-header",children:[i.jsx("h1",{children:"我的分享"}),i.jsx("p",{children:"管理您分享的诊断会话"})]}),t?i.jsxs("div",{className:"loading-container",children:[i.jsx(vf,{size:"lg"}),i.jsx("p",{children:"加载中..."})]}):s?i.jsxs("div",{className:"error-container",children:[i.jsx("i",{className:"fas fa-exclamation-circle"}),i.jsx("p",{children:s}),i.jsx("button",{onClick:()=>f(),className:"retry-button",children:"重试"})]}):a.length===0?i.jsx(kf,{icon:"fas fa-share-alt",title:"暂无分享会话",description:"您还没有分享任何诊断会话"}):i.jsxs(i.Fragment,{children:[i.jsx("div",{className:"shared-sessions-list",children:a.map(w=>i.jsxs("div",{className:"shared-session-card",onClick:()=>m(w.id),children:[i.jsxs("div",{className:"session-header",children:[i.jsx("h3",{className:"session-title",children:w.title}),i.jsx("span",{className:x(w.status),children:v(w.status)})]}),i.jsx("p",{className:"session-description",children:w.description||"无描述"}),i.jsxs("div",{className:"session-stats",children:[i.jsxs("span",{className:"message-count",children:[i.jsx("i",{className:"fas fa-comment"}),w.messagesCount||0," 条消息"]}),i.jsxs("span",{className:"comment-count",children:[i.jsx("i",{className:"fas fa-comments"}),w.totalComments||0," 条评论"]})]}),i.jsxs("div",{className:"session-footer",children:[i.jsxs("span",{className:"session-date",children:[i.jsx("i",{className:"fas fa-calendar-alt"}),Do(w.createdAt)]}),w.isAnonymous&&i.jsxs("span",{className:"anonymous-badge",children:[i.jsx("i",{className:"fas fa-user-secret"})," 匿名分享"]})]})]},w.id))}),l>h&&i.jsx("div",{className:"pagination-container",children:i.jsx(wr,{currentPage:d,totalPages:Math.ceil(l/h),onPageChange:p})})]}),i.jsx("style",{children:`
        .shared-sessions-page {
          padding: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }
        
        .page-header {
          text-align: center;
          margin-bottom: 32px;
        }
        
        .page-header h1 {
          margin: 0 0 8px 0;
          color: #2d3748;
          font-size: 28px;
          font-weight: 600;
        }
        
        .page-header p {
          color: #6c757d;
          font-size: 16px;
          margin: 0;
        }
        
        .loading-container,
        .error-container {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          text-align: center;
        }
        
        .error-container i {
          font-size: 48px;
          color: #e53e3e;
          margin-bottom: 16px;
        }
        
        .retry-button {
          margin-top: 16px;
          padding: 8px 16px;
          background-color: #3182ce;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .retry-button:hover {
          background-color: #2b6cb0;
        }
        
        .shared-sessions-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 24px;
        }
        
        .shared-session-card {
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 20px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .shared-session-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        
        .session-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 12px;
        }
        
        .session-title {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #2d3748;
          flex: 1;
        }
        
        .status-badge {
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 12px;
          font-weight: 500;
        }
        
        .status-badge.approved {
          background-color: #c6f6d5;
          color: #22543d;
        }
        
        .status-badge.pending {
          background-color: #feebc8;
          color: #7b341e;
        }
        
        .status-badge.rejected {
          background-color: #fed7d7;
          color: #822727;
        }
        
        .session-description {
          color: #4a5568;
          margin: 0 0 16px 0;
          font-size: 14px;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        
        .session-stats {
          display: flex;
          gap: 16px;
          margin-bottom: 16px;
          font-size: 14px;
          color: #718096;
        }
        
        .session-stats i {
          margin-right: 6px;
        }
        
        .session-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          color: #718096;
        }
        
        .session-date i,
        .anonymous-badge i {
          margin-right: 6px;
        }
        
        .anonymous-badge {
          background-color: #e2e8f0;
          padding: 4px 8px;
          border-radius: 12px;
          font-size: 12px;
        }
        
        .pagination-container {
          margin-top: 32px;
          display: flex;
          justify-content: center;
        }
      `})]})},jf=({message:e})=>{const t=e.role===Pe.USER;return i.jsxs("div",{className:`message-item ${t?"user-message":"ai-message"}`,children:[!t&&i.jsx("div",{className:"message-avatar",children:i.jsx("i",{className:"fas fa-robot"})}),i.jsxs("div",{className:"message-content",children:[i.jsx("div",{className:"message-text",children:i.jsx(Eo,{children:e.content})}),i.jsx("div",{className:"message-time",children:xf(e.createdAt)})]}),t&&i.jsx("div",{className:"message-avatar",children:i.jsx("i",{className:"fas fa-user"})})]})},Nf=()=>{const{sharedId:e}=$a(),t=tt(),[n,s]=b.useState(!0),[r,a]=b.useState(null),[o,l]=b.useState(null),[c,d]=b.useState([]),[u,h]=b.useState(!1),[f,p]=b.useState(!1),[m,x]=b.useState(!1),v=b.useRef(null),w=b.useRef(null),S=b.useRef(null);b.useEffect(()=>{(async()=>{if(e)try{s(!0),a(null);const T=await jn.viewSharedSession(parseInt(e));if(T.success&&T.data){const R=T.data;typeof T.data.tags=="string"&&T.data.tags?R.tags=T.data.tags.split(",").map(_=>_.trim()):T.data.tags||(R.tags=[]),l(R),T.data&&T.data.messages&&Array.isArray(T.data.messages)&&d(T.data.messages)}else a(T.error||"获取分享会话失败")}catch(T){console.error("获取分享会话详情失败:",T),a("获取分享会话详情时发生错误")}finally{s(!1)}})()},[e]);const k=()=>{v.current&&v.current.scrollIntoView({behavior:"smooth"})},C=()=>{S.current&&S.current.scrollIntoView({behavior:"smooth"})};b.useEffect(()=>{const E=()=>{if(!w.current)return;const R=w.current,_=R.scrollTop,H=R.scrollHeight,U=R.clientHeight,K=H-_-U;x(_>200),p(K>200)},T=w.current;return T&&(T.addEventListener("scroll",E),E()),()=>{T&&T.removeEventListener("scroll",E)}},[c]);const M=()=>{t("/share")},j=async()=>{if(!(!o||!e))try{const E=await jn.toggleLike(parseInt(e));E.success&&E.data&&l(T=>!T||!E.data?T:{...T,isLiked:E.data.isLiked,likeCount:E.data.likeCount})}catch(E){console.error("点赞操作失败:",E)}},A=()=>{h(E=>!E)},D=E=>{switch(E){case"approved":return"status-badge approved";case"pending":return"status-badge pending";case"rejected":return"status-badge rejected";default:return"status-badge"}},V=E=>{switch(E){case"approved":return"已审核";case"pending":return"待审核";case"rejected":return"已拒绝";default:return"未知状态"}};return i.jsxs("div",{className:"view-shared-session-page",children:[i.jsxs("div",{className:"back-button",onClick:M,children:[i.jsx("i",{className:"fas fa-arrow-left"})," 返回分享列表"]}),n?i.jsxs("div",{className:"loading-container",children:[i.jsx("div",{className:"spinner"}),i.jsx("p",{children:"加载中..."})]}):r?i.jsxs("div",{className:"error-container",children:[i.jsx("i",{className:"fas fa-exclamation-circle"}),i.jsx("p",{children:r}),i.jsx("button",{onClick:()=>window.location.reload(),className:"retry-button",children:"重试"})]}):o?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"session-header",children:[i.jsxs("div",{className:"session-title-container",children:[i.jsx("h1",{className:"session-title",children:o.title}),i.jsx("span",{className:D(o.status),children:V(o.status)})]}),i.jsxs("div",{className:"session-meta",children:[i.jsx("div",{className:"session-author",children:o.isAnonymous?i.jsxs("span",{children:[i.jsx("i",{className:"fas fa-user-secret"})," 匿名用户"]}):i.jsxs("span",{children:[i.jsx("i",{className:"fas fa-user"})," ",o.username||"用户"]})}),i.jsxs("div",{className:"session-date",children:[i.jsx("i",{className:"fas fa-calendar-alt"})," ",Do(o.createdAt)]}),i.jsxs("div",{className:"session-stats",children:[i.jsxs("span",{className:"like-count",onClick:j,children:[i.jsx("i",{className:`${o.isLiked?"fas":"far"} fa-thumbs-up`}),o.likeCount||0]}),i.jsxs("span",{className:"comment-count",onClick:A,children:[i.jsx("i",{className:"fas fa-comments"}),o.totalComments||0]}),i.jsxs("span",{className:"view-count",children:[i.jsx("i",{className:"fas fa-eye"}),o.viewCount||0]})]})]}),o.description&&i.jsx("div",{className:"session-description",children:o.description}),o.tags&&o.tags.length>0&&i.jsx("div",{className:"session-tags",children:o.tags.map((E,T)=>i.jsx("span",{className:"tag",children:E},T))})]}),i.jsxs("div",{className:"session-messages",children:[i.jsx("h2",{className:"messages-title",children:"会话内容"}),c.length===0?i.jsxs("div",{className:"no-messages",children:[i.jsx("i",{className:"fas fa-comment-slash"}),i.jsx("p",{children:"暂无会话内容"})]}):i.jsxs("div",{className:"messages-container",ref:w,children:[i.jsx("div",{ref:S}),c.map(E=>i.jsx(jf,{message:E},E.id)),i.jsx("div",{ref:v})]})]}),f&&c.length>5&&i.jsx("button",{className:"floating-scroll-btn bottom-btn",onClick:k,"aria-label":"滚动到底部",children:i.jsx("i",{className:"fas fa-arrow-down"})}),m&&c.length>5&&i.jsx("button",{className:"floating-scroll-btn top-btn",onClick:C,"aria-label":"滚动到顶部",children:i.jsx("i",{className:"fas fa-arrow-up"})}),u&&i.jsxs("div",{className:"comments-section",children:[i.jsx("h2",{className:"comments-title",children:"评论区"}),i.jsxs("div",{className:"comments-placeholder",children:[i.jsx("i",{className:"fas fa-comments"}),i.jsx("p",{children:"评论功能开发中，敬请期待"})]})]})]}):i.jsxs("div",{className:"not-found",children:[i.jsx("i",{className:"fas fa-search"}),i.jsx("h3",{children:"未找到分享会话"}),i.jsx("p",{children:"该分享会话可能已被删除或您没有权限查看"}),i.jsx("button",{onClick:M,className:"back-to-list-button",children:"返回分享列表"})]}),i.jsx("style",{dangerouslySetInnerHTML:{__html:`
        .view-shared-session-page {
          padding: 24px;
          max-width: 1000px;
          margin: 0 auto;
        }
        
        .back-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 8px 16px;
          background: #f8f9fa;
          border-radius: 4px;
          color: #495057;
          font-size: 14px;
          cursor: pointer;
          margin-bottom: 24px;
          transition: all 0.2s;
        }
        
        .back-button:hover {
          background: #e9ecef;
        }
        
        .loading-container,
        .error-container,
        .not-found {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 60px 0;
          text-align: center;
        }
        
        .spinner {
          width: 40px;
          height: 40px;
          border: 3px solid rgba(0, 0, 0, 0.1);
          border-radius: 50%;
          border-top: 3px solid #3182ce;
          animation: spin 1s linear infinite;
          margin-bottom: 16px;
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        .error-container i,
        .not-found i {
          font-size: 48px;
          color: #e53e3e;
          margin-bottom: 16px;
        }
        
        .retry-button,
        .back-to-list-button {
          margin-top: 16px;
          padding: 8px 16px;
          background-color: #3182ce;
          color: white;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-weight: 500;
        }
        
        .retry-button:hover,
        .back-to-list-button:hover {
          background-color: #2b6cb0;
        }
        
        .session-header {
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 24px;
          margin-bottom: 24px;
        }
        
        .session-title-container {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 16px;
        }
        
        .session-title {
          margin: 0;
          font-size: 24px;
          font-weight: 600;
          color: #2d3748;
          flex: 1;
        }
        
        .status-badge {
          font-size: 12px;
          padding: 4px 8px;
          border-radius: 12px;
          font-weight: 500;
        }
        
        .status-badge.approved {
          background-color: #c6f6d5;
          color: #22543d;
        }
        
        .status-badge.pending {
          background-color: #feebc8;
          color: #7b341e;
        }
        
        .status-badge.rejected {
          background-color: #fed7d7;
          color: #822727;
        }
        
        .session-meta {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
          font-size: 14px;
          color: #718096;
        }
        
        .session-author i,
        .session-date i {
          margin-right: 6px;
        }
        
        .session-stats {
          display: flex;
          gap: 16px;
        }
        
        .like-count,
        .comment-count {
          cursor: pointer;
        }
        
        .like-count i,
        .comment-count i,
        .view-count i {
          margin-right: 6px;
        }
        
        .session-description {
          padding: 16px;
          background: #f8f9fa;
          border-radius: 4px;
          margin-bottom: 16px;
          color: #4a5568;
          line-height: 1.6;
        }
        
        .session-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }
        
        .tag {
          padding: 4px 8px;
          background: #e2e8f0;
          border-radius: 4px;
          font-size: 12px;
          color: #4a5568;
        }
        
        .session-messages {
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 24px;
          margin-bottom: 24px;
        }
        
        .messages-title,
        .comments-title {
          margin: 0 0 16px 0;
          font-size: 18px;
          font-weight: 600;
          color: #2d3748;
          padding-bottom: 12px;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .no-messages {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
          text-align: center;
          color: #a0aec0;
        }
        
        .no-messages i {
          font-size: 36px;
          margin-bottom: 12px;
        }
        
        .messages-container {
          max-height: 600px;
          overflow-y: auto;
          padding: 20px;
          border: 1px solid #eaeaea;
          border-radius: 12px;
          background-color: #fff;
          display: flex;
          flex-direction: column;
          margin-bottom: 20px;
          gap: 16px;
        }
        
        /* 消息容器宽度控制 */
        @media (min-width: 768px) {
          .messages-container {
            max-width: 850px;
            margin: 0 auto;
          }
          
          .message-content {
            max-width: 60%;
          }
        }
        
        /* 会话内容标题样式 */
        .messages-title {
          font-size: 18px;
          font-weight: 600;
          color: #333;
          margin-bottom: 16px;
          padding-bottom: 8px;
          border-bottom: 1px solid #eaeaea;
        }
        
        /* 确保内容区域有足够的填充，避免气泡贴边 */
        .session-messages {
          margin-bottom: 24px;
        }
        
        .message-item {
          display: flex;
          gap: 10px;
          margin-bottom: 16px;
          width: 100%;
        }
        
        .message-item:last-child {
          margin-bottom: 0;
        }
        
        /* 用户消息靠右显示 */
        .user-message {
          flex-direction: row-reverse;
          justify-content: flex-start;
        }
        
        /* AI消息靠左显示 */
        .ai-message {
          flex-direction: row;
          justify-content: flex-start;
        }
        
        .message-avatar {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: 4px;
        }
        
        .user-message .message-avatar {
          background: #e1effe;
          color: #3182ce;
        }
        
        .ai-message .message-avatar {
          background: #e6fffa;
          color: #319795;
        }
        
        .message-content {
          flex: 0 1 auto;
          max-width: 70%;
          position: relative;
        }
        
        /* 用户消息样式 */
        .user-message .message-content .message-text {
          background-color: #4299e1;
          color: white;
          border-radius: 18px;
          border-bottom-right-radius: 4px;
          padding: 12px 16px;
          margin-bottom: 4px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        
        /* AI消息样式 */
        .ai-message .message-content .message-text {
          background-color: #f8f9fa;
          color: #333;
          border-radius: 18px;
          border-bottom-left-radius: 4px;
          padding: 12px 16px;
          margin-bottom: 4px;
          box-shadow: 0 1px 2px rgba(0,0,0,0.1);
        }
        
        /* 时间戳样式 */
        .message-time {
          font-size: 11px;
          color: #a0aec0;
          text-align: right;
          padding: 0 4px;
        }
        
        .user-message .message-time {
          text-align: right;
        }
        
        .ai-message .message-time {
          text-align: left;
        }
        
        .message-text {
          line-height: 1.5;
        }
        
        .user-message .message-text {
          color: white;
        }
        
        /* Markdown样式 */
        .message-text p {
          margin: 0 0 8px 0;
        }
        
        .message-text p:last-child {
          margin-bottom: 0;
        }
        
        /* 用户消息中的Markdown样式 */
        .user-message .message-text a {
          color: #fff;
          text-decoration: underline;
        }
        
        .user-message .message-text code {
          background-color: rgba(255, 255, 255, 0.2);
          color: #fff;
        }
        
        .user-message .message-text pre {
          background-color: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
        }
        
        .user-message .message-text pre code {
          color: #fff;
          background: none;
        }
        
        .user-message .message-text blockquote {
          border-left-color: rgba(255, 255, 255, 0.4);
          color: rgba(255, 255, 255, 0.9);
        }
        
        .message-text h1, 
        .message-text h2, 
        .message-text h3, 
        .message-text h4, 
        .message-text h5, 
        .message-text h6 {
          margin-top: 24px;
          margin-bottom: 16px;
          font-weight: 600;
          line-height: 1.25;
        }
        
        .message-text h1 {
          font-size: 2em;
          border-bottom: 1px solid #eaecef;
          padding-bottom: 0.3em;
        }
        
        .message-text h2 {
          font-size: 1.5em;
          border-bottom: 1px solid #eaecef;
          padding-bottom: 0.3em;
        }
        
        .message-text h3 {
          font-size: 1.25em;
        }
        
        .message-text h4 {
          font-size: 1em;
        }
        
        .message-text ul, 
        .message-text ol {
          margin-top: 0;
          margin-bottom: 16px;
          padding-left: 2em;
        }
        
        .message-text ul ul, 
        .message-text ul ol, 
        .message-text ol ul, 
        .message-text ol ol {
          margin-bottom: 0;
        }
        
        .message-text li {
          margin-bottom: 0.25em;
        }
        
        .message-text code {
          font-family: SFMono-Regular, Consolas, Liberation Mono, Menlo, monospace;
          background-color: rgba(27, 31, 35, 0.05);
          padding: 0.2em 0.4em;
          border-radius: 3px;
          font-size: 85%;
        }
        
        .message-text pre {
          background-color: #f6f8fa;
          padding: 16px;
          overflow: auto;
          border-radius: 3px;
          margin: 16px 0;
        }
        
        .message-text pre code {
          background: none;
          padding: 0;
          font-size: 100%;
          line-height: 1.45;
        }
        
        .message-text blockquote {
          padding: 0 1em;
          color: #6a737d;
          border-left: 0.25em solid #dfe2e5;
          margin: 0 0 16px 0;
        }
        
        .message-text img {
          max-width: 100%;
          box-sizing: content-box;
          background-color: #fff;
        }
        
        .message-text a {
          color: #0366d6;
          text-decoration: none;
        }
        
        .message-text a:hover {
          text-decoration: underline;
        }
        
        .message-text hr {
          height: 0.25em;
          padding: 0;
          margin: 24px 0;
          background-color: #e1e4e8;
          border: 0;
        }
        
        .message-text table {
          border-collapse: collapse;
          width: 100%;
          margin: 16px 0;
          display: block;
          overflow-x: auto;
        }
        
        .message-text table th, 
        .message-text table td {
          padding: 6px 13px;
          border: 1px solid #dfe2e5;
        }
        
        .message-text table tr {
          background-color: #fff;
          border-top: 1px solid #c6cbd1;
        }
        
        .message-text table tr:nth-child(2n) {
          background-color: #f6f8fa;
        }
        
        /* 浮动滚动按钮样式 */
        .floating-scroll-btn {
          position: fixed;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #3182ce;
          color: white;
          border: none;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
          transition: all 0.3s ease;
          z-index: 100;
        }
        
        .floating-scroll-btn.bottom-btn {
          bottom: 30px;
          right: 30px;
        }
        
        .floating-scroll-btn.top-btn {
          bottom: 90px;
          right: 30px;
        }
        
        .floating-scroll-btn:hover {
          background: #2b6cb0;
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .floating-scroll-btn i {
          font-size: 20px;
        }
        
        .comments-section {
          background: white;
          border-radius: 8px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          padding: 24px;
        }
        
        .comments-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 40px 0;
          text-align: center;
          color: #a0aec0;
        }
        
        .comments-placeholder i {
          font-size: 36px;
          margin-bottom: 12px;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .view-shared-session-page {
            padding: 16px;
          }
          
          .session-meta {
            flex-direction: column;
            align-items: flex-start;
            gap: 8px;
          }
          
          .session-stats {
            width: 100%;
            justify-content: space-between;
          }
        }
        
        /* 小屏幕移动设备适配 */
        @media (max-width: 576px) {
          .message-content {
            max-width: 85%;
          }
          
          .messages-container {
            padding: 12px;
          }
          
          .message-avatar {
            width: 32px;
            height: 32px;
            font-size: 14px;
          }
          
          .message-time {
            font-size: 10px;
          }
          
          .floating-scroll-btn {
            width: 40px;
            height: 40px;
          }
          
          .floating-scroll-btn.bottom-btn {
            bottom: 20px;
            right: 20px;
          }
          
          .floating-scroll-btn.top-btn {
            bottom: 70px;
            right: 20px;
          }
        }
      `}})]})},Cf=()=>{const{user:e,aiUsage:t,subscriptionStatus:n,preferences:s,updatePreferences:r,claimFreeMessages:a,loadAIUsage:o,error:l}=ze(),[c,d]=b.useState(!1),[u,h]=b.useState({aiModel:"ark",commonHerbs:[]});b.useEffect(()=>{s&&h({aiModel:s.aiModel||"ark",commonHerbs:s.commonHerbs||[]})},[s]);const f=async()=>{try{await r(u),d(!1)}catch(v){console.error("更新偏好设置失败:",v)}},p=async()=>{try{await a()&&await o()}catch(v){console.error("领取免费消息失败:",v)}},m=()=>n?n.isPermanentVip?"永久会员":n.isVip?"会员":"普通用户":"普通用户",x=()=>n?n.isPermanentVip?"#f59e0b":n.isVip?"#8b5cf6":"#6b7280":"#6b7280";return e?i.jsx("div",{className:"profile-page",children:i.jsxs("div",{className:"profile-container",children:[i.jsxs("div",{className:"profile-header",children:[i.jsx("h1",{children:"个人资料"}),i.jsx("p",{children:"管理您的AI助手使用偏好和账户信息"})]}),i.jsxs("div",{className:"profile-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-user"})," 基本信息"]})}),i.jsxs("div",{className:"card-content",children:[i.jsxs("div",{className:"info-row",children:[i.jsx("span",{className:"info-label",children:"用户名"}),i.jsx("span",{className:"info-value",children:e.username})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("span",{className:"info-label",children:"邮箱"}),i.jsx("span",{className:"info-value",children:e.email||"未设置"})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("span",{className:"info-label",children:"用户ID"}),i.jsx("span",{className:"info-value",children:e.id})]})]})]}),i.jsxs("div",{className:"profile-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-robot"})," AI使用情况"]})}),i.jsxs("div",{className:"card-content",children:[i.jsxs("div",{className:"usage-stats",children:[i.jsxs("div",{className:"usage-item",children:[i.jsx("div",{className:"usage-icon",children:i.jsx("i",{className:"fas fa-comments"})}),i.jsxs("div",{className:"usage-info",children:[i.jsx("span",{className:"usage-label",children:"剩余对话次数"}),i.jsx("span",{className:"usage-value",children:(t==null?void 0:t.remainingCount)||0})]})]}),i.jsxs("div",{className:"usage-item",children:[i.jsx("div",{className:"usage-icon",children:i.jsx("i",{className:"fas fa-calendar-alt"})}),i.jsxs("div",{className:"usage-info",children:[i.jsx("span",{className:"usage-label",children:"本月配额"}),i.jsx("span",{className:"usage-value",children:(t==null?void 0:t.currentMonthQuota)||0})]})]}),i.jsxs("div",{className:"usage-item",children:[i.jsx("div",{className:"usage-icon",children:i.jsx("i",{className:"fas fa-crown"})}),i.jsxs("div",{className:"usage-info",children:[i.jsx("span",{className:"usage-label",children:"会员状态"}),i.jsx("span",{className:"usage-value membership-status",style:{color:x()},children:m()})]})]})]}),(n==null?void 0:n.expiryDate)&&i.jsx("div",{className:"membership-info",children:i.jsxs("span",{className:"membership-expiry",children:["会员到期时间: ",new Date(n.expiryDate).toLocaleDateString("zh-CN")]})}),(t==null?void 0:t.hasClaimedFreeMessages)===!1&&i.jsx("div",{className:"claim-free-messages",children:i.jsxs("button",{className:"claim-button",onClick:p,children:[i.jsx("i",{className:"fas fa-gift"}),"领取免费对话次数"]})})]})]}),i.jsxs("div",{className:"profile-card",children:[i.jsxs("div",{className:"card-header",children:[i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-cog"})," AI偏好设置"]}),i.jsx("button",{className:"edit-button",onClick:()=>d(!c),children:c?"取消":"编辑"})]}),i.jsx("div",{className:"card-content",children:c?i.jsxs("div",{className:"edit-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"AI模型偏好"}),i.jsxs("select",{value:u.aiModel,onChange:v=>h({...u,aiModel:v.target.value}),children:[i.jsx("option",{value:"ark",children:"豆包"}),i.jsx("option",{value:"arkseedthink",children:"豆包推理"}),i.jsx("option",{value:"deepseekr1",children:"DeepSeek推理"})]})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{children:"常用中药"}),i.jsx("textarea",{value:u.commonHerbs.join(", "),onChange:v=>h({...u,commonHerbs:v.target.value.split(",").map(w=>w.trim()).filter(w=>w)}),placeholder:"输入常用中药，用逗号分隔"})]}),i.jsx("div",{className:"form-actions",children:i.jsx("button",{className:"save-button",onClick:f,children:"保存设置"})})]}):i.jsxs("div",{className:"preferences-display",children:[i.jsxs("div",{className:"info-row",children:[i.jsx("span",{className:"info-label",children:"AI模型偏好"}),i.jsx("span",{className:"info-value",children:(s==null?void 0:s.aiModel)||"ark"})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("span",{className:"info-label",children:"常用中药"}),i.jsx("span",{className:"info-value",children:s!=null&&s.commonHerbs&&s.commonHerbs.length>0?s.commonHerbs.join(", "):"未设置"})]}),i.jsxs("div",{className:"info-row",children:[i.jsx("span",{className:"info-label",children:"隐私协议"}),i.jsx("span",{className:"info-value",children:s!=null&&s.privacyAgreementAccepted?"已接受":"未接受"})]})]})})]}),i.jsxs("div",{className:"profile-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-chart-bar"})," 使用统计"]})}),i.jsx("div",{className:"card-content",children:i.jsxs("div",{className:"stats-grid",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-icon",children:i.jsx("i",{className:"fas fa-comment-dots"})}),i.jsxs("div",{className:"stat-info",children:[i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-label",children:"总对话数"})]})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-icon",children:i.jsx("i",{className:"fas fa-share-alt"})}),i.jsxs("div",{className:"stat-info",children:[i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-label",children:"分享次数"})]})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-icon",children:i.jsx("i",{className:"fas fa-heart"})}),i.jsxs("div",{className:"stat-info",children:[i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-label",children:"获得点赞"})]})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("div",{className:"stat-icon",children:i.jsx("i",{className:"fas fa-clock"})}),i.jsxs("div",{className:"stat-info",children:[i.jsx("span",{className:"stat-value",children:"0"}),i.jsx("span",{className:"stat-label",children:"使用天数"})]})]})]})})]}),l&&i.jsxs("div",{className:"error-message",children:[i.jsx("i",{className:"fas fa-exclamation-circle"}),l]})]})}):i.jsx("div",{className:"profile-page",children:i.jsxs("div",{className:"profile-error",children:[i.jsx("i",{className:"fas fa-exclamation-triangle"}),i.jsx("h2",{children:"无法加载用户信息"}),i.jsx("p",{children:"请重新登录后重试"})]})})},Tf=()=>{const e=tt(),{preferences:t,updatePreferences:n,error:s}=ze(),[r,a]=b.useState(!1),[o,l]=b.useState({theme:"light",language:"zh-CN",notifications:!0,autoSave:!0,privacyMode:!1});b.useEffect(()=>{t&&l(d=>({...d,...t}))},[t]);const c=async(d,u)=>{l(h=>({...h,[d]:u}));try{a(!0),await n({...o,[d]:u})}catch(h){console.error("更新设置失败:",h)}finally{a(!1)}};return i.jsxs("div",{className:"settings-page",children:[i.jsxs("div",{className:"settings-container",children:[i.jsxs("div",{className:"settings-header",children:[i.jsx("h1",{children:"设置"}),i.jsx("p",{children:"自定义您的AI助手使用体验"})]}),i.jsx("div",{className:"settings-card subscription-link-card",children:i.jsx("div",{className:"card-content",children:i.jsxs("div",{className:"subscription-link-info",children:[i.jsx("div",{className:"info-icon",children:i.jsx("i",{className:"fas fa-crown"})}),i.jsxs("div",{className:"info-text",children:[i.jsx("h3",{children:"会员中心已搬迁"}),i.jsx("p",{children:"您可以在会员中心管理订阅和购买额外消息包"})]}),i.jsx("button",{className:"subscription-link-button",onClick:()=>e("/subscription"),children:"前往会员中心"})]})})}),i.jsxs("div",{className:"settings-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-palette"})," 外观设置"]})}),i.jsx("div",{className:"card-content",children:i.jsxs("div",{className:"setting-item",children:[i.jsxs("div",{className:"setting-info",children:[i.jsx("span",{className:"setting-label",children:"主题模式"}),i.jsx("span",{className:"setting-description",children:"选择您喜欢的界面主题"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("select",{value:o.theme,onChange:d=>c("theme",d.target.value),disabled:r,children:[i.jsx("option",{value:"light",children:"浅色主题"}),i.jsx("option",{value:"dark",children:"深色主题"}),i.jsx("option",{value:"auto",children:"跟随系统"})]})})]})})]}),i.jsxs("div",{className:"settings-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-globe"})," 语言设置"]})}),i.jsx("div",{className:"card-content",children:i.jsxs("div",{className:"setting-item",children:[i.jsxs("div",{className:"setting-info",children:[i.jsx("span",{className:"setting-label",children:"界面语言"}),i.jsx("span",{className:"setting-description",children:"选择界面显示语言"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("select",{value:o.language,onChange:d=>c("language",d.target.value),disabled:r,children:[i.jsx("option",{value:"zh-CN",children:"简体中文"}),i.jsx("option",{value:"en-US",children:"English"})]})})]})})]}),i.jsxs("div",{className:"settings-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-bell"})," 通知设置"]})}),i.jsx("div",{className:"card-content",children:i.jsxs("div",{className:"setting-item",children:[i.jsxs("div",{className:"setting-info",children:[i.jsx("span",{className:"setting-label",children:"启用通知"}),i.jsx("span",{className:"setting-description",children:"接收重要消息和更新提醒"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("label",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:o.notifications,onChange:d=>c("notifications",d.target.checked),disabled:r}),i.jsx("span",{className:"toggle-slider"})]})})]})})]}),i.jsxs("div",{className:"settings-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-cogs"})," 功能设置"]})}),i.jsxs("div",{className:"card-content",children:[i.jsxs("div",{className:"setting-item",children:[i.jsxs("div",{className:"setting-info",children:[i.jsx("span",{className:"setting-label",children:"自动保存"}),i.jsx("span",{className:"setting-description",children:"自动保存对话内容"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("label",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:o.autoSave,onChange:d=>c("autoSave",d.target.checked),disabled:r}),i.jsx("span",{className:"toggle-slider"})]})})]}),i.jsxs("div",{className:"setting-item",children:[i.jsxs("div",{className:"setting-info",children:[i.jsx("span",{className:"setting-label",children:"隐私模式"}),i.jsx("span",{className:"setting-description",children:"增强隐私保护，减少数据收集"})]}),i.jsx("div",{className:"setting-control",children:i.jsxs("label",{className:"toggle-switch",children:[i.jsx("input",{type:"checkbox",checked:o.privacyMode,onChange:d=>c("privacyMode",d.target.checked),disabled:r}),i.jsx("span",{className:"toggle-slider"})]})})]})]})]}),i.jsxs("div",{className:"settings-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-shield-alt"})," 账户安全"]})}),i.jsxs("div",{className:"card-content",children:[i.jsxs("div",{className:"setting-item",children:[i.jsxs("div",{className:"setting-info",children:[i.jsx("span",{className:"setting-label",children:"修改密码"}),i.jsx("span",{className:"setting-description",children:"定期更新密码以确保账户安全"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("button",{className:"action-button",disabled:r,children:"修改密码"})})]}),i.jsxs("div",{className:"setting-item",children:[i.jsxs("div",{className:"setting-info",children:[i.jsx("span",{className:"setting-label",children:"删除账户"}),i.jsx("span",{className:"setting-description",children:"永久删除您的账户和所有数据"})]}),i.jsx("div",{className:"setting-control",children:i.jsx("button",{className:"action-button danger",disabled:r,children:"删除账户"})})]})]})]}),s&&i.jsxs("div",{className:"error-message",children:[i.jsx("i",{className:"fas fa-exclamation-circle"}),s]}),r&&i.jsxs("div",{className:"loading-overlay",children:[i.jsx("div",{className:"loading-spinner"}),i.jsx("span",{children:"正在保存设置..."})]})]}),i.jsx("style",{children:`
        /* 会员链接卡片样式 */
        .subscription-link-card {
          border-left: 4px solid #f59e0b;
          margin-bottom: 20px;
        }
        
        .subscription-link-info {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        
        .info-icon {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: #fbefcd;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-right: 15px;
        }
        
        .info-icon i {
          font-size: 20px;
          color: #d97706;
        }
        
        .info-text {
          flex-grow: 1;
        }
        
        .info-text h3 {
          margin: 0 0 5px 0;
          font-size: 16px;
          font-weight: 600;
        }
        
        .info-text p {
          margin: 0;
          font-size: 14px;
          color: #64748b;
        }
        
        .subscription-link-button {
          padding: 8px 16px;
          background: #f59e0b;
          color: white;
          border: none;
          border-radius: 6px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.2s;
          white-space: nowrap;
        }
        
        .subscription-link-button:hover {
          opacity: 0.9;
          transform: translateY(-1px);
        }
        
        @media (max-width: 768px) {
          .subscription-link-info {
            flex-direction: column;
            align-items: flex-start;
            gap: 15px;
          }
          
          .subscription-link-button {
            align-self: flex-start;
          }
        }
      `})]})},Af=()=>{const{subscriptionStatus:e,loadSubscriptionStatus:t}=ze();return b.useEffect(()=>{t()},[t]),i.jsx("div",{className:"subscription-page",children:i.jsxs("div",{className:"subscription-container",children:[i.jsxs("div",{className:"subscription-header",children:[i.jsx("h1",{children:"会员中心"}),i.jsx("p",{children:"管理您的会员订阅和使用情况"})]}),i.jsxs("div",{className:"subscription-card",children:[i.jsx("div",{className:"card-header",children:i.jsxs("h2",{children:[i.jsx("i",{className:"fas fa-crown"})," 订阅状态"]})}),i.jsx("div",{className:"card-content",children:e?i.jsxs(i.Fragment,{children:[i.jsxs("div",{className:"subscription-status-info",children:[i.jsx("div",{className:"status-icon",children:i.jsx("i",{className:e.isVip?"fas fa-crown":"fas fa-user"})}),i.jsxs("div",{className:"status-details",children:[i.jsx("h3",{children:e.isVip?e.isPermanentVip?"永久会员":"会员":"普通用户"}),i.jsxs("div",{className:"usage-section",children:[i.jsxs("div",{className:"usage-label-row",children:[i.jsx("span",{children:"本月使用情况:"}),i.jsxs("span",{children:[e.monthlyUsed,"/",e.monthlyQuota||0," 条消息"]})]}),i.jsx("div",{className:"usage-progress",children:i.jsx("div",{className:"usage-bar",style:{width:`${Math.min(100,e.monthlyUsed/(e.monthlyQuota||1)*100)}%`,backgroundColor:e.monthlyUsed>e.monthlyQuota*.8?"#ef4444":"#f59e0b",boxShadow:e.monthlyUsed>e.monthlyQuota*.8?"0 0 8px rgba(239, 68, 68, 0.6)":"0 0 8px rgba(245, 158, 11, 0.6)"}})})]}),i.jsxs("div",{className:"usage-section",children:[i.jsxs("div",{className:"usage-label-row",children:[i.jsx("span",{children:"永久消息额度:"}),i.jsx("span",{children:e.isPermanentVip?"无限":`${e.permanentRemaining} 条`})]}),!e.isPermanentVip&&e.permanentRemaining>0&&i.jsx("div",{className:"usage-progress",children:i.jsx("div",{className:"usage-bar",style:{width:"100%",backgroundColor:"#10b981",boxShadow:"0 0 8px rgba(16, 185, 129, 0.6)"}})})]}),e.isVip&&!e.isPermanentVip&&e.expiryDate&&i.jsxs("p",{children:["会员到期日期: ",i.jsx("span",{className:"highlight-text",children:e.expiryDate})]})]})]}),i.jsxs("div",{className:"subscription-actions",children:[!e.isVip&&i.jsxs("a",{href:"https://gmzyjx.com/ai/subscription",target:"_blank",rel:"noopener noreferrer",className:"subscription-button",children:[i.jsx("i",{className:"fas fa-crown"})," 开通会员"]}),e.isVip&&!e.isPermanentVip&&i.jsxs("a",{href:"https://gmzyjx.com/ai/subscription",target:"_blank",rel:"noopener noreferrer",className:"subscription-button secondary",children:[i.jsx("i",{className:"fas fa-plus-circle"})," 购买额外消息包"]})]})]}):i.jsxs("div",{className:"loading-status",children:[i.jsx("div",{className:"loading-spinner"}),i.jsx("span",{children:"正在加载订阅信息..."})]})})]})]})})},Pf=()=>{const{acceptPrivacyAgreement:e,error:t}=ze(),[n,s]=b.useState(""),[r,a]=b.useState(!0),[o,l]=b.useState(!1),c=tt();b.useEffect(()=>{(async()=>{try{const f=await Ae.getPrivacyAgreementContent();f.success&&f.data?s(f.data.content):s("无法加载隐私协议内容，请联系管理员。")}catch(f){console.error("获取隐私协议内容失败:",f),s("无法加载隐私协议内容，请联系管理员。")}finally{a(!1)}})()},[]);const d=async()=>{l(!0);try{await e(),localStorage.setItem("privacyAgreementAccepted","true");const h=sessionStorage.getItem("redirectAfterPrivacy");h?(sessionStorage.removeItem("redirectAfterPrivacy"),c(h,{replace:!0})):c("/",{replace:!0})}catch(h){console.error("同意隐私协议失败:",h)}finally{l(!1)}},u=()=>{alert("如不同意隐私协议，将无法继续使用本系统。")};return r?i.jsx("div",{className:"privacy-agreement-page",children:i.jsx("div",{className:"privacy-container",children:i.jsxs("div",{className:"loading",children:[i.jsx("i",{className:"fas fa-spinner fa-spin"}),i.jsx("p",{children:"正在加载隐私协议..."})]})})}):i.jsx("div",{className:"privacy-agreement-page",children:i.jsxs("div",{className:"privacy-container",children:[i.jsxs("div",{className:"privacy-header",children:[i.jsx("h1",{children:"中医 AI 服务隐私及免责协议"}),i.jsx("p",{children:"请仔细阅读以下协议内容，确认理解并同意后再使用本服务"})]}),i.jsx("div",{className:"privacy-content",children:i.jsx("div",{className:"markdown-content",dangerouslySetInnerHTML:{__html:n}})}),t&&i.jsxs("div",{className:"error-message",children:[i.jsx("i",{className:"fas fa-exclamation-triangle"}),i.jsx("span",{children:t})]}),i.jsxs("div",{className:"privacy-actions",children:[i.jsx("button",{className:"accept-button",onClick:d,disabled:o,children:o?i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-spinner fa-spin"}),"处理中..."]}):i.jsxs(i.Fragment,{children:[i.jsx("i",{className:"fas fa-check"}),"我已阅读并同意隐私协议"]})}),i.jsx("button",{className:"disagree-button",onClick:u,style:{marginLeft:16},children:"不同意"})]})]})})},If=()=>{const{user:e,isAuthenticated:t,isLoading:n}=ze(),[s,r]=b.useState(""),[a,o]=b.useState(!1),l=async()=>{o(!0),r(`开始测试单点登录功能...
`);try{if(localStorage.removeItem("isAuthenticated"),localStorage.removeItem("userInfo"),localStorage.removeItem("authToken"),localStorage.removeItem("refreshToken"),r(u=>u+`已清除本地认证状态
`),r(u=>u+`正在检查Django后端认证状态...
`),await Ae.checkAuthStatus()){r(m=>m+`✅ Django后端已认证，单点登录成功！
`);const u=localStorage.getItem("isAuthenticated"),h=localStorage.getItem("userInfo"),f=localStorage.getItem("authToken"),p=localStorage.getItem("refreshToken");u==="true"&&h?(r(m=>m+`✅ 用户信息已同步到本地存储
`),r(m=>m+`用户信息: ${h}
`),r(f?m=>m+`✅ JWT access token 已保存
`:m=>m+`❌ JWT access token 未保存
`),r(p?m=>m+`✅ JWT refresh token 已保存
`:m=>m+`❌ JWT refresh token 未保存
`)):r(m=>m+`❌ 用户信息同步失败
`)}else r(u=>u+`❌ Django后端未认证
`)}catch(d){r(u=>u+`❌ 测试失败: ${d.message}
`)}finally{o(!1)}},c=()=>{r("")};return i.jsxs("div",{className:"sso-test-page",style:{padding:"20px",maxWidth:"800px",margin:"0 auto"},children:[i.jsx("h1",{children:"单点登录功能测试"}),i.jsxs("div",{style:{marginBottom:"20px"},children:[i.jsx("h3",{children:"当前状态"}),i.jsxs("p",{children:[i.jsx("strong",{children:"认证状态:"})," ",t?"已认证":"未认证"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"用户信息:"})," ",e?`${e.username} (ID: ${e.id})`:"无"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"加载状态:"})," ",n?"加载中":"已完成"]})]}),i.jsxs("div",{style:{marginBottom:"20px"},children:[i.jsx("h3",{children:"本地存储状态"}),i.jsxs("p",{children:[i.jsx("strong",{children:"isAuthenticated:"})," ",localStorage.getItem("isAuthenticated")||"null"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"userInfo:"})," ",localStorage.getItem("userInfo")||"null"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"authToken:"})," ",localStorage.getItem("authToken")?"已保存":"null"]}),i.jsxs("p",{children:[i.jsx("strong",{children:"refreshToken:"})," ",localStorage.getItem("refreshToken")?"已保存":"null"]})]}),i.jsxs("div",{style:{marginBottom:"20px"},children:[i.jsx("button",{onClick:l,disabled:a,style:{padding:"10px 20px",backgroundColor:"#007bff",color:"white",border:"none",borderRadius:"4px",cursor:a?"not-allowed":"pointer",marginRight:"10px"},children:a?"测试中...":"测试单点登录"}),i.jsx("button",{onClick:c,style:{padding:"10px 20px",backgroundColor:"#6c757d",color:"white",border:"none",borderRadius:"4px",cursor:"pointer"},children:"清除测试结果"})]}),s&&i.jsxs("div",{style:{marginTop:"20px",padding:"15px",backgroundColor:"#f8f9fa",border:"1px solid #dee2e6",borderRadius:"4px",whiteSpace:"pre-line",fontFamily:"monospace",fontSize:"14px"},children:[i.jsx("h4",{children:"测试结果:"}),s]}),i.jsxs("div",{style:{marginTop:"20px"},children:[i.jsx("h3",{children:"测试说明"}),i.jsxs("ul",{children:[i.jsx("li",{children:'点击"测试单点登录"按钮会清除本地认证状态'}),i.jsx("li",{children:"然后检查Django后端的认证状态"}),i.jsx("li",{children:"如果Django后端已认证，会将用户信息和JWT token同步到本地存储"}),i.jsx("li",{children:"测试结果会显示在下方"})]})]})]})},Ef=()=>{const{sidebarOpen:e,sidebarCollapsed:t,isMobile:n,setSidebarOpen:s,toggleSidebarCollapse:r}=qe(),{stats:a}=Gt(),o=[{to:"/sessions",icon:"comment-dots",text:"我的会话",badge:a==null?void 0:a.totalSessions},{to:"/share-hall",icon:"share-alt",text:"分享大厅"}],l=`sidebar ${e?"open":"closed"} ${t?"collapsed":"expanded"}`;return i.jsxs(i.Fragment,{children:[i.jsxs("nav",{className:l,children:[i.jsxs("div",{className:"sidebar-header",children:[i.jsxs("div",{className:"logo",children:[i.jsx("i",{className:"fas fa-robot"}),!t&&i.jsx("span",{children:"光明AI助手"})]}),!n&&i.jsx("button",{className:"collapse-button",onClick:r,"aria-label":t?"展开侧边栏":"收起侧边栏",children:i.jsx("i",{className:`fas ${t?"fa-angle-right":"fa-angle-left"}`})})]}),i.jsx("div",{className:"sidebar-content",children:i.jsx("div",{className:"navigation",children:o.map(c=>i.jsxs(oc,{to:c.to,className:({isActive:d})=>`nav-item ${d?"active":""}`,onClick:()=>n&&s(!1),children:[i.jsx("i",{className:`fas fa-${c.icon}`}),!t&&i.jsxs(i.Fragment,{children:[i.jsx("span",{className:"nav-label",children:c.text}),c.badge&&i.jsx("span",{className:"nav-badge",children:c.badge})]})]},c.to))})}),i.jsx("div",{className:"sidebar-footer",children:!t&&a&&i.jsxs("div",{className:"stats-summary",children:[i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-label",children:"总对话"}),i.jsx("span",{className:"stat-value",children:a.totalSessions})]}),i.jsxs("div",{className:"stat-item",children:[i.jsx("span",{className:"stat-label",children:"总消息"}),i.jsx("span",{className:"stat-value",children:a.totalMessages})]})]})})]}),i.jsx("style",{children:`
        .sidebar {
          position: fixed;
          left: 0;
          top: 0;
          height: 100vh;
          background: white;
          border-right: 1px solid #e2e8f0;
          box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
          transition: all 0.3s ease;
          z-index: 1000;
          display: flex;
          flex-direction: column;
        }
        
        .sidebar.expanded {
          width: 280px;
        }
        
        .sidebar.collapsed {
          width: 60px;
        }
        
        .sidebar.closed {
          transform: translateX(-100%);
        }
        
        .sidebar.open {
          transform: translateX(0);
        }
        
        /* 移动端样式 */
        @media (max-width: 768px) {
          .sidebar {
            width: 280px !important;
          }
        }
        
        .sidebar-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 16px;
          border-bottom: 1px solid #e2e8f0;
          min-height: 60px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 18px;
          color: #3182ce;
        }
        
        .collapse-button {
          width: 32px;
          height: 32px;
          border: none;
          background: none;
          border-radius: 50%;
          color: #718096;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .collapse-button:hover {
          background: #f7fafc;
          color: #4a5568;
        }
        
        .sidebar-content {
          flex: 1;
          overflow-y: auto;
          padding: 16px;
        }
        
        .navigation {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
        
        .nav-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px;
          color: #4a5568;
          text-decoration: none;
          border-radius: 8px;
          transition: all 0.2s;
          position: relative;
          justify-content: ${t?"center":"flex-start"};
        }
        
        .nav-item:hover {
          background: #f7fafc;
          color: #2d3748;
        }
        
        .nav-item.active {
          background: #e6fffa;
          color: #319795;
        }
        
        .nav-label {
          flex: 1;
        }
        
        .nav-badge {
          background: #e2e8f0;
          color: #4a5568;
          font-size: 12px;
          padding: 2px 6px;
          border-radius: 10px;
          min-width: 20px;
          text-align: center;
        }
        
        .nav-item.active .nav-badge {
          background: #319795;
          color: white;
        }
        
        .sidebar-footer {
          padding: 16px;
          border-top: 1px solid #e2e8f0;
        }
        
        .stats-summary {
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        
        .stat-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
        }
        
        .stat-label {
          color: #718096;
        }
        
        .stat-value {
          color: #4a5568;
          font-weight: 500;
        }
        
        /* 暗色主题支持 */
        .dark .sidebar {
          background: #2d3748;
          border-right-color: #4a5568;
        }
        
        .dark .sidebar-header {
          border-bottom-color: #4a5568;
        }
        
        .dark .collapse-button {
          color: #a0aec0;
        }
        
        .dark .collapse-button:hover {
          background: #4a5568;
          color: #e2e8f0;
        }
        
        .dark .nav-item {
          color: #e2e8f0;
        }
        
        .dark .nav-item:hover {
          background: #4a5568;
          color: #f7fafc;
        }
        
        .dark .nav-item.active {
          background: #234e52;
          color: #81e6d9;
        }
        
        .dark .nav-badge {
          background: #4a5568;
          color: #e2e8f0;
        }
        
        .dark .nav-item.active .nav-badge {
          background: #81e6d9;
          color: #234e52;
        }
        
        .dark .sidebar-footer {
          border-top-color: #4a5568;
        }
        
        .dark .stat-label {
          color: #a0aec0;
        }
        
        .dark .stat-value {
          color: #e2e8f0;
        }
        
        /* 滚动条样式 */
        .sidebar-content::-webkit-scrollbar {
          width: 4px;
        }
        
        .sidebar-content::-webkit-scrollbar-track {
          background: transparent;
        }
        
        .sidebar-content::-webkit-scrollbar-thumb {
          background: #cbd5e0;
          border-radius: 2px;
        }
        
        .sidebar-content::-webkit-scrollbar-thumb:hover {
          background: #a0aec0;
        }
        
        .dark .sidebar-content::-webkit-scrollbar-thumb {
          background: #4a5568;
        }
        
        .dark .sidebar-content::-webkit-scrollbar-thumb:hover {
          background: #718096;
        }
        
        /* 工具提示（收起状态下显示） */
        .sidebar.collapsed .nav-item {
          position: relative;
        }
        
        .sidebar.collapsed .nav-item::after {
          content: attr(title);
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          margin-left: 8px;
          padding: 6px 8px;
          background: #2d3748;
          color: white;
          font-size: 12px;
          border-radius: 4px;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.2s;
          pointer-events: none;
          z-index: 1001;
        }
        
        .sidebar.collapsed .nav-item:hover::after {
          opacity: 1;
          visibility: visible;
        }
      `})]})},Mf=({showMenuButton:e=!0})=>{const t=tt(),{user:n,subscriptionStatus:s}=ze(),{toggleSidebar:r,toggleTheme:a,theme:o,isMobile:l}=qe(),c=async()=>{try{await Ae.logout(),t("/login")}catch(d){console.error("登出失败:",d)}};return i.jsxs("header",{className:"header",children:[i.jsxs("div",{className:"header-left",children:[e&&i.jsx("button",{className:"menu-button",onClick:r,"aria-label":"切换侧边栏",children:i.jsx("i",{className:"fas fa-bars"})}),i.jsxs("div",{className:"logo",children:[i.jsx("i",{className:"fas fa-robot"}),i.jsx("span",{className:"logo-text",children:"AI辩证"})]})]}),i.jsxs("div",{className:"header-right",children:[i.jsxs("button",{className:"legacy-version-btn",onClick:()=>window.open("https://gmzyjx.com/ai","_blank"),"aria-label":"回到旧版",title:"回到旧版界面",children:[i.jsx("i",{className:"fas fa-history"}),!l&&i.jsx("span",{children:"旧版"})]}),i.jsx("div",{className:"subscription-status",onClick:()=>t("/subscription"),children:s&&(s.isVip?i.jsxs("div",{className:"subscription-badge active",title:`会员有效期至: ${s.expiryDate||"永久"}`,children:[i.jsx("i",{className:"fas fa-crown"}),!l&&i.jsxs("span",{className:"subscription-text",children:[s.isPermanentVip?"永久会员":"会员",!s.isPermanentVip&&i.jsxs("span",{className:"usage-count",children:[" ",s.monthlyUsed,"/",s.monthlyQuota]})]})]}):i.jsxs("div",{className:"subscription-badge inactive",title:"点击购买会员",children:[i.jsx("i",{className:"fas fa-crown"}),!l&&i.jsx("span",{className:"subscription-text",children:"普通用户"})]}))}),i.jsxs("div",{className:"user-menu",children:[i.jsxs("button",{className:"user-button","aria-label":"用户菜单",children:[i.jsx("div",{className:"user-avatar",children:i.jsx("i",{className:"fas fa-user"})}),i.jsx("span",{className:"user-name",children:n==null?void 0:n.username}),i.jsx("i",{className:"fas fa-chevron-down"})]}),i.jsxs("div",{className:"user-dropdown",children:[i.jsx("div",{className:"dropdown-divider"}),i.jsxs("div",{className:"dropdown-item logout",onClick:c,children:[i.jsx("i",{className:"fas fa-sign-out-alt"}),"登出"]})]})]})]}),i.jsx("style",{children:`
        .header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 60px;
          background: white;
          border-bottom: 1px solid #e2e8f0;
          padding: 0 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 100;
        }
        
        .header-left {
          display: flex;
          align-items: center;
          gap: 16px;
        }
        
        .menu-button {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border: none;
          background: none;
          border-radius: 8px;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s;
        }
        
        .menu-button:hover {
          background-color: #f7fafc;
          color: #2d3748;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 8px;
          font-weight: 600;
          font-size: 18px;
          color: #3182ce;
        }
        
        .logo-text {
          ${l?"display: none;":""}
        }
        
        .header-right {
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        /* 订阅状态样式 */
        .subscription-status {
          cursor: pointer;
        }
        
        .subscription-badge {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          border-radius: 16px;
          font-size: 14px;
          font-weight: 600;
          transition: all 0.2s;
        }
        
        .subscription-badge.active {
          background-color: #fbefcd;
          color: #d97706;
        }
        
        .subscription-badge.inactive {
          background-color: #e2e8f0;
          color: #718096;
        }
        
        .subscription-badge:hover {
          opacity: 0.8;
          transform: translateY(-1px);
        }
        
        .subscription-badge i {
          font-size: 16px;
        }
        
        .subscription-text {
          white-space: nowrap;
        }
        
        .usage-count {
          display: inline-block;
          font-size: 12px;
          font-weight: 500;
          background-color: rgba(255, 255, 255, 0.6);
          color: #d97706;
          padding: 1px 6px;
          border-radius: 10px;
          margin-left: 4px;
        }
        
        .user-menu {
          position: relative;
        }
        
        .user-button {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 6px 12px;
          border: none;
          background: none;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.2s;
          color: #4a5568;
        }
        
        .user-button:hover {
          background-color: #f7fafc;
        }
        
        .user-avatar {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #e2e8f0;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #718096;
        }
        
        .user-name {
          font-weight: 500;
          ${l?"display: none;":""}
        }
        
        .user-dropdown {
          position: absolute;
          top: 100%;
          right: 0;
          margin-top: 4px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          min-width: 180px;
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px);
          transition: all 0.2s;
          z-index: 1000;
        }
        
        .user-menu:hover .user-dropdown {
          opacity: 1;
          visibility: visible;
          transform: translateY(0);
        }
        
        .dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 12px 16px;
          color: #4a5568;
          cursor: pointer;
          transition: all 0.2s;
          border-radius: 6px;
          margin: 4px;
        }
        
        .dropdown-item:hover {
          background-color: #f7fafc;
          color: #2d3748;
        }
        
        .dropdown-item.logout {
          color: #e53e3e;
        }
        
        .dropdown-item.logout:hover {
          background-color: #fed7d7;
        }
        
        .menu-tag {
          font-size: 11px;
          background-color: #fed7aa;
          color: #9a3412;
          padding: 2px 6px;
          border-radius: 10px;
          margin-left: 6px;
          font-weight: 500;
        }
        
        .dropdown-divider {
          height: 1px;
          background: #e2e8f0;
          margin: 4px 0;
        }
        
        /* 暗色主题支持 */
        .dark .header {
          background-color: #2d3748;
          border-bottom-color: #4a5568;
        }
        
        .dark .menu-button {
          color: #e2e8f0;
        }
        
        .dark .menu-button:hover {
          background-color: #4a5568;
          color: #f7fafc;
        }
        
        /* 回到旧版按钮样式 */
        .legacy-version-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          border: 1px solid #6c757d;
          border-radius: 6px;
          background: white;
          color: #6c757d;
          cursor: pointer;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.2s;
        }
        .legacy-version-btn:hover {
          background: #6c757d;
          color: white;
          transform: translateY(-1px);
          box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
        }
        /* 暗色主题 */
        .dark .legacy-version-btn {
          background: #2d3748;
          border-color: #4a5568;
          color: #e2e8f0;
        }
        .dark .legacy-version-btn:hover {
          background: #4a5568;
          color: #f7fafc;
        }
        
        .dark .user-button {
          color: #e2e8f0;
        }
        
        .dark .user-button:hover {
          background-color: #4a5568;
        }
        
        .dark .user-avatar {
          background: #4a5568;
          color: #e2e8f0;
        }
        
        .dark .user-dropdown {
          background: #2d3748;
          border-color: #4a5568;
        }
        
        .dark .dropdown-item {
          color: #e2e8f0;
        }
        
        .dark .dropdown-item:hover {
          background-color: #4a5568;
          color: #f7fafc;
        }
        
        .dark .menu-tag {
          background-color: #fdba74;
          color: #7c2d12;
        }
        
        .dark .dropdown-divider {
          background: #4a5568;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .header {
            padding: 0 12px;
          }
          
          .usage-info {
            padding: 4px 8px;
            font-size: 12px;
          }
        }
      `})]})},_e=({children:e,showSidebar:t=!0})=>{const{sidebarOpen:n,sidebarCollapsed:s,isMobile:r}=qe();return i.jsxs("div",{className:"layout",children:[t&&i.jsx(Ef,{}),i.jsxs("div",{className:`main-content ${t?"with-sidebar":"full-width"}`,children:[i.jsx(Mf,{showMenuButton:t}),i.jsx("main",{className:"content",children:e})]}),r&&n&&t&&i.jsx("div",{className:"sidebar-overlay",onClick:()=>qe.getState().setSidebarOpen(!1)}),i.jsx("style",{children:`
        .layout {
          display: flex;
          height: 100vh;
          background-color: #f8f9fa;
        }
        
        .main-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          min-width: 0;
          transition: margin-left 0.3s ease;
        }
        
        .main-content.with-sidebar {
          margin-left: ${r?"0":s?"60px":"280px"};
        }
        
        .main-content.full-width {
          margin-left: 0;
        }
        
        .content {
          flex: 1;
          overflow: auto;
          position: relative;
        }
        
        .sidebar-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background-color: rgba(0, 0, 0, 0.5);
          z-index: 999;
        }
        
        /* 暗色主题支持 */
        .dark .layout {
          background-color: #1a202c;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .main-content.with-sidebar {
            margin-left: 0;
          }
        }
        
        /* 打印样式 */
        @media print {
          .layout {
            height: auto;
          }
          
          .main-content {
            margin-left: 0 !important;
          }
          
          .sidebar-overlay {
            display: none;
          }
        }
      `})]})};class Df extends b.Component{constructor(n){super(n);ns(this,"handleRetry",()=>{this.setState({hasError:!1,error:void 0})});this.state={hasError:!1}}static getDerivedStateFromError(n){return{hasError:!0,error:n}}componentDidCatch(n,s){console.error("ErrorBoundary caught an error:",n,s),this.props.onError&&this.props.onError(n,s)}render(){return this.state.hasError?this.props.fallback?this.props.fallback:i.jsxs("div",{className:"error-boundary",children:[i.jsxs("div",{className:"error-content",children:[i.jsx("div",{className:"error-icon",children:i.jsx("i",{className:"fas fa-exclamation-triangle"})}),i.jsx("h2",{children:"哎呀，出现了错误"}),i.jsx("p",{className:"error-message",children:"抱歉，页面遇到了问题。请刷新页面重试，或联系管理员。"}),!1,i.jsxs("div",{className:"error-actions",children:[i.jsx("button",{onClick:this.handleRetry,className:"btn btn-primary",children:"重试"}),i.jsx("button",{onClick:()=>window.location.reload(),className:"btn btn-secondary",children:"刷新页面"}),i.jsx("button",{onClick:()=>window.history.back(),className:"btn btn-secondary",children:"返回上一页"})]})]}),i.jsx("style",{children:`
            .error-boundary {
              display: flex;
              align-items: center;
              justify-content: center;
              min-height: 100vh;
              padding: 20px;
              background-color: #f8f9fa;
            }
            
            .error-content {
              max-width: 500px;
              text-align: center;
              background: white;
              padding: 40px;
              border-radius: 12px;
              box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
            }
            
            .error-icon {
              font-size: 64px;
              color: #f56565;
              margin-bottom: 24px;
            }
            
            .error-content h2 {
              font-size: 24px;
              color: #2d3748;
              margin-bottom: 16px;
            }
            
            .error-message {
              font-size: 16px;
              color: #718096;
              margin-bottom: 32px;
              line-height: 1.5;
            }
            
            .error-details {
              text-align: left;
              margin-bottom: 24px;
              padding: 16px;
              background-color: #f7fafc;
              border-radius: 8px;
              border: 1px solid #e2e8f0;
            }
            
            .error-details summary {
              cursor: pointer;
              font-weight: 500;
              color: #4a5568;
              margin-bottom: 8px;
            }
            
            .error-details pre {
              font-size: 12px;
              color: #e53e3e;
              white-space: pre-wrap;
              word-wrap: break-word;
              max-height: 200px;
              overflow-y: auto;
            }
            
            .error-actions {
              display: flex;
              gap: 12px;
              justify-content: center;
              flex-wrap: wrap;
            }
            
            .btn {
              padding: 10px 20px;
              border: none;
              border-radius: 6px;
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              transition: all 0.2s;
              text-decoration: none;
              display: inline-block;
            }
            
            .btn-primary {
              background-color: #3182ce;
              color: white;
            }
            
            .btn-primary:hover {
              background-color: #2c5aa0;
            }
            
            .btn-secondary {
              background-color: #e2e8f0;
              color: #4a5568;
            }
            
            .btn-secondary:hover {
              background-color: #cbd5e0;
            }
            
            @media (max-width: 768px) {
              .error-content {
                padding: 24px;
                margin: 16px;
              }
              
              .error-icon {
                font-size: 48px;
              }
              
              .error-content h2 {
                font-size: 20px;
              }
              
              .error-actions {
                flex-direction: column;
              }
              
              .btn {
                width: 100%;
              }
            }
          `})]}):this.props.children}}const Ro=b.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),$n=b.createContext({}),Hn=b.createContext(null),qn=typeof document<"u",vr=qn?b.useLayoutEffect:b.useEffect,Vo=b.createContext({strict:!1}),kr=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),Lf="framerAppearId",Fo="data-"+kr(Lf);function zf(e,t,n,s){const{visualElement:r}=b.useContext($n),a=b.useContext(Vo),o=b.useContext(Hn),l=b.useContext(Ro).reducedMotion,c=b.useRef();s=s||a.renderer,!c.current&&s&&(c.current=s(e,{visualState:t,parent:r,props:n,presenceContext:o,blockInitialAnimation:o?o.initial===!1:!1,reducedMotionConfig:l}));const d=c.current;b.useInsertionEffect(()=>{d&&d.update(n,o)});const u=b.useRef(!!(n[Fo]&&!window.HandoffComplete));return vr(()=>{d&&(d.render(),u.current&&d.animationState&&d.animationState.animateChanges())}),b.useEffect(()=>{d&&(d.updateFeatures(),!u.current&&d.animationState&&d.animationState.animateChanges(),u.current&&(u.current=!1,window.HandoffComplete=!0))}),d}function jt(e){return e&&typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function Rf(e,t,n){return b.useCallback(s=>{s&&e.mount&&e.mount(s),t&&(s?t.mount(s):t.unmount()),n&&(typeof n=="function"?n(s):jt(n)&&(n.current=s))},[t])}function Xt(e){return typeof e=="string"||Array.isArray(e)}function Wn(e){return e!==null&&typeof e=="object"&&typeof e.start=="function"}const Sr=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],jr=["initial",...Sr];function Yn(e){return Wn(e.animate)||jr.some(t=>Xt(e[t]))}function Oo(e){return!!(Yn(e)||e.variants)}function Vf(e,t){if(Yn(e)){const{initial:n,animate:s}=e;return{initial:n===!1||Xt(n)?n:void 0,animate:Xt(s)?s:void 0}}return e.inherit!==!1?t:{}}function Ff(e){const{initial:t,animate:n}=Vf(e,b.useContext($n));return b.useMemo(()=>({initial:t,animate:n}),[Fi(t),Fi(n)])}function Fi(e){return Array.isArray(e)?e.join(" "):e}const Oi={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]},Qt={};for(const e in Oi)Qt[e]={isEnabled:t=>Oi[e].some(n=>!!t[n])};function Of(e){for(const t in e)Qt[t]={...Qt[t],...e[t]}}const Nr=b.createContext({}),Bo=b.createContext({}),Bf=Symbol.for("motionComponentSymbol");function _f({preloadedFeatures:e,createVisualElement:t,useRender:n,useVisualState:s,Component:r}){e&&Of(e);function a(l,c){let d;const u={...b.useContext(Ro),...l,layoutId:Uf(l)},{isStatic:h}=u,f=Ff(l),p=s(l,h);if(!h&&qn){f.visualElement=zf(r,p,u,t);const m=b.useContext(Bo),x=b.useContext(Vo).strict;f.visualElement&&(d=f.visualElement.loadFeatures(u,x,e,m))}return b.createElement($n.Provider,{value:f},d&&f.visualElement?b.createElement(d,{visualElement:f.visualElement,...u}):null,n(r,l,Rf(p,f.visualElement,c),p,h,f.visualElement))}const o=b.forwardRef(a);return o[Bf]=r,o}function Uf({layoutId:e}){const t=b.useContext(Nr).id;return t&&e!==void 0?t+"-"+e:e}function $f(e){function t(s,r={}){return _f(e(s,r))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(s,r)=>(n.has(r)||n.set(r,t(r)),n.get(r))})}const Hf=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function Cr(e){return typeof e!="string"||e.includes("-")?!1:!!(Hf.indexOf(e)>-1||/[A-Z]/.test(e))}const An={};function qf(e){Object.assign(An,e)}const nn=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],vt=new Set(nn);function _o(e,{layout:t,layoutId:n}){return vt.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!An[e]||e==="opacity")}const Ee=e=>!!(e&&e.getVelocity),Wf={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},Yf=nn.length;function Gf(e,{enableHardwareAcceleration:t=!0,allowTransformNone:n=!0},s,r){let a="";for(let o=0;o<Yf;o++){const l=nn[o];if(e[l]!==void 0){const c=Wf[l]||l;a+=`${c}(${e[l]}) `}}return t&&!e.z&&(a+="translateZ(0)"),a=a.trim(),r?a=r(e,s?"":a):n&&s&&(a="none"),a}const Uo=e=>t=>typeof t=="string"&&t.startsWith(e),$o=Uo("--"),$s=Uo("var(--"),Kf=/var\s*\(\s*--[\w-]+(\s*,\s*(?:(?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)+)?\s*\)/g,Xf=(e,t)=>t&&typeof e=="number"?t.transform(e):e,ot=(e,t,n)=>Math.min(Math.max(n,e),t),kt={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},Ht={...kt,transform:e=>ot(0,1,e)},fn={...kt,default:1},qt=e=>Math.round(e*1e5)/1e5,Gn=/(-)?([\d]*\.?[\d])+/g,Ho=/(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,Qf=/^(#[0-9a-f]{3,8}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function sn(e){return typeof e=="string"}const rn=e=>({test:t=>sn(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),rt=rn("deg"),We=rn("%"),W=rn("px"),Jf=rn("vh"),Zf=rn("vw"),Bi={...We,parse:e=>We.parse(e)/100,transform:e=>We.transform(e*100)},_i={...kt,transform:Math.round},qo={borderWidth:W,borderTopWidth:W,borderRightWidth:W,borderBottomWidth:W,borderLeftWidth:W,borderRadius:W,radius:W,borderTopLeftRadius:W,borderTopRightRadius:W,borderBottomRightRadius:W,borderBottomLeftRadius:W,width:W,maxWidth:W,height:W,maxHeight:W,size:W,top:W,right:W,bottom:W,left:W,padding:W,paddingTop:W,paddingRight:W,paddingBottom:W,paddingLeft:W,margin:W,marginTop:W,marginRight:W,marginBottom:W,marginLeft:W,rotate:rt,rotateX:rt,rotateY:rt,rotateZ:rt,scale:fn,scaleX:fn,scaleY:fn,scaleZ:fn,skew:rt,skewX:rt,skewY:rt,distance:W,translateX:W,translateY:W,translateZ:W,x:W,y:W,z:W,perspective:W,transformPerspective:W,opacity:Ht,originX:Bi,originY:Bi,originZ:W,zIndex:_i,fillOpacity:Ht,strokeOpacity:Ht,numOctaves:_i};function Tr(e,t,n,s){const{style:r,vars:a,transform:o,transformOrigin:l}=e;let c=!1,d=!1,u=!0;for(const h in t){const f=t[h];if($o(h)){a[h]=f;continue}const p=qo[h],m=Xf(f,p);if(vt.has(h)){if(c=!0,o[h]=m,!u)continue;f!==(p.default||0)&&(u=!1)}else h.startsWith("origin")?(d=!0,l[h]=m):r[h]=m}if(t.transform||(c||s?r.transform=Gf(e.transform,n,u,s):r.transform&&(r.transform="none")),d){const{originX:h="50%",originY:f="50%",originZ:p=0}=l;r.transformOrigin=`${h} ${f} ${p}`}}const Ar=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function Wo(e,t,n){for(const s in t)!Ee(t[s])&&!_o(s,n)&&(e[s]=t[s])}function em({transformTemplate:e},t,n){return b.useMemo(()=>{const s=Ar();return Tr(s,t,{enableHardwareAcceleration:!n},e),Object.assign({},s.vars,s.style)},[t])}function tm(e,t,n){const s=e.style||{},r={};return Wo(r,s,e),Object.assign(r,em(e,t,n)),e.transformValues?e.transformValues(r):r}function nm(e,t,n){const s={},r=tm(e,t,n);return e.drag&&e.dragListener!==!1&&(s.draggable=!1,r.userSelect=r.WebkitUserSelect=r.WebkitTouchCallout="none",r.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),e.tabIndex===void 0&&(e.onTap||e.onTapStart||e.whileTap)&&(s.tabIndex=0),s.style=r,s}const sm=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","ignoreStrict","viewport"]);function Pn(e){return e.startsWith("while")||e.startsWith("drag")&&e!=="draggable"||e.startsWith("layout")||e.startsWith("onTap")||e.startsWith("onPan")||e.startsWith("onLayout")||sm.has(e)}let Yo=e=>!Pn(e);function rm(e){e&&(Yo=t=>t.startsWith("on")?!Pn(t):e(t))}try{rm(require("@emotion/is-prop-valid").default)}catch{}function im(e,t,n){const s={};for(const r in e)r==="values"&&typeof e.values=="object"||(Yo(r)||n===!0&&Pn(r)||!t&&!Pn(r)||e.draggable&&r.startsWith("onDrag"))&&(s[r]=e[r]);return s}function Ui(e,t,n){return typeof e=="string"?e:W.transform(t+n*e)}function am(e,t,n){const s=Ui(t,e.x,e.width),r=Ui(n,e.y,e.height);return`${s} ${r}`}const om={offset:"stroke-dashoffset",array:"stroke-dasharray"},lm={offset:"strokeDashoffset",array:"strokeDasharray"};function cm(e,t,n=1,s=0,r=!0){e.pathLength=1;const a=r?om:lm;e[a.offset]=W.transform(-s);const o=W.transform(t),l=W.transform(n);e[a.array]=`${o} ${l}`}function Pr(e,{attrX:t,attrY:n,attrScale:s,originX:r,originY:a,pathLength:o,pathSpacing:l=1,pathOffset:c=0,...d},u,h,f){if(Tr(e,d,u,f),h){e.style.viewBox&&(e.attrs.viewBox=e.style.viewBox);return}e.attrs=e.style,e.style={};const{attrs:p,style:m,dimensions:x}=e;p.transform&&(x&&(m.transform=p.transform),delete p.transform),x&&(r!==void 0||a!==void 0||m.transform)&&(m.transformOrigin=am(x,r!==void 0?r:.5,a!==void 0?a:.5)),t!==void 0&&(p.x=t),n!==void 0&&(p.y=n),s!==void 0&&(p.scale=s),o!==void 0&&cm(p,o,l,c,!1)}const Go=()=>({...Ar(),attrs:{}}),Ir=e=>typeof e=="string"&&e.toLowerCase()==="svg";function um(e,t,n,s){const r=b.useMemo(()=>{const a=Go();return Pr(a,t,{enableHardwareAcceleration:!1},Ir(s),e.transformTemplate),{...a.attrs,style:{...a.style}}},[t]);if(e.style){const a={};Wo(a,e.style,e),r.style={...a,...r.style}}return r}function dm(e=!1){return(n,s,r,{latestValues:a},o)=>{const c=(Cr(n)?um:nm)(s,a,o,n),u={...im(s,typeof n=="string",e),...c,ref:r},{children:h}=s,f=b.useMemo(()=>Ee(h)?h.get():h,[h]);return b.createElement(n,{...u,children:f})}}function Ko(e,{style:t,vars:n},s,r){Object.assign(e.style,t,r&&r.getProjectionStyles(s));for(const a in n)e.style.setProperty(a,n[a])}const Xo=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]);function Qo(e,t,n,s){Ko(e,t,void 0,s);for(const r in t.attrs)e.setAttribute(Xo.has(r)?r:kr(r),t.attrs[r])}function Er(e,t){const{style:n}=e,s={};for(const r in n)(Ee(n[r])||t.style&&Ee(t.style[r])||_o(r,e))&&(s[r]=n[r]);return s}function Jo(e,t){const n=Er(e,t);for(const s in e)if(Ee(e[s])||Ee(t[s])){const r=nn.indexOf(s)!==-1?"attr"+s.charAt(0).toUpperCase()+s.substring(1):s;n[r]=e[s]}return n}function Mr(e,t,n,s={},r={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,s,r)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,s,r)),t}function Zo(e){const t=b.useRef(null);return t.current===null&&(t.current=e()),t.current}const In=e=>Array.isArray(e),hm=e=>!!(e&&typeof e=="object"&&e.mix&&e.toValue),pm=e=>In(e)?e[e.length-1]||0:e;function wn(e){const t=Ee(e)?e.get():e;return hm(t)?t.toValue():t}function fm({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},s,r,a){const o={latestValues:mm(s,r,a,e),renderState:t()};return n&&(o.mount=l=>n(s,l,o)),o}const el=e=>(t,n)=>{const s=b.useContext($n),r=b.useContext(Hn),a=()=>fm(e,t,s,r);return n?a():Zo(a)};function mm(e,t,n,s){const r={},a=s(e,{});for(const f in a)r[f]=wn(a[f]);let{initial:o,animate:l}=e;const c=Yn(e),d=Oo(e);t&&d&&!c&&e.inherit!==!1&&(o===void 0&&(o=t.initial),l===void 0&&(l=t.animate));let u=n?n.initial===!1:!1;u=u||o===!1;const h=u?l:o;return h&&typeof h!="boolean"&&!Wn(h)&&(Array.isArray(h)?h:[h]).forEach(p=>{const m=Mr(e,p);if(!m)return;const{transitionEnd:x,transition:v,...w}=m;for(const S in w){let k=w[S];if(Array.isArray(k)){const C=u?k.length-1:0;k=k[C]}k!==null&&(r[S]=k)}for(const S in x)r[S]=x[S]}),r}const fe=e=>e;class $i{constructor(){this.order=[],this.scheduled=new Set}add(t){if(!this.scheduled.has(t))return this.scheduled.add(t),this.order.push(t),!0}remove(t){const n=this.order.indexOf(t);n!==-1&&(this.order.splice(n,1),this.scheduled.delete(t))}clear(){this.order.length=0,this.scheduled.clear()}}function gm(e){let t=new $i,n=new $i,s=0,r=!1,a=!1;const o=new WeakSet,l={schedule:(c,d=!1,u=!1)=>{const h=u&&r,f=h?t:n;return d&&o.add(c),f.add(c)&&h&&r&&(s=t.order.length),c},cancel:c=>{n.remove(c),o.delete(c)},process:c=>{if(r){a=!0;return}if(r=!0,[t,n]=[n,t],n.clear(),s=t.order.length,s)for(let d=0;d<s;d++){const u=t.order[d];u(c),o.has(u)&&(l.schedule(u),e())}r=!1,a&&(a=!1,l.process(c))}};return l}const mn=["prepare","read","update","preRender","render","postRender"],xm=40;function ym(e,t){let n=!1,s=!0;const r={delta:0,timestamp:0,isProcessing:!1},a=mn.reduce((h,f)=>(h[f]=gm(()=>n=!0),h),{}),o=h=>a[h].process(r),l=()=>{const h=performance.now();n=!1,r.delta=s?1e3/60:Math.max(Math.min(h-r.timestamp,xm),1),r.timestamp=h,r.isProcessing=!0,mn.forEach(o),r.isProcessing=!1,n&&t&&(s=!1,e(l))},c=()=>{n=!0,s=!0,r.isProcessing||e(l)};return{schedule:mn.reduce((h,f)=>{const p=a[f];return h[f]=(m,x=!1,v=!1)=>(n||c(),p.schedule(m,x,v)),h},{}),cancel:h=>mn.forEach(f=>a[f].cancel(h)),state:r,steps:a}}const{schedule:ce,cancel:et,state:ve,steps:gs}=ym(typeof requestAnimationFrame<"u"?requestAnimationFrame:fe,!0),bm={useVisualState:el({scrapeMotionValuesFromProps:Jo,createRenderState:Go,onMount:(e,t,{renderState:n,latestValues:s})=>{ce.read(()=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}}),ce.render(()=>{Pr(n,s,{enableHardwareAcceleration:!1},Ir(t.tagName),e.transformTemplate),Qo(t,n)})}})},wm={useVisualState:el({scrapeMotionValuesFromProps:Er,createRenderState:Ar})};function vm(e,{forwardMotionProps:t=!1},n,s){return{...Cr(e)?bm:wm,preloadedFeatures:n,useRender:dm(t),createVisualElement:s,Component:e}}function Qe(e,t,n,s={passive:!0}){return e.addEventListener(t,n,s),()=>e.removeEventListener(t,n)}const tl=e=>e.pointerType==="mouse"?typeof e.button!="number"||e.button<=0:e.isPrimary!==!1;function Kn(e,t="page"){return{point:{x:e[t+"X"],y:e[t+"Y"]}}}const km=e=>t=>tl(t)&&e(t,Kn(t));function Je(e,t,n,s){return Qe(e,t,km(n),s)}const Sm=(e,t)=>n=>t(e(n)),at=(...e)=>e.reduce(Sm);function nl(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const Hi=nl("dragHorizontal"),qi=nl("dragVertical");function sl(e){let t=!1;if(e==="y")t=qi();else if(e==="x")t=Hi();else{const n=Hi(),s=qi();n&&s?t=()=>{n(),s()}:(n&&n(),s&&s())}return t}function rl(){const e=sl(!0);return e?(e(),!1):!0}class ut{constructor(t){this.isMounted=!1,this.node=t}update(){}}function Wi(e,t){const n="pointer"+(t?"enter":"leave"),s="onHover"+(t?"Start":"End"),r=(a,o)=>{if(a.pointerType==="touch"||rl())return;const l=e.getProps();e.animationState&&l.whileHover&&e.animationState.setActive("whileHover",t),l[s]&&ce.update(()=>l[s](a,o))};return Je(e.current,n,r,{passive:!e.getProps()[s]})}class jm extends ut{mount(){this.unmount=at(Wi(this.node,!0),Wi(this.node,!1))}unmount(){}}class Nm extends ut{constructor(){super(...arguments),this.isActive=!1}onFocus(){let t=!1;try{t=this.node.current.matches(":focus-visible")}catch{t=!0}!t||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=at(Qe(this.node.current,"focus",()=>this.onFocus()),Qe(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}const il=(e,t)=>t?e===t?!0:il(e,t.parentElement):!1;function xs(e,t){if(!t)return;const n=new PointerEvent("pointer"+e);t(n,Kn(n))}class Cm extends ut{constructor(){super(...arguments),this.removeStartListeners=fe,this.removeEndListeners=fe,this.removeAccessibleListeners=fe,this.startPointerPress=(t,n)=>{if(this.isPressing)return;this.removeEndListeners();const s=this.node.getProps(),a=Je(window,"pointerup",(l,c)=>{if(!this.checkPressEnd())return;const{onTap:d,onTapCancel:u,globalTapTarget:h}=this.node.getProps();ce.update(()=>{!h&&!il(this.node.current,l.target)?u&&u(l,c):d&&d(l,c)})},{passive:!(s.onTap||s.onPointerUp)}),o=Je(window,"pointercancel",(l,c)=>this.cancelPress(l,c),{passive:!(s.onTapCancel||s.onPointerCancel)});this.removeEndListeners=at(a,o),this.startPress(t,n)},this.startAccessiblePress=()=>{const t=a=>{if(a.key!=="Enter"||this.isPressing)return;const o=l=>{l.key!=="Enter"||!this.checkPressEnd()||xs("up",(c,d)=>{const{onTap:u}=this.node.getProps();u&&ce.update(()=>u(c,d))})};this.removeEndListeners(),this.removeEndListeners=Qe(this.node.current,"keyup",o),xs("down",(l,c)=>{this.startPress(l,c)})},n=Qe(this.node.current,"keydown",t),s=()=>{this.isPressing&&xs("cancel",(a,o)=>this.cancelPress(a,o))},r=Qe(this.node.current,"blur",s);this.removeAccessibleListeners=at(n,r)}}startPress(t,n){this.isPressing=!0;const{onTapStart:s,whileTap:r}=this.node.getProps();r&&this.node.animationState&&this.node.animationState.setActive("whileTap",!0),s&&ce.update(()=>s(t,n))}checkPressEnd(){return this.removeEndListeners(),this.isPressing=!1,this.node.getProps().whileTap&&this.node.animationState&&this.node.animationState.setActive("whileTap",!1),!rl()}cancelPress(t,n){if(!this.checkPressEnd())return;const{onTapCancel:s}=this.node.getProps();s&&ce.update(()=>s(t,n))}mount(){const t=this.node.getProps(),n=Je(t.globalTapTarget?window:this.node.current,"pointerdown",this.startPointerPress,{passive:!(t.onTapStart||t.onPointerStart)}),s=Qe(this.node.current,"focus",this.startAccessiblePress);this.removeStartListeners=at(n,s)}unmount(){this.removeStartListeners(),this.removeEndListeners(),this.removeAccessibleListeners()}}const Hs=new WeakMap,ys=new WeakMap,Tm=e=>{const t=Hs.get(e.target);t&&t(e)},Am=e=>{e.forEach(Tm)};function Pm({root:e,...t}){const n=e||document;ys.has(n)||ys.set(n,{});const s=ys.get(n),r=JSON.stringify(t);return s[r]||(s[r]=new IntersectionObserver(Am,{root:e,...t})),s[r]}function Im(e,t,n){const s=Pm(t);return Hs.set(e,n),s.observe(e),()=>{Hs.delete(e),s.unobserve(e)}}const Em={some:0,all:1};class Mm extends ut{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:t={}}=this.node.getProps(),{root:n,margin:s,amount:r="some",once:a}=t,o={root:n?n.current:void 0,rootMargin:s,threshold:typeof r=="number"?r:Em[r]},l=c=>{const{isIntersecting:d}=c;if(this.isInView===d||(this.isInView=d,a&&!d&&this.hasEnteredView))return;d&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",d);const{onViewportEnter:u,onViewportLeave:h}=this.node.getProps(),f=d?u:h;f&&f(c)};return Im(this.node.current,o,l)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:t,prevProps:n}=this.node;["amount","margin","root"].some(Dm(t,n))&&this.startObserver()}unmount(){}}function Dm({viewport:e={}},{viewport:t={}}={}){return n=>e[n]!==t[n]}const Lm={inView:{Feature:Mm},tap:{Feature:Cm},focus:{Feature:Nm},hover:{Feature:jm}};function al(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let s=0;s<n;s++)if(t[s]!==e[s])return!1;return!0}function zm(e){const t={};return e.values.forEach((n,s)=>t[s]=n.get()),t}function Rm(e){const t={};return e.values.forEach((n,s)=>t[s]=n.getVelocity()),t}function Xn(e,t,n){const s=e.getProps();return Mr(s,t,n!==void 0?n:s.custom,zm(e),Rm(e))}let Dr=fe;const bt=e=>e*1e3,Ze=e=>e/1e3,Vm={current:!1},ol=e=>Array.isArray(e)&&typeof e[0]=="number";function ll(e){return!!(!e||typeof e=="string"&&cl[e]||ol(e)||Array.isArray(e)&&e.every(ll))}const Bt=([e,t,n,s])=>`cubic-bezier(${e}, ${t}, ${n}, ${s})`,cl={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:Bt([0,.65,.55,1]),circOut:Bt([.55,0,1,.45]),backIn:Bt([.31,.01,.66,-.59]),backOut:Bt([.33,1.53,.69,.99])};function ul(e){if(e)return ol(e)?Bt(e):Array.isArray(e)?e.map(ul):cl[e]}function Fm(e,t,n,{delay:s=0,duration:r,repeat:a=0,repeatType:o="loop",ease:l,times:c}={}){const d={[t]:n};c&&(d.offset=c);const u=ul(l);return Array.isArray(u)&&(d.easing=u),e.animate(d,{delay:s,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:a+1,direction:o==="reverse"?"alternate":"normal"})}function Om(e,{repeat:t,repeatType:n="loop"}){const s=t&&n!=="loop"&&t%2===1?0:e.length-1;return e[s]}const dl=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,Bm=1e-7,_m=12;function Um(e,t,n,s,r){let a,o,l=0;do o=t+(n-t)/2,a=dl(o,s,r)-e,a>0?n=o:t=o;while(Math.abs(a)>Bm&&++l<_m);return o}function an(e,t,n,s){if(e===t&&n===s)return fe;const r=a=>Um(a,0,1,e,n);return a=>a===0||a===1?a:dl(r(a),t,s)}const $m=an(.42,0,1,1),Hm=an(0,0,.58,1),hl=an(.42,0,.58,1),qm=e=>Array.isArray(e)&&typeof e[0]!="number",pl=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,fl=e=>t=>1-e(1-t),Lr=e=>1-Math.sin(Math.acos(e)),ml=fl(Lr),Wm=pl(Lr),gl=an(.33,1.53,.69,.99),zr=fl(gl),Ym=pl(zr),Gm=e=>(e*=2)<1?.5*zr(e):.5*(2-Math.pow(2,-10*(e-1))),Km={linear:fe,easeIn:$m,easeInOut:hl,easeOut:Hm,circIn:Lr,circInOut:Wm,circOut:ml,backIn:zr,backInOut:Ym,backOut:gl,anticipate:Gm},Yi=e=>{if(Array.isArray(e)){Dr(e.length===4);const[t,n,s,r]=e;return an(t,n,s,r)}else if(typeof e=="string")return Km[e];return e},Rr=(e,t)=>n=>!!(sn(n)&&Qf.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),xl=(e,t,n)=>s=>{if(!sn(s))return s;const[r,a,o,l]=s.match(Gn);return{[e]:parseFloat(r),[t]:parseFloat(a),[n]:parseFloat(o),alpha:l!==void 0?parseFloat(l):1}},Xm=e=>ot(0,255,e),bs={...kt,transform:e=>Math.round(Xm(e))},xt={test:Rr("rgb","red"),parse:xl("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:s=1})=>"rgba("+bs.transform(e)+", "+bs.transform(t)+", "+bs.transform(n)+", "+qt(Ht.transform(s))+")"};function Qm(e){let t="",n="",s="",r="";return e.length>5?(t=e.substring(1,3),n=e.substring(3,5),s=e.substring(5,7),r=e.substring(7,9)):(t=e.substring(1,2),n=e.substring(2,3),s=e.substring(3,4),r=e.substring(4,5),t+=t,n+=n,s+=s,r+=r),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(s,16),alpha:r?parseInt(r,16)/255:1}}const qs={test:Rr("#"),parse:Qm,transform:xt.transform},Nt={test:Rr("hsl","hue"),parse:xl("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:s=1})=>"hsla("+Math.round(e)+", "+We.transform(qt(t))+", "+We.transform(qt(n))+", "+qt(Ht.transform(s))+")"},je={test:e=>xt.test(e)||qs.test(e)||Nt.test(e),parse:e=>xt.test(e)?xt.parse(e):Nt.test(e)?Nt.parse(e):qs.parse(e),transform:e=>sn(e)?e:e.hasOwnProperty("red")?xt.transform(e):Nt.transform(e)},pe=(e,t,n)=>-n*e+n*t+e;function ws(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function Jm({hue:e,saturation:t,lightness:n,alpha:s}){e/=360,t/=100,n/=100;let r=0,a=0,o=0;if(!t)r=a=o=n;else{const l=n<.5?n*(1+t):n+t-n*t,c=2*n-l;r=ws(c,l,e+1/3),a=ws(c,l,e),o=ws(c,l,e-1/3)}return{red:Math.round(r*255),green:Math.round(a*255),blue:Math.round(o*255),alpha:s}}const vs=(e,t,n)=>{const s=e*e;return Math.sqrt(Math.max(0,n*(t*t-s)+s))},Zm=[qs,xt,Nt],eg=e=>Zm.find(t=>t.test(e));function Gi(e){const t=eg(e);let n=t.parse(e);return t===Nt&&(n=Jm(n)),n}const yl=(e,t)=>{const n=Gi(e),s=Gi(t),r={...n};return a=>(r.red=vs(n.red,s.red,a),r.green=vs(n.green,s.green,a),r.blue=vs(n.blue,s.blue,a),r.alpha=pe(n.alpha,s.alpha,a),xt.transform(r))};function tg(e){var t,n;return isNaN(e)&&sn(e)&&(((t=e.match(Gn))===null||t===void 0?void 0:t.length)||0)+(((n=e.match(Ho))===null||n===void 0?void 0:n.length)||0)>0}const bl={regex:Kf,countKey:"Vars",token:"${v}",parse:fe},wl={regex:Ho,countKey:"Colors",token:"${c}",parse:je.parse},vl={regex:Gn,countKey:"Numbers",token:"${n}",parse:kt.parse};function ks(e,{regex:t,countKey:n,token:s,parse:r}){const a=e.tokenised.match(t);a&&(e["num"+n]=a.length,e.tokenised=e.tokenised.replace(t,s),e.values.push(...a.map(r)))}function En(e){const t=e.toString(),n={value:t,tokenised:t,values:[],numVars:0,numColors:0,numNumbers:0};return n.value.includes("var(--")&&ks(n,bl),ks(n,wl),ks(n,vl),n}function kl(e){return En(e).values}function Sl(e){const{values:t,numColors:n,numVars:s,tokenised:r}=En(e),a=t.length;return o=>{let l=r;for(let c=0;c<a;c++)c<s?l=l.replace(bl.token,o[c]):c<s+n?l=l.replace(wl.token,je.transform(o[c])):l=l.replace(vl.token,qt(o[c]));return l}}const ng=e=>typeof e=="number"?0:e;function sg(e){const t=kl(e);return Sl(e)(t.map(ng))}const lt={test:tg,parse:kl,createTransformer:Sl,getAnimatableNone:sg},jl=(e,t)=>n=>`${n>0?t:e}`;function Nl(e,t){return typeof e=="number"?n=>pe(e,t,n):je.test(e)?yl(e,t):e.startsWith("var(")?jl(e,t):Tl(e,t)}const Cl=(e,t)=>{const n=[...e],s=n.length,r=e.map((a,o)=>Nl(a,t[o]));return a=>{for(let o=0;o<s;o++)n[o]=r[o](a);return n}},rg=(e,t)=>{const n={...e,...t},s={};for(const r in n)e[r]!==void 0&&t[r]!==void 0&&(s[r]=Nl(e[r],t[r]));return r=>{for(const a in s)n[a]=s[a](r);return n}},Tl=(e,t)=>{const n=lt.createTransformer(t),s=En(e),r=En(t);return s.numVars===r.numVars&&s.numColors===r.numColors&&s.numNumbers>=r.numNumbers?at(Cl(s.values,r.values),n):jl(e,t)},Jt=(e,t,n)=>{const s=t-e;return s===0?1:(n-e)/s},Ki=(e,t)=>n=>pe(e,t,n);function ig(e){return typeof e=="number"?Ki:typeof e=="string"?je.test(e)?yl:Tl:Array.isArray(e)?Cl:typeof e=="object"?rg:Ki}function ag(e,t,n){const s=[],r=n||ig(e[0]),a=e.length-1;for(let o=0;o<a;o++){let l=r(e[o],e[o+1]);if(t){const c=Array.isArray(t)?t[o]||fe:t;l=at(c,l)}s.push(l)}return s}function Al(e,t,{clamp:n=!0,ease:s,mixer:r}={}){const a=e.length;if(Dr(a===t.length),a===1)return()=>t[0];e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const o=ag(t,s,r),l=o.length,c=d=>{let u=0;if(l>1)for(;u<e.length-2&&!(d<e[u+1]);u++);const h=Jt(e[u],e[u+1],d);return o[u](h)};return n?d=>c(ot(e[0],e[a-1],d)):c}function og(e,t){const n=e[e.length-1];for(let s=1;s<=t;s++){const r=Jt(0,t,s);e.push(pe(n,1,r))}}function lg(e){const t=[0];return og(t,e.length-1),t}function cg(e,t){return e.map(n=>n*t)}function ug(e,t){return e.map(()=>t||hl).splice(0,e.length-1)}function Mn({duration:e=300,keyframes:t,times:n,ease:s="easeInOut"}){const r=qm(s)?s.map(Yi):Yi(s),a={done:!1,value:t[0]},o=cg(n&&n.length===t.length?n:lg(t),e),l=Al(o,t,{ease:Array.isArray(r)?r:ug(t,r)});return{calculatedDuration:e,next:c=>(a.value=l(c),a.done=c>=e,a)}}function Pl(e,t){return t?e*(1e3/t):0}const dg=5;function Il(e,t,n){const s=Math.max(t-dg,0);return Pl(n-e(s),t-s)}const Ss=.001,hg=.01,pg=10,fg=.05,mg=1;function gg({duration:e=800,bounce:t=.25,velocity:n=0,mass:s=1}){let r,a,o=1-t;o=ot(fg,mg,o),e=ot(hg,pg,Ze(e)),o<1?(r=d=>{const u=d*o,h=u*e,f=u-n,p=Ws(d,o),m=Math.exp(-h);return Ss-f/p*m},a=d=>{const h=d*o*e,f=h*n+n,p=Math.pow(o,2)*Math.pow(d,2)*e,m=Math.exp(-h),x=Ws(Math.pow(d,2),o);return(-r(d)+Ss>0?-1:1)*((f-p)*m)/x}):(r=d=>{const u=Math.exp(-d*e),h=(d-n)*e+1;return-Ss+u*h},a=d=>{const u=Math.exp(-d*e),h=(n-d)*(e*e);return u*h});const l=5/e,c=yg(r,a,l);if(e=bt(e),isNaN(c))return{stiffness:100,damping:10,duration:e};{const d=Math.pow(c,2)*s;return{stiffness:d,damping:o*2*Math.sqrt(s*d),duration:e}}}const xg=12;function yg(e,t,n){let s=n;for(let r=1;r<xg;r++)s=s-e(s)/t(s);return s}function Ws(e,t){return e*Math.sqrt(1-t*t)}const bg=["duration","bounce"],wg=["stiffness","damping","mass"];function Xi(e,t){return t.some(n=>e[n]!==void 0)}function vg(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Xi(e,wg)&&Xi(e,bg)){const n=gg(e);t={...t,...n,mass:1},t.isResolvedFromDuration=!0}return t}function El({keyframes:e,restDelta:t,restSpeed:n,...s}){const r=e[0],a=e[e.length-1],o={done:!1,value:r},{stiffness:l,damping:c,mass:d,duration:u,velocity:h,isResolvedFromDuration:f}=vg({...s,velocity:-Ze(s.velocity||0)}),p=h||0,m=c/(2*Math.sqrt(l*d)),x=a-r,v=Ze(Math.sqrt(l/d)),w=Math.abs(x)<5;n||(n=w?.01:2),t||(t=w?.005:.5);let S;if(m<1){const k=Ws(v,m);S=C=>{const M=Math.exp(-m*v*C);return a-M*((p+m*v*x)/k*Math.sin(k*C)+x*Math.cos(k*C))}}else if(m===1)S=k=>a-Math.exp(-v*k)*(x+(p+v*x)*k);else{const k=v*Math.sqrt(m*m-1);S=C=>{const M=Math.exp(-m*v*C),j=Math.min(k*C,300);return a-M*((p+m*v*x)*Math.sinh(j)+k*x*Math.cosh(j))/k}}return{calculatedDuration:f&&u||null,next:k=>{const C=S(k);if(f)o.done=k>=u;else{let M=p;k!==0&&(m<1?M=Il(S,k,C):M=0);const j=Math.abs(M)<=n,A=Math.abs(a-C)<=t;o.done=j&&A}return o.value=o.done?a:C,o}}}function Qi({keyframes:e,velocity:t=0,power:n=.8,timeConstant:s=325,bounceDamping:r=10,bounceStiffness:a=500,modifyTarget:o,min:l,max:c,restDelta:d=.5,restSpeed:u}){const h=e[0],f={done:!1,value:h},p=D=>l!==void 0&&D<l||c!==void 0&&D>c,m=D=>l===void 0?c:c===void 0||Math.abs(l-D)<Math.abs(c-D)?l:c;let x=n*t;const v=h+x,w=o===void 0?v:o(v);w!==v&&(x=w-h);const S=D=>-x*Math.exp(-D/s),k=D=>w+S(D),C=D=>{const V=S(D),E=k(D);f.done=Math.abs(V)<=d,f.value=f.done?w:E};let M,j;const A=D=>{p(f.value)&&(M=D,j=El({keyframes:[f.value,m(f.value)],velocity:Il(k,D,f.value),damping:r,stiffness:a,restDelta:d,restSpeed:u}))};return A(0),{calculatedDuration:null,next:D=>{let V=!1;return!j&&M===void 0&&(V=!0,C(D),A(D)),M!==void 0&&D>M?j.next(D-M):(!V&&C(D),f)}}}const kg=e=>{const t=({timestamp:n})=>e(n);return{start:()=>ce.update(t,!0),stop:()=>et(t),now:()=>ve.isProcessing?ve.timestamp:performance.now()}},Ji=2e4;function Zi(e){let t=0;const n=50;let s=e.next(t);for(;!s.done&&t<Ji;)t+=n,s=e.next(t);return t>=Ji?1/0:t}const Sg={decay:Qi,inertia:Qi,tween:Mn,keyframes:Mn,spring:El};function Dn({autoplay:e=!0,delay:t=0,driver:n=kg,keyframes:s,type:r="keyframes",repeat:a=0,repeatDelay:o=0,repeatType:l="loop",onPlay:c,onStop:d,onComplete:u,onUpdate:h,...f}){let p=1,m=!1,x,v;const w=()=>{v=new Promise(L=>{x=L})};w();let S;const k=Sg[r]||Mn;let C;k!==Mn&&typeof s[0]!="number"&&(C=Al([0,100],s,{clamp:!1}),s=[0,100]);const M=k({...f,keyframes:s});let j;l==="mirror"&&(j=k({...f,keyframes:[...s].reverse(),velocity:-(f.velocity||0)}));let A="idle",D=null,V=null,E=null;M.calculatedDuration===null&&a&&(M.calculatedDuration=Zi(M));const{calculatedDuration:T}=M;let R=1/0,_=1/0;T!==null&&(R=T+o,_=R*(a+1)-o);let H=0;const U=L=>{if(V===null)return;p>0&&(V=Math.min(V,L)),p<0&&(V=Math.min(L-_/p,V)),D!==null?H=D:H=Math.round(L-V)*p;const X=H-t*(p>=0?1:-1),g=p>=0?X<0:X>_;H=Math.max(X,0),A==="finished"&&D===null&&(H=_);let O=H,se=M;if(a){const ae=Math.min(H,_)/R;let ie=Math.floor(ae),he=ae%1;!he&&ae>=1&&(he=1),he===1&&ie--,ie=Math.min(ie,a+1),!!(ie%2)&&(l==="reverse"?(he=1-he,o&&(he-=o/R)):l==="mirror"&&(se=j)),O=ot(0,1,he)*R}const ee=g?{done:!1,value:s[0]}:se.next(O);C&&(ee.value=C(ee.value));let{done:we}=ee;!g&&T!==null&&(we=p>=0?H>=_:H<=0);const de=D===null&&(A==="finished"||A==="running"&&we);return h&&h(ee.value),de&&F(),ee},K=()=>{S&&S.stop(),S=void 0},Z=()=>{A="idle",K(),x(),w(),V=E=null},F=()=>{A="finished",u&&u(),K(),x()},I=()=>{if(m)return;S||(S=n(U));const L=S.now();c&&c(),D!==null?V=L-D:(!V||A==="finished")&&(V=L),A==="finished"&&w(),E=V,D=null,A="running",S.start()};e&&I();const y={then(L,X){return v.then(L,X)},get time(){return Ze(H)},set time(L){L=bt(L),H=L,D!==null||!S||p===0?D=L:V=S.now()-L/p},get duration(){const L=M.calculatedDuration===null?Zi(M):M.calculatedDuration;return Ze(L)},get speed(){return p},set speed(L){L===p||!S||(p=L,y.time=Ze(H))},get state(){return A},play:I,pause:()=>{A="paused",D=H},stop:()=>{m=!0,A!=="idle"&&(A="idle",d&&d(),Z())},cancel:()=>{E!==null&&U(E),Z()},complete:()=>{A="finished"},sample:L=>(V=0,U(L))};return y}function jg(e){let t;return()=>(t===void 0&&(t=e()),t)}const Ng=jg(()=>Object.hasOwnProperty.call(Element.prototype,"animate")),Cg=new Set(["opacity","clipPath","filter","transform","backgroundColor"]),gn=10,Tg=2e4,Ag=(e,t)=>t.type==="spring"||e==="backgroundColor"||!ll(t.ease);function Pg(e,t,{onUpdate:n,onComplete:s,...r}){if(!(Ng()&&Cg.has(t)&&!r.repeatDelay&&r.repeatType!=="mirror"&&r.damping!==0&&r.type!=="inertia"))return!1;let o=!1,l,c,d=!1;const u=()=>{c=new Promise(k=>{l=k})};u();let{keyframes:h,duration:f=300,ease:p,times:m}=r;if(Ag(t,r)){const k=Dn({...r,repeat:0,delay:0});let C={done:!1,value:h[0]};const M=[];let j=0;for(;!C.done&&j<Tg;)C=k.sample(j),M.push(C.value),j+=gn;m=void 0,h=M,f=j-gn,p="linear"}const x=Fm(e.owner.current,t,h,{...r,duration:f,ease:p,times:m}),v=()=>{d=!1,x.cancel()},w=()=>{d=!0,ce.update(v),l(),u()};return x.onfinish=()=>{d||(e.set(Om(h,r)),s&&s(),w())},{then(k,C){return c.then(k,C)},attachTimeline(k){return x.timeline=k,x.onfinish=null,fe},get time(){return Ze(x.currentTime||0)},set time(k){x.currentTime=bt(k)},get speed(){return x.playbackRate},set speed(k){x.playbackRate=k},get duration(){return Ze(f)},play:()=>{o||(x.play(),et(v))},pause:()=>x.pause(),stop:()=>{if(o=!0,x.playState==="idle")return;const{currentTime:k}=x;if(k){const C=Dn({...r,autoplay:!1});e.setWithVelocity(C.sample(k-gn).value,C.sample(k).value,gn)}w()},complete:()=>{d||x.finish()},cancel:w}}function Ig({keyframes:e,delay:t,onUpdate:n,onComplete:s}){const r=()=>(n&&n(e[e.length-1]),s&&s(),{time:0,speed:1,duration:0,play:fe,pause:fe,stop:fe,then:a=>(a(),Promise.resolve()),cancel:fe,complete:fe});return t?Dn({keyframes:[0,1],duration:0,delay:t,onComplete:r}):r()}const Eg={type:"spring",stiffness:500,damping:25,restSpeed:10},Mg=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),Dg={type:"keyframes",duration:.8},Lg={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},zg=(e,{keyframes:t})=>t.length>2?Dg:vt.has(e)?e.startsWith("scale")?Mg(t[1]):Eg:Lg,Ys=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(lt.test(t)||t==="0")&&!t.startsWith("url(")),Rg=new Set(["brightness","contrast","saturate","opacity"]);function Vg(e){const[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[s]=n.match(Gn)||[];if(!s)return e;const r=n.replace(s,"");let a=Rg.has(t)?1:0;return s!==n&&(a*=100),t+"("+a+r+")"}const Fg=/([a-z-]*)\(.*?\)/g,Gs={...lt,getAnimatableNone:e=>{const t=e.match(Fg);return t?t.map(Vg).join(" "):e}},Og={...qo,color:je,backgroundColor:je,outlineColor:je,fill:je,stroke:je,borderColor:je,borderTopColor:je,borderRightColor:je,borderBottomColor:je,borderLeftColor:je,filter:Gs,WebkitFilter:Gs},Vr=e=>Og[e];function Ml(e,t){let n=Vr(e);return n!==Gs&&(n=lt),n.getAnimatableNone?n.getAnimatableNone(t):void 0}const Dl=e=>/^0[^.\s]+$/.test(e);function Bg(e){if(typeof e=="number")return e===0;if(e!==null)return e==="none"||e==="0"||Dl(e)}function _g(e,t,n,s){const r=Ys(t,n);let a;Array.isArray(n)?a=[...n]:a=[null,n];const o=s.from!==void 0?s.from:e.get();let l;const c=[];for(let d=0;d<a.length;d++)a[d]===null&&(a[d]=d===0?o:a[d-1]),Bg(a[d])&&c.push(d),typeof a[d]=="string"&&a[d]!=="none"&&a[d]!=="0"&&(l=a[d]);if(r&&c.length&&l)for(let d=0;d<c.length;d++){const u=c[d];a[u]=Ml(t,l)}return a}function Ug({when:e,delay:t,delayChildren:n,staggerChildren:s,staggerDirection:r,repeat:a,repeatType:o,repeatDelay:l,from:c,elapsed:d,...u}){return!!Object.keys(u).length}function Fr(e,t){return e[t]||e.default||e}const $g={skipAnimations:!1},Or=(e,t,n,s={})=>r=>{const a=Fr(s,e)||{},o=a.delay||s.delay||0;let{elapsed:l=0}=s;l=l-bt(o);const c=_g(t,e,n,a),d=c[0],u=c[c.length-1],h=Ys(e,d),f=Ys(e,u);let p={keyframes:c,velocity:t.getVelocity(),ease:"easeOut",...a,delay:-l,onUpdate:m=>{t.set(m),a.onUpdate&&a.onUpdate(m)},onComplete:()=>{r(),a.onComplete&&a.onComplete()}};if(Ug(a)||(p={...p,...zg(e,p)}),p.duration&&(p.duration=bt(p.duration)),p.repeatDelay&&(p.repeatDelay=bt(p.repeatDelay)),!h||!f||Vm.current||a.type===!1||$g.skipAnimations)return Ig(p);if(!s.isHandoff&&t.owner&&t.owner.current instanceof HTMLElement&&!t.owner.getProps().onUpdate){const m=Pg(t,e,p);if(m)return m}return Dn(p)};function Ln(e){return!!(Ee(e)&&e.add)}const Ll=e=>/^\-?\d*\.?\d+$/.test(e);function Br(e,t){e.indexOf(t)===-1&&e.push(t)}function _r(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Ur{constructor(){this.subscriptions=[]}add(t){return Br(this.subscriptions,t),()=>_r(this.subscriptions,t)}notify(t,n,s){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](t,n,s);else for(let a=0;a<r;a++){const o=this.subscriptions[a];o&&o(t,n,s)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const Hg=e=>!isNaN(parseFloat(e));class qg{constructor(t,n={}){this.version="10.18.0",this.timeDelta=0,this.lastUpdated=0,this.canTrackVelocity=!1,this.events={},this.updateAndNotify=(s,r=!0)=>{this.prev=this.current,this.current=s;const{delta:a,timestamp:o}=ve;this.lastUpdated!==o&&(this.timeDelta=a,this.lastUpdated=o,ce.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.events.change&&this.events.change.notify(this.current),this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()),r&&this.events.renderRequest&&this.events.renderRequest.notify(this.current)},this.scheduleVelocityCheck=()=>ce.postRender(this.velocityCheck),this.velocityCheck=({timestamp:s})=>{s!==this.lastUpdated&&(this.prev=this.current,this.events.velocityChange&&this.events.velocityChange.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=Hg(this.current),this.owner=n.owner}onChange(t){return this.on("change",t)}on(t,n){this.events[t]||(this.events[t]=new Ur);const s=this.events[t].add(n);return t==="change"?()=>{s(),ce.read(()=>{this.events.change.getSize()||this.stop()})}:s}clearListeners(){for(const t in this.events)this.events[t].clear()}attach(t,n){this.passiveEffect=t,this.stopPassiveEffect=n}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}setWithVelocity(t,n,s){this.set(n),this.prev=t,this.timeDelta=s}jump(t){this.updateAndNotify(t),this.prev=t,this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?Pl(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=t(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function Et(e,t){return new qg(e,t)}const zl=e=>t=>t.test(e),Wg={test:e=>e==="auto",parse:e=>e},Rl=[kt,W,We,rt,Zf,Jf,Wg],Ft=e=>Rl.find(zl(e)),Yg=[...Rl,je,lt],Gg=e=>Yg.find(zl(e));function Kg(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Et(n))}function Xg(e,t){const n=Xn(e,t);let{transitionEnd:s={},transition:r={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...s};for(const o in a){const l=pm(a[o]);Kg(e,o,l)}}function Qg(e,t,n){var s,r;const a=Object.keys(t).filter(l=>!e.hasValue(l)),o=a.length;if(o)for(let l=0;l<o;l++){const c=a[l],d=t[c];let u=null;Array.isArray(d)&&(u=d[0]),u===null&&(u=(r=(s=n[c])!==null&&s!==void 0?s:e.readValue(c))!==null&&r!==void 0?r:t[c]),u!=null&&(typeof u=="string"&&(Ll(u)||Dl(u))?u=parseFloat(u):!Gg(u)&&lt.test(d)&&(u=Ml(c,d)),e.addValue(c,Et(u,{owner:e})),n[c]===void 0&&(n[c]=u),u!==null&&e.setBaseTarget(c,u))}}function Jg(e,t){return t?(t[e]||t.default||t).from:void 0}function Zg(e,t,n){const s={};for(const r in e){const a=Jg(r,t);if(a!==void 0)s[r]=a;else{const o=n.getValue(r);o&&(s[r]=o.get())}}return s}function ex({protectedKeys:e,needsAnimating:t},n){const s=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,s}function tx(e,t){const n=e.get();if(Array.isArray(t)){for(let s=0;s<t.length;s++)if(t[s]!==n)return!0}else return n!==t}function Vl(e,t,{delay:n=0,transitionOverride:s,type:r}={}){let{transition:a=e.getDefaultTransition(),transitionEnd:o,...l}=e.makeTargetAnimatable(t);const c=e.getValue("willChange");s&&(a=s);const d=[],u=r&&e.animationState&&e.animationState.getState()[r];for(const h in l){const f=e.getValue(h),p=l[h];if(!f||p===void 0||u&&ex(u,h))continue;const m={delay:n,elapsed:0,...Fr(a||{},h)};if(window.HandoffAppearAnimations){const w=e.getProps()[Fo];if(w){const S=window.HandoffAppearAnimations(w,h,f,ce);S!==null&&(m.elapsed=S,m.isHandoff=!0)}}let x=!m.isHandoff&&!tx(f,p);if(m.type==="spring"&&(f.getVelocity()||m.velocity)&&(x=!1),f.animation&&(x=!1),x)continue;f.start(Or(h,f,p,e.shouldReduceMotion&&vt.has(h)?{type:!1}:m));const v=f.animation;Ln(c)&&(c.add(h),v.then(()=>c.remove(h))),d.push(v)}return o&&Promise.all(d).then(()=>{o&&Xg(e,o)}),d}function Ks(e,t,n={}){const s=Xn(e,t,n.custom);let{transition:r=e.getDefaultTransition()||{}}=s||{};n.transitionOverride&&(r=n.transitionOverride);const a=s?()=>Promise.all(Vl(e,s,n)):()=>Promise.resolve(),o=e.variantChildren&&e.variantChildren.size?(c=0)=>{const{delayChildren:d=0,staggerChildren:u,staggerDirection:h}=r;return nx(e,t,d+c,u,h,n)}:()=>Promise.resolve(),{when:l}=r;if(l){const[c,d]=l==="beforeChildren"?[a,o]:[o,a];return c().then(()=>d())}else return Promise.all([a(),o(n.delay)])}function nx(e,t,n=0,s=0,r=1,a){const o=[],l=(e.variantChildren.size-1)*s,c=r===1?(d=0)=>d*s:(d=0)=>l-d*s;return Array.from(e.variantChildren).sort(sx).forEach((d,u)=>{d.notify("AnimationStart",t),o.push(Ks(d,t,{...a,delay:n+c(u)}).then(()=>d.notify("AnimationComplete",t)))}),Promise.all(o)}function sx(e,t){return e.sortNodePosition(t)}function rx(e,t,n={}){e.notify("AnimationStart",t);let s;if(Array.isArray(t)){const r=t.map(a=>Ks(e,a,n));s=Promise.all(r)}else if(typeof t=="string")s=Ks(e,t,n);else{const r=typeof t=="function"?Xn(e,t,n.custom):t;s=Promise.all(Vl(e,r,n))}return s.then(()=>e.notify("AnimationComplete",t))}const ix=[...Sr].reverse(),ax=Sr.length;function ox(e){return t=>Promise.all(t.map(({animation:n,options:s})=>rx(e,n,s)))}function lx(e){let t=ox(e);const n=ux();let s=!0;const r=(c,d)=>{const u=Xn(e,d);if(u){const{transition:h,transitionEnd:f,...p}=u;c={...c,...p,...f}}return c};function a(c){t=c(e)}function o(c,d){const u=e.getProps(),h=e.getVariantContext(!0)||{},f=[],p=new Set;let m={},x=1/0;for(let w=0;w<ax;w++){const S=ix[w],k=n[S],C=u[S]!==void 0?u[S]:h[S],M=Xt(C),j=S===d?k.isActive:null;j===!1&&(x=w);let A=C===h[S]&&C!==u[S]&&M;if(A&&s&&e.manuallyAnimateOnMount&&(A=!1),k.protectedKeys={...m},!k.isActive&&j===null||!C&&!k.prevProp||Wn(C)||typeof C=="boolean")continue;let V=cx(k.prevProp,C)||S===d&&k.isActive&&!A&&M||w>x&&M,E=!1;const T=Array.isArray(C)?C:[C];let R=T.reduce(r,{});j===!1&&(R={});const{prevResolvedValues:_={}}=k,H={..._,...R},U=K=>{V=!0,p.has(K)&&(E=!0,p.delete(K)),k.needsAnimating[K]=!0};for(const K in H){const Z=R[K],F=_[K];if(m.hasOwnProperty(K))continue;let I=!1;In(Z)&&In(F)?I=!al(Z,F):I=Z!==F,I?Z!==void 0?U(K):p.add(K):Z!==void 0&&p.has(K)?U(K):k.protectedKeys[K]=!0}k.prevProp=C,k.prevResolvedValues=R,k.isActive&&(m={...m,...R}),s&&e.blockInitialAnimation&&(V=!1),V&&(!A||E)&&f.push(...T.map(K=>({animation:K,options:{type:S,...c}})))}if(p.size){const w={};p.forEach(S=>{const k=e.getBaseTarget(S);k!==void 0&&(w[S]=k)}),f.push({animation:w})}let v=!!f.length;return s&&(u.initial===!1||u.initial===u.animate)&&!e.manuallyAnimateOnMount&&(v=!1),s=!1,v?t(f):Promise.resolve()}function l(c,d,u){var h;if(n[c].isActive===d)return Promise.resolve();(h=e.variantChildren)===null||h===void 0||h.forEach(p=>{var m;return(m=p.animationState)===null||m===void 0?void 0:m.setActive(c,d)}),n[c].isActive=d;const f=o(u,c);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:o,setActive:l,setAnimateFunction:a,getState:()=>n}}function cx(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!al(t,e):!1}function ht(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ux(){return{animate:ht(!0),whileInView:ht(),whileHover:ht(),whileTap:ht(),whileDrag:ht(),whileFocus:ht(),exit:ht()}}class dx extends ut{constructor(t){super(t),t.animationState||(t.animationState=lx(t))}updateAnimationControlsSubscription(){const{animate:t}=this.node.getProps();this.unmount(),Wn(t)&&(this.unmount=t.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:t}=this.node.getProps(),{animate:n}=this.node.prevProps||{};t!==n&&this.updateAnimationControlsSubscription()}unmount(){}}let hx=0;class px extends ut{constructor(){super(...arguments),this.id=hx++}update(){if(!this.node.presenceContext)return;const{isPresent:t,onExitComplete:n,custom:s}=this.node.presenceContext,{isPresent:r}=this.node.prevPresenceContext||{};if(!this.node.animationState||t===r)return;const a=this.node.animationState.setActive("exit",!t,{custom:s??this.node.getProps().custom});n&&!t&&a.then(()=>n(this.id))}mount(){const{register:t}=this.node.presenceContext||{};t&&(this.unmount=t(this.id))}unmount(){}}const fx={animation:{Feature:dx},exit:{Feature:px}},ea=(e,t)=>Math.abs(e-t);function mx(e,t){const n=ea(e.x,t.x),s=ea(e.y,t.y);return Math.sqrt(n**2+s**2)}class Fl{constructor(t,n,{transformPagePoint:s,contextWindow:r,dragSnapToOrigin:a=!1}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const h=Ns(this.lastMoveEventInfo,this.history),f=this.startEvent!==null,p=mx(h.offset,{x:0,y:0})>=3;if(!f&&!p)return;const{point:m}=h,{timestamp:x}=ve;this.history.push({...m,timestamp:x});const{onStart:v,onMove:w}=this.handlers;f||(v&&v(this.lastMoveEvent,h),this.startEvent=this.lastMoveEvent),w&&w(this.lastMoveEvent,h)},this.handlePointerMove=(h,f)=>{this.lastMoveEvent=h,this.lastMoveEventInfo=js(f,this.transformPagePoint),ce.update(this.updatePoint,!0)},this.handlePointerUp=(h,f)=>{this.end();const{onEnd:p,onSessionEnd:m,resumeAnimation:x}=this.handlers;if(this.dragSnapToOrigin&&x&&x(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=Ns(h.type==="pointercancel"?this.lastMoveEventInfo:js(f,this.transformPagePoint),this.history);this.startEvent&&p&&p(h,v),m&&m(h,v)},!tl(t))return;this.dragSnapToOrigin=a,this.handlers=n,this.transformPagePoint=s,this.contextWindow=r||window;const o=Kn(t),l=js(o,this.transformPagePoint),{point:c}=l,{timestamp:d}=ve;this.history=[{...c,timestamp:d}];const{onSessionStart:u}=n;u&&u(t,Ns(l,this.history)),this.removeListeners=at(Je(this.contextWindow,"pointermove",this.handlePointerMove),Je(this.contextWindow,"pointerup",this.handlePointerUp),Je(this.contextWindow,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),et(this.updatePoint)}}function js(e,t){return t?{point:t(e.point)}:e}function ta(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Ns({point:e},t){return{point:e,delta:ta(e,Ol(t)),offset:ta(e,gx(t)),velocity:xx(t,.1)}}function gx(e){return e[0]}function Ol(e){return e[e.length-1]}function xx(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,s=null;const r=Ol(e);for(;n>=0&&(s=e[n],!(r.timestamp-s.timestamp>bt(t)));)n--;if(!s)return{x:0,y:0};const a=Ze(r.timestamp-s.timestamp);if(a===0)return{x:0,y:0};const o={x:(r.x-s.x)/a,y:(r.y-s.y)/a};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function Re(e){return e.max-e.min}function Xs(e,t=0,n=.01){return Math.abs(e-t)<=n}function na(e,t,n,s=.5){e.origin=s,e.originPoint=pe(t.min,t.max,e.origin),e.scale=Re(n)/Re(t),(Xs(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=pe(n.min,n.max,e.origin)-e.originPoint,(Xs(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Wt(e,t,n,s){na(e.x,t.x,n.x,s?s.originX:void 0),na(e.y,t.y,n.y,s?s.originY:void 0)}function sa(e,t,n){e.min=n.min+t.min,e.max=e.min+Re(t)}function yx(e,t,n){sa(e.x,t.x,n.x),sa(e.y,t.y,n.y)}function ra(e,t,n){e.min=t.min-n.min,e.max=e.min+Re(t)}function Yt(e,t,n){ra(e.x,t.x,n.x),ra(e.y,t.y,n.y)}function bx(e,{min:t,max:n},s){return t!==void 0&&e<t?e=s?pe(t,e,s.min):Math.max(e,t):n!==void 0&&e>n&&(e=s?pe(n,e,s.max):Math.min(e,n)),e}function ia(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function wx(e,{top:t,left:n,bottom:s,right:r}){return{x:ia(e.x,n,r),y:ia(e.y,t,s)}}function aa(e,t){let n=t.min-e.min,s=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,s]=[s,n]),{min:n,max:s}}function vx(e,t){return{x:aa(e.x,t.x),y:aa(e.y,t.y)}}function kx(e,t){let n=.5;const s=Re(e),r=Re(t);return r>s?n=Jt(t.min,t.max-s,e.min):s>r&&(n=Jt(e.min,e.max-r,t.min)),ot(0,1,n)}function Sx(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const Qs=.35;function jx(e=Qs){return e===!1?e=0:e===!0&&(e=Qs),{x:oa(e,"left","right"),y:oa(e,"top","bottom")}}function oa(e,t,n){return{min:la(e,t),max:la(e,n)}}function la(e,t){return typeof e=="number"?e:e[t]||0}const ca=()=>({translate:0,scale:1,origin:0,originPoint:0}),Ct=()=>({x:ca(),y:ca()}),ua=()=>({min:0,max:0}),me=()=>({x:ua(),y:ua()});function Fe(e){return[e("x"),e("y")]}function Bl({top:e,left:t,right:n,bottom:s}){return{x:{min:t,max:n},y:{min:e,max:s}}}function Nx({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function Cx(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),s=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:s.y,right:s.x}}function Cs(e){return e===void 0||e===1}function Js({scale:e,scaleX:t,scaleY:n}){return!Cs(e)||!Cs(t)||!Cs(n)}function pt(e){return Js(e)||_l(e)||e.z||e.rotate||e.rotateX||e.rotateY}function _l(e){return da(e.x)||da(e.y)}function da(e){return e&&e!=="0%"}function zn(e,t,n){const s=e-n,r=t*s;return n+r}function ha(e,t,n,s,r){return r!==void 0&&(e=zn(e,r,s)),zn(e,n,s)+t}function Zs(e,t=0,n=1,s,r){e.min=ha(e.min,t,n,s,r),e.max=ha(e.max,t,n,s,r)}function Ul(e,{x:t,y:n}){Zs(e.x,t.translate,t.scale,t.originPoint),Zs(e.y,n.translate,n.scale,n.originPoint)}function Tx(e,t,n,s=!1){const r=n.length;if(!r)return;t.x=t.y=1;let a,o;for(let l=0;l<r;l++){a=n[l],o=a.projectionDelta;const c=a.instance;c&&c.style&&c.style.display==="contents"||(s&&a.options.layoutScroll&&a.scroll&&a!==a.root&&Tt(e,{x:-a.scroll.offset.x,y:-a.scroll.offset.y}),o&&(t.x*=o.x.scale,t.y*=o.y.scale,Ul(e,o)),s&&pt(a.latestValues)&&Tt(e,a.latestValues))}t.x=pa(t.x),t.y=pa(t.y)}function pa(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function it(e,t){e.min=e.min+t,e.max=e.max+t}function fa(e,t,[n,s,r]){const a=t[r]!==void 0?t[r]:.5,o=pe(e.min,e.max,a);Zs(e,t[n],t[s],o,t.scale)}const Ax=["x","scaleX","originX"],Px=["y","scaleY","originY"];function Tt(e,t){fa(e.x,t,Ax),fa(e.y,t,Px)}function $l(e,t){return Bl(Cx(e.getBoundingClientRect(),t))}function Ix(e,t,n){const s=$l(e,n),{scroll:r}=t;return r&&(it(s.x,r.offset.x),it(s.y,r.offset.y)),s}const Hl=({current:e})=>e?e.ownerDocument.defaultView:null,Ex=new WeakMap;class Mx{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=me(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){const{presenceContext:s}=this.visualElement;if(s&&s.isPresent===!1)return;const r=u=>{const{dragSnapToOrigin:h}=this.getProps();h?this.pauseAnimation():this.stopAnimation(),n&&this.snapToCursor(Kn(u,"page").point)},a=(u,h)=>{const{drag:f,dragPropagation:p,onDragStart:m}=this.getProps();if(f&&!p&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=sl(f),!this.openGlobalLock))return;this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Fe(v=>{let w=this.getAxisMotionValue(v).get()||0;if(We.test(w)){const{projection:S}=this.visualElement;if(S&&S.layout){const k=S.layout.layoutBox[v];k&&(w=Re(k)*(parseFloat(w)/100))}}this.originPoint[v]=w}),m&&ce.update(()=>m(u,h),!1,!0);const{animationState:x}=this.visualElement;x&&x.setActive("whileDrag",!0)},o=(u,h)=>{const{dragPropagation:f,dragDirectionLock:p,onDirectionLock:m,onDrag:x}=this.getProps();if(!f&&!this.openGlobalLock)return;const{offset:v}=h;if(p&&this.currentDirection===null){this.currentDirection=Dx(v),this.currentDirection!==null&&m&&m(this.currentDirection);return}this.updateAxis("x",h.point,v),this.updateAxis("y",h.point,v),this.visualElement.render(),x&&x(u,h)},l=(u,h)=>this.stop(u,h),c=()=>Fe(u=>{var h;return this.getAnimationState(u)==="paused"&&((h=this.getAxisMotionValue(u).animation)===null||h===void 0?void 0:h.play())}),{dragSnapToOrigin:d}=this.getProps();this.panSession=new Fl(t,{onSessionStart:r,onStart:a,onMove:o,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:d,contextWindow:Hl(this.visualElement)})}stop(t,n){const s=this.isDragging;if(this.cancel(),!s)return;const{velocity:r}=n;this.startAnimation(r);const{onDragEnd:a}=this.getProps();a&&ce.update(()=>a(t,n))}cancel(){this.isDragging=!1;const{projection:t,animationState:n}=this.visualElement;t&&(t.isAnimationBlocked=!1),this.panSession&&this.panSession.end(),this.panSession=void 0;const{dragPropagation:s}=this.getProps();!s&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),n&&n.setActive("whileDrag",!1)}updateAxis(t,n,s){const{drag:r}=this.getProps();if(!s||!xn(t,r,this.currentDirection))return;const a=this.getAxisMotionValue(t);let o=this.originPoint[t]+s[t];this.constraints&&this.constraints[t]&&(o=bx(o,this.constraints[t],this.elastic[t])),a.set(o)}resolveConstraints(){var t;const{dragConstraints:n,dragElastic:s}=this.getProps(),r=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(t=this.visualElement.projection)===null||t===void 0?void 0:t.layout,a=this.constraints;n&&jt(n)?this.constraints||(this.constraints=this.resolveRefConstraints()):n&&r?this.constraints=wx(r.layoutBox,n):this.constraints=!1,this.elastic=jx(s),a!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&Fe(o=>{this.getAxisMotionValue(o)&&(this.constraints[o]=Sx(r.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!jt(t))return!1;const s=t.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const a=Ix(s,r.root,this.visualElement.getTransformPagePoint());let o=vx(r.layout.layoutBox,a);if(n){const l=n(Nx(o));this.hasMutatedConstraints=!!l,l&&(o=Bl(l))}return o}startAnimation(t){const{drag:n,dragMomentum:s,dragElastic:r,dragTransition:a,dragSnapToOrigin:o,onDragTransitionEnd:l}=this.getProps(),c=this.constraints||{},d=Fe(u=>{if(!xn(u,n,this.currentDirection))return;let h=c&&c[u]||{};o&&(h={min:0,max:0});const f=r?200:1e6,p=r?40:1e7,m={type:"inertia",velocity:s?t[u]:0,bounceStiffness:f,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...a,...h};return this.startAxisValueAnimation(u,m)});return Promise.all(d).then(l)}startAxisValueAnimation(t,n){const s=this.getAxisMotionValue(t);return s.start(Or(t,s,0,n))}stopAnimation(){Fe(t=>this.getAxisMotionValue(t).stop())}pauseAnimation(){Fe(t=>{var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.pause()})}getAnimationState(t){var n;return(n=this.getAxisMotionValue(t).animation)===null||n===void 0?void 0:n.state}getAxisMotionValue(t){const n="_drag"+t.toUpperCase(),s=this.visualElement.getProps(),r=s[n];return r||this.visualElement.getValue(t,(s.initial?s.initial[t]:void 0)||0)}snapToCursor(t){Fe(n=>{const{drag:s}=this.getProps();if(!xn(n,s,this.currentDirection))return;const{projection:r}=this.visualElement,a=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:l}=r.layout.layoutBox[n];a.set(t[n]-pe(o,l,.5))}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:t,dragConstraints:n}=this.getProps(),{projection:s}=this.visualElement;if(!jt(n)||!s||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Fe(o=>{const l=this.getAxisMotionValue(o);if(l){const c=l.get();r[o]=kx({min:c,max:c},this.constraints[o])}});const{transformTemplate:a}=this.visualElement.getProps();this.visualElement.current.style.transform=a?a({},""):"none",s.root&&s.root.updateScroll(),s.updateLayout(),this.resolveConstraints(),Fe(o=>{if(!xn(o,t,null))return;const l=this.getAxisMotionValue(o),{min:c,max:d}=this.constraints[o];l.set(pe(c,d,r[o]))})}addListeners(){if(!this.visualElement.current)return;Ex.set(this.visualElement,this);const t=this.visualElement.current,n=Je(t,"pointerdown",c=>{const{drag:d,dragListener:u=!0}=this.getProps();d&&u&&this.start(c)}),s=()=>{const{dragConstraints:c}=this.getProps();jt(c)&&(this.constraints=this.resolveRefConstraints())},{projection:r}=this.visualElement,a=r.addEventListener("measure",s);r&&!r.layout&&(r.root&&r.root.updateScroll(),r.updateLayout()),s();const o=Qe(window,"resize",()=>this.scalePositionWithinConstraints()),l=r.addEventListener("didUpdate",({delta:c,hasLayoutChanged:d})=>{this.isDragging&&d&&(Fe(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=c[u].translate,h.set(h.get()+c[u].translate))}),this.visualElement.render())});return()=>{o(),n(),a(),l&&l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:s=!1,dragPropagation:r=!1,dragConstraints:a=!1,dragElastic:o=Qs,dragMomentum:l=!0}=t;return{...t,drag:n,dragDirectionLock:s,dragPropagation:r,dragConstraints:a,dragElastic:o,dragMomentum:l}}}function xn(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function Dx(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}class Lx extends ut{constructor(t){super(t),this.removeGroupControls=fe,this.removeListeners=fe,this.controls=new Mx(t)}mount(){const{dragControls:t}=this.node.getProps();t&&(this.removeGroupControls=t.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||fe}unmount(){this.removeGroupControls(),this.removeListeners()}}const ma=e=>(t,n)=>{e&&ce.update(()=>e(t,n))};class zx extends ut{constructor(){super(...arguments),this.removePointerDownListener=fe}onPointerDown(t){this.session=new Fl(t,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:Hl(this.node)})}createPanHandlers(){const{onPanSessionStart:t,onPanStart:n,onPan:s,onPanEnd:r}=this.node.getProps();return{onSessionStart:ma(t),onStart:ma(n),onMove:s,onEnd:(a,o)=>{delete this.session,r&&ce.update(()=>r(a,o))}}}mount(){this.removePointerDownListener=Je(this.node.current,"pointerdown",t=>this.onPointerDown(t))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}function Rx(){const e=b.useContext(Hn);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:s}=e,r=b.useId();return b.useEffect(()=>s(r),[]),!t&&n?[!1,()=>n&&n(r)]:[!0]}const vn={hasAnimatedSinceResize:!0,hasEverUpdated:!1};function ga(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const Ot={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(W.test(e))e=parseFloat(e);else return e;const n=ga(e,t.target.x),s=ga(e,t.target.y);return`${n}% ${s}%`}},Vx={correct:(e,{treeScale:t,projectionDelta:n})=>{const s=e,r=lt.parse(e);if(r.length>5)return s;const a=lt.createTransformer(e),o=typeof r[0]!="number"?1:0,l=n.x.scale*t.x,c=n.y.scale*t.y;r[0+o]/=l,r[1+o]/=c;const d=pe(l,c,.5);return typeof r[2+o]=="number"&&(r[2+o]/=d),typeof r[3+o]=="number"&&(r[3+o]/=d),a(r)}};class Fx extends nr.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s,layoutId:r}=this.props,{projection:a}=t;qf(Ox),a&&(n.group&&n.group.add(a),s&&s.register&&r&&s.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),vn.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:s,drag:r,isPresent:a}=this.props,o=s.projection;return o&&(o.isPresent=a,r||t.layoutDependency!==n||n===void 0?o.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?o.promote():o.relegate()||ce.postRender(()=>{const l=o.getStack();(!l||!l.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),queueMicrotask(()=>{!t.currentAnimation&&t.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:s}=this.props,{projection:r}=t;r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),s&&s.deregister&&s.deregister(r))}safeToRemove(){const{safeToRemove:t}=this.props;t&&t()}render(){return null}}function ql(e){const[t,n]=Rx(),s=b.useContext(Nr);return nr.createElement(Fx,{...e,layoutGroup:s,switchLayoutGroup:b.useContext(Bo),isPresent:t,safeToRemove:n})}const Ox={borderRadius:{...Ot,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Ot,borderTopRightRadius:Ot,borderBottomLeftRadius:Ot,borderBottomRightRadius:Ot,boxShadow:Vx},Wl=["TopLeft","TopRight","BottomLeft","BottomRight"],Bx=Wl.length,xa=e=>typeof e=="string"?parseFloat(e):e,ya=e=>typeof e=="number"||W.test(e);function _x(e,t,n,s,r,a){r?(e.opacity=pe(0,n.opacity!==void 0?n.opacity:1,Ux(s)),e.opacityExit=pe(t.opacity!==void 0?t.opacity:1,0,$x(s))):a&&(e.opacity=pe(t.opacity!==void 0?t.opacity:1,n.opacity!==void 0?n.opacity:1,s));for(let o=0;o<Bx;o++){const l=`border${Wl[o]}Radius`;let c=ba(t,l),d=ba(n,l);if(c===void 0&&d===void 0)continue;c||(c=0),d||(d=0),c===0||d===0||ya(c)===ya(d)?(e[l]=Math.max(pe(xa(c),xa(d),s),0),(We.test(d)||We.test(c))&&(e[l]+="%")):e[l]=d}(t.rotate||n.rotate)&&(e.rotate=pe(t.rotate||0,n.rotate||0,s))}function ba(e,t){return e[t]!==void 0?e[t]:e.borderRadius}const Ux=Yl(0,.5,ml),$x=Yl(.5,.95,fe);function Yl(e,t,n){return s=>s<e?0:s>t?1:n(Jt(e,t,s))}function wa(e,t){e.min=t.min,e.max=t.max}function Ve(e,t){wa(e.x,t.x),wa(e.y,t.y)}function va(e,t,n,s,r){return e-=t,e=zn(e,1/n,s),r!==void 0&&(e=zn(e,1/r,s)),e}function Hx(e,t=0,n=1,s=.5,r,a=e,o=e){if(We.test(t)&&(t=parseFloat(t),t=pe(o.min,o.max,t/100)-o.min),typeof t!="number")return;let l=pe(a.min,a.max,s);e===a&&(l-=t),e.min=va(e.min,t,n,l,r),e.max=va(e.max,t,n,l,r)}function ka(e,t,[n,s,r],a,o){Hx(e,t[n],t[s],t[r],t.scale,a,o)}const qx=["x","scaleX","originX"],Wx=["y","scaleY","originY"];function Sa(e,t,n,s){ka(e.x,t,qx,n?n.x:void 0,s?s.x:void 0),ka(e.y,t,Wx,n?n.y:void 0,s?s.y:void 0)}function ja(e){return e.translate===0&&e.scale===1}function Gl(e){return ja(e.x)&&ja(e.y)}function Yx(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Kl(e,t){return Math.round(e.x.min)===Math.round(t.x.min)&&Math.round(e.x.max)===Math.round(t.x.max)&&Math.round(e.y.min)===Math.round(t.y.min)&&Math.round(e.y.max)===Math.round(t.y.max)}function Na(e){return Re(e.x)/Re(e.y)}class Gx{constructor(){this.members=[]}add(t){Br(this.members,t),t.scheduleRender()}remove(t){if(_r(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(r=>t===r);if(n===0)return!1;let s;for(let r=n;r>=0;r--){const a=this.members[r];if(a.isPresent!==!1){s=a;break}}return s?(this.promote(s),!0):!1}promote(t,n){const s=this.lead;if(t!==s&&(this.prevLead=s,this.lead=t,t.show(),s)){s.instance&&s.scheduleRender(),t.scheduleRender(),t.resumeFrom=s,n&&(t.resumeFrom.preserveOpacity=!0),s.snapshot&&(t.snapshot=s.snapshot,t.snapshot.latestValues=s.animationValues||s.latestValues),t.root&&t.root.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:r}=t.options;r===!1&&s.hide()}}exitAnimationComplete(){this.members.forEach(t=>{const{options:n,resumingFrom:s}=t;n.onExitComplete&&n.onExitComplete(),s&&s.options.onExitComplete&&s.options.onExitComplete()})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function Ca(e,t,n){let s="";const r=e.x.translate/t.x,a=e.y.translate/t.y;if((r||a)&&(s=`translate3d(${r}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(s+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:c,rotateX:d,rotateY:u}=n;c&&(s+=`rotate(${c}deg) `),d&&(s+=`rotateX(${d}deg) `),u&&(s+=`rotateY(${u}deg) `)}const o=e.x.scale*t.x,l=e.y.scale*t.y;return(o!==1||l!==1)&&(s+=`scale(${o}, ${l})`),s||"none"}const Kx=(e,t)=>e.depth-t.depth;class Xx{constructor(){this.children=[],this.isDirty=!1}add(t){Br(this.children,t),this.isDirty=!0}remove(t){_r(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(Kx),this.isDirty=!1,this.children.forEach(t)}}function Qx(e,t){const n=performance.now(),s=({timestamp:r})=>{const a=r-n;a>=t&&(et(s),e(a-t))};return ce.read(s,!0),()=>et(s)}function Jx(e){window.MotionDebug&&window.MotionDebug.record(e)}function Zx(e){return e instanceof SVGElement&&e.tagName!=="svg"}function ey(e,t,n){const s=Ee(e)?e:Et(e);return s.start(Or("",s,t,n)),s.animation}const Ta=["","X","Y","Z"],ty={visibility:"hidden"},Aa=1e3;let ny=0;const ft={type:"projectionFrame",totalNodes:0,resolvedTargetDeltas:0,recalculatedProjection:0};function Xl({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:s,resetTransform:r}){return class{constructor(o={},l=t==null?void 0:t()){this.id=ny++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.updateScheduled=!1,this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,ft.totalNodes=ft.resolvedTargetDeltas=ft.recalculatedProjection=0,this.nodes.forEach(iy),this.nodes.forEach(uy),this.nodes.forEach(dy),this.nodes.forEach(ay),Jx(ft)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0;for(let c=0;c<this.path.length;c++)this.path[c].shouldResetTransform=!0;this.root===this&&(this.nodes=new Xx)}addEventListener(o,l){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Ur),this.eventHandlers.get(o).add(l)}notifyListeners(o,...l){const c=this.eventHandlers.get(o);c&&c.notify(...l)}hasListeners(o){return this.eventHandlers.has(o)}mount(o,l=this.root.hasTreeAnimated){if(this.instance)return;this.isSVG=Zx(o),this.instance=o;const{layoutId:c,layout:d,visualElement:u}=this.options;if(u&&!u.current&&u.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),l&&(d||c)&&(this.isLayoutDirty=!0),e){let h;const f=()=>this.root.updateBlockedByResize=!1;e(o,()=>{this.root.updateBlockedByResize=!0,h&&h(),h=Qx(f,250),vn.hasAnimatedSinceResize&&(vn.hasAnimatedSinceResize=!1,this.nodes.forEach(Ia))})}c&&this.root.registerSharedNode(c,this),this.options.animate!==!1&&u&&(c||d)&&this.addEventListener("didUpdate",({delta:h,hasLayoutChanged:f,hasRelativeTargetChanged:p,layout:m})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const x=this.options.transition||u.getDefaultTransition()||gy,{onLayoutAnimationStart:v,onLayoutAnimationComplete:w}=u.getProps(),S=!this.targetLayout||!Kl(this.targetLayout,m)||p,k=!f&&p;if(this.options.layoutRoot||this.resumeFrom&&this.resumeFrom.instance||k||f&&(S||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(h,k);const C={...Fr(x,"layout"),onPlay:v,onComplete:w};(u.shouldReduceMotion||this.options.layoutRoot)&&(C.delay=0,C.type=!1),this.startAnimation(C)}else f||Ia(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=m})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,et(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(hy),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let u=0;u<this.path.length;u++){const h=this.path[u];h.shouldResetTransform=!0,h.updateScroll("snapshot"),h.options.layoutRoot&&h.willUpdate(!1)}const{layoutId:l,layout:c}=this.options;if(l===void 0&&!c)return;const d=this.getTransformTemplate();this.prevTransformTemplateValue=d?d(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(Pa);return}this.isUpdating||this.nodes.forEach(ly),this.isUpdating=!1,this.nodes.forEach(cy),this.nodes.forEach(sy),this.nodes.forEach(ry),this.clearAllSnapshots();const l=performance.now();ve.delta=ot(0,1e3/60,l-ve.timestamp),ve.timestamp=l,ve.isProcessing=!0,gs.update.process(ve),gs.preRender.process(ve),gs.render.process(ve),ve.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,queueMicrotask(()=>this.update()))}clearAllSnapshots(){this.nodes.forEach(oy),this.sharedNodes.forEach(py)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,ce.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){ce.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let c=0;c<this.path.length;c++)this.path[c].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutCorrected=me(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:l}=this.options;l&&l.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let l=!!(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(l=!1),l&&(this.scroll={animationId:this.root.animationId,phase:o,isRoot:s(this.instance),offset:n(this.instance)})}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!Gl(this.projectionDelta),c=this.getTransformTemplate(),d=c?c(this.latestValues,""):void 0,u=d!==this.prevTransformTemplateValue;o&&(l||pt(this.latestValues)||u)&&(r(this.instance,d),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const l=this.measurePageBox();let c=this.removeElementScroll(l);return o&&(c=this.removeTransform(c)),xy(c),{animationId:this.root.animationId,measuredBox:l,layoutBox:c,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:o}=this.options;if(!o)return me();const l=o.measureViewportBox(),{scroll:c}=this.root;return c&&(it(l.x,c.offset.x),it(l.y,c.offset.y)),l}removeElementScroll(o){const l=me();Ve(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c],{scroll:u,options:h}=d;if(d!==this.root&&u&&h.layoutScroll){if(u.isRoot){Ve(l,o);const{scroll:f}=this.root;f&&(it(l.x,-f.offset.x),it(l.y,-f.offset.y))}it(l.x,u.offset.x),it(l.y,u.offset.y)}}return l}applyTransform(o,l=!1){const c=me();Ve(c,o);for(let d=0;d<this.path.length;d++){const u=this.path[d];!l&&u.options.layoutScroll&&u.scroll&&u!==u.root&&Tt(c,{x:-u.scroll.offset.x,y:-u.scroll.offset.y}),pt(u.latestValues)&&Tt(c,u.latestValues)}return pt(this.latestValues)&&Tt(c,this.latestValues),c}removeTransform(o){const l=me();Ve(l,o);for(let c=0;c<this.path.length;c++){const d=this.path[c];if(!d.instance||!pt(d.latestValues))continue;Js(d.latestValues)&&d.updateSnapshot();const u=me(),h=d.measurePageBox();Ve(u,h),Sa(l,d.latestValues,d.snapshot?d.snapshot.layoutBox:void 0,u)}return pt(this.latestValues)&&Sa(l,this.latestValues),l}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==ve.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var l;const c=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=c.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=c.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=c.isSharedProjectionDirty);const d=!!this.resumingFrom||this!==c;if(!(o||d&&this.isSharedProjectionDirty||this.isProjectionDirty||!((l=this.parent)===null||l===void 0)&&l.isProjectionDirty||this.attemptToResolveRelativeTarget))return;const{layout:h,layoutId:f}=this.options;if(!(!this.layout||!(h||f))){if(this.resolvedRelativeTargetAt=ve.timestamp,!this.targetDelta&&!this.relativeTarget){const p=this.getClosestProjectingParent();p&&p.layout&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Yt(this.relativeTargetOrigin,this.layout.layoutBox,p.layout.layoutBox),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)){if(this.target||(this.target=me(),this.targetWithTransforms=me()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),yx(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):Ve(this.target,this.layout.layoutBox),Ul(this.target,this.targetDelta)):Ve(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget){this.attemptToResolveRelativeTarget=!1;const p=this.getClosestProjectingParent();p&&!!p.resumingFrom==!!this.resumingFrom&&!p.options.layoutScroll&&p.target&&this.animationProgress!==1?(this.relativeParent=p,this.forceRelativeParentToResolveTarget(),this.relativeTarget=me(),this.relativeTargetOrigin=me(),Yt(this.relativeTargetOrigin,this.target,p.target),Ve(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}ft.resolvedTargetDeltas++}}}getClosestProjectingParent(){if(!(!this.parent||Js(this.parent.latestValues)||_l(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}calcProjection(){var o;const l=this.getLead(),c=!!this.resumingFrom||this!==l;let d=!0;if((this.isProjectionDirty||!((o=this.parent)===null||o===void 0)&&o.isProjectionDirty)&&(d=!1),c&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(d=!1),this.resolvedRelativeTargetAt===ve.timestamp&&(d=!1),d)return;const{layout:u,layoutId:h}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(u||h))return;Ve(this.layoutCorrected,this.layout.layoutBox);const f=this.treeScale.x,p=this.treeScale.y;Tx(this.layoutCorrected,this.treeScale,this.path,c),l.layout&&!l.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(l.target=l.layout.layoutBox);const{target:m}=l;if(!m){this.projectionTransform&&(this.projectionDelta=Ct(),this.projectionTransform="none",this.scheduleRender());return}this.projectionDelta||(this.projectionDelta=Ct(),this.projectionDeltaWithTransform=Ct());const x=this.projectionTransform;Wt(this.projectionDelta,this.layoutCorrected,m,this.latestValues),this.projectionTransform=Ca(this.projectionDelta,this.treeScale),(this.projectionTransform!==x||this.treeScale.x!==f||this.treeScale.y!==p)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",m)),ft.recalculatedProjection++}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){if(this.options.scheduleRender&&this.options.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(o,l=!1){const c=this.snapshot,d=c?c.latestValues:{},u={...this.latestValues},h=Ct();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!l;const f=me(),p=c?c.source:void 0,m=this.layout?this.layout.source:void 0,x=p!==m,v=this.getStack(),w=!v||v.members.length<=1,S=!!(x&&!w&&this.options.crossfade===!0&&!this.path.some(my));this.animationProgress=0;let k;this.mixTargetDelta=C=>{const M=C/1e3;Ea(h.x,o.x,M),Ea(h.y,o.y,M),this.setTargetDelta(h),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(Yt(f,this.layout.layoutBox,this.relativeParent.layout.layoutBox),fy(this.relativeTarget,this.relativeTargetOrigin,f,M),k&&Yx(this.relativeTarget,k)&&(this.isProjectionDirty=!1),k||(k=me()),Ve(k,this.relativeTarget)),x&&(this.animationValues=u,_x(u,d,this.latestValues,M,S,w)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=M},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){this.notifyListeners("animationStart"),this.currentAnimation&&this.currentAnimation.stop(),this.resumingFrom&&this.resumingFrom.currentAnimation&&this.resumingFrom.currentAnimation.stop(),this.pendingAnimation&&(et(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=ce.update(()=>{vn.hasAnimatedSinceResize=!0,this.currentAnimation=ey(0,Aa,{...o,onUpdate:l=>{this.mixTargetDelta(l),o.onUpdate&&o.onUpdate(l)},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(Aa),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:l,target:c,layout:d,latestValues:u}=o;if(!(!l||!c||!d)){if(this!==o&&this.layout&&d&&Ql(this.options.animationType,this.layout.layoutBox,d.layoutBox)){c=this.target||me();const h=Re(this.layout.layoutBox.x);c.x.min=o.target.x.min,c.x.max=c.x.min+h;const f=Re(this.layout.layoutBox.y);c.y.min=o.target.y.min,c.y.max=c.y.min+f}Ve(l,c),Tt(l,u),Wt(this.projectionDeltaWithTransform,this.layoutCorrected,l,u)}}registerSharedNode(o,l){this.sharedNodes.has(o)||this.sharedNodes.set(o,new Gx),this.sharedNodes.get(o).add(l);const d=l.options.initialPromotionConfig;l.promote({transition:d?d.transition:void 0,preserveFollowOpacity:d&&d.shouldPreserveFollowOpacity?d.shouldPreserveFollowOpacity(l):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var o;const{layoutId:l}=this.options;return l?((o=this.getStack())===null||o===void 0?void 0:o.lead)||this:this}getPrevLead(){var o;const{layoutId:l}=this.options;return l?(o=this.getStack())===null||o===void 0?void 0:o.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:l,preserveFollowOpacity:c}={}){const d=this.getStack();d&&d.promote(this,c),o&&(this.projectionDelta=void 0,this.needsReset=!0),l&&this.setOptions({transition:l})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetRotation(){const{visualElement:o}=this.options;if(!o)return;let l=!1;const{latestValues:c}=o;if((c.rotate||c.rotateX||c.rotateY||c.rotateZ)&&(l=!0),!l)return;const d={};for(let u=0;u<Ta.length;u++){const h="rotate"+Ta[u];c[h]&&(d[h]=c[h],o.setStaticValue(h,0))}o.render();for(const u in d)o.setStaticValue(u,d[u]);o.scheduleRender()}getProjectionStyles(o){var l,c;if(!this.instance||this.isSVG)return;if(!this.isVisible)return ty;const d={visibility:""},u=this.getTransformTemplate();if(this.needsReset)return this.needsReset=!1,d.opacity="",d.pointerEvents=wn(o==null?void 0:o.pointerEvents)||"",d.transform=u?u(this.latestValues,""):"none",d;const h=this.getLead();if(!this.projectionDelta||!this.layout||!h.target){const x={};return this.options.layoutId&&(x.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,x.pointerEvents=wn(o==null?void 0:o.pointerEvents)||""),this.hasProjected&&!pt(this.latestValues)&&(x.transform=u?u({},""):"none",this.hasProjected=!1),x}const f=h.animationValues||h.latestValues;this.applyTransformsToTarget(),d.transform=Ca(this.projectionDeltaWithTransform,this.treeScale,f),u&&(d.transform=u(f,d.transform));const{x:p,y:m}=this.projectionDelta;d.transformOrigin=`${p.origin*100}% ${m.origin*100}% 0`,h.animationValues?d.opacity=h===this?(c=(l=f.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&c!==void 0?c:1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:d.opacity=h===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const x in An){if(f[x]===void 0)continue;const{correct:v,applyTo:w}=An[x],S=d.transform==="none"?f[x]:v(f[x],h);if(w){const k=w.length;for(let C=0;C<k;C++)d[w[C]]=S}else d[x]=S}return this.options.layoutId&&(d.pointerEvents=h===this?wn(o==null?void 0:o.pointerEvents)||"":"none"),d}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var l;return(l=o.currentAnimation)===null||l===void 0?void 0:l.stop()}),this.root.nodes.forEach(Pa),this.root.sharedNodes.clear()}}}function sy(e){e.updateLayout()}function ry(e){var t;const n=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&n&&e.hasListeners("didUpdate")){const{layoutBox:s,measuredBox:r}=e.layout,{animationType:a}=e.options,o=n.source!==e.layout.source;a==="size"?Fe(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],p=Re(f);f.min=s[h].min,f.max=f.min+p}):Ql(a,n.layoutBox,s)&&Fe(h=>{const f=o?n.measuredBox[h]:n.layoutBox[h],p=Re(s[h]);f.max=f.min+p,e.relativeTarget&&!e.currentAnimation&&(e.isProjectionDirty=!0,e.relativeTarget[h].max=e.relativeTarget[h].min+p)});const l=Ct();Wt(l,s,n.layoutBox);const c=Ct();o?Wt(c,e.applyTransform(r,!0),n.measuredBox):Wt(c,s,n.layoutBox);const d=!Gl(l);let u=!1;if(!e.resumeFrom){const h=e.getClosestProjectingParent();if(h&&!h.resumeFrom){const{snapshot:f,layout:p}=h;if(f&&p){const m=me();Yt(m,n.layoutBox,f.layoutBox);const x=me();Yt(x,s,p.layoutBox),Kl(m,x)||(u=!0),h.options.layoutRoot&&(e.relativeTarget=x,e.relativeTargetOrigin=m,e.relativeParent=h)}}}e.notifyListeners("didUpdate",{layout:s,snapshot:n,delta:c,layoutDelta:l,hasLayoutChanged:d,hasRelativeTargetChanged:u})}else if(e.isLead()){const{onExitComplete:s}=e.options;s&&s()}e.options.transition=void 0}function iy(e){ft.totalNodes++,e.parent&&(e.isProjecting()||(e.isProjectionDirty=e.parent.isProjectionDirty),e.isSharedProjectionDirty||(e.isSharedProjectionDirty=!!(e.isProjectionDirty||e.parent.isProjectionDirty||e.parent.isSharedProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=e.parent.isTransformDirty))}function ay(e){e.isProjectionDirty=e.isSharedProjectionDirty=e.isTransformDirty=!1}function oy(e){e.clearSnapshot()}function Pa(e){e.clearMeasurements()}function ly(e){e.isLayoutDirty=!1}function cy(e){const{visualElement:t}=e.options;t&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Ia(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0,e.isProjectionDirty=!0}function uy(e){e.resolveTargetDelta()}function dy(e){e.calcProjection()}function hy(e){e.resetRotation()}function py(e){e.removeLeadSnapshot()}function Ea(e,t,n){e.translate=pe(t.translate,0,n),e.scale=pe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Ma(e,t,n,s){e.min=pe(t.min,n.min,s),e.max=pe(t.max,n.max,s)}function fy(e,t,n,s){Ma(e.x,t.x,n.x,s),Ma(e.y,t.y,n.y,s)}function my(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const gy={duration:.45,ease:[.4,0,.1,1]},Da=e=>typeof navigator<"u"&&navigator.userAgent.toLowerCase().includes(e),La=Da("applewebkit/")&&!Da("chrome/")?Math.round:fe;function za(e){e.min=La(e.min),e.max=La(e.max)}function xy(e){za(e.x),za(e.y)}function Ql(e,t,n){return e==="position"||e==="preserve-aspect"&&!Xs(Na(t),Na(n),.2)}const yy=Xl({attachResizeListener:(e,t)=>Qe(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Ts={current:void 0},Jl=Xl({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Ts.current){const e=new yy({});e.mount(window),e.setOptions({layoutScroll:!0}),Ts.current=e}return Ts.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>window.getComputedStyle(e).position==="fixed"}),by={pan:{Feature:zx},drag:{Feature:Lx,ProjectionNode:Jl,MeasureLayout:ql}},wy=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function vy(e){const t=wy.exec(e);if(!t)return[,];const[,n,s]=t;return[n,s]}function er(e,t,n=1){const[s,r]=vy(e);if(!s)return;const a=window.getComputedStyle(t).getPropertyValue(s);if(a){const o=a.trim();return Ll(o)?parseFloat(o):o}else return $s(r)?er(r,t,n+1):r}function ky(e,{...t},n){const s=e.current;if(!(s instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(r=>{const a=r.get();if(!$s(a))return;const o=er(a,s);o&&r.set(o)});for(const r in t){const a=t[r];if(!$s(a))continue;const o=er(a,s);o&&(t[r]=o,n||(n={}),n[r]===void 0&&(n[r]=a))}return{target:t,transitionEnd:n}}const Sy=new Set(["width","height","top","left","right","bottom","x","y","translateX","translateY"]),Zl=e=>Sy.has(e),jy=e=>Object.keys(e).some(Zl),Ra=e=>e===kt||e===W,Va=(e,t)=>parseFloat(e.split(", ")[t]),Fa=(e,t)=>(n,{transform:s})=>{if(s==="none"||!s)return 0;const r=s.match(/^matrix3d\((.+)\)$/);if(r)return Va(r[1],t);{const a=s.match(/^matrix\((.+)\)$/);return a?Va(a[1],e):0}},Ny=new Set(["x","y","z"]),Cy=nn.filter(e=>!Ny.has(e));function Ty(e){const t=[];return Cy.forEach(n=>{const s=e.getValue(n);s!==void 0&&(t.push([n,s.get()]),s.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const Mt={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:Fa(4,13),y:Fa(5,14)};Mt.translateX=Mt.x;Mt.translateY=Mt.y;const Ay=(e,t,n)=>{const s=t.measureViewportBox(),r=t.current,a=getComputedStyle(r),{display:o}=a,l={};o==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(d=>{l[d]=Mt[d](s,a)}),t.render();const c=t.measureViewportBox();return n.forEach(d=>{const u=t.getValue(d);u&&u.jump(l[d]),e[d]=Mt[d](c,a)}),e},Py=(e,t,n={},s={})=>{t={...t},s={...s};const r=Object.keys(t).filter(Zl);let a=[],o=!1;const l=[];if(r.forEach(c=>{const d=e.getValue(c);if(!e.hasValue(c))return;let u=n[c],h=Ft(u);const f=t[c];let p;if(In(f)){const m=f.length,x=f[0]===null?1:0;u=f[x],h=Ft(u);for(let v=x;v<m&&f[v]!==null;v++)p?Dr(Ft(f[v])===p):p=Ft(f[v])}else p=Ft(f);if(h!==p)if(Ra(h)&&Ra(p)){const m=d.get();typeof m=="string"&&d.set(parseFloat(m)),typeof f=="string"?t[c]=parseFloat(f):Array.isArray(f)&&p===W&&(t[c]=f.map(parseFloat))}else h!=null&&h.transform&&(p!=null&&p.transform)&&(u===0||f===0)?u===0?d.set(p.transform(u)):t[c]=h.transform(f):(o||(a=Ty(e),o=!0),l.push(c),s[c]=s[c]!==void 0?s[c]:t[c],d.jump(f))}),l.length){const c=l.indexOf("height")>=0?window.pageYOffset:null,d=Ay(t,e,l);return a.length&&a.forEach(([u,h])=>{e.getValue(u).set(h)}),e.render(),qn&&c!==null&&window.scrollTo({top:c}),{target:d,transitionEnd:s}}else return{target:t,transitionEnd:s}};function Iy(e,t,n,s){return jy(t)?Py(e,t,n,s):{target:t,transitionEnd:s}}const Ey=(e,t,n,s)=>{const r=ky(e,t,s);return t=r.target,s=r.transitionEnd,Iy(e,t,n,s)},tr={current:null},ec={current:!1};function My(){if(ec.current=!0,!!qn)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>tr.current=e.matches;e.addListener(t),t()}else tr.current=!1}function Dy(e,t,n){const{willChange:s}=t;for(const r in t){const a=t[r],o=n[r];if(Ee(a))e.addValue(r,a),Ln(s)&&s.add(r);else if(Ee(o))e.addValue(r,Et(a,{owner:e})),Ln(s)&&s.remove(r);else if(o!==a)if(e.hasValue(r)){const l=e.getValue(r);!l.hasAnimated&&l.set(a)}else{const l=e.getStaticValue(r);e.addValue(r,Et(l!==void 0?l:a,{owner:e}))}}for(const r in n)t[r]===void 0&&e.removeValue(r);return t}const Oa=new WeakMap,tc=Object.keys(Qt),Ly=tc.length,Ba=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"],zy=jr.length;class Ry{constructor({parent:t,props:n,presenceContext:s,reducedMotionConfig:r,visualState:a},o={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>ce.render(this.render,!1,!0);const{latestValues:l,renderState:c}=a;this.latestValues=l,this.baseTarget={...l},this.initialValues=n.initial?{...l}:{},this.renderState=c,this.parent=t,this.props=n,this.presenceContext=s,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=o,this.isControllingVariants=Yn(n),this.isVariantNode=Oo(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(t&&t.current);const{willChange:d,...u}=this.scrapeMotionValuesFromProps(n,{});for(const h in u){const f=u[h];l[h]!==void 0&&Ee(f)&&(f.set(l[h],!1),Ln(d)&&d.add(h))}}scrapeMotionValuesFromProps(t,n){return{}}mount(t){this.current=t,Oa.set(t,this),this.projection&&!this.projection.instance&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((n,s)=>this.bindToMotionValue(s,n)),ec.current||My(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:tr.current,this.parent&&this.parent.children.add(this),this.update(this.props,this.presenceContext)}unmount(){Oa.delete(this.current),this.projection&&this.projection.unmount(),et(this.notifyUpdate),et(this.render),this.valueSubscriptions.forEach(t=>t()),this.removeFromVariantTree&&this.removeFromVariantTree(),this.parent&&this.parent.children.delete(this);for(const t in this.events)this.events[t].clear();for(const t in this.features)this.features[t].unmount();this.current=null}bindToMotionValue(t,n){const s=vt.has(t),r=n.on("change",o=>{this.latestValues[t]=o,this.props.onUpdate&&ce.update(this.notifyUpdate,!1,!0),s&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.on("renderRequest",this.scheduleRender);this.valueSubscriptions.set(t,()=>{r(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures({children:t,...n},s,r,a){let o,l;for(let c=0;c<Ly;c++){const d=tc[c],{isEnabled:u,Feature:h,ProjectionNode:f,MeasureLayout:p}=Qt[d];f&&(o=f),u(n)&&(!this.features[d]&&h&&(this.features[d]=new h(this)),p&&(l=p))}if((this.type==="html"||this.type==="svg")&&!this.projection&&o){this.projection=new o(this.latestValues,this.parent&&this.parent.projection);const{layoutId:c,layout:d,drag:u,dragConstraints:h,layoutScroll:f,layoutRoot:p}=n;this.projection.setOptions({layoutId:c,layout:d,alwaysMeasureLayout:!!u||h&&jt(h),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof d=="string"?d:"both",initialPromotionConfig:a,layoutScroll:f,layoutRoot:p})}return l}updateFeatures(){for(const t in this.features){const n=this.features[t];n.isMounted?n.update():(n.mount(),n.isMounted=!0)}}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):me()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}update(t,n){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=t,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let s=0;s<Ba.length;s++){const r=Ba[s];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const a=t["on"+r];a&&(this.propEventSubscriptions[r]=this.on(r,a))}this.prevMotionValues=Dy(this,this.scrapeMotionValuesFromProps(t,this.prevProps),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(t){return this.props.variants?this.props.variants[t]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}getVariantContext(t=!1){if(t)return this.parent?this.parent.getVariantContext():void 0;if(!this.isControllingVariants){const s=this.parent?this.parent.getVariantContext()||{}:{};return this.props.initial!==void 0&&(s.initial=this.props.initial),s}const n={};for(let s=0;s<zy;s++){const r=jr[s],a=this.props[r];(Xt(a)||a===!1)&&(n[r]=a)}return n}addVariantChild(t){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(t),()=>n.variantChildren.delete(t)}addValue(t,n){n!==this.values.get(t)&&(this.removeValue(t),this.bindToMotionValue(t,n)),this.values.set(t,n),this.latestValues[t]=n.get()}removeValue(t){this.values.delete(t);const n=this.valueSubscriptions.get(t);n&&(n(),this.valueSubscriptions.delete(t)),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let s=this.values.get(t);return s===void 0&&n!==void 0&&(s=Et(n,{owner:this}),this.addValue(t,s)),s}readValue(t){var n;return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:(n=this.getBaseTargetFromProps(this.props,t))!==null&&n!==void 0?n:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:s}=this.props,r=typeof s=="string"||typeof s=="object"?(n=Mr(this.props,s))===null||n===void 0?void 0:n[t]:void 0;if(s&&r!==void 0)return r;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!Ee(a)?a:this.initialValues[t]!==void 0&&r===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Ur),this.events[t].add(n)}notify(t,...n){this.events[t]&&this.events[t].notify(...n)}}class nc extends Ry{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){return t.style?t.style[n]:void 0}removeValueFromRenderState(t,{vars:n,style:s}){delete n[t],delete s[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...s},{transformValues:r},a){let o=Zg(s,t||{},this);if(r&&(n&&(n=r(n)),s&&(s=r(s)),o&&(o=r(o))),a){Qg(this,s,o);const l=Ey(this,s,o,n);n=l.transitionEnd,s=l.target}return{transition:t,transitionEnd:n,...s}}}function Vy(e){return window.getComputedStyle(e)}class Fy extends nc{constructor(){super(...arguments),this.type="html"}readValueFromInstance(t,n){if(vt.has(n)){const s=Vr(n);return s&&s.default||0}else{const s=Vy(t),r=($o(n)?s.getPropertyValue(n):s[n])||0;return typeof r=="string"?r.trim():r}}measureInstanceViewportBox(t,{transformPagePoint:n}){return $l(t,n)}build(t,n,s,r){Tr(t,n,s,r.transformTemplate)}scrapeMotionValuesFromProps(t,n){return Er(t,n)}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:t}=this.props;Ee(t)&&(this.childSubscription=t.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}renderInstance(t,n,s,r){Ko(t,n,s,r)}}class Oy extends nc{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1}getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){if(vt.has(n)){const s=Vr(n);return s&&s.default||0}return n=Xo.has(n)?n:kr(n),t.getAttribute(n)}measureInstanceViewportBox(){return me()}scrapeMotionValuesFromProps(t,n){return Jo(t,n)}build(t,n,s,r){Pr(t,n,s,this.isSVGTag,r.transformTemplate)}renderInstance(t,n,s,r){Qo(t,n,s,r)}mount(t){this.isSVGTag=Ir(t.tagName),super.mount(t)}}const By=(e,t)=>Cr(e)?new Oy(t,{enableHardwareAcceleration:!1}):new Fy(t,{enableHardwareAcceleration:!0}),_y={layout:{ProjectionNode:Jl,MeasureLayout:ql}},Uy={...fx,...Lm,...by,..._y},$y=$f((e,t)=>vm(e,t,Uy,By));function sc(){const e=b.useRef(!1);return vr(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function Hy(){const e=sc(),[t,n]=b.useState(0),s=b.useCallback(()=>{e.current&&n(t+1)},[t]);return[b.useCallback(()=>ce.postRender(s),[s]),t]}class qy extends b.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const s=this.props.sizeRef.current;s.height=n.offsetHeight||0,s.width=n.offsetWidth||0,s.top=n.offsetTop,s.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function Wy({children:e,isPresent:t}){const n=b.useId(),s=b.useRef(null),r=b.useRef({width:0,height:0,top:0,left:0});return b.useInsertionEffect(()=>{const{width:a,height:o,top:l,left:c}=r.current;if(t||!s.current||!a||!o)return;s.current.dataset.motionPopId=n;const d=document.createElement("style");return document.head.appendChild(d),d.sheet&&d.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${o}px !important;
            top: ${l}px !important;
            left: ${c}px !important;
          }
        `),()=>{document.head.removeChild(d)}},[t]),b.createElement(qy,{isPresent:t,childRef:s,sizeRef:r},b.cloneElement(e,{ref:s}))}const As=({children:e,initial:t,isPresent:n,onExitComplete:s,custom:r,presenceAffectsLayout:a,mode:o})=>{const l=Zo(Yy),c=b.useId(),d=b.useMemo(()=>({id:c,initial:t,isPresent:n,custom:r,onExitComplete:u=>{l.set(u,!0);for(const h of l.values())if(!h)return;s&&s()},register:u=>(l.set(u,!1),()=>l.delete(u))}),a?void 0:[n]);return b.useMemo(()=>{l.forEach((u,h)=>l.set(h,!1))},[n]),b.useEffect(()=>{!n&&!l.size&&s&&s()},[n]),o==="popLayout"&&(e=b.createElement(Wy,{isPresent:n},e)),b.createElement(Hn.Provider,{value:d},e)};function Yy(){return new Map}function Gy(e){return b.useEffect(()=>()=>e(),[])}const mt=e=>e.key||"";function Ky(e,t){e.forEach(n=>{const s=mt(n);t.set(s,n)})}function Xy(e){const t=[];return b.Children.forEach(e,n=>{b.isValidElement(n)&&t.push(n)}),t}const Qy=({children:e,custom:t,initial:n=!0,onExitComplete:s,exitBeforeEnter:r,presenceAffectsLayout:a=!0,mode:o="sync"})=>{const l=b.useContext(Nr).forceRender||Hy()[0],c=sc(),d=Xy(e);let u=d;const h=b.useRef(new Map).current,f=b.useRef(u),p=b.useRef(new Map).current,m=b.useRef(!0);if(vr(()=>{m.current=!1,Ky(d,p),f.current=u}),Gy(()=>{m.current=!0,p.clear(),h.clear()}),m.current)return b.createElement(b.Fragment,null,u.map(S=>b.createElement(As,{key:mt(S),isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:o},S)));u=[...u];const x=f.current.map(mt),v=d.map(mt),w=x.length;for(let S=0;S<w;S++){const k=x[S];v.indexOf(k)===-1&&!h.has(k)&&h.set(k,void 0)}return o==="wait"&&h.size&&(u=[]),h.forEach((S,k)=>{if(v.indexOf(k)!==-1)return;const C=p.get(k);if(!C)return;const M=x.indexOf(k);let j=S;if(!j){const A=()=>{h.delete(k);const D=Array.from(p.keys()).filter(V=>!v.includes(V));if(D.forEach(V=>p.delete(V)),f.current=d.filter(V=>{const E=mt(V);return E===k||D.includes(E)}),!h.size){if(c.current===!1)return;l(),s&&s()}};j=b.createElement(As,{key:mt(C),isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:a,mode:o},C),h.set(k,j)}u.splice(M,0,j)}),u=u.map(S=>{const k=S.key;return h.has(k)?S:b.createElement(As,{key:mt(S),isPresent:!0,presenceAffectsLayout:a,mode:o},S)}),b.createElement(b.Fragment,null,h.size?u:u.map(S=>b.cloneElement(S)))},Jy=()=>{const{notifications:e,removeNotification:t}=qe(),n=r=>{switch(r){case"success":return i.jsx("i",{className:"fas fa-check-circle"});case"error":return i.jsx("i",{className:"fas fa-times-circle"});case"warning":return i.jsx("i",{className:"fas fa-exclamation-triangle"});case"info":default:return i.jsx("i",{className:"fas fa-info-circle"})}},s=r=>{switch(r){case"success":return"notification-success";case"error":return"notification-error";case"warning":return"notification-warning";case"info":default:return"notification-info"}};return i.jsxs("div",{className:"notification-container",children:[i.jsx(Qy,{children:e.map(r=>i.jsxs($y.div,{className:`notification ${s(r.type)}`,initial:{opacity:0,x:300,scale:.8},animate:{opacity:1,x:0,scale:1},exit:{opacity:0,x:300,scale:.8},transition:{duration:.3,ease:"easeOut"},layout:!0,children:[i.jsx("div",{className:"notification-icon",children:n(r.type)}),i.jsxs("div",{className:"notification-content",children:[i.jsx("div",{className:"notification-title",children:r.title}),i.jsx("div",{className:"notification-message",children:r.message})]}),i.jsx("button",{className:"notification-close",onClick:()=>t(r.id),"aria-label":"关闭通知",children:i.jsx("i",{className:"fas fa-times"})})]},r.id))}),i.jsx("style",{children:`
        .notification-container {
          position: fixed;
          top: 20px;
          right: 20px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          gap: 12px;
          max-width: 400px;
          pointer-events: none;
        }
        
        .notification {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 16px;
          background: white;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
          border-left: 4px solid;
          pointer-events: auto;
          min-width: 320px;
        }
        
        .notification-icon {
          font-size: 20px;
          margin-top: 2px;
          flex-shrink: 0;
        }
        
        .notification-content {
          flex: 1;
          min-width: 0;
        }
        
        .notification-title {
          font-weight: 600;
          font-size: 14px;
          margin-bottom: 4px;
          color: #2d3748;
          line-height: 1.4;
        }
        
        .notification-message {
          font-size: 13px;
          color: #4a5568;
          line-height: 1.4;
          word-wrap: break-word;
        }
        
        .notification-close {
          flex-shrink: 0;
          width: 24px;
          height: 24px;
          border: none;
          background: none;
          color: #a0aec0;
          cursor: pointer;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s;
          font-size: 12px;
        }
        
        .notification-close:hover {
          background-color: rgba(0, 0, 0, 0.1);
          color: #4a5568;
        }
        
        /* 不同类型的通知样式 */
        .notification-success {
          border-left-color: #38a169;
        }
        
        .notification-success .notification-icon {
          color: #38a169;
        }
        
        .notification-error {
          border-left-color: #e53e3e;
        }
        
        .notification-error .notification-icon {
          color: #e53e3e;
        }
        
        .notification-warning {
          border-left-color: #d69e2e;
        }
        
        .notification-warning .notification-icon {
          color: #d69e2e;
        }
        
        .notification-info {
          border-left-color: #3182ce;
        }
        
        .notification-info .notification-icon {
          color: #3182ce;
        }
        
        /* 暗色主题支持 */
        .dark .notification {
          background-color: #2d3748;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        }
        
        .dark .notification-title {
          color: #f7fafc;
        }
        
        .dark .notification-message {
          color: #e2e8f0;
        }
        
        .dark .notification-close {
          color: #718096;
        }
        
        .dark .notification-close:hover {
          background-color: rgba(255, 255, 255, 0.1);
          color: #e2e8f0;
        }
        
        /* 移动端适配 */
        @media (max-width: 768px) {
          .notification-container {
            top: 10px;
            right: 10px;
            left: 10px;
            max-width: none;
          }
          
          .notification {
            min-width: 0;
            width: 100%;
          }
          
          .notification-title {
            font-size: 13px;
          }
          
          .notification-message {
            font-size: 12px;
          }
        }
        
        /* 减少动画效果（为了可访问性） */
        @media (prefers-reduced-motion: reduce) {
          .notification {
            transition: none;
          }
        }
      `})]})},Ue=({children:e,requireAuth:t=!0,redirectTo:n="/login"})=>{const{isAuthenticated:s,isLoading:r,initialized:a,user:o,preferences:l}=ze(),c=Ha();b.useRef(Math.random().toString(36).substr(2,9));const d=(l==null?void 0:l.privacyAgreementAccepted)===!0||localStorage.getItem("privacyAgreementAccepted")==="true";if(r||!a)return i.jsxs("div",{className:"auth-guard-loading",children:[i.jsx(It,{size:"large"}),i.jsx("p",{children:"正在验证身份..."})]});if(t&&!s){const u=c.pathname+c.search;return sessionStorage.setItem("redirectAfterLogin",u),i.jsx(Ps,{to:n,replace:!0})}return!d&&c.pathname!=="/privacy-agreement"?(sessionStorage.setItem("redirectAfterPrivacy",c.pathname+c.search),i.jsx(Ps,{to:"/privacy-agreement",replace:!0})):i.jsx(i.Fragment,{children:e})},Zy="https://www.gmzyjx.com",eb=`${Zy}/users/register/`,tb=()=>{const e=tt(),[t,n]=b.useState({username:"",password:""}),[s,r]=b.useState(""),[a,o]=b.useState(!1),l=d=>{const{name:u,value:h,type:f,checked:p}=d.target;n(m=>({...m,[u]:f==="checkbox"?p:h}))},c=async d=>{var u,h,f,p;d.preventDefault(),r(""),o(!0);try{const m=await $.post("/users/api/token/",{username:t.username,password:t.password});if(!m.success)throw new Error(m.error||"登录失败");const{access:x,refresh:v}=m.data,w={isAuthenticated:!0,userId:0,username:t.username,email:""};localStorage.setItem("userInfo",JSON.stringify(w)),localStorage.setItem("isAuthenticated","true"),localStorage.setItem("authToken",x),localStorage.setItem("refreshToken",v),console.log("localStorage 保存完成，验证保存结果:",{userInfo:localStorage.getItem("userInfo"),isAuthenticated:localStorage.getItem("isAuthenticated"),authToken:Sn()?"已保存":"未保存",refreshToken:localStorage.getItem("refreshToken")?"已保存":"未保存"}),ze.setState({isAuthenticated:!0,user:{id:w.userId,username:w.username,email:w.email||"",firstName:"",lastName:"",isActive:!0,isStaff:!1,dateJoined:new Date().toISOString(),lastLogin:new Date().toISOString()},isLoading:!1,error:null,initialized:!0}),console.log("Store 状态已更新，当前状态:",ze.getState());try{const S=await $.get("/users/api/profile/",{headers:{Authorization:`Bearer ${x}`},withCredentials:!0});if(console.log("JWT token验证成功:",S.data),S.data.success&&S.data.data){const k={...w,userId:S.data.data.id,email:S.data.data.email||""};localStorage.setItem("userInfo",JSON.stringify(k)),console.log("更新用户信息:",k)}}catch(S){console.log("验证JWT token失败:",S)}setTimeout(()=>{const S=ze.getState();console.log("导航前最终状态验证:",{isAuthenticated:S.isAuthenticated,hasUser:!!S.user,initialized:S.initialized,isLoading:S.isLoading,localStorage:{isAuthenticated:localStorage.getItem("isAuthenticated"),userInfo:localStorage.getItem("userInfo")?"exists":"null"}});const k=sessionStorage.getItem("redirectAfterLogin");k?(console.log("重定向到保存的URL:",k),sessionStorage.removeItem("redirectAfterLogin"),e(k,{replace:!0})):(console.log("重定向到默认页面: /sessions"),e("/sessions",{replace:!0}))},500)}catch(m){console.error("登录错误:",m),(h=(u=m.response)==null?void 0:u.data)!=null&&h.error?r(m.response.data.error):(p=(f=m.response)==null?void 0:f.data)!=null&&p.detail?r(m.response.data.detail):r("登录失败，请检查您的用户名和密码")}finally{o(!1)}};return i.jsx("div",{className:"auth-page login-page",children:i.jsxs("div",{className:"auth-container",children:[i.jsxs("div",{className:"auth-header",children:[i.jsx("h1",{children:"登录"}),i.jsx("p",{children:"登录您的账户以使用AI诊断系统"})]}),s&&i.jsx("div",{className:"auth-error",children:s}),i.jsxs("form",{onSubmit:c,className:"auth-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"username",children:"用户名"}),i.jsx("input",{type:"text",id:"username",name:"username",value:t.username,onChange:l,required:!0,autoComplete:"username","aria-label":"用户名",placeholder:"请输入用户名"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"password",children:"密码"}),i.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:l,required:!0,autoComplete:"current-password","aria-label":"密码",placeholder:"请输入密码"})]}),i.jsx("div",{className:"form-actions",children:i.jsx("button",{type:"submit",className:"btn-primary",disabled:a,"aria-busy":a,children:a?"登录中...":"登录"})})]}),i.jsx("div",{className:"auth-links",children:i.jsx("a",{href:eb,className:"auth-link",target:"_blank",rel:"noopener noreferrer",children:"没有账户？注册"})}),i.jsx("div",{className:"auth-footer",children:i.jsxs("p",{children:["登录即表示您同意我们的",i.jsx(yt,{to:"/terms",children:"服务条款"}),"和",i.jsx(yt,{to:"/privacy",children:"隐私政策"})]})})]})})},nb=()=>{const e=tt(),[t,n]=b.useState({username:"",email:"",password:"",confirmPassword:"",firstName:"",lastName:"",rememberMe:!1}),[s,r]=b.useState({}),[a,o]=b.useState(!1),[l,c]=b.useState(""),d=()=>{const f={};t.username.trim()?t.username.length<3&&(f.username="用户名至少需要3个字符"):f.username="用户名不能为空";const p=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;return t.email.trim()?p.test(t.email)||(f.email="请输入有效的邮箱地址"):f.email="邮箱不能为空",t.password?t.password.length<6&&(f.password="密码至少需要6个字符"):f.password="密码不能为空",t.password!==t.confirmPassword&&(f.confirmPassword="两次输入的密码不一致"),r(f),Object.keys(f).length===0},u=f=>{const{name:p,value:m,type:x,checked:v}=f.target;n(w=>({...w,[p]:x==="checkbox"?v:m})),s[p]&&r(w=>({...w,[p]:""}))},h=async f=>{var p,m;if(f.preventDefault(),c(""),!!d()){o(!0);try{const x=await $.post("/users/register/",{username:t.username,email:t.email,password:t.password,first_name:t.firstName,last_name:t.lastName});if(x.success){const v=await $.post("/users/api/token/",{username:t.username,password:t.password});if(v.success&&v.data.access){localStorage.setItem("authToken",v.data.access),localStorage.setItem("refreshToken",v.data.refresh);const w=t.rememberMe?localStorage:sessionStorage;w.setItem("authToken",v.data.access),w.setItem("refreshToken",v.data.refresh);const{loadCurrentUser:S}=ze.getState();await S(),console.log("注册成功，准备跳转到/sessions"),e("/sessions",{replace:!0})}}else c(((p=x.data)==null?void 0:p.message)||"注册失败，请稍后重试")}catch(x){if(console.error("注册错误:",x),(m=x.response)!=null&&m.data){const v=x.response.data,w={};for(const S in v)S!=="non_field_errors"&&(w[S]=Array.isArray(v[S])?v[S][0]:v[S]);Object.keys(w).length>0&&r(w),v.non_field_errors?c(Array.isArray(v.non_field_errors)?v.non_field_errors[0]:v.non_field_errors):v.detail?c(v.detail):Object.keys(w).length===0&&c("注册失败，请检查您的信息并重试")}else c("注册失败，请稍后重试")}finally{o(!1)}}};return i.jsx("div",{className:"auth-page register-page",children:i.jsxs("div",{className:"auth-container",children:[i.jsxs("div",{className:"auth-header",children:[i.jsx("h1",{children:"注册账户"}),i.jsx("p",{children:"创建您的账户以使用AI诊断系统"})]}),l&&i.jsx("div",{className:"auth-error",role:"alert",children:l}),i.jsxs("form",{onSubmit:h,className:"auth-form",noValidate:!0,children:[i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"username",children:["用户名 ",i.jsx("span",{className:"required",children:"*"})]}),i.jsx("input",{type:"text",id:"username",name:"username",value:t.username,onChange:u,required:!0,autoComplete:"username","aria-label":"用户名","aria-required":"true","aria-invalid":!!s.username,"aria-describedby":s.username?"username-error":void 0}),s.username&&i.jsx("div",{className:"field-error",id:"username-error",role:"alert",children:s.username})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"email",children:["邮箱 ",i.jsx("span",{className:"required",children:"*"})]}),i.jsx("input",{type:"email",id:"email",name:"email",value:t.email,onChange:u,required:!0,autoComplete:"email","aria-label":"邮箱","aria-required":"true","aria-invalid":!!s.email,"aria-describedby":s.email?"email-error":void 0}),s.email&&i.jsx("div",{className:"field-error",id:"email-error",role:"alert",children:s.email})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"firstName",children:"姓"}),i.jsx("input",{type:"text",id:"firstName",name:"firstName",value:t.firstName,onChange:u,autoComplete:"given-name","aria-label":"姓"})]}),i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"lastName",children:"名"}),i.jsx("input",{type:"text",id:"lastName",name:"lastName",value:t.lastName,onChange:u,autoComplete:"family-name","aria-label":"名"})]})]}),i.jsxs("div",{className:"form-row",children:[i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"password",children:["密码 ",i.jsx("span",{className:"required",children:"*"})]}),i.jsx("input",{type:"password",id:"password",name:"password",value:t.password,onChange:u,required:!0,autoComplete:"new-password","aria-label":"密码","aria-required":"true","aria-invalid":!!s.password,"aria-describedby":s.password?"password-error":void 0}),s.password&&i.jsx("div",{className:"field-error",id:"password-error",role:"alert",children:s.password})]}),i.jsxs("div",{className:"form-group",children:[i.jsxs("label",{htmlFor:"confirmPassword",children:["确认密码 ",i.jsx("span",{className:"required",children:"*"})]}),i.jsx("input",{type:"password",id:"confirmPassword",name:"confirmPassword",value:t.confirmPassword,onChange:u,required:!0,autoComplete:"new-password","aria-label":"确认密码","aria-required":"true","aria-invalid":!!s.confirmPassword,"aria-describedby":s.confirmPassword?"confirm-password-error":void 0}),s.confirmPassword&&i.jsx("div",{className:"field-error",id:"confirm-password-error",role:"alert",children:s.confirmPassword})]})]}),i.jsxs("div",{className:"checkbox-group",children:[i.jsx("input",{type:"checkbox",id:"rememberMe",name:"rememberMe",checked:t.rememberMe,onChange:u,"aria-label":"记住我"}),i.jsx("label",{htmlFor:"rememberMe",children:"记住我（保持登录状态）"})]}),i.jsx("div",{className:"form-actions",children:i.jsx("button",{type:"submit",className:"btn-primary",disabled:a,"aria-busy":a,children:a?"注册中...":"注册"})})]}),i.jsx("div",{className:"auth-links",children:i.jsx(yt,{to:"/login",className:"auth-link",children:"已有账户？登录"})}),i.jsx("div",{className:"auth-footer",children:i.jsxs("p",{children:["注册即表示您同意我们的",i.jsx(yt,{to:"/terms",children:"服务条款"}),"和",i.jsx(yt,{to:"/privacy",children:"隐私政策"})]})})]})})},sb=()=>{const[e,t]=b.useState(""),[n,s]=b.useState(!1),[r,a]=b.useState(""),[o,l]=b.useState(""),c=u=>{t(u.target.value),a("")},d=async u=>{var h,f;u.preventDefault(),a(""),l(""),s(!0);try{const p=await $.post("/users/password-reset/",{email:e});p.success?(l("密码重置链接已发送到您的邮箱，请查收。"),t("")):a(p.error||"发送重置链接失败，请稍后重试。")}catch(p){console.error("密码重置错误:",p),a(((f=(h=p.response)==null?void 0:h.data)==null?void 0:f.error)||"发送重置链接失败，请稍后重试。")}finally{s(!1)}};return i.jsx("div",{className:"auth-page forgot-password-page",children:i.jsxs("div",{className:"auth-container",children:[i.jsxs("div",{className:"auth-header",children:[i.jsx("h1",{children:"找回密码"}),i.jsx("p",{children:"请输入您的邮箱地址，我们将向您发送密码重置链接"})]}),r&&i.jsx("div",{className:"auth-error",role:"alert",children:r}),o&&i.jsxs("div",{className:"auth-success",role:"status",children:[i.jsx("div",{className:"success-icon",children:i.jsx("i",{className:"fas fa-check-circle","aria-hidden":"true"})}),i.jsx("h2",{children:"邮件已发送"}),i.jsxs("p",{children:["我们已向 ",i.jsx("strong",{children:e})," 发送了一封包含密码重置链接的邮件。 请检查您的收件箱，并按照邮件中的指示进行操作。"]}),i.jsxs("p",{className:"small",children:["如果您没有收到邮件，请检查垃圾邮件文件夹，或者",i.jsx("button",{className:"text-button",onClick:d,disabled:n,children:"重新发送"})]}),i.jsx("div",{className:"auth-links mt-4",children:i.jsx(yt,{to:"/login",className:"btn-secondary",children:"返回登录"})})]}),!o&&i.jsxs("form",{onSubmit:d,className:"auth-form",children:[i.jsxs("div",{className:"form-group",children:[i.jsx("label",{htmlFor:"email",children:"邮箱地址"}),i.jsx("input",{type:"email",id:"email",name:"email",value:e,onChange:c,required:!0,autoComplete:"email","aria-label":"邮箱地址","aria-required":"true","aria-invalid":!!r,"aria-describedby":r?"email-error":void 0,placeholder:"请输入您的邮箱地址"}),r&&i.jsx("div",{className:"field-error",id:"email-error",role:"alert",children:r})]}),i.jsx("div",{className:"form-actions",children:i.jsx("button",{type:"submit",className:"btn-primary",disabled:n,"aria-busy":n,children:n?"发送中...":"发送重置链接"})})]}),i.jsx("div",{className:"auth-links",children:i.jsx(yt,{to:"/login",className:"auth-link",children:"返回登录"})})]})})},rb=({onLocationChange:e})=>{const t=Ha();return b.useEffect(()=>{e(t.pathname)},[t.pathname,e]),null};function ib(){const{isLoading:e,initialize:t}=ze(),{globalLoading:n,setIsMobile:s}=qe();b.useEffect(()=>{(async()=>{console.log("App: 开始初始化应用"),await t(),console.log("App: 应用初始化完成")})()},[]),b.useEffect(()=>{const a=()=>{s(window.innerWidth<=768)};return a(),window.addEventListener("resize",a),()=>{window.removeEventListener("resize",a)}},[s]);const r=b.useCallback(()=>{},[]);return e||n?i.jsxs("div",{className:"app-loading",children:[i.jsx(It,{size:"large"}),i.jsx("p",{children:"正在加载..."})]}):i.jsx(Df,{children:i.jsxs("div",{className:"app",children:[i.jsxs(lc,{children:[i.jsx(rb,{onLocationChange:r}),i.jsxs(cc,{children:[i.jsx(Se,{path:"/login",element:i.jsx(tb,{})}),i.jsx(Se,{path:"/register",element:i.jsx(nb,{})}),i.jsx(Se,{path:"/forgot-password",element:i.jsx(sb,{})}),i.jsx(Se,{path:"/",element:i.jsx(Ue,{children:i.jsx(Ps,{to:"/sessions",replace:!0})})}),i.jsx(Se,{path:"/sessions",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(bf,{})})})}),i.jsx(Se,{path:"/chat/:sessionId",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(mf,{})})})}),i.jsx(Se,{path:"/share-hall",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(wf,{})})})}),i.jsx(Se,{path:"/shared",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(Sf,{})})})}),i.jsx(Se,{path:"/shared/:sharedId",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(Nf,{})})})}),i.jsx(Se,{path:"/profile",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(Cf,{})})})}),i.jsx(Se,{path:"/settings",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(Tf,{})})})}),i.jsx(Se,{path:"/subscription",element:i.jsx(Ue,{children:i.jsx(_e,{children:i.jsx(Af,{})})})}),i.jsx(Se,{path:"/privacy-agreement",element:i.jsx(Ue,{children:i.jsx(Pf,{})})}),i.jsx(Se,{path:"/sso-test",element:i.jsx(_e,{children:i.jsx(If,{})})}),i.jsx(Se,{path:"*",element:i.jsx(_e,{children:i.jsxs("div",{className:"error-page",children:[i.jsx("h1",{children:"页面未找到"}),i.jsxs("p",{children:["您访问的页面不存在: ",window.location.pathname]}),i.jsx("button",{onClick:()=>window.history.back(),children:"返回上一页"})]})})})]})]}),i.jsx(Jy,{})]})})}const ab="modulepreload",ob=function(e){return"/"+e},_a={},lb=function(t,n,s){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),l=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(c=>{if(c=ob(c),c in _a)return;_a[c]=!0;const d=c.endsWith(".css"),u=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${c}"]${u}`))return;const h=document.createElement("link");if(h.rel=d?"stylesheet":ab,d||(h.as="script"),h.crossOrigin="",h.href=c,l&&h.setAttribute("nonce",l),document.head.appendChild(h),d)return new Promise((f,p)=>{h.addEventListener("load",f),h.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${c}`)))})}))}function a(o){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=o,window.dispatchEvent(l),!l.defaultPrevented)throw o}return r.then(o=>{for(const l of o||[])l.status==="rejected"&&a(l.reason);return t().catch(a)})};function cb(e={}){const{immediate:t=!1,onNeedRefresh:n,onOfflineReady:s,onRegistered:r,onRegisteredSW:a,onRegisterError:o}=e;let l,c;const d=async(h=!0)=>{await c};async function u(){if("serviceWorker"in navigator){if(l=await lb(async()=>{const{Workbox:h}=await import("./workbox-window.prod.es5-B9K5rw8f.js");return{Workbox:h}},[]).then(({Workbox:h})=>new h("/sw.js",{scope:"/",type:"classic"})).catch(h=>{o==null||o(h)}),!l)return;l.addEventListener("activated",h=>{(h.isUpdate||h.isExternal)&&window.location.reload()}),l.addEventListener("installed",h=>{h.isUpdate||s==null||s()}),l.register({immediate:t}).then(h=>{a?a("/sw.js",h):r==null||r(h)}).catch(h=>{o==null||o(h)})}}return c=u(),d}const ub=cb({onNeedRefresh(){confirm("有新版本可用，是否更新？")&&ub(!0)},onOfflineReady(){console.log("应用已准备好离线使用")}});Is.createRoot(document.getElementById("root")).render(i.jsx(nr.StrictMode,{children:i.jsx(ib,{})}));
