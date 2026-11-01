import { useState } from "react";

function FormPesan({ jumlahItem, onKirim }) {
    const [nama, setNama] = useState("");
    const [meja, setMeja] = useState("");
    const [error, setError] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        
        if (jumlahItem === 0) {
            setError("pilih menu terlebih dahulu");
            return;
        }

        if(nama.trim() === "") {
            setError("Nama harus diisi.");
            return;
        }

        if (meja.trim()=== "" || !/^[1-9]\d*$/.test(meja.trim())) {
            setError("Nomor meja harus berupa angka positif.");
            return;
        }

        onKirim(nama.trim(), meja.trim());

        setError("");
        setMeja("");
        setNama("");
    }

    return (
        <section className="rounded-xl border border-amber-200 bg-white p-4">
            <h2 className="mb-4 text-xl font-bold">Data Pemesan</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label htmlFor="nama" className="mb-1 block">
                        Nama pelanggan
                    </label>

                    <input
                        id="nama"
                        value={nama}
                        onChange={(event)=> setNama(event.target.value)}
                        className="w-full rounded-lg border p-2"
                        placeholder="Masukkan nama"
                    />
                </div>

                <div>
                    <label htmlFor="meja" className="mb-1 block">
                        Nomor meja
                    </label>

                    <input
                        id="meja"
                        type="number"
                        min="1"
                        step="1"
                        value={meja}
                        onChange={(event)=> setMeja(event.target.value)}
                        className="w-full rounded-lg border p-2"
                        placeholder="Contoh: 5"
                    />
                </div>

                {error && (
                    <p role="alert" className="tet-sm text-red-600">
                        {error}
                    </p>
                )}

                <button
                type="submit"
                disabled={jumlahItem === 0}
                className="w-full rounded-lg bg-amber-900 p-3 font-semibold text-white"
                >Kirim Pesanan</button>
                
            </form>
        </section>
    );
}


export default FormPesan;