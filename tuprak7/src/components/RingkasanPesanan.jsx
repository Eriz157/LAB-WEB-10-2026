function RingkasanPesanan ({
    pesanan,
    jumlahItem,
    totalHarga,
    ubahJumlah
}) {
    return (
        <section className="rounded-xl border border-amber-200 bg-white p-4">
            <h2 className="mb-3 text-xl font-bold">Pesanan Saya</h2>
            <p className="mb-3 text-sm text-stone-500">
            Jumlah: {jumlahItem} item
            </p>

            {pesanan.length === 0 && (
                <p className="mb-4 text-sm text-stone-500">
                    item pesanan kosong
                </p>
            )}

            {pesanan.map((item)=>(
                <div
                    key={item.id} className="border-b py-3"
                >   
                <span className="px-3 py-2 bg-amber-800 rounded-lg text-white">{item.nama}</span>
        
                    <p className="mt-3">Rp {(item.harga*item.jumlah).toLocaleString("id-ID")}</p>
                    <div className="mt-2 flex items-center gap-3">
                        
                        <button
                            onClick={()=> ubahJumlah(item.id, -1)}
                            className="rounded border px-3 py-1"
                        >
                            -
                        </button>
                        
                        <span>{item.jumlah}</span>
                        <button
                        onClick={()=> ubahJumlah(item.id, 1)}
                        className="rounded border px-3 py-1"
                        >
                            +
                        </button>
                    </div>
                </div>
            ))}
            <p className="mt-4 font-bold">
                Total: Rp {totalHarga.toLocaleString("id-ID")}
            </p>
        </section>
    );
}

export default RingkasanPesanan;