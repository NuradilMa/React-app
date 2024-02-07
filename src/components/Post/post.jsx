import '../Post/post.css'
import image from '../img/shrek-meme-wallpaper-73806-76481-hd-wallpapers.jpg'
import logo from '../img/profile.jpg'

function Post(){
    return(
        <>
           <div class="news" >
                <div class="left">
                    <div class="top">
                        <div className="infoTop">
                        <img src={logo} alt="" />
                        <p>Authors name</p>
                        <span>in</span>
                        <p>Topics Name</p>
                        <span>.</span>
                        <span>7 July </span>
                        </div>
                        <div className="topText">
                            <h4>7 Practical CSS Tips</h4>
                            <p>You not only learn more Python by implementing what you already know but, in the end, you can see how all your hard work pays off.</p>
                        </div>
                    </div>
                    <div class="bottom">
                        <div class="infoBottom">
                            <div className="details">
                            <button><h4>JavaScript</h4></button>
                            <p>12min read</p>
                            <span>.</span>
                            <p>Selected for you</p>
                            </div>
                        </div>
                    </div>
                </div>
                <img src={image} alt="" className='image'/>
            </div> 
            <hr />
            <br /><br />
        </>
    )
}
export default Post;