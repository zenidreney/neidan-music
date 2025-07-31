import Header from "./Header.jsx";
import Songs from "./Songs.jsx";
import songsData from "./songsData";

function App() {
    const mySongs = songsData.map((song) => {
        //console.log(song);
        return <Songs key={song.id} {...song}/>;
    });

    console.log(mySongs)
    return (
        <main>
            <Header />
            {mySongs}
        </main>
    );
}

export default App;
