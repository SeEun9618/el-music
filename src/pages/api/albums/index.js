import { getAlbums } from "@/api/albums";

export default async function handler(req, res) {
  const data = await getAlbums();

  const searchWord = req.query.q;
  if (searchWord) {
    data.feed.entry = data.feed.entry.filter((data) => {
      return data["im:name"]["label"]
        .toLowerCase()
        .includes(searchWord.toLowerCase());
    });
  }

  res.status(200).json(data);
}
