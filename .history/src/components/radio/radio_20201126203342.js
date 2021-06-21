import './radio.css'
// import PlayCircleFilledWhiteIcon from '@material-ui/icons/PlayCircleFilledWhite';
import radio from '../../images/radio.jpg'

function Radio() {
    return (
        <div className="post">
            <div className="post-left">
                <img src={radio} alt="" />
            </div>
            <div className="post-center">
                <h1>Listen to our live radio programs</h1>
            </div>
        </div>
    )
}

export default Radio;