const btn = document.getElementById('calculate');

btn.addEventListener('click', function() {
  let height = document.querySelector('#height').value;
  let weight = document.querySelector('#weight').value;

  if (height == '' || weight == '') {
    alert('silahkan isi data terlebih dahulu');
    return;
  }
  height = height / 100;
  let BMI = weight / (height * height);
  BMI = BMI.toFixed(2);
  document.querySelector('#result').innerHTML = BMI;
  let status = '';
  if (BMI < 18.5) {
    status = "Kurus 😐 [Makan yg banyak yah]";
  }
  if (BMI >= 18.5 && BMI < 25) {
    status = "Sehat (Ideal) 😍 [Pertahankan Pola Makannya]";
  }
  if (BMI >= 25 && BMI < 30) {
    status = "Kegendutan 😵 [Kurangin Ngemilnya]";
  }
  if (BMI >= 30) {
    status = "Gendut Parah 💀 [Olahraga rutin terus diet oi]";
  }
  document.querySelector(
    '.comment'
  ).innerHTML = `Kamu <span id="comment">${status}</span>`;
});