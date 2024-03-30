
//!Task 1

/*let obt1={name:"person1",age:5}
let obt2={age:5,name:"person1"}
let str1=JSON.stringify(obt1)
let str2=JSON.stringify(obt2)

if((obt1.name===obt2.name) && (obt1.age===obt2.age))
{
    console.log("Json objects are equal");
}
else
{
    console.log("Json objects are not equal");
}*/


//!Task 2

/*var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
for(var i=0; i<result.length;i++)
{
    console.log(result[i].name.common,result[i].region,result[i].subregion,result[i].population);
}
}*/


//!Task 3

/*var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all",true)
request.send();
request.onload=function(){
    var data=request.response
    var result=JSON.parse(data)
for(var i=0; i<result.length;i++)
{
    console.log(result[i].flags.png);
}
}*/






