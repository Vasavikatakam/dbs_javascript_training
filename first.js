/*function havefun()
{
    console.log("have fun...");
    console.log("printing txt box");
   // console.log(document.getElementById("txtbox").value);
  
}
havefun();
var obj=new havefun();
console.log(obj);*/

function havefun()
{
this.games=[1,2,3];
this.venue="";
this.coordinator={name:"vasavi",gamesarranged:true,lunchprovided:true};
/*public function */
this.dance=function(){
    console.log(pdance());
    return "Dance,dance,dance";
}

/*private functions */
function pdance()  
{
    return "pdance,pdance,pdance";
}
var ppdance=function()
{
    return "ppdance,ppdance,ppdance";
}
console.log(ppdance());
}

havefun.prototype.playgames=function()
{   
    return "tambola";
}
havefun();
//console.log(havefun.playgames());
var obj=new havefun();
//console.log(obj);
console.log(obj.games[1]);
//console.log(obj.pdance());
//console.log(obj.ppdance());
console.log(obj.dance());
console.log(obj.playgames());