
// -----------------------------------------------------------------------------------------------------------------------------
// Load form.io functions                                                                                        loadJsonForm.js 
// -----------------------------------------------------------------------------------------------------------------------------

var arrForm = loadForm();

function loadForm() {
    var url = "./json/data.json"
    var json = null;
    var getsetting = {
        'async': false,
        'global': false,
        'url': url,
        'dataType': "json",
        "method": "GET"
    }
    $.ajax(getsetting).done(function (data) {
        json = data;
    });
    return json;
}
