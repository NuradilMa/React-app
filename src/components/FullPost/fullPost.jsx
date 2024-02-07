import '../FullPost/fullPost.css'
import Post from '../Post/post';


function FullPost(){
    return(
        <>
        <div className="container">
            <Post/>
            <Post/>
            <Post/>
        </div>
        </>
    )
}
export default FullPost;