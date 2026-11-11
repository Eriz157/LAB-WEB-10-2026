import { useState } from "react";

function MenuCard({menu, onTambah}) {
    const [detail, setDetail] = useState(false);

    return (
        <article className="rounded-xl border border-amber-200 bg-white p-4 shadow-sm">
            <h3 className="text-lg font-bold">{menu.nama}</h3>
            <p className="text-sm text-stone-500">{menu.kategori}</p>
            <p className="my-2 font-semibold text-amber-800">
                Rp {menu.harga.toLocaleString("id-ID")}
            </p>
            <p className={menu.tersedia ? "text-green-700" : "text-red-600"}>
                {menu.tersedia ? "Tersedia" : "Habis"}
            </p>

            {detail && (
                <p className="my-3 text-sm">{menu.deskripsi}</p>
            )}

            <div className="mt-4 flex gap-2">
                <button
                    onClick={()=> setDetail(!detail)}
                    className="flex-1 rounded-lg border border-amber-800 px-3 py-2"
                >
                    {detail ? "Tutup Detail" : "Detail"}
                </button>
                <button
                    disabled={!menu.tersedia}
                    onClick={()=>onTambah(menu)}
                    className="flex-1 rounded-lg bg-amber-900 px-3 py-2 text-white disabled:bg-gray-400"
                >
                    {menu.tersedia ? "Tambah +" : "Habis"}
                </button>
            </div>
        </article>
    );
}

export default MenuCard;