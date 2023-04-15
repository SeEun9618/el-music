import AlbumItem from "@/components/Albums/AlbumItem";

const AlbumDetail = ({ data }) => {

    return (
        <>
            <AlbumItem data={data} />
        </>
    )
};
export default AlbumDetail;

export async function getServerSideProps({ params }) {

    const albumId = params.id;

    const response = await fetch(`${process.env.API_URL}/albums/${albumId}`);
    const errorCode = response.ok ? false : response.status;

    if(errorCode) {
        return {
            props: {
                error: {'statusCode': errorCode}
            }
        }
    }
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}



