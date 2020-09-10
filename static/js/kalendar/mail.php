<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en" lang="en">
<head>
<title>Italtour</title>
<meta name="keywords" content="Taliansko, Chorvatsko, Bulharsko, Egypt, Grecko, Turecko, Cyprus,Spanielsko, Slovensko" />
<meta name="description" content="Cestovna kancelaria" />
<meta name="author" content="Michal Petrovic" />
<meta name="ROBOTS" content="ALL" />
<meta http-equiv="content-type" content="text/html; charset=windows-1250" />
</head>

<body bgcolor="#D9E1F4">

<?php

// $prijemca = "info@italtour.sk,janak@italtour.sk,$polozka_05";
// $predmet = "Predbezna objednavka";
// $email = "INFO@ITALTOUR.SK";
$prijemca = "brano.petrovic@centrum.sk";
$predmet = "Predbezna objednavka";
$email = "brano.petrovic@centrum.sk";

if ($polozka_03 && $polozka_05 && $polozka_06  && $polozka_10 && $polozka_11 && $polozka_12 && $polozka_13){

mail("$prijemca", "$predmet", "Meno a priezvisko: $polozka_01 \n Adresa: $polozka_02 \n Telefon: $polozka_03 \n Fax: $polozka_04 \n Krajina: $polozka_06 \n Miesto pobytu: $polozka_07 \n Termin od: $polozka_08 do: $polozka_09 \n Doba trvania - pocet dni: Min.: $polozka_10 Max.: $polozka_11 \n Doprava: $polozka_12 \n Nastupne miesto: $polozka_13 \n Typ ubytovania: $polozka_14 \n Uroven ubytovania: $polozka_15 \n Stravovanie: $polozka_16 \n Cena ( od - do � ): $polozka_17 \n Pocet dospelych: $polozka_18 \n Pocet deti: $polozka_19 \n Obchodny zastupca: $polozka_20 \n Poznamka: $polozka_21", "from: $email");

echo "<center><br />V� email bol <b>�spe�ne odoslan�</b>!";

echo '<br />
<table border="0"><tr><td align="center">
<font size="3" color="black" face="calibri">�akujeme za V� z�ujem, �oskoro V�m za�leme na�u aktu�lnu ponuku.<br /><br />
<a href="../ponuka.html" target="okno" style="color: #3C3DFF; text-decoration: underline;">Vytvori� �al�iu ponuku</a></font></td></tr>
<tr><td align="center">
<img src="../grafika1.png" border="0px" width="400px" alt="" />
</td></tr></table>
</center>';

}

elseif (($polozka_03 && $polozka_05 && $polozka_06 && $polozka_08 && $polozka_10 && $polozka_11 && $polozka_12 && $polozka_13&& $polozka_16) == false){

echo '<center><br />V� email <b>nebol odoslan�</b>. Nezadali ste v�etky <b>povinn� �daje</b>.<br />
      <table><tr><td valign="middle"><a href="JavaScript:history.back()" style="color: black;"><img src="../anketa_fotky/back.png" style="width: 30px; margin-right: 5px; margin-top: 5px; border: 0px;" alt="" /></td></a>
      <td><a href="JavaScript:history.back()" style="color: red;"><font style="color: red; font-family: Calibri; font-size: 15px; font-weight: bold; font-style: normal;">Sp� - doplni� �daje</font></a></td></tr></table></center>';

echo '<center>
<img src="../grafika1.png" border="0px" width="400px" alt="" />
</center>';

}

?>

</body>
</html>                                                             