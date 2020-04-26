function fun(n,o) {
    console.log('n',n)
    console.log('o',o)
    return {
      fun:function(m){
        console.log('m',m)
        console.log('n',n)
        return fun(m,n);
      }
    };
  }
  var a = fun(0);  a.fun(1);  a.fun(2);  a.fun(3);
  var b = fun(0).fun(1).fun(2).fun(3);
  var c = fun(0).fun(1);  c.fun(2);  c.fun(3);


if([]==false){console.log(1)}//真
if({}==false){console.log(1)}//假
if([]){console.log(1)}       //真
if([1]==[1]){console.log(1)} //假

var c = [1];
var d = c;
//这里的d引用的c的地址，所以一样
console.log(c==d); //true

function repeat(func,steps,dur){
  return function(str){
    function timer(){
      setTimeout(function(){
        func(str);
        timer()
      },dur)
    }
    timer()
  }
}
const rep=repeat(console.log,4,3000);
rep('ccc')
console.log('end')

// 使用js实现一个repeat法,functionrepeat(func,times,wait){}, 
// const repeatFunc = repeat(alert,4,3000),调用这个repeatedFunc('helloworld'),会alert4次hellworld,每次间隔3秒
{
  function repeat(func,times,wait){
    return async function (str) {
          let i=0;
          let a=function (){
            if(i==0){
              func(str)
              i++
              a()
            }else{
              setTimeout(() => {
                func(str)
                i++
                if(i<times){
                  a()    
                }    
              }, wait);
            }
          }
          a();
        }
      }
      let  rep=repeat(console.log,4,3000);
      rep('hel')
      console.log('end')
}
      
// 解构[1,2,["3",4,"5",[6,[7,8],9]]]不改变数据类型
{
  var arr=[1,2,["3",4,"5",[6,[7,8],9]]]
  var l=0;
  function parseArr(arr){
    var i=0;
    for(i=0;i<arr.length;i++){
      if(arr[i] instanceof Array){
       l++
       parseArr(arr[i])
      }
    }
  }
  parseArr(arr)
  arr.flat(l)

  function parseArr(arr,res){
    for(var i=0;i<arr.length;i++){
      if(arr[i] instanceof Array){
        parseArr(arr[i],res);
      }else{
        res.push(arr[i]);
      }
    }
  }
  var a=[1,2,["3",4,"5",[6,[7,8],9]]]
  var res=[];
  parseArr(a,res);

  var arr = ['mu','zi',['dig',['big','love']]]
  function flatten(arr){ 
    var res = []; 
    for(var i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        res = res.concat(flatten(arr[i]));
      }else{
        res.push(arr[i]);
      } 
    } 
    return res; 
  }
console.log(flatten(arr))//["mu", "zi", "dig", "big", "love"]
}

function timeout(ms) {
  return new Promise((resolve) => {
    setTimeout(()=>{
      console.log(1)
      resolve(2)
    }, ms);
  });
}
async function asyncPrint(value, ms) {
  await timeout(ms);
  console.log(value);
}
asyncPrint('hello world', 3000);
console.log(3)



