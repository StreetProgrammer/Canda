$(document).ready(function () {
    function qsa(s) { return document.querySelectorAll(s) }
    function qs(s) { return document.querySelector(s) }


    var handle = qsa('.seekbar input[type="range"]');
    document.querySelectorAll('.seekbar input[type="range"]').forEach(item => {
        item.addEventListener('input', function () {
            // start handle slide 
            // console.log((100 / (item.max / item.step)) * (item.value / item.step));
            // var x = 100 / (item.max / item.step)
            var targetAdrress = "#seekbar-" + this.id.split('-')[1] + " div[role='progressbar']";
            // console.log(item.value);

            var target = qs(targetAdrress);

            target.style.width = (100 / (item.max / item.step)) * (item.value / item.step) + '%';
            target.setAttribute('aria-valuenow', (100 / (item.max / item.step)) * (item.value / item.step));
            // start handle related input
            // console.log(document.getElementById(this.id.split('-')[2]))
            if (this.id.split('-')[2] === 'months') {
                document.querySelector('#' + this.id.split('-')[2]).value = item.value
            } else {
                // console.log(item.value.split("").reverse());
                var cashValue1 = item.value.split("").reverse().slice(0, 3).toString().replace(/,/g, '');
                var cashValue2 = item.value.split("").reverse().slice(3).reverse().toString().replace(/,/g, '');
                // console.log('array 1 =>', cashValue1);
                // console.log('array 2 =>', cashValue2);
                $("input[name='hidden-cash']").val(item.value)
                document.querySelector('#' + this.id.split('-')[2]).value = '$' + cashValue2 + ',' + cashValue1 + ',00'
            }

            getValues();
        });
    })

    $(document).ready(function () {

        $("#months").on("change", function () {
            var item = $('#range-1-months');
            item.val($(this).val());
            var calculatedVal = (100 / (item.attr('max') / item.attr('step'))) * (item.val() / item.attr('step'));
            // console.log(calculatedVal);

            var divItem = $("#seekbar-1 div[role='progressbar']");
            divItem.css('width', calculatedVal + '%');
            divItem.attr('aria-valuenow', $(this).val())

            getValues();
        });
    });

    $(document).ready(function () {
        $("#cash").on("change", function () {
            var err = '';
            // related range input
            var rangeInput = $('#range-2-cash');
            if ($(this).val().toString().length === 0) {
                err = 'can not be empty!'
            }
            var cashItem = $(this).val().includes('$') ? $(this).val().replace(/\$/g, '') : $(this).val()
            // console.log('cashItem', Number(cashItem));
            $("input[name='hidden-cash']").val(cashItem)
            if (isNaN(Number(cashItem))) {
                err = 'please enter a valid value'
            }
            if (cashItem < Number(rangeInput.attr('min')) || cashItem > Number(rangeInput.attr('max'))) {
                console.log('out of range');
                err = 'out of range'
            }

            if (err === '') {
                var x = parseFloat(cashItem.replace(/,/g, ""))
                    .toFixed(2)
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ",");
                $(this).val('$' + x)
                // 
                rangeInput.val(Number(cashItem));
                var calculatedVal = (100 / (rangeInput.attr('max') / rangeInput.attr('step'))) * (rangeInput.val() / rangeInput.attr('step'));
                // console.log(calculatedVal);

                var divItem = $("#seekbar-2 div[role='progressbar']");
                divItem.css('width', calculatedVal + '%');
                divItem.attr('aria-valuenow', Number(cashItem))

                getValues();
            } else {
                $('#cash-error').html(`
                    <p style="transform: uppercase">please enter a valid format in order to can calculate</p>
                    <p><span class="bold">EX: </span> 5000</p>
                    <p><small>our cash range from 5000 to 100000</small></p>

                `)
                $('#cash-error').addClass('err-label');
                setTimeout(() => {
                    $('#cash-error').removeClass('err-label');
                }, 2000);
            }
            console.log('err => ', err);

        });
    });

    $('input[type=radio][name=yourCredit]').change(function () {
        // console.log('yourCredit VALUE = ', this.value);
        getValues()

    });
    function getValues() {
        var type = $("input[name='type']").val();
        // console.log('#range-2-cash', $('#range-2-cash').val());
        var cash = $("input[name='hidden-cash']").val();
        // console.log('CASH => ', cash);

        var months = $('#range-1-months').val(); //document.getElementById('range-1-months').value;
        // console.log('MONTHS => ', months);
        var physicalMonthlyRate = $("input[name='yourCredit']:checked").val();
        var monthlyInterestRate = (physicalMonthlyRate / 12) / 100;
        var biWeeklyInterestRate = (physicalMonthlyRate / 26) / 100;
        var weeklyInterestRate = (physicalMonthlyRate / 52) / 100;

        // console.log('Monthly Interest Rate => ', monthlyInterestRate);

        var y = cash * (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, months)) / (Math.pow(1 + monthlyInterestRate, months) - 1);

        var biwipow = 26 * (months / 12)
        var biwi = cash * (biWeeklyInterestRate * Math.pow(1 + biWeeklyInterestRate, biwipow)) / (Math.pow(1 + biWeeklyInterestRate, biwipow) - 1);
        var wipow = 52 * (months / 12)
        var wi = cash * (weeklyInterestRate * Math.pow(1 + weeklyInterestRate, wipow)) / (Math.pow(1 + weeklyInterestRate, wipow) - 1);
        var yAfter = y.toFixed(2)
        // console.log('Y = ', y);
        $('#monthly-box .display-cash').text('$' + yAfter)
        $('#bi-weekly-box .display-cash').text('$' + biwi.toFixed(2))
        $('#weekly-box .display-cash').text('$' + wi.toFixed(2))
        var data = {
            type,
            cash,
            months,
            monthlyInterestRate,
            physicalMonthlyRate,
            chossenPayment: "",
            installment: ""
        }
        // console.log(data);

        localStorage.setItem('data', JSON.stringify(data));
        console.log('data: ', JSON.parse(localStorage.getItem('data')));
    }


    $('.redirect-to-form').on("click", function (e) {
        e.preventDefault();
        var data = JSON.parse(localStorage.getItem('data'));
        var parent = $(this).parent().attr('id').replace('-box', '');
        data.chossenPayment = parent == 'bi-weekly' ? 'Bi Weekly' : parent[0].toUpperCase() + parent.substring(1);
        data.installment = Number($(this).prev().text().replace(/\$/g, ''));
        localStorage.setItem('data', JSON.stringify(data));
        // console.log('data: ', JSON.parse(localStorage.getItem('data')));
        window.location.href = "http://applyforit.simplywebeditor.com/Form"
    });



    if ($('.clac-form-container').length) {
        // console.log('it exists');
        if (localStorage.getItem("data") === null) {
            setTimeout(() => {
                // window.location.href = "http://www.w3schools.com";
            }, 3000);
        } else {
            var data = JSON.parse(localStorage.getItem('data'))
            $("input[name='monthlyInterestRate']").val(data.monthlyInterestRate);
            $("input[name='cash']").val('$ ' + data.cash);
            $("input[name='months']").val(data.months);
            $("input[name='rate']").val(data.physicalMonthlyRate + ' %');
            $("input[name='frequency']").val(data.chossenPayment);
            $("input[name='payment']").val('$ ' + data.installment);
            $("input[name='need-delivery']").val('Yes')
            $("select[name='type']").val(data.type);
            controlModelInput(data.type)
        }
    } else {
        getValues();
    }

    $('select[name=type]').change(function () {
        // console.log('slected type options = ', types[this.value]);
        controlModelInput(this.value)

    });



    function controlModelInput(chossen) {
        var types = {
            Motorsports: [
                'Brands',
                'Honda',
                'Can Am',
                'Suzuki',
                'Yamaha',
                'Polaris',
                'Kawasaki',
                'Arctic Cat',
                'Cf Motto',
                'Textron',
                'Jhon DEERI',
                'Kubota',
                'KTM',
                'BMW',
                'Duccatti',
                'Harley',
                'Aprillia',
                'Indian',
                'Hyosung',
                'Motto Guzzi',
                'BRP',
                'Other'
            ],
            Marine: [
                'Sea Doo',
                'Yamaha',
                'Kawasaki',
                'Honda',
                'Lund',
                'Tiga',
                'Other'
            ],
            Auto: [
                'Honda', 'BMW', 'Chevrolet', 'Toyota', 'Other'
            ],
            RV: [
                'Alpenlite',
                'Coachmen',
                'Forset River',
                'gulfstream',
                'Heartland',
                'Highland Ridge RV',
                'InTech RV',
                'Keystone RV',
                'Lance',
                'Northern Lite',
                'nuCamp',
                'Palomino',
                'Winnbago',
                'Other'
            ],
            'Mortgage': null,
            'Private Sale': null,
            'Insurance': null
        }
        // console.log('slected type options inside Function = ', types[chossen]);
        var ModelListItems = '';
        if (types[chossen] !== null) {
            $('.customizable-input').html(`
            <select class="input-md form-control" name="make">
            </select>
            `)
            for (var i = 0; i < types[chossen].length; i++) {
                // console.log(types[chossen][i]);

                ModelListItems += "<option value='" + types[chossen][i] + "'>" + types[chossen][i] + "</option>";
            }
            setTimeout(() => {
                $("select[name=make]").html(ModelListItems);
            }, 300);

        }
        else {
            $('.customizable-input').html('<input class="form-control" name="make" type="text">')
        }
    }
});