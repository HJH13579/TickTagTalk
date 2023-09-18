import './AppBar.css'
import { useNavigate} from 'react-router-dom'

function AppBar(props) {
    const navigate = useNavigate()
    const handleBack = ()=>{
        navigate('/')
    }



    return (
        <>
        <div className='appbar-underline'>
            <img src="./Icon/뒤로가기.png" alt="" className='appbar-absoulte' onClick={handleBack}/>
            <div className='appbarcontainer'>
                <p className='appbarcenter'> {props.title} </p>
            </div>
        </div>
        </>
      );
    }

export default AppBar;