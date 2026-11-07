import{a as e,i as t,s as n,t as r}from"./app-CchzzT6L.js";var i=JSON.parse(`{"path":"/elasticsearch/search-and-query.html","title":"Search & Query","lang":"en-US","frontmatter":{},"git":{"updatedTime":1733105764000,"contributors":[{"name":"hifat","username":"hifat","email":"logmanxsa@gmail.com","commits":1,"url":"https://github.com/hifat"}],"changelog":[{"hash":"696b53116bf88555cfbecdcd0b9c88bf6bf2fc3f","time":1733105764000,"email":"logmanxsa@gmail.com","author":"hifat","message":"add elasticsearch content"}]},"filePathRelative":"elasticsearch/search-and-query.md"}`),a={name:`search-and-query.md`};function o(r,i,a,o,s,c){return n(),t(`div`,null,[...i[0]||=[e(`<h1 id="search-query" tabindex="-1"><a class="header-anchor" href="#search-query"><span>Search &amp; Query</span></a></h1><h3 id="search" tabindex="-1"><a class="header-anchor" href="#search"><span><a href="https://www.elastic.co/guide/en/elasticsearch/reference/current/search-search.html" target="_blank" rel="noopener noreferrer">Search</a></span></a></h3><h4 id="get-recipes-search" tabindex="-1"><a class="header-anchor" href="#get-recipes-search"><span>GET /recipes/_search</span></a></h4><ul><li>Size <ul><li>Default size is 10</li></ul></li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Source</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#6A737D;">//  It like a \`SELECT\`</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;_source&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;preparation_time_minutes&quot;</span><span style="color:#E1E4E8;">]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#6A737D;">// Select all and except some fields</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;_source&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;excludes&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;description&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">   }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Pagination</li></ul><p>total_pages = ceil(total_hits / page_size)<br> from = page_size * (page_number - 1)</p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;_source&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">false</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// Not display fields</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;from&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">15</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Sort</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;_source&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;preparation_time_minutes&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;created&quot;</span><span style="color:#E1E4E8;">],</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">   &quot;sort&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        { </span><span style="color:#79B8FF;">&quot;preparation_time_minutes&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;desc&quot;</span><span style="color:#E1E4E8;"> },</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        { </span><span style="color:#79B8FF;">&quot;created&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;asc&quot;</span><span style="color:#E1E4E8;"> }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    ]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Score</li></ul><p>Scoring algorithm that ES use is <a href="https://en.wikipedia.org/wiki/Okapi_BM25" target="_blank" rel="noopener noreferrer">Okapi BM25</a><br> Youtube CodeBangkok: <a href="https://youtu.be/YKr52eyWPkE?t=1107" target="_blank" rel="noopener noreferrer">Elasticsearch: Search &amp; Query</a> for explain</p><h4 id="get-products-search" tabindex="-1"><a class="header-anchor" href="#get-products-search"><span>GET products/_search</span></a></h4><p>Search by term and explain</p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;term&quot;</span><span style="color:#E1E4E8;">: {   </span><span style="color:#6A737D;">// Term search non-case sensitive</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;name&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;lobster&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;explain&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;"> // optional just explain</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;term&quot;</span><span style="color:#E1E4E8;">: {   </span><span style="color:#6A737D;">// Term search only lower case because name ถูก analyze ให้เป็น lower case หมดแล้ว</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;name&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;lobster&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;explain&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;"> // optional just explain</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;term.keyword&quot;</span><span style="color:#E1E4E8;">: {   </span><span style="color:#6A737D;">// เจอคำแบบเป๊ะ ๆ</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;name&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;lobster&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;explain&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#6A737D;"> // optional just explain</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Search with multiple terms</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;tags.keyword&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#9ECBFF;">        &quot;Soup&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#9ECBFF;">        &quot;Cake&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      ]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Search with ID</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;ids&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;values&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">2</span><span style="color:#E1E4E8;">,</span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;">]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Search range values</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;in_stock&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;gte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">1</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;lte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">5</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Search with date</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;created&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;gte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2010/01/01&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;lte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2010/12/31&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Change date format</p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;created&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;gte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;01-01-2010&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;lte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;31-12-2010&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;format&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;dd-MM-yyy&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><code>&quot;01-01-2010||-1M&quot;</code>: it mean 1 month back<br><code>&quot;now-4y&quot;</code>: it mean 4 years back from now</p><p><strong>You can round down month or day</strong><br><code>&quot;now/M-4y&quot;</code>: Start from first month 4 years back from now<br><code>&quot;now/d-4y&quot;</code>: Start from first time of each days</p><ul><li>Search with non null</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;exists&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;tags&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>Not Logic</p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;bool&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;must_not&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;exists&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;tags&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      ]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Search With Prefix</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;prefix&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">       &quot;tags.keyword&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">         &quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Vege&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">       }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Search With wildcard</li></ul><p><code>&quot;*table&quot;</code>, <code>&quot;Vege*&quot;</code>, <code>&quot;Vege?able&quot;</code></p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;prefix&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">       &quot;tags.keyword&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">         &quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;*Vege&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">       }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Search with regex</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;regexp&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;tags.keyword&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;value&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Vege[a-zA-Z]+able&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="get-recipes-search-1" tabindex="-1"><a class="header-anchor" href="#get-recipes-search-1"><span>GET recipes/_search</span></a></h3><ul><li>Full text query <code>&quot;match&quot;</code> it search non-sensitive case and default is OR logic, Search by split words <code>&quot;match_phrase&quot;</code> Not split words</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;_source&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">], </span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pasta spaghetti&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;operator&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;and&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// optional default is OR logic</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Multiple match query</li></ul><p>Search by fields <code>title</code> and <code>description</code></p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;_source&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">], </span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pasta spaghetti&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;fields&quot;</span><span style="color:#E1E4E8;">: [</span><span style="color:#9ECBFF;">&quot;title&quot;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&quot;description&quot;</span><span style="color:#E1E4E8;">]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Bool Query</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;bool&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;must&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;ingredients.name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pasta&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      ],</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;must_not&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;ingredients.name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;cheese&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      ],</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;should&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;ingredients.name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;shallot&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      ], </span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;filter&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;preparation_time_minutes&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">              &quot;lte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">20</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">            }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      ]</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>props ที่อยู่ใน bool เราเติม <code>&quot;_name&quot;</code> เข้าไปแล้วมันจะแสดงให้ดูว่า keyword ที่โดน match คืออะไร เช่น</p><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;bool&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;must&quot;</span><span style="color:#E1E4E8;">: [</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;match&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;ingredients.name&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">              &quot;query&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pasta&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">              &quot;_name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;pasta_match&quot;</span><span style="color:#6A737D;"> // The value up to you :)</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">            }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      ],</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h3 id="get-orders-search" tabindex="-1"><a class="header-anchor" href="#get-orders-search"><span>GET /orders/_search</span></a></h3><ul><li>Metrics Aggregations</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;total_sales&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;sum&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;total_amount&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;avg_sales&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;avg&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;total_amount&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;min_sale&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;min&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;total_amount&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;max_sale&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;max&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;total_amount&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;total_saleman&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;cardinality&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;salesman.id&quot;</span><span style="color:#6A737D;">  // Like a COUNT(id)</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;value_count&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;value_count&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;salesman.id&quot;</span><span style="color:#6A737D;"> // Like a COUNT(*)</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">     &quot;stats&quot;</span><span style="color:#E1E4E8;">: { </span><span style="color:#6A737D;">// รวม min max count avg sum ไว้ในทีเดียว</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;stats&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;total_amount&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Bucket Aggregation</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;status_terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;status.keyword&quot;</span><span style="color:#E1E4E8;">,  </span><span style="color:#6A737D;">// Group by and count</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span><span style="color:#6A737D;">  // ถ้าใส่มันจะดึงข้อมูลตาม top size มากไปน้อย</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Nested Aggregation</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;status_terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;status.keyword&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      },</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;status_stat&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;stats&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;total_amount&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ul><li>Aggregation include query</li></ul><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;total_amount&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;gte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }, </span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;status_terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;status.keyword&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><div class="language-json line-numbers-mode line-numbers-mode" data-highlighter="prismjs" data-ext="json"><pre class="shiki github-dark vp-code" style="background-color:#24292e;color:#e1e4e8;"><code><span class="line"><span class="line"><span style="color:#E1E4E8;">{</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;query&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;range&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;total_amount&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;gte&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">100</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }, </span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">  &quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;status_terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;terms&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;status.keyword&quot;</span><span style="color:#E1E4E8;">,</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;size&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">10</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    },</span></span></span>
<span class="line"><span class="line"></span></span>
<span class="line"><span class="line"><span style="color:#6A737D;">    // ส่วนตรงนี้มันจะ sum ข้อมูลใน index ทั้งหมดโดยไม่สน condition ด้านบน</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">    &quot;all_orders&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;global&quot;</span><span style="color:#E1E4E8;">: {},</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">      &quot;aggs&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">        &quot;global_stat&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">          &quot;stats&quot;</span><span style="color:#E1E4E8;">: {</span></span></span>
<span class="line"><span class="line"><span style="color:#79B8FF;">            &quot;field&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;total_amount&quot;</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">          }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">        }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">      }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">    }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">  }</span></span></span>
<span class="line"><span class="line"><span style="color:#E1E4E8;">}</span></span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"></div><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>`,63)]])}var s=r(a,[[`render`,o]]);export{i as _pageData,s as default};