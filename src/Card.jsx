
import profilepic from './assets/profie.jpg'
function Card(){

 return(

  <div className="card">
    <div className='image-container'>
     <img className='card-image' src={profilepic} alt="profile picture" />
    </div>
    <div className='card-description'>
     <h2 className='card-title'>Olatunji Adekunle</h2>
     <p>I make Youtube videos and play video games</p>
    </div>
  </div>
 );
}

export default Card