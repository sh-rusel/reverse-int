module.exports = function reverse (n) {
   n=n.toString();
   let str='';
   for (let i=n.length-1; i>=0;i--){
      str=str+n[i]
   }
   return str;
}
