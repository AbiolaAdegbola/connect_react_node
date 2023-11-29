
export default function YoutubeVideo({id}){
    return (<div className="mt-10 mb-10">
        <iframe width="560" height="315" 
        src={"https://www.youtube.com/embed/"+id} 
        title="YouTube video player" frameborder="0" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>)
}