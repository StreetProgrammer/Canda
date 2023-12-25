/* Loan calculator*/
	 function calcPayment(price,rate,period,base){
		rate = (rate/base)/100;
		period = (period/12)*base;
		x= rate * ((1+rate)**period) ;
		y= ((1+rate)**period) - 1;
		monthly = price * (x / y);
		return monthly;
	}
	function calcInstallment(){
		let downpayment = document.getElementById('loan-down-payment').value;
		let price= document.getElementById('loan-amount').value - downpayment;
		let rate= document.getElementById('loan-interest-rate').value;
		let period= document.getElementById('loan-term').value;
		let basis=  document.getElementById('loan-frequency').value;
		let instalment = [];

		if(basis == 12){
		instalment['basis']  = 'Monthly';
		instalment['amount'] = calcPayment(price,rate,period,12);
		}
		if(basis == 24){
		instalment['basis']  = 'Bi Weekly';
		instalment['amount'] = calcPayment(price,rate,period,26);
		}
		if(basis == 48){
		instalment['basis']  = 'Weekly';
		instalment['amount'] = calcPayment(price,rate,period,52);
		}
		//return instalment;
		$('.loan-amount-txt').text(instalment['amount'].toFixed(2)); 
		$('.loan-basis-txt').text(instalment['basis']);
		$('.loan-basis-txt-short').text(instalment['basis'].substring(0,2));
		

	} 
	function calc_reset(){
		$('#loan-amount').val(0);
		$('#loan-down-payment').val(0);
		$('#loan-interest-rate').val(0);
		$('#loan-frequency').val(12);
		$('#loan-term').val(12);
	}