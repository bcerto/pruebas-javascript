dineroCofla = prompt("cuanto dinero tienes cofla?");
dineroRoberto = prompt("cuanto dinero tienes Roberto?");
dineroPedro = prompt("cuanto dinero tienes Pedro?");

dineroCofla = parseInt(dineroCofla);

//-----------------COFLA--------------------

if (dineroCofla >= 0.6 && dineroCofla < 1) {
    alert ("Cofla, comprate el helado de agua");
    alert ("Cofla, te sobra " + (dineroCofla - 0.6));
}

else if (dineroCofla >= 1 && dineroCofla < 1.6) {
    alert ("Cofla, comprate el helado de crema");
    alert ("Cofla, te sobra " + (dineroCofla - 1));
}

else if (dineroCofla >= 1.6 && dineroCofla < 1.7) {
    alert ("Cofla, comprate el helado de heladix");
    alert ("Cofla, te sobra " + (dineroCofla - 1.6));
}

else if (dineroCofla >= 1.7 && dineroCofla < 1.8) {
    alert ("Cofla, comprate el helado de heladovich");
    alert ("Cofla, te sobra " + (dineroCofla - 1.7));
}

else if (dineroCofla >= 1.8 && dineroCofla < 2.9) {
    alert ("Cofla, comprate el helado de helardo");
    alert ("Cofla, te sobra " + (dineroCofla - 1.8));
}

else if (dineroCofla >= 2.9) {
    alert ("Cofla, comprate el helado con confites o el pote de 1/4 kg");
    alert ("Cofla, te sobra " + (dineroCofla - 2.9));
}

else  {
    alert ("Cofla, no te alcanza para nada");
}

//-------------------ROBERTO--------------

if (dineroRoberto >= 0.6 && dineroRoberto < 1) {
    alert ("Roberto, comprate el helado de agua");
}

else if (dineroRoberto >= 1 && dineroRoberto < 1.6) {
    alert ("Roberto, comprate el helado de crema");
}

else if (dineroRoberto >= 1.6 && dineroRoberto < 1.7) {
    alert ("Roberto, comprate el helado de heladix");
}

else if (dineroRoberto >= 1.7 && dineroRoberto < 1.8) {
    alert ("Roberto, comprate el helado de heladovich");
}

else if (dineroRoberto >= 1.8 && dineroRoberto < 2.9) {
    alert ("Roberto, comprate el helado de helardo");
}

else if (dineroRoberto >= 2.9) {
    alert ("Roberto, comprate el helado con confites o el pote de 1/4 kg");
}

else  {
    alert ("Roberto, no te alcanza para nada");
}

//-------------------PEDRO--------------

if (dineroPedro >= 0.6 && dineroPedro < 1) {
    alert ("Pedro, comprate el helado de agua");
}

else if (dineroPedro >= 1 && dineroPedro < 1.6) {
    alert ("Pedro, comprate el helado de crema");
}

else if (dineroPedro >= 1.6 && dineroPedro < 1.7) {
    alert ("Pedro, comprate el helado de heladix");
}

else if (dineroPedro >= 1.7 && dineroPedro < 1.8) {
    alert ("Pedro, comprate el helado de heladovich");
}

else if (dineroPedro >= 1.8 && dineroPedro < 2.9) {
    alert ("Pedro, comprate el helado de helardo");
}

else if (dineroPedro >= 2.9) {
    alert ("Pedro, comprate el helado con confites o el pote de 1/4 kg");
}

else  {
    alert ("Pedro, no te alcanza para nada");
}