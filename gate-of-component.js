var Head_obj = document.getElementsByTagName('head')[0];
var Component_Jquery_js = document.createElement('script');
Component_Jquery_js.setAttribute('type', 'text/javascript');
Component_Jquery_js.setAttribute('src', 'https://h5665773.github.io/jquery-3.5.1-dist/jquery-3.5.1.min.js');
var $goc;
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
var Vue_obj;



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



function LoadComponent_All() {
    return new Promise((resolve, reject) => {
        LoadComponent_Jquery()
            .then(
                success => {
                    console.log('success:'+success);
                    LoadComponent_Bootstrap();
                }
            )
            .then(
                success => {
                    console.log('success:' +success);
                    LoadComponent_Datepicker();
                }
            )
            .then(
                success => {
                    console.log('success:' +success);
                    LoadComponent_Bootstrapselect();
                }
            )
            .then(
                success => {
                    console.log('success:' +success);
                    LoadComponent_Vue();
                }
            )
            .then(
                success => {
                    console.log('success:' +success);
                    console.log('Component_All Load Completed.');
                    resolve('Component_All Load Completed.');
                }
        );
    });
}

function LoadComponent_Jquery() {
    return new Promise((resolve, reject) => {
        Head_obj.appendChild(Component_Jquery_js);

        Component_Jquery_js.onload = function () {
            $goc = jQuery.noConflict(true);
            console.log('Component_Jquery Load Completed.');
            resolve('Component_Jquery Load Completed.');
        }
    });
}

function LoadComponent_Bootstrap() {
    return new Promise((resolve, reject) => {
        Head_obj.appendChild(Component_Bootstrap_css);
        Component_Bootstrap_css.onload = function () {
            Head_obj.appendChild(Component_Bootstrap_js);
        }

        Component_Bootstrap_js.onload = function () {
            console.log('Component_Bootstrap Load Completed.');
            resolve('Component_Bootstrap Load Completed.');
        }
    });
}

function LoadComponent_Datepicker() {
    return new Promise((resolve, reject) => {
        Head_obj.appendChild(Component_Datepicker_css);
        Component_Datepicker_css.onload = function () {
            Head_obj.appendChild(Component_Datepicker_js);
        }
        Component_Datepicker_js.onload = function () {
            Head_obj.appendChild(Component_Datepicker_lang);
        }

        Component_Datepicker_lang.onload = function () {
            console.log('Component_Datepicker Load Completed.');
            resolve('Component_Datepicker Load Completed.');
        }
    });
}

function LoadComponent_Bootstrapselect() {
    return new Promise((resolve, reject) => {
        Head_obj.appendChild(Component_Bootstrapselect_css);
        Component_Bootstrapselect_css.onload = function () {

            Head_obj.appendChild(Component_Bootstrapselect_js);
        }
        Component_Bootstrapselect_js.onload = function () {

            Head_obj.appendChild(Component_Bootstrapselect_lang);
        }

        Component_Bootstrapselect_lang.onload = function () {
            console.log('Component_Bootstrapselect Load Completed.');
            resolve('Component_Bootstrapselect Load Completed.');
        }
    });
}

function LoadComponent_Vue() {
    return new Promise((resolve, reject) => {
        Head_obj.appendChild(Component_Vue_js);

        Component_Vue_js.onload = function () {
            console.log('Component_Vue Load Completed.');
            resolve('Component_Vue Load Completed.');
        }
    });
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