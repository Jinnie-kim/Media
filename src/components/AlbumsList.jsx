import { useFetchAlbumsQuery } from '../store/apis/albumsApi';

function AlbumsList({ user }) {
    const results = useFetchAlbumsQuery(user);

    console.log(results);

    // console.log(data, error, isLoading);

    return <div>Albums For {user.name}</div>;
}

export default AlbumsList;
