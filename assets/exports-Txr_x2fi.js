import{d as e}from"./secp256k1-15tQSULS.js";import{B as t,C as n,D as r,E as i,H as a,M as o,O as s,Q as c,S as l,T as u,U as d,V as f,X as ee,b as p,f as te,g as ne,j as m,l as h,n as re,r as g,rt as _,t as v,v as y,w as b,x as ie,y as ae}from"./ModalController-DGu250uY.js";import"./w3m-activity-list-B92ysegP.js";import{t as oe}from"./NavigationUtil-CLCRNDHF.js";import{n as se,r as ce,t as le}from"./wui-list-social-CKxl93zA.js";import{X as ue}from"./ccip-C8AjXlEZ.js";import{A as de,ct as fe,lt as pe,n as me,ot as he,r as ge}from"./_esm-BuyYaLnQ.js";import{n as _e,r as ve,t as ye}from"./wui-list-wallet-JiEMYs8O.js";import{t as be}from"./AlertController-jE-N9pqa.js";import"./w3m-tooltip-BCFkIpwA.js";import{t as xe}from"./wui-loading-thumbnail-D1tjaaqr.js";import{t as x}from"./ExchangeController-cSLepB-B.js";import{t as S}from"./ConstantsUtil-DVG0VGXX.js";import{n as Se,t as Ce}from"./wui-network-image-DaXJLTu2.js";import{t as we}from"./MathUtil-B2UslVSw.js";import{C,b as w,c as T,d as E,g as D,l as O,o as k,p as A,s as j,t as Te,u as M,v as N}from"./wui-text-B0fkXhri.js";import"./wui-image-DofV_3-B.js";import"./wui-loading-spinner-R2lxjkrz.js";import"./wui-avatar-ClsSgYs0.js";import"./wui-icon-box-DJOZu9z_.js";import"./w3m-onramp-providers-footer-D479KsHN.js";import"./wui-icon-D3JK_Aa9.js";import"./wui-link-Dgkn4sV2.js";import{t as Ee}from"./wui-tag-ClOC5rYr.js";import"./wui-icon-link-BmIuCToI.js";import"./wui-list-item-dOr0zg5R.js";import"./wui-button-DsaM3iHR.js";import"./wui-icon-box-BRL180IM.js";import"./wui-shimmer-89Z_Y1n0.js";import"./wui-list-token-B4to_LIJ.js";import"./wui-separator-BlnfWa9V.js";import{n as De,t as Oe}from"./ref-CxBhAYAH.js";import"./wui-input-text-tAQsqmTL.js";import"./wui-shimmer-C7TZpbhy.js";import"./wui-loading-spinner-DqdNGZq-.js";import"./wui-email-input-BtVAOK3s.js";import"./wui-qr-code-B-EYHGVX.js";import"./wui-visual-BDfDCDn0.js";import"./wui-input-text-BYMHTynv.js";function ke(e,t={}){let{key:n=`fallback`,name:r=`Fallback`,rank:i=!1,shouldThrow:a=Ae,retryCount:o,retryDelay:s}=t;return(({chain:t,pollingInterval:c=4e3,timeout:l,...u})=>{let d=e,f=()=>{},ee=ge({key:n,name:r,async request({method:e,params:n}){let r,i=async(o=0)=>{let s=d[o]({...u,chain:t,retryCount:0,timeout:l});try{let t=await s.request({method:e,params:n});return f({method:e,params:n,response:t,transport:s,status:`success`}),t}catch(c){if(f({error:c,method:e,params:n,transport:s,status:`error`}),a(c)||o===d.length-1||(r??=d.slice(o+1).some(n=>{let{include:r,exclude:i}=n({chain:t}).config.methods||{};return r?r.includes(e):!i||!i.includes(e)}),!r))throw c;return i(o+1)}};return i()},retryCount:o,retryDelay:s,type:`fallback`},{onResponse:e=>f=e,transports:d.map(e=>e({chain:t,retryCount:0}))});if(i){let e=typeof i==`object`?i:{};je({chain:t,interval:e.interval??c,onTransports:e=>d=e,ping:e.ping,sampleCount:e.sampleCount,timeout:e.timeout,transports:d,weights:e.weights})}return ee})}function Ae(e){return!!(`code`in e&&typeof e.code==`number`&&(e.code===he.code||e.code===fe.code||e.code===pe.code||ue.nodeMessage.test(e.message)||e.code===5e3))}function je({chain:e,interval:t=4e3,onTransports:n,ping:r,sampleCount:i=10,timeout:a=1e3,transports:o,weights:s={}}){let{stability:c=.7,latency:l=.3}=s,u=[],d=async()=>{let s=await Promise.all(o.map(async t=>{let n=t({chain:e,retryCount:0,timeout:a}),i=Date.now(),o,s;try{await(r?r({transport:n}):n.request({method:`net_listening`})),s=1}catch{s=0}finally{o=Date.now()}return{latency:o-i,success:s}}));u.push(s),u.length>i&&u.shift();let f=Math.max(...u.map(e=>Math.max(...e.map(({latency:e})=>e))));n(o.map((e,t)=>{let n=u.map(e=>e[t].latency),r=1-n.reduce((e,t)=>e+t,0)/n.length/f,i=u.map(e=>e[t].success),a=i.reduce((e,t)=>e+t,0)/i.length;return a===0?[0,t]:[l*r+c*a,t]}).sort((e,t)=>t[0]-e[0]).map(([,e])=>o[e])),await de(t),d()};d()}var Me={ConnectorExplorerIds:{[_.CONNECTOR_ID.COINBASE]:`d0ca99ff52b99abc48743dad0f7fc891e041be73574f7fac4afe5d4bb83845c8`,[_.CONNECTOR_ID.COINBASE_SDK]:`d0ca99ff52b99abc48743dad0f7fc891e041be73574f7fac4afe5d4bb83845c8`,[_.CONNECTOR_ID.BASE_ACCOUNT]:`fd20dc426fb37566d803205b19bbc1d4096b248ac04548e3cfb6b3a38bd033aa`,[_.CONNECTOR_ID.SAFE]:`225affb176778569276e484e1b92637ad061b01e13a048b35a9d280c3b58970f`,[_.CONNECTOR_ID.LEDGER]:`19177a98252e07ddfc9af2083ba8e07ef627cb6103467ffebb3f8f4205fd7927`,[_.CONNECTOR_ID.OKX]:`971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709`,[S.METMASK_CONNECTOR_NAME]:`c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96`,[S.TRUST_CONNECTOR_NAME]:`4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0`,[S.SOLFLARE_CONNECTOR_NAME]:`1ca0bdd4747578705b1939af023d120677c64fe6ca76add81fda36e350605e79`,[S.PHANTOM_CONNECTOR_NAME]:`a797aa35c0fadbfc1a53e7f675162ed5226968b44a19ee3d24385c64d1d3c393`,[S.COIN98_CONNECTOR_NAME]:`2a3c89040ac3b723a1972a33a125b1db11e258a6975d3a61252cd64e6ea5ea01`,[S.MAGIC_EDEN_CONNECTOR_NAME]:`8b830a2b724a9c3fbab63af6f55ed29c9dfa8a55e732dc88c80a196a2ba136c6`,[S.BACKPACK_CONNECTOR_NAME]:`2bd8c14e035c2d48f184aaa168559e86b0e3433228d3c4075900a221785019b0`,[S.BITGET_CONNECTOR_NAME]:`38f5d18bd8522c244bdd70cb4a68e0e718865155811c043f052fb9f1c51de662`,[S.FRONTIER_CONNECTOR_NAME]:`85db431492aa2e8672e93f4ea7acf10c88b97b867b0d373107af63dc4880f041`,[S.XVERSE_CONNECTOR_NAME]:`2a87d74ae02e10bdd1f51f7ce6c4e1cc53cd5f2c0b6b5ad0d7b3007d2b13de7b`,[S.LEATHER_CONNECTOR_NAME]:`483afe1df1df63daf313109971ff3ef8356ddf1cc4e45877d205eee0b7893a13`,[S.OKX_CONNECTOR_NAME]:`971e689d0a5be527bac79629b4ee9b925e82208e5168b733496a09c0faed0709`,[S.BINANCE_CONNECTOR_NAME]:`2fafea35bb471d22889ccb49c08d99dd0a18a37982602c33f696a5723934ba25`},NetworkImageIds:{1:`ba0ba0cd-17c6-4806-ad93-f9d174f17900`,42161:`3bff954d-5cb0-47a0-9a23-d20192e74600`,43114:`30c46e53-e989-45fb-4549-be3bd4eb3b00`,56:`93564157-2e8e-4ce7-81df-b264dbee9b00`,250:`06b26297-fe0c-4733-5d6b-ffa5498aac00`,10:`ab9c186a-c52f-464b-2906-ca59d760a400`,137:`41d04d42-da3b-4453-8506-668cc0727900`,5e3:`e86fae9b-b770-4eea-e520-150e12c81100`,295:`6a97d510-cac8-4e58-c7ce-e8681b044c00`,11155111:`e909ea0a-f92a-4512-c8fc-748044ea6800`,84532:`a18a7ecd-e307-4360-4746-283182228e00`,1301:`4eeea7ef-0014-4649-5d1d-07271a80f600`,130:`2257980a-3463-48c6-cbac-a42d2a956e00`,10143:`0a728e83-bacb-46db-7844-948f05434900`,143:`0a728e83-bacb-46db-7844-948f05434900`,100:`02b53f6a-e3d4-479e-1cb4-21178987d100`,9001:`f926ff41-260d-4028-635e-91913fc28e00`,324:`b310f07f-4ef7-49f3-7073-2a0a39685800`,314:`5a73b3dd-af74-424e-cae0-0de859ee9400`,4689:`34e68754-e536-40da-c153-6ef2e7188a00`,1088:`3897a66d-40b9-4833-162f-a2c90531c900`,1284:`161038da-44ae-4ec7-1208-0ea569454b00`,1285:`f1d73bb6-5450-4e18-38f7-fb6484264a00`,7777777:`845c60df-d429-4991-e687-91ae45791600`,42220:`ab781bbc-ccc6-418d-d32d-789b15da1f00`,8453:`7289c336-3981-4081-c5f4-efc26ac64a00`,1313161554:`3ff73439-a619-4894-9262-4470c773a100`,2020:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,2021:`b8101fc0-9c19-4b6f-ec65-f6dfff106e00`,80094:`e329c2c9-59b0-4a02-83e4-212ff3779900`,2741:`fc2427d1-5af9-4a9c-8da5-6f94627cd900`,"5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp":`a1b58899-f671-4276-6a5e-56ca5bd59700`,"4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z":`a1b58899-f671-4276-6a5e-56ca5bd59700`,EtWTRABZaYq6iMfeYKouRu166VU2xqa1:`a1b58899-f671-4276-6a5e-56ca5bd59700`,"000000000019d6689c085ae165831e93":`0b4838db-0161-4ffe-022d-532bf03dba00`,"000000000933ea01ad0ee984209779ba":`39354064-d79b-420b-065d-f980c4b78200`,"00000008819873e925422c1ff0f99f7c":`b3406e4a-bbfc-44fb-e3a6-89673c78b700`,"-239":`20f673c0-095e-49b2-07cf-eb5049dcf600`,"-3":`20f673c0-095e-49b2-07cf-eb5049dcf600`,"0x2b6653dc":`3502bb86-cc4e-420f-a387-59ea63a28b00`,"0x94a9059e":`3502bb86-cc4e-420f-a387-59ea63a28b00`,"0xcd8690dc":`3502bb86-cc4e-420f-a387-59ea63a28b00`},ConnectorImageIds:{[_.CONNECTOR_ID.COINBASE]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[_.CONNECTOR_ID.COINBASE_SDK]:`0c2840c3-5b04-4c44-9661-fbd4b49e1800`,[_.CONNECTOR_ID.BASE_ACCOUNT]:`bba2c8be-7fd1-463e-42b1-796ecb0ad200`,[_.CONNECTOR_ID.SAFE]:`461db637-8616-43ce-035a-d89b8a1d5800`,[_.CONNECTOR_ID.LEDGER]:`54a1aa77-d202-4f8d-0fb2-5d2bb6db0300`,[_.CONNECTOR_ID.WALLET_CONNECT]:`ef1a1fcf-7fe8-4d69-bd6d-fda1345b4400`,[_.CONNECTOR_ID.INJECTED]:`07ba87ed-43aa-4adf-4540-9e6a2b9cae00`},ConnectorNamesMap:{[_.CONNECTOR_ID.INJECTED]:`Browser Wallet`,[_.CONNECTOR_ID.WALLET_CONNECT]:`WalletConnect`,[_.CONNECTOR_ID.COINBASE]:`Coinbase`,[_.CONNECTOR_ID.COINBASE_SDK]:`Coinbase`,[_.CONNECTOR_ID.BASE_ACCOUNT]:`Base Account`,[_.CONNECTOR_ID.LEDGER]:`Ledger`,[_.CONNECTOR_ID.SAFE]:`Safe`},ConnectorTypesMap:{[_.CONNECTOR_ID.INJECTED]:`INJECTED`,[_.CONNECTOR_ID.WALLET_CONNECT]:`WALLET_CONNECT`,[_.CONNECTOR_ID.EIP6963]:`ANNOUNCED`,[_.CONNECTOR_ID.AUTH]:`AUTH`,[_.CONNECTOR_ID.COINBASE]:`EXTERNAL`,[_.CONNECTOR_ID.COINBASE_SDK]:`EXTERNAL`,[_.CONNECTOR_ID.BASE_ACCOUNT]:`EXTERNAL`,[S.CONNECTOR_TYPE_AUTH]:`AUTH`},WalletConnectRpcChainIds:[1,5,11155111,10,420,42161,421613,137,80001,42220,1313161554,1313161555,56,97,43114,43113,100,8453,84531,7777777,999,324,280]},Ne=`rpc.walletconnect.org`;function Pe(e,t){let n=new URL(`https://rpc.walletconnect.org/v1/`);return n.searchParams.set(`chainId`,e),n.searchParams.set(`projectId`,t),n.toString()}var Fe=`near:mainnet.solana:5eykt4UsFv8P8NJdTREpY1vzqKqZKvdp.eip155:1101.eip155:56.eip155:42161.eip155:7777777.eip155:59144.eip155:324.solana:EtWTRABZaYq6iMfeYKouRu166VU2xqa1.eip155:5000.solana:4sgjmw1sunhzsxgspuhpqldx6wiyjntz.eip155:80084.eip155:5003.eip155:100.eip155:8453.eip155:42220.eip155:1313161555.eip155:17000.eip155:1.eip155:300.eip155:1313161554.eip155:1329.eip155:84532.eip155:421614.eip155:11155111.eip155:8217.eip155:43114.solana:4uhcVJyU9pJkvQyS88uRDiswHXSCkY3z.eip155:999999999.eip155:11155420.eip155:80002.eip155:97.eip155:43113.eip155:137.eip155:10.eip155:1301.eip155:80094.eip155:80069.eip155:560048.eip155:31.eip155:2818.eip155:57054.eip155:911867.eip155:534351.eip155:1112.eip155:534352.eip155:1111.eip155:146.eip155:130.eip155:1284.eip155:30.eip155:2810.eip155:55931.bip122:000000000019d6689c085ae165831e93.bip122:000000000933ea01ad0ee984209779ba.tron:0x2b6653dc.tron:0xcd8690dc`.split(`.`),Ie={extendRpcUrlWithProjectId(e,t){let n=!1;try{n=new URL(e).host===Ne}catch{n=!1}if(n){let n=new URL(e);return n.searchParams.has(`projectId`)||n.searchParams.set(`projectId`,t),n.toString()}return e},isCaipNetwork(e){return`chainNamespace`in e&&`caipNetworkId`in e},getChainNamespace(e){return this.isCaipNetwork(e)?e.chainNamespace:_.CHAIN.EVM},getCaipNetworkId(e){return this.isCaipNetwork(e)?e.caipNetworkId:`${_.CHAIN.EVM}:${e.id}`},getDefaultRpcUrl(e,t,n){let r=e.rpcUrls?.default?.http?.[0];return Fe.includes(t)?Pe(t,n):r||``},extendCaipNetwork(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){let i=this.getChainNamespace(e),a=this.getCaipNetworkId(e),o=e.rpcUrls?.default?.http?.[0],s=this.getDefaultRpcUrl(e,a,n),c=e?.rpcUrls?.chainDefault?.http?.[0]||o,l=r?.[a]?.map(e=>e.url)||[],u=[...l,...s?[s]:[]],d=[...l];return c&&!d.includes(c)&&d.push(c),{...e,chainNamespace:i,caipNetworkId:a,assets:{imageId:Me.NetworkImageIds[e.id],imageUrl:t?.[e.id]},rpcUrls:{...e.rpcUrls,default:{http:u},chainDefault:{http:d}}}},extendCaipNetworks(e,{customNetworkImageUrls:t,projectId:n,customRpcUrls:r}){return e.map(e=>Ie.extendCaipNetwork(e,{customNetworkImageUrls:t,customRpcUrls:r,projectId:n}))},getViemTransport(e,t,n){let r=[];return n?.forEach(e=>{r.push(me(e.url,e.config))}),Fe.includes(e.caipNetworkId)&&r.push(me(Pe(e.caipNetworkId,t),{fetchOptions:{headers:{"Content-Type":`text/plain`}}})),e?.rpcUrls?.default?.http?.forEach(e=>{r.push(me(e))}),ke(r)},extendWagmiTransports(e,t,n){return Fe.includes(e.caipNetworkId)?ke([n,me(this.getDefaultRpcUrl(e,e.caipNetworkId,t))]):n},getUnsupportedNetwork(e){return{id:e.split(`:`)[1],caipNetworkId:e,name:_.UNSUPPORTED_NETWORK_NAME,chainNamespace:e.split(`:`)[0],nativeCurrency:{name:``,decimals:0,symbol:``},rpcUrls:{default:{http:[]}}}},getCaipNetworkFromStorage(e){let t=a.getActiveCaipNetworkId(),n=g.getAllRequestedCaipNetworks(),r=Array.from(g.state.chains?.keys()||[]),i=t?.split(`:`)[0],o=i?r.includes(i):!1,s=n?.find(e=>e.caipNetworkId===t);return o&&!s&&t?this.getUnsupportedNetwork(t):s||e||n?.[0]}},Le=D`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[20]};
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[16]};
    height: 32px;
    transition: box-shadow ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: box-shadow;
  }

  button wui-flex.avatar-container {
    width: 28px;
    height: 24px;
    position: relative;

    wui-flex.network-image-container {
      position: absolute;
      bottom: 0px;
      right: 0px;
      width: 12px;
      height: 12px;
    }

    wui-flex.network-image-container wui-icon {
      background: ${({tokens:e})=>e.theme.foregroundPrimary};
    }

    wui-avatar {
      width: 24px;
      min-width: 24px;
      height: 24px;
    }

    wui-icon {
      width: 12px;
      height: 12px;
    }
  }

  wui-image,
  wui-icon {
    border-radius: ${({borderRadius:e})=>e[16]};
  }

  wui-text {
    white-space: nowrap;
  }

  button wui-flex.balance-container {
    height: 100%;
    border-radius: ${({borderRadius:e})=>e[16]};
    padding-left: ${({spacing:e})=>e[1]};
    padding-right: ${({spacing:e})=>e[1]};
    background: ${({tokens:e})=>e.theme.foregroundSecondary};
    color: ${({tokens:e})=>e.theme.textPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button:hover:enabled,
  button:focus-visible:enabled,
  button:active:enabled {
    box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.2);

    wui-flex.balance-container {
      background: ${({tokens:e})=>e.theme.foregroundTertiary};
    }
  }

  /* -- Disabled states --------------------------------------------------- */
  button:disabled wui-text,
  button:disabled wui-flex.avatar-container {
    opacity: 0.3;
  }
`,Re=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},P=class extends N{constructor(){super(...arguments),this.networkSrc=void 0,this.avatarSrc=void 0,this.balance=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.loading=!1,this.address=``,this.profileName=``,this.charsStart=4,this.charsEnd=6}render(){return w`
      <button
        ?disabled=${this.disabled}
        class=${k(this.balance?void 0:`local-no-balance`)}
        data-error=${k(this.isUnsupportedChain)}
      >
        ${this.imageTemplate()} ${this.addressTemplate()} ${this.balanceTemplate()}
      </button>
    `}imageTemplate(){let e=this.networkSrc?w`<wui-image src=${this.networkSrc}></wui-image>`:w` <wui-icon size="inherit" color="inherit" name="networkPlaceholder"></wui-icon> `;return w`<wui-flex class="avatar-container">
      <wui-avatar
        .imageSrc=${this.avatarSrc}
        alt=${this.address}
        address=${this.address}
      ></wui-avatar>

      <wui-flex class="network-image-container">${e}</wui-flex>
    </wui-flex>`}addressTemplate(){return w`<wui-text variant="md-regular" color="inherit">
      ${this.address?M.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?18:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?`end`:`middle`}):null}
    </wui-text>`}balanceTemplate(){return this.balance?w`<wui-flex alignItems="center" justifyContent="center" class="balance-container"
        >${this.loading?w`<wui-loading-spinner size="md" color="inherit"></wui-loading-spinner>`:w`<wui-text variant="md-regular" color="inherit"> ${this.balance}</wui-text>`}</wui-flex
      >`:null}};P.styles=[A,E,Le],Re([T()],P.prototype,`networkSrc`,void 0),Re([T()],P.prototype,`avatarSrc`,void 0),Re([T()],P.prototype,`balance`,void 0),Re([T({type:Boolean})],P.prototype,`isUnsupportedChain`,void 0),Re([T({type:Boolean})],P.prototype,`disabled`,void 0),Re([T({type:Boolean})],P.prototype,`loading`,void 0),Re([T()],P.prototype,`address`,void 0),Re([T()],P.prototype,`profileName`,void 0),Re([T()],P.prototype,`charsStart`,void 0),Re([T()],P.prototype,`charsEnd`,void 0),P=Re([O(`wui-account-button`)],P);var F=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},I=class extends N{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=`show`,this.charsStart=4,this.charsEnd=6,this.namespace=void 0,this.isSupported=o.state.allowUnsupportedChain?!0:!g.state.activeChain||g.checkIfSupportedNetwork(g.state.activeChain)}connectedCallback(){super.connectedCallback(),this.setAccountData(g.getAccountData(this.namespace)),this.setNetworkData(g.getNetworkData(this.namespace))}firstUpdated(){let e=this.namespace;e?this.unsubscribe.push(g.subscribeChainProp(`accountState`,e=>{this.setAccountData(e)},e),g.subscribeChainProp(`networkState`,t=>{this.setNetworkData(t),this.isSupported=g.checkIfSupportedNetwork(e,t?.caipNetwork?.caipNetworkId)},e)):this.unsubscribe.push(r.subscribeNetworkImages(()=>{this.networkImage=i.getNetworkImage(this.network)}),g.subscribeKey(`activeCaipAddress`,e=>{this.caipAddress=e}),g.subscribeChainProp(`accountState`,e=>{this.setAccountData(e)}),g.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=i.getNetworkImage(e),this.isSupported=!e?.chainNamespace||g.checkIfSupportedNetwork(e?.chainNamespace),this.fetchNetworkImage(e)}))}updated(){this.fetchNetworkImage(this.network)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!g.state.activeChain)return null;let e=this.balance===`show`,t=typeof this.balanceVal!=`string`,{formattedText:n}=f.parseBalance(this.balanceVal,this.balanceSymbol);return w`
      <wui-account-button
        .disabled=${!!this.disabled}
        .isUnsupportedChain=${!o.state.allowUnsupportedChain&&!this.isSupported}
        address=${k(f.getPlainAddress(this.caipAddress))}
        profileName=${k(this.profileName)}
        networkSrc=${k(this.networkImage)}
        avatarSrc=${k(this.profileImage)}
        balance=${e?n:``}
        @click=${this.onClick.bind(this)}
        data-testid=${`account-button${this.namespace?`-${this.namespace}`:``}`}
        .charsStart=${this.charsStart}
        .charsEnd=${this.charsEnd}
        ?loading=${t}
      >
      </wui-account-button>
    `}onClick(){this.isSupported||o.state.allowUnsupportedChain?v.open({namespace:this.namespace}):v.open({view:`UnsupportedChain`})}async fetchNetworkImage(e){e?.assets?.imageId&&(this.networkImage=await i.fetchNetworkImage(e?.assets?.imageId))}setAccountData(e){e&&(this.caipAddress=e.caipAddress,this.balanceVal=e.balance,this.balanceSymbol=e.balanceSymbol,this.profileName=e.profileName,this.profileImage=e.profileImage)}setNetworkData(e){e&&(this.network=e.caipNetwork,this.networkImage=i.getNetworkImage(e.caipNetwork))}};F([T({type:Boolean})],I.prototype,`disabled`,void 0),F([T()],I.prototype,`balance`,void 0),F([T()],I.prototype,`charsStart`,void 0),F([T()],I.prototype,`charsEnd`,void 0),F([T()],I.prototype,`namespace`,void 0),F([j()],I.prototype,`caipAddress`,void 0),F([j()],I.prototype,`balanceVal`,void 0),F([j()],I.prototype,`balanceSymbol`,void 0),F([j()],I.prototype,`profileName`,void 0),F([j()],I.prototype,`profileImage`,void 0),F([j()],I.prototype,`network`,void 0),F([j()],I.prototype,`networkImage`,void 0),F([j()],I.prototype,`isSupported`,void 0);var ze=class extends I{};ze=F([O(`w3m-account-button`)],ze);var Be=class extends I{};Be=F([O(`appkit-account-button`)],Be);var Ve=C`
  :host {
    display: block;
    width: max-content;
  }
`,He=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},L=class extends N{constructor(){super(...arguments),this.unsubscribe=[],this.disabled=!1,this.balance=void 0,this.size=void 0,this.label=void 0,this.loadingLabel=void 0,this.charsStart=4,this.charsEnd=6,this.namespace=void 0}firstUpdated(){this.caipAddress=this.namespace?g.getAccountData(this.namespace)?.caipAddress:g.state.activeCaipAddress,this.namespace?this.unsubscribe.push(g.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},this.namespace)):this.unsubscribe.push(g.subscribeKey(`activeCaipAddress`,e=>this.caipAddress=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return this.caipAddress?w`
          <appkit-account-button
            .disabled=${!!this.disabled}
            balance=${k(this.balance)}
            .charsStart=${k(this.charsStart)}
            .charsEnd=${k(this.charsEnd)}
            namespace=${k(this.namespace)}
          >
          </appkit-account-button>
        `:w`
          <appkit-connect-button
            size=${k(this.size)}
            label=${k(this.label)}
            loadingLabel=${k(this.loadingLabel)}
            namespace=${k(this.namespace)}
          ></appkit-connect-button>
        `}};L.styles=Ve,He([T({type:Boolean})],L.prototype,`disabled`,void 0),He([T()],L.prototype,`balance`,void 0),He([T()],L.prototype,`size`,void 0),He([T()],L.prototype,`label`,void 0),He([T()],L.prototype,`loadingLabel`,void 0),He([T()],L.prototype,`charsStart`,void 0),He([T()],L.prototype,`charsEnd`,void 0),He([T()],L.prototype,`namespace`,void 0),He([j()],L.prototype,`caipAddress`,void 0);var Ue=class extends L{};Ue=He([O(`w3m-button`)],Ue);var We=class extends L{};We=He([O(`appkit-button`)],We);var Ge=D`
  :host {
    position: relative;
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  button[data-size='sm'] {
    padding: ${({spacing:e})=>e[2]};
  }

  button[data-size='md'] {
    padding: ${({spacing:e})=>e[3]};
  }

  button[data-size='lg'] {
    padding: ${({spacing:e})=>e[4]};
  }

  button[data-variant='primary'] {
    background: ${({tokens:e})=>e.core.backgroundAccentPrimary};
  }

  button[data-variant='secondary'] {
    background: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  button:hover:enabled {
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:disabled {
    cursor: not-allowed;
  }

  button[data-loading='true'] {
    cursor: not-allowed;
  }

  button[data-loading='true'][data-size='sm'] {
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
  }

  button[data-loading='true'][data-size='md'] {
    border-radius: ${({borderRadius:e})=>e[20]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[4]};
  }

  button[data-loading='true'][data-size='lg'] {
    border-radius: ${({borderRadius:e})=>e[16]};
    padding: ${({spacing:e})=>e[4]} ${({spacing:e})=>e[5]};
  }
`,Ke=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qe=class extends N{constructor(){super(...arguments),this.size=`md`,this.variant=`primary`,this.loading=!1,this.text=`Connect Wallet`}render(){return w`
      <button
        data-loading=${this.loading}
        data-variant=${this.variant}
        data-size=${this.size}
        ?disabled=${this.loading}
      >
        ${this.contentTemplate()}
      </button>
    `}contentTemplate(){let e={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},t={primary:`invert`,secondary:`accent-primary`};return this.loading?w`<wui-loading-spinner
      color=${t[this.variant]}
      size=${this.size}
    ></wui-loading-spinner>`:w` <wui-text variant=${e[this.size]} color=${t[this.variant]}>
        ${this.text}
      </wui-text>`}};qe.styles=[A,E,Ge],Ke([T()],qe.prototype,`size`,void 0),Ke([T()],qe.prototype,`variant`,void 0),Ke([T({type:Boolean})],qe.prototype,`loading`,void 0),Ke([T()],qe.prototype,`text`,void 0),qe=Ke([O(`wui-connect-button`)],qe);var Je=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ye=class extends N{constructor(){super(),this.unsubscribe=[],this.size=`md`,this.label=`Connect Wallet`,this.loadingLabel=`Connecting...`,this.open=v.state.open,this.loading=this.namespace?v.state.loadingNamespaceMap.get(this.namespace):v.state.loading,this.unsubscribe.push(v.subscribe(e=>{this.open=e.open,this.loading=this.namespace?e.loadingNamespaceMap.get(this.namespace):e.loading}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`
      <wui-connect-button
        size=${k(this.size)}
        .loading=${this.loading}
        @click=${this.onClick.bind(this)}
        data-testid=${`connect-button${this.namespace?`-${this.namespace}`:``}`}
      >
        ${this.loading?this.loadingLabel:this.label}
      </wui-connect-button>
    `}onClick(){this.open?v.close():this.loading||v.open({view:`Connect`,namespace:this.namespace})}};Je([T()],Ye.prototype,`size`,void 0),Je([T()],Ye.prototype,`label`,void 0),Je([T()],Ye.prototype,`loadingLabel`,void 0),Je([T()],Ye.prototype,`namespace`,void 0),Je([j()],Ye.prototype,`open`,void 0),Je([j()],Ye.prototype,`loading`,void 0);var Xe=class extends Ye{};Xe=Je([O(`w3m-connect-button`)],Xe);var Ze=class extends Ye{};Ze=Je([O(`appkit-connect-button`)],Ze);var Qe=D`
  :host {
    display: block;
  }

  button {
    border-radius: ${({borderRadius:e})=>e[32]};
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]}
      ${({spacing:e})=>e[1]} ${({spacing:e})=>e[1]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button[data-size='sm'] > wui-icon-box,
  button[data-size='sm'] > wui-image {
    width: 16px;
    height: 16px;
  }

  button[data-size='md'] > wui-icon-box,
  button[data-size='md'] > wui-image {
    width: 20px;
    height: 20px;
  }

  button[data-size='lg'] > wui-icon-box,
  button[data-size='lg'] > wui-image {
    width: 24px;
    height: 24px;
  }

  wui-image,
  wui-icon-box {
    border-radius: ${({borderRadius:e})=>e[32]};
  }
`,$e=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},et=class extends N{constructor(){super(...arguments),this.imageSrc=void 0,this.isUnsupportedChain=void 0,this.disabled=!1,this.size=`lg`}render(){return w`
      <button data-size=${this.size} data-testid="wui-network-button" ?disabled=${this.disabled}>
        ${this.visualTemplate()}
        <wui-text variant=${{sm:`sm-regular`,md:`md-regular`,lg:`lg-regular`}[this.size]} color="primary">
          <slot></slot>
        </wui-text>
      </button>
    `}visualTemplate(){return this.isUnsupportedChain?w` <wui-icon-box color="error" icon="warningCircle"></wui-icon-box> `:this.imageSrc?w`<wui-image src=${this.imageSrc}></wui-image>`:w` <wui-icon size="xl" color="default" name="networkPlaceholder"></wui-icon> `}};et.styles=[A,E,Qe],$e([T()],et.prototype,`imageSrc`,void 0),$e([T({type:Boolean})],et.prototype,`isUnsupportedChain`,void 0),$e([T({type:Boolean})],et.prototype,`disabled`,void 0),$e([T()],et.prototype,`size`,void 0),et=$e([O(`wui-network-button`)],et);var tt=C`
  :host {
    display: block;
    width: max-content;
  }
`,nt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},rt=class extends N{constructor(){super(),this.unsubscribe=[],this.disabled=!1,this.network=g.state.activeCaipNetwork,this.networkImage=i.getNetworkImage(this.network),this.caipAddress=g.state.activeCaipAddress,this.loading=v.state.loading,this.isSupported=o.state.allowUnsupportedChain?!0:!g.state.activeChain||g.checkIfSupportedNetwork(g.state.activeChain),this.unsubscribe.push(r.subscribeNetworkImages(()=>{this.networkImage=i.getNetworkImage(this.network)}),g.subscribeKey(`activeCaipAddress`,e=>{this.caipAddress=e}),g.subscribeKey(`activeCaipNetwork`,e=>{this.network=e,this.networkImage=i.getNetworkImage(e),this.isSupported=!e?.chainNamespace||g.checkIfSupportedNetwork(e.chainNamespace),i.fetchNetworkImage(e?.assets?.imageId)}),v.subscribeKey(`loading`,e=>this.loading=e))}firstUpdated(){i.fetchNetworkImage(this.network?.assets?.imageId)}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=!this.network||g.checkIfSupportedNetwork(this.network.chainNamespace);return w`
      <wui-network-button
        .disabled=${!!(this.disabled||this.loading)}
        .isUnsupportedChain=${!o.state.allowUnsupportedChain&&!e}
        imageSrc=${k(this.networkImage)}
        @click=${this.onClick.bind(this)}
        data-testid="w3m-network-button"
      >
        ${this.getLabel()}
        <slot></slot>
      </wui-network-button>
    `}getLabel(){return this.network?!this.isSupported&&!o.state.allowUnsupportedChain?`Switch Network`:this.network.name:this.label?this.label:this.caipAddress?`Unknown Network`:`Select Network`}onClick(){this.loading||(b.sendEvent({type:`track`,event:`CLICK_NETWORKS`}),v.open({view:`Networks`}))}};rt.styles=tt,nt([T({type:Boolean})],rt.prototype,`disabled`,void 0),nt([T({type:String})],rt.prototype,`label`,void 0),nt([j()],rt.prototype,`network`,void 0),nt([j()],rt.prototype,`networkImage`,void 0),nt([j()],rt.prototype,`caipAddress`,void 0),nt([j()],rt.prototype,`loading`,void 0),nt([j()],rt.prototype,`isSupported`,void 0);var it=class extends rt{};it=nt([O(`w3m-network-button`)],it);var at=class extends rt{};at=nt([O(`appkit-network-button`)],at);var ot=D`
  :host {
    display: block;
  }

  button {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[4]};
    background-color: ${({tokens:e})=>e.core.foregroundAccent010};
  }

  wui-flex > wui-icon {
    padding: ${({spacing:e})=>e[2]};
    color: ${({tokens:e})=>e.theme.textInvert};
    background-color: ${({tokens:e})=>e.core.backgroundAccentPrimary};
    border-radius: ${({borderRadius:e})=>e[2]};
    align-items: center;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.core.foregroundAccent020};
    }
  }
`,st=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ct=class extends N{constructor(){super(...arguments),this.label=``,this.description=``,this.icon=`wallet`}render(){return w`
      <button>
        <wui-flex gap="2" alignItems="center">
          <wui-icon weight="fill" size="lg" name=${this.icon} color="inherit"></wui-icon>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.label}</wui-text>
            <wui-text variant="md-regular" color="tertiary">${this.description}</wui-text>
          </wui-flex>
        </wui-flex>
        <wui-icon size="lg" color="accent-primary" name="chevronRight"></wui-icon>
      </button>
    `}};ct.styles=[A,E,ot],st([T()],ct.prototype,`label`,void 0),st([T()],ct.prototype,`description`,void 0),st([T()],ct.prototype,`icon`,void 0),ct=st([O(`wui-notice-card`)],ct);var lt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ut=class extends N{constructor(){super(),this.unsubscribe=[],this.socialProvider=a.getConnectedSocialProvider(),this.socialUsername=a.getConnectedSocialUsername(),this.namespace=g.state.activeChain,this.unsubscribe.push(g.subscribeKey(`activeChain`,e=>{this.namespace=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=y.getConnectorId(this.namespace),t=y.getAuthConnector();if(!t||e!==_.CONNECTOR_ID.AUTH)return this.style.cssText=`display: none`,null;let n=t.provider.getEmail()??``;return!n&&!this.socialUsername?(this.style.cssText=`display: none`,null):w`
      <wui-list-item
        ?rounded=${!0}
        icon=${this.socialProvider??`mail`}
        data-testid="w3m-account-email-update"
        ?chevron=${!this.socialProvider}
        @click=${()=>{this.onGoToUpdateEmail(n,this.socialProvider)}}
      >
        <wui-text variant="lg-regular" color="primary">${this.getAuthName(n)}</wui-text>
      </wui-list-item>
    `}onGoToUpdateEmail(e,t){t||p.push(`UpdateEmailWallet`,{email:e,redirectView:`Account`})}getAuthName(e){return this.socialUsername?this.socialProvider===`discord`&&this.socialUsername.endsWith(`0`)?this.socialUsername.slice(0,-1):this.socialUsername:e.length>30?`${e.slice(0,-3)}...`:e}};lt([j()],ut.prototype,`namespace`,void 0),ut=lt([O(`w3m-account-auth-button`)],ut);var dt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ft=class extends N{constructor(){super(),this.usubscribe=[],this.networkImages=r.state.networkImages,this.address=g.getAccountData()?.address,this.profileImage=g.getAccountData()?.profileImage,this.profileName=g.getAccountData()?.profileName,this.network=g.state.activeCaipNetwork,this.disconnecting=!1,this.remoteFeatures=o.state.remoteFeatures,this.usubscribe.push(g.subscribeChainProp(`accountState`,e=>{e&&(this.address=e.address,this.profileImage=e.profileImage,this.profileName=e.profileName)}),g.subscribeKey(`activeCaipNetwork`,e=>{e?.id&&(this.network=e)}),o.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.usubscribe.forEach(e=>e())}render(){if(!this.address)throw Error(`w3m-account-settings-view: No account provided`);let e=this.networkImages[this.network?.assets?.imageId??``];return w`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="4"
        .padding=${[`0`,`5`,`3`,`5`]}
      >
        <wui-avatar
          alt=${this.address}
          address=${this.address}
          imageSrc=${k(this.profileImage)}
          size="lg"
        ></wui-avatar>
        <wui-flex flexDirection="column" alignItems="center">
          <wui-flex gap="1" alignItems="center" justifyContent="center">
            <wui-text variant="h5-medium" color="primary" data-testid="account-settings-address">
              ${M.getTruncateString({string:this.address,charsStart:4,charsEnd:6,truncate:`middle`})}
            </wui-text>
            <wui-icon-link
              size="md"
              icon="copy"
              iconColor="default"
              @click=${this.onCopyAddress}
            ></wui-icon-link>
          </wui-flex>
        </wui-flex>
      </wui-flex>
      <wui-flex flexDirection="column" gap="4">
        <wui-flex flexDirection="column" gap="2" .padding=${[`6`,`4`,`3`,`4`]}>
          ${this.authCardTemplate()}
          <w3m-account-auth-button></w3m-account-auth-button>
          <wui-list-item
            imageSrc=${k(e)}
            ?chevron=${this.isAllowedNetworkSwitch()}
            ?fullSize=${!0}
            ?rounded=${!0}
            @click=${this.onNetworks.bind(this)}
            data-testid="account-switch-network-button"
          >
            <wui-text variant="lg-regular" color="primary">
              ${this.network?.name??`Unknown`}
            </wui-text>
          </wui-list-item>
          ${this.smartAccountSettingsTemplate()} ${this.chooseNameButtonTemplate()}
          <wui-list-item
            ?rounded=${!0}
            icon="power"
            iconColor="error"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}chooseNameButtonTemplate(){let e=this.network?.chainNamespace,t=y.getConnectorId(e),n=y.getAuthConnector();return!g.checkIfNamesSupported()||!n||t!==_.CONNECTOR_ID.AUTH||this.profileName?null:w`
      <wui-list-item
        icon="id"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onChooseName.bind(this)}
        data-testid="account-choose-name-button"
      >
        <wui-text variant="lg-regular" color="primary">Choose account name </wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=y.getConnectorId(this.network?.chainNamespace),t=y.getAuthConnector(),{origin:n}=location;return!t||e!==_.CONNECTOR_ID.AUTH||n.includes(d.SECURE_SITE)?null:w`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}isAllowedNetworkSwitch(){let e=g.getAllRequestedCaipNetworks(),t=e?e.length>1:!1,n=e?.find(({id:e})=>e===this.network?.id);return t||!n}onCopyAddress(){try{this.address&&(f.copyToClopboard(this.address),m.showSuccess(`Address copied`))}catch{m.showError(`Failed to copy`)}}smartAccountSettingsTemplate(){let e=this.network?.chainNamespace,t=g.checkIfSmartAccountEnabled(),n=y.getConnectorId(e);return!y.getAuthConnector()||n!==_.CONNECTOR_ID.AUTH||!t?null:w`
      <wui-list-item
        icon="user"
        ?rounded=${!0}
        ?chevron=${!0}
        @click=${this.onSmartAccountSettings.bind(this)}
        data-testid="account-smart-account-settings-button"
      >
        <wui-text variant="lg-regular" color="primary">Smart Account Settings</wui-text>
      </wui-list-item>
    `}onChooseName(){p.push(`ChooseAccountName`)}onNetworks(){this.isAllowedNetworkSwitch()&&p.push(`Networks`)}async onDisconnect(){try{this.disconnecting=!0;let e=this.network?.chainNamespace,t=h.getConnections(e).length>0,n=e&&y.state.activeConnectorIds[e],r=this.remoteFeatures?.multiWallet;await h.disconnect(r?{id:n,namespace:e}:{}),t&&r&&(p.push(`ProfileWallets`),m.showSuccess(`Wallet deleted`))}catch{b.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),m.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onGoToUpgradeView(){b.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),p.push(`UpgradeEmailWallet`)}onSmartAccountSettings(){p.push(`SmartAccountSettings`)}};dt([j()],ft.prototype,`address`,void 0),dt([j()],ft.prototype,`profileImage`,void 0),dt([j()],ft.prototype,`profileName`,void 0),dt([j()],ft.prototype,`network`,void 0),dt([j()],ft.prototype,`disconnecting`,void 0),dt([j()],ft.prototype,`remoteFeatures`,void 0),ft=dt([O(`w3m-account-settings-view`)],ft);var pt=D`
  :host {
    flex: 1;
    height: 100%;
  }

  button {
    width: 100%;
    height: 100%;
    display: inline-flex;
    align-items: center;
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    column-gap: ${({spacing:e})=>e[1]};
    color: ${({tokens:e})=>e.theme.textSecondary};
    border-radius: ${({borderRadius:e})=>e[20]};
    background-color: transparent;
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
  }

  /* -- Hover & Active states ----------------------------------------------------------- */
  button[data-active='true'] {
    color: ${({tokens:e})=>e.theme.textPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundTertiary};
  }

  button:hover:enabled:not([data-active='true']),
  button:active:enabled:not([data-active='true']) {
    wui-text,
    wui-icon {
      color: ${({tokens:e})=>e.theme.textPrimary};
    }
  }
`,mt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ht={lg:`lg-regular`,md:`md-regular`,sm:`sm-regular`},gt={lg:`md`,md:`sm`,sm:`sm`},_t=class extends N{constructor(){super(...arguments),this.icon=`mobile`,this.size=`md`,this.label=``,this.active=!1}render(){return w`
      <button data-active=${this.active}>
        ${this.icon?w`<wui-icon size=${gt[this.size]} name=${this.icon}></wui-icon>`:``}
        <wui-text variant=${ht[this.size]}> ${this.label} </wui-text>
      </button>
    `}};_t.styles=[A,E,pt],mt([T()],_t.prototype,`icon`,void 0),mt([T()],_t.prototype,`size`,void 0),mt([T()],_t.prototype,`label`,void 0),mt([T({type:Boolean})],_t.prototype,`active`,void 0),_t=mt([O(`wui-tab-item`)],_t);var vt=D`
  :host {
    display: inline-flex;
    align-items: center;
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    border-radius: ${({borderRadius:e})=>e[32]};
    padding: ${({spacing:e})=>e[`01`]};
    box-sizing: border-box;
  }

  :host([data-size='sm']) {
    height: 26px;
  }

  :host([data-size='md']) {
    height: 36px;
  }
`,yt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},bt=class extends N{constructor(){super(...arguments),this.tabs=[],this.onTabChange=()=>null,this.size=`md`,this.activeTab=0}render(){return this.dataset.size=this.size,this.tabs.map((e,t)=>{let n=t===this.activeTab;return w`
        <wui-tab-item
          @click=${()=>this.onTabClick(t)}
          icon=${e.icon}
          size=${this.size}
          label=${e.label}
          ?active=${n}
          data-active=${n}
          data-testid="tab-${e.label?.toLowerCase()}"
        ></wui-tab-item>
      `})}onTabClick(e){this.activeTab=e,this.onTabChange(e)}};bt.styles=[A,E,vt],yt([T({type:Array})],bt.prototype,`tabs`,void 0),yt([T()],bt.prototype,`onTabChange`,void 0),yt([T()],bt.prototype,`size`,void 0),yt([j()],bt.prototype,`activeTab`,void 0),bt=yt([O(`wui-tabs`)],bt);var xt=D`
  wui-icon-link {
    margin-right: calc(${({spacing:e})=>e[8]} * -1);
  }

  wui-notice-card {
    margin-bottom: ${({spacing:e})=>e[1]};
  }

  wui-list-item > wui-text {
    flex: 1;
  }

  w3m-transactions-view {
    max-height: 200px;
  }

  .balance-container {
    display: inline;
  }

  .tab-content-container {
    height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    scrollbar-width: none;
  }

  .symbol {
    transform: translateY(-2px);
  }

  .tab-content-container::-webkit-scrollbar {
    display: none;
  }

  .account-button {
    width: auto;
    border: none;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[3]};
    height: 48px;
    padding: ${({spacing:e})=>e[2]};
    padding-right: ${({spacing:e})=>e[3]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[6]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
  }

  .account-button:hover {
    background-color: ${({tokens:e})=>e.core.glass010};
  }

  .avatar-container {
    position: relative;
  }

  wui-avatar.avatar {
    width: 32px;
    height: 32px;
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  wui-wallet-switch {
    margin-top: ${({spacing:e})=>e[2]};
  }

  wui-avatar.network-avatar {
    width: 16px;
    height: 16px;
    position: absolute;
    left: 100%;
    top: 100%;
    transform: translate(-75%, -75%);
    box-shadow: 0 0 0 2px ${({tokens:e})=>e.core.glass010};
  }

  .account-links {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .account-links wui-flex {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex: 1;
    background: red;
    align-items: center;
    justify-content: center;
    height: 48px;
    padding: 10px;
    flex: 1 0 0;
    border-radius: var(--XS, 16px);
    border: 1px solid var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    background: var(--dark-accent-glass-010, rgba(71, 161, 255, 0.1));
    transition:
      background-color ${({durations:e})=>e.md}
        ${({easings:e})=>e[`ease-out-power-1`]},
      opacity ${({durations:e})=>e.md} ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color, opacity;
  }

  .account-links wui-flex:hover {
    background: var(--dark-accent-glass-015, rgba(71, 161, 255, 0.15));
  }

  .account-links wui-flex wui-icon {
    width: var(--S, 20px);
    height: var(--S, 20px);
  }

  .account-links wui-flex wui-icon svg path {
    stroke: #667dff;
  }
`,R=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},z=class extends N{constructor(){super(),this.unsubscribe=[],this.caipAddress=g.getAccountData()?.caipAddress,this.address=f.getPlainAddress(g.getAccountData()?.caipAddress),this.profileImage=g.getAccountData()?.profileImage,this.profileName=g.getAccountData()?.profileName,this.disconnecting=!1,this.balance=g.getAccountData()?.balance,this.balanceSymbol=g.getAccountData()?.balanceSymbol,this.features=o.state.features,this.remoteFeatures=o.state.remoteFeatures,this.namespace=g.state.activeChain,this.activeConnectorIds=y.state.activeConnectorIds,this.unsubscribe.push(g.subscribeChainProp(`accountState`,e=>{this.address=f.getPlainAddress(e?.caipAddress),this.caipAddress=e?.caipAddress,this.balance=e?.balance,this.balanceSymbol=e?.balanceSymbol,this.profileName=e?.profileName,this.profileImage=e?.profileImage}),o.subscribeKey(`features`,e=>this.features=e),o.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),y.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),g.subscribeKey(`activeChain`,e=>this.namespace=e),g.subscribeKey(`activeCaipNetwork`,e=>{e?.chainNamespace&&(this.namespace=e?.chainNamespace)}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(!this.caipAddress||!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?y.getConnectorById(e):void 0,n=i.getConnectorImage(t),{value:r,decimals:a,symbol:o}=f.parseBalance(this.balance,this.balanceSymbol);return w`<wui-flex
        flexDirection="column"
        .padding=${[`0`,`5`,`4`,`5`]}
        alignItems="center"
        gap="3"
      >
        <wui-avatar
          alt=${k(this.caipAddress)}
          address=${k(f.getPlainAddress(this.caipAddress))}
          imageSrc=${k(this.profileImage===null?void 0:this.profileImage)}
          data-testid="single-account-avatar"
        ></wui-avatar>
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          imageSrc=${n}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>
        <div class="balance-container">
          <wui-text variant="h3-regular" color="primary">${r}</wui-text>
          <wui-text variant="h3-regular" color="secondary">.${a}</wui-text>
          <wui-text variant="h6-medium" color="primary" class="symbol">${o}</wui-text>
        </div>
        ${this.explorerBtnTemplate()}
      </wui-flex>

      <wui-flex flexDirection="column" gap="2" .padding=${[`0`,`3`,`3`,`3`]}>
        ${this.authCardTemplate()} <w3m-account-auth-button></w3m-account-auth-button>
        ${this.orderedFeaturesTemplate()} ${this.activityTemplate()}
        <wui-list-item
          .rounded=${!0}
          icon="power"
          iconColor="error"
          ?chevron=${!1}
          .loading=${this.disconnecting}
          .rightIcon=${!1}
          @click=${this.onDisconnect.bind(this)}
          data-testid="disconnect-button"
        >
          <wui-text variant="lg-regular" color="primary">Disconnect</wui-text>
        </wui-list-item>
      </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=d.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=!!this.features?.receive,n=this.remoteFeatures?.onramp&&e,r=x.isPayWithExchangeEnabled();return!n&&!t&&!r?null:w`
      <wui-list-item
        .rounded=${!0}
        data-testid="w3m-account-default-fund-wallet-button"
        iconVariant="blue"
        icon="dollar"
        ?chevron=${!0}
        @click=${this.handleClickFundWallet.bind(this)}
      >
        <wui-text variant="lg-regular" color="primary">Fund wallet</wui-text>
      </wui-list-item>
    `}orderedFeaturesTemplate(){return(this.features?.walletFeaturesOrder||d.DEFAULT_FEATURES.walletFeaturesOrder).map(e=>{switch(e){case`onramp`:return this.fundWalletTemplate();case`swaps`:return this.swapsTemplate();case`send`:return this.sendTemplate();default:return null}})}activityTemplate(){return this.namespace&&this.remoteFeatures?.activity&&d.ACTIVITY_ENABLED_CHAIN_NAMESPACES.includes(this.namespace)?w` <wui-list-item
          .rounded=${!0}
          icon="clock"
          ?chevron=${!0}
          @click=${this.onTransactions.bind(this)}
          data-testid="w3m-account-default-activity-button"
        >
          <wui-text variant="lg-regular" color="primary">Activity</wui-text>
        </wui-list-item>`:null}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=g.state.activeChain===_.CHAIN.EVM;return!e||!t?null:w`
      <wui-list-item
        .rounded=${!0}
        icon="recycleHorizontal"
        ?chevron=${!0}
        @click=${this.handleClickSwap.bind(this)}
        data-testid="w3m-account-default-swaps-button"
      >
        <wui-text variant="lg-regular" color="primary">Swap</wui-text>
      </wui-list-item>
    `}sendTemplate(){let e=this.features?.send,t=g.state.activeChain;if(!t)throw Error(`SendController:sendTemplate - namespace is required`);let n=d.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!n?null:w`
      <wui-list-item
        .rounded=${!0}
        icon="send"
        ?chevron=${!0}
        @click=${this.handleClickSend.bind(this)}
        data-testid="w3m-account-default-send-button"
      >
        <wui-text variant="lg-regular" color="primary">Send</wui-text>
      </wui-list-item>
    `}authCardTemplate(){let e=g.state.activeChain;if(!e)throw Error(`AuthCardTemplate:authCardTemplate - namespace is required`);let t=y.getConnectorId(e),n=y.getAuthConnector(),{origin:r}=location;return!n||t!==_.CONNECTOR_ID.AUTH||r.includes(d.SECURE_SITE)?null:w`
      <wui-notice-card
        @click=${this.onGoToUpgradeView.bind(this)}
        label="Upgrade your wallet"
        description="Transition to a self-custodial wallet"
        icon="wallet"
        data-testid="w3m-wallet-upgrade-card"
      ></wui-notice-card>
    `}handleClickFundWallet(){p.push(`FundWallet`)}handleClickSwap(){p.push(`Swap`)}handleClickSend(){p.push(`WalletSend`)}explorerBtnTemplate(){return g.getAccountData()?.addressExplorerUrl?w`
      <wui-button size="md" variant="accent-primary" @click=${this.onExplorer.bind(this)}>
        <wui-icon size="sm" color="inherit" slot="iconLeft" name="compass"></wui-icon>
        Block Explorer
        <wui-icon size="sm" color="inherit" slot="iconRight" name="externalLink"></wui-icon>
      </wui-button>
    `:null}onTransactions(){b.sendEvent({type:`track`,event:`CLICK_TRANSACTIONS`,properties:{isSmartAccount:ne(g.state.activeChain)===t.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`Transactions`)}async onDisconnect(){try{this.disconnecting=!0;let e=h.getConnections(this.namespace).length>0,t=this.namespace&&y.state.activeConnectorIds[this.namespace],n=this.remoteFeatures?.multiWallet;await h.disconnect(n?{id:t,namespace:this.namespace}:{}),e&&n&&(p.push(`ProfileWallets`),m.showSuccess(`Wallet deleted`))}catch{b.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),m.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}onExplorer(){let e=g.getAccountData()?.addressExplorerUrl;e&&f.openHref(e,`_blank`)}onGoToUpgradeView(){b.sendEvent({type:`track`,event:`EMAIL_UPGRADE_FROM_MODAL`}),p.push(`UpgradeEmailWallet`)}onGoToProfileWalletsView(){p.push(`ProfileWallets`)}};z.styles=xt,R([j()],z.prototype,`caipAddress`,void 0),R([j()],z.prototype,`address`,void 0),R([j()],z.prototype,`profileImage`,void 0),R([j()],z.prototype,`profileName`,void 0),R([j()],z.prototype,`disconnecting`,void 0),R([j()],z.prototype,`balance`,void 0),R([j()],z.prototype,`balanceSymbol`,void 0),R([j()],z.prototype,`features`,void 0),R([j()],z.prototype,`remoteFeatures`,void 0),R([j()],z.prototype,`namespace`,void 0),R([j()],z.prototype,`activeConnectorIds`,void 0),z=R([O(`w3m-account-default-widget`)],z);var St=D`
  span {
    font-weight: 500;
    font-size: 38px;
    color: ${({tokens:e})=>e.theme.textPrimary};
    line-height: 38px;
    letter-spacing: -2%;
    text-align: center;
    font-family: var(--apkt-fontFamily-regular);
  }

  .pennies {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }
`,Ct=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wt=class extends N{constructor(){super(...arguments),this.dollars=`0`,this.pennies=`00`}render(){return w`<span>$${this.dollars}<span class="pennies">.${this.pennies}</span></span>`}};wt.styles=[A,St],Ct([T()],wt.prototype,`dollars`,void 0),Ct([T()],wt.prototype,`pennies`,void 0),wt=Ct([O(`wui-balance`)],wt);var Tt=D`
  :host {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    position: relative;
  }

  wui-icon {
    position: absolute;
    width: 12px !important;
    height: 4px !important;
  }

  /* -- Variants --------------------------------------------------------- */
  :host([data-variant='fill']) {
    background-color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) {
    background-color: ${({colors:e})=>e.neutrals900};
  }

  :host([data-variant='fill']) > wui-text {
    color: ${({colors:e})=>e.black};
  }

  :host([data-variant='shade']) > wui-text {
    color: ${({colors:e})=>e.white};
  }

  :host([data-variant='fill']) > wui-icon {
    color: ${({colors:e})=>e.neutrals100};
  }

  :host([data-variant='shade']) > wui-icon {
    color: ${({colors:e})=>e.neutrals900};
  }

  /* -- Sizes --------------------------------------------------------- */
  :host([data-size='sm']) {
    padding: ${({spacing:e})=>e[1]} ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) {
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  /* -- Placements --------------------------------------------------------- */
  wui-icon[data-placement='top'] {
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 95%);
  }

  wui-icon[data-placement='bottom'] {
    top: 0;
    left: 50%;
    transform: translate(-50%, -95%) rotate(180deg);
  }

  wui-icon[data-placement='right'] {
    top: 50%;
    left: 0;
    transform: translate(-65%, -50%) rotate(90deg);
  }

  wui-icon[data-placement='left'] {
    top: 50%;
    right: 0%;
    transform: translate(65%, -50%) rotate(270deg);
  }
`,Et=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dt={sm:`sm-regular`,md:`md-regular`},Ot=class extends N{constructor(){super(...arguments),this.placement=`top`,this.variant=`fill`,this.size=`md`,this.message=``}render(){return this.dataset.variant=this.variant,this.dataset.size=this.size,w`<wui-icon data-placement=${this.placement} size="inherit" name="cursor"></wui-icon>
      <wui-text variant=${Dt[this.size]}>${this.message}</wui-text>`}};Ot.styles=[A,E,Tt],Et([T()],Ot.prototype,`placement`,void 0),Et([T()],Ot.prototype,`variant`,void 0),Et([T()],Ot.prototype,`size`,void 0),Et([T()],Ot.prototype,`message`,void 0),Ot=Et([O(`wui-tooltip`)],Ot);var kt=C`
  :host {
    width: 100%;
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  :host::-webkit-scrollbar {
    display: none;
  }
`,At=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},jt=class extends N{render(){return w`<w3m-activity-list page="account"></w3m-activity-list>`}};jt.styles=kt,jt=At([O(`w3m-account-activity-widget`)],jt);var Mt=D`
  :host {
    width: 100%;
  }

  button {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${({spacing:e})=>e[4]};
    padding: ${({spacing:e})=>e[4]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    max-width: 174px;
  }

  .tag-container {
    width: fit-content;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }
`,Nt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Pt=class extends N{constructor(){super(...arguments),this.icon=`card`,this.text=``,this.description=``,this.tag=void 0,this.disabled=!1}render(){return w`
      <button ?disabled=${this.disabled}>
        <wui-flex alignItems="center" gap="3">
          <wui-icon-box padding="2" color="secondary" icon=${this.icon} size="lg"></wui-icon-box>
          <wui-flex flexDirection="column" gap="1">
            <wui-text variant="md-medium" color="primary">${this.text}</wui-text>
            ${this.description?w`<wui-text variant="md-regular" color="secondary">
                  ${this.description}</wui-text
                >`:null}
          </wui-flex>
        </wui-flex>

        <wui-flex class="tag-container" alignItems="center" gap="1" justifyContent="flex-end">
          ${this.tag?w`<wui-tag tagType="main" size="sm">${this.tag}</wui-tag>`:null}
          <wui-icon size="md" name="chevronRight" color="default"></wui-icon>
        </wui-flex>
      </button>
    `}};Pt.styles=[A,E,Mt],Nt([T()],Pt.prototype,`icon`,void 0),Nt([T()],Pt.prototype,`text`,void 0),Nt([T()],Pt.prototype,`description`,void 0),Nt([T()],Pt.prototype,`tag`,void 0),Nt([T({type:Boolean})],Pt.prototype,`disabled`,void 0),Pt=Nt([O(`wui-list-description`)],Pt);var Ft=C`
  :host {
    width: 100%;
  }

  wui-flex {
    width: 100%;
  }

  .contentContainer {
    max-height: 280px;
    overflow: scroll;
    scrollbar-width: none;
  }

  .contentContainer::-webkit-scrollbar {
    display: none;
  }
`,It=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Lt=class extends N{constructor(){super(),this.unsubscribe=[],this.tokenBalance=g.getAccountData()?.tokenBalance,this.remoteFeatures=o.state.remoteFeatures,this.unsubscribe.push(g.subscribeChainProp(`accountState`,e=>{this.tokenBalance=e?.tokenBalance}),o.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`${this.tokenTemplate()}`}tokenTemplate(){return this.tokenBalance&&this.tokenBalance?.length>0?w`<wui-flex class="contentContainer" flexDirection="column" gap="2">
        ${this.tokenItemTemplate()}
      </wui-flex>`:w` <wui-flex flexDirection="column">
      ${this.onRampTemplate()}
      <wui-list-description
        @click=${this.onReceiveClick.bind(this)}
        text="Receive funds"
        description="Scan the QR code and receive funds"
        icon="qrCode"
        iconColor="fg-200"
        iconBackgroundColor="fg-200"
        data-testid="w3m-account-receive-button"
      ></wui-list-description
    ></wui-flex>`}onRampTemplate(){return this.remoteFeatures?.onramp?w`<wui-list-description
        @click=${this.onBuyClick.bind(this)}
        text="Buy Crypto"
        description="Easy with card or bank account"
        icon="card"
        iconColor="success-100"
        iconBackgroundColor="success-100"
        tag="popular"
        data-testid="w3m-account-onramp-button"
      ></wui-list-description>`:w``}tokenItemTemplate(){return this.tokenBalance?.map(e=>w`<wui-list-token
          tokenName=${e.name}
          tokenImageUrl=${e.iconUrl}
          tokenAmount=${e.quantity.numeric}
          tokenValue=${e.value}
          tokenCurrency=${e.symbol}
        ></wui-list-token>`)}onReceiveClick(){p.push(`WalletReceive`)}onBuyClick(){b.sendEvent({type:`track`,event:`SELECT_BUY_CRYPTO`,properties:{isSmartAccount:ne(g.state.activeChain)===t.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`OnRampProviders`)}};Lt.styles=Ft,It([j()],Lt.prototype,`tokenBalance`,void 0),It([j()],Lt.prototype,`remoteFeatures`,void 0),Lt=It([O(`w3m-account-tokens-widget`)],Lt);var Rt=D`
  wui-flex {
    width: 100%;
  }

  wui-promo {
    position: absolute;
    top: -32px;
  }

  wui-profile-button {
    margin-top: calc(-1 * ${({spacing:e})=>e[4]});
  }

  wui-promo + wui-profile-button {
    margin-top: ${({spacing:e})=>e[4]};
  }

  wui-tabs {
    width: 100%;
  }

  .contentContainer {
    height: 280px;
  }

  .contentContainer > wui-icon-box {
    width: 40px;
    height: 40px;
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  .contentContainer > .textContent {
    width: 65%;
  }
`,zt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},B=class extends N{constructor(){super(...arguments),this.unsubscribe=[],this.network=g.state.activeCaipNetwork,this.profileName=g.getAccountData()?.profileName,this.address=g.getAccountData()?.address,this.currentTab=g.getAccountData()?.currentTab,this.tokenBalance=g.getAccountData()?.tokenBalance,this.features=o.state.features,this.namespace=g.state.activeChain,this.activeConnectorIds=y.state.activeConnectorIds,this.remoteFeatures=o.state.remoteFeatures}firstUpdated(){g.fetchTokenBalance(),this.unsubscribe.push(g.subscribeChainProp(`accountState`,e=>{e?.address?(this.address=e.address,this.profileName=e.profileName,this.currentTab=e.currentTab,this.tokenBalance=e.tokenBalance):v.close()}),y.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),g.subscribeKey(`activeChain`,e=>this.namespace=e),g.subscribeKey(`activeCaipNetwork`,e=>this.network=e),o.subscribeKey(`features`,e=>this.features=e),o.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e)),this.watchSwapValues()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),clearInterval(this.watchTokenBalance)}render(){if(!this.address)throw Error(`w3m-account-features-widget: No account provided`);if(!this.namespace)return null;let e=this.activeConnectorIds[this.namespace],t=e?y.getConnectorById(e):void 0,{icon:n,iconSize:r}=this.getAuthData();return w`<wui-flex
      flexDirection="column"
      .padding=${[`0`,`3`,`4`,`3`]}
      alignItems="center"
      gap="4"
      data-testid="w3m-account-wallet-features-widget"
    >
      <wui-flex flexDirection="column" justifyContent="center" alignItems="center" gap="2">
        <wui-wallet-switch
          profileName=${this.profileName}
          address=${this.address}
          icon=${n}
          iconSize=${r}
          alt=${t?.name}
          @click=${this.onGoToProfileWalletsView.bind(this)}
          data-testid="wui-wallet-switch"
        ></wui-wallet-switch>

        ${this.tokenBalanceTemplate()}
      </wui-flex>
      ${this.orderedWalletFeatures()} ${this.tabsTemplate()} ${this.listContentTemplate()}
    </wui-flex>`}orderedWalletFeatures(){let e=this.features?.walletFeaturesOrder||d.DEFAULT_FEATURES.walletFeaturesOrder;if(e.every(e=>e===`send`||e===`receive`?!this.features?.[e]:e===`swaps`||e===`onramp`?!this.remoteFeatures?.[e]:!0))return null;let t=e.map(e=>e===`receive`||e===`onramp`?`fund`:e);return w`<wui-flex gap="2">
      ${[...new Set(t)].map(e=>{switch(e){case`fund`:return this.fundWalletTemplate();case`swaps`:return this.swapsTemplate();case`send`:return this.sendTemplate();default:return null}})}
    </wui-flex>`}fundWalletTemplate(){if(!this.namespace)return null;let e=d.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.namespace),t=this.features?.receive,n=this.remoteFeatures?.onramp&&e,r=x.isPayWithExchangeEnabled();return!n&&!t&&!r?null:w`
      <w3m-tooltip-trigger text="Fund wallet">
        <wui-button
          data-testid="wallet-features-fund-wallet-button"
          @click=${this.onFundWalletClick.bind(this)}
          variant="accent-secondary"
          size="lg"
          fullWidth
        >
          <wui-icon name="dollar"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}swapsTemplate(){let e=this.remoteFeatures?.swaps,t=g.state.activeChain===_.CHAIN.EVM;return!e||!t?null:w`
      <w3m-tooltip-trigger text="Swap">
        <wui-button
          fullWidth
          data-testid="wallet-features-swaps-button"
          @click=${this.onSwapClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="recycleHorizontal"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}sendTemplate(){let e=this.features?.send,t=g.state.activeChain,n=d.SEND_SUPPORTED_NAMESPACES.includes(t);return!e||!n?null:w`
      <w3m-tooltip-trigger text="Send">
        <wui-button
          fullWidth
          data-testid="wallet-features-send-button"
          @click=${this.onSendClick.bind(this)}
          variant="accent-secondary"
          size="lg"
        >
          <wui-icon name="send"></wui-icon>
        </wui-button>
      </w3m-tooltip-trigger>
    `}watchSwapValues(){this.watchTokenBalance=setInterval(()=>g.fetchTokenBalance(e=>this.onTokenBalanceError(e)),1e4)}onTokenBalanceError(e){e instanceof Error&&e.cause instanceof Response&&e.cause.status===_.HTTP_STATUS_CODES.SERVICE_UNAVAILABLE&&clearInterval(this.watchTokenBalance)}listContentTemplate(){return this.currentTab===0?w`<w3m-account-tokens-widget></w3m-account-tokens-widget>`:this.currentTab===1?w`<w3m-account-activity-widget></w3m-account-activity-widget>`:w`<w3m-account-tokens-widget></w3m-account-tokens-widget>`}tokenBalanceTemplate(){if(this.tokenBalance&&this.tokenBalance?.length>=0){let e=f.calculateBalance(this.tokenBalance),{dollars:t=`0`,pennies:n=`00`}=f.formatTokenBalance(e);return w`<wui-balance dollars=${t} pennies=${n}></wui-balance>`}return w`<wui-balance dollars="0" pennies="00"></wui-balance>`}tabsTemplate(){let e=Ee.getTabsByNamespace(g.state.activeChain);return e.length===0?null:w`<wui-tabs
      .onTabChange=${this.onTabChange.bind(this)}
      .activeTab=${this.currentTab}
      .tabs=${e}
    ></wui-tabs>`}onTabChange(e){g.setAccountProp(`currentTab`,e,this.namespace)}onFundWalletClick(){p.push(`FundWallet`)}onSwapClick(){this.network?.caipNetworkId&&!d.SWAP_SUPPORTED_NETWORKS.includes(this.network?.caipNetworkId)?p.push(`UnsupportedChain`,{swapUnsupportedChain:!0}):(b.sendEvent({type:`track`,event:`OPEN_SWAP`,properties:{network:this.network?.caipNetworkId||``,isSmartAccount:ne(g.state.activeChain)===t.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`Swap`))}getAuthData(){let e=a.getConnectedSocialProvider(),t=a.getConnectedSocialUsername(),n=y.getAuthConnector()?.provider.getEmail()??``;return{name:ie.getAuthName({email:n,socialUsername:t,socialProvider:e}),icon:e??`mail`,iconSize:e?`xl`:`md`}}onGoToProfileWalletsView(){p.push(`ProfileWallets`)}onSendClick(){b.sendEvent({type:`track`,event:`OPEN_SEND`,properties:{network:this.network?.caipNetworkId||``,isSmartAccount:ne(g.state.activeChain)===t.ACCOUNT_TYPES.SMART_ACCOUNT}}),p.push(`WalletSend`)}};B.styles=Rt,zt([j()],B.prototype,`watchTokenBalance`,void 0),zt([j()],B.prototype,`network`,void 0),zt([j()],B.prototype,`profileName`,void 0),zt([j()],B.prototype,`address`,void 0),zt([j()],B.prototype,`currentTab`,void 0),zt([j()],B.prototype,`tokenBalance`,void 0),zt([j()],B.prototype,`features`,void 0),zt([j()],B.prototype,`namespace`,void 0),zt([j()],B.prototype,`activeConnectorIds`,void 0),zt([j()],B.prototype,`remoteFeatures`,void 0),B=zt([O(`w3m-account-wallet-features-widget`)],B);var Bt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Vt=class extends N{constructor(){super(),this.unsubscribe=[],this.namespace=g.state.activeChain,this.unsubscribe.push(g.subscribeKey(`activeChain`,e=>{this.namespace=e}))}render(){if(!this.namespace)return null;let e=y.getConnectorId(this.namespace);return w`
      ${y.getAuthConnector()&&e===_.CONNECTOR_ID.AUTH?this.walletFeaturesTemplate():this.defaultTemplate()}
    `}walletFeaturesTemplate(){return w`<w3m-account-wallet-features-widget></w3m-account-wallet-features-widget>`}defaultTemplate(){return w`<w3m-account-default-widget></w3m-account-default-widget>`}};Bt([j()],Vt.prototype,`namespace`,void 0),Vt=Bt([O(`w3m-account-view`)],Vt);var Ht=D`
  wui-image {
    width: 24px;
    height: 24px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  wui-icon:not(.custom-icon, .icon-badge) {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    border-radius: ${({borderRadius:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,V=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},H=class extends N{constructor(){super(...arguments),this.address=``,this.profileName=``,this.content=[],this.alt=``,this.imageSrc=``,this.icon=void 0,this.iconSize=`md`,this.iconBadge=void 0,this.iconBadgeSize=`md`,this.buttonVariant=`neutral-primary`,this.enableMoreButton=!1,this.charsStart=4,this.charsEnd=6}render(){return w`
      <wui-flex flexDirection="column" rowgap="2">
        ${this.topTemplate()} ${this.bottomTemplate()}
      </wui-flex>
    `}topTemplate(){return w`
      <wui-flex alignItems="flex-start" justifyContent="space-between">
        ${this.imageOrIconTemplate()}
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="copy"
          @click=${this.dispatchCopyEvent}
        ></wui-icon-link>
        <wui-icon-link
          variant="secondary"
          size="md"
          icon="externalLink"
          @click=${this.dispatchExternalLinkEvent}
        ></wui-icon-link>
        ${this.enableMoreButton?w`<wui-icon-link
              variant="secondary"
              size="md"
              icon="threeDots"
              @click=${this.dispatchMoreButtonEvent}
              data-testid="wui-active-profile-wallet-item-more-button"
            ></wui-icon-link>`:null}
      </wui-flex>
    `}bottomTemplate(){return w` <wui-flex flexDirection="column">${this.contentTemplate()}</wui-flex> `}imageOrIconTemplate(){return this.icon?w`
        <wui-flex flexGrow="1" alignItems="center">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?w`<wui-icon
                  color="accent-primary"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:w`
      <wui-flex flexGrow="1" alignItems="center">
        <wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>
      </wui-flex>
    `}contentTemplate(){return this.content.length===0?null:w`
      <wui-flex flexDirection="column" rowgap="3">
        ${this.content.map(e=>this.labelAndTagTemplate(e))}
      </wui-flex>
    `}labelAndTagTemplate({address:e,profileName:t,label:n,description:r,enableButton:i,buttonType:a,buttonLabel:o,buttonVariant:s,tagVariant:c,tagLabel:l,alignItems:u=`flex-end`}){return w`
      <wui-flex justifyContent="space-between" alignItems=${u} columngap="1">
        <wui-flex flexDirection="column" rowgap="01">
          ${n?w`<wui-text variant="sm-medium" color="secondary">${n}</wui-text>`:null}

          <wui-flex alignItems="center" columngap="1">
            <wui-text variant="md-regular" color="primary">
              ${M.getTruncateString({string:t||e,charsStart:t?16:this.charsStart,charsEnd:t?0:this.charsEnd,truncate:t?`end`:`middle`})}
            </wui-text>

            ${c&&l?w`<wui-tag variant=${c} size="sm">${l}</wui-tag>`:null}
          </wui-flex>

          ${r?w`<wui-text variant="sm-regular" color="secondary">${r}</wui-text>`:null}
        </wui-flex>

        ${i?this.buttonTemplate({buttonType:a,buttonLabel:o,buttonVariant:s}):null}
      </wui-flex>
    `}buttonTemplate({buttonType:e,buttonLabel:t,buttonVariant:n}){return w`
      <wui-button
        size="sm"
        variant=${n}
        @click=${e===`disconnect`?this.dispatchDisconnectEvent.bind(this):this.dispatchSwitchEvent.bind(this)}
        data-testid=${e===`disconnect`?`wui-active-profile-wallet-item-disconnect-button`:`wui-active-profile-wallet-item-switch-button`}
      >
        ${t}
      </wui-button>
    `}dispatchDisconnectEvent(){this.dispatchEvent(new CustomEvent(`disconnect`,{bubbles:!0,composed:!0}))}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent(`switch`,{bubbles:!0,composed:!0}))}dispatchExternalLinkEvent(){this.dispatchEvent(new CustomEvent(`externalLink`,{bubbles:!0,composed:!0}))}dispatchMoreButtonEvent(){this.dispatchEvent(new CustomEvent(`more`,{bubbles:!0,composed:!0}))}dispatchCopyEvent(){this.dispatchEvent(new CustomEvent(`copy`,{bubbles:!0,composed:!0}))}};H.styles=[A,E,Ht],V([T()],H.prototype,`address`,void 0),V([T()],H.prototype,`profileName`,void 0),V([T({type:Array})],H.prototype,`content`,void 0),V([T()],H.prototype,`alt`,void 0),V([T()],H.prototype,`imageSrc`,void 0),V([T()],H.prototype,`icon`,void 0),V([T()],H.prototype,`iconSize`,void 0),V([T()],H.prototype,`iconBadge`,void 0),V([T()],H.prototype,`iconBadgeSize`,void 0),V([T()],H.prototype,`buttonVariant`,void 0),V([T({type:Boolean})],H.prototype,`enableMoreButton`,void 0),V([T({type:Number})],H.prototype,`charsStart`,void 0),V([T({type:Number})],H.prototype,`charsEnd`,void 0),H=V([O(`wui-active-profile-wallet-item`)],H);var Ut=D`
  wui-image,
  .icon-box {
    width: 32px;
    height: 32px;
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  .right-icon {
    cursor: pointer;
  }

  .icon-box {
    position: relative;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  .icon-badge {
    position: absolute;
    top: 18px;
    left: 23px;
    z-index: 3;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border: 2px solid ${({tokens:e})=>e.theme.backgroundPrimary};
    border-radius: 50%;
    padding: ${({spacing:e})=>e[`01`]};
  }

  .icon-badge {
    width: 8px;
    height: 8px;
  }
`,U=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},W=class extends N{constructor(){super(...arguments),this.address=``,this.profileName=``,this.alt=``,this.buttonLabel=``,this.buttonVariant=`accent-primary`,this.imageSrc=``,this.icon=void 0,this.iconSize=`md`,this.iconBadgeSize=`md`,this.rightIcon=`signOut`,this.rightIconSize=`md`,this.loading=!1,this.charsStart=4,this.charsEnd=6}render(){return w`
      <wui-flex alignItems="center" columngap="2">
        ${this.imageOrIconTemplate()} ${this.labelAndDescriptionTemplate()}
        ${this.buttonActionTemplate()}
      </wui-flex>
    `}imageOrIconTemplate(){return this.icon?w`
        <wui-flex alignItems="center" justifyContent="center" class="icon-box">
          <wui-flex alignItems="center" justifyContent="center" class="icon-box">
            <wui-icon size="lg" color="default" name=${this.icon} class="custom-icon"></wui-icon>

            ${this.iconBadge?w`<wui-icon
                  color="default"
                  size="inherit"
                  name=${this.iconBadge}
                  class="icon-badge"
                ></wui-icon>`:null}
          </wui-flex>
        </wui-flex>
      `:w`<wui-image objectFit="contain" src=${this.imageSrc} alt=${this.alt}></wui-image>`}labelAndDescriptionTemplate(){return w`
      <wui-flex
        flexDirection="column"
        flexGrow="1"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <wui-text variant="lg-regular" color="primary">
          ${M.getTruncateString({string:this.profileName||this.address,charsStart:this.profileName?16:this.charsStart,charsEnd:this.profileName?0:this.charsEnd,truncate:this.profileName?`end`:`middle`})}
        </wui-text>
      </wui-flex>
    `}buttonActionTemplate(){return w`
      <wui-flex columngap="1" alignItems="center" justifyContent="center">
        <wui-button
          size="sm"
          variant=${this.buttonVariant}
          .loading=${this.loading}
          @click=${this.handleButtonClick}
          data-testid="wui-inactive-profile-wallet-item-button"
        >
          ${this.buttonLabel}
        </wui-button>

        <wui-icon-link
          variant="secondary"
          size="md"
          icon=${k(this.rightIcon)}
          class="right-icon"
          @click=${this.handleIconClick}
        ></wui-icon-link>
      </wui-flex>
    `}handleButtonClick(){this.dispatchEvent(new CustomEvent(`buttonClick`,{bubbles:!0,composed:!0}))}handleIconClick(){this.dispatchEvent(new CustomEvent(`iconClick`,{bubbles:!0,composed:!0}))}};W.styles=[A,E,Ut],U([T()],W.prototype,`address`,void 0),U([T()],W.prototype,`profileName`,void 0),U([T()],W.prototype,`alt`,void 0),U([T()],W.prototype,`buttonLabel`,void 0),U([T()],W.prototype,`buttonVariant`,void 0),U([T()],W.prototype,`imageSrc`,void 0),U([T()],W.prototype,`icon`,void 0),U([T()],W.prototype,`iconSize`,void 0),U([T()],W.prototype,`iconBadge`,void 0),U([T()],W.prototype,`iconBadgeSize`,void 0),U([T()],W.prototype,`rightIcon`,void 0),U([T()],W.prototype,`rightIconSize`,void 0),U([T({type:Boolean})],W.prototype,`loading`,void 0),U([T({type:Number})],W.prototype,`charsStart`,void 0),U([T({type:Number})],W.prototype,`charsEnd`,void 0),W=U([O(`wui-inactive-profile-wallet-item`)],W);var Wt={getAuthData(e){let t=e.connectorId===_.CONNECTOR_ID.AUTH;if(!t)return{isAuth:!1,icon:void 0,iconSize:void 0,name:void 0};let n=e?.auth?.name??a.getConnectedSocialProvider(),r=e?.auth?.username??a.getConnectedSocialUsername(),i=y.getAuthConnector()?.provider.getEmail()??``;return{isAuth:!0,icon:n??`mail`,iconSize:n?`xl`:`md`,name:t?ie.getAuthName({email:i,socialUsername:r,socialProvider:n}):void 0}}},Gt=D`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
  }

  .balance-amount {
    flex: 1;
  }

  .wallet-list {
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({easings:e})=>e[`ease-out-power-1`]}
      ${({durations:e})=>e.md};
    will-change: opacity;
    mask-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
      rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
      black 40px,
      black calc(100% - 40px),
      rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
      rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
    );
  }

  .active-wallets {
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  .active-wallets-box {
    height: 330px;
  }

  .empty-wallet-list-box {
    height: 400px;
  }

  .empty-box {
    width: 100%;
    padding: ${({spacing:e})=>e[4]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-separator {
    margin: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  .active-connection {
    padding: ${({spacing:e})=>e[2]};
  }

  .recent-connection {
    padding: ${({spacing:e})=>e[2]} 0 ${({spacing:e})=>e[2]} 0;
  }

  @media (max-width: 430px) {
    .active-wallets-box,
    .empty-wallet-list-box {
      height: auto;
      max-height: clamp(360px, 470px, 80vh);
    }
  }
`,G=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},K={ADDRESS_DISPLAY:{START:4,END:6},BADGE:{SIZE:`md`,ICON:`lightbulb`},SCROLL_THRESHOLD:50,OPACITY_RANGE:[0,1]},Kt={eip155:`ethereum`,solana:`solana`,bip122:`bitcoin`,ton:`ton`,tron:`tron`},qt=[{namespace:`eip155`,icon:Kt.eip155,label:`EVM`},{namespace:`solana`,icon:Kt.solana,label:`Solana`},{namespace:`bip122`,icon:Kt.bip122,label:`Bitcoin`},{namespace:`ton`,icon:Kt.ton,label:`Ton`},{namespace:`tron`,icon:Kt.tron,label:`Tron`}],Jt={eip155:{title:`Add EVM Wallet`,description:`Add your first EVM wallet`},solana:{title:`Add Solana Wallet`,description:`Add your first Solana wallet`},bip122:{title:`Add Bitcoin Wallet`,description:`Add your first Bitcoin wallet`},ton:{title:`Add TON Wallet`,description:`Add your first TON wallet`},tron:{title:`Add TRON Wallet`,description:`Add your first TRON wallet`}},q=class extends N{constructor(){super(),this.unsubscribers=[],this.currentTab=0,this.namespace=g.state.activeChain,this.namespaces=Array.from(g.state.chains.keys()),this.caipAddress=void 0,this.profileName=void 0,this.activeConnectorIds=y.state.activeConnectorIds,this.lastSelectedAddress=``,this.lastSelectedConnectorId=``,this.isSwitching=!1,this.caipNetwork=g.state.activeCaipNetwork,this.user=g.getAccountData()?.user,this.remoteFeatures=o.state.remoteFeatures,this.currentTab=this.namespace?this.namespaces.indexOf(this.namespace):0,this.caipAddress=g.getAccountData(this.namespace)?.caipAddress,this.profileName=g.getAccountData(this.namespace)?.profileName,this.unsubscribers.push(h.subscribeKey(`connections`,()=>this.onConnectionsChange()),h.subscribeKey(`recentConnections`,()=>this.requestUpdate()),y.subscribeKey(`activeConnectorIds`,e=>{this.activeConnectorIds=e}),g.subscribeKey(`activeCaipNetwork`,e=>this.caipNetwork=e),g.subscribeChainProp(`accountState`,e=>{this.user=e?.user}),o.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e)),this.chainListener=g.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress,this.profileName=e?.profileName},this.namespace)}disconnectedCallback(){this.unsubscribers.forEach(e=>e()),this.resizeObserver?.disconnect(),this.removeScrollListener(),this.chainListener?.()}firstUpdated(){let e=this.shadowRoot?.querySelector(`.wallet-list`);if(!e)return;let t=()=>this.updateScrollOpacity(e);requestAnimationFrame(t),e.addEventListener(`scroll`,t),this.resizeObserver=new ResizeObserver(t),this.resizeObserver.observe(e),t()}render(){let e=this.namespace;if(!e)throw Error(`Namespace is not set`);return w`
      <wui-flex flexDirection="column" .padding=${[`0`,`4`,`4`,`4`]} gap="4">
        ${this.renderTabs()} ${this.renderHeader(e)} ${this.renderConnections(e)}
        ${this.renderAddConnectionButton(e)}
      </wui-flex>
    `}renderTabs(){let e=this.namespaces.map(e=>qt.find(t=>t.namespace===e)).filter(Boolean);return e.length>1?w`
        <wui-tabs
          .onTabChange=${e=>this.handleTabChange(e)}
          .activeTab=${this.currentTab}
          .tabs=${e}
        ></wui-tabs>
      `:null}renderHeader(e){let t=this.getActiveConnections(e).flatMap(({accounts:e})=>e).length+ +!!this.caipAddress;return w`
      <wui-flex alignItems="center" columngap="1">
        <wui-icon
          size="sm"
          name=${Kt[e]??Kt.eip155}
        ></wui-icon>
        <wui-text color="secondary" variant="lg-regular"
          >${t>1?`Wallets`:`Wallet`}</wui-text
        >
        <wui-text
          color="primary"
          variant="lg-regular"
          class="balance-amount"
          data-testid="balance-amount"
        >
          ${t}
        </wui-text>
        <wui-link
          color="secondary"
          variant="secondary"
          @click=${()=>h.disconnect({namespace:e})}
          ?disabled=${!this.hasAnyConnections(e)}
          data-testid="disconnect-all-button"
        >
          Disconnect All
        </wui-link>
      </wui-flex>
    `}renderConnections(e){let t=this.hasAnyConnections(e);return w`
      <wui-flex flexDirection="column" class=${Te({"wallet-list":!0,"active-wallets-box":t,"empty-wallet-list-box":!t})} rowgap="3">
        ${t?this.renderActiveConnections(e):this.renderEmptyState(e)}
      </wui-flex>
    `}renderActiveConnections(e){let t=this.getActiveConnections(e),n=this.activeConnectorIds[e];return w`
      ${this.getPlainAddress()||n||t.length>0?w`<wui-flex
            flexDirection="column"
            .padding=${[`4`,`0`,`4`,`0`]}
            class="active-wallets"
          >
            ${this.renderActiveProfile(e)} ${this.renderActiveConnectionsList(e)}
          </wui-flex>`:null}
      ${this.renderRecentConnections(e)}
    `}renderActiveProfile(e){let t=this.activeConnectorIds[e];if(!t)return null;let{connections:n}=te.getConnectionsData(e),r=y.getConnectorById(t),a=i.getConnectorImage(r),o=this.getPlainAddress();if(!o)return null;let s=e===_.CHAIN.BITCOIN,c=Wt.getAuthData({connectorId:t,accounts:[]}),l=this.getActiveConnections(e).flatMap(e=>e.accounts).length>0,u=n.find(e=>e.connectorId===t),d=u?.accounts.filter(e=>!Se.isLowerCaseMatch(e.address,o));return w`
      <wui-flex flexDirection="column" .padding=${[`0`,`4`,`0`,`4`]}>
        <wui-active-profile-wallet-item
          address=${o}
          alt=${r?.name}
          .content=${this.getProfileContent({address:o,connections:n,connectorId:t,namespace:e})}
          .charsStart=${K.ADDRESS_DISPLAY.START}
          .charsEnd=${K.ADDRESS_DISPLAY.END}
          .icon=${c.icon}
          .iconSize=${c.iconSize}
          .iconBadge=${this.isSmartAccount(o)?K.BADGE.ICON:void 0}
          .iconBadgeSize=${this.isSmartAccount(o)?K.BADGE.SIZE:void 0}
          imageSrc=${a}
          ?enableMoreButton=${c.isAuth}
          @copy=${()=>this.handleCopyAddress(o)}
          @disconnect=${()=>this.handleDisconnect(e,t)}
          @switch=${()=>{s&&u&&d?.[0]&&this.handleSwitchWallet(u,d[0].address,e)}}
          @externalLink=${()=>this.handleExternalLink(o)}
          @more=${()=>this.handleMore()}
          data-testid="wui-active-profile-wallet-item"
        ></wui-active-profile-wallet-item>
        ${l?w`<wui-separator></wui-separator>`:null}
      </wui-flex>
    `}renderActiveConnectionsList(e){let t=this.getActiveConnections(e);return t.length===0?null:w`
      <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
        ${this.renderConnectionList(t,!1,e)}
      </wui-flex>
    `}renderRecentConnections(e){let{recentConnections:t}=te.getConnectionsData(e);return t.flatMap(e=>e.accounts).length===0?null:w`
      <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]} rowGap="2">
        <wui-text color="secondary" variant="sm-medium" data-testid="recently-connected-text"
          >RECENTLY CONNECTED</wui-text
        >
        <wui-flex flexDirection="column" .padding=${[`0`,`2`,`0`,`2`]}>
          ${this.renderConnectionList(t,!0,e)}
        </wui-flex>
      </wui-flex>
    `}renderConnectionList(e,t,n){return e.filter(e=>e.accounts.length>0).map((e,r)=>{let a=y.getConnectorById(e.connectorId),o=i.getConnectorImage(a)??``,s=Wt.getAuthData(e);return e.accounts.map((i,a)=>{let c=r!==0||a!==0,l=this.isAccountLoading(e.connectorId,i.address);return w`
            <wui-flex flexDirection="column">
              ${c?w`<wui-separator></wui-separator>`:null}
              <wui-inactive-profile-wallet-item
                address=${i.address}
                alt=${e.connectorId}
                buttonLabel=${t?`Connect`:`Switch`}
                buttonVariant=${t?`neutral-secondary`:`accent-secondary`}
                rightIcon=${t?`bin`:`power`}
                rightIconSize="sm"
                class=${t?`recent-connection`:`active-connection`}
                data-testid=${t?`recent-connection`:`active-connection`}
                imageSrc=${o}
                .iconBadge=${this.isSmartAccount(i.address)?K.BADGE.ICON:void 0}
                .iconBadgeSize=${this.isSmartAccount(i.address)?K.BADGE.SIZE:void 0}
                .icon=${s.icon}
                .iconSize=${s.iconSize}
                .loading=${l}
                .showBalance=${!1}
                .charsStart=${K.ADDRESS_DISPLAY.START}
                .charsEnd=${K.ADDRESS_DISPLAY.END}
                @buttonClick=${()=>this.handleSwitchWallet(e,i.address,n)}
                @iconClick=${()=>this.handleWalletAction({connection:e,address:i.address,isRecentConnection:t,namespace:n})}
              ></wui-inactive-profile-wallet-item>
            </wui-flex>
          `})})}renderAddConnectionButton(e){if(!this.isMultiWalletEnabled()&&this.caipAddress||!this.hasAnyConnections(e))return null;let{title:t}=this.getChainLabelInfo(e);return w`
      <wui-list-item
        variant="icon"
        iconVariant="overlay"
        icon="plus"
        iconSize="sm"
        ?chevron=${!0}
        @click=${()=>this.handleAddConnection(e)}
        data-testid="add-connection-button"
      >
        <wui-text variant="md-medium" color="secondary">${t}</wui-text>
      </wui-list-item>
    `}renderEmptyState(e){let{title:t,description:n}=this.getChainLabelInfo(e);return w`
      <wui-flex alignItems="flex-start" class="empty-template" data-testid="empty-template">
        <wui-flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          rowgap="3"
          class="empty-box"
        >
          <wui-icon-box size="xl" icon="wallet" color="secondary"></wui-icon-box>

          <wui-flex flexDirection="column" alignItems="center" justifyContent="center" gap="1">
            <wui-text color="primary" variant="lg-regular" data-testid="empty-state-text"
              >No wallet connected</wui-text
            >
            <wui-text color="secondary" variant="md-regular" data-testid="empty-state-description"
              >${n}</wui-text
            >
          </wui-flex>

          <wui-link
            @click=${()=>this.handleAddConnection(e)}
            data-testid="empty-state-button"
            icon="plus"
          >
            ${t}
          </wui-link>
        </wui-flex>
      </wui-flex>
    `}handleTabChange(e){let t=this.namespaces[e];t&&(this.chainListener?.(),this.currentTab=this.namespaces.indexOf(t),this.namespace=t,this.caipAddress=g.getAccountData(t)?.caipAddress,this.profileName=g.getAccountData(t)?.profileName,this.chainListener=g.subscribeChainProp(`accountState`,e=>{this.caipAddress=e?.caipAddress},t))}async handleSwitchWallet(e,t,n){try{this.isSwitching=!0,this.lastSelectedConnectorId=e.connectorId,this.lastSelectedAddress=t,this.caipNetwork?.chainNamespace!==n&&e?.caipNetwork&&(y.setFilterByNamespace(n),await g.switchActiveNetwork(e?.caipNetwork)),await h.switchConnection({connection:e,address:t,namespace:n,closeModalOnConnect:!1,onChange({hasSwitchedAccount:e,hasSwitchedWallet:t}){t?m.showSuccess(`Wallet switched`):e&&m.showSuccess(`Account switched`)}})}catch{m.showError(`Failed to switch wallet`)}finally{this.isSwitching=!1}}handleWalletAction(e){let{connection:t,address:n,isRecentConnection:r,namespace:i}=e;r?(a.deleteAddressFromConnection({connectorId:t.connectorId,address:n,namespace:i}),h.syncStorageConnections(),m.showSuccess(`Wallet deleted`)):this.handleDisconnect(i,t.connectorId)}async handleDisconnect(e,t){try{await h.disconnect({id:t,namespace:e}),m.showSuccess(`Wallet disconnected`)}catch{m.showError(`Failed to disconnect wallet`)}}handleCopyAddress(e){f.copyToClopboard(e),m.showSuccess(`Address copied`)}handleMore(){p.push(`AccountSettings`)}handleExternalLink(e){let t=this.caipNetwork?.blockExplorers?.default.url;t&&f.openHref(`${t}/address/${e}`,`_blank`)}handleAddConnection(e){y.setFilterByNamespace(e),p.push(`Connect`,{addWalletForNamespace:e})}getChainLabelInfo(e){return Jt[e]??{title:`Add Wallet`,description:`Add your first wallet`}}isSmartAccount(e){if(!this.namespace)return!1;let t=this.user?.accounts?.find(e=>e.type===`smartAccount`);return t&&e?Se.isLowerCaseMatch(t.address,e):!1}getPlainAddress(){return this.caipAddress?f.getPlainAddress(this.caipAddress):void 0}getActiveConnections(e){let t=this.activeConnectorIds[e],{connections:n}=te.getConnectionsData(e),[r]=n.filter(e=>Se.isLowerCaseMatch(e.connectorId,t));if(!t)return n;let i=e===_.CHAIN.BITCOIN,{address:a}=this.caipAddress?c.parseCaipAddress(this.caipAddress):{},o=[...a?[a]:[]];return i&&r&&(o=r.accounts.map(e=>e.address)||[]),te.excludeConnectorAddressFromConnections({connectorId:t,addresses:o,connections:n})}hasAnyConnections(e){let t=this.getActiveConnections(e),{recentConnections:n}=te.getConnectionsData(e);return!!this.caipAddress||t.length>0||n.length>0}isAccountLoading(e,t){return Se.isLowerCaseMatch(this.lastSelectedConnectorId,e)&&Se.isLowerCaseMatch(this.lastSelectedAddress,t)&&this.isSwitching}getProfileContent(e){let{address:t,connections:n,connectorId:r,namespace:i}=e,[a]=n.filter(e=>Se.isLowerCaseMatch(e.connectorId,r));if(i===_.CHAIN.BITCOIN&&a?.accounts.every(e=>typeof e.type==`string`))return this.getBitcoinProfileContent(a.accounts,t);let o=Wt.getAuthData({connectorId:r,accounts:[]});return[{address:t,tagLabel:`Active`,tagVariant:`success`,enableButton:!0,profileName:this.profileName,buttonType:`disconnect`,buttonLabel:`Disconnect`,buttonVariant:`neutral-secondary`,...o.isAuth?{description:this.isSmartAccount(t)?`Smart Account`:`EOA Account`}:{}}]}getBitcoinProfileContent(e,t){let n=e.length>1,r=this.getPlainAddress();return e.map(e=>{let i=Se.isLowerCaseMatch(e.address,r),a=`PAYMENT`;return e.type===`ordinal`&&(a=`ORDINALS`),{address:e.address,tagLabel:Se.isLowerCaseMatch(e.address,t)?`Active`:void 0,tagVariant:Se.isLowerCaseMatch(e.address,t)?`success`:void 0,enableButton:!0,...n?{label:a,alignItems:`flex-end`,buttonType:i?`disconnect`:`switch`,buttonLabel:i?`Disconnect`:`Switch`,buttonVariant:i?`neutral-secondary`:`accent-secondary`}:{alignItems:`center`,buttonType:`disconnect`,buttonLabel:`Disconnect`,buttonVariant:`neutral-secondary`}}})}removeScrollListener(){let e=this.shadowRoot?.querySelector(`.wallet-list`);e&&e.removeEventListener(`scroll`,()=>this.handleConnectListScroll())}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(`.wallet-list`);e&&this.updateScrollOpacity(e)}isMultiWalletEnabled(){return!!this.remoteFeatures?.multiWallet}updateScrollOpacity(e){e.style.setProperty(`--connect-scroll--top-opacity`,we.interpolate([0,K.SCROLL_THRESHOLD],K.OPACITY_RANGE,e.scrollTop).toString()),e.style.setProperty(`--connect-scroll--bottom-opacity`,we.interpolate([0,K.SCROLL_THRESHOLD],K.OPACITY_RANGE,e.scrollHeight-e.scrollTop-e.offsetHeight).toString())}onConnectionsChange(){if(this.isMultiWalletEnabled()&&this.namespace){let{connections:e}=te.getConnectionsData(this.namespace);e.length===0&&p.reset(`ProfileWallets`)}this.requestUpdate()}};q.styles=Gt,G([j()],q.prototype,`currentTab`,void 0),G([j()],q.prototype,`namespace`,void 0),G([j()],q.prototype,`namespaces`,void 0),G([j()],q.prototype,`caipAddress`,void 0),G([j()],q.prototype,`profileName`,void 0),G([j()],q.prototype,`activeConnectorIds`,void 0),G([j()],q.prototype,`lastSelectedAddress`,void 0),G([j()],q.prototype,`lastSelectedConnectorId`,void 0),G([j()],q.prototype,`isSwitching`,void 0),G([j()],q.prototype,`caipNetwork`,void 0),G([j()],q.prototype,`user`,void 0),G([j()],q.prototype,`remoteFeatures`,void 0),q=G([O(`w3m-profile-wallets-view`)],q);var Yt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xt=class extends N{constructor(){super(),this.unsubscribe=[],this.activeCaipNetwork=g.state.activeCaipNetwork,this.features=o.state.features,this.remoteFeatures=o.state.remoteFeatures,this.exchangesLoading=x.state.isLoading,this.exchanges=x.state.exchanges,this.unsubscribe.push(o.subscribeKey(`features`,e=>this.features=e),o.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),g.subscribeKey(`activeCaipNetwork`,e=>{this.activeCaipNetwork=e,this.setDefaultPaymentAsset()}),x.subscribeKey(`isLoading`,e=>this.exchangesLoading=e),x.subscribeKey(`exchanges`,e=>this.exchanges=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}async firstUpdated(){x.isPayWithExchangeSupported()&&(await this.setDefaultPaymentAsset(),await x.fetchExchanges())}render(){return w`
      <wui-flex flexDirection="column" .padding=${[`1`,`3`,`3`,`3`]} gap="2">
        ${this.onrampTemplate()} ${this.receiveTemplate()} ${this.depositFromExchangeTemplate()}
      </wui-flex>
    `}async setDefaultPaymentAsset(){if(!this.activeCaipNetwork)return;let e=await x.getAssetsForNetwork(this.activeCaipNetwork.caipNetworkId),t=e.find(e=>e.metadata.symbol===`USDC`)||e[0];t&&x.setPaymentAsset(t)}onrampTemplate(){if(!this.activeCaipNetwork)return null;let e=this.remoteFeatures?.onramp,t=d.ONRAMP_SUPPORTED_CHAIN_NAMESPACES.includes(this.activeCaipNetwork.chainNamespace);return!e||!t?null:w`
      <wui-list-item
        @click=${this.onBuyCrypto.bind(this)}
        icon="card"
        data-testid="wallet-features-onramp-button"
      >
        <wui-text variant="lg-regular" color="primary">Buy crypto</wui-text>
      </wui-list-item>
    `}depositFromExchangeTemplate(){return!this.activeCaipNetwork||!x.isPayWithExchangeSupported()?null:w`
      <wui-list-item
        @click=${this.onDepositFromExchange.bind(this)}
        icon="arrowBottomCircle"
        data-testid="wallet-features-deposit-from-exchange-button"
        ?loading=${this.exchangesLoading}
        ?disabled=${this.exchangesLoading||!this.exchanges.length}
      >
        <wui-text variant="lg-regular" color="primary">Deposit from exchange</wui-text>
      </wui-list-item>
    `}receiveTemplate(){return this.features?.receive?w`
      <wui-list-item
        @click=${this.onReceive.bind(this)}
        icon="qrCode"
        data-testid="wallet-features-receive-button"
      >
        <wui-text variant="lg-regular" color="primary">Receive funds</wui-text>
      </wui-list-item>
    `:null}onBuyCrypto(){p.push(`OnRampProviders`)}onReceive(){p.push(`WalletReceive`)}onDepositFromExchange(){x.reset(),p.push(`PayWithExchange`,{redirectView:p.state.data?.redirectView})}};Yt([j()],Xt.prototype,`activeCaipNetwork`,void 0),Yt([j()],Xt.prototype,`features`,void 0),Yt([j()],Xt.prototype,`remoteFeatures`,void 0),Yt([j()],Xt.prototype,`exchangesLoading`,void 0),Yt([j()],Xt.prototype,`exchanges`,void 0),Xt=Yt([O(`w3m-fund-wallet-view`)],Xt);var Zt=D`
  :host {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  label {
    position: relative;
    display: inline-block;
    user-select: none;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  input {
    width: 0;
    height: 0;
    opacity: 0;
  }

  span {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${({colors:e})=>e.neutrals300};
    border-radius: ${({borderRadius:e})=>e.round};
    border: 1px solid transparent;
    will-change: border;
    transition:
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      border ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      box-shadow ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      width ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      height ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]},
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color, color, border, box-shadow, width, height, transform, opacity;
  }

  span:before {
    content: '';
    position: absolute;
    background-color: ${({colors:e})=>e.white};
    border-radius: 50%;
  }

  /* -- Sizes --------------------------------------------------------- */
  label[data-size='lg'] {
    width: 48px;
    height: 32px;
  }

  label[data-size='md'] {
    width: 40px;
    height: 28px;
  }

  label[data-size='sm'] {
    width: 32px;
    height: 22px;
  }

  label[data-size='lg'] > span:before {
    height: 24px;
    width: 24px;
    left: 4px;
    top: 3px;
  }

  label[data-size='md'] > span:before {
    height: 20px;
    width: 20px;
    left: 4px;
    top: 3px;
  }

  label[data-size='sm'] > span:before {
    height: 16px;
    width: 16px;
    left: 3px;
    top: 2px;
  }

  /* -- Focus states --------------------------------------------------- */
  input:focus-visible:not(:checked) + span,
  input:focus:not(:checked) + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    background-color: ${({tokens:e})=>e.theme.textTertiary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  input:focus-visible:checked + span,
  input:focus:checked + span {
    border: 1px solid ${({tokens:e})=>e.core.iconAccentPrimary};
    box-shadow: 0px 0px 0px 4px rgba(9, 136, 240, 0.2);
  }

  /* -- Checked states --------------------------------------------------- */
  input:checked + span {
    background-color: ${({tokens:e})=>e.core.iconAccentPrimary};
  }

  label[data-size='lg'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='md'] > input:checked + span:before {
    transform: translateX(calc(100% - 9px));
  }

  label[data-size='sm'] > input:checked + span:before {
    transform: translateX(calc(100% - 7px));
  }

  /* -- Hover states ------------------------------------------------------- */
  label:hover > input:not(:checked):not(:disabled) + span {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  label:hover > input:checked:not(:disabled) + span {
    background-color: ${({colors:e})=>e.accent080};
  }

  /* -- Disabled state --------------------------------------------------- */
  label:has(input:disabled) {
    pointer-events: none;
    user-select: none;
  }

  input:not(:checked):disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:checked:disabled + span {
    background-color: ${({colors:e})=>e.neutrals700};
  }

  input:not(:checked):disabled + span::before {
    background-color: ${({colors:e})=>e.neutrals400};
  }

  input:checked:disabled + span::before {
    background-color: ${({tokens:e})=>e.theme.textTertiary};
  }
`,Qt=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$t=class extends N{constructor(){super(...arguments),this.inputElementRef=Oe(),this.checked=!1,this.disabled=!1,this.size=`md`}render(){return w`
      <label data-size=${this.size}>
        <input
          ${De(this.inputElementRef)}
          type="checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          @change=${this.dispatchChangeEvent.bind(this)}
        />
        <span></span>
      </label>
    `}dispatchChangeEvent(){this.dispatchEvent(new CustomEvent(`switchChange`,{detail:this.inputElementRef.value?.checked,bubbles:!0,composed:!0}))}};$t.styles=[A,E,Zt],Qt([T({type:Boolean})],$t.prototype,`checked`,void 0),Qt([T({type:Boolean})],$t.prototype,`disabled`,void 0),Qt([T()],$t.prototype,`size`,void 0),$t=Qt([O(`wui-toggle`)],$t);var en=D`
  :host {
    height: auto;
  }

  :host > wui-flex {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    column-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.theme.foregroundPrimary};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: background-color;
    cursor: pointer;
  }

  wui-switch {
    pointer-events: none;
  }
`,tn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},nn=class extends N{constructor(){super(...arguments),this.checked=!1}render(){return w`
      <wui-flex>
        <wui-icon size="xl" name="walletConnectBrown"></wui-icon>
        <wui-toggle
          ?checked=${this.checked}
          size="sm"
          @switchChange=${this.handleToggleChange.bind(this)}
        ></wui-toggle>
      </wui-flex>
    `}handleToggleChange(e){e.stopPropagation(),this.checked=e.detail,this.dispatchSwitchEvent()}dispatchSwitchEvent(){this.dispatchEvent(new CustomEvent(`certifiedSwitchChange`,{detail:this.checked,bubbles:!0,composed:!0}))}};nn.styles=[A,E,en],tn([T({type:Boolean})],nn.prototype,`checked`,void 0),nn=tn([O(`wui-certified-switch`)],nn);var rn=D`
  :host {
    position: relative;
    display: inline-block;
    width: 100%;
  }

  wui-icon {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: ${({spacing:e})=>e[3]};
    color: ${({tokens:e})=>e.theme.iconDefault};
    cursor: pointer;
    padding: ${({spacing:e})=>e[2]};
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
    transition: background-color ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
  }

  @media (hover: hover) {
    wui-icon:hover {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }
`,an=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},on=class extends N{constructor(){super(...arguments),this.inputComponentRef=Oe(),this.inputValue=``}render(){return w`
      <wui-input-text
        ${De(this.inputComponentRef)}
        placeholder="Search wallet"
        icon="search"
        type="search"
        enterKeyHint="search"
        size="sm"
        @inputChange=${this.onInputChange}
      >
        ${this.inputValue?w`<wui-icon
              @click=${this.clearValue}
              color="inherit"
              size="sm"
              name="close"
            ></wui-icon>`:null}
      </wui-input-text>
    `}onInputChange(e){this.inputValue=e.detail||``}clearValue(){let e=this.inputComponentRef.value?.inputElementRef.value;e&&(e.value=``,this.inputValue=``,e.focus(),e.dispatchEvent(new Event(`input`)))}};on.styles=[A,rn],an([T()],on.prototype,`inputValue`,void 0),on=an([O(`wui-search-bar`)],on);var sn=D`
  :host {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 104px;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    position: relative;
  }

  wui-shimmer[data-type='network'] {
    border: none;
    -webkit-clip-path: var(--apkt-path-network);
    clip-path: var(--apkt-path-network);
  }

  svg {
    position: absolute;
    width: 48px;
    height: 54px;
    z-index: 1;
  }

  svg > path {
    stroke: ${({tokens:e})=>e.theme.foregroundSecondary};
    stroke-width: 1px;
  }

  @media (max-width: 350px) {
    :host {
      width: 100%;
    }
  }
`,cn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ln=class extends N{constructor(){super(...arguments),this.type=`wallet`}render(){return w`
      ${this.shimmerTemplate()}
      <wui-shimmer width="80px" height="20px"></wui-shimmer>
    `}shimmerTemplate(){return this.type===`network`?w` <wui-shimmer data-type=${this.type} width="48px" height="54px"></wui-shimmer>
        ${Ce}`:w`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}};ln.styles=[A,E,sn],cn([T()],ln.prototype,`type`,void 0),ln=cn([O(`wui-card-select-loader`)],ln);var un=C`
  :host {
    display: grid;
    width: inherit;
    height: inherit;
  }
`,J=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Y=class extends N{render(){return this.style.cssText=`
      grid-template-rows: ${this.gridTemplateRows};
      grid-template-columns: ${this.gridTemplateColumns};
      justify-items: ${this.justifyItems};
      align-items: ${this.alignItems};
      justify-content: ${this.justifyContent};
      align-content: ${this.alignContent};
      column-gap: ${this.columnGap&&`var(--apkt-spacing-${this.columnGap})`};
      row-gap: ${this.rowGap&&`var(--apkt-spacing-${this.rowGap})`};
      gap: ${this.gap&&`var(--apkt-spacing-${this.gap})`};
      padding-top: ${this.padding&&M.getSpacingStyles(this.padding,0)};
      padding-right: ${this.padding&&M.getSpacingStyles(this.padding,1)};
      padding-bottom: ${this.padding&&M.getSpacingStyles(this.padding,2)};
      padding-left: ${this.padding&&M.getSpacingStyles(this.padding,3)};
      margin-top: ${this.margin&&M.getSpacingStyles(this.margin,0)};
      margin-right: ${this.margin&&M.getSpacingStyles(this.margin,1)};
      margin-bottom: ${this.margin&&M.getSpacingStyles(this.margin,2)};
      margin-left: ${this.margin&&M.getSpacingStyles(this.margin,3)};
    `,w`<slot></slot>`}};Y.styles=[A,un],J([T()],Y.prototype,`gridTemplateRows`,void 0),J([T()],Y.prototype,`gridTemplateColumns`,void 0),J([T()],Y.prototype,`justifyItems`,void 0),J([T()],Y.prototype,`alignItems`,void 0),J([T()],Y.prototype,`justifyContent`,void 0),J([T()],Y.prototype,`alignContent`,void 0),J([T()],Y.prototype,`columnGap`,void 0),J([T()],Y.prototype,`rowGap`,void 0),J([T()],Y.prototype,`gap`,void 0),J([T()],Y.prototype,`padding`,void 0),J([T()],Y.prototype,`margin`,void 0),Y=J([O(`wui-grid`)],Y);var dn=D`
  button {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    width: 104px;
    row-gap: ${({spacing:e})=>e[2]};
    padding: ${({spacing:e})=>e[3]} ${({spacing:e})=>e[0]};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: clamp(0px, ${({borderRadius:e})=>e[4]}, 20px);
    transition:
      color ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-1`]},
      background-color ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]},
      border-radius ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-1`]};
    will-change: background-color, color, border-radius;
    outline: none;
    border: none;
  }

  button > wui-flex > wui-text {
    color: ${({tokens:e})=>e.theme.textPrimary};
    max-width: 86px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    justify-content: center;
  }

  button > wui-flex > wui-text.certified {
    max-width: 66px;
  }

  @media (hover: hover) and (pointer: fine) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled > wui-flex > wui-text {
    color: ${({tokens:e})=>e.core.glass010};
  }

  [data-selected='true'] {
    background-color: ${({colors:e})=>e.accent020};
  }

  @media (hover: hover) and (pointer: fine) {
    [data-selected='true']:hover:enabled {
      background-color: ${({colors:e})=>e.accent010};
    }
  }

  [data-selected='true']:active:enabled {
    background-color: ${({colors:e})=>e.accent010};
  }

  @media (max-width: 350px) {
    button {
      width: 100%;
    }
  }
`,fn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},X=class extends N{constructor(){super(),this.observer=new IntersectionObserver(()=>void 0),this.visible=!1,this.imageSrc=void 0,this.imageLoading=!1,this.isImpressed=!1,this.explorerId=``,this.walletQuery=``,this.certified=!1,this.displayIndex=0,this.wallet=void 0,this.observer=new IntersectionObserver(e=>{e.forEach(e=>{e.isIntersecting?(this.visible=!0,this.fetchImageSrc(),this.sendImpressionEvent()):this.visible=!1})},{threshold:.01})}firstUpdated(){this.observer.observe(this)}disconnectedCallback(){this.observer.disconnect()}render(){let e=this.wallet?.badge_type===`certified`;return w`
      <button>
        ${this.imageTemplate()}
        <wui-flex flexDirection="row" alignItems="center" justifyContent="center" gap="1">
          <wui-text
            variant="md-regular"
            color="inherit"
            class=${k(e?`certified`:void 0)}
            >${this.wallet?.name}</wui-text
          >
          ${e?w`<wui-icon size="sm" name="walletConnectBrown"></wui-icon>`:null}
        </wui-flex>
      </button>
    `}imageTemplate(){return!this.visible&&!this.imageSrc||this.imageLoading?this.shimmerTemplate():w`
      <wui-wallet-image
        size="lg"
        imageSrc=${k(this.imageSrc)}
        name=${k(this.wallet?.name)}
        .installed=${this.wallet?.installed??!1}
        badgeSize="sm"
      >
      </wui-wallet-image>
    `}shimmerTemplate(){return w`<wui-shimmer width="56px" height="56px"></wui-shimmer>`}async fetchImageSrc(){this.wallet&&(this.imageSrc=i.getWalletImage(this.wallet),!this.imageSrc&&(this.imageLoading=!0,this.imageSrc=await i.fetchWalletImage(this.wallet.image_id),this.imageLoading=!1))}sendImpressionEvent(){!this.wallet||this.isImpressed||(this.isImpressed=!0,b.sendWalletImpressionEvent({name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.explorerId,view:p.state.view,query:this.walletQuery,certified:this.certified,displayIndex:this.displayIndex}))}};X.styles=dn,fn([j()],X.prototype,`visible`,void 0),fn([j()],X.prototype,`imageSrc`,void 0),fn([j()],X.prototype,`imageLoading`,void 0),fn([j()],X.prototype,`isImpressed`,void 0),fn([T()],X.prototype,`explorerId`,void 0),fn([T()],X.prototype,`walletQuery`,void 0),fn([T()],X.prototype,`certified`,void 0),fn([T()],X.prototype,`displayIndex`,void 0),fn([T({type:Object})],X.prototype,`wallet`,void 0),X=fn([O(`w3m-all-wallets-list-item`)],X);var pn=D`
  wui-grid {
    max-height: clamp(360px, 400px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  w3m-all-wallets-list-item {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-inout-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  wui-loading-spinner {
    padding-top: ${({spacing:e})=>e[4]};
    padding-bottom: ${({spacing:e})=>e[4]};
    justify-content: center;
    grid-column: 1 / span 4;
  }
`,mn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},hn=`local-paginator`,gn=class extends N{constructor(){super(),this.unsubscribe=[],this.paginationObserver=void 0,this.loading=!n.state.wallets.length,this.wallets=n.state.wallets,this.mobileFullScreen=o.state.enableMobileFullScreen,this.unsubscribe.push(n.subscribeKey(`wallets`,e=>this.wallets=e))}firstUpdated(){this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.initialFetch(),this.createPaginationObserver()}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.paginationObserver?.disconnect()}render(){return w`
      <wui-grid
        data-scroll=${!this.loading}
        .padding=${[`0`,`3`,`3`,`3`]}
        gap="2"
        justifyContent="space-between"
      >
        ${this.loading?this.shimmerTemplate(16):this.walletsTemplate()}
        ${this.paginationLoaderTemplate()}
      </wui-grid>
    `}async initialFetch(){this.loading=!0;let e=this.shadowRoot?.querySelector(`wui-grid`);e&&(await n.fetchWalletsByPage({page:1}),await e.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.loading=!1,e.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}shimmerTemplate(e,t){return[...Array(e)].map(()=>w`
        <wui-card-select-loader type="wallet" id=${k(t)}></wui-card-select-loader>
      `)}walletsTemplate(){return l.getWalletConnectWallets(this.wallets).map((e,t)=>w`
        <w3m-all-wallets-list-item
          data-testid="wallet-search-item-${e.id}"
          @click=${()=>this.onConnectWallet(e)}
          .wallet=${e}
          explorerId=${e.id}
          certified=${this.badge===`certified`}
          displayIndex=${t}
        ></w3m-all-wallets-list-item>
      `)}paginationLoaderTemplate(){let{wallets:e,recommended:t,featured:r,count:i,mobileFilteredOutWalletsLength:a}=n.state,o=window.innerWidth<352?3:4,s=e.length+t.length,c=Math.ceil(s/o)*o-s+o;return c-=e.length?r.length%o:0,i===0&&r.length>0?null:i===0||[...r,...e,...t].length<i-(a??0)?this.shimmerTemplate(c,hn):null}createPaginationObserver(){let e=this.shadowRoot?.querySelector(`#${hn}`);e&&(this.paginationObserver=new IntersectionObserver(([e])=>{if(e?.isIntersecting&&!this.loading){let{page:e,count:t,wallets:r}=n.state;r.length<t&&n.fetchWalletsByPage({page:e+1})}}),this.paginationObserver.observe(e))}onConnectWallet(e){y.selectWalletConnector(e)}};gn.styles=pn,mn([j()],gn.prototype,`loading`,void 0),mn([j()],gn.prototype,`wallets`,void 0),mn([j()],gn.prototype,`badge`,void 0),mn([j()],gn.prototype,`mobileFullScreen`,void 0),gn=mn([O(`w3m-all-wallets-list`)],gn);var _n=C`
  wui-grid,
  wui-loading-spinner,
  wui-flex {
    height: 360px;
  }

  wui-grid {
    overflow: scroll;
    scrollbar-width: none;
    grid-auto-rows: min-content;
    grid-template-columns: repeat(auto-fill, 104px);
  }

  :host([data-mobile-fullscreen='true']) wui-grid {
    max-height: none;
    height: auto;
  }

  wui-grid[data-scroll='false'] {
    overflow: hidden;
  }

  wui-grid::-webkit-scrollbar {
    display: none;
  }

  wui-loading-spinner {
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 350px) {
    wui-grid {
      grid-template-columns: repeat(2, 1fr);
    }
  }
`,vn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yn=class extends N{constructor(){super(...arguments),this.prevQuery=``,this.prevBadge=void 0,this.loading=!0,this.mobileFullScreen=o.state.enableMobileFullScreen,this.query=``}render(){return this.mobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),this.onSearch(),this.loading?w`<wui-loading-spinner color="accent-primary"></wui-loading-spinner>`:this.walletsTemplate()}async onSearch(){(this.query.trim()!==this.prevQuery.trim()||this.badge!==this.prevBadge)&&(this.prevQuery=this.query,this.prevBadge=this.badge,this.loading=!0,await n.searchWallet({search:this.query,badge:this.badge}),this.loading=!1)}walletsTemplate(){let{search:e}=n.state,t=l.markWalletsAsInstalled(e),r=l.filterWalletsByWcSupport(t);return r.length?w`
      <wui-grid
        data-testid="wallet-list"
        .padding=${[`0`,`3`,`3`,`3`]}
        rowGap="4"
        columngap="2"
        justifyContent="space-between"
      >
        ${r.map((e,t)=>w`
            <w3m-all-wallets-list-item
              @click=${()=>this.onConnectWallet(e)}
              .wallet=${e}
              data-testid="wallet-search-item-${e.id}"
              explorerId=${e.id}
              certified=${this.badge===`certified`}
              walletQuery=${this.query}
              displayIndex=${t}
            ></w3m-all-wallets-list-item>
          `)}
      </wui-grid>
    `:w`
        <wui-flex
          data-testid="no-wallet-found"
          justifyContent="center"
          alignItems="center"
          gap="3"
          flexDirection="column"
        >
          <wui-icon-box size="lg" color="default" icon="wallet"></wui-icon-box>
          <wui-text data-testid="no-wallet-found-text" color="secondary" variant="md-medium">
            No Wallet found
          </wui-text>
        </wui-flex>
      `}onConnectWallet(e){y.selectWalletConnector(e)}};yn.styles=_n,vn([j()],yn.prototype,`loading`,void 0),vn([j()],yn.prototype,`mobileFullScreen`,void 0),vn([T()],yn.prototype,`query`,void 0),vn([T()],yn.prototype,`badge`,void 0),yn=vn([O(`w3m-all-wallets-search`)],yn);var bn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xn=class extends N{constructor(){super(...arguments),this.search=``,this.badge=void 0,this.onDebouncedSearch=f.debounce(e=>{this.search=e})}render(){let e=this.search.length>=2;return w`
      <wui-flex .padding=${[`1`,`3`,`3`,`3`]} gap="2" alignItems="center">
        <wui-search-bar @inputChange=${this.onInputChange.bind(this)}></wui-search-bar>
        <wui-certified-switch
          ?checked=${this.badge===`certified`}
          @certifiedSwitchChange=${this.onCertifiedSwitchChange.bind(this)}
          data-testid="wui-certified-switch"
        ></wui-certified-switch>
        ${this.qrButtonTemplate()}
      </wui-flex>
      ${e||this.badge?w`<w3m-all-wallets-search
            query=${this.search}
            .badge=${this.badge}
          ></w3m-all-wallets-search>`:w`<w3m-all-wallets-list .badge=${this.badge}></w3m-all-wallets-list>`}
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}onCertifiedSwitchChange(e){e.detail?(this.badge=`certified`,m.showSvg(`Only WalletConnect certified`,{icon:`walletConnectBrown`,iconColor:`accent-100`})):this.badge=void 0}qrButtonTemplate(){return f.isMobile()?w`
        <wui-icon-box
          size="xl"
          iconSize="xl"
          color="accent-primary"
          icon="qrCode"
          border
          borderColor="wui-accent-glass-010"
          @click=${this.onWalletConnectQr.bind(this)}
        ></wui-icon-box>
      `:null}onWalletConnectQr(){p.push(`ConnectingWalletConnect`)}};bn([j()],xn.prototype,`search`,void 0),bn([j()],xn.prototype,`badge`,void 0),xn=bn([O(`w3m-all-wallets-view`)],xn);var Sn=D`
  button {
    display: flex;
    gap: ${({spacing:e})=>e[1]};
    padding: ${({spacing:e})=>e[4]};
    width: 100%;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    justify-content: center;
    align-items: center;
  }

  :host([data-size='sm']) button {
    padding: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[2]};
  }

  :host([data-size='md']) button {
    padding: ${({spacing:e})=>e[3]};
    border-radius: ${({borderRadius:e})=>e[3]};
  }

  button:hover {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  button:disabled {
    opacity: 0.5;
  }
`,Cn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},wn=class extends N{constructor(){super(...arguments),this.text=``,this.disabled=!1,this.size=`lg`,this.icon=`copy`,this.tabIdx=void 0}render(){this.dataset.size=this.size;let e=`${this.size}-regular`;return w`
      <button ?disabled=${this.disabled} tabindex=${k(this.tabIdx)}>
        <wui-icon name=${this.icon} size=${this.size} color="default"></wui-icon>
        <wui-text align="center" variant=${e} color="primary">${this.text}</wui-text>
      </button>
    `}};wn.styles=[A,E,Sn],Cn([T()],wn.prototype,`text`,void 0),Cn([T({type:Boolean})],wn.prototype,`disabled`,void 0),Cn([T()],wn.prototype,`size`,void 0),Cn([T()],wn.prototype,`icon`,void 0),Cn([T()],wn.prototype,`tabIdx`,void 0),wn=Cn([O(`wui-list-button`)],wn);var Tn=D`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }

  wui-email-input {
    width: 100%;
  }

  form {
    width: 100%;
    display: block;
    position: relative;
  }

  wui-icon-link,
  wui-loading-spinner {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }

  wui-icon-link {
    right: ${({spacing:e})=>e[2]};
  }

  wui-loading-spinner {
    right: ${({spacing:e})=>e[3]};
  }

  wui-text {
    margin: ${({spacing:e})=>e[2]} ${({spacing:e})=>e[3]}
      ${({spacing:e})=>e[0]} ${({spacing:e})=>e[3]};
  }
`,En=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Dn=class extends N{constructor(){super(),this.unsubscribe=[],this.formRef=Oe(),this.email=``,this.loading=!1,this.error=``,this.remoteFeatures=o.state.remoteFeatures,this.hasExceededUsageLimit=n.state.plan.hasExceededUsageLimit,this.unsubscribe.push(o.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}),n.subscribeKey(`plan`,e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.formRef.value?.addEventListener(`keydown`,e=>{e.key===`Enter`&&this.onSubmitEmail(e)})}render(){let e=h.hasAnyConnection(_.CONNECTOR_ID.AUTH);return w`
      <form ${De(this.formRef)} @submit=${this.onSubmitEmail.bind(this)}>
        <wui-email-input
          @focus=${this.onFocusEvent.bind(this)}
          .disabled=${this.loading}
          @inputChange=${this.onEmailInputChange.bind(this)}
          tabIdx=${k(this.tabIdx)}
          ?disabled=${e||this.hasExceededUsageLimit}
        >
        </wui-email-input>

        ${this.submitButtonTemplate()}${this.loadingTemplate()}
        <input type="submit" hidden />
      </form>
      ${this.templateError()}
    `}submitButtonTemplate(){return!this.loading&&this.email.length>3?w`
          <wui-icon-link
            size="lg"
            icon="chevronRight"
            iconcolor="accent-100"
            @click=${this.onSubmitEmail.bind(this)}
          >
          </wui-icon-link>
        `:null}loadingTemplate(){return this.loading?w`<wui-loading-spinner size="md" color="accent-primary"></wui-loading-spinner>`:null}templateError(){return this.error?w`<wui-text variant="sm-medium" color="error">${this.error}</wui-text>`:null}onEmailInputChange(e){this.email=e.detail.trim(),this.error=``}async onSubmitEmail(e){if(!Ee.isValidEmail(this.email)){be.open({displayMessage:le.ALERT_WARNINGS.INVALID_EMAIL.displayMessage},`warning`);return}if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===g.state.activeChain)){let e=g.getFirstCaipNetworkSupportsAuthConnector();if(e){p.push(`SwitchNetwork`,{network:e});return}}try{if(this.loading)return;this.loading=!0,e.preventDefault();let t=y.getAuthConnector();if(!t)throw Error(`w3m-email-login-widget: Auth connector not found`);let{action:n}=await t.provider.connectEmail({email:this.email});if(b.sendEvent({type:`track`,event:`EMAIL_SUBMITTED`}),n===`VERIFY_OTP`)b.sendEvent({type:`track`,event:`EMAIL_VERIFICATION_CODE_SENT`}),p.push(`EmailVerifyOtp`,{email:this.email});else if(n===`VERIFY_DEVICE`)p.push(`EmailVerifyDevice`,{email:this.email});else if(n===`CONNECT`){let e=this.remoteFeatures?.multiWallet;await h.connectExternal(t,g.state.activeChain),e?(p.replace(`ProfileWallets`),m.showSuccess(`New Wallet Added`)):p.replace(`Account`)}}catch(e){f.parseError(e)?.includes(`Invalid email`)?this.error=`Invalid email. Try again.`:m.showError(e)}finally{this.loading=!1}}onFocusEvent(){b.sendEvent({type:`track`,event:`EMAIL_LOGIN_SELECTED`})}};Dn.styles=Tn,En([T()],Dn.prototype,`tabIdx`,void 0),En([j()],Dn.prototype,`email`,void 0),En([j()],Dn.prototype,`loading`,void 0),En([j()],Dn.prototype,`error`,void 0),En([j()],Dn.prototype,`remoteFeatures`,void 0),En([j()],Dn.prototype,`hasExceededUsageLimit`,void 0),Dn=En([O(`w3m-email-login-widget`)],Dn);var On=D`
  :host {
    display: block;
    width: 100%;
  }

  button {
    width: 100%;
    height: 52px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  @media (hover: hover) {
    button:hover:enabled {
      background: ${({tokens:e})=>e.theme.foregroundSecondary};
    }
  }

  button:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`,kn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},An=class extends N{constructor(){super(...arguments),this.logo=`google`,this.disabled=!1,this.tabIdx=void 0}render(){return w`
      <button ?disabled=${this.disabled} tabindex=${k(this.tabIdx)}>
        <wui-icon size="xxl" name=${this.logo}></wui-icon>
      </button>
    `}};An.styles=[A,E,On],kn([T()],An.prototype,`logo`,void 0),kn([T({type:Boolean})],An.prototype,`disabled`,void 0),kn([T()],An.prototype,`tabIdx`,void 0),An=kn([O(`wui-logo-select`)],An);var jn=D`
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,Mn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Nn=2,Pn=6,Fn=class extends N{constructor(){super(),this.unsubscribe=[],this.walletGuide=`get-started`,this.tabIdx=void 0,this.connectors=y.state.connectors,this.remoteFeatures=o.state.remoteFeatures,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.isPwaLoading=!1,this.hasExceededUsageLimit=n.state.plan.hasExceededUsageLimit,this.unsubscribe.push(y.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`)}),o.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e),n.subscribeKey(`plan`,e=>this.hasExceededUsageLimit=e.hasExceededUsageLimit))}connectedCallback(){super.connectedCallback(),this.handlePwaFrameLoad()}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`
      <wui-flex
        class="container"
        flexDirection="column"
        gap="2"
        data-testid="w3m-social-login-widget"
      >
        ${this.topViewTemplate()}${this.bottomViewTemplate()}
      </wui-flex>
    `}topViewTemplate(){let e=this.walletGuide===`explore`,t=this.remoteFeatures?.socials;return!t&&e?(t=d.DEFAULT_SOCIALS,this.renderTopViewContent(t)):t?this.renderTopViewContent(t):null}renderTopViewContent(e){return e.length===2?w` <wui-flex gap="2">
        ${e.slice(0,Nn).map(e=>w`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${k(this.tabIdx)}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
      </wui-flex>`:w` <wui-list-button
      data-testid=${`social-selector-${e[0]}`}
      @click=${()=>{this.onSocialClick(e[0])}}
      size="lg"
      icon=${k(e[0])}
      text=${`Continue with ${M.capitalize(e[0])}`}
      tabIdx=${k(this.tabIdx)}
      ?disabled=${this.isPwaLoading||this.hasConnection()}
    ></wui-list-button>`}bottomViewTemplate(){let e=this.remoteFeatures?.socials,t=this.walletGuide===`explore`;return(!this.authConnector||!e||e.length===0)&&t&&(e=d.DEFAULT_SOCIALS),!e||e.length<=Nn?null:e&&e.length>Pn?w`<wui-flex gap="2">
        ${e.slice(1,Pn-1).map(e=>w`<wui-logo-select
              data-testid=${`social-selector-${e}`}
              @click=${()=>{this.onSocialClick(e)}}
              logo=${e}
              tabIdx=${k(this.tabIdx)}
              ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
              ?disabled=${this.isPwaLoading||this.hasConnection()}
            ></wui-logo-select>`)}
        <wui-logo-select
          logo="more"
          tabIdx=${k(this.tabIdx)}
          @click=${this.onMoreSocialsClick.bind(this)}
          ?disabled=${this.isPwaLoading||this.hasConnection()}
          data-testid="social-selector-more"
        ></wui-logo-select>
      </wui-flex>`:e?w`<wui-flex gap="2">
      ${e.slice(1,e.length).map(e=>w`<wui-logo-select
            data-testid=${`social-selector-${e}`}
            @click=${()=>{this.onSocialClick(e)}}
            logo=${e}
            tabIdx=${k(this.tabIdx)}
            ?focusable=${this.tabIdx!==void 0&&this.tabIdx>=0}
            ?disabled=${this.isPwaLoading||this.hasConnection()}
          ></wui-logo-select>`)}
    </wui-flex>`:null}onMoreSocialsClick(){p.push(`ConnectSocials`)}async onSocialClick(e){if(this.hasExceededUsageLimit){p.push(`UsageExceeded`);return}if(!_.AUTH_CONNECTOR_SUPPORTED_CHAINS.find(e=>e===g.state.activeChain)){let e=g.getFirstCaipNetworkSupportsAuthConnector();if(e){p.push(`SwitchNetwork`,{network:e});return}}e&&await se(e)}async handlePwaFrameLoad(){if(f.isPWA()){this.isPwaLoading=!0;try{this.authConnector?.provider instanceof ce&&await this.authConnector.provider.init()}catch(e){be.open({displayMessage:`Error loading embedded wallet in PWA`,debugMessage:e.message},`error`)}finally{this.isPwaLoading=!1}}}hasConnection(){return h.hasAnyConnection(_.CONNECTOR_ID.AUTH)}};Fn.styles=jn,Mn([T()],Fn.prototype,`walletGuide`,void 0),Mn([T()],Fn.prototype,`tabIdx`,void 0),Mn([j()],Fn.prototype,`connectors`,void 0),Mn([j()],Fn.prototype,`remoteFeatures`,void 0),Mn([j()],Fn.prototype,`authConnector`,void 0),Mn([j()],Fn.prototype,`isPwaLoading`,void 0),Mn([j()],Fn.prototype,`hasExceededUsageLimit`,void 0),Fn=Mn([O(`w3m-social-login-widget`)],Fn);var In=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ln=class extends N{constructor(){super(),this.unsubscribe=[],this.tabIdx=void 0,this.connectors=y.state.connectors,this.count=n.state.count,this.filteredCount=n.state.filteredWallets.length,this.isFetchingRecommendedWallets=n.state.isFetchingRecommendedWallets,this.unsubscribe.push(y.subscribeKey(`connectors`,e=>this.connectors=e),n.subscribeKey(`count`,e=>this.count=e),n.subscribeKey(`filteredWallets`,e=>this.filteredCount=e.length),n.subscribeKey(`isFetchingRecommendedWallets`,e=>this.isFetchingRecommendedWallets=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.connectors.find(e=>e.id===`walletConnect`),{allWallets:t}=o.state;if(!e||t===`HIDE`||t===`ONLY_MOBILE`&&!f.isMobile())return null;let r=n.state.featured.length,i=this.count+r,a=i<10?i:Math.floor(i/10)*10,s=this.filteredCount>0?this.filteredCount:a,c=`${s}`;this.filteredCount>0?c=`${this.filteredCount}`:s<i&&(c=`${s}+`);let l=h.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT);return w`
      <wui-list-wallet
        name="Search Wallet"
        walletIcon="search"
        showAllWallets
        @click=${this.onAllWallets.bind(this)}
        tagLabel=${c}
        tagVariant="info"
        data-testid="all-wallets"
        tabIdx=${k(this.tabIdx)}
        .loading=${this.isFetchingRecommendedWallets}
        ?disabled=${l}
        size="sm"
      ></wui-list-wallet>
    `}onAllWallets(){b.sendEvent({type:`track`,event:`CLICK_ALL_WALLETS`}),p.push(`AllWallets`,{redirectView:p.state.data?.redirectView})}};In([T()],Ln.prototype,`tabIdx`,void 0),In([j()],Ln.prototype,`connectors`,void 0),In([j()],Ln.prototype,`count`,void 0),In([j()],Ln.prototype,`filteredCount`,void 0),In([j()],Ln.prototype,`isFetchingRecommendedWallets`,void 0),Ln=In([O(`w3m-all-wallets-widget`)],Ln);var Rn=D`
  :host {
    margin-top: ${({spacing:e})=>e[1]};
  }
  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1)
      ${({spacing:e})=>e[2]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,zn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Bn=class extends N{constructor(){super(),this.unsubscribe=[],this.explorerWallets=n.state.explorerWallets,this.connections=h.state.connections,this.connectorImages=r.state.connectorImages,this.loadingTelegram=!1,this.unsubscribe.push(h.subscribeKey(`connections`,e=>this.connections=e),r.subscribeKey(`connectorImages`,e=>this.connectorImages=e),n.subscribeKey(`explorerFilteredWallets`,e=>{this.explorerWallets=e?.length?e:n.state.explorerWallets}),n.subscribeKey(`explorerWallets`,e=>{this.explorerWallets?.length||(this.explorerWallets=e)})),f.isTelegram()&&f.isIos()&&(this.loadingTelegram=!h.state.wcUri,this.unsubscribe.push(h.subscribeKey(`wcUri`,e=>this.loadingTelegram=!e)))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`
      <wui-flex flexDirection="column" gap="2"> ${this.connectorListTemplate()} </wui-flex>
    `}connectorListTemplate(){return ie.connectorList().map((e,t)=>e.kind===`connector`?this.renderConnector(e,t):this.renderWallet(e,t))}getConnectorNamespaces(e){return e.subtype===`walletConnect`?[]:e.subtype===`multiChain`?e.connector.connectors?.map(e=>e.chain)||[]:[e.connector.chain]}renderConnector(e,t){let n=e.connector,r=i.getConnectorImage(n)||this.connectorImages[n?.imageId??``],a=(this.connections.get(n.chain)??[]).some(e=>Se.isLowerCaseMatch(e.connectorId,n.id)),o,s;e.subtype===`walletConnect`?(o=`qr code`,s=`accent`):e.subtype===`injected`||e.subtype===`announced`?(o=a?`connected`:`installed`,s=a?`info`:`success`):(o=void 0,s=void 0);let c=h.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT),l=e.subtype===`walletConnect`||e.subtype===`external`?c:!1;return w`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${k(r)}
        .installed=${!0}
        name=${n.name??`Unknown`}
        .tagVariant=${s}
        tagLabel=${k(o)}
        data-testid=${`wallet-selector-${n.id.toLowerCase()}`}
        size="sm"
        @click=${()=>this.onClickConnector(e)}
        tabIdx=${k(this.tabIdx)}
        ?disabled=${l}
        rdnsId=${k(n.explorerWallet?.rdns||void 0)}
        walletRank=${k(n.explorerWallet?.order)}
        .namespaces=${this.getConnectorNamespaces(e)}
      >
      </w3m-list-wallet>
    `}onClickConnector(e){let t=p.state.data?.redirectView;if(e.subtype===`walletConnect`){y.setActiveConnector(e.connector),f.isMobile()?p.push(`AllWallets`):p.push(`ConnectingWalletConnect`,{redirectView:t});return}if(e.subtype===`multiChain`){y.setActiveConnector(e.connector),p.push(`ConnectingMultiChain`,{redirectView:t});return}if(e.subtype===`injected`){y.setActiveConnector(e.connector),p.push(`ConnectingExternal`,{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}if(e.subtype===`announced`){if(e.connector.id===`walletConnect`){f.isMobile()?p.push(`AllWallets`):p.push(`ConnectingWalletConnect`,{redirectView:t});return}p.push(`ConnectingExternal`,{connector:e.connector,redirectView:t,wallet:e.connector.explorerWallet});return}p.push(`ConnectingExternal`,{connector:e.connector,redirectView:t})}renderWallet(e,t){let n=e.wallet,r=i.getWalletImage(n),a=h.hasAnyConnection(_.CONNECTOR_ID.WALLET_CONNECT),o=this.loadingTelegram,s=e.subtype===`recent`?`recent`:void 0,c=e.subtype===`recent`?`info`:void 0;return w`
      <w3m-list-wallet
        displayIndex=${t}
        imageSrc=${k(r)}
        name=${n.name??`Unknown`}
        @click=${()=>this.onClickWallet(e)}
        size="sm"
        data-testid=${`wallet-selector-${n.id}`}
        tabIdx=${k(this.tabIdx)}
        ?loading=${o}
        ?disabled=${a}
        rdnsId=${k(n.rdns||void 0)}
        walletRank=${k(n.order)}
        tagLabel=${k(s)}
        .tagVariant=${c}
      >
      </w3m-list-wallet>
    `}onClickWallet(e){let t=p.state.data?.redirectView,n=g.state.activeChain;if(e.subtype===`featured`){y.selectWalletConnector(e.wallet);return}if(e.subtype===`recent`){if(this.loadingTelegram)return;y.selectWalletConnector(e.wallet);return}if(e.subtype===`custom`){if(this.loadingTelegram)return;p.push(`ConnectingWalletConnect`,{wallet:e.wallet,redirectView:t});return}if(this.loadingTelegram)return;let r=n?y.getConnector({id:e.wallet.id,namespace:n}):void 0;r?p.push(`ConnectingExternal`,{connector:r,redirectView:t}):p.push(`ConnectingWalletConnect`,{wallet:e.wallet,redirectView:t})}};Bn.styles=Rn,zn([T({type:Number})],Bn.prototype,`tabIdx`,void 0),zn([j()],Bn.prototype,`explorerWallets`,void 0),zn([j()],Bn.prototype,`connections`,void 0),zn([j()],Bn.prototype,`connectorImages`,void 0),zn([j()],Bn.prototype,`loadingTelegram`,void 0),Bn=zn([O(`w3m-connector-list`)],Bn);var Vn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hn=class extends N{constructor(){super(...arguments),this.tabIdx=void 0}render(){return w`
      <wui-flex flexDirection="column" gap="2">
        <w3m-connector-list tabIdx=${k(this.tabIdx)}></w3m-connector-list>
        <w3m-all-wallets-widget tabIdx=${k(this.tabIdx)}></w3m-all-wallets-widget>
      </wui-flex>
    `}};Vn([T()],Hn.prototype,`tabIdx`,void 0),Hn=Vn([O(`w3m-wallet-login-list`)],Hn);var Un=D`
  :host {
    --connect-scroll--top-opacity: 0;
    --connect-scroll--bottom-opacity: 0;
    --connect-mask-image: none;
  }

  .connect {
    max-height: clamp(360px, 470px, 80vh);
    scrollbar-width: none;
    overflow-y: scroll;
    overflow-x: hidden;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
    mask-image: var(--connect-mask-image);
  }

  .guide {
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
  }

  .connect::-webkit-scrollbar {
    display: none;
  }

  .all-wallets {
    flex-flow: column;
  }

  .connect.disabled,
  .guide.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }

  wui-separator {
    margin: ${({spacing:e})=>e[3]} calc(${({spacing:e})=>e[3]} * -1);
    width: calc(100% + ${({spacing:e})=>e[3]} * 2);
  }
`,Z=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Wn=470,Q=class extends N{constructor(){super(),this.unsubscribe=[],this.connectors=y.state.connectors,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.features=o.state.features,this.remoteFeatures=o.state.remoteFeatures,this.enableWallets=o.state.enableWallets,this.noAdapters=g.state.noAdapters,this.walletGuide=`get-started`,this.checked=xe.state.isLegalCheckboxChecked,this.isEmailEnabled=this.remoteFeatures?.email&&!g.state.noAdapters,this.isSocialEnabled=this.remoteFeatures?.socials&&this.remoteFeatures.socials.length>0&&!g.state.noAdapters,this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors),this.unsubscribe.push(y.subscribeKey(`connectors`,e=>{this.connectors=e,this.authConnector=this.connectors.find(e=>e.type===`AUTH`),this.isAuthEnabled=this.checkIfAuthEnabled(this.connectors)}),o.subscribeKey(`features`,e=>{this.features=e}),o.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e,this.setEmailAndSocialEnableCheck(this.noAdapters,this.remoteFeatures)}),o.subscribeKey(`enableWallets`,e=>this.enableWallets=e),g.subscribeKey(`noAdapters`,e=>this.setEmailAndSocialEnableCheck(e,this.remoteFeatures)),xe.subscribeKey(`isLegalCheckboxChecked`,e=>this.checked=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),this.resizeObserver?.disconnect(),(this.shadowRoot?.querySelector(`.connect`))?.removeEventListener(`scroll`,this.handleConnectListScroll.bind(this))}firstUpdated(){let e=this.shadowRoot?.querySelector(`.connect`);e&&(requestAnimationFrame(this.handleConnectListScroll.bind(this)),e?.addEventListener(`scroll`,this.handleConnectListScroll.bind(this)),this.resizeObserver=new ResizeObserver(()=>{this.handleConnectListScroll()}),this.resizeObserver?.observe(e),this.handleConnectListScroll())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.state,n=o.state.features?.legalCheckbox,r=!!(e||t)&&!!n&&this.walletGuide===`get-started`&&!this.checked,i={connect:!0,disabled:r},a=o.state.enableWalletGuide,s=this.enableWallets,c=this.isSocialEnabled||this.authConnector,l=r?-1:void 0;return w`
      <wui-flex flexDirection="column">
        ${this.legalCheckboxTemplate()}
        <wui-flex
          data-testid="w3m-connect-scroll-view"
          flexDirection="column"
          .padding=${[`0`,`0`,`4`,`0`]}
          class=${Te(i)}
        >
          <wui-flex
            class="connect-methods"
            flexDirection="column"
            gap="2"
            .padding=${c&&s&&a&&this.walletGuide===`get-started`?[`0`,`3`,`0`,`3`]:[`0`,`3`,`3`,`3`]}
          >
            ${this.renderConnectMethod(l)}
          </wui-flex>
        </wui-flex>
        ${this.reownBrandingTemplate()}
      </wui-flex>
    `}reownBrandingTemplate(){return Ee.hasFooter()||!this.remoteFeatures?.reownBranding?null:w`<wui-ux-by-reown></wui-ux-by-reown>`}setEmailAndSocialEnableCheck(e,t){this.isEmailEnabled=t?.email&&!e,this.isSocialEnabled=t?.socials&&t.socials.length>0&&!e,this.remoteFeatures=t,this.noAdapters=e}checkIfAuthEnabled(e){let t=e.filter(e=>e.type===S.CONNECTOR_TYPE_AUTH).map(e=>e.chain);return _.AUTH_CONNECTOR_SUPPORTED_CHAINS.some(e=>t.includes(e))}renderConnectMethod(e){return w`${l.getConnectOrderMethod(this.features,this.connectors).map((t,n)=>{switch(t){case`email`:return w`${this.emailTemplate(e)} ${this.separatorTemplate(n,`email`)}`;case`social`:return w`${this.socialListTemplate(e)}
          ${this.separatorTemplate(n,`social`)}`;case`wallet`:return w`${this.walletListTemplate(e)}
          ${this.separatorTemplate(n,`wallet`)}`;default:return null}})}`}checkMethodEnabled(e){switch(e){case`wallet`:return this.enableWallets;case`social`:return this.isSocialEnabled&&this.isAuthEnabled;case`email`:return this.isEmailEnabled&&this.isAuthEnabled;default:return null}}checkIsThereNextMethod(e){let t=l.getConnectOrderMethod(this.features,this.connectors)[e+1];if(t)return this.checkMethodEnabled(t)?t:this.checkIsThereNextMethod(e+1)}separatorTemplate(e,t){let n=this.checkIsThereNextMethod(e),r=this.walletGuide===`explore`;switch(t){case`wallet`:return this.enableWallets&&n&&!r?w`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null;case`email`:{let e=n===`social`;return this.isAuthEnabled&&this.isEmailEnabled&&!e&&n?w`<wui-separator
              data-testid="w3m-email-login-or-separator"
              text="or"
            ></wui-separator>`:null}case`social`:{let e=n===`email`;return this.isAuthEnabled&&this.isSocialEnabled&&!e&&n?w`<wui-separator data-testid="wui-separator" text="or"></wui-separator>`:null}default:return null}}emailTemplate(e){return!this.isEmailEnabled||!this.isAuthEnabled?null:w`<w3m-email-login-widget tabIdx=${k(e)}></w3m-email-login-widget>`}socialListTemplate(e){return!this.isSocialEnabled||!this.isAuthEnabled?null:w`<w3m-social-login-widget
      walletGuide=${this.walletGuide}
      tabIdx=${k(e)}
    ></w3m-social-login-widget>`}walletListTemplate(e){let t=this.enableWallets,n=this.features?.emailShowWallets===!1,r=this.features?.collapseWallets,i=n||r;return!t||(f.isTelegram()&&(f.isSafari()||f.isIos())&&h.connectWalletConnect().catch(e=>({})),this.walletGuide===`explore`)?null:this.isAuthEnabled&&(this.isEmailEnabled||this.isSocialEnabled)&&i?w`<wui-list-button
        data-testid="w3m-collapse-wallets-button"
        tabIdx=${k(e)}
        @click=${this.onContinueWalletClick.bind(this)}
        text="Continue with a wallet"
        icon="wallet"
      ></wui-list-button>`:w`<w3m-wallet-login-list tabIdx=${k(e)}></w3m-wallet-login-list>`}legalCheckboxTemplate(){return this.walletGuide===`explore`?null:w`<w3m-legal-checkbox data-testid="w3m-legal-checkbox"></w3m-legal-checkbox>`}handleConnectListScroll(){let e=this.shadowRoot?.querySelector(`.connect`);e&&(e.scrollHeight>Wn?(e.style.setProperty(`--connect-mask-image`,`linear-gradient(
          to bottom,
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--top-opacity))) 0px,
          rgba(200, 200, 200, calc(1 - var(--connect-scroll--top-opacity))) 1px,
          black 100px,
          black calc(100% - 100px),
          rgba(155, 155, 155, calc(1 - var(--connect-scroll--bottom-opacity))) calc(100% - 1px),
          rgba(0, 0, 0, calc(1 - var(--connect-scroll--bottom-opacity))) 100%
        )`),e.style.setProperty(`--connect-scroll--top-opacity`,we.interpolate([0,50],[0,1],e.scrollTop).toString()),e.style.setProperty(`--connect-scroll--bottom-opacity`,we.interpolate([0,50],[0,1],e.scrollHeight-e.scrollTop-e.offsetHeight).toString())):(e.style.setProperty(`--connect-mask-image`,`none`),e.style.setProperty(`--connect-scroll--top-opacity`,`0`),e.style.setProperty(`--connect-scroll--bottom-opacity`,`0`)))}onContinueWalletClick(){p.push(`ConnectWallets`)}};Q.styles=Un,Z([j()],Q.prototype,`connectors`,void 0),Z([j()],Q.prototype,`authConnector`,void 0),Z([j()],Q.prototype,`features`,void 0),Z([j()],Q.prototype,`remoteFeatures`,void 0),Z([j()],Q.prototype,`enableWallets`,void 0),Z([j()],Q.prototype,`noAdapters`,void 0),Z([T()],Q.prototype,`walletGuide`,void 0),Z([j()],Q.prototype,`checked`,void 0),Z([j()],Q.prototype,`isEmailEnabled`,void 0),Z([j()],Q.prototype,`isSocialEnabled`,void 0),Z([j()],Q.prototype,`isAuthEnabled`,void 0),Q=Z([O(`w3m-connect-view`)],Q);var Gn=D`
  wui-flex {
    width: 100%;
    height: 52px;
    box-sizing: border-box;
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    border-radius: ${({borderRadius:e})=>e[5]};
    padding-left: ${({spacing:e})=>e[3]};
    padding-right: ${({spacing:e})=>e[3]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: ${({spacing:e})=>e[6]};
  }

  wui-text {
    color: ${({tokens:e})=>e.theme.textSecondary};
  }

  wui-icon {
    width: 12px;
    height: 12px;
  }
`,Kn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},qn=class extends N{constructor(){super(...arguments),this.disabled=!1,this.label=``,this.buttonLabel=``}render(){return w`
      <wui-flex justifyContent="space-between" alignItems="center">
        <wui-text variant="lg-regular" color="inherit">${this.label}</wui-text>
        <wui-button variant="accent-secondary" size="sm">
          ${this.buttonLabel}
          <wui-icon name="chevronRight" color="inherit" size="inherit" slot="iconRight"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};qn.styles=[A,E,Gn],Kn([T({type:Boolean})],qn.prototype,`disabled`,void 0),Kn([T()],qn.prototype,`label`,void 0),Kn([T()],qn.prototype,`buttonLabel`,void 0),qn=Kn([O(`wui-cta-button`)],qn);var Jn=D`
  :host {
    display: block;
    padding: 0 ${({spacing:e})=>e[5]} ${({spacing:e})=>e[5]};
  }
`,Yn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Xn=class extends N{constructor(){super(...arguments),this.wallet=void 0}render(){if(!this.wallet)return this.style.display=`none`,null;let{name:e,app_store:t,play_store:n,chrome_store:r,homepage:i}=this.wallet,a=f.isMobile(),o=f.isIos(),s=f.isAndroid(),c=[t,n,i,r].filter(Boolean).length>1,l=M.getTruncateString({string:e,charsStart:12,charsEnd:0,truncate:`end`});return c&&!a?w`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${()=>p.push(`Downloads`,{wallet:this.wallet})}
        ></wui-cta-button>
      `:!c&&i?w`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onHomePage.bind(this)}
        ></wui-cta-button>
      `:t&&o?w`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onAppStore.bind(this)}
        ></wui-cta-button>
      `:n&&s?w`
        <wui-cta-button
          label=${`Don't have ${l}?`}
          buttonLabel="Get"
          @click=${this.onPlayStore.bind(this)}
        ></wui-cta-button>
      `:(this.style.display=`none`,null)}onAppStore(){this.wallet?.app_store&&f.openHref(this.wallet.app_store,`_blank`)}onPlayStore(){this.wallet?.play_store&&f.openHref(this.wallet.play_store,`_blank`)}onHomePage(){this.wallet?.homepage&&f.openHref(this.wallet.homepage,`_blank`)}};Xn.styles=[Jn],Yn([T({type:Object})],Xn.prototype,`wallet`,void 0),Xn=Yn([O(`w3m-mobile-download-links`)],Xn);var Zn=D`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-wallet-image {
    width: 56px;
    height: 56px;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition-property: opacity, transform;
    transition-duration: ${({durations:e})=>e.lg};
    transition-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e[`ease-out-power-2`]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  w3m-mobile-download-links {
    padding: 0px;
    width: 100%;
  }
`,Qn=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},$=class extends N{constructor(){super(),this.wallet=p.state.data?.wallet,this.connector=p.state.data?.connector,this.timeout=void 0,this.secondaryBtnIcon=`refresh`,this.onConnect=void 0,this.onRender=void 0,this.onAutoConnect=void 0,this.isWalletConnect=!0,this.unsubscribe=[],this.imageSrc=i.getConnectorImage(this.connector)??i.getWalletImage(this.wallet),this.name=this.wallet?.name??this.connector?.name??`Wallet`,this.isRetrying=!1,this.uri=h.state.wcUri,this.error=h.state.wcError,this.ready=!1,this.showRetry=!1,this.label=void 0,this.secondaryBtnLabel=`Try again`,this.secondaryLabel=`Accept connection request in the wallet`,this.isLoading=!1,this.isMobile=!1,this.onRetry=void 0,this.unsubscribe.push(h.subscribeKey(`wcUri`,e=>{this.uri=e,this.isRetrying&&this.onRetry&&(this.isRetrying=!1,this.onConnect?.())}),h.subscribeKey(`wcError`,e=>this.error=e)),(f.isTelegram()||f.isSafari())&&f.isIos()&&h.state.wcUri&&this.onConnect?.()}firstUpdated(){this.onAutoConnect?.(),this.showRetry=!this.onAutoConnect}disconnectedCallback(){this.unsubscribe.forEach(e=>e()),h.setWcError(!1),clearTimeout(this.timeout)}render(){this.onRender?.(),this.onShowRetry();let e=this.error?`Connection can be declined if a previous request is still active`:this.secondaryLabel,t=``;return this.label?t=this.label:(t=`Continue in ${this.name}`,this.error&&(t=`Connection declined`)),w`
      <wui-flex
        data-error=${k(this.error)}
        data-retry=${this.showRetry}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="6"
      >
        <wui-flex gap="2" justifyContent="center" alignItems="center">
          <wui-wallet-image size="lg" imageSrc=${k(this.imageSrc)}></wui-wallet-image>

          ${this.error?null:this.loaderTemplate()}

          <wui-icon-box
            color="error"
            icon="close"
            size="sm"
            border
            borderColor="wui-color-bg-125"
          ></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="6"> <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`,`0`,`0`,`0`]}
        >
          <wui-text align="center" variant="lg-medium" color=${this.error?`error`:`primary`}>
            ${t}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary">${e}</wui-text>
        </wui-flex>

        ${this.secondaryBtnLabel?w`
                <wui-button
                  variant="neutral-secondary"
                  size="md"
                  ?disabled=${this.isRetrying||this.isLoading}
                  @click=${this.onTryAgain.bind(this)}
                  data-testid="w3m-connecting-widget-secondary-button"
                >
                  <wui-icon
                    color="inherit"
                    slot="iconLeft"
                    name=${this.secondaryBtnIcon}
                  ></wui-icon>
                  ${this.secondaryBtnLabel}
                </wui-button>
              `:null}
      </wui-flex>

      ${this.isWalletConnect?w`
              <wui-flex .padding=${[`0`,`5`,`5`,`5`]} justifyContent="center">
                <wui-link
                  @click=${this.onCopyUri}
                  variant="secondary"
                  icon="copy"
                  data-testid="wui-link-copy"
                >
                  Copy link
                </wui-link>
              </wui-flex>
            `:null}

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links></wui-flex>
      </wui-flex>
    `}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector(`wui-button`))?.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`}))}onTryAgain(){h.setWcError(!1),this.onRetry?(this.isRetrying=!0,this.onRetry?.()):this.onConnect?.()}loaderTemplate(){let e=ae.state.themeVariables[`--w3m-border-radius-master`];return w`<wui-loading-thumbnail radius=${(e?parseInt(e.replace(`px`,``),10):4)*9}></wui-loading-thumbnail>`}onCopyUri(){try{this.uri&&(f.copyToClopboard(this.uri),m.showSuccess(`Link copied`))}catch{m.showError(`Failed to copy`)}}};$.styles=Zn,Qn([j()],$.prototype,`isRetrying`,void 0),Qn([j()],$.prototype,`uri`,void 0),Qn([j()],$.prototype,`error`,void 0),Qn([j()],$.prototype,`ready`,void 0),Qn([j()],$.prototype,`showRetry`,void 0),Qn([j()],$.prototype,`label`,void 0),Qn([j()],$.prototype,`secondaryBtnLabel`,void 0),Qn([j()],$.prototype,`secondaryLabel`,void 0),Qn([j()],$.prototype,`isLoading`,void 0),Qn([T({type:Boolean})],$.prototype,`isMobile`,void 0),Qn([T()],$.prototype,`onRetry`,void 0);var $n=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},er=class extends ${constructor(){if(super(),this.externalViewUnsubscribe=[],this.connectionsByNamespace=h.getConnections(this.connector?.chain),this.hasMultipleConnections=this.connectionsByNamespace.length>0,this.remoteFeatures=o.state.remoteFeatures,this.currentActiveConnectorId=y.state.activeConnectorIds[this.connector?.chain],!this.connector)throw Error(`w3m-connecting-view: No connector provided`);let e=this.connector?.chain;this.isAlreadyConnected(this.connector)&&(this.secondaryBtnLabel=void 0,this.label=`This account is already linked, change your account in ${this.connector.name}`,this.secondaryLabel=`To link a new account, open ${this.connector.name} and switch to the account you want to link`),b.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.connector.name??`Unknown`,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}}),this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),this.isWalletConnect=!1,this.externalViewUnsubscribe.push(y.subscribeKey(`activeConnectorIds`,t=>{let n=t[e],r=this.remoteFeatures?.multiWallet,{redirectView:i}=p.state.data??{};n!==this.currentActiveConnectorId&&(this.hasMultipleConnections&&r?(p.replace(`ProfileWallets`),m.showSuccess(`New Wallet Added`)):i?p.replace(i):v.close())}),h.subscribeKey(`connections`,this.onConnectionsChange.bind(this)))}disconnectedCallback(){this.externalViewUnsubscribe.forEach(e=>e())}async onConnectProxy(){try{if(this.error=!1,this.connector){if(this.isAlreadyConnected(this.connector))return;(!(this.connector.id===_.CONNECTOR_ID.COINBASE_SDK||this.connector.id===_.CONNECTOR_ID.BASE_ACCOUNT)||!this.error)&&await h.connectExternal(this.connector,this.connector.chain)}}catch(e){e instanceof s&&e.originalName===ee.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?b.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):b.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),this.error=!0}}onConnectionsChange(e){if(this.connector?.chain&&e.get(this.connector.chain)&&this.isAlreadyConnected(this.connector)){let t=e.get(this.connector.chain)??[],n=this.remoteFeatures?.multiWallet;if(t.length===0)p.replace(`Connect`);else{let e=te.getConnectionsByConnectorId(this.connectionsByNamespace,this.connector.id).flatMap(e=>e.accounts),r=te.getConnectionsByConnectorId(t,this.connector.id).flatMap(e=>e.accounts);r.length===0?this.hasMultipleConnections&&n?(p.replace(`ProfileWallets`),m.showSuccess(`Wallet deleted`)):v.close():!e.every(e=>r.some(t=>Se.isLowerCaseMatch(e.address,t.address)))&&n&&p.replace(`ProfileWallets`)}}}isAlreadyConnected(e){return!!e&&this.connectionsByNamespace.some(t=>Se.isLowerCaseMatch(t.connectorId,e.id))}};er=$n([O(`w3m-connecting-external-view`)],er);var tr=C`
  wui-flex,
  wui-list-wallet {
    width: 100%;
  }
`,nr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},rr=class extends N{constructor(){super(),this.unsubscribe=[],this.activeConnector=y.state.activeConnector,this.unsubscribe.push(y.subscribeKey(`activeConnector`,e=>this.activeConnector=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`3`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-wallet-image
            size="lg"
            imageSrc=${k(i.getConnectorImage(this.activeConnector))}
          ></wui-wallet-image>
        </wui-flex>
        <wui-flex
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`0`,`3`,`0`,`3`]}
        >
          <wui-text variant="lg-medium" color="primary">
            Select Chain for ${this.activeConnector?.name}
          </wui-text>
          <wui-text align="center" variant="lg-regular" color="secondary"
            >Select which chain to connect to your multi chain wallet</wui-text
          >
        </wui-flex>
        <wui-flex
          flexGrow="1"
          flexDirection="column"
          alignItems="center"
          gap="2"
          .padding=${[`2`,`0`,`2`,`0`]}
        >
          ${this.networksTemplate()}
        </wui-flex>
      </wui-flex>
    `}networksTemplate(){return this.activeConnector?.connectors?.map((e,t)=>e.name?w`
            <w3m-list-wallet
              displayIndex=${t}
              imageSrc=${k(i.getChainImage(e.chain))}
              name=${_.CHAIN_NAME_MAP[e.chain]}
              @click=${()=>this.onConnector(e)}
              size="sm"
              data-testid="wui-list-chain-${e.chain}"
              rdnsId=${e.explorerWallet?.rdns}
            ></w3m-list-wallet>
          `:null)}onConnector(e){let t=this.activeConnector?.connectors?.find(t=>t.chain===e.chain),n=p.state.data?.redirectView;if(!t){m.showError(`Failed to find connector`);return}t.id===`walletConnect`?f.isMobile()?p.push(`AllWallets`):p.push(`ConnectingWalletConnect`,{redirectView:n}):p.push(`ConnectingExternal`,{connector:t,redirectView:n,wallet:this.activeConnector?.explorerWallet})}};rr.styles=tr,nr([j()],rr.prototype,`activeConnector`,void 0),rr=nr([O(`w3m-connecting-multi-chain-view`)],rr);var ir=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ar=class extends N{constructor(){super(...arguments),this.platformTabs=[],this.unsubscribe=[],this.platforms=[],this.onSelectPlatfrom=void 0}disconnectCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`
      <wui-flex justifyContent="center" .padding=${[`0`,`0`,`4`,`0`]}>
        <wui-tabs .tabs=${this.generateTabs()} .onTabChange=${this.onTabChange.bind(this)}></wui-tabs>
      </wui-flex>
    `}generateTabs(){let e=this.platforms.map(e=>e===`browser`?{label:`Browser`,icon:`extension`,platform:`browser`}:e===`mobile`?{label:`Mobile`,icon:`mobile`,platform:`mobile`}:e===`qrcode`?{label:`Mobile`,icon:`mobile`,platform:`qrcode`}:e===`web`?{label:`Webapp`,icon:`browser`,platform:`web`}:e===`desktop`?{label:`Desktop`,icon:`desktop`,platform:`desktop`}:{label:`Browser`,icon:`extension`,platform:`unsupported`});return this.platformTabs=e.map(({platform:e})=>e),e}onTabChange(e){let t=this.platformTabs[e];t&&this.onSelectPlatfrom?.(t)}};ir([T({type:Array})],ar.prototype,`platforms`,void 0),ir([T()],ar.prototype,`onSelectPlatfrom`,void 0),ar=ir([O(`w3m-connecting-header`)],ar);var or=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},sr=class extends ${constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-browser: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onAutoConnect=this.onConnectProxy.bind(this),b.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.state.view}})}async onConnectProxy(){try{this.error=!1;let{connectors:e}=y.state,t=e.find(e=>e.type===`ANNOUNCED`&&e.info?.rdns===this.wallet?.rdns||e.type===`INJECTED`||e.name===this.wallet?.name);if(t)await h.connectExternal(t,t.chain);else throw Error(`w3m-connecting-wc-browser: No connector found`);v.close()}catch(e){e instanceof s&&e.originalName===ee.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?b.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):b.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),this.error=!0}}};sr=or([O(`w3m-connecting-wc-browser`)],sr);var cr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},lr=class extends ${constructor(){if(super(),!this.wallet)throw Error(`w3m-connecting-wc-desktop: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.onRender=this.onRenderProxy.bind(this),b.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`desktop`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.state.view}})}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onConnectProxy(){if(this.wallet?.desktop_link&&this.uri)try{this.error=!1;let{desktop_link:e,name:t}=this.wallet,{redirect:n,href:r}=f.formatNativeUrl(e,this.uri);h.setWcLinking({name:t,href:r}),h.setRecentWallet(this.wallet),f.openHref(n,`_blank`)}catch{this.error=!0}}};lr=cr([O(`w3m-connecting-wc-desktop`)],lr);var ur=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},dr=class extends ${constructor(){if(super(),this.btnLabelTimeout=void 0,this.redirectDeeplink=void 0,this.redirectUniversalLink=void 0,this.target=void 0,this.preferUniversalLinks=o.state.experimental_preferUniversalLinks,this.isLoading=!0,this.onConnect=()=>{te.onConnectMobile(this.wallet)},!this.wallet)throw Error(`w3m-connecting-wc-mobile: No wallet provided`);this.secondaryBtnLabel=`Open`,this.secondaryLabel=d.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon=`externalLink`,this.onHandleURI(),this.unsubscribe.push(h.subscribeKey(`wcUri`,()=>{this.onHandleURI()})),b.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`mobile`,displayIndex:this.wallet?.display_index,walletRank:this.wallet.order,view:p.state.view}})}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.btnLabelTimeout)}onHandleURI(){this.isLoading=!this.uri,!this.ready&&this.uri&&(this.ready=!0,this.onConnect?.())}onTryAgain(){h.setWcError(!1),this.onConnect?.()}};ur([j()],dr.prototype,`redirectDeeplink`,void 0),ur([j()],dr.prototype,`redirectUniversalLink`,void 0),ur([j()],dr.prototype,`target`,void 0),ur([j()],dr.prototype,`preferUniversalLinks`,void 0),ur([j()],dr.prototype,`isLoading`,void 0),dr=ur([O(`w3m-connecting-wc-mobile`)],dr);var fr=D`
  wui-shimmer {
    width: 100%;
    aspect-ratio: 1 / 1;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-qr-code {
    opacity: 0;
    animation-duration: ${({durations:e})=>e.xl};
    animation-timing-function: ${({easings:e})=>e[`ease-out-power-2`]};
    animation-name: fade-in;
    animation-fill-mode: forwards;
  }

  @keyframes fade-in {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`,pr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},mr=class extends ${constructor(){super(),this.basic=!1}firstUpdated(){this.basic||b.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet?.name??`WalletConnect`,platform:`qrcode`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}})}disconnectedCallback(){super.disconnectedCallback(),this.unsubscribe?.forEach(e=>e())}render(){return this.onRenderProxy(),w`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`0`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-shimmer width="100%"> ${this.qrCodeTemplate()} </wui-shimmer>
        <wui-text variant="lg-medium" color="primary"> Scan this QR Code with your phone </wui-text>
        ${this.copyTemplate()}
      </wui-flex>
      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}onRenderProxy(){!this.ready&&this.uri&&(this.ready=!0)}qrCodeTemplate(){if(!this.uri||!this.ready)return null;let e=this.wallet?this.wallet.name:void 0;h.setWcLinking(void 0),h.setRecentWallet(this.wallet);let t=ae.state.themeVariables[`--apkt-qr-color`]??ae.state.themeVariables[`--w3m-qr-color`];return w` <wui-qr-code
      theme=${ae.state.themeMode}
      uri=${this.uri}
      imageSrc=${k(i.getWalletImage(this.wallet))}
      color=${k(t)}
      alt=${k(e)}
      data-testid="wui-qr-code"
    ></wui-qr-code>`}copyTemplate(){return w`<wui-button
      .disabled=${!this.uri||!this.ready}
      @click=${this.onCopyUri}
      variant="neutral-secondary"
      size="sm"
      data-testid="copy-wc2-uri"
    >
      Copy link
      <wui-icon size="sm" color="inherit" name="copy" slot="iconRight"></wui-icon>
    </wui-button>`}};mr.styles=fr,pr([T({type:Boolean})],mr.prototype,`basic`,void 0),mr=pr([O(`w3m-connecting-wc-qrcode`)],mr);var hr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gr=class extends N{constructor(){if(super(),this.wallet=p.state.data?.wallet,!this.wallet)throw Error(`w3m-connecting-wc-unsupported: No wallet provided`);b.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`browser`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}})}render(){return w`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`5`,`5`]}
        gap="5"
      >
        <wui-wallet-image
          size="lg"
          imageSrc=${k(i.getWalletImage(this.wallet))}
        ></wui-wallet-image>

        <wui-text variant="md-regular" color="primary">Not Detected</wui-text>
      </wui-flex>

      <w3m-mobile-download-links .wallet=${this.wallet}></w3m-mobile-download-links>
    `}};gr=hr([O(`w3m-connecting-wc-unsupported`)],gr);var _r=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},vr=class extends ${constructor(){if(super(),this.isLoading=!0,!this.wallet)throw Error(`w3m-connecting-wc-web: No wallet provided`);this.onConnect=this.onConnectProxy.bind(this),this.secondaryBtnLabel=`Open`,this.secondaryLabel=d.CONNECT_LABELS.MOBILE,this.secondaryBtnIcon=`externalLink`,this.updateLoadingState(),this.unsubscribe.push(h.subscribeKey(`wcUri`,()=>{this.updateLoadingState()})),b.sendEvent({type:`track`,event:`SELECT_WALLET`,properties:{name:this.wallet.name,platform:`web`,displayIndex:this.wallet?.display_index,walletRank:this.wallet?.order,view:p.state.view}})}updateLoadingState(){this.isLoading=!this.uri}onConnectProxy(){if(this.wallet?.webapp_link&&this.uri)try{this.error=!1;let{webapp_link:e,name:t}=this.wallet,{redirect:n,href:r}=f.formatUniversalUrl(e,this.uri);h.setWcLinking({name:t,href:r}),h.setRecentWallet(this.wallet),f.openHref(n,`_blank`)}catch{this.error=!0}}};_r([j()],vr.prototype,`isLoading`,void 0),vr=_r([O(`w3m-connecting-wc-web`)],vr);var yr=D`
  :host([data-mobile-fullscreen='true']) {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  :host([data-mobile-fullscreen='true']) wui-ux-by-reown {
    margin-top: auto;
  }
`,br=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xr=class extends N{constructor(){super(),this.wallet=p.state.data?.wallet,this.unsubscribe=[],this.platform=void 0,this.platforms=[],this.isSiwxEnabled=!!o.state.siwx,this.remoteFeatures=o.state.remoteFeatures,this.displayBranding=!0,this.basic=!1,this.determinePlatforms(),this.initializeConnection(),this.unsubscribe.push(o.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return o.state.enableMobileFullScreen&&this.setAttribute(`data-mobile-fullscreen`,`true`),w`
      ${this.headerTemplate()}
      <div class="platform-container">${this.platformTemplate()}</div>
      ${this.reownBrandingTemplate()}
    `}reownBrandingTemplate(){return!this.remoteFeatures?.reownBranding||!this.displayBranding?null:w`<wui-ux-by-reown></wui-ux-by-reown>`}async initializeConnection(e=!1){if(!(this.platform===`browser`||o.state.manualWCControl&&!e))try{let{wcPairingExpiry:t,status:n}=h.state,{redirectView:r}=p.state.data??{};if(e||o.state.enableEmbedded||f.isPairingExpired(t)||n===`connecting`){let e=h.getConnections(g.state.activeChain),t=this.remoteFeatures?.multiWallet,n=e.length>0;await h.connectWalletConnect({cache:`never`}),this.isSiwxEnabled||(n&&t?(p.replace(`ProfileWallets`),m.showSuccess(`New Wallet Added`)):r?p.replace(r):v.close())}}catch(e){if(e instanceof Error&&e.message.includes(`An error occurred when attempting to switch chain`)&&!o.state.enableNetworkSwitch&&g.state.activeChain){g.setActiveCaipNetwork(Ie.getUnsupportedNetwork(`${g.state.activeChain}:${g.state.activeCaipNetwork?.id}`)),g.showUnsupportedChainUI();return}e instanceof s&&e.originalName===ee.PROVIDER_RPC_ERROR_NAME.USER_REJECTED_REQUEST?b.sendEvent({type:`track`,event:`USER_REJECTED`,properties:{message:e.message}}):b.sendEvent({type:`track`,event:`CONNECT_ERROR`,properties:{message:e?.message??`Unknown`}}),h.setWcError(!0),m.showError(e.message??`Connection error`),h.resetWcConnection(),p.goBack()}}determinePlatforms(){if(!this.wallet){this.platforms.push(`qrcode`),this.platform=`qrcode`;return}if(this.platform)return;let{mobile_link:e,desktop_link:t,webapp_link:n,injected:r,rdns:i}=this.wallet,a=r?.map(({injected_id:e})=>e).filter(Boolean),s=[...i?[i]:a??[]],c=!o.state.isUniversalProvider&&s.length,l=e,d=n,ee=h.checkInstalled(s),p=c&&ee,te=t&&!f.isMobile();p&&!g.state.noAdapters&&this.platforms.push(`browser`),l&&this.platforms.push(f.isMobile()?`mobile`:`qrcode`),d&&this.platforms.push(`web`),te&&this.platforms.push(`desktop`);let ne=u.isCustomDeeplinkWallet(this.wallet.id,g.state.activeChain);!p&&c&&!g.state.noAdapters&&!ne&&this.platforms.push(`unsupported`),this.platform=this.platforms[0]}platformTemplate(){switch(this.platform){case`browser`:return w`<w3m-connecting-wc-browser></w3m-connecting-wc-browser>`;case`web`:return w`<w3m-connecting-wc-web></w3m-connecting-wc-web>`;case`desktop`:return w`
          <w3m-connecting-wc-desktop .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-desktop>
        `;case`mobile`:return w`
          <w3m-connecting-wc-mobile isMobile .onRetry=${()=>this.initializeConnection(!0)}>
          </w3m-connecting-wc-mobile>
        `;case`qrcode`:return w`<w3m-connecting-wc-qrcode ?basic=${this.basic}></w3m-connecting-wc-qrcode>`;default:return w`<w3m-connecting-wc-unsupported></w3m-connecting-wc-unsupported>`}}headerTemplate(){return this.platforms.length>1?w`
      <w3m-connecting-header
        .platforms=${this.platforms}
        .onSelectPlatfrom=${this.onSelectPlatform.bind(this)}
      >
      </w3m-connecting-header>
    `:null}async onSelectPlatform(e){let t=this.shadowRoot?.querySelector(`div`);t&&(await t.animate([{opacity:1},{opacity:0}],{duration:200,fill:`forwards`,easing:`ease`}).finished,this.platform=e,t.animate([{opacity:0},{opacity:1}],{duration:200,fill:`forwards`,easing:`ease`}))}};xr.styles=yr,br([j()],xr.prototype,`platform`,void 0),br([j()],xr.prototype,`platforms`,void 0),br([j()],xr.prototype,`isSiwxEnabled`,void 0),br([j()],xr.prototype,`remoteFeatures`,void 0),br([T({type:Boolean})],xr.prototype,`displayBranding`,void 0),br([T({type:Boolean})],xr.prototype,`basic`,void 0),xr=br([O(`w3m-connecting-wc-view`)],xr);var Sr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Cr=class extends N{constructor(){super(),this.unsubscribe=[],this.isMobile=f.isMobile(),this.remoteFeatures=o.state.remoteFeatures,this.unsubscribe.push(o.subscribeKey(`remoteFeatures`,e=>this.remoteFeatures=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){if(this.isMobile){let{featured:e,recommended:t}=n.state,{customWallets:r}=o.state,i=a.getRecentWallets();return w`<wui-flex flexDirection="column" gap="2" .margin=${[`1`,`3`,`3`,`3`]}>
        ${e.length||t.length||r?.length||i.length?w`<w3m-connector-list></w3m-connector-list>`:null}
        <w3m-all-wallets-widget></w3m-all-wallets-widget>
      </wui-flex>`}return w`<wui-flex flexDirection="column" .padding=${[`0`,`0`,`4`,`0`]}>
        <w3m-connecting-wc-view ?basic=${!0} .displayBranding=${!1}></w3m-connecting-wc-view>
        <wui-flex flexDirection="column" .padding=${[`0`,`3`,`0`,`3`]}>
          <w3m-all-wallets-widget></w3m-all-wallets-widget>
        </wui-flex>
      </wui-flex>
      ${this.reownBrandingTemplate()} `}reownBrandingTemplate(){return this.remoteFeatures?.reownBranding?w` <wui-flex flexDirection="column" .padding=${[`1`,`0`,`1`,`0`]}>
      <wui-ux-by-reown></wui-ux-by-reown>
    </wui-flex>`:null}};Sr([j()],Cr.prototype,`isMobile`,void 0),Sr([j()],Cr.prototype,`remoteFeatures`,void 0),Cr=Sr([O(`w3m-connecting-wc-basic-view`)],Cr);var wr=C`
  .continue-button-container {
    width: 100%;
  }
`,Tr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Er=class extends N{constructor(){super(...arguments),this.loading=!1}render(){return w`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        gap="6"
        .padding=${[`0`,`0`,`4`,`0`]}
      >
        ${this.onboardingTemplate()} ${this.buttonsTemplate()}
        <wui-link
          @click=${()=>{f.openHref(oe.URLS.FAQ,`_blank`)}}
        >
          Learn more about names
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-link>
      </wui-flex>
    `}onboardingTemplate(){return w` <wui-flex
      flexDirection="column"
      gap="6"
      alignItems="center"
      .padding=${[`0`,`6`,`0`,`6`]}
    >
      <wui-flex gap="3" alignItems="center" justifyContent="center">
        <wui-icon-box icon="id" size="xl" iconSize="xxl" color="default"></wui-icon-box>
      </wui-flex>
      <wui-flex flexDirection="column" alignItems="center" gap="3">
        <wui-text align="center" variant="lg-medium" color="primary">
          Choose your account name
        </wui-text>
        <wui-text align="center" variant="md-regular" color="primary">
          Finally say goodbye to 0x addresses, name your account to make it easier to exchange
          assets
        </wui-text>
      </wui-flex>
    </wui-flex>`}buttonsTemplate(){return w`<wui-flex
      .padding=${[`0`,`8`,`0`,`8`]}
      gap="3"
      class="continue-button-container"
    >
      <wui-button
        fullWidth
        .loading=${this.loading}
        size="lg"
        borderRadius="xs"
        @click=${this.handleContinue.bind(this)}
        >Choose name
      </wui-button>
    </wui-flex>`}handleContinue(){p.push(`RegisterAccountName`),b.sendEvent({type:`track`,event:`OPEN_ENS_FLOW`,properties:{isSmartAccount:ne(g.state.activeChain)===t.ACCOUNT_TYPES.SMART_ACCOUNT}})}};Er.styles=wr,Tr([j()],Er.prototype,`loading`,void 0),Er=Tr([O(`w3m-choose-account-name-view`)],Er);var Dr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Or=class extends N{constructor(){super(...arguments),this.wallet=p.state.data?.wallet}render(){if(!this.wallet)throw Error(`w3m-downloads-view`);return w`
      <wui-flex gap="2" flexDirection="column" .padding=${[`3`,`3`,`4`,`3`]}>
        ${this.chromeTemplate()} ${this.iosTemplate()} ${this.androidTemplate()}
        ${this.homepageTemplate()}
      </wui-flex>
    `}chromeTemplate(){return this.wallet?.chrome_store?w`<wui-list-item
      variant="icon"
      icon="chromeStore"
      iconVariant="square"
      @click=${this.onChromeStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Chrome Extension</wui-text>
    </wui-list-item>`:null}iosTemplate(){return this.wallet?.app_store?w`<wui-list-item
      variant="icon"
      icon="appStore"
      iconVariant="square"
      @click=${this.onAppStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">iOS App</wui-text>
    </wui-list-item>`:null}androidTemplate(){return this.wallet?.play_store?w`<wui-list-item
      variant="icon"
      icon="playStore"
      iconVariant="square"
      @click=${this.onPlayStore.bind(this)}
      chevron
    >
      <wui-text variant="md-medium" color="primary">Android App</wui-text>
    </wui-list-item>`:null}homepageTemplate(){return this.wallet?.homepage?w`
      <wui-list-item
        variant="icon"
        icon="browser"
        iconVariant="square-blue"
        @click=${this.onHomePage.bind(this)}
        chevron
      >
        <wui-text variant="md-medium" color="primary">Website</wui-text>
      </wui-list-item>
    `:null}openStore(e){e.href&&this.wallet&&(b.sendEvent({type:`track`,event:`GET_WALLET`,properties:{name:this.wallet.name,walletRank:this.wallet.order,explorerId:this.wallet.id,type:e.type}}),f.openHref(e.href,`_blank`))}onChromeStore(){this.wallet?.chrome_store&&this.openStore({href:this.wallet.chrome_store,type:`chrome_store`})}onAppStore(){this.wallet?.app_store&&this.openStore({href:this.wallet.app_store,type:`app_store`})}onPlayStore(){this.wallet?.play_store&&this.openStore({href:this.wallet.play_store,type:`play_store`})}onHomePage(){this.wallet?.homepage&&this.openStore({href:this.wallet.homepage,type:`homepage`})}};Or=Dr([O(`w3m-downloads-view`)],Or);var kr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Ar=`https://walletguide.walletconnect.network`,jr=class extends N{render(){return w`
      <wui-flex flexDirection="column" .padding=${[`0`,`3`,`3`,`3`]} gap="2">
        ${this.recommendedWalletsTemplate()}
        <w3m-list-wallet
          name="Explore all"
          showAllWallets
          walletIcon="allWallets"
          icon="externalLink"
          size="sm"
          @click=${()=>{f.openHref(`https://walletguide.walletconnect.network/`,`_blank`)}}
        ></w3m-list-wallet>
      </wui-flex>
    `}recommendedWalletsTemplate(){let{recommended:e,featured:t}=n.state,{customWallets:r}=o.state;return[...t,...r??[],...e].slice(0,4).map((e,t)=>w`
        <w3m-list-wallet
          displayIndex=${t}
          name=${e.name??`Unknown`}
          tagVariant="accent"
          size="sm"
          imageSrc=${k(i.getWalletImage(e))}
          @click=${()=>{this.onWalletClick(e)}}
        ></w3m-list-wallet>
      `)}onWalletClick(e){b.sendEvent({type:`track`,event:`GET_WALLET`,properties:{name:e.name,walletRank:void 0,explorerId:e.id,type:`homepage`}}),f.openHref(e.homepage??Ar,`_blank`)}};jr=kr([O(`w3m-get-wallet-view`)],jr);var Mr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Nr=class extends N{constructor(){super(...arguments),this.data=[]}render(){return w`
      <wui-flex flexDirection="column" alignItems="center" gap="4">
        ${this.data.map(e=>w`
            <wui-flex flexDirection="column" alignItems="center" gap="5">
              <wui-flex flexDirection="row" justifyContent="center" gap="1">
                ${e.images.map(e=>w`<wui-visual size="sm" name=${e}></wui-visual>`)}
              </wui-flex>
            </wui-flex>
            <wui-flex flexDirection="column" alignItems="center" gap="1">
              <wui-text variant="md-regular" color="primary" align="center">${e.title}</wui-text>
              <wui-text variant="sm-regular" color="secondary" align="center"
                >${e.text}</wui-text
              >
            </wui-flex>
          `)}
      </wui-flex>
    `}};Mr([T({type:Array})],Nr.prototype,`data`,void 0),Nr=Mr([O(`w3m-help-widget`)],Nr);var Pr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Fr=[{images:[`login`,`profile`,`lock`],title:`One login for all of web3`,text:`Log in to any app by connecting your wallet. Say goodbye to countless passwords!`},{images:[`defi`,`nft`,`eth`],title:`A home for your digital assets`,text:`A wallet lets you store, send and receive digital assets like cryptocurrencies and NFTs.`},{images:[`browser`,`noun`,`dao`],title:`Your gateway to a new web`,text:`With your wallet, you can explore and interact with DeFi, NFTs, DAOs, and much more.`}],Ir=class extends N{render(){return w`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`5`,`5`,`5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${Fr}></w3m-help-widget>
        <wui-button variant="accent-primary" size="md" @click=${this.onGetWallet.bind(this)}>
          <wui-icon color="inherit" slot="iconLeft" name="wallet"></wui-icon>
          Get a wallet
        </wui-button>
      </wui-flex>
    `}onGetWallet(){b.sendEvent({type:`track`,event:`CLICK_GET_WALLET_HELP`}),p.push(`GetWallet`)}};Ir=Pr([O(`w3m-what-is-a-wallet-view`)],Ir);var Lr=D`
  wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
    transition: opacity ${({durations:e})=>e.lg}
      ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity;
  }
  wui-flex::-webkit-scrollbar {
    display: none;
  }
  wui-flex.disabled {
    opacity: 0.3;
    pointer-events: none;
    user-select: none;
  }
`,Rr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},zr=class extends N{constructor(){super(),this.unsubscribe=[],this.checked=xe.state.isLegalCheckboxChecked,this.unsubscribe.push(xe.subscribeKey(`isLegalCheckboxChecked`,e=>{this.checked=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let{termsConditionsUrl:e,privacyPolicyUrl:t}=o.state,n=o.state.features?.legalCheckbox,r=!!(e||t)&&!!n,i=r&&!this.checked,a=i?-1:void 0;return w`
      <w3m-legal-checkbox></w3m-legal-checkbox>
      <wui-flex
        flexDirection="column"
        .padding=${r?[`0`,`3`,`3`,`3`]:`3`}
        gap="2"
        class=${k(i?`disabled`:void 0)}
      >
        <w3m-wallet-login-list tabIdx=${k(a)}></w3m-wallet-login-list>
      </wui-flex>
    `}};zr.styles=Lr,Rr([j()],zr.prototype,`checked`,void 0),zr=Rr([O(`w3m-connect-wallets-view`)],zr);var Br=D`
  :host {
    display: block;
    width: 120px;
    height: 120px;
  }

  svg {
    width: 120px;
    height: 120px;
    fill: none;
    stroke: transparent;
    stroke-linecap: round;
  }

  use {
    stroke: ${e=>e.colors.accent100};
    stroke-width: 2px;
    stroke-dasharray: 54, 118;
    stroke-dashoffset: 172;
    animation: dash 1s linear infinite;
  }

  @keyframes dash {
    to {
      stroke-dashoffset: 0px;
    }
  }
`,Vr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Hr=class extends N{render(){return w`
      <svg viewBox="0 0 54 59">
        <path
          id="wui-loader-path"
          d="M17.22 5.295c3.877-2.277 5.737-3.363 7.72-3.726a11.44 11.44 0 0 1 4.12 0c1.983.363 3.844 1.45 7.72 3.726l6.065 3.562c3.876 2.276 5.731 3.372 7.032 4.938a11.896 11.896 0 0 1 2.06 3.63c.683 1.928.688 4.11.688 8.663v7.124c0 4.553-.005 6.735-.688 8.664a11.896 11.896 0 0 1-2.06 3.63c-1.3 1.565-3.156 2.66-7.032 4.937l-6.065 3.563c-3.877 2.276-5.737 3.362-7.72 3.725a11.46 11.46 0 0 1-4.12 0c-1.983-.363-3.844-1.449-7.72-3.726l-6.065-3.562c-3.876-2.276-5.731-3.372-7.032-4.938a11.885 11.885 0 0 1-2.06-3.63c-.682-1.928-.688-4.11-.688-8.663v-7.124c0-4.553.006-6.735.688-8.664a11.885 11.885 0 0 1 2.06-3.63c1.3-1.565 3.156-2.66 7.032-4.937l6.065-3.562Z"
        />
        <use xlink:href="#wui-loader-path"></use>
      </svg>
    `}};Hr.styles=[A,Br],Hr=Vr([O(`wui-loading-hexagon`)],Hr);var Ur=C`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-hexagon {
    position: absolute;
  }

  wui-icon-box {
    position: absolute;
    right: 4px;
    bottom: 0;
    opacity: 0;
    transform: scale(0.5);
    z-index: 1;
  }

  wui-button {
    display: none;
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  }

  wui-button[data-retry='true'] {
    display: block;
    opacity: 1;
  }
`,Wr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Gr=class extends N{constructor(){super(),this.network=p.state.data?.network,this.unsubscribe=[],this.showRetry=!1,this.error=!1}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}firstUpdated(){this.onSwitchNetwork()}render(){if(!this.network)throw Error(`w3m-network-switch-view: No network provided`);this.onShowRetry();let e=this.getLabel(),t=this.getSubLabel();return w`
      <wui-flex
        data-error=${this.error}
        flexDirection="column"
        alignItems="center"
        .padding=${[`10`,`5`,`10`,`5`]}
        gap="7"
      >
        <wui-flex justifyContent="center" alignItems="center">
          <wui-network-image
            size="lg"
            imageSrc=${k(i.getNetworkImage(this.network))}
          ></wui-network-image>

          ${this.error?null:w`<wui-loading-hexagon></wui-loading-hexagon>`}

          <wui-icon-box color="error" icon="close" size="sm"></wui-icon-box>
        </wui-flex>

        <wui-flex flexDirection="column" alignItems="center" gap="2">
          <wui-text align="center" variant="h6-regular" color="primary">${e}</wui-text>
          <wui-text align="center" variant="md-regular" color="secondary">${t}</wui-text>
        </wui-flex>

        <wui-button
          data-retry=${this.showRetry}
          variant="accent-primary"
          size="md"
          .disabled=${!this.error}
          @click=${this.onSwitchNetwork.bind(this)}
        >
          <wui-icon color="inherit" slot="iconLeft" name="refresh"></wui-icon>
          Try again
        </wui-button>
      </wui-flex>
    `}getSubLabel(){let e=y.getConnectorId(g.state.activeChain);return y.getAuthConnector()&&e===_.CONNECTOR_ID.AUTH?``:this.error?`Switch can be declined if chain is not supported by a wallet or previous request is still active`:`Accept connection request in your wallet`}getLabel(){let e=y.getConnectorId(g.state.activeChain);return y.getAuthConnector()&&e===_.CONNECTOR_ID.AUTH?`Switching to ${this.network?.name??`Unknown`} network...`:this.error?`Switch declined`:`Approve in wallet`}onShowRetry(){this.error&&!this.showRetry&&(this.showRetry=!0,(this.shadowRoot?.querySelector(`wui-button`))?.animate([{opacity:0},{opacity:1}],{fill:`forwards`,easing:`ease`}))}async onSwitchNetwork(){try{this.error=!1,g.state.activeChain!==this.network?.chainNamespace&&g.setIsSwitchingNamespace(!0),this.network&&(await g.switchActiveNetwork(this.network),await ve.isAuthenticated()&&p.goBack())}catch{this.error=!0}}};Gr.styles=Ur,Wr([j()],Gr.prototype,`showRetry`,void 0),Wr([j()],Gr.prototype,`error`,void 0),Gr=Wr([O(`w3m-network-switch-view`)],Gr);var Kr=D`
  :host {
    width: 100%;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${({spacing:e})=>e[3]};
    width: 100%;
    background-color: transparent;
    border-radius: ${({borderRadius:e})=>e[4]};
  }

  wui-text {
    text-transform: capitalize;
  }

  @media (hover: hover) {
    button:hover:enabled {
      background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
    }
  }

  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,qr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Jr=class extends N{constructor(){super(...arguments),this.imageSrc=void 0,this.name=`Ethereum`,this.disabled=!1}render(){return w`
      <button ?disabled=${this.disabled} tabindex=${k(this.tabIdx)}>
        <wui-flex gap="2" alignItems="center">
          ${this.imageTemplate()}
          <wui-text variant="lg-regular" color="primary">${this.name}</wui-text>
        </wui-flex>
        <wui-icon name="chevronRight" size="lg" color="default"></wui-icon>
      </button>
    `}imageTemplate(){return this.imageSrc?w`<wui-image ?boxed=${!0} src=${this.imageSrc}></wui-image>`:w`<wui-image
      ?boxed=${!0}
      icon="networkPlaceholder"
      size="lg"
      iconColor="default"
    ></wui-image>`}};Jr.styles=[A,E,Kr],qr([T()],Jr.prototype,`imageSrc`,void 0),qr([T()],Jr.prototype,`name`,void 0),qr([T()],Jr.prototype,`tabIdx`,void 0),qr([T({type:Boolean})],Jr.prototype,`disabled`,void 0),Jr=qr([O(`wui-list-network`)],Jr);var Yr=C`
  .container {
    max-height: 360px;
    overflow: auto;
  }

  .container::-webkit-scrollbar {
    display: none;
  }
`,Xr=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},Zr=class extends N{constructor(){super(),this.unsubscribe=[],this.network=g.state.activeCaipNetwork,this.requestedCaipNetworks=g.getCaipNetworks(),this.search=``,this.onDebouncedSearch=f.debounce(e=>{this.search=e},100),this.unsubscribe.push(r.subscribeNetworkImages(()=>this.requestUpdate()),g.subscribeKey(`activeCaipNetwork`,e=>this.network=e),g.subscribe(()=>{this.requestedCaipNetworks=g.getAllRequestedCaipNetworks()}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`
      ${this.templateSearchInput()}
      <wui-flex
        class="container"
        .padding=${[`0`,`3`,`3`,`3`]}
        flexDirection="column"
        gap="2"
      >
        ${this.networksTemplate()}
      </wui-flex>
    `}templateSearchInput(){return w`
      <wui-flex gap="2" .padding=${[`0`,`3`,`3`,`3`]}>
        <wui-input-text
          @inputChange=${this.onInputChange.bind(this)}
          class="network-search-input"
          size="md"
          placeholder="Search network"
          icon="search"
        ></wui-input-text>
      </wui-flex>
    `}onInputChange(e){this.onDebouncedSearch(e.detail)}networksTemplate(){let e=g.getAllApprovedCaipNetworkIds(),t=f.sortRequestedNetworks(e,this.requestedCaipNetworks);return this.search?this.filteredNetworks=t?.filter(e=>e?.name?.toLowerCase().includes(this.search.toLowerCase())):this.filteredNetworks=t,this.filteredNetworks?.map(e=>w`
        <wui-list-network
          .selected=${this.network?.id===e.id}
          imageSrc=${k(i.getNetworkImage(e))}
          type="network"
          name=${e.name??e.id}
          @click=${()=>this.onSwitchNetwork(e)}
          .disabled=${g.isCaipNetworkDisabled(e)}
          data-testid=${`w3m-network-switch-${e.name??e.id}`}
        ></wui-list-network>
      `)}onSwitchNetwork(e){re.onSwitchNetwork({network:e})}};Zr.styles=Yr,Xr([j()],Zr.prototype,`network`,void 0),Xr([j()],Zr.prototype,`requestedCaipNetworks`,void 0),Xr([j()],Zr.prototype,`filteredNetworks`,void 0),Xr([j()],Zr.prototype,`search`,void 0),Zr=Xr([O(`w3m-networks-view`)],Zr);var Qr=D`
  @keyframes shake {
    0% {
      transform: translateX(0);
    }
    25% {
      transform: translateX(3px);
    }
    50% {
      transform: translateX(-3px);
    }
    75% {
      transform: translateX(3px);
    }
    100% {
      transform: translateX(0);
    }
  }

  wui-flex:first-child:not(:only-child) {
    position: relative;
  }

  wui-loading-thumbnail {
    position: absolute;
  }

  wui-visual {
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    position: relative;
    overflow: hidden;
  }

  wui-visual::after {
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    position: absolute;
    inset: 0;
    border-radius: calc(
      ${({borderRadius:e})=>e[1]} * 9 - ${({borderRadius:e})=>e[3]}
    );
    box-shadow: inset 0 0 0 1px ${({tokens:e})=>e.core.glass010};
  }

  wui-icon-box {
    position: absolute;
    right: calc(${({spacing:e})=>e[1]} * -1);
    bottom: calc(${({spacing:e})=>e[1]} * -1);
    opacity: 0;
    transform: scale(0.5);
    transition:
      opacity ${({durations:e})=>e.lg} ${({easings:e})=>e[`ease-out-power-2`]},
      transform ${({durations:e})=>e.lg}
        ${({easings:e})=>e[`ease-out-power-2`]};
    will-change: opacity, transform;
  }

  wui-text[align='center'] {
    width: 100%;
    padding: 0px ${({spacing:e})=>e[4]};
  }

  [data-error='true'] wui-icon-box {
    opacity: 1;
    transform: scale(1);
  }

  [data-error='true'] > wui-flex:first-child {
    animation: shake 250ms ${({easings:e})=>e[`ease-out-power-2`]} both;
  }

  [data-retry='false'] wui-link {
    display: none;
  }

  [data-retry='true'] wui-link {
    display: block;
    opacity: 1;
  }

  wui-link {
    padding: ${({spacing:e})=>e[`01`]} ${({spacing:e})=>e[2]};
  }

  .capitalize {
    text-transform: capitalize;
  }
`,$r=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ei={eip155:`eth`,solana:`solana`,bip122:`bitcoin`,polkadot:void 0},ti=class extends N{constructor(){super(...arguments),this.unsubscribe=[],this.switchToChain=p.state.data?.switchToChain,this.caipNetwork=p.state.data?.network,this.activeChain=g.state.activeChain}firstUpdated(){this.unsubscribe.push(g.subscribeKey(`activeChain`,e=>this.activeChain=e))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){let e=this.switchToChain?_.CHAIN_NAME_MAP[this.switchToChain]:`supported`;if(!this.switchToChain)return null;let t=_.CHAIN_NAME_MAP[this.switchToChain];return w`
      <wui-flex
        flexDirection="column"
        alignItems="center"
        .padding=${[`4`,`2`,`2`,`2`]}
        gap="4"
      >
        <wui-flex justifyContent="center" flexDirection="column" alignItems="center" gap="2">
          <wui-visual
            size="md"
            name=${k(ei[this.switchToChain])}
          ></wui-visual>
          <wui-flex gap="2" flexDirection="column" alignItems="center">
            <wui-text
              data-testid=${`w3m-switch-active-chain-to-${t}`}
              variant="lg-regular"
              color="primary"
              align="center"
              >Switch to <span class="capitalize">${t}</span></wui-text
            >
            <wui-text variant="md-regular" color="secondary" align="center">
              Connected wallet doesn't support connecting to ${e} chain. You
              need to connect with a different wallet.
            </wui-text>
          </wui-flex>
          <wui-button
            data-testid="w3m-switch-active-chain-button"
            size="md"
            @click=${this.switchActiveChain.bind(this)}
            >Switch</wui-button
          >
        </wui-flex>
      </wui-flex>
    `}async switchActiveChain(){this.switchToChain&&(g.setIsSwitchingNamespace(!0),y.setFilterByNamespace(this.switchToChain),this.caipNetwork?await g.switchActiveNetwork(this.caipNetwork):g.setActiveNamespace(this.switchToChain),p.reset(`Connect`))}};ti.styles=Qr,$r([T()],ti.prototype,`activeChain`,void 0),ti=$r([O(`w3m-switch-active-chain-view`)],ti);var ni=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ri=[{images:[`network`,`layers`,`system`],title:`The system’s nuts and bolts`,text:`A network is what brings the blockchain to life, as this technical infrastructure allows apps to access the ledger and smart contract services.`},{images:[`noun`,`defiAlt`,`dao`],title:`Designed for different uses`,text:`Each network is designed differently, and may therefore suit certain apps and experiences.`}],ii=class extends N{render(){return w`
      <wui-flex
        flexDirection="column"
        .padding=${[`6`,`5`,`5`,`5`]}
        alignItems="center"
        gap="5"
      >
        <w3m-help-widget .data=${ri}></w3m-help-widget>
        <wui-button
          variant="accent-primary"
          size="md"
          @click=${()=>{f.openHref(`https://ethereum.org/en/developers/docs/networks/`,`_blank`)}}
        >
          Learn more
          <wui-icon color="inherit" slot="iconRight" name="externalLink"></wui-icon>
        </wui-button>
      </wui-flex>
    `}};ii=ni([O(`w3m-what-is-a-network-view`)],ii);var ai=C`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,oi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},si=class extends N{constructor(){super(),this.swapUnsupportedChain=p.state.data?.swapUnsupportedChain,this.unsubscribe=[],this.disconnecting=!1,this.remoteFeatures=o.state.remoteFeatures,this.unsubscribe.push(r.subscribeNetworkImages(()=>this.requestUpdate()),o.subscribeKey(`remoteFeatures`,e=>{this.remoteFeatures=e}))}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w`
      <wui-flex class="container" flexDirection="column" gap="0">
        <wui-flex
          class="container"
          flexDirection="column"
          .padding=${[`3`,`5`,`2`,`5`]}
          alignItems="center"
          gap="5"
        >
          ${this.descriptionTemplate()}
        </wui-flex>

        <wui-flex flexDirection="column" padding="3" gap="2"> ${this.networksTemplate()} </wui-flex>

        <wui-separator text="or"></wui-separator>
        <wui-flex flexDirection="column" padding="3" gap="2">
          <wui-list-item
            variant="icon"
            iconVariant="overlay"
            icon="signOut"
            ?chevron=${!1}
            .loading=${this.disconnecting}
            @click=${this.onDisconnect.bind(this)}
            data-testid="disconnect-button"
          >
            <wui-text variant="md-medium" color="secondary">Disconnect</wui-text>
          </wui-list-item>
        </wui-flex>
      </wui-flex>
    `}descriptionTemplate(){return this.swapUnsupportedChain?w`
        <wui-text variant="sm-regular" color="secondary" align="center">
          The swap feature doesn’t support your current network. Switch to an available option to
          continue.
        </wui-text>
      `:w`
      <wui-text variant="sm-regular" color="secondary" align="center">
        This app doesn’t support your current network. Switch to an available option to continue.
      </wui-text>
    `}networksTemplate(){let e=g.getAllRequestedCaipNetworks(),t=g.getAllApprovedCaipNetworkIds(),n=f.sortRequestedNetworks(t,e);return(this.swapUnsupportedChain?n.filter(e=>d.SWAP_SUPPORTED_NETWORKS.includes(e.caipNetworkId)):n).map(e=>w`
        <wui-list-network
          imageSrc=${k(i.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          @click=${()=>this.onSwitchNetwork(e)}
        >
        </wui-list-network>
      `)}async onDisconnect(){try{this.disconnecting=!0;let e=g.state.activeChain,t=h.getConnections(e).length>0,n=e&&y.state.activeConnectorIds[e],r=this.remoteFeatures?.multiWallet;await h.disconnect(r?{id:n,namespace:e}:{}),t&&r&&(p.push(`ProfileWallets`),m.showSuccess(`Wallet deleted`))}catch{b.sendEvent({type:`track`,event:`DISCONNECT_ERROR`,properties:{message:`Failed to disconnect`}}),m.showError(`Failed to disconnect`)}finally{this.disconnecting=!1}}async onSwitchNetwork(e){let t=g.getActiveCaipAddress(),n=g.getAllApprovedCaipNetworkIds();g.getNetworkProp(`supportsAllNetworks`,e.chainNamespace);let r=p.state.data;t?n?.includes(e.caipNetworkId)?await g.switchActiveNetwork(e):p.push(`SwitchNetwork`,{...r,network:e}):t||(g.setActiveCaipNetwork(e),p.push(`Connect`))}};si.styles=ai,oi([j()],si.prototype,`disconnecting`,void 0),oi([j()],si.prototype,`remoteFeatures`,void 0),si=oi([O(`w3m-unsupported-chain-view`)],si);var ci=D`
  wui-flex {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: ${({spacing:e})=>e[2]};
    border-radius: ${({borderRadius:e})=>e[4]};
    padding: ${({spacing:e})=>e[3]};
  }

  /* -- Types --------------------------------------------------------- */
  wui-flex[data-type='info'] {
    color: ${({tokens:e})=>e.theme.textSecondary};
    background-color: ${({tokens:e})=>e.theme.foregroundPrimary};
  }

  wui-flex[data-type='success'] {
    color: ${({tokens:e})=>e.core.textSuccess};
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] {
    color: ${({tokens:e})=>e.core.textError};
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] {
    color: ${({tokens:e})=>e.core.textWarning};
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-flex[data-type='info'] wui-icon-box {
    background-color: ${({tokens:e})=>e.theme.foregroundSecondary};
  }

  wui-flex[data-type='success'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundSuccess};
  }

  wui-flex[data-type='error'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundError};
  }

  wui-flex[data-type='warning'] wui-icon-box {
    background-color: ${({tokens:e})=>e.core.backgroundWarning};
  }

  wui-text {
    flex: 1;
  }
`,li=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},ui=class extends N{constructor(){super(...arguments),this.icon=`externalLink`,this.text=``,this.type=`info`}render(){return w`
      <wui-flex alignItems="center" data-type=${this.type}>
        <wui-icon-box size="sm" color="inherit" icon=${this.icon}></wui-icon-box>
        <wui-text variant="md-regular" color="inherit">${this.text}</wui-text>
      </wui-flex>
    `}};ui.styles=[A,E,ci],li([T()],ui.prototype,`icon`,void 0),li([T()],ui.prototype,`text`,void 0),li([T()],ui.prototype,`type`,void 0),ui=li([O(`wui-banner`)],ui);var di=C`
  :host > wui-flex {
    max-height: clamp(360px, 540px, 80vh);
    overflow: scroll;
    scrollbar-width: none;
  }

  :host > wui-flex::-webkit-scrollbar {
    display: none;
  }
`,fi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},pi=class extends N{constructor(){super(),this.unsubscribe=[]}disconnectedCallback(){this.unsubscribe.forEach(e=>e())}render(){return w` <wui-flex flexDirection="column" .padding=${[`2`,`3`,`3`,`3`]} gap="2">
      <wui-banner
        icon="warningCircle"
        text="You can only receive assets on these networks"
      ></wui-banner>
      ${this.networkTemplate()}
    </wui-flex>`}networkTemplate(){let e=g.getAllRequestedCaipNetworks(),n=g.getAllApprovedCaipNetworkIds(),r=g.state.activeCaipNetwork,a=g.checkIfSmartAccountEnabled(),o=f.sortRequestedNetworks(n,e);if(a&&ne(r?.chainNamespace)===t.ACCOUNT_TYPES.SMART_ACCOUNT){if(!r)return null;o=[r]}return o.filter(e=>e.chainNamespace===r?.chainNamespace).map(e=>w`
        <wui-list-network
          imageSrc=${k(i.getNetworkImage(e))}
          name=${e.name??`Unknown`}
          ?transparent=${!0}
        >
        </wui-list-network>
      `)}};pi.styles=di,pi=fi([O(`w3m-wallet-compatible-networks-view`)],pi);var mi=D`
  :host {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 56px;
    height: 56px;
    box-shadow: 0 0 0 8px ${({tokens:e})=>e.theme.borderPrimary};
    border-radius: ${({borderRadius:e})=>e[4]};
    overflow: hidden;
  }

  :host([data-border-radius-full='true']) {
    border-radius: 50px;
  }

  wui-icon {
    width: 32px;
    height: 32px;
  }
`,hi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},gi=class extends N{render(){return this.dataset.borderRadiusFull=this.borderRadiusFull?`true`:`false`,w`${this.templateVisual()}`}templateVisual(){return this.imageSrc?w`<wui-image src=${this.imageSrc} alt=${this.alt??``}></wui-image>`:w`<wui-icon
      data-parent-size="md"
      size="inherit"
      color="inherit"
      name="wallet"
    ></wui-icon>`}};gi.styles=[A,mi],hi([T()],gi.prototype,`imageSrc`,void 0),hi([T()],gi.prototype,`alt`,void 0),hi([T({type:Boolean})],gi.prototype,`borderRadiusFull`,void 0),gi=hi([O(`wui-visual-thumbnail`)],gi);var _i=D`
  :host {
    display: flex;
    justify-content: center;
    gap: ${({spacing:e})=>e[4]};
  }

  wui-visual-thumbnail:nth-child(1) {
    z-index: 1;
  }
`,vi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},yi=class extends N{constructor(){super(...arguments),this.dappImageUrl=o.state.metadata?.icons,this.walletImageUrl=g.getAccountData()?.connectedWalletInfo?.icon}firstUpdated(){let e=this.shadowRoot?.querySelectorAll(`wui-visual-thumbnail`);e?.[0]&&this.createAnimation(e[0],`translate(18px)`),e?.[1]&&this.createAnimation(e[1],`translate(-18px)`)}render(){return w`
      <wui-visual-thumbnail
        ?borderRadiusFull=${!0}
        .imageSrc=${this.dappImageUrl?.[0]}
      ></wui-visual-thumbnail>
      <wui-visual-thumbnail .imageSrc=${this.walletImageUrl}></wui-visual-thumbnail>
    `}createAnimation(e,t){e.animate([{transform:`translateX(0px)`},{transform:t}],{duration:1600,easing:`cubic-bezier(0.56, 0, 0.48, 1)`,direction:`alternate`,iterations:1/0})}};yi.styles=_i,yi=vi([O(`w3m-siwx-sign-message-thumbnails`)],yi);var bi=function(e,t,n,r){var i=arguments.length,a=i<3?t:r===null?r=Object.getOwnPropertyDescriptor(t,n):r,o;if(typeof Reflect==`object`&&typeof Reflect.decorate==`function`)a=Reflect.decorate(e,t,n,r);else for(var s=e.length-1;s>=0;s--)(o=e[s])&&(a=(i<3?o(a):i>3?o(t,n,a):o(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},xi=class extends N{constructor(){super(...arguments),this.dappName=o.state.metadata?.name,this.isCancelling=!1,this.isSigning=!1}render(){return w`
      <wui-flex justifyContent="center" .padding=${[`8`,`0`,`6`,`0`]}>
        <w3m-siwx-sign-message-thumbnails></w3m-siwx-sign-message-thumbnails>
      </wui-flex>
      <wui-flex .padding=${[`0`,`20`,`5`,`20`]} gap="3" justifyContent="space-between">
        <wui-text variant="lg-medium" align="center" color="primary"
          >${this.dappName??`Dapp`} needs to connect to your wallet</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[`0`,`10`,`4`,`10`]} gap="3" justifyContent="space-between">
        <wui-text variant="md-regular" align="center" color="secondary"
          >Sign this message to prove you own this wallet and proceed. Canceling will disconnect
          you.</wui-text
        >
      </wui-flex>
      <wui-flex .padding=${[`4`,`5`,`5`,`5`]} gap="3" justifyContent="space-between">
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-secondary"
          ?loading=${this.isCancelling}
          @click=${this.onCancel.bind(this)}
          data-testid="w3m-connecting-siwe-cancel"
        >
          ${this.isCancelling?`Cancelling...`:`Cancel`}
        </wui-button>
        <wui-button
          size="lg"
          borderRadius="xs"
          fullWidth
          variant="neutral-primary"
          @click=${this.onSign.bind(this)}
          ?loading=${this.isSigning}
          data-testid="w3m-connecting-siwe-sign"
        >
          ${this.isSigning?`Signing...`:`Sign`}
        </wui-button>
      </wui-flex>
    `}async onSign(){this.isSigning=!0;try{await ve.requestSignMessage()}catch(e){if(e instanceof Error&&e.message.includes(`OTP is required`)){m.showError({message:`Something went wrong. We need to verify your account again.`}),p.replace(`DataCapture`);return}throw e}finally{this.isSigning=!1}}async onCancel(){this.isCancelling=!0,await ve.cancelSignMessage().finally(()=>this.isCancelling=!1)}};bi([j()],xi.prototype,`isCancelling`,void 0),bi([j()],xi.prototype,`isSigning`,void 0),xi=bi([O(`w3m-siwx-sign-message-view`)],xi);var Si=e({AppKitAccountButton:()=>Be,AppKitButton:()=>We,AppKitConnectButton:()=>Ze,AppKitNetworkButton:()=>at,W3mAccountButton:()=>ze,W3mAccountSettingsView:()=>ft,W3mAccountView:()=>Vt,W3mAllWalletsView:()=>xn,W3mButton:()=>Ue,W3mChooseAccountNameView:()=>Er,W3mConnectButton:()=>Xe,W3mConnectView:()=>Q,W3mConnectWalletsView:()=>zr,W3mConnectingExternalView:()=>er,W3mConnectingMultiChainView:()=>rr,W3mConnectingWcBasicView:()=>Cr,W3mConnectingWcView:()=>xr,W3mDownloadsView:()=>Or,W3mFooter:()=>_e,W3mFundWalletView:()=>Xt,W3mGetWalletView:()=>jr,W3mNetworkButton:()=>it,W3mNetworkSwitchView:()=>Gr,W3mNetworksView:()=>Zr,W3mProfileWalletsView:()=>q,W3mRouter:()=>ye,W3mSIWXSignMessageView:()=>xi,W3mSwitchActiveChainView:()=>ti,W3mUnsupportedChainView:()=>si,W3mWalletCompatibleNetworksView:()=>pi,W3mWhatIsANetworkView:()=>ii,W3mWhatIsAWalletView:()=>Ir});export{Be as a,We as i,at as n,Ie as o,Ze as r,Me as s,Si as t};