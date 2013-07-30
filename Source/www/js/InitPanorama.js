// appBar: must be first

var $page = $("body");

var appbarElement = $page.find(".ui-app-bar").first();
if(appbarElement.length){
    //$.mobile.metro._init_applicationBar($page, appbarElement);
}

// list picker
$page.find(".ui-list-picker-select").metroListPicker();

// panorama
$page.find(".ui-panorama").metroPanorama();

// pivot
$page.find(".ui-pivot").metroPivot();

// toggle switch
$page.find(".ui-toggleswitch").metroToggleSwitch();

// progress bar
$page.find(".ui-progressbar").metroProgressBar();

// context menu
$page.find(".ui-context-menu").metroContextMenu();
