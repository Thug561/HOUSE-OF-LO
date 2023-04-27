<?php
///////////////////////////////////

$arText["TITLE"] = "Informatie over het aanbod";
$arText["INFORMATIE"] = "KLANTENINFORMATIE";



$arText["FULL_NAME"] = "Volledige naam:";
$arText["EMAIL"] = "Email:";
$arText["TEL"] = "Telefoonnummer:";
$arText["ADRES"] = "Adres:";

$arText["FULL_NAME_ANSWER"] = "Jane Doe";
$arText["EMAIL_ANSWER"] = "jane.gmail.com";
$arText["TEL_ANSWER"] = "085-4011608";
$arText["ADRES_ANSWER"] = "Simon Lindhoutstraat 1, 4691GA, Tholen";



$arText["CONF_INFORMATIE"] = "CONFIGURATIE-INFORMATIE";
$arText["NAME"] = "Annex Jaren 30";


$arText["TEXT_BLOCK_1"] = "Afmetingen";


$arText["COLUMN_LEFT"] = "Optie";
$arText["COLUMN_CENTER"] = "Variatie";
$arText["COLUMN_RIGHT"] = "Prijs";




$arText["COLUMN_LEFT_1"] = "Breedte";
$arText["COLUMN_CENTER_1"] = "5100 mm";
$arText["COLUMN_RIGHT_1"] = "$370";

$arText["COLUMN_LEFT_2"] = "Diepte";
$arText["COLUMN_CENTER_2"] = "2250 mm";
$arText["COLUMN_RIGHT_2"] = "$400";

$arText["COLUMN_LEFT_3"] = "Links";
$arText["COLUMN_CENTER_3"] = "100 mm";
$arText["COLUMN_RIGHT_3"] = "$60";

$arText["COLUMN_LEFT_4"] = "Rechts";
$arText["COLUMN_CENTER_4"] = "200 mm";
$arText["COLUMN_RIGHT_4"] = "$120";

$arText["TOTAL_TEXT"] = "Subtotaal:";
$arText["TOTAL_PRICE"] = "$950";

$arText["CONFIG_TEXT"] = "Zie de configuratie:";
$arText["NICKNAME"] = "annex_jaren_30";
$arText["BOTTOM_TEXT"] = "We gebruiken cookies om content en advertenties te personaliseren, om functies voor social\nmedia te bieden en om ons websiteverkeer te analyseren.";

foreach($arText as &$text)
{
    $text = iconv('utf-8', 'windows-1251', $text);
}

//////////////////////////////////

require('fpdf.php');
require('makefont/makefont.php');

$pdf = new FPDF("P","pt", [595,903]);
$pdf->AddFont('Montserrat-Regular', '', "Montserrat-Regular.php");
$pdf->AddFont('Montserrat-Light', '', "Montserrat-Light.php");
$pdf->AddFont('Montserrat-Medium', '', "Montserrat-Medium.php");
$pdf->AddPage();


//LOGO
$pdf->Image('css/logo.png', 475,60);


//TITLE
$pdf->SetXY(60, 48);
$pdf->SetFont("Montserrat-Regular", '', 24);
$pdf->setTextColor(7,36,70);
$pdf->MultiCell(430, 35, $arText["TITLE"], 0, "L");


//INFORMATIE
$pdf->SetXY(60, 98);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["INFORMATIE"], 0, "L");


//FULL_NAME
$pdf->SetXY(60, 124);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["FULL_NAME"], 0, "L");

//FULL_NAME_ANSWER
$pdf->SetXY(161, 124);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Medium", '', 12);
$pdf->MultiCell(180, 14, $arText["FULL_NAME_ANSWER"], 0, "L");




//EMAIL
$pdf->SetXY(60, 148);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["EMAIL"], 0, "L");

//EMAIL_ANSWER
$pdf->SetXY(101, 148);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Medium", '', 12);
$pdf->MultiCell(180, 14, $arText["EMAIL_ANSWER"], 0, "L");

//TEL
$pdf->SetXY(60, 172);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["TEL"], 0, "L");

//TEL_ANSWER
$pdf->SetXY(172, 172);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Medium", '', 12);
$pdf->MultiCell(180, 14, $arText["TEL_ANSWER"], 0, "L");

//ADRES
$pdf->SetXY(60, 196);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["ADRES"], 0, "L");

//ADRES_ANSWER
$pdf->SetXY(101, 196);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Medium", '', 12);
$pdf->MultiCell(250, 14, $arText["ADRES_ANSWER"], 0, "L");

//LINE WIDTH 0
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 228, 535, 228);


//CONF_INFORMATIE
$pdf->SetXY(60, 240);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(185, 14, $arText["CONF_INFORMATIE"], 0, "L");

//NAME
$pdf->SetXY(60, 264);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Light", '', 16);
$pdf->MultiCell(180, 14, $arText["NAME"], 0, "L");


//SCREENSHOT
$pdf->Image('css/Screenshot_Admin.png', 60, 298, 475, 214);



//Afmetingen_BLOCK
$pdf->SetFillColor(238, 243, 249);
$pdf->Rect(60, 524, 475, 33, "F");

//Afmetingen_ICON
$pdf->Image('css/icons/Afmetingen.png', 76, 533.5, 16, 16);

//TEXT_BLOCK_1
$pdf->SetXY(100, 535);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(97, 14, $arText["TEXT_BLOCK_1"], 0, "L");




//COLUMN_LEFT
$pdf->SetXY(60, 565);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT"], 0, "L");

//COLUMN_CENTER
$pdf->SetXY(258, 565);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_CENTER"], 0, "L");

//COLUMN_RIGHT
$pdf->SetXY(508, 565);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_RIGHT"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 588, 535, 588);





//COLUMN_LEFT_1
$pdf->SetXY(60, 596);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_1"], 0, "L");

//COLUMN_CENTER_1
$pdf->SetXY(258, 596);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_1"], 0, "L");

//COLUMN_RIGHT_1
$pdf->SetXY(505, 596);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_1"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 619, 535, 619);




//COLUMN_LEFT_2
$pdf->SetXY(60, 627);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_2"], 0, "L");

//COLUMN_CENTER_2
$pdf->SetXY(258, 627);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_2"], 0, "L");

//COLUMN_RIGHT_2
$pdf->SetXY(503, 627);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_2"], 0, "L");

//LINE WIDTH 2
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 650, 535, 650);




//COLUMN_LEFT_3
$pdf->SetXY(60, 658);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_3"], 0, "L");

//COLUMN_CENTER_3
$pdf->SetXY(256, 658);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_3"], 0, "L");

//COLUMN_RIGHT_3
$pdf->SetXY(512, 658);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_3"], 0, "L");

//LINE WIDTH 3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 681, 535, 681);



//COLUMN_LEFT_4
$pdf->SetXY(60, 689);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_4"], 0, "L");

//COLUMN_CENTER_4
$pdf->SetXY(258, 689);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_4"], 0, "L");

//COLUMN_RIGHT_4
$pdf->SetXY(508, 689);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_4"], 0, "L");

//LINE WIDTH 4
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 712, 535, 712);






//TOTAL_TEXT
$pdf->SetXY(420, 720);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_TEXT"], 0, "L");

//TOTAL_PRICE
$pdf->SetXY(499, 720);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_PRICE"], 0, "L");



//CONFIG_TEXT
$pdf->SetXY(58, 788);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 10);
$pdf->MultiCell(120, 14, $arText["CONFIG_TEXT"], 0, "L");

//NICKNAME
$pdf->SetXY(182, 788);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Light", '', 10);
$pdf->MultiCell(180, 14, $arText["NICKNAME"], 0, "L");
$pdf->SetDrawColor(7, 36, 70);
$pdf->Line(185, 800, 262, 800);

//SHIRT LINE WIDTH 7
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(61, 810, 138, 810);


//BOTTOM_TEXT
$pdf->SetXY(58, 818);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 10);
$pdf->MultiCell(480, 14, $arText["BOTTOM_TEXT"], 0, "L");























$pdf->AddPage("P");

$arText["TITLE_2"] = "Informatie over het aanbod";
$arText["TEXT_BLOCK_2"] = "Kozijn";

$arText["COLUMN_LEFT_1_2"] = "Indeling";
$arText["COLUMN_CENTER_1_2"] = "Een openslaande deur";
$arText["COLUMN_RIGHT_1_2"] = "$570";

$arText["COLUMN_LEFT_2_2"] = "Deur positie";
$arText["COLUMN_CENTER_2_2"] = "Links";
$arText["COLUMN_RIGHT_2_2"] = "-";

$arText["COLUMN_LEFT_3_2"] = "Materiaal";
$arText["COLUMN_CENTER_3_2"] = "Hout (RAL 9005)";
$arText["COLUMN_RIGHT_3_2"] = "$90";

$arText["TOTAL_PRICE_2"] = "$660";


$arText["TEXT_BLOCK_3"] = "Boeiboord";
$arText["COLUMN_LEFT_1_3"] = "Materiaal";
$arText["COLUMN_CENTER_1_3"] = "Kunststof (RAL 9005)";
$arText["COLUMN_RIGHT_1_3"] = "$220";

$arText["COLUMN_LEFT_2_3"] = "Overstek";
$arText["COLUMN_CENTER_2_3"] = "Kunststof (RAL 9005)";
$arText["COLUMN_RIGHT_2_3"] = "$120";

$arText["TOTAL_PRICE_3"] = "$340";



$arText["TEXT_BLOCK_4"] = "Zijgevels";
$arText["COLUMN_LEFT_1_4"] = "Materiaal";
$arText["COLUMN_CENTER_1_4"] = "Metselwerk (RAL 9005)";
$arText["COLUMN_RIGHT_1_4"] = "$220";

$arText["COLUMN_LEFT_2_4"] = "Rollaag";
$arText["COLUMN_CENTER_2_4"] = "Beschikbaar";
$arText["COLUMN_RIGHT_2_4"] = "$70";

$arText["TOTAL_PRICE_4"] = "$290";




// TITLE_2
$pdf->SetXY(60, 51);
$pdf->SetFont("Montserrat-Regular", '', 16);
$pdf->setTextColor(7,36,70);
$pdf->MultiCell(430, 35, $arText["TITLE_2"], 0, "L");

//LOGO
$pdf->Image('css/logo.png', 475,60);


//Kozijn_BLOCK
$pdf->SetFillColor(238, 243, 249);
$pdf->Rect(60, 93, 475, 33, "F");

//Kozijn_ICON
$pdf->Image('css/icons/Kozijn.png', 76, 101.5, 16, 16);

//TEXT_BLOCK_2
$pdf->SetXY(100, 103);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(97, 14, $arText["TEXT_BLOCK_2"], 0, "L");



//COLUMN_LEFT
$pdf->SetXY(60, 134);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT"], 0, "L");

//COLUMN_CENTER
$pdf->SetXY(258, 134);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_CENTER"], 0, "L");

//COLUMN_RIGHT
$pdf->SetXY(508, 134);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_RIGHT"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 157, 535, 157);





//COLUMN_LEFT_1_2
$pdf->SetXY(60, 165);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_1_2"], 0, "L");

//COLUMN_CENTER_1_2
$pdf->SetXY(258, 165);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_1_2"], 0, "L");

//COLUMN_RIGHT_1_2
$pdf->SetXY(505, 165);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_1_2"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 188, 535, 188);




//COLUMN_LEFT_2_2
$pdf->SetXY(60, 196);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_2_2"], 0, "L");

//COLUMN_CENTER_2_2
$pdf->SetXY(258, 196);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_2_2"], 0, "L");

//COLUMN_RIGHT_2_2
$pdf->SetXY(530, 196);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_2_2"], 0, "L");

//LINE WIDTH 2_2
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 219, 535, 219);




//COLUMN_LEFT_3_2
$pdf->SetXY(60, 227);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_3_2"], 0, "L");

//COLUMN_CENTER_3_2
$pdf->SetXY(256, 227);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_3_2"], 0, "L");

//COLUMN_RIGHT_3_2
$pdf->SetXY(512, 227);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_3_2"], 0, "L");

//LINE WIDTH 3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 250, 535, 250);

//TOTAL_TEXT
$pdf->SetXY(420, 258);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_TEXT"], 0, "L");

//TOTAL_PRICE_2
$pdf->SetXY(499, 258);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_PRICE_2"], 0, "L");

















//Boeiboord_BLOCK
$pdf->SetFillColor(238, 243, 249);
$pdf->Rect(60, 299, 475, 33, "F");

//Boeiboord_ICON
$pdf->Image('css/icons/Boeiboord.png', 76, 307.5, 16, 16);

//TEXT_BLOCK_3
$pdf->SetXY(100, 309);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(97, 14, $arText["TEXT_BLOCK_3"], 0, "L");



//COLUMN_LEFT
$pdf->SetXY(60, 344);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT"], 0, "L");

//COLUMN_CENTER
$pdf->SetXY(258, 344);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_CENTER"], 0, "L");

//COLUMN_RIGHT
$pdf->SetXY(508, 344);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_RIGHT"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 367, 535, 367);





//COLUMN_LEFT_1_3
$pdf->SetXY(60, 375);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_1_3"], 0, "L");

//COLUMN_CENTER_1_3
$pdf->SetXY(258, 375);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_1_3"], 0, "L");

//COLUMN_RIGHT_1_3
$pdf->SetXY(505, 375);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_1_3"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 398, 535, 398);




//COLUMN_LEFT_2_3
$pdf->SetXY(60, 406);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_2_3"], 0, "L");

//COLUMN_CENTER_2_3
$pdf->SetXY(258, 406);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_2_3"], 0, "L");

//COLUMN_RIGHT_2_3
$pdf->SetXY(508, 406);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_2_3"], 0, "L");

//LINE WIDTH 2_3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 429, 535, 429);



//TOTAL_TEXT
$pdf->SetXY(420, 437);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_TEXT"], 0, "L");

//TOTAL_PRICE_3
$pdf->SetXY(499, 437);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_PRICE_3"], 0, "L");














//Zijgevels_BLOCK
$pdf->SetFillColor(238, 243, 249);
$pdf->Rect(60, 478, 475, 33, "F");

//Zijgevels_ICON
$pdf->Image('css/icons/Zijgevels.png', 76, 486, 16, 16);

//TEXT_BLOCK_4
$pdf->SetXY(100, 488);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(97, 14, $arText["TEXT_BLOCK_4"], 0, "L");



//COLUMN_LEFT
$pdf->SetXY(60, 523);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT"], 0, "L");

//COLUMN_CENTER
$pdf->SetXY(258, 523);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_CENTER"], 0, "L");

//COLUMN_RIGHT
$pdf->SetXY(508, 523);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_RIGHT"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 546, 535, 546);





//COLUMN_LEFT_1_4
$pdf->SetXY(60, 554);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_1_4"], 0, "L");

//COLUMN_CENTER_1_4
$pdf->SetXY(258, 554);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_1_4"], 0, "L");

//COLUMN_RIGHT_1_4
$pdf->SetXY(505, 554);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_1_4"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 577, 535, 577);




//COLUMN_LEFT_2_4
$pdf->SetXY(60, 585);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_2_4"], 0, "L");

//COLUMN_CENTER_2_4
$pdf->SetXY(258, 585);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_2_4"], 0, "L");

//COLUMN_RIGHT_2_4
$pdf->SetXY(508, 585);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_2_4"], 0, "L");

//LINE WIDTH 2_3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 608, 535, 608);



//TOTAL_TEXT
$pdf->SetXY(420, 616);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_TEXT"], 0, "L");

//TOTAL_PRICE_4
$pdf->SetXY(499, 616);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_PRICE_4"], 0, "L");

//CONFIG_TEXT
$pdf->SetXY(58, 788);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 10);
$pdf->MultiCell(120, 14, $arText["CONFIG_TEXT"], 0, "L");

//NICKNAME
$pdf->SetXY(182, 788);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Light", '', 10);
$pdf->MultiCell(180, 14, $arText["NICKNAME"], 0, "L");
$pdf->SetDrawColor(7, 36, 70);
$pdf->Line(185, 800, 262, 800);

//SHIRT LINE WIDTH 7
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(61, 810, 138, 810);


//BOTTOM_TEXT
$pdf->SetXY(58, 818);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 10);
$pdf->MultiCell(480, 14, $arText["BOTTOM_TEXT"], 0, "L");















$pdf->AddPage("P");

$arText["TEXT_BLOCK_3"] = "Opties";

$arText["COLUMN_LEFT_1_3"] = "Lichtstraat";
$arText["COLUMN_CENTER_1_3"] = "Vlak";
$arText["COLUMN_RIGHT_1_3"] = "$300";

$arText["COLUMN_LEFT_2_3"] = "4 leds in plafond (binnen)";
$arText["COLUMN_CENTER_2_3"] = "Beschikbaar";
$arText["COLUMN_RIGHT_2_3"] = "$50";

$arText["COLUMN_LEFT_3_3"] = "Zonwering (buiten)";
$arText["COLUMN_CENTER_3_3"] = "Beschikbaar";
$arText["COLUMN_RIGHT_3_3"] = "$90";

$arText["COLUMN_LEFT_4_3"] = "Zonwering elektrisch bedienbaar";
$arText["COLUMN_CENTER_4_3"] = "Beschikbaar";
$arText["COLUMN_RIGHT_4_3"] = "$100";

$arText["COLUMN_LEFT_5_3"] = "Vorstvrije kraan (buiten)";
$arText["COLUMN_CENTER_5_3"] = "Links";
$arText["COLUMN_RIGHT_5_3"] = "$20";

$arText["TOTAL_PRICE_2"] = "$560";



$arText["TEXT_BLOCK_4"] = "Constructieve opties";

$arText["COLUMN_LEFT_6_3"] = "Vloerverwarming";
$arText["COLUMN_CENTER_6_3"] = "Beschikbaar";
$arText["COLUMN_RIGHT_6_3"] = "2300";

$arText["COLUMN_LEFT_7_3"] = "Schilderwerk";
$arText["COLUMN_CENTER_7_3"] = "Beschikbaar";
$arText["COLUMN_RIGHT_7_3"] = "$50";

$arText["TOTAL_PRICE_3"] = "$250";

$arText["TEXT_KOSTPRIJS"] = "Totale kostprijs:";
$arText["VALUE_KOSTPRIJS"] = "$3050";
$arText["TEXT_VERKOOPPRIJS"] = "Totale verkoopprijs:";
$arText["VALUE_VERKOOPPRIJS"] = "$3520";



// TITLE_2
$pdf->SetXY(60, 51);
$pdf->SetFont("Montserrat-Regular", '', 16);
$pdf->setTextColor(7,36,70);
$pdf->MultiCell(430, 35, $arText["TITLE_2"], 0, "L");

//LOGO
$pdf->Image('css/logo.png', 475,60);


//Opties_BLOCK
$pdf->SetFillColor(238, 243, 249);
$pdf->Rect(60, 93, 475, 33, "F");

//Opties_ICON
$pdf->Image('css/icons/Opties.png', 76, 101.5, 16, 16);

//TEXT_BLOCK_3
$pdf->SetXY(100, 103);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(97, 14, $arText["TEXT_BLOCK_3"], 0, "L");



//COLUMN_LEFT
$pdf->SetXY(60, 134);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT"], 0, "L");

//COLUMN_CENTER
$pdf->SetXY(258, 134);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_CENTER"], 0, "L");

//COLUMN_RIGHT
$pdf->SetXY(508, 134);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_RIGHT"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 157, 535, 157);





//COLUMN_LEFT_1_3
$pdf->SetXY(60, 165);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_1_3"], 0, "L");

//COLUMN_CENTER_1_3
$pdf->SetXY(258, 165);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_1_3"], 0, "L");

//COLUMN_RIGHT_1_3
$pdf->SetXY(505, 165);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_1_3"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 188, 535, 188);




//COLUMN_LEFT_2_3
$pdf->SetXY(60, 196);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_2_3"], 0, "L");

//COLUMN_CENTER_2_3
$pdf->SetXY(258, 196);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_2_3"], 0, "L");

//COLUMN_RIGHT_2_3
$pdf->SetXY(512, 196);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_2_3"], 0, "L");

//LINE WIDTH 2_3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 219, 535, 219);




//COLUMN_LEFT_3_3
$pdf->SetXY(60, 227);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_3_3"], 0, "L");

//COLUMN_CENTER_3_3
$pdf->SetXY(256, 227);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_3_3"], 0, "L");

//COLUMN_RIGHT_3_3
$pdf->SetXY(512, 227);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_3_3"], 0, "L");

//LINE WIDTH 3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 250, 535, 250);




//COLUMN_LEFT_4_3
$pdf->SetXY(60, 262);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_4_3"], 0, "L");

//COLUMN_CENTER_4_3
$pdf->SetXY(256, 262);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_4_3"], 0, "L");

//COLUMN_RIGHT_4_3
$pdf->SetXY(507, 262);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_4_3"], 0, "L");

//LINE WIDTH 4
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 300, 535, 300);


//COLUMN_LEFT_5_3
$pdf->SetXY(60, 312);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_5_3"], 0, "L");

//COLUMN_CENTER_5_3
$pdf->SetXY(256, 312);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_5_3"], 0, "L");

//COLUMN_RIGHT_5_3
$pdf->SetXY(512, 312);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_5_3"], 0, "L");

//LINE WIDTH 4
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 337, 535, 337);




//TOTAL_TEXT
$pdf->SetXY(420, 353);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_TEXT"], 0, "L");

//TOTAL_PRICE_2
$pdf->SetXY(499, 353);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_PRICE_2"], 0, "L");






//Constructieve_opties_BLOCK
$pdf->SetFillColor(238, 243, 249);
$pdf->Rect(60, 380, 475, 33, "F");

//Constructieve_opties_ICON
$pdf->Image('css/icons/Constructieve_opties.png', 76, 388.5, 16, 16);

//TEXT_BLOCK_4
$pdf->SetXY(100, 390);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(157, 14, $arText["TEXT_BLOCK_4"], 0, "L");



//COLUMN_LEFT
$pdf->SetXY(60, 425);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT"], 0, "L");

//COLUMN_CENTER
$pdf->SetXY(258, 425);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_CENTER"], 0, "L");

//COLUMN_RIGHT
$pdf->SetXY(508, 425);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_RIGHT"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 448, 535, 448);





//COLUMN_LEFT_6_3
$pdf->SetXY(60, 456);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_6_3"], 0, "L");

//COLUMN_CENTER_6_3
$pdf->SetXY(258, 456);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_6_3"], 0, "L");

//COLUMN_RIGHT_6_3
$pdf->SetXY(505, 456);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_6_3"], 0, "L");

//LINE WIDTH 2
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 479, 535, 479);




//COLUMN_LEFT_7_3
$pdf->SetXY(60, 487);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_7_3"], 0, "L");

//COLUMN_CENTER_7_3
$pdf->SetXY(258, 487);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_7_3"], 0, "L");

//COLUMN_RIGHT_7_3
$pdf->SetXY(512, 487);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_7_3"], 0, "L");

//LINE WIDTH 7_3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 510, 535, 510);

//TOTAL_TEXT
$pdf->SetXY(420, 518);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_TEXT"], 0, "L");

//TOTAL_PRICE_3
$pdf->SetXY(499, 518);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["TOTAL_PRICE_3"], 0, "L");


//LINE WIDTH 8_3
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 571, 535, 571);

//TEXT_KOSTPRIJS
$pdf->SetXY(375, 583);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["TEXT_KOSTPRIJS"], 0, "L");

//VALUE_KOSTPRIJS
$pdf->SetXY(493, 583);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 14);
$pdf->MultiCell(180, 14, $arText["VALUE_KOSTPRIJS"], 0, "L");

//TEXT_VERKOOPPRIJS
$pdf->SetXY(292, 608);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Medium", '', 18);
$pdf->MultiCell(580, 14, $arText["TEXT_VERKOOPPRIJS"], 0, "L");

//VALUE_VERKOOPPRIJS
$pdf->SetXY(480, 608);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 18);
$pdf->MultiCell(180, 14, $arText["VALUE_VERKOOPPRIJS"], 0, "L");




//CONFIG_TEXT
$pdf->SetXY(58, 788);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 10);
$pdf->MultiCell(120, 14, $arText["CONFIG_TEXT"], 0, "L");

//NICKNAME
$pdf->SetXY(182, 788);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Light", '', 10);
$pdf->MultiCell(180, 14, $arText["NICKNAME"], 0, "L");
$pdf->SetDrawColor(7, 36, 70);
$pdf->Line(185, 800, 262, 800);

//SHIRT LINE WIDTH 7
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(61, 810, 138, 810);


//BOTTOM_TEXT
$pdf->SetXY(58, 818);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 10);
$pdf->MultiCell(480, 14, $arText["BOTTOM_TEXT"], 0, "L");


$pdf->Output();
?>