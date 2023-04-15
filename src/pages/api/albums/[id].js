import {getAlbums} from "@/api/albums";

export default async function handler(req, res) {

    const { id } = req.query

    const data = await getAlbums();

    const album = data.feed.entry.find(data => {
        return id === data["id"]["attributes"]["im:id"];
    });

    if(!album) {
        res.status(404).json({"message": "not found album"});
        return;
    }

    res.status(200).json(album);
}
