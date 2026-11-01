import MenuCard from "./MenuCard";

function MenuList({menus, onTambah}) {
    return(
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {menus.map((menu)=>(
                <MenuCard
                key={menu.id}
                menu={menu}
                onTambah={onTambah}
                />
            ))}

            {menus.length === 0 &&(
                <p>Tidak ada menu pada kategori ini.</p>
            )}
        </div>
    );
}

export default MenuList;