//console.log(_("#app").text("my text").html());
// console.log(_("#app").css({
// 	fontSize:"50px",
// 	color:"red"
// }).text());

console.log(_("#app").on("click",function(){
	console.log("app clicked",_("#app").text());
}).text());