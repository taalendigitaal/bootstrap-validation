/*
 * Translated default messages for the jQuery validation plugin.
 * Locale: fy_NL (Frisian; Frysk)
 */
(function ($) {
	$.extend($.validator.messages, {
		required: "Dit is in ferplicht fjild.",
        remote: "Kontrolearje dit fjild.",
        email: "Folje hjir in jildich e-mailadres yn.",
        url: "Folje hjir in jildige URL yn.",
        date: "Folje hjir in jildige datum yn.",
        dateISO: "Folje hjir in jildige datum yn (ISO-formaat).",
        number: "Folje hjir in jildich getal yn.",
        digits: "Folje hjir allinnich getallen yn.",
        creditcard: "Folje hjir in jildich kredytkaartnûmer yn.",
        equalTo: "Folje hjir deselde wearde yn.",
        accept: "Folje hjir in wearde yn mei in jildige ekstinsje.",
        maxlength: $.validator.format("Folje hjir maksimaal {0} tekens in."),
        minlength: $.validator.format("Folje hjir minimaal {0} tekens in."),
        rangelength: $.validator.format("Folje hjir in wearde yn fan minimaal {0} en maksimaal {1} tekens."),
        range: $.validator.format("Folje hjir in wearde yn fan minimaal {0} en maksimaal {1}."),
        max: $.validator.format("Folje hjir in wearde yn lytser of gelyk oan {0}."),
        min: $.validator.format("Folje hjir in wearde yn grutter of gelyk oan {0}."),

        // for validations in additional-methods.js
        iban: "Folje hjir in jildich IBAN yn.",
        dateNL: "Folje hjir in jildige datum yn.",
        phoneNL: "Folje hjir in jildich Nederlânsk tillefoannûmer yn.",
        mobileNL: "Folje hjir in jildich Nederlânsk mobyl tillefoannûmer yn.",
        postalcodeNL: "Folje hjir in jildige postkoade yn.",
        bankaccountNL: "Folje hjir in jildich bankrekkennûmer yn.",
        giroaccountNL: "Folje hjir in jildich gironûmer yn.",
        bankorgiroaccountNL: "Folje hjir in jildich bankrekken- of gironûmer yn."
	});
}(jQuery));