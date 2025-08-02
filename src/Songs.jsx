import bandcampIcon from "/src/assets/bandcamp-button-bc-circle-grey-64.png"

function Songs(props) {
    console.log(props)
    return (
        <article>
           
            <img src={props.img} />
            <div>
                <div className="name-container">
                    <h2>{props.name}</h2>
                  
                        <a className="buy-link" href={props.iframeHref} >Buy
                        <img src={bandcampIcon} />
                        
                        </a>
                    
                </div>
                {props.text && <p>{props.text} </p>}
                {props.genres && <p className="genres">Genres: <span>{props.genres.join(", ")}</span></p>}
            </div>
            <iframe
                src={props.iframeSrc}
                seamless>
                <a href={props.iframeHref}>{props.name} </a>
            </iframe>
            
        </article>
    );
}
export default Songs;
