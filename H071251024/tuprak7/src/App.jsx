
import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

// Data menu ditulis satu kali di sini
const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

function App() {
  const [kategori, setKategori] = useState("Semua");
  const [pesanan, setPesanan] = useState([]);
  const [pesan, setPesan] = useState("");

  // Filter menu berdasarkan kategori
  const menuTampil = dataMenu.filter((menu) => {
    return kategori === "Semua" || menu.kategori === kategori;
  });

  // Menghitung jumlah semua item
  const jumlahItem = pesanan.reduce((total, item) => {
    return total + item.jumlah;
  }, 0);

  // Menghitung total harga pesanan
  const totalHarga = pesanan.reduce((total, item) => {
    return total + item.harga * item.jumlah;
  }, 0);

  // Menambah menu ke pesanan
  function tambahPesanan(menu) {
    if (!menu.tersedia) return;

    setPesan("");

    const itemAda = pesanan.find((item) => item.id === menu.id);

    if (itemAda) {
      setPesanan(
        pesanan.map((item) =>
          item.id === menu.id
            ? { ...item, jumlah: item.jumlah + 1 }
            : item
        )
      );
    } else {
      setPesanan([
        ...pesanan,
        {
          id: menu.id,
          nama: menu.nama,
          harga: menu.harga,
          jumlah: 1,
        },
      ]);
    }
  }

  // Mengubah jumlah pesanan
  function ubahJumlah(id, perubahan) {
    const pesananBaru = pesanan
      .map((item) => {
        if (item.id === id) {
          return {
            ...item,
            jumlah: item.jumlah + perubahan,
          };
        }

        return item;
      })
      .filter((item) => item.jumlah > 0);

    setPesanan(pesananBaru);
  }

  // Mengirim pesanan
  function kirimPesanan(nama, meja) {
    setPesan(
      `Terima kasih, ${nama}! Pesanan meja ${meja} berhasil dikirim.`
    );

    setPesanan([]);
    setKategori("Semua");
  }

  return (
    <div className="min-h-screen">
      <Navbar
        kategori={kategori}
        setKategori={setKategori}
        jumlahItem={jumlahItem}
        totalHarga={totalHarga}
      />

      <main className="mx-auto max-w-6xl px-4 py-8">
        <h1 className="mb-2 text-3xl font-bold text-amber-950">
          Kedai Kopi Senja ☕
        </h1>

        <p className="mb-8 text-stone-600">
          Pilih menu favoritmu dan pesan langsung dari meja.
        </p>

        {pesan && (
          <p className="mb-6 rounded-lg bg-green-100 p-4 text-green-800">
            {pesan}
          </p>
        )}

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <h2 className="mb-4 text-xl font-bold">
              Daftar Menu
            </h2>

            <MenuList
              menus={menuTampil}
              onTambah={tambahPesanan}
            />
          </section>

          <aside className="space-y-6">
            <RingkasanPesanan
              pesanan={pesanan}
              jumlahItem={jumlahItem}
              totalHarga={totalHarga}
              ubahJumlah={ubahJumlah}
            />

            <FormPesan
              jumlahItem={jumlahItem}
              onKirim={kirimPesanan}
            />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
