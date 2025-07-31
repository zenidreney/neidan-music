function Songs(props) {
    console.log(props)
    return (
        <article>
           
            <img src={props.img} />
            <div>
                <h2>{props.name}</h2>
                <p>{props.text} </p>
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
