var isoCountries = {
    'AF' : 'Afghanistan',
    'AX' : 'Aland Islands',
    'AL' : 'Albania',
    'DZ' : 'Algeria',
    'AS' : 'American Samoa',
    'AD' : 'Andorra',
    'AO' : 'Angola',
    'AI' : 'Anguilla',
    'AQ' : 'Antarctica',
    'AG' : 'Antigua And Barbuda',
    'AR' : 'Argentina',
    'AM' : 'Armenia',
    'AW' : 'Aruba',
    'AU' : 'Australia',
    'AT' : 'Austria',
    'AZ' : 'Azerbaijan',
    'BS' : 'Bahamas',
    'BH' : 'Bahrain',
    'BD' : 'Bangladesh',
    'BB' : 'Barbados',
    'BY' : 'Belarus',
    'BE' : 'Belgium',
    'BZ' : 'Belize',
    'BJ' : 'Benin',
    'BM' : 'Bermuda',
    'BT' : 'Bhutan',
    'BO' : 'Bolivia',
    'BA' : 'Bosnia And Herzegovina',
    'BW' : 'Botswana',
    'BV' : 'Bouvet Island',
    'BR' : 'Brazil',
    'IO' : 'British Indian Ocean Territory',
    'BN' : 'Brunei Darussalam',
    'BG' : 'Bulgaria',
    'BF' : 'Burkina Faso',
    'BI' : 'Burundi',
    'KH' : 'Cambodia',
    'CM' : 'Cameroon',
    'CA' : 'Canada',
    'CV' : 'Cape Verde',
    'KY' : 'Cayman Islands',
    'CF' : 'Central African Republic',
    'TD' : 'Chad',
    'CL' : 'Chile',
    'CN' : 'China',
    'CX' : 'Christmas Island',
    'CC' : 'Cocos (Keeling) Islands',
    'CO' : 'Colombia',
    'KM' : 'Comoros',
    'CG' : 'Congo',
    'CD' : 'Congo, Democratic Republic',
    'CK' : 'Cook Islands',
    'CR' : 'Costa Rica',
    'CI' : 'Cote D\'Ivoire',
    'HR' : 'Croatia',
    'CU' : 'Cuba',
    'CY' : 'Cyprus',
    'CZ' : 'Czech Republic',
    'DK' : 'Denmark',
    'DJ' : 'Djibouti',
    'DM' : 'Dominica',
    'DO' : 'Dominican Republic',
    'EC' : 'Ecuador',
    'EG' : 'Egypt',
    'SV' : 'El Salvador',
    'GQ' : 'Equatorial Guinea',
    'ER' : 'Eritrea',
    'EE' : 'Estonia',
    'ET' : 'Ethiopia',
    'FK' : 'Falkland Islands (Malvinas)',
    'FO' : 'Faroe Islands',
    'FJ' : 'Fiji',
    'FI' : 'Finland',
    'FR' : 'France',
    'GF' : 'French Guiana',
    'PF' : 'French Polynesia',
    'TF' : 'French Southern Territories',
    'GA' : 'Gabon',
    'GM' : 'Gambia',
    'GE' : 'Georgia',
    'DE' : 'Germany',
    'GH' : 'Ghana',
    'GI' : 'Gibraltar',
    'GR' : 'Greece',
    'GL' : 'Greenland',
    'GD' : 'Grenada',
    'GP' : 'Guadeloupe',
    'GU' : 'Guam',
    'GT' : 'Guatemala',
    'GG' : 'Guernsey',
    'GN' : 'Guinea',
    'GW' : 'Guinea-Bissau',
    'GY' : 'Guyana',
    'HT' : 'Haiti',
    'HM' : 'Heard Island & Mcdonald Islands',
    'VA' : 'Holy See (Vatican City State)',
    'HN' : 'Honduras',
    'HK' : 'Hong Kong',
    'HU' : 'Hungary',
    'IS' : 'Iceland',
    'IN' : 'India',
    'ID' : 'Indonesia',
    'IR' : 'Iran, Islamic Republic Of',
    'IQ' : 'Iraq',
    'IE' : 'Ireland',
    'IM' : 'Isle Of Man',
    'IL' : 'Israel',
    'IT' : 'Italy',
    'JM' : 'Jamaica',
    'JP' : 'Japan',
    'JE' : 'Jersey',
    'JO' : 'Jordan',
    'KZ' : 'Kazakhstan',
    'KE' : 'Kenya',
    'KI' : 'Kiribati',
    'KR' : 'Korea',
    'KW' : 'Kuwait',
    'KG' : 'Kyrgyzstan',
    'LA' : 'Lao People\'s Democratic Republic',
    'LV' : 'Latvia',
    'LB' : 'Lebanon',
    'LS' : 'Lesotho',
    'LR' : 'Liberia',
    'LY' : 'Libyan Arab Jamahiriya',
    'LI' : 'Liechtenstein',
    'LT' : 'Lithuania',
    'LU' : 'Luxembourg',
    'MO' : 'Macao',
    'MK' : 'Macedonia',
    'MG' : 'Madagascar',
    'MW' : 'Malawi',
    'MY' : 'Malaysia',
    'MV' : 'Maldives',
    'ML' : 'Mali',
    'MT' : 'Malta',
    'MH' : 'Marshall Islands',
    'MQ' : 'Martinique',
    'MR' : 'Mauritania',
    'MU' : 'Mauritius',
    'YT' : 'Mayotte',
    'MX' : 'Mexico',
    'FM' : 'Micronesia, Federated States Of',
    'MD' : 'Moldova',
    'MC' : 'Monaco',
    'MN' : 'Mongolia',
    'ME' : 'Montenegro',
    'MS' : 'Montserrat',
    'MA' : 'Morocco',
    'MZ' : 'Mozambique',
    'MM' : 'Myanmar',
    'NA' : 'Namibia',
    'NR' : 'Nauru',
    'NP' : 'Nepal',
    'NL' : 'Netherlands',
    'AN' : 'Netherlands Antilles',
    'NC' : 'New Caledonia',
    'NZ' : 'New Zealand',
    'NI' : 'Nicaragua',
    'NE' : 'Niger',
    'NG' : 'Nigeria',
    'NU' : 'Niue',
    'NF' : 'Norfolk Island',
    'MP' : 'Northern Mariana Islands',
    'NO' : 'Norway',
    'OM' : 'Oman',
    'PK' : 'Pakistan',
    'PW' : 'Palau',
    'PS' : 'Palestinian Territory, Occupied',
    'PA' : 'Panama',
    'PG' : 'Papua New Guinea',
    'PY' : 'Paraguay',
    'PE' : 'Peru',
    'PH' : 'Philippines',
    'PN' : 'Pitcairn',
    'PL' : 'Poland',
    'PT' : 'Portugal',
    'PR' : 'Puerto Rico',
    'QA' : 'Qatar',
    'RE' : 'Reunion',
    'RO' : 'Romania',
    'RU' : 'Russian Federation',
    'RW' : 'Rwanda',
    'BL' : 'Saint Barthelemy',
    'SH' : 'Saint Helena',
    'KN' : 'Saint Kitts And Nevis',
    'LC' : 'Saint Lucia',
    'MF' : 'Saint Martin',
    'PM' : 'Saint Pierre And Miquelon',
    'VC' : 'Saint Vincent And Grenadines',
    'WS' : 'Samoa',
    'SM' : 'San Marino',
    'ST' : 'Sao Tome And Principe',
    'SA' : 'Saudi Arabia',
    'SN' : 'Senegal',
    'RS' : 'Serbia',
    'SC' : 'Seychelles',
    'SL' : 'Sierra Leone',
    'SG' : 'Singapore',
    'SK' : 'Slovakia',
    'SI' : 'Slovenia',
    'SB' : 'Solomon Islands',
    'SO' : 'Somalia',
    'ZA' : 'South Africa',
    'GS' : 'South Georgia And Sandwich Isl.',
    'ES' : 'Spain',
    'LK' : 'Sri Lanka',
    'SD' : 'Sudan',
    'SR' : 'Suriname',
    'SJ' : 'Svalbard And Jan Mayen',
    'SZ' : 'Swaziland',
    'SE' : 'Sweden',
    'CH' : 'Switzerland',
    'SY' : 'Syrian Arab Republic',
    'TW' : 'Taiwan',
    'TJ' : 'Tajikistan',
    'TZ' : 'Tanzania',
    'TH' : 'Thailand',
    'TL' : 'Timor-Leste',
    'TG' : 'Togo',
    'TK' : 'Tokelau',
    'TO' : 'Tonga',
    'TT' : 'Trinidad And Tobago',
    'TN' : 'Tunisia',
    'TR' : 'Turkey',
    'TM' : 'Turkmenistan',
    'TC' : 'Turks And Caicos Islands',
    'TV' : 'Tuvalu',
    'UG' : 'Uganda',
    'UA' : 'Ukraine',
    'AE' : 'United Arab Emirates',
    'GB' : 'United Kingdom',
    'US' : 'United States',
    'UM' : 'United States Outlying Islands',
    'UY' : 'Uruguay',
    'UZ' : 'Uzbekistan',
    'VU' : 'Vanuatu',
    'VE' : 'Venezuela',
    'VN' : 'Viet Nam',
    'VG' : 'Virgin Islands, British',
    'VI' : 'Virgin Islands, U.S.',
    'WF' : 'Wallis And Futuna',
    'EH' : 'Western Sahara',
    'YE' : 'Yemen',
    'ZM' : 'Zambia',
    'ZW' : 'Zimbabwe'
};

var CANumbers = {
    'title1' : 'Police, Fire, Ambulance',
    'number1' : '911',
    'title2' : 'Non-Emergency Police or City Services (Certain Areas)',
    'number2' : '311'
};

var CNNumbers = {
    'title1' : 'Police',
    'number1' : '110',
    'title2' : 'Ambulance',
    'number2' : '120',
    'title3' : 'Fire',
    'number3' : '119',
    'title4' : 'Road Police',
    'number4' : '122',
    'title5' : 'Marine SOS',
    'number5' : '12395',
    'title6' : 'Marine Police',
    'number6' : '95110',
    'title7' : 'Forest Fire (Certain Areas)',
    'number7' : '12119'
};

var GBNumbers = {
    'title1' : 'Police, Fire, Ambulance',
    'number1' : '999',
    'title2' : 'Police, Fire, Ambulance (Alternative)',
    'number2' : '112',
    'title3' : 'Police (Non-Emergency)',
    'number3' : '101',
    'title4' : 'Medical Help (Non-Emergency)',
    'number4' : '111'
};

var HKNumbers = {
    'title1' : 'Police, Fire, Ambulance',
    'number1' : '999',
    'title2' : 'Phone Fraud',
    'number2' : '18222'
};

var INNumbers = {
    'title1' : 'Police, Fire, Ambulance',
    'number1' : '112',
    'title2' : 'Gas Leakage',
    'number2' : '1906',
    'title3' : 'Tourist Helpline',
    'number3' : '1363',
    'title4' : 'Child Helpline',
    'number4' : '1098',
    'title5' : 'Blood Needs',
    'number5' : '1098',
    'title6' : 'Women Helpline',
    'number6' : '181'
};

var IDNumbers = {
    'title1' : 'Police, Fire, Ambulance',
    'number1' : '112',
    'title2' : 'Natural Disasters',
    'number2' : '129'
};

var KHNumbers = {
    'title1' : 'Police',
    'number1' : '117',
    'title2' : 'Ambulance',
    'number2' : '119',
    'title3' : 'Fire',
    'number3' : '118',
    'title4' : 'Child Helpline',
    'number4' : '1280'
};

var MXNumbers = {
    'title1' : 'Police, Fire, Ambulance',
    'number1' : '911',
    'title2' : 'Anonymous Complaint',
    'number2' : '089'
};

var USNumbers = {
    'title1' : 'Police, Fire, Ambulance',
    'number1' : '911',
    'title2' : 'Non-Emergency Police or City Services (Certain Areas)',
    'number2' : '311',
    'title3' : 'Highway Patrol (Certain Areas)',
    'number3' : '#77'
};

function getCountryName(countryCode) {
    if (isoCountries.hasOwnProperty(countryCode)) {
        return isoCountries[countryCode];
    } else {
        return countryCode;
    }
}

function getURLParameter(name) {
    return decodeURIComponent((new RegExp("[?|&]" + name + "=" + "([^&;]+?)(&|#|;|$)").exec(location.search) || [null, ""])[1].replace(/\+/g, "%20")) || null;
}

function pageLoad() {
    if (window.location.search.includes('?region=')) {
        var regionCode = getURLParameter("region");
        var fullRegion = getCountryName(regionCode);
        if (regionCode == 'CA') {
            loadNumbers(CANumbers, 2);
        } else if (regionCode == 'CN') {
            loadNumbers(CNNumbers, 7);
        } else if (regionCode == 'GB') {
            loadNumbers(GBNumbers, 4);
        } else if (regionCode == 'HK') {
            loadNumbers(HKNumbers, 2);
        } else if (regionCode == 'IN') {
            loadNumbers(INNumbers, 6);
        } else if (regionCode == 'ID') {
            loadNumbers(IDNumbers, 2);
        } else if (regionCode == 'KH') {
            loadNumbers(KHNumbers, 4);
        } else if (regionCode == 'MX') {
            loadNumbers(MXNumbers, 2);
        } else if (regionCode == 'US') {
            loadNumbers(USNumbers, 3);
        }

        // Set the country name
        document.getElementById("currentCountry").innerHTML = fullRegion;

        removeRegionChoice();
    } else {
        $(".countryChoice").show();
    }
    fadeOutLoad();
}

function loadNumbers(arrayName, amountOfNumbers) {
    if (amountOfNumbers == 1) {
        var choiceNumber = '1';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
    } else if (amountOfNumbers == 2) {
        var choiceNumber = '1';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '2';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
    } else if (amountOfNumbers == 3) {
        var choiceNumber = '1';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '2';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '3';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
    } else if (amountOfNumbers == 4) {
        var choiceNumber = '1';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '2';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '3';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '4';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
    } else if (amountOfNumbers == 5) {
        var choiceNumber = '1';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '2';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '3';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '4';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '5';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
    } else if (amountOfNumbers == 6) {
        var choiceNumber = '1';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '2';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '3';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '4';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '5';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '6';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
    } else if (amountOfNumbers == 7) {
        var choiceNumber = '1';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '2';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '3';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '4';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '5';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '6';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
        var choiceNumber = '7';
        var titleChoice = 'title' + choiceNumber;
        var numberChoice = 'number' + choiceNumber;
        var phoneButtonChoice = '#phoneButton' + choiceNumber;
        var phoneTextChoice = 'phoneText' + choiceNumber;
        var phoneNumberTextChoice = 'phoneNumber' + choiceNumber;
        var numberClassChoice = '.number' + choiceNumber;
        var phoneNumber = arrayName[numberChoice];
        var numberOnclickVar = "window.open('tel:" + phoneNumber + "');";
        document.getElementById(phoneNumberTextChoice).innerHTML = phoneNumber;
        document.getElementById(phoneTextChoice).innerHTML = arrayName[titleChoice];
        $(phoneButtonChoice).attr("onclick", numberOnclickVar);
        $(numberClassChoice).removeAttr("style");
    }
}

function fadeOutLoad() {
    setTimeout(
    function() {
        $(".loadDiv").fadeOut();
    }, 1000);
}

function removeRegionChoice() {
    $(".countryChoice").hide();
}

function showRegionChoice() {
    $(".countryChoice").fadeIn();
}

function submitData() {
    var choice = $(".selected").val();
    window.location.href = "/?region=" + choice;
}

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Stash the event so it can be triggered later.
  deferredPrompt = e;
});

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js', { scope: '/' })
      .then(function(registration) {
            console.log('Service Worker Registered');
      });
    navigator.serviceWorker.ready.then(function(registration) {
       console.log('Service Worker Ready');
    });
}

function select(idOfItem) {
    if (localStorage.itemSelectedPrevious != null) {
        $(localStorage.itemSelectedPrevious).removeClass('selected');
    }
    $(idOfItem).addClass('selected');
    localStorage.itemSelectedPrevious = idOfItem;
    submitData();
}