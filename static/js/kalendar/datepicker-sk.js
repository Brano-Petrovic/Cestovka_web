﻿/* Slovak initialisation for the jQuery UI date picker plugin. */
/* Written by Vojtech Rinik (vojto@hmm.sk). */
(function( factory ) {
	if ( typeof define === "function" && define.amd ) {

		// AMD. Register as an anonymous module.
		define([ "../datepicker" ], factory );
	} else {

		// Browser globals
		factory( jQuery.datepicker );
	}
}(function( datepicker ) {

datepicker.regional['sk'] = {
	closeText: 'Zavrieť',
	prevText: '&#x3C;Predchádzajúci',
	nextText: 'Nasledujúci&#x3E;',
	currentText: 'Dnes',
	monthNames: ['Január','Február','Marec','Apríl','Máj','Jún',
	'Júl','August','September','Október','November','December'],
	monthNamesShort: ['Jan','Feb','Mar','Apr','Máj','Jún',
	'Júl','Aug','Sep','Okt','Nov','Dec'],
	dayNames: ['Nedeľa','Pondelok','Utorok','Streda','Štvrtok','Piatok','Sobota'],
	dayNamesShort: ['Ned','Pon','Uto','Str','Štv','Pia','Sob'],
	dayNamesMin: ['Ne','Po','Ut','St','Št','Pia','So'],
	weekHeader: 'Ty',
	dateFormat: 'dd.mm.yy',
	firstDay: 1,
	isRTL: false,
	showMonthAfterYear: false,
	yearSuffix: ''};
datepicker.setDefaults(datepicker.regional['sk']);

return datepicker.regional['sk'];

}));