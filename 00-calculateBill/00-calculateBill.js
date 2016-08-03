function calculateBill (bill, vatRate, tipRate) {
  
  vatRate = +vatRate / 100 * +bill;
  tipRate = +tipRate / 100 * +bill;
  
  return '£' + (+bill + vatRate + tipRate).toFixed(2);
}

//Take the bill

//Calculate the VAT to be added (vatRate / 100 * bill)

//Calculate the tip to be added (tipRate / 100 * bill)

//Add all together

//format to 2 decimal places

//add the £ sign

//return as string

module.exports = calculateBill;