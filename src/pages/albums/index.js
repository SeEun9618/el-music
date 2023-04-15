import AlbumListContainer from "@/components/Albums/AlbumListContainer";

export default function Albums ({ data }) {

    return (
        <>
            <AlbumListContainer data={data} />
        </>
    );
}

export async function getServerSideProps({ query }) {

    const queryString = new URLSearchParams(Object.entries(query)).toString();

    const response = await fetch(`${process.env.API_URL}/albums?${queryString}`);
    const errorCode = response.ok ? false : response.status;

    if(errorCode) {
        return {
            props: {
                error: {'statusCode': errorCode}
            }
        }
    }

    const data = (await response.json()).feed.entry;

    return {
        props: {
            data: data
        }
    }
}
