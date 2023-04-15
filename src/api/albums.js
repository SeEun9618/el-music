import {httpClient} from "@/lib/axios";

export const getAlbums = async (limit = 100) => {
    return httpClient.get(`/us/rss/topalbums/limit=${limit}/json`, {})
    .then(response => response.data);
};