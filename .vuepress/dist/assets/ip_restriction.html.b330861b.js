import{f as a}from"./app.ec6ae4af.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const e={},s=a(`<h1 id="ip\u9ED1\u767D\u540D\u5355" tabindex="-1"><a class="header-anchor" href="#ip\u9ED1\u767D\u540D\u5355" aria-hidden="true">#</a> IP\u9ED1\u767D\u540D\u5355</h1><h3 id="\u63D2\u4EF6\u540D\u79F0" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u540D\u79F0" aria-hidden="true">#</a> \u63D2\u4EF6\u540D\u79F0</h3><table><thead><tr><th>\u540D\u79F0</th><th>\u5B57\u6BB5</th><th>\u5C5E\u6027</th></tr></thead><tbody><tr><td>IP\u9ED1\u767D\u540D\u5355</td><td>ip_restriction</td><td>\u5B89\u5168\u9632\u5FA1</td></tr></tbody></table><h3 id="\u529F\u80FD\u63CF\u8FF0" tabindex="-1"><a class="header-anchor" href="#\u529F\u80FD\u63CF\u8FF0" aria-hidden="true">#</a> \u529F\u80FD\u63CF\u8FF0</h3><p>IP\u9ED1\u540D\u5355\u6307\u9664\u9ED1\u540D\u5355\u5916\u7684IP\u5747\u53EF\u8BBF\u95EE\uFF0CIP\u767D\u540D\u5355\u6307\u9664\u767D\u540D\u5355\u5916\u7684IP\u4E0D\u80FD\u8BBF\u95EE\uFF0C\u7F51\u5173\u901A\u8FC7\u4F1A <strong>X-Real-IP</strong> \u5934\u5224\u65AD\u5BA2\u6237\u7AEF\u771F\u5B9EIP\u3002</p><h5 id="\u4E00\u3001ip\u914D\u7F6E\u652F\u6301\u4EE5\u4E0B\u5199\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001ip\u914D\u7F6E\u652F\u6301\u4EE5\u4E0B\u5199\u6CD5" aria-hidden="true">#</a> \u4E00\u3001IP\u914D\u7F6E\u652F\u6301\u4EE5\u4E0B\u5199\u6CD5\uFF1A</h5><p>\uFF081\uFF09192.168.0.1 \uFF082\uFF09192.168.0.1/26 \uFF083\uFF09192.168.0.*</p><p>\u6CE8\uFF1A*\u4EC5\u652F\u6301\u653E\u6700\u540E\u4E00\u4F4D\uFF0C\u5982\uFF1A192.<em>\u3001192.168.</em>\u3001192.168.0.*</p><h5 id="\u4E8C\u3001\u914D\u5408nginx\u7684x-real-ip\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001\u914D\u5408nginx\u7684x-real-ip\u4F7F\u7528" aria-hidden="true">#</a> \u4E8C\u3001\u914D\u5408nginx\u7684X-Real-IP\u4F7F\u7528\uFF1A</h5><p>\uFF081\uFF09\u82E5\u5BA2\u6237\u7AEF\u4E0E\u7F51\u5173\u4E4B\u95F4\u4E0D\u5B58\u5728\u4EE3\u7406\u670D\u52A1\u5668\uFF0C\u6B64\u65F6\u4ECE\u8BF7\u6C42\u4E2D\u89E3\u6790\u51FA\u7684IP\u5730\u5740\u5C31\u662F\u5B9E\u9645\u5BA2\u6237\u7AEF\u7684IP\uFF0C\u7F51\u5173\u4F1A\u628A\u8BE5\u5730\u5740\u8BBE\u4E3AX-Real-IP\u5934\u7684\u503C\uFF1B \uFF082\uFF09\u82E5\u5BA2\u6237\u7AEF\u4E0E\u7F51\u5173\u4E4B\u95F4\u5B58\u5728\u591A\u5C42\u4EE3\u7406\uFF0C\u5219\u9700\u5728 <strong>\u7B2C\u4E00\u5C42\u4EE3\u7406</strong> \u4E2D\u8BBE\u7F6EX-Real-IP\u8BF7\u6C42\u5934\uFF0C\u6B64\u65F6\u7F51\u5173\u4F1A\u628A\u4EE3\u7406\u4F20\u6765\u7684X-Real-IP\u8F6C\u53D1\u5230\u670D\u52A1\u5668\u3002</p><p><strong>\u4EE3\u7406\u914D\u7F6E\u793A\u4F8B</strong>\uFF1A</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>location / <span class="token punctuation">{</span>
    root   html<span class="token punctuation">;</span>
    index  index.html index.htm index.php<span class="token punctuation">;</span>
    proxy_set_header X-Real-IP <span class="token variable">$remote_addr</span><span class="token punctuation">;</span>
    proxy_set_header X-Forwarded-For <span class="token variable">$proxy_add_x_forwarded_for</span><span class="token punctuation">;</span>
    proxy_pass http://192.168.247.132<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="open-api" tabindex="-1"><a class="header-anchor" href="#open-api" aria-hidden="true">#</a> Open Api</h3><h4 id="\u63D2\u4EF6\u914D\u7F6E\u53C2\u6570" tabindex="-1"><a class="header-anchor" href="#\u63D2\u4EF6\u914D\u7F6E\u53C2\u6570" aria-hidden="true">#</a> \u63D2\u4EF6\u914D\u7F6E\u53C2\u6570</h4><table><thead><tr><th>\u53C2\u6570\u540D</th><th>\u8BF4\u660E</th><th>\u503C\u53EF\u80FD\u6027</th></tr></thead><tbody><tr><td>ip_list_type</td><td>IP\u540D\u5355\u7C7B\u578B</td><td>white/black</td></tr><tr><td>ip_white_list</td><td>IP\u767D\u540D\u5355\u5217\u8868</td><td></td></tr><tr><td>ip_black_list</td><td>IP\u9ED1\u540D\u5355\u5217\u8868</td><td></td></tr><tr><td>response_type</td><td>\u63D2\u4EF6\u8FD4\u56DE\u62A5\u9519\u7684\u7C7B\u578B</td><td>text/json</td></tr></tbody></table><h4 id="\u914D\u7F6E\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u793A\u4F8B" aria-hidden="true">#</a> \u914D\u7F6E\u793A\u4F8B</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>{
    &quot;ip_list_type&quot;:&quot;black&quot;,
    &quot;ip_white_list&quot;:[&quot;127.0.0.1&quot;],
    &quot;ip_black_list&quot;:[&quot;127.0.0.2&quot;],
    &quot;response_type&quot;:&quot;text&quot;
}
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h4 id="open-api\u8BF7\u6C42\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#open-api\u8BF7\u6C42\u793A\u4F8B" aria-hidden="true">#</a> Open API\u8BF7\u6C42\u793A\u4F8B</h4><h5 id="\u5168\u5C40\u914D\u7F6E" tabindex="-1"><a class="header-anchor" href="#\u5168\u5C40\u914D\u7F6E" aria-hidden="true">#</a> \u5168\u5C40\u914D\u7F6E</h5><p>\u5728\u4F7F\u7528IP\u9ED1\u767D\u540D\u5355\u63D2\u4EF6\u4E4B\u524D\uFF0C\u9700\u8981\u5728\u5168\u5C40\u63D2\u4EF6\u914D\u7F6E\u4E2D\u5C06name\u4E3Aip_restriction\u7684\u63D2\u4EF6\u72B6\u6001\u8BBE\u7F6E\u4E3Aenable\uFF0C\u5177\u4F53\u914D\u7F6E\u70B9\u6B64<a href="/docs/plugins">\u8DF3\u8F6C</a></p><h5 id="\u914D\u7F6E\u5E26\u6709ip\u9ED1\u767D\u540D\u5355\u63D2\u4EF6\u7684service\u670D\u52A1" tabindex="-1"><a class="header-anchor" href="#\u914D\u7F6E\u5E26\u6709ip\u9ED1\u767D\u540D\u5355\u63D2\u4EF6\u7684service\u670D\u52A1" aria-hidden="true">#</a> \u914D\u7F6E\u5E26\u6709IP\u9ED1\u767D\u540D\u5355\u63D2\u4EF6\u7684service\u670D\u52A1</h5><p><strong>\u5907\u6CE8</strong>\uFF1A\u533F\u540D\u670D\u52A1\u914D\u7F6E\u7684\u662Fapinto\u5B98\u65B9\u793A\u4F8B\u63A5\u53E3\uFF0C\u5C06\u8FD4\u56DE\u8BF7\u6C42\u7684\u76F8\u5173\u4FE1\u606F\u3002</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token string">&#39;http://127.0.0.1:9400/api/service&#39;</span> -H <span class="token string">&#39;Content-Type:application/json&#39;</span> -d <span class="token string">&#39;{&quot;name&quot;: &quot;demo&quot;,&quot;driver&quot;: &quot;http&quot;,&quot;timeout&quot;: 3000,&quot;retry&quot;: 3,&quot;desc&quot;:&quot;\u4F7F\u7528\u9ED1\u767Dip\u63D2\u4EF6&quot;,&quot;scheme&quot;: &quot;https&quot;,&quot;anonymous&quot;: {&quot;type&quot;: &quot;round-robin&quot;,&quot;config&quot;: &quot;demo-apinto.eolink.com:8280&quot;},&quot;plugins&quot;: {&quot;ip_restriction&quot;:{&quot;disable&quot;: false,&quot;config&quot;:{&quot;ip_list_type&quot;:&quot;black&quot;,&quot;ip_black_list&quot;:[&quot;127.0.0.1&quot;]}}}}&#39;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>\u6210\u529F\u521B\u5EFAid\u4E3Ademo@service\u7684\u670D\u52A1
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="\u7ED1\u5B9A\u8DEF\u7531" tabindex="-1"><a class="header-anchor" href="#\u7ED1\u5B9A\u8DEF\u7531" aria-hidden="true">#</a> \u7ED1\u5B9A\u8DEF\u7531</h5><p>\u5C06\u4E0A\u4E00\u6B65\u751F\u6210\u7684\u670D\u52A1id\u7ED1\u5B9A\u81F3\u8DEF\u7531\u7684target\u5B57\u6BB5</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST  <span class="token punctuation">\\</span>
  <span class="token string">&#39;http://127.0.0.1:9400/api/router&#39;</span> <span class="token punctuation">\\</span>
  -H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token punctuation">\\</span>
  -d <span class="token string">&#39;{&quot;name&quot;:&quot;demo&quot;,&quot;driver&quot;:&quot;http&quot;,&quot;desc&quot;:&quot;\u8BE5\u8DEF\u7531\u7684\u76EE\u6807\u670D\u52A1\u4F7F\u7528\u4E86\u9ED1\u767Dip\u63D2\u4EF6&quot;,&quot;listen&quot;:8080,&quot;rules&quot;:[{&quot;location&quot;:&quot;/demo&quot;}],&quot;target&quot;:&quot;demo@service&quot;}&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h5 id="\u63A5\u53E3\u8BF7\u6C42\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8BF7\u6C42\u793A\u4F8B" aria-hidden="true">#</a> \u63A5\u53E3\u8BF7\u6C42\u793A\u4F8B</h5><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token function">curl</span> -X POST -H <span class="token string">&#39;Content-Type:application/json&#39;</span> <span class="token string">&#39;http://127.0.0.1:8080/demo&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h5 id="\u63A5\u53E3\u8BBF\u95EE\u8FD4\u56DE\u793A\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3\u8BBF\u95EE\u8FD4\u56DE\u793A\u4F8B" aria-hidden="true">#</a> \u63A5\u53E3\u8BBF\u95EE\u8FD4\u56DE\u793A\u4F8B</h5><p>127.0.0.1\u4E3A\u9ED1\u540D\u5355\u4E2D\u7684ip\uFF0C\u6545\u8FD4\u56DE403</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>HTTP/1.1 <span class="token number">403</span> Forbidden
Content-Type: text/plain
Content-Length: <span class="token number">18</span>

<span class="token punctuation">[</span>ip_restriction<span class="token punctuation">]</span> Illegal IP<span class="token operator">!</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div>`,32);function t(r,i){return s}var d=n(e,[["render",t]]);export{d as default};
