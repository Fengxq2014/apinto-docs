import{b as o,o as r,c as u,a as n,d as a,w as t,F as l,f as e,e as p}from"./app.ec6ae4af.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";const i={},b=e('<h1 id="\u63D2\u4EF6\u7CFB\u7EDF" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u7CFB\u7EDF" aria-hidden="true">#</a> \u63D2\u4EF6\u7CFB\u7EDF</h1><p>\u63D2\u4EF6\u7CFB\u7EDF\u7684\u63D2\u4EF6\u80FD\u591F\u5728<strong>\u8DEF\u7531</strong>\u3001<strong>\u670D\u52A1</strong>\u3001<strong>\u8D1F\u8F7D</strong>\u3001<strong>\u5168\u5C40</strong>\u4E2D\u914D\u7F6E\u3002</p><p>\u82E5\u540C\u4E00\u4E2A\u63D2\u4EF6\u5728\u591A\u4E2A\u6A21\u5757\u8FDB\u884C\u4E86\u914D\u7F6E\uFF0C\u5219\u914D\u7F6E\u4F18\u5148\u7EA7\u4E3A\uFF1A\u8DEF\u7531&gt;\u670D\u52A1&gt;\u8D1F\u8F7D&gt;\u5168\u5C40\uFF0C\u4E14\u63D2\u4EF6\u53EA\u751F\u6548\u4E00\u6B21\u3002 <code>\u5373\u8DEF\u7531\u548C\u670D\u52A1\u5747\u914D\u7F6E\u540C\u4E00\u4E2A\u63D2\u4EF6\uFF0C\u6700\u7EC8\u4F1A\u4EE5\u8DEF\u7531\u7684\u914D\u7F6E\u4E3A\u51C6</code></p><p>\u63D2\u4EF6\u6267\u884C\u6D41\u7A0B\u89C1\u4E0B\u56FE\uFF1A</p><p>\u8BF7\u6C42\u4ECE\u4E0A\u5230\u4E0B\u4F9D\u6B21\u6267\u884C\u5404\u9636\u6BB5\u7684filter\u65B9\u6CD5\uFF0C\u5F85\u8BF7\u6C42\u8F6C\u53D1\u540E\uFF08\u5373context -&gt; send\u6267\u884C\u5B8C\u540E\uFF09\uFF0C\u518D\u4ECE\u4E0B\u5230\u4E0A\u4F9D\u6B21\u8FD4\u56DE\uFF0C\u5728\u6BCF\u4E2Afilter\u9636\u6BB5\u5747\u53EF\u505A\u63D2\u4EF6\u7684\u76F8\u5173\u64CD\u4F5C\u3002</p><p><strong>fileter</strong>\uFF1A\u62E6\u622A\u5668\uFF0C\u5373\u63D2\u4EF6\u7684\u6267\u884C\u8FC7\u7A0B\uFF0C\u6BCF\u4E2A\u63D2\u4EF6\u5747\u9700\u8981\u5B9E\u73B0DoFilter\u63A5\u53E3\uFF0C\u8BE5\u63A5\u53E3\u4F5C\u4E3A\u63D2\u4EF6\u6267\u884C\u7684\u5165\u53E3\uFF0C\u5728\u5185\u53EF\u5B9A\u4E49\u8BE5\u63D2\u4EF6\u7684\u524D\u7F6E\u6216\u8005\u540E\u7F6E\u64CD\u4F5C\u3002</p><p><code>\u524D\u7F6E\u64CD\u4F5C\u5373\u4E3A\u8BF7\u6C42\u8F6C\u53D1\u524D\u6267\u884C\u7684\u64CD\u4F5C\uFF0C\u540E\u7F6E\u64CD\u4F5C\u5373\u4E3A\u8F6C\u53D1\u83B7\u5F97\u54CD\u5E94\u540E\u7684\u64CD\u4F5C</code></p><p><img src="http://data.eolinker.com/course/mZ1VnxG018c7fa398b81feb0c7c32d75049bd9113c99cb4.png" alt=""></p><p>\u6B64\u5916\uFF0C\u6BCF\u4E2A\u63D2\u4EF6\u5747\u6709\u7C7B\u578B<code>type</code>\uFF0C\u8FD9\u51B3\u5B9A\u4E86\u5176<strong>\u6267\u884C\u9636\u6BB5</strong>\u3002\u53EF\u9009\u7C7B\u578B\u6709[<code>router</code>\u3001<code>service</code>\u3001<code>upstream</code>]\u3002\u6BD4\u5982\u67D0\u4E2A\u63D2\u4EF6\u7684\u7C7B\u578B\u4E3Arouter\uFF0C\u90A3\u5B83\u5C06\u4F1A\u5728router\u9636\u6BB5\u6267\u884C\u3002</p><h3 id="\u63D2\u4EF6\u5217\u8868" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u5217\u8868" aria-hidden="true">#</a> \u63D2\u4EF6\u5217\u8868</h3>',10),q=n("thead",null,[n("tr",null,[n("th",null,"\u63D2\u4EF6\u540D\u79F0"),n("th",null,"\u5B57\u6BB5\u540D"),n("th",null,"\u8BF4\u660E")])],-1),d=p("\u989D\u5916\u53C2\u6570"),m=n("td",null,"extra_params",-1),k=n("td",null,"\u8F6C\u53D1\u65F6\u5728\u8BF7\u6C42\u4E2D\u643A\u5E26\u81EA\u5B9A\u4E49\u53C2\u6570",-1),g=p("\u53C2\u6570\u6620\u5C04"),h=n("td",null,"params_transformer",-1),_=n("td",null,"\u8F6C\u53D1\u65F6\u5C06\u8BF7\u6C42\u4E2D\u7684\u539F\u53C2\u6570\u6620\u5C04\u6210\u81EA\u5B9A\u4E49\u53C2\u6570",-1),y=p("\u8F6C\u53D1\u91CD\u5199"),v=n("td",null,"proxy_rewrite",-1),f=n("td",null,"\u8F6C\u53D1\u65F6\u5BF9\u8BF7\u6C42\u7684host\u3001scheme\u3001uri\u8FDB\u884C\u91CD\u5199\uFF0C\u540C\u65F6\u80FD\u5728\u8BF7\u6C42\u5934\u52A0\u5165\u81EA\u5B9A\u4E49\u53C2\u6570",-1),x=p("IP\u9ED1\u767D\u540D\u5355"),T=n("td",null,"ip_restriction",-1),C=n("td",null,"\u5BF9\u8BBF\u95EE\u7684\u5BA2\u6237\u7AEFip\u8FDB\u884C\u9ED1\u767D\u9650\u5236",-1),j=p("\u6D41\u91CF\u63A7\u5236"),P=n("td",null,"rate_limiting",-1),O=n("td",null,"\u63A7\u5236\u8BF7\u6C42\u5728\u5355\u4F4D\u65F6\u95F4\u5185\u7684\u8BBF\u95EE\u6B21\u6570",-1),S=p("\u9274\u6743"),w=n("td",null,"auth",-1),X=n("td",null,"\u5BF9\u8BF7\u6C42\u8FDB\u884C\u6743\u9650\u6821\u9A8C",-1),F=p("\u54CD\u5E94\u91CD\u5199"),A=n("td",null,"response_rewrite",-1),I=n("td",null,"\u7528\u4E8E\u91CD\u5199\u7F51\u5173\u8FD4\u56DE\u7684\u72B6\u6001\u7801\u3001\u54CD\u5E94\u4F53\u3001\u5934\u90E8",-1),H=p("API\u7194\u65AD"),E=n("td",null,"circuit_breaker",-1),V=n("td",null,"\u7528\u4E8E\u505C\u6B62\u5BF9\u4E0D\u53EF\u7528API\u7684\u8F6C\u53D1",-1),z=p("\u8DE8\u57DFCORS"),G=n("td",null,"cors",-1),L=n("td",null,"\u8BBE\u7F6E\u8DE8\u57DF\u7684\u5934\u90E8\u5B57\u6BB5\uFF0C\u5B9E\u73B0\u8DE8\u57DF\u529F\u80FD",-1),N=p("gzip\u538B\u7F29"),B=n("td",null,"gzip",-1),D=n("td",null,"\u5C06\u54CD\u5E94\u8FDB\u884Cgzip\u538B\u7F29\uFF0C\u4EE5\u63D0\u9AD8\u4F20\u8F93\u6548\u7387",-1),R=p("access_log"),U=n("td",null,"access_log",-1),M=n("td",null,"\u8BB0\u5F55\u5230\u8FBE\u7F51\u5173\u7684http\u8BF7\u6C42\u7684\u8BBF\u95EE\u65E5\u5FD7",-1),Z=e(`<h3 id="\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u63D2\u4EF6\u914D\u7F6E</h3><p>\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u58F0\u660E\u5728\u7A0B\u5E8F\u8FD0\u884C\u8FC7\u7A0B\u4E2D\u52A0\u8F7D\u63D2\u4EF6\u7684\u540D\u79F0\u3001\u987A\u5E8F\u3001\u63D2\u4EF6\u7684\u542F\u7528\u72B6\u6001\u4EE5\u53CA\u63D2\u4EF6\u7684\u4F5C\u7528\u8303\u56F4\u3002</p><h4 id="\u914D\u7F6E\u53C2\u6570\u8BF4\u660E" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u53C2\u6570\u8BF4\u660E" aria-hidden="true">#</a> \u914D\u7F6E\u53C2\u6570\u8BF4\u660E</h4><p><img src="http://data.eolinker.com/course/FqMCEIi0975ec1b9abd17a91ce4540eaf718a2d5e302ea3.png" alt=""></p><p>\u5728\u914D\u7F6E\u8FC7\u7A0B\u4E2D\uFF0C<code>id</code>\u4E3A\u63D2\u4EF6\u7684\u9A71\u52A8ID\uFF0C\u53EF\u91CD\u590D\u4F7F\u7528\uFF0C<code>name</code>\u4E3A\u63D2\u4EF6\u7684\u6267\u884C\u522B\u540D\uFF0C\u5168\u5C40\u552F\u4E00\uFF0C\u5728router\u3001service\u3001upstream\u914D\u7F6E\u65F6\u586B\u5199\u3002\u5982\u989D\u5916\u53C2\u6570\u63D2\u4EF6ID\u4E3A<code>eolinker.com:apinto:extra_params</code>\uFF0C\u914D\u7F6E\u7684<code>name</code>\u4E3A<code>extra_params1</code>\uFF0C\u5728router\u3001service\u3001upstream\u9636\u6BB5\u65F6\u4F7F\u7528\u8BE5\u63D2\u4EF6\u65F6\u586B\u5199\u7684\u540D\u79F0\u4E3A<code>extra_params1</code>\uFF0C\u5219\u53EF\u8FDB\u884C\u8C03\u7528.</p><p>\u5168\u5C40\u63D2\u4EF6\u6709\u4E09\u4E2A<strong>\u72B6\u6001</strong>\uFF1A</p><ul><li><p><strong>disable</strong></p><p>\u7981\u7528\u72B6\u6001\uFF1A\u8868\u793A\u63D2\u4EF6\u5904\u4E8E\u7981\u7528\u72B6\u6001\uFF0C\u5373\u4FBF\u67D0\u4E2A\u8DEF\u7531|\u670D\u52A1|\u8D1F\u8F7D\u914D\u7F6E\u4E86\u8BE5\u63D2\u4EF6\u4E5F\u4E0D\u4F1A\u751F\u6548\u3002</p></li><li><p><strong>enable</strong></p><p>\u542F\u7528\u72B6\u6001\uFF1A\u8868\u793A\u542F\u7528\u63D2\u4EF6\u3002\u67D0\u4E2A\u8DEF\u7531|\u670D\u52A1|\u8D1F\u8F7D\u914D\u7F6E\u4E86\u63D2\u4EF6\uFF0C\u9700\u8981\u5728\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u4E2D\u5C06\u5BF9\u5E94\u63D2\u4EF6\u72B6\u6001\u914D\u7F6E\u4E3Aenable\u624D\u80FD\u751F\u6548\u3002</p><p><strong>\u5907\u6CE8</strong>\uFF1A\u8BE5\u72B6\u6001\u4E0B\u7684\u63D2\u4EF6\u4E0D\u9700\u8981\u5728\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u4E2D\u586B\u5199\u5177\u4F53\u914D\u7F6E\u3002</p></li><li><p><strong>global</strong></p><p>\u5168\u5C40\u63D2\u4EF6\u72B6\u6001\uFF1A\u8868\u793A\u542F\u7528\u63D2\u4EF6\uFF0C\u540C\u65F6\u4F5C\u4E3A\u5168\u5C40\u63D2\u4EF6\u3002</p><p>\u4F8B\u5982\uFF1A\u914D\u7F6E\u4E86\u4E00\u4E2A\u5168\u5C40\u63D2\u4EF6\uFF0C\u5728\u67D0\u4E2A\u8F6C\u53D1\u6D41\u7A0B\u4E2D\u7684\u8DEF\u7531|\u670D\u52A1|\u8D1F\u8F7D\u4E2D\u5747\u6CA1\u6709\u8BE5\u63D2\u4EF6\u914D\u7F6E\uFF0C\u6B64\u65F6\u8FD9\u4E2A\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u5C31\u4F1A\u751F\u6548\u3002</p><p><strong>\u5907\u6CE8</strong>\uFF1A\u8BE5\u72B6\u6001\u4E0B\u7684\u63D2\u4EF6\u9700\u8981\u5728\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u586B\u5199\u5177\u4F53\u914D\u7F6E\u3002</p></li></ul><h4 id="\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u793A\u4F8B</h4><p>\u4EE5\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u4E3A\u4F8B</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;plugins&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;eolinker.com:apinto:extra_params&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;extra_params_one&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;upstream&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token string">&quot;global&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;config&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
                <span class="token property">&quot;params&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span>
                    <span class="token punctuation">{</span>
                        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;position&quot;</span><span class="token operator">:</span><span class="token string">&quot;query&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;value&quot;</span><span class="token operator">:</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
                        <span class="token property">&quot;conflict&quot;</span><span class="token operator">:</span><span class="token string">&quot;Convert&quot;</span>
                    <span class="token punctuation">}</span>
                <span class="token punctuation">]</span><span class="token punctuation">,</span>
                <span class="token property">&quot;error_type&quot;</span><span class="token operator">:</span><span class="token string">&quot;text&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
            <span class="token property">&quot;id&quot;</span><span class="token operator">:</span><span class="token string">&quot;eolinker.com:apinto:extra_params&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;extra_params_two&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span><span class="token string">&quot;service&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;status&quot;</span><span class="token operator">:</span><span class="token string">&quot;enable&quot;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><strong>\u914D\u7F6E\u8BF4\u660E</strong>\uFF1A\u5168\u5C40\u914D\u7F6E\u4E86\u4E24\u4E2A\u63D2\u4EF6\uFF0C\u8FD9\u4E24\u4E2A\u63D2\u4EF6\u5747\u4E3A\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u3002</p><p>\u7B2C\u4E00\u4E2A\u63D2\u4EF6\u522B\u540D\u4E3A<code>extra_params_one</code>, \u662F\u4E2A\u5168\u5C40\u63D2\u4EF6\uFF0C\u5F53\u8F6C\u53D1\u8DEF\u5F84\u4E0A\u7684router|service|upstream\u5747\u6CA1\u6709\u914D\u7F6E\u8BE5\u63D2\u4EF6\u65F6\u624D\u751F\u6548\u3002\u63D2\u4EF6\u7C7B\u578B<code>type</code>\u4E3Aupstream\uFF0C\u8868\u793A\u8BE5\u63D2\u4EF6\u5728upstream\u9636\u6BB5\u6267\u884C\u3002</p><p>\u7B2C\u4E8C\u4E2A\u63D2\u4EF6\u522B\u540D\u4E3A<code>extra_params_two</code>\uFF0C\u5168\u5C40\u542F\u7528\u4E86\uFF0C\u60F3\u8981\u4F7F\u7528\u8FD9\u4E2A\u63D2\u4EF6\uFF0C\u9700\u8981\u5728\u8F6C\u53D1\u8DEF\u5F84\u4E0A\u7684router|service|upstream\u914D\u7F6E\u5177\u4F53\u53C2\u6570\u3002\u63D2\u4EF6\u7C7B\u578B<code>type</code>\u4E3Aservice\uFF0C\u8868\u793A\u8BE5\u63D2\u4EF6\u5728service\u9636\u6BB5\u6267\u884C\u3002</p><h4 id="\u63D2\u4EF6\u6267\u884C\u987A\u5E8F" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u6267\u884C\u987A\u5E8F" aria-hidden="true">#</a> \u63D2\u4EF6\u6267\u884C\u987A\u5E8F</h4><h3 id="open-api\u914D\u7F6E\u63D2\u4EF6\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#open-api\u914D\u7F6E\u63D2\u4EF6\u793A\u4F8B" aria-hidden="true">#</a> Open API\u914D\u7F6E\u63D2\u4EF6\u793A\u4F8B</h3><p><strong>\u83B7\u53D6\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3</strong>\uFF1AGET /api/setting/plugin</p><p><strong>\u8BBE\u7F6E\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u63A5\u53E3</strong>\uFF1APOST /api/setting/plugin \u6BCF\u6B21\u8BBE\u7F6E\u5747\u4E3A<strong>\u5168\u91CF\u66F4\u65B0</strong></p><h4 id="\u4EE5\u4F7F\u7528\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u4E3A\u4F8B-\u4E3A\u670D\u52A1\u914D\u7F6E\u63D2\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4F7F\u7528\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u4E3A\u4F8B-\u4E3A\u670D\u52A1\u914D\u7F6E\u63D2\u4EF6\u3002" aria-hidden="true">#</a> \u4EE5\u4F7F\u7528\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u4E3A\u4F8B\uFF0C\u4E3A\u670D\u52A1\u914D\u7F6E\u63D2\u4EF6\u3002</h4><p><strong>\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token string">&#39;http://127.0.0.1:9400/api/setting/plugin&#39;</span> <span class="token punctuation">\\</span>
-H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token punctuation">\\</span>
-d <span class="token string">&#39;{
	&quot;plugins&quot;:[{
		&quot;id&quot;:&quot;eolinker.com:apinto:extra_params&quot;,
		&quot;name&quot;:&quot;my_extra_params&quot;,
		&quot;type&quot;:&quot;service&quot;,
		&quot;status&quot;:&quot;enable&quot;
	}]
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p><strong>\u914D\u7F6E\u670D\u52A1</strong></p><p>\u670D\u52A1\u4E2D\u914D\u7F6E\u989D\u5916\u53C2\u6570\u63D2\u4EF6\uFF0Cplugins\u53C2\u6570\u4E2D\u6BCF\u4E2A\u63D2\u4EF6key\u9700\u8981\u4F7F\u7528\u5168\u5C40\u63D2\u4EF6\u4E2D\u5BF9\u5E94\u63D2\u4EF6\u7684name\u3002</p><p>\u6BD4\u5982\u4E0B\u9762\u670D\u52A1\u63D2\u4EF6\u914D\u7F6E\u91CC\u7684<code>my_extra_params</code>\u4F7F\u7528\u7684\u662F\u4E0A\u9762\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u91CC\u7684name\u3002</p><p><strong>\u5907\u6CE8</strong>\uFF1A\u533F\u540D\u670D\u52A1\u914D\u7F6E\u7684\u662F\u80FD\u591F\u8FD4\u56DE\u8F6C\u53D1\u8BF7\u6C42\u4FE1\u606F\u63A5\u53E3\u6240\u5728\u7684\u540E\u7AEF\u5730\u5740\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token string">&#39;http://127.0.0.1:9400/api/service&#39;</span> <span class="token punctuation">\\</span>
-H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token punctuation">\\</span>
-d <span class="token string">&#39;{
    &quot;name&quot;: &quot;param&quot;,
    &quot;driver&quot;: &quot;http&quot;,
    &quot;timeout&quot;: 3000,
    &quot;retry&quot;: 3,
    &quot;scheme&quot;: &quot;http&quot;,
    &quot;anonymous&quot;: {
        &quot;type&quot;: &quot;round-robin&quot;,
        &quot;config&quot;: &quot;demo-apinto.eolink.com:8280&quot;
    },
    &quot;plugins&quot;: {
        &quot;my_extra_params&quot;:{
            &quot;disable&quot;: false,
            &quot;config&quot;:{
                &quot;params&quot;: [{
                &quot;name&quot;: &quot;demo_param&quot;,
                &quot;position&quot;: &quot;query&quot;,
                &quot;value&quot;: &quot;1&quot;,
                &quot;conflict&quot;: &quot;Convert&quot;
                }],
            &quot;error_type&quot;: &quot;text&quot;
            }
        }
    }
}&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><strong>\u914D\u7F6E\u8DEF\u7531</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token string">&#39;http://127.0.0.1:9400/api/router&#39;</span> <span class="token punctuation">\\</span>
-H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token punctuation">\\</span>
-d <span class="token string">&#39;{
	&quot;name&quot;:&quot;params&quot;,
	&quot;driver&quot;:&quot;http&quot;,
	&quot;desc&quot;:&quot;http&quot;,
	&quot;listen&quot;:8080,
	&quot;rules&quot;:[{
		&quot;location&quot;:&quot;/&quot;
	}],
	&quot;target&quot;:&quot;param@service&quot;
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X GET <span class="token string">&#39;http://127.0.0.1:8080&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u8FD4\u56DE\u7ED3\u679C</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;Accept&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;Content-Length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;curl/7.61.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;X-Forwarded-For&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1,127.0.0.1&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:8080&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;demo_param&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/?demo_param=1&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53EF\u4EE5\u770B\u5230\u4E0A\u9762\u7684\u8FD4\u56DE\u793A\u4F8B\u91CCdemo_param\u7684\u503C\u4E3A1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h4 id="\u4EE5\u4F7F\u7528\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u4E3A\u4F8B-\u914D\u7F6E\u5168\u5C40\u63D2\u4EF6\u3002" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u4F7F\u7528\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u4E3A\u4F8B-\u914D\u7F6E\u5168\u5C40\u63D2\u4EF6\u3002" aria-hidden="true">#</a> \u4EE5\u4F7F\u7528\u989D\u5916\u53C2\u6570\u63D2\u4EF6\u4E3A\u4F8B\uFF0C\u914D\u7F6E\u5168\u5C40\u63D2\u4EF6\u3002</h4><p><strong>\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token string">&#39;http://127.0.0.1:9400/api/setting/plugin&#39;</span> <span class="token punctuation">\\</span>
-H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token punctuation">\\</span>
-d <span class="token string">&#39;{
	&quot;plugins&quot;:[{
		&quot;id&quot;:&quot;eolinker.com:apinto:extra_params&quot;,
		&quot;name&quot;:&quot;my_extra_params&quot;,
		&quot;type&quot;:&quot;service&quot;,
		&quot;status&quot;:&quot;global&quot;
		&quot;config&quot;:{
            &quot;params&quot;: [{
            &quot;name&quot;: &quot;demo_param&quot;,
            &quot;position&quot;: &quot;query&quot;,
            &quot;value&quot;: &quot;1&quot;,
            &quot;conflict&quot;: &quot;Convert&quot;
            }],
            &quot;error_type&quot;: &quot;text&quot;
        }
	}]
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><p><strong>\u914D\u7F6E\u670D\u52A1</strong></p><p><strong>\u5907\u6CE8</strong>\uFF1A\u533F\u540D\u670D\u52A1\u914D\u7F6E\u7684\u662F\u80FD\u591F\u8FD4\u56DE\u8F6C\u53D1\u8BF7\u6C42\u4FE1\u606F\u63A5\u53E3\u6240\u5728\u7684\u540E\u7AEF\u5730\u5740\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token string">&#39;http://127.0.0.1:9400/api/service&#39;</span> <span class="token punctuation">\\</span>
-H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token punctuation">\\</span>
-d <span class="token string">&#39;{
    &quot;name&quot;: &quot;param&quot;,
    &quot;driver&quot;: &quot;http&quot;,
    &quot;timeout&quot;: 3000,
    &quot;retry&quot;: 3,
    &quot;scheme&quot;: &quot;http&quot;,
    &quot;anonymous&quot;: {
        &quot;type&quot;: &quot;round-robin&quot;,
        &quot;config&quot;: &quot;demo-apinto.eolink.com:8280&quot;
    }
}&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><p><strong>\u914D\u7F6E\u8DEF\u7531</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token string">&#39;http://127.0.0.1:9400/api/router&#39;</span> <span class="token punctuation">\\</span>
-H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token punctuation">\\</span>
-d <span class="token string">&#39;{
	&quot;name&quot;:&quot;params&quot;,
	&quot;driver&quot;:&quot;http&quot;,
	&quot;desc&quot;:&quot;http&quot;,
	&quot;listen&quot;:8080,
	&quot;rules&quot;:[{
		&quot;location&quot;:&quot;/&quot;
	}],
	&quot;target&quot;:&quot;param@service&quot;
}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p><strong>\u8BF7\u6C42\u793A\u4F8B</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X GET <span class="token string">&#39;http://127.0.0.1:8080&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p><strong>\u8FD4\u56DE\u7ED3\u679C</strong></p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">{</span>
	<span class="token property">&quot;body&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;header&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;Accept&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;*/*&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;Content-Length&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;0&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;Content-Type&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;application/octet-stream&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;User-Agent&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;curl/7.61.1&quot;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
		<span class="token property">&quot;X-Forwarded-For&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;127.0.0.1,127.0.0.1&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;host&quot;</span><span class="token operator">:</span> <span class="token string">&quot;127.0.0.1:8080&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;method&quot;</span><span class="token operator">:</span> <span class="token string">&quot;POST&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;path&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/&quot;</span><span class="token punctuation">,</span>
	<span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
		<span class="token property">&quot;demo_param&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&quot;1&quot;</span><span class="token punctuation">]</span>
	<span class="token punctuation">}</span><span class="token punctuation">,</span>
	<span class="token property">&quot;url&quot;</span><span class="token operator">:</span> <span class="token string">&quot;/?demo_param=1&quot;</span>
<span class="token punctuation">}</span>

<span class="token comment">//\u53EF\u4EE5\u770B\u5230\u4E0A\u9762\u7684\u8FD4\u56DE\u793A\u4F8B\u91CCdemo_param\u7684\u503C\u4E3A1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div>`,43);function J(K,Q){const s=o("RouterLink");return r(),u(l,null,[b,n("table",null,[q,n("tbody",null,[n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/extra_params.html"},{default:t(()=>[d]),_:1})]),m,k]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/params_transformer.html"},{default:t(()=>[g]),_:1})]),h,_]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/proxy_rewrite.html"},{default:t(()=>[y]),_:1})]),v,f]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/ip_restriction.html"},{default:t(()=>[x]),_:1})]),T,C]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/rate_limiting.html"},{default:t(()=>[j]),_:1})]),P,O]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/auth.html"},{default:t(()=>[S]),_:1})]),w,X]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/response_rewrite.html"},{default:t(()=>[F]),_:1})]),A,I]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/circuit_breaker.html"},{default:t(()=>[H]),_:1})]),E,V]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/cors.html"},{default:t(()=>[z]),_:1})]),G,L]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/gzip.html"},{default:t(()=>[N]),_:1})]),B,D]),n("tr",null,[n("td",null,[a(s,{to:"/docs/plugins/access_log.html"},{default:t(()=>[R]),_:1})]),U,M])])]),Z],64)}var $=c(i,[["render",J]]);export{$ as default};
