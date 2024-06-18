let saldo = 0;

const updateSaldoDisplay = () => {
  document.getElementById("saldoDisplay").innerText = `Saldo saat ini: ${saldo.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
};

const tambahSaldo = () => {
  let jumlah = parseInt(prompt("Masukkan jumlah saldo yang ingin ditambahkan:"));

  if (isNaN(jumlah) || jumlah <= 0) {
    alert("Masukkan jumlah yang valid.");
  } else {
    saldo += jumlah;
    alert(`Saldo berhasil ditambahkan. Saldo baru: ${saldo.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
    updateSaldoDisplay();
  }
};

const kurangiSaldo = () => {
  let jumlah = parseInt(prompt("Masukkan jumlah saldo yang ingin dikurangi:"));

  if (isNaN(jumlah) || jumlah <= 0) {
    alert("Masukkan jumlah yang valid.");
  } else {
    saldo -= jumlah;
    alert(`Saldo berhasil dikurangi. Saldo baru: ${saldo.toLocaleString("id-ID", { style: "currency", currency: "IDR", minimumFractionDigits: 0, maximumFractionDigits: 0 })}`);
    updateSaldoDisplay();
  }
};
