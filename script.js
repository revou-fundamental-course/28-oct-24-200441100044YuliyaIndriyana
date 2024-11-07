document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const gender = document.querySelector('input[name="gender"]:checked').value;
    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value) / 100; // Convert to meters
    const age = parseInt(document.getElementById('age').value);

    if (isNaN(weight) || isNaN(height) || isNaN(age)) {
        alert('Please enter valid inputs.');
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2);  // Mengembalikan nilai BMI dengan 2 desimal
    
    // Fungsi untuk memberikan kategori BMI dan rekomendasi
    let category = '';
    let recommendation = '';

    if (bmi < 18.5) {
        category = 'Kurang';
        recommendation = 'Disarankan untuk meningkatkan asupan kalori dan berkonsultasi dengan ahli gizi untuk mencapai berat badan yang sehat.';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = 'Ideal';
        recommendation = 'Pertahankan pola makan yang seimbang dan rutin berolahraga untuk menjaga berat badan tetap stabil.';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = 'Berlebih';
        recommendation = 'Mulailah untuk meningkatkan aktivitas fisik dan mengurangi konsumsi kalori untuk mencapai berat badan yang lebih sehat.';
    } else {
        category = 'Mengalami Obesitas';
        recommendation = 'Perubahan gaya hidup yang signifikan diperlukan, termasuk diet sehat dan olahraga teratur. Konsultasikan dengan dokter atau ahli gizi untuk rencana penurunan berat badan.';
    }

    // Ambil form dan tombol reset
    const form = document.getElementById('bmiForm');
    const resetBtn = document.getElementById('resetBtn');

    // event listener untuk tombol reset
    resetBtn.addEventListener('click', function() {
        // Reset form tanpa refresh halaman
        form.reset();

        // Menghapus hasil BMI jika ada
        document.querySelector('.result').innerHTML = '';
    });

    // Tampilkan hasil BMI dan rekomendasi
    document.querySelector('.result').innerHTML =
     `<div style="background-color: white;width: 350px; padding: 20px; border-radius: 5px;">
        <p style="font-size:17px; font-family: Arial, sans-serif;">Gender: ${gender}  Age: ${age}</p>
        <h1 style ="margin-top:5px">${bmi}</h1>
        <p style="font-size:12px; font-family: Arial, sans-serif;">Berat Badan Anda ${category}</p>
        <p style="font-size:14px; font-family: Arial, sans-serif; margin-top: 10px;"><strong>Rekomendasi:</strong> ${recommendation}</p>
      </div>`;
});
