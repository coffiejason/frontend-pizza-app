import React,{useState} from 'react'
import { Header, Reciept } from '../../components'
import Processing from '../../components/Processing/Processing';

const StatusPage = () => {
    const [orderNumber, setOrderNumber] = useState();
    const [feedBack,setFeedBack] = useState('');
    const [isDisabled,setIsDisabled] = useState(false);

    const handleInput = (e) =>{
        
        String(e.target.value).length === 10? setFeedBack('Fetching your order ...') : setFeedBack('')



    }

    return (
        <>
            <Header />

            <label>Track an Order</label>
            <div className='status-container'>
                <h3>Your Order Number is:</h3>
                <input type={'text'} placeholder={'Enter Tracking number'} maxLength={'10'} onChange={(e)=>{handleInput(e)}} />
                <p>{feedBack}</p>

            </div>
            {/* <Reciept /> */}
            <Processing />
        </>
    )
}

export default StatusPage