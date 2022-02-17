import { useSelector, useDispatch } from 'react-redux';
import { updateAction } from './../../store/actions'

const Test = () => {
    const dispatch = useDispatch()
    const user = useSelector(state => state)


    const Reload = () => {
        dispatch(updateAction({
            myId: "62093bfd04732fbeb93961a",
            token: "JVU4niZmHAzzoPAnViq6LY1SguGXOCI4"
        }))
        console.log(user)
    }

    return (
        <div>
            <button onClick={() => Reload()}>Reload</button>
        </div>
    )
}

export default Test