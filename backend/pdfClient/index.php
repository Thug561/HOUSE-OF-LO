<?php
///////////////////////////////////

$arText["PHONE"] = "085-4011608";
$arText["SITE"] = "houseoflo.nl";
$arText["NAME_SURNAME"] = "Annex Jaren ‘30";
$arText["SIZE"] = "5100 x 2250 mm";
$arText["DESCRIPTION_TITLE"] = "Gefeliciteerd!";
$arText["DESCRIPTION"] = "Sla je ontwerp op en ontvang direct per email je offerte plus de link om je\nontwerp altijd terug te kunnen kijken en aan te passen.!";

$arText["COLUMN_LEFT"] = "Optie";
$arText["COLUMN_CENTER"] = "Variatie";
$arText["COLUMN_RIGHT"] = "Prijs";

$arText["COLUMN_LEFT_1"] = "Indeling";
$arText["COLUMN_CENTER_1"] = "Een openslaande deur";
$arText["COLUMN_RIGHT_1"] = "$570";

$arText["COLUMN_LEFT_2"] = "Materiaal";
$arText["COLUMN_CENTER_2"] = "–";
$arText["COLUMN_RIGHT_2"] = "$255";

$arText["COLUMN_LEFT_3"] = "Overstek";
$arText["COLUMN_CENTER_3"] = "–";
$arText["COLUMN_RIGHT_3"] = "$90";

$arText["COLUMN_LEFT_4"] = "Lichtstraat";
$arText["COLUMN_CENTER_4"] = "Vlak";
$arText["COLUMN_RIGHT_4"] = "$210";

$arText["COLUMN_LEFT_5"] = "Leds in plafond (buiten)";
$arText["COLUMN_CENTER_5"] = "4 items";
$arText["COLUMN_RIGHT_5"] = "$25";

$arText["COLUMN_LEFT_6"] = "Leds in overstek (buiten)";
$arText["COLUMN_CENTER_6"] = "4 items";
$arText["COLUMN_RIGHT_6"] = "$25";

$arText["COLUMN_LEFT_7"] = "Vorstvrije kraan (buiten)";
$arText["COLUMN_CENTER_7"] = "1 item";
$arText["COLUMN_RIGHT_7"] = "$20";

$arText["TOTAL_TEXT"] = "Totaal";
$arText["TOTAL_PRICE"] = "$1195";

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
$pdf->SetXY(395, 53);
$pdf->Image('css/logo.png', 60,50);


//PHONE HEADER
$pdf->SetXY(387, 53);
$pdf->SetFont("Montserrat-Regular", '', 10);
$pdf->setTextColor(181,189,199);
$pdf->MultiCell(85, 14, $arText["PHONE"], 0, "C");


//LINE HEIGHT 
$pdf->SetDrawColor(181, 189, 199);
$pdf->Line(468, 64, 468, 55);


//SITE HEADER
$pdf->SetXY(463, 53);
$pdf->setTextColor(7,36,70);
$pdf->MultiCell(85, 14, $arText["SITE"], 0, "C");


//ANNEX JAREN ‘30
$pdf->SetXY(55, 101);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 16);
$pdf->MultiCell(140, 14, $arText["NAME_SURNAME"], 0, "C");


//SIZE
$pdf->SetXY(433, 102);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->setTextColor(181,189,199);
$pdf->MultiCell(110, 14, $arText["SIZE"], 0, "C");


//SCREENSHOT
$pdf->Image('css/Screenshot.png', 60, 128, 475, 239);


//BACKGROUND
$pdf->Image('css/background.png', 66, 340, 463, 105);


//DESCRIPTION_TITLE
$pdf->SetXY(92, 363);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["DESCRIPTION_TITLE"], 0, "L");

//DESCRIPTION
$pdf->SetXY(92, 382);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Light", '', 10);
$pdf->MultiCell(380, 14, $arText["DESCRIPTION"], 0, "L");





//COLUMN_LEFT
$pdf->SetXY(58, 448);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT"], 0, "L");

//COLUMN_CENTER
$pdf->SetXY(322, 448);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_CENTER"], 0, "L");

//COLUMN_RIGHT
$pdf->SetXY(507, 448);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_RIGHT"], 0, "L");

//LINE WIDTH 1
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 473, 535, 473);



//COLUMN_LEFT_1
$pdf->SetXY(58, 484);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_1"], 0, "L");

//COLUMN_CENTER_1
$pdf->SetXY(322, 484);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_1"], 0, "L");

//COLUMN_RIGHT_1
$pdf->SetXY(503, 484);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_1"], 0, "L");

//LINE WIDTH 2
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 508, 535, 508);



//COLUMN_LEFT_2
$pdf->SetXY(58, 520);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_2"], 0, "L");

//COLUMN_CENTER_2
$pdf->SetXY(322, 520);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_2"], 0, "L");

//COLUMN_RIGHT_2
$pdf->SetXY(503, 520);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_2"], 0, "L");

//LINE WIDTH 2
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 543, 535, 543);




//COLUMN_LEFT_3
$pdf->SetXY(58, 556);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_3"], 0, "L");

//COLUMN_CENTER_3
$pdf->SetXY(322, 556);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_3"], 0, "L");

//COLUMN_RIGHT_3
$pdf->SetXY(508, 556);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_3"], 0, "L");

//LINE WIDTH 2
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 578, 535, 578);




//COLUMN_LEFT_4
$pdf->SetXY(58, 592);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(140, 14, $arText["COLUMN_LEFT_4"], 0, "L");

//COLUMN_CENTER_4
$pdf->SetXY(322, 592);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_4"], 0, "L");

//COLUMN_RIGHT_4
$pdf->SetXY(503, 592);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_4"], 0, "L");

//LINE WIDTH 4
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 618, 535, 618);




//COLUMN_LEFT_5
$pdf->SetXY(58, 630);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_5"], 0, "L");

//COLUMN_CENTER_5
$pdf->SetXY(322, 630);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_5"], 0, "L");

//COLUMN_RIGHT_5
$pdf->SetXY(508, 630);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_5"], 0, "L");

//LINE WIDTH 5
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 654, 535, 654);



//COLUMN_LEFT_6
$pdf->SetXY(58, 665);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_6"], 0, "L");

//COLUMN_CENTER_6
$pdf->SetXY(322, 665);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_6"], 0, "L");

//COLUMN_RIGHT_6
$pdf->SetXY(508, 665);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_6"], 0, "L");

//LINE WIDTH 6
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 693, 535, 693);



//COLUMN_LEFT_7
$pdf->SetXY(58, 704);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_LEFT_7"], 0, "L");

//COLUMN_CENTER_7
$pdf->SetXY(322, 704);
$pdf->setTextColor(181,189,199);
$pdf->SetFont("Montserrat-Light", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_CENTER_7"], 0, "L");

//COLUMN_RIGHT_7
$pdf->SetXY(508, 704);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 12);
$pdf->MultiCell(180, 14, $arText["COLUMN_RIGHT_7"], 0, "L");

//LINE WIDTH 7
$pdf->SetDrawColor(238, 240, 242);
$pdf->Line(60, 732, 535, 732);

//TOTAL_TEXT
$pdf->SetXY(430, 744);
$pdf->setTextColor(7,36,70);
$pdf->SetFont("Montserrat-Regular", '', 16);
$pdf->MultiCell(180, 14, $arText["TOTAL_TEXT"], 0, "L");

//TOTAL_PRICE
$pdf->SetXY(490, 744);
$pdf->setTextColor(213,170,83);
$pdf->SetFont("Montserrat-Medium", '', 16);
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

$pdf->Output();
?>