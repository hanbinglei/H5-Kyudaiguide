
const fs=require('fs'),vm=require('vm');
const c={window:{},
  document:{documentElement:{},querySelector:()=>null,addEventListener(){},
            body:{classList:{add(){},remove(){}}}},
  localStorage:{getItem:()=>null,setItem(){}},
  navigator:{language:'zh'}, location:{hash:''}};
c.window.localStorage=c.localStorage; c.window.location=c.location; c.window.navigator=c.navigator;
vm.createContext(c);
vm.runInContext(fs.readFileSync(process.argv[1],'utf8'),c);
const I=c.window.GuideI18N;
console.log(JSON.stringify({langs:I.LANGS, out:I.UI}));
