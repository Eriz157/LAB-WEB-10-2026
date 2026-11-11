
function Navbar({ kategori, setKategori, jumlahItem, totalHarga }) {
  const daftarKategori = ["Semua", "Kopi", "Non-Kopi", "Makanan", "teh"];

  return (
    <header className="bg-amber-950 p-4 text-white">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4">
        <h2 className="text-xl font-bold">☕ Kopi Senja</h2>

        <p>
          {jumlahItem} item | Rp {totalHarga.toLocaleString("id-ID")}
        </p>
      </div>

      <nav className="mx-auto mt-4 flex max-w-6xl flex-wrap gap-2">
        {daftarKategori.map((namaKategori) => (
          <button
            key={namaKategori}
            onClick={() => setKategori(namaKategori)}
            className={`rounded-lg px-4 py-2 ${
              kategori === namaKategori
                ? "bg-white text-amber-950"
                : "bg-amber-800 text-white"
            }`}
          >
            {namaKategori}
          </button>
        ))}
      </nav>
    </header>
  );
}

export default Navbar;
