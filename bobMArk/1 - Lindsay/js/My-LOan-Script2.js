
var AppPaths = new Array(); // read-only

AppPaths["css"] = "/credit/css";

var isNS4 = (document.layers) ? true : false;
var isW3C = (document.getElementById) ? true : false;

var LAYER_SHOW = (isNS4) ? "show" : "block";
var LAYER_HIDE = (isNS4) ? "hide" : "none";

var GLOBAL_TERM = 48;

function getLayerStyle(la) { if (isNS4) return la; else return la.style; }
function showLayer(la) { //alert("Here 11111 ");
    getLayerStyle(la).display = LAYER_SHOW;
}
function hideLayer(la) { getLayerStyle(la).display = LAYER_HIDE; }
function toggleLayer(la) { with (getLayerStyle(la)) { display = (display == LAYER_HIDE) ? LAYER_SHOW : LAYER_HIDE; } }
function getDocLayer(win, la_id) {
    //alert("Here 2222 ");
    if (isW3C) {//alert("Here 1");
        return win.document.getElementById(la_id);
    }
    else if (isNS4) {//alert("Here 2");
        return win.document.layers[la_id];
    }
    else {//alert("here 3");
        return win.document.all[la_id];
    }
}

var newWindow;

function WriteTextMsg(num) {
    if (num == 5095) { return "Loan Calculator"; }
    else if (num == 5096) { return "Equipment Cost"; }
    else if (num == 5097) { return "No. Of Advance Payments"; }
    else if (num == 5098) { return "Payment Frequency"; }
    else if (num == 5099) { return "Term"; }
    else if (num == 5100) { return "Rate (Desired APR)"; }
    else if (num == 5101) { return "Residual Amount"; }
    else if (num == 5102) { return "Calculate"; }
    else if (num == 5103) { return "Payment Amount"; }
    else if (num == 5104) { return "Months to First Payment"; }
    else if (num == 5105) { return "Lease Calculator"; }
    else if (num == 5106) { return "Amount Financed"; }
    else if (num == 5107) { return "Rate (Desired APR)"; }
    else if (num == 5108) { return "Close"; }
    else if (num == 5109) { return "Annual"; }
    else if (num == 5110) { return "Semi-Annual"; }
    else if (num == 5111) { return "Quarterly"; }
    else if (num == 5112) { return "Monthly"; }
    else if (num == 5113) { return "Term should be positive integer"; }
    else if (num == 5114) { return "Invalid Rate (Desired APR)."; }
    else if (num == 5115) { return "cannot be empty"; }
    else if (num == 5116) { return "Residual Amount"; }

    //var CalculatorPageLabels_MFRT = top.opener.top.CalmsAppInfo["CalculatorPageLabels_MFRT"];

    else return "Message" + num; //CalculatorPageLabels_MFRT.getNamedValue(num-5095,"DESCRIPTION");
}


function closeWindow() {
    if (helpWindow) {
        if (!helpWindow.closed) {
            helpWindow.close();
        } 
    }
    self.close()
    if (newWindow) {
        if (!newWindow.closed) {
            newWindow.close();
        } 
    }
}

var doNumcheck = 'TRUE';
var chart;
var value;

function checkChart(elem) {
    chart = elem.value;
    if (chart == '' || chart > 100 && doNumcheck == 'TRUE') {
        //alert("Invalid chart number.");
        alert(WriteTextMsg(5114));
        elem.value = "";
    }
    doNumcheck = 'TRUE'
}

function calcChartRate(chartNum) { return 0.25 * (parseFloat(chartNum)) + 1; }
//function calcChartRate( chartNum ) { return 0.25*(parseInt(chartNum)-100)+1; }

// Format a Numeric field to the specified precision after the decimal.
function formatNumber(s, p) {
    var r = parseFloat(s);
    if (isNaN(r)) return "";
    if (!(p >= 0)) p = 0;
    r = "" + Math.round(Math.pow(10, p) * r + .001);
    while (r.length <= p) { r = "0" + r; }
    var dot = r.length - p;
    return r.substring(0, dot) + (p > 0 ? "." : "") + r.substring(dot, r.length);
}

// Properly format a money field with two trailing decimal places.
function formatMoney(s) { return formatNumber(s, 2); }

var PAY_FREQ_MAP = new Array();
PAY_FREQ_MAP[1] = 1; // Annual
PAY_FREQ_MAP[2] = 2; // Semi-annual
PAY_FREQ_MAP[4] = 4; // Quarterly
PAY_FREQ_MAP[12] = 12; // Monthly

// Calculate Payment (equal even) based on:
// c  = current cost / present value
// n  = number of payments (not term in months)
// i  = periodic interest rate as decimal
// r  = residual value
// a  = 1 or more for payments in advance, 0 in arrears
//
function calcPayment(c, n, i, r, a) {
    //alert("currVal "+ c +", nPer "+ n +", iRate "+ i +", resAmt "+ r +", advPymts "+ a);
    var p = "";

    if (!(i > 0))
        p = (c - r) / (n - a);
    else {
        if (a > 0)
            p = (c - (r / Math.pow(1 + i, n))) / (a + ((1 - (1 / Math.pow(1 + i, n - a))) / i));
        else
            p = i * (1 + i) * (c * Math.pow(1 + i, n) - r) / (Math.pow(1 + i, n + 1) - (1 + i));
    }
    return p;
}

function calcFormPayment(form) {

    //checkFieldValue2("Amount Financed", form.equipCost.value);

    var freq = PAY_FREQ_MAP[form.paymentFreq.options[form.paymentFreq.selectedIndex].value];
    var pmts = parseInt(GLOBAL_TERM) * freq / 12;
    var apr = parseFloat((form.chart) ? form.chart.value : form.rate.value) / 100;
    var c = parseFloat(form.equipCost.value);
    var n = Math.ceil(pmts);
    var i = apr / freq;
    //var r = (form.resAmt) ? parseFloat( form.resAmt.value ) / 100 * c : 0;
    var r = (form.resAmt) ? parseFloat(form.resAmt.value) : 0;
    var a = (form.numAdvPay) ? parseInt(form.numAdvPay.value) : 0;

    // charge interest over the uneven delay period
    var delay = parseInt(GLOBAL_TERM) - (Math.floor(pmts) * 12 / freq);

    if (!isNaN(delay)) {

        if (delay > 0) {
            c *= (1 + (apr / 12 * delay));
            if (!(a > 0)) a = 1;
        }
        //alert( "freq "+ freq +", pmts "+ pmts +", apr "+ apr +", delay "+ delay + ", res " + r );

        if (delay == 0 && a == 0) // no delay and in arrears
            form.delayMonths.value = 12 / freq;
        else
            form.delayMonths.value = delay;
    }

    if (form.numAdvPay) form.numAdvPay.value = a;
    form.paymentAmt.value = formatMoney(calcPayment(c, n, i, r, a));
}

function checkTerm(field) {
    term = field.value;
    if (term.indexOf('.') >= 0) {
        //alert("Term should be positive integer");
        alert(WriteTextMsg(5113));
        field.value = "";
    }
    GLOBAL_TERM = term;
}

function checkFieldValue(field) {
    if (field.value == "") {
        //alert("Can not be empty");
        alert(WriteTextMsg(5115));
    }
}

function checkFieldValue2(str, val) {
    if (val == "") {
        alert(str + " " + WriteTextMsg(5115));
    }
}


function checkResidual(field) {
    if (field.value == "") {
        //alert("Residual Amount");
        alert(WriteTextMsg(5116));

        field.value = "";
    }
}

function changeTerm() {
    var terms1 = GLOBAL_TERM;
    var temp = parseInt(terms1);
    var freq = document['MyLoanForm'].paymentFreq.value;

    switch (freq) {
        case "1":
            document['MyLoanForm'].terms.value = (temp / 12) + "";
            break;
        case "2":
            document['MyLoanForm'].terms.value = (temp / 6) + "";
            break;
        case "4":
            document['MyLoanForm'].terms.value = (temp / 3) + "";
            break;
        case "12":
            document['MyLoanForm'].terms.value = temp + "";
            break;
        default:
            break;
    }
    document.getElementById('temp').innerHTML;
}

var layerList = ["LoanCalc", "LoanAction", "LeaseCalc", "LeaseAction"];
function switchCalc() { for (i in layerList) { 
//toggleLayer(getDocLayer(this, layerList[i])); 
$('#'+layerList[i]).toggle(); 
} }

function doLoad() {
    for (i in layerList) {
        //alert("Here 1");
        if (layerList[i].indexOf("Loan") == 0) {
            //alert("Here 2");
            showLayer(getDocLayer(this, layerList[i]));
            //alert("Here 3");
        }

        else hideLayer(getDocLayer(this, layerList[i]));
    }
}
