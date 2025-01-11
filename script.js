// Add event listener for loan assistance form submission
document.getElementById('loan-assistance-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.loan-assistance-form').classList.add('submitted');
    showLoanOptions();
    showSuccessMessage('.loan-assistance-form');
  });
  
  // Add event listener for loan preferences form submission
  document.getElementById('loan-preferences-form').addEventListener('submit', function(event) {
    event.preventDefault();
    document.querySelector('.loan-preferences').classList.add('submitted');
    showLoanOptions();
    showSuccessMessage('.loan-preferences');
  });
  
  // Add event listener for calculate EMI button
  document.getElementById('calculate-emi-button').addEventListener('click', function() {
    const loanAmount = parseFloat(document.getElementById('loan-amount-emi').value);
    const interestRate = parseFloat(document.getElementById('interest-rate-emi').value);
    const loanTenure = parseFloat(document.getElementById('loan-tenure-emi').value);
  
    const monthlyEMI = calculateEMI(loanAmount, interestRate, loanTenure, 12);
    const quarterlyEMI = calculateEMI(loanAmount, interestRate, loanTenure, 4);
    const halfYearlyEMI = calculateEMI(loanAmount, interestRate, loanTenure, 2);
    const yearlyEMI = calculateEMI(loanAmount, interestRate, loanTenure, 1);
  
    document.getElementById('monthly-emi').innerText = `Monthly EMI: ₹${monthlyEMI.toFixed(2)}`;
    document.getElementById('quarterly-emi').innerText = `Quarterly EMI: ₹${quarterlyEMI.toFixed(2)}`;
    document.getElementById('half-yearly-emi').innerText = `Half Yearly EMI: ₹${halfYearlyEMI.toFixed(2)}`;
    document.getElementById('yearly-emi').innerText = `Yearly EMI: ₹${yearlyEMI.toFixed(2)}`;
  
    document.querySelector('.emi-results').classList.remove('hidden');
  });
  
  // Function to calculate EMI
  function calculateEMI(loanAmount, interestRate, loanTenure, periodsPerYear) {
    const rate = interestRate / (periodsPerYear * 100);
    const n = loanTenure * periodsPerYear;
    const emi = (loanAmount * rate * Math.pow(1 + rate, n)) / (Math.pow(1 + rate, n) - 1);
    return emi;
  }
  
  // Function to show loan options
  function showLoanOptions() {
    const assistanceSubmitted = document.querySelector('.loan-assistance-form').classList.contains('submitted');
    const preferencesSubmitted = document.querySelector('.loan-preferences').classList.contains('submitted');
  
    if (assistanceSubmitted && preferencesSubmitted) {
      document.querySelector('.loan-options').classList.remove('hidden');
    }
  }
  
  // Function to show success message
  function showSuccessMessage(formSelector) {
    document.querySelector(`${formSelector} .success-message`).classList.remove('hidden');
  }
  