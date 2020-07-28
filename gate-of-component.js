﻿//Core Settings
let CoreSetting = new Object({
    Component_Jquery_Enable: false,
    Component_Bootstrap_Enable: false,
    Component_Datepicker_Enable: false,
    Component_Bootstrapselect_Enable: false,
    Component_Vue_Enable: false,
    Component_External_js_Enable: false,
    Component_Jquery_js: document.createElement('script'),
    Component_Bootstrap_css: document.createElement('link'),
    Component_Bootstrap_js: document.createElement('script'),
    Component_Datepicker_css: document.createElement('link'),
    Component_Datepicker_js: document.createElement('script'),
    Component_Datepicker_lang: document.createElement('script'),
    Component_Bootstrapselect_css: document.createElement('link'),
    Component_Bootstrapselect_js: document.createElement('script'),
    Component_Bootstrapselect_lang: document.createElement('script'),
    Component_Vue_js: document.createElement('script'),
    Component_External_js: document.createElement('script'),
    Component_External_js_Path: '',
    Component_InstallationTarget_obj: document.getElementsByTagName('head')[0],
    Component_SourceSetting: function () {
        CoreSetting.Component_Jquery_js.setAttribute('type', 'text/javascript');
        CoreSetting.Component_Jquery_js.setAttribute('src', 'https://h5665773.github.io/jquery-3.5.1-dist/jquery-3.5.1.min.js');
        CoreSetting.Component_Bootstrap_css.setAttribute('rel', 'stylesheet');
        CoreSetting.Component_Bootstrap_css.setAttribute('href', 'https://h5665773.github.io/bootstrap-4.5.0-dist/css/bootstrap.min.css');
        CoreSetting.Component_Bootstrap_js.setAttribute('type', 'text/javascript');
        CoreSetting.Component_Bootstrap_js.setAttribute('src', 'https://h5665773.github.io/bootstrap-4.5.0-dist/js/bootstrap.bundle.min.js');
        CoreSetting.Component_Datepicker_css.setAttribute('rel', 'stylesheet');
        CoreSetting.Component_Datepicker_css.setAttribute('href', 'https://h5665773.github.io/bootstrap-datepicker-1.9.0-dist/css/bootstrap-datepicker.min.css');
        CoreSetting.Component_Datepicker_js.setAttribute('type', 'text/javascript');
        CoreSetting.Component_Datepicker_js.setAttribute('src', 'https://h5665773.github.io/bootstrap-datepicker-1.9.0-dist/js/bootstrap-datepicker.min.js');
        CoreSetting.Component_Datepicker_lang.setAttribute('type', 'text/javascript');
        CoreSetting.Component_Datepicker_lang.setAttribute('src', 'https://h5665773.github.io/bootstrap-datepicker-1.9.0-dist/locales/bootstrap-datepicker.zh-TW.min.js');
        CoreSetting.Component_Bootstrapselect_css.setAttribute('rel', 'stylesheet');
        CoreSetting.Component_Bootstrapselect_css.setAttribute('href', 'https://h5665773.github.io/bootstrap-select-1.13.14-dist/css/bootstrap-select.min.css');
        CoreSetting.Component_Bootstrapselect_js.setAttribute('type', 'text/javascript');
        CoreSetting.Component_Bootstrapselect_js.setAttribute('src', 'https://h5665773.github.io/bootstrap-select-1.13.14-dist/js/bootstrap-select.min.js');
        CoreSetting.Component_Bootstrapselect_lang.setAttribute('type', 'text/javascript');
        CoreSetting.Component_Bootstrapselect_lang.setAttribute('src', 'https://h5665773.github.io/bootstrap-select-1.13.14-dist/js/i18n/defaults-zh_TW.min.js');
        CoreSetting.Component_Vue_js.setAttribute('type', 'text/javascript');
        CoreSetting.Component_Vue_js.setAttribute('src', 'https://h5665773.github.io/Vue-2.6.11-dist/vue.min.js');
        CoreSetting.Component_External_js.setAttribute('type', 'text/javascript');
        CoreSetting.Component_External_js.setAttribute('src', `${CoreSetting.Component_External_js_Path}.js?Update=${CoreSetting.GetToday()}`);
    },
    GetToday: function () {
        let Date_obj = new Date();
        let Today_str = Date_obj.getFullYear().toString() + PadLeft((Date_obj.getMonth() + 1).toString(), '0', 2) + PadLeft(Date_obj.getDate().toString(), '0', 2);
        return Today_str;
    }
});
let $goc;
let Vue_obj;

//Client Settings
var isLoadComponent_Jquery = true;
var isLoadComponent_Bootstrap = true;
var isLoadComponent_Datepicker = true;
var isLoadComponent_Bootstrapselect = true;
var isLoadComponent_Vue = true;
var isLoadComponent_External_js = true;

var MessageArea_obj;
var Selectpicker_obj;
var Datepicker_obj;
var AjaxUrl_str = 'XMLFORM/AjaxOrder.aspx';
var InputDataGroup1_class = '.inputdata-1';
var InputData1_objs;
//ex:
//CoreSetting.Component_External_js_Path = 'scriptself/PA1601';
//MessageArea_obj = $j('#AlertScript');
//LoadComponents();

function LoadComponents_test(Component_obj, isLoadComponent, ComponentName_str) {
    return new Promise(function (resolve, reject) {
        if (isLoadComponent) {
            CoreSetting.Component_InstallationTarget_obj.appendChild(Component_obj);
        }
        else {
            resolve('success');
        }

        Component_obj.onload = function () {
            console.log(`${ComponentName_str} Load Completed.`);
                resolve('success');
        };
    });
}
function test() {
    CoreSetting.Component_SourceSetting();

    LoadComponents_test(CoreSetting.Component_Jquery_js, isLoadComponent_Jquery,'Component_Jquery_js')
        .then(function () {
            $goc = jQuery.noConflict(true);
            return LoadComponents_test(CoreSetting.Component_Bootstrap_css, isLoadComponent_Bootstrap,'Component_Bootstrap_css');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Bootstrap_js, isLoadComponent_Bootstrap,'Component_Bootstrap_js');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Datepicker_css, isLoadComponent_Datepicker,'Component_Datepicker_css');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Datepicker_js, isLoadComponent_Datepicker, 'Component_Datepicker_js');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Datepicker_lang, isLoadComponent_Datepicker, 'Component_Datepicker_lang');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Bootstrapselect_css, isLoadComponent_Bootstrapselect, 'Component_Bootstrapselect_css');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Bootstrapselect_js, isLoadComponent_Bootstrapselect, 'Component_Bootstrapselect_js');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Bootstrapselect_lang, isLoadComponent_Bootstrapselect, 'Component_Bootstrapselect_lang');
        }).then(function () {
            return LoadComponents_test(CoreSetting.Component_Vue_js, isLoadComponent_Vue, 'Component_Vue_js');
        }).then(function () {
            SetVue_obj();
            return LoadComponents_test(CoreSetting.Component_External_js, isLoadComponent_External_js, 'Component_External_js');
        });
}


//Components On/Off
function LoadComponents() {
    if (CoreSetting.Component_Jquery_Enable == false && isLoadComponent_Jquery == true) {
        LoadComponent_Jquery();
        CoreSetting.Component_Jquery_js.onload = function () {

            $goc = jQuery.noConflict(true);

            console.log('Component_Jquery Load Completed.');
            CoreSetting.Component_Jquery_Enable = true;
            return LoadComponents();
        }
    }
    else if (CoreSetting.Component_Bootstrap_Enable == false && isLoadComponent_Bootstrap == true) {
        LoadComponent_Bootstrap();
        CoreSetting.Component_Bootstrap_js.onload = function () {
            console.log('Component_Bootstrap Load Completed.');
            CoreSetting.Component_Bootstrap_Enable = true;
            return LoadComponents();
        }
    }
    else if (CoreSetting.Component_Datepicker_Enable == false && isLoadComponent_Datepicker == true) {
        LoadComponent_Datepicker();
        CoreSetting.Component_Datepicker_lang.onload = function () {
            console.log('Component_Datepicker Load Completed.');
            CoreSetting.Component_Datepicker_Enable = true;
            return LoadComponents();
        }
    }
    else if (CoreSetting.Component_Bootstrapselect_Enable == false && isLoadComponent_Bootstrapselect == true) {
        LoadComponent_Bootstrapselect();
        CoreSetting.Component_Bootstrapselect_lang.onload = function () {
            console.log('Component_Bootstrapselect Load Completed.');
            CoreSetting.Component_Bootstrapselect_Enable = true;
            return LoadComponents();
        }
    }
    else if (CoreSetting.Component_Vue_Enable == false && isLoadComponent_Vue == true) {
        document.getElementById('Vue').style.display = 'none';
        LoadComponent_Vue();
        CoreSetting.Component_Vue_js.onload = function () {
            console.log('Component_Vue Load Completed.');
            CoreSetting.Component_Vue_Enable = true;
            SetVue_obj();
            document.getElementById('Vue').style.display = '';
            return LoadComponents();
        }
    }
    else if (CoreSetting.Component_External_js_Enable == false && isLoadComponent_External_js == true && CoreSetting.Component_External_js_Path != '') {
        LoadComponent_External_js();
        CoreSetting.Component_External_js.onload = function () {
            console.log('Component_External_js Load Completed.');
            CoreSetting.Component_External_js_Enable = true;
            return LoadComponents();
        }
    }
}
//ex:
//isLoadComponent_Jquery = true;
//isLoadComponent_Bootstrap = true;
//isLoadComponent_Datepicker = true;
//isLoadComponent_Bootstrapselect = true;
//isLoadComponent_Vue = true;
//isLoadComponent_External_js = true;

function LoadComponent_Jquery() {
    CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Jquery_js);
}

function LoadComponent_Bootstrap() {
    CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Bootstrap_css);
    CoreSetting.Component_Bootstrap_css.onload = function () {
        CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Bootstrap_js);
    }
}

function LoadComponent_Datepicker() {
    CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Datepicker_css);
    CoreSetting.Component_Datepicker_css.onload = function () {
        CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Datepicker_js);
    }
    CoreSetting.Component_Datepicker_js.onload = function () {
        CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Datepicker_lang);
    }
}

function LoadComponent_Bootstrapselect() {
    CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Bootstrapselect_css);
    CoreSetting.Component_Bootstrapselect_css.onload = function () {

        CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Bootstrapselect_js);
    }
    CoreSetting.Component_Bootstrapselect_js.onload = function () {

        CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Bootstrapselect_lang);
    }
}

function LoadComponent_Vue() {
    CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_Vue_js);
}

function LoadComponent_External_js() {
    CoreSetting.Component_InstallationTarget_obj.appendChild(CoreSetting.Component_External_js);
}

function AlertMessage(Type_str, Massage_str) {
    //Type = primary / secondary / success / danger / warning / info / light / dark

    let AlertMessage_obj =
        `<div class='alert alert-${Type_str}' role='alert'>` +
        `${Massage_str}` +
        `<button type='button' class='close' data-dismiss='alert' aria-label='Close'><span aria-hidden='true'>&times;</span></button>` +
        `</div>`;

    if (MessageArea_obj != undefined) {
        MessageArea_obj.html(AlertMessage_obj);
    }
    else {
        alert(Massage_str);
    }
}

function ClearMessage() {
    MessageArea_obj.html('');
}

function PadLeft(Target_str, Padding_str, TotalWidth_int) {
    if (Target_str.length < TotalWidth_int) {
        Target_str = Padding_str + Target_str;
    }

    return Target_str;
}

function SetVue_obj() {
    document.getElementById('Vue').style.display = 'none';
    Vue_obj = new Vue({
        el: '#Vue',
        data: {
            ComList: {},
            CuList_Source: {},
            CuList: {},
            DaysByMonth: {},
            SentinelList: {},
            SentinelMember: {},
            MemberSchedule: {},
            MemberScheduleDetail_Source: {},
            MemberScheduleDetail: {}
        },
        updated() {
            this.$nextTick(function () {
                if (Selectpicker_obj != undefined) {
                    Selectpicker_obj.selectpicker('refresh');
                }
            });
        },
        methods: {
            Cu_Filter: function (F_COM_ID_str) {
                Vue_obj.CuList = Vue_obj.CuList_Source.filter(data => { return data.F_COM_ID.match(F_COM_ID_str); });
            },
            QuerySchedule: function (F_CU_ID_str, F_YM_str) {
                ClearMessage();
                if (InputCheck() == false) {
                    return;
                }
                Set_LastDayOfMonth(F_YM_str);
                Get_SentinelSchedule(F_CU_ID_str, F_YM_str, Vue_obj.DaysByMonth.length);
            },
            Show_Modal: function (F_CLASS_str, F_DAY_str, F_POINT_NAME_str, F_EMP_ID_str, F_EMP_NAME_str, ModalLabel_obj, F_CLASS_obj, F_DATE_obj, F_DATE_str) {
                Show_Modal(F_CLASS_str, F_DAY_str, F_POINT_NAME_str, F_EMP_ID_str, F_EMP_NAME_str, ModalLabel_obj, F_CLASS_obj, F_DATE_obj, F_DATE_str);
            }
        }
    });
    document.getElementById('Vue').style.display = '';
}

function Set_Datepicker(Type_str, Target_obj) {
    //Type = yyyy-mm / yyyy-mm-dd

    if (Type_str == 'yyyy-mm') {
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
}

function Set_ComData() {
    $goc.ajax({
        type: 'POST',
        url: AjaxUrl_str,
        data: {
            Order: 'Get_ComData'
        },
        success: function (data) {
            let JsonData = JSON.parse(data);
            Vue_obj.ComList = JsonData;
        }
    });
}

function Set_CuData(F_COM_ID_str) {
    $goc.ajax({
        type: 'POST',
        url: AjaxUrl_str,
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

function InputCheck() {
    InputData1_objs = $goc(`select${InputDataGroup1_class},input${InputDataGroup1_class}[type!="search"]`);

    if (InputData1_objs.length > 0) {
        for (let i = 0; i < InputData1_objs.length; i++) {
            let InputData_str = InputData1_objs[i].value;
            if (InputData_str == '') {
                AlertMessage('warning', '請輸入查詢條件！');
                return false;
            }
        }
    }
    return true;
}

function Set_LastDayOfMonth(Date_yyyymm_str) {
    let LastDayOfMonth_date = new Date(Date_yyyymm_str);
    let LastDayOfMonth_int = 0;
    let DayList = ['日', '一', '二', '三', '四', '五', '六'];
    let DaysByMonth_str = "[";

    LastDayOfMonth_date.setMonth(LastDayOfMonth_date.getMonth() + 1);
    LastDayOfMonth_date.setDate(1);
    LastDayOfMonth_date.setDate(LastDayOfMonth_date.getDate() - 1);
    LastDayOfMonth_int = parseInt(LastDayOfMonth_date.getDate());
    LastDayOfMonth_date.setDate(1);

    for (let i = 0; i < LastDayOfMonth_int; i++) {
        let Day = DayList[LastDayOfMonth_date.getDay()];
        let idx = (i + 1);
        if (idx.toString().length == 1) {
            idx = '0' + idx;
        }

        DaysByMonth_str += `{"DayNo":"${idx}","Day":"${Day}"}`;

        if (i != LastDayOfMonth_int - 1) {
            DaysByMonth_str += ",";
        }

        LastDayOfMonth_date.setDate(LastDayOfMonth_date.getDate() + 1);
    }
    DaysByMonth_str += "]"

    Vue_obj.DaysByMonth = JSON.parse(DaysByMonth_str);
}

function Get_SentinelSchedule(F_CU_ID_str, F_YM_str, LastDayofMonth_str) {
    $goc.ajax({
        type: 'POST',
        url: AjaxUrl_str,
        data: {
            Order: 'Get_SentinelSchedule',
            F_CU_ID: F_CU_ID_str,
            F_YM: F_YM_str,
            LastDayofMonth: LastDayofMonth_str
        },
        success: function (data) {
            let JsonData = JSON.parse(data);

            Vue_obj.SentinelList = JsonData.SentinelList;
            Vue_obj.SentinelMember = JsonData.SentinelMember;
            Vue_obj.MemberSchedule = JsonData.MemberSchedule;
            Vue_obj.MemberScheduleDetail_Source = JsonData.MemberScheduleDetail;
        }
    });
}

function Show_Modal(F_CLASS_str, F_DAY_str, F_POINT_NAME_str, F_EMP_ID_str, F_EMP_NAME_str, ModalLabel_obj, F_CLASS_obj, F_DATE_obj, F_DATE_str) {
    ModalLabel_obj.html(`${F_POINT_NAME_str} - ${F_EMP_NAME_str}`);
    F_CLASS_obj.val(F_CLASS_str);
    F_DATE_obj.html(F_DATE_str);
    Vue_obj.MemberScheduleDetail = Vue_obj.MemberScheduleDetail_Source.filter(data => { return data.F_DAY.match(F_DAY_str); });
    Vue_obj.MemberScheduleDetail = Vue_obj.MemberScheduleDetail.filter(data => { return data.F_EMP_ID.match(F_EMP_ID_str); });
}