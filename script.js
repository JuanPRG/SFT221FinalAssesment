document.getElementById('contactForm').addEventListener('input', function () {
    var form = this;
    var isValid = form.checkValidity();
    form.querySelector('input[type="submit"]').disabled = !isValid;
});

document.querySelectorAll('input[name="topic"]').forEach(function(radioButton) {
    radioButton.addEventListener('change', function () {
        var hourlyRateContainer = document.getElementById('hourlyRateContainer');
        hourlyRateContainer.style.display = (this.value === 'Hiring') ? 'block' : 'none';
    });
});