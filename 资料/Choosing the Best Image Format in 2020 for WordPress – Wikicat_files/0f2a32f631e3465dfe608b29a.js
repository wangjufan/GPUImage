(function(){if(!window.$mcSite){$mcSite={};$mcSite.popup_form={settings:{base_url:"mc.us20.list-manage.com",list_id:"20154ad5a8",uuid:"10c8521e220690621762ceadd"}};$mcSite.adwords_remarketing={settings:{google_allow_ad_personalization_signals:"false"}};}})();
(function () {
    if (window.$mcSite === undefined || window.$mcSite.popup_form === undefined) {
        return;
    }

    if (window.location.href.indexOf("checkout.shopify") >= 0) {
        return;
    }

    var scripts = document.getElementsByTagName("script");
    for (var i = 0; i < scripts.length; i++) {
        // look for src containing the old embed.js code and bail if it exists
        if (scripts[i].getAttribute("src") === "//s3.amazonaws.com/downloads.mailchimp.com/js/signup-forms/popup/embed.js" || scripts[i].getAttribute("src") === "//downloads.mailchimp.com/js/signup-forms/popup/embed.js") {
            return;
        }
    }

    var module = window.$mcSite.popup_form;

    if (module.installed === true) {
        return;
    }

    if (!module.settings) {
        return;
    }

    var settings = module.settings;

    if (!settings.base_url || !settings.uuid || !settings.list_id || settings.skip_install === "1") {
        return;
    }

    var script = document.createElement("script");

    script.src = "//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js";
    script.type = "text/javascript";
    script.onload = function () {
        window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": settings.base_url, "uuid": settings.uuid, "lid": settings.list_id, "uniqueMethods": true}); });
    };

    document.body.appendChild(script);

    window.$mcSite.popup_form.installed = true;
}());
/* eslint-disable */
(function () {
    if (window.$mcSite === undefined || window.$mcSite.adwords_remarketing === undefined) {
        return;
    }

    var module = window.$mcSite.adwords_remarketing;

    if(module.installed === true) {
        return;
    }

    if (!module.settings) {
        return;
    }

    var settings = module.settings;

    if(!settings.google_conversion_id) {
        return;
    }

    if(!settings.google_remarketing_only) {
        return;
    }

    var script = document.createElement("script");
    script.src = "//www.googleadservices.com/pagead/conversion_async.js";
    script.type = "text/javascript";
    script.onload = function () {
        var allow_personalization_settings = settings.google_allow_ad_personalization_signals;
        if (allow_personalization_settings === undefined) {
            allow_personalization_settings = "true";
        }

        window.google_trackConversion({
            google_conversion_id: settings.google_conversion_id,
            google_remarketing_only: settings.google_remarketing_only,
            google_allow_ad_personalization_signals: allow_personalization_settings
        });
    };

    document.body.appendChild(script);

    window.$mcSite.adwords_remarketing.installed = true;
})();
