(self.webpackChunkProyecto_lilianabarros=self.webpackChunkProyecto_lilianabarros||[]).push([[226],{6226:function(e,a,t){"use strict";t.r(a),t.d(a,{default:function(){return T}});var o=t(7294),r=t(1381),l=t(4241),n=t(4240),c=t(1120),i=t(8463),d=t(9912),s=t(2318),m=t(1749),p=t(8309),u=t(2122),g=t(1253),y=(t(5697),t(6010)),h=(0,t(5209).Z)(o.createElement("path",{d:"M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"}),"Cancel"),v=t(8786),b=t(9693),f=t(8485),k=t(3871),C=t(5127);function E(e){return"Backspace"===e.key||"Delete"===e.key}var x=o.forwardRef((function(e,a){var t=e.avatar,r=e.classes,l=e.className,n=e.clickable,c=e.color,i=void 0===c?"default":c,d=e.component,s=e.deleteIcon,m=e.disabled,p=void 0!==m&&m,v=e.icon,b=e.label,x=e.onClick,S=e.onDelete,Z=e.onKeyDown,w=e.onKeyUp,N=e.size,I=void 0===N?"medium":N,R=e.variant,$=void 0===R?"default":R,T=(0,g.Z)(e,["avatar","classes","className","clickable","color","component","deleteIcon","disabled","icon","label","onClick","onDelete","onKeyDown","onKeyUp","size","variant"]),_=o.useRef(null),L=(0,f.Z)(_,a),P=function(e){e.stopPropagation(),S&&S(e)},z=!(!1===n||!x)||n,U="small"===I,D=d||(z?C.Z:"div"),O=D===C.Z?{component:"div"}:{},K=null;if(S){var F=(0,y.Z)("default"!==i&&("default"===$?r["deleteIconColor".concat((0,k.Z)(i))]:r["deleteIconOutlinedColor".concat((0,k.Z)(i))]),U&&r.deleteIconSmall);K=s&&o.isValidElement(s)?o.cloneElement(s,{className:(0,y.Z)(s.props.className,r.deleteIcon,F),onClick:P}):o.createElement(h,{className:(0,y.Z)(r.deleteIcon,F),onClick:P})}var M=null;t&&o.isValidElement(t)&&(M=o.cloneElement(t,{className:(0,y.Z)(r.avatar,t.props.className,U&&r.avatarSmall,"default"!==i&&r["avatarColor".concat((0,k.Z)(i))])}));var Q=null;return v&&o.isValidElement(v)&&(Q=o.cloneElement(v,{className:(0,y.Z)(r.icon,v.props.className,U&&r.iconSmall,"default"!==i&&r["iconColor".concat((0,k.Z)(i))])})),o.createElement(D,(0,u.Z)({role:z||S?"button":void 0,className:(0,y.Z)(r.root,l,"default"!==i&&[r["color".concat((0,k.Z)(i))],z&&r["clickableColor".concat((0,k.Z)(i))],S&&r["deletableColor".concat((0,k.Z)(i))]],"default"!==$&&[r.outlined,{primary:r.outlinedPrimary,secondary:r.outlinedSecondary}[i]],p&&r.disabled,U&&r.sizeSmall,z&&r.clickable,S&&r.deletable),"aria-disabled":!!p||void 0,tabIndex:z||S?0:void 0,onClick:x,onKeyDown:function(e){e.currentTarget===e.target&&E(e)&&e.preventDefault(),Z&&Z(e)},onKeyUp:function(e){e.currentTarget===e.target&&(S&&E(e)?S(e):"Escape"===e.key&&_.current&&_.current.blur()),w&&w(e)},ref:L},O,T),M||Q,o.createElement("span",{className:(0,y.Z)(r.label,U&&r.labelSmall)},b),K)})),S=(0,v.Z)((function(e){var a="light"===e.palette.type?e.palette.grey[300]:e.palette.grey[700],t=(0,b.U1)(e.palette.text.primary,.26);return{root:{fontFamily:e.typography.fontFamily,fontSize:e.typography.pxToRem(13),display:"inline-flex",alignItems:"center",justifyContent:"center",height:32,color:e.palette.getContrastText(a),backgroundColor:a,borderRadius:16,whiteSpace:"nowrap",transition:e.transitions.create(["background-color","box-shadow"]),cursor:"default",outline:0,textDecoration:"none",border:"none",padding:0,verticalAlign:"middle",boxSizing:"border-box","&$disabled":{opacity:.5,pointerEvents:"none"},"& $avatar":{marginLeft:5,marginRight:-6,width:24,height:24,color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],fontSize:e.typography.pxToRem(12)},"& $avatarColorPrimary":{color:e.palette.primary.contrastText,backgroundColor:e.palette.primary.dark},"& $avatarColorSecondary":{color:e.palette.secondary.contrastText,backgroundColor:e.palette.secondary.dark},"& $avatarSmall":{marginLeft:4,marginRight:-4,width:18,height:18,fontSize:e.typography.pxToRem(10)}},sizeSmall:{height:24},colorPrimary:{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText},colorSecondary:{backgroundColor:e.palette.secondary.main,color:e.palette.secondary.contrastText},disabled:{},clickable:{userSelect:"none",WebkitTapHighlightColor:"transparent",cursor:"pointer","&:hover, &:focus":{backgroundColor:(0,b._4)(a,.08)},"&:active":{boxShadow:e.shadows[1]}},clickableColorPrimary:{"&:hover, &:focus":{backgroundColor:(0,b._4)(e.palette.primary.main,.08)}},clickableColorSecondary:{"&:hover, &:focus":{backgroundColor:(0,b._4)(e.palette.secondary.main,.08)}},deletable:{"&:focus":{backgroundColor:(0,b._4)(a,.08)}},deletableColorPrimary:{"&:focus":{backgroundColor:(0,b._4)(e.palette.primary.main,.2)}},deletableColorSecondary:{"&:focus":{backgroundColor:(0,b._4)(e.palette.secondary.main,.2)}},outlined:{backgroundColor:"transparent",border:"1px solid ".concat("light"===e.palette.type?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)"),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,b.U1)(e.palette.text.primary,e.palette.action.hoverOpacity)},"& $avatar":{marginLeft:4},"& $avatarSmall":{marginLeft:2},"& $icon":{marginLeft:4},"& $iconSmall":{marginLeft:2},"& $deleteIcon":{marginRight:5},"& $deleteIconSmall":{marginRight:3}},outlinedPrimary:{color:e.palette.primary.main,border:"1px solid ".concat(e.palette.primary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,b.U1)(e.palette.primary.main,e.palette.action.hoverOpacity)}},outlinedSecondary:{color:e.palette.secondary.main,border:"1px solid ".concat(e.palette.secondary.main),"$clickable&:hover, $clickable&:focus, $deletable&:focus":{backgroundColor:(0,b.U1)(e.palette.secondary.main,e.palette.action.hoverOpacity)}},avatar:{},avatarSmall:{},avatarColorPrimary:{},avatarColorSecondary:{},icon:{color:"light"===e.palette.type?e.palette.grey[700]:e.palette.grey[300],marginLeft:5,marginRight:-6},iconSmall:{width:18,height:18,marginLeft:4,marginRight:-4},iconColorPrimary:{color:"inherit"},iconColorSecondary:{color:"inherit"},label:{overflow:"hidden",textOverflow:"ellipsis",paddingLeft:12,paddingRight:12,whiteSpace:"nowrap"},labelSmall:{paddingLeft:8,paddingRight:8},deleteIcon:{WebkitTapHighlightColor:"transparent",color:t,height:22,width:22,cursor:"pointer",margin:"0 5px 0 -6px","&:hover":{color:(0,b.U1)(t,.4)}},deleteIconSmall:{height:16,width:16,marginRight:4,marginLeft:-4},deleteIconColorPrimary:{color:(0,b.U1)(e.palette.primary.contrastText,.7),"&:hover, &:active":{color:e.palette.primary.contrastText}},deleteIconColorSecondary:{color:(0,b.U1)(e.palette.secondary.contrastText,.7),"&:hover, &:active":{color:e.palette.secondary.contrastText}},deleteIconOutlinedColorPrimary:{color:(0,b.U1)(e.palette.primary.main,.7),"&:hover, &:active":{color:e.palette.primary.main}},deleteIconOutlinedColorSecondary:{color:(0,b.U1)(e.palette.secondary.main,.7),"&:hover, &:active":{color:e.palette.secondary.main}}}}),{name:"MuiChip"})(x),Z=t(9895),w=(0,c.Z)((function(e){return{root:{display:"flex",flexWrap:"wrap","& > *":{margin:e.spacing(1),width:e.spacing(20)},textAlign:"center"},cover:{width:100,margin:10,borderRadius:25,position:"center"},companyImage:{backgroundRepeat:"no-repeat",backgroundSize:"contain"}}})),N=function(e){var a=e.logo,t=e.name,r=e.country,l=w();return o.createElement("div",{className:l.root},o.createElement(Z.Z,{elevation:3},o.createElement("br",null),o.createElement("strong",null,t," (",r,")"),o.createElement("br",null),o.createElement("div",{class:"container"},o.createElement("img",{className:l.cover,src:"".concat(p.sQ).concat(a," "),alt:"logo"}))))},I=(0,c.Z)((function(e){return{root:{display:"flex",backgroundRepeat:"no-repeat",backgroundSize:"cover"},details:{display:"flex",flexDirection:"column",color:"white"},content:{flex:"1 0 auto"},cover:{width:331,margin:10,borderRadius:25},controls:{display:"flex",alignItems:"center",paddingLeft:e.spacing(1),paddingBottom:e.spacing(1)},playIcon:{height:38,width:38}}})),R=function(e){var a=e.movie;console.log(a),console.log(p.sQ);var t=I();return o.createElement("div",{className:"root"},o.createElement(m.Z,{container:!0,spacing:3,justify:"center"},o.createElement(i.Z,{className:t.root,style:{"background-image":"url(".concat(p.sQ).concat(a.backdrop_path,")")}},o.createElement("div",{className:t.cover},o.createElement("img",{className:t.cover,src:"".concat(p.sQ).concat(a.poster_path," "),alt:"title"})),o.createElement("div",{className:t.details},o.createElement(d.Z,{className:t.content},o.createElement(s.Z,{component:"h2",variant:"h2"},a.title," (",a.release_date.split("-")[0],")"),o.createElement(s.Z,{variant:"subtitle1",color:"inherit"},a.release_date,"   (",a.original_language,")  • ",a.genres.map((function(e){var a=e.name;return o.createElement(S,{style:{margin:"3px"},label:a})})),"• ",Math.trunc(a.runtime/60),"h ",a.runtime%60,"m."),o.createElement("br",null),o.createElement(s.Z,{variant:"h6",color:"inherit"},a.tagline),o.createElement("br",null),o.createElement(s.Z,{variant:"h6"},"Resumen"),o.createElement(s.Z,{variant:"subtitle1",display:"block",color:"inherit"},a.overview))))),o.createElement(m.Z,{container:!0,spacing:3,justify:"center"},a.production_companies.map((function(e){var a=e.id,t=e.logo_path,r=e.name,l=e.origin_country;return o.createElement(N,{style:{margin:"3px"},key:a,logo:t,name:r,country:l})}))))};R.displayName="Details";var $=R,T=function(){var e=(0,o.useContext)(r.G),a=e.doneFetchMovie,t=e.movieDetail;return o.createElement(o.Fragment,null,a?t?o.createElement($,{movie:t}):o.createElement(n.Z,{text:"No encontramos la peli :("}):o.createElement(l.Z,null))}}}]);
//# sourceMappingURL=226.bundle.js.map