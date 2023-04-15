import MenuFilter from "@/components/MenuFilter";
import AlbumList from "@/components/Albums/AlbumList";
import { useEffect, useState } from "react";

export default function AlbumListContainer({ data }) {

    const [albums, setAlbums] = useState(data);

    const [sort, setSort] = useState(null);

    useEffect(() => {
        const sortedAlbums = [...albums].sort((a, b) => {
            const nameA = a["im:name"]["label"].toUpperCase();
            const nameB = b["im:name"]["label"].toUpperCase();
            if (sort === "asc") {
                return nameA.localeCompare(nameB);
            } else if(sort === "desc") {
                return nameB.localeCompare(nameA);
            }
            return 0;
        })
        setAlbums(sortedAlbums);
    }, [sort]);

    useEffect(() => {
        setAlbums(data);
    }, [data])

    return (
        <>
            <MenuFilter setSort={setSort} />
            <AlbumList data={albums} />
        </>
    );
}