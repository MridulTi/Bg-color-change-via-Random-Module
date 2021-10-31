let body=document.getElementById("body-el")
const char='0123456789'
let charlen=char.length
function color(){
	let a=repet()
	let b=repet()
	let c=repet()
	if (a<=255 & b<=255 & c<=255){
		if(a[0]==='0'){
			a=a.slice(1,3)
			console.log(a)
		}else if(b[0]==='0'){
			b=b.slice(1,3)
			console.log(b)
		}else if(c[0]==='0'){
			c=c.slice(1,3)
			console.log(c)
		}
		console.log(a,b,c)
		body.innerHTML=`body {background-color:rgb(${a},${b},${c});}`
	}else{
		color()
	}
}
function repet(){
	let r=''
	for(let i=0;i<3;i++){
		let bg=char.charAt(Math.floor(Math.random()*charlen))
		r+=bg
	}
	return r
	console.log(r)
}