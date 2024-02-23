"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1066],{17832:function(e,n,t){t.d(n,{L:function(){return r}});var o=t(67294),r=o.useLayoutEffect},32826:function(e,n,t){t.d(n,{_:function(){return s}});var o=t(82670),r=t(67294),i=t(24280),a=!!window.localStorage;function s(e,n,t){var s=(0,r.useState)((function(){if(!a)return n;var t,o=localStorage.getItem(e);return null!==(t=(0,i.a)(o))&&void 0!==t?t:n})),c=s[0],u=s[1],l=(0,r.useState)(!1),d=l[0],m=l[1],f=(0,r.useRef)(n),v=(0,r.useCallback)((function(n,t){try{u((function(r){var i=(0,o.Z)(n,Function)?n(r):n;return(null===t||void 0===t?void 0:t.skipStorage)||!a||(void 0===i?localStorage.removeItem(e):localStorage.setItem(e,JSON.stringify(i))),i}))}catch(r){}}),[e]);return(0,r.useEffect)((function(){if(a){var n=localStorage.getItem(e),o=(0,i.a)(n);((null===t||void 0===t?void 0:t.writeIfNotExists)?v:u)(null!==o&&void 0!==o?o:f.current),m(!0)}}),[e,null===t||void 0===t?void 0:t.writeIfNotExists,u,v]),[c,v,d]}},67024:function(e,n,t){t.d(n,{y:function(){return c}});var o=t(67294),r=t(17832),i=t(10253),a=(t(85893),new Map),s=(0,o.createContext)({insertCss:function(e){if(e){var n=(0,i.Z)(e._getContent()[0],1)[0],t=a.get(n)||0;if(a.set(n,t+1),!t&&!document.getElementById(n)){var o=document.createElement("style");o.id=n,o.textContent=e._getCss(),document.head.appendChild(o)}return function(){var e=a.get(n)||0;if(e>1)a.set(n,e-1);else{var t=document.getElementById(n);t&&document.head.removeChild(t),a.delete(n)}}}}}),c=function(e){var n=(0,o.useContext)(s).insertCss;(0,r.L)((function(){return e&&n(e)}),[n,e])}},97425:function(e,n,t){t.d(n,{i:function(){return i}});var o=t(67294),r=t(9770),i=function(){var e=(0,o.useCallback)((function(){return{width:r.C5?window.innerWidth:void 0,height:r.C5?window.innerHeight:void 0}}),[]),n=(0,o.useState)(e),t=n[0],i=n[1];return(0,o.useEffect)((function(){var n=function(){i(e())};return!!r.C5&&(window.addEventListener("resize",n),function(){return window.removeEventListener("resize",n)})}),[e]),t}},35094:function(e,n,t){var o;t.d(n,{D:function(){return o}}),function(e){e.LandingPagePremiumLink="lp_pl",e.NavbarOldPremiumLink="nb_opl",e.StoreOldPremiumLink="sto_opl",e.NavbarNewPremiumLink="nb_npl",e.StoreNewPremiumLink="sto_npl",e.UserMenuPremiumLink="um_pl",e.MockInterviewCompanyModal="mi_cm",e.QuestionDetailPremiumQuestion="qd3_pq",e.QuestionDetailPremiumSolution="qd3_ps",e.QuestionDetailPremiumVideoSolution="qd3_pvs",e.QuestionDetailCompanyModal="qd3_cm",e.QuestionDetailLightningJudger="qd3_lj",e.QuestionDetailSubmitRateLimit="qd3_srl",e.QuestionDetailAutocomplete="qd3_ac",e.QuestionDetailDebuggerTab="qd3_dt",e.QuestionDetailAiHelper="qd3_ai",e.QuestionDetailLayoutManager="qd3_lm",e.QuestionDetailCloudStorage="qd3_cs",e.QuestionDetailAdvanceSettings="qd3_adv",e.ProblemsetFrequency="ps_fq",e.ProblemsetPremiumQuestion="ps_pq",e.ProblemsetCompanyTag="ql_ct",e.ProblemsetFilterCompanyTag="ql_fct",e.ExplorePremiumCardStartButton="ex_pcs",e.ExplorePremiumItem="ex_pi",e.ExplorePremiumSolution="ex_ps",e.ExploreVACPremium="ex_vac",e.StudyPlanV2PremiumPlan="sp2_pp",e.StudyPlanV2PremiumGroup="sp2_pg",e.StudyPlanV2PremiumGroupCalendar="sp2_pc",e.PremiumBetaFeature="pb_f",e.AdSenseRemove="ad_rm",e.StudyPlanCard="sp_cd"}(o||(o={}))},24280:function(e,n,t){t.d(n,{a:function(){return r}});var o=t(64487),r=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(void 0===e||null===e)return null===e&&n.allowNull?null:void 0;try{return JSON.parse(e)}catch(t){return void(0,o.$e)((function(n){n.setTag("source","safeParseJson"),n.setExtra("jsonStr",e),(0,o.Tb)(t)}))}}},84945:function(e,n,t){t.d(n,{y:function(){return m}});var o=t(29815),r=t(85893),i=(t(67294),t(20745)),a=t(51295),s=t(42437),c=t(6905),u=function(e){return(0,a.yI)("fixed bottom-0 left-0 right-0 pointer-events-none z-message",e)},l=function(e){var n=document.getElementById("messages-provider");if(!n){var t=document.createElement("div");t.id="messages-provider",document.body.appendChild(t),n=t,window.addEventListener("scroll",(function(){n&&(n.className=u(e))}))}return n.className=u(e),n.style.top=function(){var e=54+(0,o.Z)(document.getElementsByClassName(s.l)).reduce((function(e,n){return e+n.clientHeight}),0);return window.innerWidth<680?54:window.scrollY<=e?e-window.scrollY:4}()+"px",n},d=function(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:.5,o=arguments.length>3?arguments[3]:void 0,a=arguments.length>4?arguments[4]:void 0,s=arguments.length>5?arguments[5]:void 0,u=l(a||""),d=document.createElement("div");d.className="transition-opacity duration-500 ease-in-out z-message",u.appendChild(d);var m,f=(0,i.createRoot)(d),v=-1,p=function(e){v=window.setTimeout((function(){d.className+=" opacity-0",m&&m(o&&o()),setTimeout((function(){f.unmount(),d.remove()}),500)}),e)},h=function(e){-1!==v&&(clearTimeout(v),e||p(1e3*t))};return f.render((0,r.jsx)(c.Z,{content:n,type:e,onEnter:function(){return h(!0)},onLeave:function(){return h(!1)},className:s})),new Promise((function(e){m=e,p(1e3*t)}))},m={info:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.duration,o=void 0===t?2:t,r=n.onClose,i=n.containerClassName,a=n.itemClassName;return d("info",e,o,r,i,a)},warn:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.duration,o=void 0===t?2:t,r=n.onClose,i=n.containerClassName,a=n.itemClassName;return d("warning",e,o,r,i,a)},warning:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.duration,o=void 0===t?2:t,r=n.onClose,i=n.containerClassName,a=n.itemClassName;return d("warning",e,o,r,i,a)},success:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.duration,o=void 0===t?2:t,r=n.onClose,i=n.containerClassName,a=n.itemClassName;return d("success",e,o,r,i,a)},error:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.duration,o=void 0===t?2:t,r=n.onClose,i=n.containerClassName,a=n.itemClassName;return d("error",e,o,r,i,a)},plain:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=n.duration,o=void 0===t?2:t,r=n.onClose,i=n.containerClassName,a=n.itemClassName;return d("plain",e,o,r,i,a)}}},6905:function(e,n,t){var o=t(85893),r=(t(67294),t(84539)),i=t(51295),a=t(67021),s=t(86639),c=t(1452),u=t(15371);n.Z=function(e){var n=e.className,t=e.content,l=e.type,d=e.onEnter,m=void 0===d?function(){return null}:d,f=e.onLeave,v=void 0===f?function(){return null}:f,p={info:(0,o.jsx)(a.e,{width:"18px",height:"18px",className:"mr-2 fill-blue-s dark:fill-dark-blue-s"}),error:(0,o.jsx)(s.X,{width:"18px",height:"18px",className:"mr-2 fill-red-s dark:fill-dark-red-s"}),warning:(0,o.jsx)(a.e,{width:"18px",height:"18px",className:"mr-2 fill-yellow dark:fill-dark-yellow"}),success:(0,o.jsx)(c.A,{width:"18px",height:"18px",className:"mr-2 fill-green-s dark:fill-dark-green-s"}),plain:(0,o.jsx)(o.Fragment,{})};return(0,o.jsx)(r.u,{appear:!0,show:!0,enter:"transition duration-500 ease-out",enterFrom:"transform scale-95 opacity-0",enterTo:"transform scale-100 opacity-100",leave:"transition duration-500 ease-out",leaveFrom:"transform scale-100 opacity-100",leaveTo:"transform scale-95 opacity-0",children:(0,o.jsx)("div",{className:"flex justify-center",children:(0,o.jsxs)("div",{className:(0,i.yI)("px-4 py-1.5",u.Cj.bgPaper,u.Cj.label1,u.eq.commandBar,"pointer-events-auto my-2 flex items-center rounded-full",n),onMouseEnter:m,onMouseLeave:v,children:[p[l]," ",(0,o.jsx)("span",{children:t})]})})})}},42437:function(e,n,t){t.d(n,{l:function(){return o}});var o="announcement-bar__container"},25398:function(e,n,t){t.d(n,{Q:function(){return f},z:function(){return m}});var o=t(14924),r=t(26042),i=t(69396),a=t(99534),s=t(85893),c=t(67294),u=t(51295),l=t(71863),d=t(15371),m=(0,c.forwardRef)((function(e,n){var t,c=e.variant,m=void 0===c?"secondary":c,f=e.readonly,v=e.onClick,p=e.loading,h=e.className,g=e.block,b=(0,a.Z)(e,["variant","readonly","onClick","loading","className","block"]),_=b.disabled||p;return(0,s.jsxs)("button",(0,i.Z)((0,r.Z)({},b),{onClick:f?void 0:v,ref:n,disabled:_,className:(0,u.yI)("rounded px-3 py-1.5 font-medium","items-center whitespace-nowrap","focus:outline-none",{"cursor-not-allowed opacity-50":_||f},{"inline-flex":!g,flex:g},(t={},(0,o.Z)(t,(0,u.yI)("text-label-r",d.Cj.bgGreenStandard,d.Cj.bgGreen3Hover),"primary"===m),(0,o.Z)(t,(0,u.yI)(d.Cj.fill3,!_&&d.Cj.fill2Hover,d.Cj.label2),"secondary"===m),(0,o.Z)(t,(0,u.yI)("bg-gray-8 dark:bg-brand-orange",d.Cj.labelReverse),"black"===m),(0,o.Z)(t,(0,u.yI)(d.Cj.bgBrandOrange,d.Cj.labelReverse),"premium"===m),(0,o.Z)(t,(0,u.yI)(d.Cj.bgRedStandard,d.Cj.labelReverse),"danger"===m),(0,o.Z)(t,(0,u.yI)(d.Cj.bgBlueStandard,"hover:bg-dark-blue-s",d.Cj.labelReverse),"blue"===m),t),h),children:[p&&(0,s.jsx)(l.V,{className:"mr-2 animate-spin"}),e.children]}))})),f=(0,c.forwardRef)((function(e,n){var t,c=e.variant,m=void 0===c?"secondary":c,f=e.loading,v=e.className,p=(0,a.Z)(e,["variant","loading","className"]),h=p.disabled||f;return(0,s.jsxs)("a",(0,i.Z)((0,r.Z)({},p),{ref:n,className:(0,u.yI)("rounded px-3 py-1.5 font-medium","inline-flex items-center whitespace-nowrap","transition-all focus:outline-none",{"cursor-not-allowed opacity-50":h},(t={},(0,o.Z)(t,(0,u.yI)(d.Cj.labelReverse,d.Cj.labelReverseHover,d.Cj.fillBlueStandard),"primary"===m),(0,o.Z)(t,(0,u.yI)(d.Cj.fill3,!h&&d.Cj.fill2Hover,d.Cj.label2,d.Cj.label2Hover),"secondary"===m),t),v),children:[f&&(0,s.jsx)(l.V,{className:"mr-2 animate-spin"}),e.children]}))}))},8290:function(e,n,t){t.d(n,{u:function(){return m}});var o=t(14924),r=t(85893),i=t(84539),a=t(67294),s=t(11163),c=t.n(s),u=t(51295),l=t(15371),d=t(385);function m(e){var n=e.visible,t=e.onCancel,s=e.title,m=e.children,f=e.afterClose,v=e.className,p=e.modalClassName,h=e.closeIconClassName,g=e.closeBtnClassName,b=e.titleRowClass,_=e.titleClassName,y=e.maskClassName,w=e.closable,C=void 0===w||w,x=e.showCloseIcon,j=void 0===x||x,P=e.maskClosable,S=void 0!==P&&P,N=e.stopMouseDownPropagation,k=e.shouldCloseOnEsc,R=void 0===k||k,I=e.renderPrefixChildren,A=e.noShadow,L=void 0!==A&&A,D=e.beforeHistoryChangeEnable,Z=void 0===D||D,E=e.customRef,M=e.customTransition,q=void 0===M?{}:M,z=e.customStyle,F=e.beforeLeave;(0,a.useEffect)((function(){return c().events.on("beforeHistoryChange",(function(){Z&&t()})),function(){return c().events.off("beforeHistoryChange",(function(){return Z&&t()}))}}),[Z,t]),(0,a.useEffect)((function(){if(R){var e=function(e){"Escape"===e.key&&t()};return window.addEventListener("keyup",e),function(){return window.removeEventListener("keyup",e)}}}),[t,R]);var B=(0,a.useCallback)((function(e){return e.stopPropagation()}),[]);return(0,r.jsx)(i.u,{appear:!0,show:n,afterLeave:f,children:(0,r.jsx)("div",{"aria-modal":"true",role:"dialog",className:(0,u.yI)("z-modal fixed inset-0 overflow-y-auto",p),onMouseDown:null!==N&&void 0!==N?N:B,children:(0,r.jsxs)("div",{className:"flex min-h-screen items-center justify-center px-4",children:[(0,r.jsx)(i.u.Child,{enter:"ease-out duration-300",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"ease-in duration-200",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:(0,r.jsx)("div",{"aria-hidden":"true",onClick:S?t:void 0,className:(0,u.yI)("bg-gray-8 fixed inset-0 opacity-60",y)})}),null===I||void 0===I?void 0:I.map((function(e,n){return e?(0,r.jsx)(i.u.Child,{as:a.Fragment,enter:(0,u.yI)("ease-out duration-300",q.enter),enterFrom:(0,u.yI)("opacity-0 scale-95",q.enterFrom),enterTo:(0,u.yI)("opacity-100 scale-100",q.enterTo),leave:(0,u.yI)("ease-in duration-200",q.leave),leaveFrom:(0,u.yI)("opacity-100 scale-100",q.leaveFrom),leaveTo:(0,u.yI)("opacity-0 scale-95",q.leaveTo),children:e},"prefix-child-".concat(n)):null})),(0,r.jsx)(i.u.Child,{as:a.Fragment,enter:(0,u.yI)("ease-out duration-300",q.enter),enterFrom:(0,u.yI)("opacity-0 scale-95",q.enterFrom),enterTo:(0,u.yI)("opacity-100 scale-100",q.enterTo),leave:(0,u.yI)("ease-in duration-200",q.leave),leaveFrom:(0,u.yI)("opacity-100 scale-100",q.leaveFrom),leaveTo:(0,u.yI)("opacity-0 scale-95",q.leaveTo),beforeLeave:F,children:(0,r.jsxs)("div",{className:(0,u.yI)("my-8 inline-block min-w-full transform overflow-hidden rounded-[13px] p-5 text-left transition-all",l.Cj.bgOverlay3,(0,o.Z)({"md:min-w-[420px]":!(null===v||void 0===v?void 0:v.includes("md:min-w-"))},l.eq.modal,!L),v),ref:E,style:z,children:[s?(0,r.jsxs)("div",{className:(0,u.yI)("flex items-center justify-between",b),children:[(0,r.jsx)("h3",{className:(0,u.yI)("text-lg font-medium",_),children:s}),C&&j&&(0,r.jsx)("button",{onClick:t,className:(0,u.yI)("cursor-pointer rounded transition-all",l.Cj.fill3Hover,g),children:(0,r.jsx)(d.F,{className:(0,u.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6",h)})})]}):(0,r.jsx)(r.Fragment,{children:C&&(0,r.jsx)("button",{onClick:t,className:(0,u.yI)("cursor-pointer rounded transition-all","z-modal absolute right-0 top-0 m-5",g),children:(0,r.jsx)(d.F,{className:(0,u.yI)("text-gray-6 dark:text-dark-gray-6 h-6 w-6",h)})})}),m]})})]})})})}},53923:function(e,n,t){t.d(n,{D:function(){return c}});var o=t(85893),r=(t(67294),t(94184)),i=t.n(r),a=t(82010),s=t(73986);function c(e){var n=(0,a.F)().theme;return(0,o.jsx)(s.y,{src:"dark"===n?"/_next/static/images/null_dark-3f55ffa94690763ee68c9a2be3074a42.png":"/_next/static/images/null_light-53585615fd723ba992bd2df7a10d10d1.png",className:i()(e.className,{"w-[200px]":!e.className}),alt:"\u6570\u636e\u4e3a\u7a7a"})}},68616:function(e,n,t){var o;t.d(n,{P:function(){return o}}),function(e){e.AuthenticationAccountRecovery="authentication_account_recovery",e.AuthenticationIgnoreBetaUserFlow="authentication_ignore_beta_user_flow",e.AuthenticationMockUser="authentication_mock_user",e.AuthenticationMutateArchiveUser="authentication_mutate_archive_user",e.AuthenticationQueryArchivedUsers="authentication_query_archived_users",e.AuthenticationQueryUserInfo="authentication_query_user_info",e.AuthenticationSeeUserEmail="authentication_see_user_email",e.AuthenticationSeeUserId="authentication_see_user_id",e.AuthenticationSeeUserManagement="authentication_see_user_management",e.AuthenticationUpdateSchoolInfo="authentication_update_school_info",e.CommonChangeTag="common_change_tag",e.ContestPrivateAccessDashboard="contest_private_access_dashboard",e.ContestSeeAll="contest_see_all",e.ContestSeePrivate="contest_see_private",e.ContestSeePrivateRanking="contest_see_private_ranking",e.ContestSeePrivateWithoutRegistration="contest_see_private_without_registration",e.ContributionAcceptReject="contribution_accept_reject",e.ContributionSeeDashboard="contribution_see_dashboard",e.DangerZoneViewAdmin="danger_zone_view_admin",e.DebuggerBetaAccess="debugger_beta_access",e.DiscussChangeContestPost="discuss_change_contest_post",e.DiscussChangePost="discuss_change_post",e.DiscussDeleteContestPost="discuss_delete_contest_post",e.DiscussDeletePost="discuss_delete_post",e.DiscussGetAllPosts="discuss_get_all_posts",e.DiscussHidePost="discuss_hide_post",e.DiscussPinContestTopic="discuss_pin_contest_topic",e.DiscussPinTopic="discuss_pin_topic",e.DiscussReviewContestPost="discuss_review_contest_post",e.DiscussReviewPost="discuss_review_post",e.DiscussSeeContestUnpublishedPost="discuss_see_contest_unpublished_post",e.DiscussSeeHiddenPost="discuss_see_hidden_post",e.DiscussSeeUnpublishedPost="discuss_see_unpublished_post",e.EmailBatch="email_batch",e.EmailBatchCreateEvent="email_batch_create_event",e.EmailBatchSendCustom="email_batch_send_custom",e.LibraryChangeQuestion="library_change_question",e.LibraryChangeQuestionCategory="library_change_question_category",e.LibraryContentAccess="library_content_access",e.LibraryContentEditor="library_content_editor",e.LibrarySeeAllFields="library_see_all_fields",e.LibrarySeeAllProblems="library_see_all_problems",e.Manage="manage",e.ManageBlacklistedWords="manage_blacklisted_words",e.ManageDiscuss="manage_discuss",e.ScoreMutateGiveLeetcoin="score_mutate_give_leetcoin",e.ScoreSeeAdminPanel="score_see_admin_panel",e.SubmissionSeeDetails="submission_see_details",e.SolutionMoveToDiscussion="solution_move_to_discussion"}(o||(o={}))},80315:function(e,n,t){t.d(n,{F9:function(){return r},Gi:function(){return i},lF:function(){return a}});var o=t(68616);function r(e,n){return!(!e||!e.length)&&e.includes(n)}function i(e,n){return e.some((function(e){return n.includes(e)}))}var a=[o.P.AuthenticationSeeUserManagement,o.P.ScoreSeeAdminPanel,o.P.ContestPrivateAccessDashboard,o.P.LibrarySeeAllFields,o.P.LibrarySeeAllProblems]},16142:function(e,n,t){t.d(n,{q:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M4.4 14a2 2 0 100-4 2 2 0 000 4zm9.6-2a2 2 0 11-4 0 2 2 0 014 0zm7.6 0a2 2 0 11-4 0 2 2 0 014 0z",clipRule:"evenodd"})}))}))},64572:function(e,n,t){t.d(n,{k:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M7.174 5.619a8.064 8.064 0 011.635-.946l.29-1.158A2 2 0 0111.039 2h1.922a2 2 0 011.94 1.515l.29 1.158c.584.252 1.132.57 1.635.946l1.15-.329a2 2 0 012.282.923l.961 1.665a2 2 0 01-.342 2.437l-.86.832a8.151 8.151 0 010 1.888l.86.83a2 2 0 01.342 2.438l-.96 1.665a2 2 0 01-2.283.923l-1.15-.329a8.063 8.063 0 01-1.635.946l-.29 1.158a2 2 0 01-1.94 1.515H11.04a2 2 0 01-1.94-1.515l-.29-1.158a8.064 8.064 0 01-1.635-.946l-1.15.329a2 2 0 01-2.282-.923l-.961-1.665a2 2 0 01.342-2.437l.86-.831a8.158 8.158 0 010-1.889l-.86-.83a2 2 0 01-.342-2.438l.96-1.665a2 2 0 012.283-.923l1.15.329zm-1.7 1.594l-.961 1.665 1.57 1.518-.114.982a6.157 6.157 0 000 1.425l.114.982-1.57 1.518.96 1.665 2.104-.601.794.593c.38.284.793.523 1.23.711l.908.392.53 2.118h1.922l.53-2.118.909-.392a6.07 6.07 0 001.23-.711l.793-.593 2.103.601.961-1.665-1.57-1.518.114-.982a6.172 6.172 0 000-1.425l-.114-.982 1.57-1.518-.96-1.665-2.104.601-.794-.593a6.067 6.067 0 00-1.23-.71l-.908-.392L12.96 4H11.04l-.53 2.119-.909.391a6.064 6.064 0 00-1.23.711l-.793.593-2.103-.601zM12 16a4 4 0 100-8 4 4 0 000 8zm0-2a2 2 0 110-4 2 2 0 010 4z",clipRule:"evenodd"})}))}))},385:function(e,n,t){t.d(n,{F:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M13.414 12L19 17.586A1 1 0 0117.586 19L12 13.414 6.414 19A1 1 0 015 17.586L10.586 12 5 6.414A1 1 0 116.414 5L12 10.586 17.586 5A1 1 0 1119 6.414L13.414 12z",clipRule:"evenodd"})}))}))},71863:function(e,n,t){t.d(n,{V:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12s4.477 10 10 10a1 1 0 100-2 8 8 0 118-8 1 1 0 102 0z",clipRule:"evenodd"})}))}))},90908:function(e,n,t){t.d(n,{f:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M11.997 21.5a9.5 9.5 0 01-8.49-5.251A9.38 9.38 0 012.5 11.997V11.5c.267-4.88 4.12-8.733 8.945-8.999L12 2.5a9.378 9.378 0 014.25 1.007A9.498 9.498 0 0121.5 12a9.378 9.378 0 01-.856 3.937l.838 4.376a1 1 0 01-1.17 1.17l-4.376-.838a9.381 9.381 0 01-3.939.856zm3.99-2.882l3.254.623-.623-3.253a1 1 0 01.09-.64 7.381 7.381 0 00.792-3.346 7.5 7.5 0 00-4.147-6.708 7.385 7.385 0 00-3.35-.794H11.5c-3.752.208-6.792 3.248-7.002 7.055L4.5 12a7.387 7.387 0 00.794 3.353A7.5 7.5 0 0012 19.5a7.384 7.384 0 003.349-.793 1 1 0 01.639-.09z",clipRule:"evenodd"})}))}))},1452:function(e,n,t){t.d(n,{A:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1.219-8.94l-1.805-1.804a1 1 0 00-1.414 1.414l2.512 2.512a1 1 0 001.414 0l4.95-4.95a1 1 0 10-1.414-1.414l-4.243 4.243z",clipRule:"evenodd"})}))}))},86639:function(e,n,t){t.d(n,{X:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm1.414-10l2.293-2.293a1 1 0 00-1.414-1.414L12 10.586 9.707 8.293a1 1 0 00-1.414 1.414L10.586 12l-2.293 2.293a1 1 0 101.414 1.414L12 13.414l2.293 2.293a1 1 0 001.414-1.414L13.414 12z",clipRule:"evenodd"})}))}))},67021:function(e,n,t){t.d(n,{e:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-11a1 1 0 00-1 1v4a1 1 0 102 0v-4a1 1 0 00-1-1zm0-3a1 1 0 100 2 1 1 0 000-2z",clipRule:"evenodd"})}))}))},94713:function(e,n,t){t.d(n,{h:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M2 11.001a9.001 9.001 0 014.974-8.047A8.876 8.876 0 0110.998 2h.535c.018 0 .037 0 .055.002 3.934.218 7.204 3.02 8.15 6.753a1 1 0 01-1.94.49c-.734-2.9-3.27-5.065-6.294-5.245h-.51a6.876 6.876 0 00-3.12.74l-.004.002A7.001 7.001 0 004 11.003v.002a6.873 6.873 0 00.738 3.117c.206.407.271.871.185 1.32l-.387 2.022 2.022-.387c.448-.086.912-.021 1.32.185.44.222.9.395 1.373.518a1 1 0 11-.502 1.936 8.865 8.865 0 01-1.773-.669.067.067 0 00-.042-.006l-3.47.665a1 1 0 01-1.17-1.17l.665-3.47a.067.067 0 00-.006-.043A8.873 8.873 0 012 11.001zM17.004 20h-.005a3 3 0 01-2.68-1.658l-.004-.007A2.936 2.936 0 0114 17.004v-.206a2.995 2.995 0 012.773-2.797l.233-.001c.46-.001.917.107 1.33.315l.007.004A3 3 0 0120 17v.005c.001.425-.09.845-.268 1.232l-.133.29a1 1 0 00-.074.606l.093.485-.484-.093a1 1 0 00-.606.073l-.29.134a2.937 2.937 0 01-1.234.268zm-.296-8A4.995 4.995 0 0012 16.738v.262c-.002.777.18 1.543.53 2.237a5 5 0 006.542 2.313l2.303.441c.365.07.686-.25.616-.615l-.441-2.303a5 5 0 00-2.312-6.541A4.937 4.937 0 0017 12h-.292z",clipRule:"evenodd"})}))}))},79039:function(e,n,t){t.d(n,{f:function(){return a}});var o=t(26042),r=t(69396),i=t(85893),a=t(67294).forwardRef((function(e,n){return(0,i.jsx)("svg",(0,r.Z)((0,o.Z)({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",width:"1em",height:"1em",fill:"currentColor",ref:n},e),{children:(0,i.jsx)("path",{fillRule:"evenodd",d:"M21 21a1 1 0 11-2 0v-2a3 3 0 00-3-3H8a3 3 0 00-3 3v2a1 1 0 11-2 0v-2a5 5 0 015-5h8a5 5 0 015 5v2zm-9-9a5 5 0 110-10 5 5 0 010 10zm0-2a3 3 0 100-6 3 3 0 000 6z",clipRule:"evenodd"})}))}))},82723:function(e,n,t){t.d(n,{E:function(){return r}});var o=t(67294),r=function(e){return null};r.displayName="NullComponent";(0,o.forwardRef)((function(e,n){return null})).displayName="ForwardRefNullComponent"},70341:function(e,n,t){t.d(n,{Hb:function(){return s}});var o=t(80129),r=t(75117),i="https://github.com/LeetCode-Feedback/LeetCode-Feedback",a=function(){return location.pathname+location.search+location.hash},s={notFound:function(){return"/404/"},internal:{dbTestcase:function(){return"/internal/db-testcase/"}},library:function(){return"/library"},internalContest:function(){return"/contest/dashboard/internal-contest"},contestDashboard:function(){return"/contest/dashboard"},contestAdmin:function(){return"/contest/admin"},emailBatch:function(){return"/email_batch/"},contestDetail:function(e){return"/contest/".concat(e)},contestSponsor:function(){return"/business/contact/"},contributeDashboard:function(){return"/contribute/dashboard"},adminBackend:function(){return"/mystic/pluto"},otpManager:function(){return"/mystic/charon/otp"},review:function(){return"/manage"},dangerZone:function(){return"/danger_zone"},signIn:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,o.stringify)({next:e||a()});return"/accounts/login/?".concat(n)},register:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",n=(0,o.stringify)({next:e||a()});return"/accounts/signup/?".concat(n)},profile:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:r.Oo;return"".concat(n?"":"/u","/").concat(e)},profileWithBadgeModal:function(e,n){return"/".concat(e,"/?showBadge=").concat(n)},USRankingCNProfile:function(e){return"https://leetcode.cn/u/".concat(e)},logOut:function(){return"/accounts/logout"},newPlayground:function(e){return"/playground/new/".concat(e)},problemList:function(e){return"/problem-list/".concat(e)},problemset:function(e){return"/problemset/".concat(e)},problemsetList:function(e){return"/problem-list/".concat(e)},questionDetail:function(e){return"/problems/".concat(e,"/")},questionDetailWithLearningEnvironment:function(e,n){return"/problems/".concat(e).concat(n?"?".concat(n):"")},questionDetailWithTab:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"description";return"/problems/".concat(e,"/").concat(n)},solutions:function(e,n,t,o){return"/problems/".concat(e,"/solutions").concat(n?"/".concat(n):"").concat(t?"/".concat(t).concat(o?"/comments/".concat(o):""):"")},discussion:function(e,n){return"/problems/".concat(e,"/discussion").concat(n?"/comments/".concat(n):"")},solutionEditor:function(e,n,t,o){return"/problems/".concat(e,"/post-solution").concat(n?"/".concat(n):"").concat(o?"?submissionId=".concat(o):"")},submissionOverview:function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return"/problems/".concat(e,"/submissions/").concat(n).concat(location.search)},questionSolution:function(e){return"/problems/".concat(e,"/solution")},questionSolutionPreview:function(e){return"/problems/".concat(e,"/solution-preview")},questionSubmissionPreview:function(e,n){return"/problems/".concat(e,"/submission-preview/").concat(n)},randomOneQuestion:function(){return"/problems/random-one-question/"},premium:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return"/subscribe/".concat(e?"?ref=".concat(e):"")},premiumDetail:function(e){return"/subscribe/".concat(e?"?ref=".concat(e):"")},subscription:function(){return"/premium/subscription/"},subscriptionSuccess:function(){return"/premium/subscription/success/"},eduAuth:function(){return"/premium/edu-auth/"},studyPlan:function(){return"/study-plan"},studyPlanV2:"/studyplan",studyPlanV2MyPlan:"/studyplan/my-plan",studyPlanV2Detail:function(e){return"/studyplan/".concat(e)},studyPlanV2HistoryDetail:function(e,n){return"/studyplan/".concat(e,"?historyId=").concat(n)},profileHome:function(){return"/profile/"},profileResume:function(){return"/profile/resume/"},profilePreview:function(){return"/profile/preview-resume/"},chat:function(){return"/chat/"},account:function(){return"/profile/account/"},order:function(e){return"/premium/order/".concat(e,"/")},premiumPaymentSuccess:function(){return"/premium/success"},premiumSurvey:function(){return"/premium/survey/"},orderList:function(){return"/order/"},serviceAgreement:function(){return"/agreement/"},subscriptionAgreement:function(){return"/subscription-agreement/"},store:function(){return"/store/"},submissionDetail:function(e){return"/submissions/detail/".concat(e,"/")},home:function(){return"/"},onboarding:function(){return"/onboarding/start/"},company:function(e){return"/company/".concat(e,"/problemset")},companyTag:function(e){return"/company/".concat(e)},discussDetail:function(e){return"/circle/discuss/".concat(e,"/")},articleDetail:function(e){return"/circle/article/".concat(e,"/")},leetbookDetail:function(e){return"/leetbook/detail/".concat(e,"/")},globalRankings:function(){return"/contest/globalranking"},feedback:function(){return"".concat(i,"/issues/")},communityRules:function(){return"/discuss/general-discussion/324861/LeetCode-Community-Rules"},contributeTestcase:function(e){return"".concat(i,"/issues/new?assignees=&labels=&template=bug-report--english-.md&title=").concat(e)},topicTag:function(e){return"/tag/".concat(e,"/")},favoriteList:function(){return"/list/"},uploadImage:function(){return"/storage/upload/image"},markdownGuide:function(){return"/markdown-guide/"},supportLink:function(){return"https://support.leetcode.com/hc/en-us/requests/new"},medal:function(e){return"/medal/?showImg=".concat(e)}}}}]);