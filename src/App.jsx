import Header from "./Header.jsx";
import Songs from "./Songs.jsx";
import songsData from "./songsData";

function App() {
    const mySongs = songsData.map((song) => {
        console.log(song.name);
        return <Songs key={song.id} name={song.name} img={song.img} iframeSrc={song.iframeSrc} />;
    });

    //console.log(songsData)
    return (
        <main>
            <Header />
            {mySongs}
        </main>
    );
}

export default App;
