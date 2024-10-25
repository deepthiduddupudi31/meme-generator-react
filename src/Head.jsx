import trollface from './troll-face.png';
export default function Head()
{
    return(
       <div className="Head">
        <img src={trollface}></img>
        <h1 class="heading">MEME GENERATOR</h1>
        <h2 class="project">React course-project3</h2>
       </div>
    )
}