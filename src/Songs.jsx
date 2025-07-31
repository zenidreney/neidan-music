function Songs(props) {
    console.log(props)
    return (
        <article>
            <img src={props.img} />
            <h2>{props.name}</h2>

            <iframe
            
                src={props.iframeSrc}
                seamless>
                <a href="https://neidanmusicproduction.bandcamp.com/track/enigmatic-ocean">Enigmatic Ocean by NeiDan</a>
            </iframe>
        </article>
    );
}
export default Songs;
