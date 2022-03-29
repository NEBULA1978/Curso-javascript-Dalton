
dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes roberto?");
dineroPedro = prompt("cuanto dinero tienes pedro?");
//convertimos string introducido usuario y convertimos a numero
dineroCofla = parseInt(dineroCofla);

if (dineroCofla >= 0.6 && dineroCofla < 1) {
	alert("cofla; comprate el helado de agua");
	alert("y te sobran" + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
	alert("cofla; comprate el helado de crema");
	alert("y te sobran" + (dineroCofla - 1));
}
else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
	alert("cofla; comprate el helado de heladix");
	alert("y te sobran" + (dineroCofla - 1.6));
}
else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
	alert("cofla; comprate el helado de heladovich");
	alert("y te sobran" + (dineroCofla - 1.7));
}
else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
	alert("cofla; comprate el helado de helardo");
	alert("y te sobran" + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert("cofla, comprate helado con confites o el pote de 1/4kg");
	alert("y te sobran" + (dineroCofla - 2.9));

} else {
	alert("lo siento cofla, pobre de mierda, no te alcanza para ningun helado");
}





if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
	alert("roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
	alert("roberto, comprate el helado de crema");
}
else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
	alert("roberto, comprate el helado de heladix");
}
else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
	alert("roberto, comprate el helado de heladovich");
}
else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
	alert("roberto, comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert("roberto, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento roberto, pobre de mierda, no te alcanza para ningun helado");
}




if (dineroPedro >= 0.6 && dineroPedro < 1) {
	alert("pedro; comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
	alert("pedro; comprate el helado de crema");
}
else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
	alert("pedro; comprate el helado de heladix");
}
else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
	alert("pedro; comprate el helado de heladovich");
}
else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
	alert("pedro; comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert("pedro, comprate helado con confites o el pote de 1/4kg");

} else {
	alert("lo siento pedro, pobre de mierda, no te alcanza para ningun helado");
}

/*

const definirCompra = (n)=>{
	let din = promt(`Dinero de ${n}`);
	if(din >= 0.6 && din < 1.6) return(`${n}: helado de agua`)
	if(din >= 1 && din < 1.7) return(`${n}: helado de crema`)
	if(din >= 1.6 && din < 1.8) return(`${n}: helado de heladix`)
	if(din >= 1.7 && din < 2.9) return(`${n}: helado de heladovich`)
	if(din >= 1.8 && din < 1) return(`${n}: helado de helardo`)
	if(din >= 2.9) return(`${n}: helado de confites o pota de 1/4kg`)
	else return (`${n}: No te alcanza para ningun helado los ricos no quieren`)
}

console.log(definirCompra("Cofla"));
console.log(definirCompra("Pedro"));
console.log(definirCompra("Roberto"));

*/
//><><