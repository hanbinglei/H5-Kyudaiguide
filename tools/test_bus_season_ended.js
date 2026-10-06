/** 使用实际2026巴士数据验证JST季末边界、季后渲染和无重复计时器；不访问网络。 */
'use strict';
const fs=require('fs'),vm=require('vm'),assert=require('assert');
const block=require('../content/guide-newcomer.json').blocks.find(b=>b.type==='bus_live');
const end=Date.parse('2026-10-02T00:00:00+09:00');
let timers=0;
const ctx={window:{GuideI18N:{t:key=>key}},Date:class extends Date{static now(){return end;}},setInterval:()=>++timers,clearInterval:()=>{},document:{querySelectorAll:()=>[]}};
vm.runInNewContext(fs.readFileSync(require.resolve('../guide/js/bus-live.js'),'utf8'),ctx);
const api=ctx.window.GuideBusLive;
assert.equal(block.year,2026);
assert(!api.seasonEnded(block,end-1));
assert(api.seasonEnded(block,end));
assert(api.seasonEnded(block,Date.parse('2027-09-24T00:00:00+09:00')),'下一年不自动恢复旧时刻表');
const root={innerHTML:'',dataset:{schedule:JSON.stringify(block)},isConnected:true};
api.init(root);
assert(root.innerHTML.includes('#article/guide-transport'));
assert(!root.innerHTML.includes('<table'));
assert.equal(timers,0,'季后不继续刷新候车表');
console.log('PASS 巴士季后7项：JST边界、跨年、交通跳转、无旧表和无计时器');
