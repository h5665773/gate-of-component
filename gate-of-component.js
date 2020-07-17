var $goc;
var Vue_obj;
var Date_obj = new Date();
var Today_str = Date_obj.getFullYear().toString() + Padleft_date(Date_obj.getMonth().toString()) + Padleft_date(Date_obj.getDate().toString());
var Component_Jquery_Enable = false;
var Component_Bootstrap_Enable = false;
var Component_Datepicker_Enable = false;
var Component_Bootstrapselect_Enable = false;
var Component_Vue_Enable = false;
var External_js_Enable = false;
var isLoadComponent_Jquery = true;
var isLoadComponent_Bootstrap = true;
var isLoadComponent_Datepicker = true;
var isLoadComponent_Bootstrapselect = true;
var isLoadComponent_Vue = true;
var isLoadExternal_js = true;
var External_js_Path = '';

var Head_obj = document.getElementsByTagName('head')[0];
var Component_Jquery_js = document.createElement('script');
Component_Jquery_js.setAttribute('type', 'text/javascript');
Component_Jquery_js.setAttribute('src', 'https://h5665773.github.io/jquery-3.5.1-dist/jquery-3.5.1.min.js');
var Component_Bootstrap_css = document.createElement('link');
Component_Bootstrap_css.setAttribute('rel', 'stylesheet');
Component_Bootstrap_css.setAttribute('href', 'https://h5665773.github.io/bootstrap-4.5.0-dist/css/bootstrap.min.css');
var Component_Bootstrap_js = document.createElement('script');
Component_Bootstrap_js.setAttribute('type', 'text/javascript');
Component_Bootstrap_js.setAttribute('src', 'https://h5665773.github.io/bootstrap-4.5.0-dist/js/bootstrap.bundle.min.js');
var Component_Datepicker_css = document.createElement('link');
Component_Datepicker_css.setAttribute('rel', 'stylesheet');
Component_Datepicker_css.setAttribute('href', 'https://h5665773.github.io/bootstrap-datepicker-1.9.0-dist/css/bootstrap-datepicker.min.css');
var Component_Datepicker_js = document.createElement('script');
Component_Datepicker_js.setAttribute('type', 'text/javascript');
Component_Datepicker_js.setAttribute('src', 'https://h5665773.github.io/bootstrap-datepicker-1.9.0-dist/js/bootstrap-datepicker.min.js');
var Component_Datepicker_lang = document.createElement('script');
Component_Datepicker_lang.setAttribute('type', 'text/javascript');
Component_Datepicker_lang.setAttribute('src', 'https://h5665773.github.io/bootstrap-datepicker-1.9.0-dist/locales/bootstrap-datepicker.zh-TW.min.js');
var Component_Bootstrapselect_css = document.createElement('link');
Component_Bootstrapselect_css.setAttribute('rel', 'stylesheet');
Component_Bootstrapselect_css.setAttribute('href', 'https://h5665773.github.io/bootstrap-select-1.13.14-dist/css/bootstrap-select.min.css');
var Component_Bootstrapselect_js = document.createElement('script');
Component_Bootstrapselect_js.setAttribute('type', 'text/javascript');
Component_Bootstrapselect_js.setAttribute('src', 'https://h5665773.github.io/bootstrap-select-1.13.14-dist/js/bootstrap-select.min.js');
var Component_Bootstrapselect_lang = document.createElement('script');
Component_Bootstrapselect_lang.setAttribute('type', 'text/javascript');
Component_Bootstrapselect_lang.setAttribute('src', 'https://h5665773.github.io/bootstrap-select-1.13.14-dist/js/i18n/defaults-zh_TW.min.js');
var Component_Vue_js = document.createElement('script');
Component_Vue_js.setAttribute('type', 'text/javascript');
Component_Vue_js.setAttribute('src', 'https://h5665773.github.io/Vue-2.6.11-dist/vue.min.js');
var External_js = document.createElement('script');
External_js.setAttribute('type', 'text/javascript');
External_js.setAttribute('src', `${External_js_Path}.js?Update=${Today_str}`);


LoadComponent();

//Vue_obj = new Vue({
//    el: '#Vue',
//    data: {
//        ComList: {},
//        CuList_Source: {},
//        CuList: {},
//        DaysByMonth: {}
//    },
//    updated() {
//        this.$nextTick(function () {
//            $goc('.selectpicker').selectpicker('refresh');
//        });
//    },
//    methods: {
//        Cu_Filter: function () {
//            let F_COM_ID_str = $goc('#F_COM_ID').val();
//            Vue_obj.CuList = Vue_obj.CuList_Source.filter(data => { return data.F_COM_ID.match(F_COM_ID_str) });
//        },
//        QuerySchedule: function () {
//            ClearMessage();
//            if (Query_InputCheck() == false) {
//                return;
//            }
//            SetLastDayOfMonth();
//        }
//    }
//});



function LoadComponent() {
    if (Component_Jquery_Enable == false && isLoadComponent_Jquery == true) {
        LoadComponent_Jquery();
        Component_Jquery_js.onload = function () {
            $goc = jQuery.noConflict(true);
            console.log('Component_Jquery Load Completed.');
            Component_Jquery_Enable = true;
            return LoadComponent();
        }
    }
    else if (Component_Bootstrap_Enable == false && isLoadComponent_Bootstrap == true) {
        LoadComponent_Bootstrap();
        Component_Bootstrap_js.onload = function () {
            console.log('Component_Bootstrap Load Completed.');
            Component_Bootstrap_Enable = true;
            return LoadComponent();
        }
    }
    else if (Component_Datepicker_Enable == false && isLoadComponent_Datepicker == true) {
        LoadComponent_Datepicker();
        Component_Datepicker_lang.onload = function () {
            console.log('Component_Datepicker Load Completed.');
            Component_Datepicker_Enable = true;
            return LoadComponent();
        }
    }
    else if (Component_Bootstrapselect_Enable == false && isLoadComponent_Bootstrapselect == true) {
        LoadComponent_Bootstrapselect();
        Component_Bootstrapselect_lang.onload = function () {
            console.log('Component_Bootstrapselect Load Completed.');
            Component_Bootstrapselect_Enable = true;
            return LoadComponent();
        }
    }
    else if (Component_Vue_Enable == false && isLoadComponent_Vue == true) {
        LoadComponent_Vue();
        Component_Vue_js.onload = function () {
            console.log('Component_Vue Load Completed.');
            Component_Vue_Enable = true;
            return LoadComponent();
        }
    }
    else if (External_js_Enable == false && isLoadExternal_js == true && External_js_Path != '') {
        LoadExternal_js();
        External_js.onload = function () {
            console.log('External_js Load Completed.');
            External_js_Enable = true;
            return LoadComponent();
        }
    }
}

function LoadComponent_Jquery() {
    Head_obj.appendChild(Component_Jquery_js);
}

function LoadComponent_Bootstrap() {
    Head_obj.appendChild(Component_Bootstrap_css);
    Component_Bootstrap_css.onload = function () {
        Head_obj.appendChild(Component_Bootstrap_js);
    }
}

function LoadComponent_Datepicker() {
    Head_obj.appendChild(Component_Datepicker_css);
    Component_Datepicker_css.onload = function () {
        Head_obj.appendChild(Component_Datepicker_js);
    }
    Component_Datepicker_js.onload = function () {
        Head_obj.appendChild(Component_Datepicker_lang);
    }
}

function LoadComponent_Bootstrapselect() {
    Head_obj.appendChild(Component_Bootstrapselect_css);
    Component_Bootstrapselect_css.onload = function () {

        Head_obj.appendChild(Component_Bootstrapselect_js);
    }
    Component_Bootstrapselect_js.onload = function () {

        Head_obj.appendChild(Component_Bootstrapselect_lang);
    }
}

function LoadComponent_Vue() {
    Head_obj.appendChild(Component_Vue_js);
}

function LoadExternal_js() {
    Head_obj.appendChild(External_js);
}

function AlertMessage(Type_str, Massage_str, Target_obj) {
    //Type = primary / secondary / success / danger / warning / info / light / dark

    let AlertMessage_obj =
        `<div class='alert alert-${Type_str}' role='alert'>` +
        `${Massage_str}` +
        `<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>` +
        `</div>`;

    Target_obj.html(AlertMessage_obj);
}

function ClearMessage() {
    $goc('.alert').alert('close');
}

function Padleft_date(str) {
    if (str.length < 2) {
        str = '0' + str;
    }

    return str;
}

function SetDatepicker(Type_str, Target_obj) {
    //Type = yyyy-mm / yyyy-mm-dd

    Target_obj.datepicker({
        format: Type_str,
        startView: 1,
        minViewMode: 1,
        clearBtn: true,
        language: "zh-TW",
        orientation: "bottom left",
        autoclose: true,
        todayHighlight: true
    });
}

function SetComData() {
    $goc.ajax({
        type: 'POST',
        url: 'XMLFORM/AjaxOrder.aspx',
        data: {
            Order: 'Get_ComData'
        },
        success: function (data) {
            let JsonData = JSON.parse(data);
            Vue_obj.ComList = JsonData;
        }
    });
}

function SetCuData(F_COM_ID_str) {
    $goc.ajax({
        type: 'POST',
        url: 'XMLFORM/AjaxOrder.aspx',
        data: {
            Order: 'Get_CuData',
            F_COM_ID: F_COM_ID_str
        },
        success: function (data) {
            let JsonData = JSON.parse(data);
            Vue_obj.CuList_Source = JsonData;
            Vue_obj.CuList = Vue_obj.CuList_Source;
        }
    });
}