var numbers = [799,68,151,123,691,587,477,184,
			   321,51,369,132,831,904,930,347,
			   796,747,324,681,385,718,817,405,
			   86,512,704,867,669,780,19,27,
			   851,73,135,963,892,766,343,106];
/**
 *  Lookup table for numbers
 */ 
function getPrecision(num) {
	switch (num) {
    case 799: return 799.0117391528; 	break;
    case 68:  return 67.6117071748; 	break;
    case 151: return 151.1450925163;	break;
    case 123: return 122.9384045928;	break;
    case 691: return 690.7713027857;	break;
    case 587: return 586.5519069401;    break;
    case 477: return 477.0436376120;	break;
    case 184: return 183.9958663590;	break;
    case 321: return 321.0038163735;	break;
    case 51:  return 51.4850317134;		break;
    case 369: return 369.2540390179;	break;
    case 132: return 132.0876380080;	break;
    case 831: return 831.2688107371;	break;
    case 904: return 903.7377462704;	break;
    case 930: return 929.6904557832;	break;
    case 347: return 347.1653250978;	break;
    case 796: return 796.2912984161;	break;
    case 747: return 746.9178252059;	break;
    case 324: return 323.8628850620;	break;
    case 681: return 680.8672495000;	break;
    case 385: return 384.7250708680;	break;
    case 718: return 717.9838015155;	break;
    case 817: return 817.3944887968;	break;
    case 405: return 404.8532995549;	break;
    case 86:  return 86.4226469966;		break;
    case 512: return 512.4098985191;	break;
    case 704: return 703.6088294220;	break;
    case 867: return 867.2641253552;	break;
    case 669: return 669.1837194017;	break;
    case 780: return 779.9973373557;	break;
    case 19:  return 19.1904990290;		break;
    case 27:  return 27.2646233344;		break;
    case 851: return 851.0183942378;	break;
    case 73:  return 73.2932073182;		break;
    case 135: return 135.1349378191;	break;
    case 963: return 962.5462696112;	break;
    case 892: return 892.4619716179;	break;
    case 766: return 765.8428532565;	break;
    case 343: return 343.1066366002;    break;
    case 106: return 105.8528413349;    break;
  }
};
var counties = ["Carlow","Cavan","Clare","Cork City","Cork County",
			    "Donegal","Dublin 1","Dublin 2","Dublin 3","Dublin 4",
			    "Dublin 5","Dublin 6","Dublin 6W","Dublin 7","Dublin 8",
			    "Dublin 9","Dublin 10","Dublin 11","Dublin 12","Dublin 13",
			    "Dublin 14","Dublin 15","Dublin 16","Dublin 17","Dublin 18",
			    "Dublin 20","Dublin 22","Dublin 24","Dublin County",
			    "Galway City","Galway County","Kerry","Kildare",
			    "Kilkenny","Laois","Leitrim","Limerick City",
		  	    "Limerick County","Longford","Louth","Mayo","Meath",
			    "Monaghan","Offaly","Roscommon","Sligo","Tipperary North",
			    "Tipperary South","Waterford City","Waterford County",
			    "Westmeath","Wexford","Wicklow"];
			    
/**
 * Returns an array of schools based on the county provided.
 */
function returnArrayOfSchools( county ) {
	switch (county) {
    case "Carlow": return ["Borris Vocational School, Borris","Carlow Vocational School, Carlow",
						   "Coláiste Eoin, Hacketstown","Gaelcholáiste Cheatharlach, Easca",
						   "Presentation / De La Salle College, Muine Bheag","Presentation College, Carlow",
						   "St Mary's Academy CBS, Carlow","St Mary's Knockbeg College, Knockbeg",
						   "St. Leo's College, Carlow","Tullow Community School, Tullow",
						   "Vocational School Muine Bheag, Muine Bheag"];					
	break;
	case "Cavan": return  ["Bailieborough Community School, Bailieborough","Breifne College, Cavan",
						   "Cavan Institute, Cavan","Loreto College, Cavan","Royal School Cavan, Cavan",
						   "St Aidans Comprehensive School, Cootehill","St Bricin's Vocational School, Belturbet",
						   "St Clare's College, Ballyjamesduff","St Patrick's College, Cavan",
						   "St. Mogue's College, Belturbet","Virginia College, Virginia"]; 	
	break;
	case "Clare": return  ["Coláiste Mhuire, Ennis","Ennis Community College, Ennis",
						   "Ennistymon Vocational School, Ennis","Kilrush Community School, Kilrush",
						   "Mary Immaculate Secondary School, Lisdoonvarna","Meánscoil Na mBráithre, Ennistymon",
						   "Rice College, Ennis","Scariff Community College, Scariff","Scoil Mhuire, Ennistymon",
						   "Shannon Comprehensive School, Shannon","St Anne's Community College, Killaloe",
						   "St Caimin's Community School, Tullyvarraga","St Flannan's College, Ennis",
						   "St John Bosco Community College, Kildysart","St Joseph's Community College, Kilkee",
						   "St Michael's Community College, Kilmihill","St. Joseph's Secondary School, Tulla",
						   "St. Joseph's Secondary School, Milown Malbay"];					
	break;
	case "Cork City": return ["Ashton School, Cork","Bishopstown Community School, Cork",
						   "Christ King Girls' Secondary School, Cork","Christian Brothers College, Cork",
						   "Coláiste An Spioraid Naoimh, Cork","Coláiste Chríost Rí, Cork",
						   "Coláiste Daibhéid, Corcaigh","Colaiste Stiofán Naofa, Cork","Cork College Of Commerce, Cork",
						   "Deerpark C.B.S., Cork","Douglas Community School, Cork","Gaelcholáiste Mhuire, Corcaigh",
						   "Mayfield Community School, Cork","Mount Mercy College, Cork","Nagle Community College, Cork",
						   "North Monastery Secondary School, Cork","North Presentation Secondary School, Cork",
						   "Presentation Brothers College, Cork","Presentation Secondary School, Cork",
						   "Regina Mundi College, Cork","Scoil Mhuire, Cork","St Aloysius School, Cork",
						   "St John's Central College, Cork","St Patricks College, Cork",
						   "St Vincent's Secondary School, Cork","St. Angela's College, Cork",
						   "Terence Mac Swiney Community College, Cork","Ursuline Secondary School, Cork"];
	break;
	case "Cork County": return ["Árdscoil Phobal Bheanntrai, Bantry","Árdscoil Uí Urmoltaigh, Droichead na Bandan",
						   "Ballincollig Community School, Ballincollig","Bandon Grammar School, Bandon",
						   "Beara Community School, Beara","Boherbue Comprehensive School, Mallow",
						   "Carrigaline Community School, Carrigaline","Christian Brothers Secondary School, Mitchelstown",
						   "Christian Brothers Secondary School, Midleton","Clonakilty Community College, Clonakilty",
						   "Coachford College, Coachford","Cobh Community College, Cobh","Coláiste an Chraoibhin, Fermoy",
						   "Coláiste An Chroí Naofa, Carraig na bhFear","Colaiste An Phiarsaigh, Gleann Maghair",
						   "Coláiste Choilm, Ballincollig","Coláiste Cholmáin, Mainistir Fhearmuí",
						   "Colaiste Ghobnatan, Baile Mhic Ire","Colaiste Muire, Crosshaven","Coláiste Muire, Cobh",
						   "Coláiste Na Toirbhirte, Bandon","Colaiste Pobail Naomh Mhuire, Cill na Mullach",
						   "Colaiste Treasa, Kanturk","Davis College, Mallow","De La Salle College, Macroom",
						   "Glanmire Community College, Glanmire","Kinsale Community School, Kinsale",
						   "Loreto Secondary School, Fermoy","Mannix College, Charleville",
						   "Maria Immaculata Community College, Dunmanway","McEgan College, Macroom",
						   "Mercy Heights Secondary School, Skibbereen","Midleton College, Midleton",
						   "Millstreet Community School, Millstreet Town","Mount St Michael, Rosscarbery",
						   "Nagle Rice Secondary School, Doneraile","Patrician Academy, Mallow",
						   "Pobalscoil na Tríonóide, Youghal","Presentation Secondary School, Mitchelstown",
						   "Rossa College, Skibbereen","Sacred Heart Secondary School, Clonakilty",
						   "Schull Community College, Schull","Scoil Mhuire, Kanturk","Scoil Mhuire, Béal Atha an Ghaorth",
						   "Scoil Mhuire gan Smal, Blarney","Scoil na mBráithre Chríostaí, Charleville",
						   "St Aidan's Community College, Dublin Hill","St Aloysius College, Carrigtwohill",
						   "St Colman's Community College, Midleton","St Fachtna's - De La Salle College, Skibbereen",
						   "St Fanahan's College, Mallow","St Francis Capuchin College, Rochestown",
						   "St Goban's College, Bantry","St Mary's High School, Midleton","St Mary'S Secondary School, Macroom",
						   "St Mary's Secondary School, Mallow","St Peter's Community School, Passage West",
						   "St. Brogan's College, Bandon","St. Mary's Secondary School, Charleville"];
	break;
	case "Donegal": return ["Abbey Vocational School, Donegal Town","Carndonagh Community School, Lifford",
						   "Carrick Vocational School, Carrick","Coláiste Ailigh, Highroad","Coláiste Cholmcille, Ballyshannon",
						   "Coláiste Phobail Cholmcille, Doirí Beaga","Crana College, Buncrana","Deele College, Lifford",
						   "Errigal College, Letterkenny","Finn Valley College, Stranorlar",
						   "Gaelcholaiste Chineál Eoghain, Bun Chranncha","Gairm Scoil Chú Uladh, Leifear",
						   "Gairmscoil Mhic Diarmada, Árainn Mhór","Loreto Community School, Milford",
						   "Loreto Convent, Letterkenny","Magh Ene College, Bundoran","Moville Community College, Moville",
						   "Mulroy College, Letterkenny","Pobalscoil Chloich Cheannfhaola, Leitir Ceanainn",
						   "Pobalscoil Ghaoth Dobhair, Leitir Ceannain","Rosses Community School, Dungloe",
						   "Scoil Mhuire Secondary School, Buncrana","St Columbas College, Stranorlar",
						   "St Columba's Comprehensive School, Glenties","St Eunan's College, Letterkenny",
						   "St. Catherine's Vocational School, Killybegs","The Royal and Prior School, Raphoe"];
	break;
	case "Dublin 1": return ["Belvedere College S.J, Dublin 1","Larkin Community College, Dublin 1",
						   "Mount Carmel Secondary School, Dublin 1","O'Connell School, Dublin 1"];
	break;
	case "Dublin 2": return ["C.B.S. Westland Row, Dublin 2","Catholic University School, Dublin 2",
						   "Loreto College, Dublin 2"];
	break;
	case "Dublin 3": return ["Holy Faith Secondary School, Dublin 3","Marino College, Dublin 3",
							 "Mount Temple Comprehensive School, Dublin 3","St Josephs C.B.S., Dublin 3"];
	break;
	case "Dublin 4": return ["John Scottus Secondary School, Dublin 4","Marian College, Dublin 4",
							 "Muckross Park College, Dublin 4","St Conleths College, Dublin 4",
							 "St Michaels College, Dublin 4","Technical Institute, Dublin 4",
							 "The Teresian School, Dublin 4"];
	break;
	case "Dublin 5": return ["Árdscoil La Salle, Dublin 5","Chanel College, Dublin 5",
							 "Manor House School, Dublin 5","Mercy College Coolock, Dublin 5",
							 "St Marys Secondary School, Dublin 5","St Pauls College, Dublin 5",
							 "St. David's C.B.S., Dublin 5"];
	break;
	case "Dublin 6": return ["Alexandra College, Dublin 6","Gonzaga College, Dublin 6",
							 "Rathmines College, Dublin 6","Sandford Park School Ltd, Dublin 6",
							 "St Louis High School, Dublin 6","St Marys College, Dublin 6",
							 "Stratford College, Dublin 6","The High School, Dublin 6"];
	break;
	case "Dublin 6W": return ["Prensentation College, Dublin 6W","Our Ladys School, Dublin 6W",
							  "St Mac Dara's Community College, Dublin 6W","Templeogue College, Dublin 6W",
							  "Terenure College, Dublin 6W"];
	break;
	case "Dublin 7": return ["Coláiste Éanna, Dublin 7","Coláiste Mhuire, Baile Atha Cliath 7",
							 "St Declan's College, Dublin 7","St Dominics College, Dublin 7",
							 "St Josephs Secondary School, Dublin 7","St Pauls C.B.S., Dublin 7"];
	break;
	case "Dublin 8": return ["C.B.S. James Street, Dublin 8","Liberties College, Dublin 8",
							 "Mercy Secondary School, Dublin 8","Presentation College, Dublin 8",
							 "St Patricks Cathedral G.S, Dublin 8","Christian Brothers, Dublin 8"];
	break;
	case "Dublin 9": return ["Scoil Chaitriona, Baile Átha Cliath 9","Trinity Comprehensive School, Dublin 9",
							 "Árdscoil Rís, Dublin 9","Dominican College, Dublin 9",
							 "Margaret Aylward Community College, Dublin 9","Maryfield College, Dublin 9",
							 "Our Lady Of Mercy College, Dublin 9","Plunket College, Dublin 9",
							 "Rosmini Community School, Dublin 9","St. Aidan's C.B.S., Dublin 9",
							 "Whitehall House Senior College, Dublin 9"];
	break;
	case "Dublin 10": return ["Caritas College, Dublin 10","Kylemore College, Dublin 10",
							  "Saint Dominic's Secondary School, Dublin 10","St Johns College De La Salle, Dublin 10"];
	break;
	case "Dublin 11": return ["Beneavin De La Salle College, Dublin 11","Coláiste Eoin, Dublin 11","Mater Christi, Dublin 11",
							  "Patrician College, Dublin 11","St Kevins College, Dublin 11",
							  "St Mary's Secondary School, Dublin 11","St Michaels Secondary School, Dublin 11",
							  "St Vincents C.B.S. Glasnevin, Dublin 11"];
	break;
	case "Dublin 12": return ["Assumption Secondary School, Dublin 12","Greenhills College, Dublin 12",
							  "Loreto College, Dublin 12","Meanscoil Chroimghlinne, Dublin 12","Meanscoil Iognáid Rís, Dublin 12",
							  "Our Lady Of Mercy Secondary School, Dublin 12","Pearse College - Colaiste an Phiarsaigh, Dublin 12",
							  "Rosary College, Dublin 12","St Pauls Secondary School, Dublin 12","St. Kevins College, Dublin 12"];
	break;
	case "Dublin 13": return ["Gealcholáiste Reachrann, Baile Atha Cliath 13","Grange Community College, Dublin 13",
							  "Pobalscoil Neasáin, Dublin 13","Santa Sabina Dominican College, Dublin 13",
							  "St Marys Secondary School, Dublin 13","St. Fintan's High School, Dublin 13",
							  "Sutton Park School, Dublin 13","The Donahies Community School, Dublin 13"];
	break;
	case "Dublin 14": return ["Da La Salle College, Dublin 14","Jesus and Mary College, Dublin 14",
							  "Loreto High School, Dublin 14","Mount Anville Secondary School, Dublin 14",
							  "Notre Dame Secondary School, Dublin 14","St Kilian's Deutsche Schule, Dublin 14"];
	break;
	case "Dublin 15": return ["Blakestown Community School, Dublin 15","Castleknock College, Dublin 15",
							  "Castleknock Community College, Dublin 15","Colaiste Pobail Setanta, Dublin 15",
							  "Hartstown Community School, Dublin 15","Luttrellstown Community College, Dublin 15",
							  "Riversdale Community College, Dublin 15","Scoil Phobail Chuil Mhin, Baile Atha Cliath 15"];
	break;
	case "Dublin 16": return ["Ballinteer Community School, Dublin 16","Rockbrook Park School, Dublin 16",
							  "Sancta Maria College, Dublin 16","St Columba's College, Dublin 16",
							  "St. Colmcille's Community School, Dublin 16","St. Tiernan's Community School, Dublin 16",
							  "Wesley College, Dublin 16","Colaiste Eanna, Dublin 16"];
	break;
	case "Dublin 17": return ["Coláiste Dhúlaigh, Dublin 17"];
	break;
	case "Dublin 18": return ["Cabinteely Community School, Dublin 18","Loreto College Foxrock, Dublin 18",
							  "St Laurence College, Dublin 18"];
	break;
	case "Dublin 20": return ["Mount Sackville Secondary School, Dublin 20","Phobailscoil Iosolde, Dublin 20",
							  "The Kings Hospital, Dublin 20"];
	break;
	case "Dublin 22": return ["Coláiste Bríde, Dublin 22","Coláiste Chilliain, Baile Atha Cliath 22",
							  "Collinstown Park Community College, Dublin 22","Deansrath Community College, Dublin 22",
							  "Moyle Park College, Dublin 22","St. Kevin's Community College, Dublin 22"];
	break;
	case "Dublin 24": return ["Coláiste de hÍde, Baile Atha Cliath 24","Firhouse Community College, Dublin 24",
							  "Killinarden Community School, Dublin 24","Mount Seskin Community College, Dublin 24",
							  "Old Bawn Community School, Dublin 24","St Aidan's Community School, Dublin 24",
							  "St Marks Community School, Dublin 24","Tallaght Community School, Dublin 24"];
	break;
	case "Dublin County": return ["Adamstown Community College, Adamstown","Ardgillan Community College, Balbriggan",
							  "Balbriggan Community College, Balbriggan","Blackrock College, Blackrock",
							  "Christian Brothers College, Dun Laoghaire","Clonkeen College, Blackrock",
							  "Coláiste Choilm, Swords","Coláiste Cois Life, Leamhcán","Coláiste Eoin, Blackrock",
							  "Coláiste Íosagáin,Blackrock","Coláiste Phádraig CBS, Lucan","Dominican College, Blackrock",
							  "Donabate Community College, Donabate","Dun Laoghaire College of, Dun Laoghaire",
							  "Fingal Community College, Swords","Holy Child Community School, Sallynoggin",
							  "Holy Child Secondary School, Killiney","Holy Family Community School, Rathcoole",
							  "Loreto Abbey Secondary School, Dalkey","Loreto College, Swords",
							  "Loreto Secondary School, Balbriggan","Lucan Community College, Lucan",
							  "Malahide Community School, Malahide","Newpark Comprehensive School, Blackrock",
							  "Oatlands College, Mount Merrion","Portmarnock Community School, Portmarnock",
							  "Rathdown School, Glenageary","Rockford Manor Secondary School, Blackrock",
							  "Rosemont School, Blackrock","Senior College Dunlaoghaire, Dun Laoghaire",
							  "Skerries Community College, Skerries","St Andrews College, Blackrock",
							  "St Benildus College, Blackrock","St Finians Community College, Swords",
							  "St Joseph Of Cluny, Killiney","St Josephs College, Lucan","St Joseph's Secondary School, Rush",
							  "St Raphaela's Secondary School, Stillorgan","Willow Park School, Blackrock"];
	break;
	case "Galway City": return ["Coláiste Einde, Galway","Coláiste Iognáid S.J., Gaillimh",
							  "Coláiste na Coiribe, Gaillimh","Dominican College, Galway","Galway Community College, Galway",
							  "Galway Technical Institute, Galway","Jesus & Mary Secondary School, Galway",
							  "Meán Scoil Mhuire, Galway","Presentation Secondary School, Galway",
							  "St Joseph's College, Galway","St. Mary's College, Galway"];
	break;
	case "Galway County": return ["Archbishop McHale College, Tuam","Ardscoil Mhuire, Ballinasloe",
							  "Calasanctius College, Oranmore","Coláiste an Chreagáin, Ballinasloe",
							  "Colaiste Cholmcille, Indreabhán","Colaiste Chroi Mhuire, An Spideal",
							  "Coláiste Ghobnait, Oileáin Arann","Coláiste Mhuire, Ballygar",
							  "Coláiste Naomh Feichín, Corr na Mona","Colaiste Sheosaimh, Beál Áth na Slua",
							  "Dunmore Community School, Dunmore","Gaelcholaiste an Eachréidh, Athenry",
							  "Gairm Scoil Chilleáin Naofa, Ballinasloe","Gairmscoil Éinne Oileain Arann, Árainn",
							  "Gairmscoil Mhuire, Athenry","Gairmscoil na bPiarsach, Ros Muc",
							  "Gleanamaddy Community School, Glenamaddy","Gort Community School, Gort",
							  "Holy Rosary College, Mountbellew","Mercy College, Woodford","Portumna Community School, Portumna",
							  "Presentation College, Athenry","Presentation College, Headford","Presentation College, Tuam",
							  "Scoil Chuimsitheach Chiaráin, An Cheathrú Rua","Scoil Phobail, Clifden",
							  "Scoil Phobail Mhic Dara, Carna","Seamount College, Kinvara",
							  "St Brigids Vocational School, Loughrea","St Pauls, Oughterard",
							  "St Raphaels College, Loughrea","St. Brigid's School, Tuam","St. Cuan's College, Ballinasloe",
							  "St. Jarlaths College, Tuam"];
	break;
	case "Kerry": return ["C.B.S. Secondary School, Tralee","Castleisland Community College, Castleisland",
							  "Causeway Comprehensive School, Causeway","Coláiste Bhréanainn, Cill Airne",
							  "Coláiste Íde, Daingean Uí Chúis","Coláiste na Sceilge, Caherciveen",
							  "Community College Killorglin, Killorglin","Comprehensive School, Listowel",
							  "Gaelcholáiste Chiarraí, Trá Lí","Killarney Community College, Killarney",
							  "Listowel Community College, Listowel","Mean Scoil Naomh Ioseph, Castleisland",
							  "Meanscoil Nua an Leith Triuigh, Caislean Ghriaire","Meanscoil Phadraig Naofa, Castleisland",
							  "Mercy Secondary School, Tralee","Pobalscoil Chorca Dhuibhne, An Daingean",
							  "Pobalscoil Inbhear Sceine, Kenmare","Presentation Secondary School, Listowel",
							  "Presentation Secondary School, Tralee","Presentation Secondary School, Killarney",
							  "Scoil Phobail Sliabh Luachra, Rathmore","St. Brigid's Secondary School, Killarney",
							  "St. Joseph's Secondary School, Ballybunion","St. Michael's College, Listowel",
							  "The Intermediate School, Killorglin","Tralee Community College, Tralee"];
	break;
	case "Kildare": return ["Árdscoil na Trionóide, Athy","Ardscoil Rath Iomgháin, Rathangan",
							  "Athy Community College, Athy","Clongowes Wood College, Naas",
							  "Colaiste Lorcain, Castledermot","Coláiste Naomh Mhuire, Naas",
							  "Confey Community College, Leixlip","Cross And Passion College, Kilcullen",
							  "Curragh Post-Primary School, Curragh","Gael Cholaiste Chill Dara, An Curragh",
							  "Holy Family Secondary School, Newbridge","Leixlip Community School, Leixlip",
							  "Maynooth Post Primary School, Maynooth","Meánscoil Iognáid Ris, Naas",
							  "Newbridge College, Newbridge","Patrician Secondary School, Newbridge",
							  "Piper's Hill College, Naas","Presentation Secondary School, Kildare Town",
							  "Salesian College, Celbridge","Scoil Dara, Kilcock","Scoil Mhuire Community School, Naas",
							  "St Conleth's Community College, Newbridge","St Farnan's Post Primary School, Prosperous",
							  "St Joseph's Academy, Kildare Town","St Pauls Secondary School, Monasterevin",
							  "St Wolstan's Community School, Celbridge","Vocational School, Kildare Town"];
	break;
	case "Kilkenny": return ["Abbey Community College, Ferrybank","City Vocational School, Kilkenny",
							  "Coláiste Cois Siúire, Mooncoin","Coláiste Éamann Rís, Callan","Coláiste Mhuire, Johnstown",
							  "Coláiste Pobail Osraí, Cill Chainnigh","Community School, Castlecomer",
							  "Duiske College, Graignamanagh","Grennan College, Thomastown","Kilkenny College, Kilkenny",
							  "Loreto Secondary School, Kilkenny","Meánscoil na mBráithre Criostaí, Cill Chainnigh",
							  "Presentation Secondary School, Loughboy","Scoil Aireagail, Ballyhale","St Kieran's College, Kilkenny",
							  "St. Brigid's College, Callan"];
	break;
	case "Laois": return ["Clonaslee Vocational School, Clonaslee","Coláiste Íosagáin, Portarlington","Community School, Mountmellick",
							  "Heywood Community School, Portlaoise","Mountrath Community School, Mountrath",
							  "Portlaoise College, Portlaoise","Scoil Chriost Ri, Portlaoise","St Fergal's College, Rathdowney",
							  "St. Mary's C.B.S., Portlaoise"];
	break;
	case "Leitrim": return ["Ballinamore Post Primary Schools, Ballinamore","Carrigallen Vocational School, Carrigallen",
							  "Community School, Carrick-On-Shannon","Lough Allen College, Drumkeerin",
							  "Mohill Community College, Mohill","St. Clare's Comprehensive School, Manorhamilton",
							  "Vocational School, Drumshambo","Vocational School, Carrick-On-Shannon"];
	break;
	case "Limerick City": return ["Ardscoil Mhuire, Limerick","Ardscoil Ris, Limerick","Colaiste Mhichil, Limerick",
							  "Crescent College Comprehensive, Limerick","Gaelcholaiste Luimnigh, Luimneach",
							  "Laurel Hill Coláiste FCJ, Luimneach","Laurel Hill Secondary School FCJ, Limerick",
							  "Limerick Senior College, Limerick","Presentation Secondary School, Limerick",
							  "Salesian Secondary School, Limerick","Scoil Carmel, Limerick","St Clements College, Limerick",
							  "St Endas Community School, Limerick","St Munchin's College, Limerick",
							  "St Nessan's Community College, Limerick","Villiers Secondary School, Limerick"];
	break;
	case "Limerick County": return ["Árd Scoil Mhuire FCJ, Bruff","Castletroy College, Castletroy","Colaiste Chiarain, Croom",
							  "Coláiste Ióasef, Kilmallock","Colaiste Mhuire, Askeaton","Colaiste na Trocaire, Rathkeale",
							  "Coláiste Pobail Mhichíl, Cappamore","Desmond College, Newcastle West","Glenstal Abbey School, Murroe",
							  "Hazelwood College, Dromcollogher","John The Baptist Community School, Hospital",
							  "Salesian Secondary College, Pallaskenry","Scoil Mhuire & Íde, Newcastle West",
							  "Scoil Pól, Kilfinane","St Fintan's C.B.S, Doon","St Ita's College, Abbeyfeale",
							  "St Joseph's Secondary School, Doon","St. Jospeh's Sec. School, Abbeyfeale",
							  "Vocational School, Abbeyfeale"];
	break;
	case "Longford": return ["Ardscoil Phadraig, Granard","Ballymahon Vocational School, Ballymahon","Cnoc Mhuire, Granard",
							  "Lanesboro Community College, Lanesboro","Meán Scoil Muire, Longford Town",
							  "Mercy Secondary School, Ballymahon","Moyne Community School, Moyne","St. Mel's College, Longford",
							  "Templemichael College, Templemichael"];
	break;
	case "Louth": return ["Ardee Community School, Ardee","Bush Post Primary School, Dundalk","Colaiste Rís, Dún Dealgan",
							  "De La Salle College, Dundalk","Drogheda Grammar School, Drogheda","Dundalk Grammar School, Dundalk",
							  "Ó Fiaich College, Dundalk","Our Ladys College, Drogheda","Sacred Heart Secondary School, Drogheda",
							  "Scoil Ui Mhuiri, Dunleer","St Louis Secondary School, Dundalk","St Mary's College, Dundalk",
							  "St Mary's Diocesan School, Drogheda","St Oliver's Community College, Drogheda",
							  "St Vincent's Secondary School, Dundalk","St. Joseph's C.B.S., Drogheda"];
	break;
	case "Mayo": return ["Balla Secondary School, Castlebar","Ballinrobe Community School, Ballinrobe",
							  "Ballyhaunis Community School, Ballyhaunis","Carrowbeg College, Westport",
							  "Coláiste Cholmáin, Claremorris","Colaiste Chomain, Ballina","Coláiste Mhuire, Tuar Mhic Éadaigh",
							  "Davitt College, Castlebar","Jesus & Mary Secondary School, Crossmolina","McHale College, Westport",
							  "Mount St Michael, Claremorris","Moyne College, Ballina","Naomh Iosaef, Caisleán An Bharraig",
							  "Our Lady's Secondary School, Belmullet","Rice College, Westport","Sacred Heart School, Westport",
							  "Sancta Maria College, Louisburgh","Scoil Damhnait, Acaill","Scoil Muire Agus Padraig, Swinford",
							  "St Joseph's Secondary School, Foxford","St Josephs Secondary School, Charlestown",
							  "St Louis Community School, Kiltimagh","St Muredachs College, Ballina",
							  "St. Brendan's College, Belmullet","St. Geralds College, Castlebar",
							  "St. Mary's Secondary School, Ballina","St. Patrick's College, Killala","St. Tiernan's College, Ballina"];
	break;
	case "Meath": return ["Ashbourne Community School, Ashbourne","Athboy Community School, Athboy",
							  "Beaufort College, Navan","Boyne Community School, Trim","Colaiste na hInse, Bettystown",
							  "Coláiste Pobail Rath Cairn, Athboy","Community College, Dunshaughlin","Eureka Secondary School, Kells",
							  "Franciscan College, Gormanstown","Loreto Secondary School, Navan","O'Carolan College, Nobber",
							  "Ratoath College, Ratoath","Scoil Mhuire, Trim","St Ciaran's Community School, Kells",
							  "St Oliver Post Primary, Oldcastle","St Patrick's Classical School, Navan",
							  "St Peter's College, Dunboyne","St. Fintinas Post Primary School, Enfield",
							  "St. Joseph's Secondary School, Navan"];
	break;
	case "Monaghan": return ["Ballybay Community College, Ballybay","Beech Hill College, Monaghan","Castleblayney College, Castleblayney",
							  "Coláiste Oiriall, Muineachán","Inver College, Carrickmacross","Largy College, Clones",
							  "Monaghan Collegiate School, Monaghan","Our Lady's Secondary School, Castleblayney",
							  "Patrician High School, Carrickmacross","St Louis Secondary School, Carrickmacross",
							  "St. Louis Secondary School, Monaghan","St. Macartan's College, Monaghan"];
	break;
	case "Offaly": return ["Ard Scoil Chiarain Naofa, Clara","Colaiste Choilm, Tulach Mhor","Colaiste Na Sionna, Banagher",
							  "Coláiste Naomh Cormac, Kilcormac","Gallen Community School, Ferbane",
							  "Killina Presentation Secondary School, Tullamore","Oaklands Community College, Edenderry",
							  "Sacred Heart Secondary School, Tullamore","St Mary's Secondary School, Edenderry",
							  "St.Brendan's Community School, Birr","Tullamore College, Tullamore"];
	break;
	case "Roscommon": return ["Abbey Community College, Boyle","C.B.S. Roscommon, Roscommon","Castlerea Community School, Castlerea",
							  "Elphin Community College, Castlerea","Roscommon Community School, Roscommon",
							  "Scoil Muire gan Smal, Roscommon","Scoil Mhuire, Strokestown","St Nathy's College, Ballaghaderreen"];
	break;
	case "Sligo": return ["Ballinode College, Ballinode","Coláiste Iascaigh, Easkey","Colaiste Mhuire, Ballymote",
							  "Coola Post Primary School, Via Boyle","Corran College, Ballymote","Grange Vocational School, Grange",
							  "Jesus & Mary Secondary School, Enniscrone","Mercy College, Sligo",
							  "North Connaught College, Tubbercurry","Sligo Grammar School, Sligo",
							  "St Attracta's Community School, Tubbercurry","St Marys College, Ballysadare",
							  "Summerhill College, Sligo","Ursuline College, Finisklin"];
	break;
	case "Tipperary North": return ["Borrisokane Community College, Borrisokane","C.B.S. Thurles, Thurles","Cistercian College, Roscrea",
							  "Coláiste Mhuire Co-Ed, Thurles","Colaiste Phobáil Ros Cré, Roscrea","Nenagh Vocational School, Nenagh",
							  "Our Ladys Secondary School, Templemore","Presentation Secondary School, Thurles",
							  "St Joseph's College, Newport","St Josephs College, Thurles","St Mary's Secondary School, Nenagh",
							  "St. Joseph's C.B.S, Nenagh","St. Mary's Secondary School, Newport","St. Sheelan's College, Templemore",
							  "Ursuline Secondary School, Thurles"];
	break;
	case "Tipperary South": return ["Árdscoil na mBráithre, Clonmel","C.B.S., Carrick-On-Suir","Cashel Community School, Cashel",
							  "Central Technical Institute, Clonmel","Colaiste Dun Iascaigh, Cahir","Comeragh College, Greenside",
							  "Loreto Secondary School, Clonmel","Patrician Presentation, Fethard",
							  "Presentation Secondary School, Clonmel","Rockwell College, Cashel",
							  "Scoil Mhuire, Carrick-On-Suir","Scoil Ruain, Thurles","St. Alibe's School, Tippearary Town",
							  "St. Anne's Secondary School, Tipperary Town","The Abbey School, Tipperary Town"];
	break;
	case "Waterford City": return ["C.B.S. Mount Sion, Waterford","De La Salle College, Waterford",
							  "Gaelcholáiste Phort Lairge, Waterford","Newtown School, Waterford",
							  "Our Lady of Mercy Secondary School, Waterford","Presentation Secondary School, Waterford",
							  "St Angela's, Waterford","St Paul's Community College, Waterford City","Waterpark College, Waterford"];
	break;
	case "Waterford County": return ["Ard Scoil na nDeise, Dungarvan","Blackwater Community School, Lismore",
							  "C.B.S. Tramore, Tramore","Coláiste Chathail Naofa, Dungarvan","Meánscoil San Nioclás, Rinn O gCuanach",
							  "Scoil na mBraithre, Dungarvan","St Augustines College, Dungarvan",
							  "St Declan's Community College, Kilmacthomas","Stella Maris, Tramore"];
	break;
	case "Westmeath": return ["Athlone Community College, Athlone","Castlepollard Community College, Mullingar",
							  "Colaiste Mhuire, Mullingar","Columba College, Killucan","Loreto College, Mullingar",
							  "Marist College, Athlone","Meán Scoil an Chlochair, Mullingar","Moate Community School, Moate",
							  "Mullingar Community College, Mullingar","Our Lady's Bower, Athlone",
							  "St Aloysius College, Athlone","St Finian's College, Mullingar","St Joseph's College, Athlone",
							  "St Joseph's Secondary School, Rochfortbridge","Wilson's Hospital School, Multyfarnham"];
	break;
	case "Wexford": return ["Bridgetown Vocational College, Bridgetown","Christian Brothers Secondary School, Wexford",
							  "Christian Brothers Secondary School, New Ross","Coláiste Abbain, Enniscorthy",
							  "Coláiste an Átha, Kilmuckridge","Coláiste Bride, Enniscorthy","F.C.J. Secondary School, Enniscorthy",
							  "Good Counsel College, New Ross","Gorey Community School, Gorey","Loreto Secondary School, Wexford",
							  "Meanscoil Gharman, Brownswood","New Ross Vocational College, New Ross",
							  "Our Lady of Lourdes Secondary School, New Ross","Presentation Secondary School, Wexford",
							  "Ramsgrange Community School, New Ross","St Peter's College, Summerhill",
							  "St. Mary's C.B.S., Enniscorthy","St. Mary's Secondary School, New Ross",
							  "Vocational College, Enniscorthy","Vocational College Bunclody, Enniscorthy",
							  "Wexford Vocational College, Wexford"];
	break;
	case "Wicklow": return ["Abbey Community College, Wicklow Town","Arklow CBS, Arklow","Arklow Community College, Arklow",
							  "Avondale Community College, Rathdrum","Blessington Community College, Blessington",
							  "Coláiste Bhríde Carnew, Carnew","Colaiste Chraobh Abhann, Kilcoole","Coláiste Raithín, Bré",
							  "De La Salle College, Wicklow Town","Dominican College, Wicklow Town",
							  "East Glendalough School, Wicklow Town","Gaelcholaiste na Mara, Arklow",
							  "Loreto Secondary School, Bray","Presentation College, Bray","Scoil Chonglais, Baltinglass",
							  "St Brendan's College, Bray","St David's Holy Faith Secondary, Greystones","St Gerard's School, Bray",
							  "St Kevin's Community College, Dunlavin","St Marys College, Arklow","St Thomas' Community College, Bray",
							  "St. Kilian's Community School, Bray"];
	break;
	}
}
/**
 * Populates the schools dropdown based on the county selected.
 * Firstly it cleares previous list of schools, then it populates the
 * dropdown with updated list.
 */ 
function showSchools(county) {
	var schools = returnArrayOfSchools($(county).val());
	$('#school').empty();
	for(var i=0; i<schools.length; i++) {
		var option  = '<option>';
			option += schools[i];
			option += '</option>';
			$('#school').append(option);
	}
}
/**
 * 	Cleares current subsum depending on selector:
 * 	-LR: left subsum result
 * 	-RR: rigth subsum result.
 */
function clearCounter(selector) {
	$(selector).remove();
}
/**
 * 	Resets current difference between number sets
 */
function clearTheDifference() {
	$('#result').empty();
	// data for json
	$('#realDifference').empty();
	$('#result').append('Current difference: ');
}
/**
 * 	Calculates the difference between subsets' summations,
 * 	depends on the value of left and right subset counters.
 */
function getTheDifference() {	
	var difference;
	var leftSet = parseFloat($("#LR").text());
	var rightSet = parseFloat($("#RR").text());
	if(isNaN(rightSet)) rightSet = 0;
	if(isNaN(leftSet)) leftSet = 0;
	// reset the difference counter	
	clearTheDifference();
	// check if the sets aren't empty	
	if ( leftSet==0 && rightSet==0 ) {
		resetSetSizeIndicators();
		clearTheDifference();
	}
	else { 
		if( leftSet>rightSet) {
			difference = leftSet-rightSet;
			// remove 'bigger' and 'smaller'
			resetSetSizeIndicators();
			$('#leftSubSum').append('Bigger');
			$('#rightSubSum').append('Smaller');
			
			if(difference < 1) {
				// display decimal places
				var trimmedDifference = displayDecimalPlaces(difference);
				$('#result').append(trimmedDifference);
				// used for json
				$('#realDifference').append(difference);
			}
			else {
				// round up
				$('#result').append(Math.round(difference));
				// used for json
				$('#realDifference').append(difference);
			}
		}
	else if( leftSet<rightSet ) {
		difference = rightSet-leftSet;
		resetSetSizeIndicators();
		$('#rightSubSum').append('Bigger');
		$('#leftSubSum').append('Smaller');
			
			if(difference < 1) {
			// display decimal places
			var trimmedDifference = displayDecimalPlaces(difference);
			$('#result').append(trimmedDifference);
			// used for json
			$('#realDifference').append(difference);
			}
			else {
				// round up
				$('#result').append(parseInt(difference));
				// used for json
				$('#realDifference').append(difference);
			}
	}
	}
}
/**
 * Displays decimal places if the result is less than 0.
 * -num : floating point number
 *  returns a trimmed representation of the floating point number
 */
function displayDecimalPlaces(num) {
	var counter = 3;
	var string = num.toString();
	// for scientific notation
	if(string[0]!='0') {
		var index = string.indexOf("-");
		var exponent = string.substring(index+1,string.length);
		var temp = '0.';
		for(var i=0; i<exponent-1; i++) {
			temp += '0';
		}
		temp += string[0];
		return temp;
	}
	// for decimal point notation
	else {
		for(var i=0; i<string.length; i++) {
			if( i>1 ) {
				if(string[i]==0) {
					counter++;
				}
				else if (string[i]!=0){
					break;
				}
			}
		}
		var trimmedResult = string.substring(0,counter);
		return trimmedResult;
	}
}
/**
 * 	Resets the game.
 * 	Clears all counters and pools and brings the numbers back up
 * 	to their original place.
 */
function reset() {
	clearCounter('#LR');
	clearCounter('#RR');
	clearTheDifference();
	resetSetSizeIndicators();
	$('.element').remove();
	// repopulate the numbers
	for(var i=0; i<numbers.length; i++) {
		var paragraph  = '<span class="element">';
			paragraph += numbers[i];
			paragraph += '</span>';
		$('#num').append(paragraph);
	}
	// restores draggable settings
	$(".element").draggable({
		helper:"clone",
		containment:"document",
		opacity: 0.5
	});
}
/**
 * 	Displays form upon clicking submit on the main page.
 */
function submitResults() {
	if ( conditionsMet() ) {
		displayForm("#form");
	}
	else {
		alert("One of the sets is empty! Each set must contain at least one number.");
	}
}
/**
 * 	Prevents double dropping of numbers. Eg, if a number was already
 * 	placed in the pool, it can not be picked up and dropped onto the same pool
 * 	(it can be placed in the opposite pool only).
 * 	-poolSelector: leftPool or rightPool
 * 	-elementToBeDropped: element to be dropped.
 * 	-returns true if double dropping has been detected, false otherwise
 * 
 */
function doubleDrop (poolSelector, elementToBeDropped) {
	var pool = document.getElementById(poolSelector);
	var elements = pool.getElementsByClassName('element');
	for(var i=0; i<elements.length; i++) {
		var current = parseInt($(elements[i]).text());
		if(current == elementToBeDropped) {
			return true;
		}
	}
	return false;
}
/**
 * Checks if both sets contain at least one element.
 * No empty sets should be allowed as a solution.
 */
function conditionsMet() {
	var leftSet = document.getElementById('leftPool').getElementsByClassName('element');
	var rightSet = document.getElementById('rightPool').getElementsByClassName('element');
	if (rightSet.length < 1 || leftSet.length <1) {
		return false;
	}
	else {
		return true;
	}
}
/**
 * Removes the "Bigger", "Smaller" indication of the size of the subset.
 * This is neccessary every time a sequence in the set changes, as the
 * difference gets recalculated and the sums of the sets change.
 */
function resetSetSizeIndicators() {
	$('#leftSubSum').empty();
	$('#rightSubSum').empty();
}

