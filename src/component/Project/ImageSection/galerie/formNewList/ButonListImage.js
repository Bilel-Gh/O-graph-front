import React, {useState,useEffect} from 'react';

const ButonListImage = ({state}) => {
    const {check, setCheck} = useState(state.checked)

    const checkBoxClick = (e) => {
        e.preventDefault();
        setCheck(!check)
    }

    // useEffect(()=>{
    //     setCheck(state.checked)
    // },[])

    return (
        <div className="contain-name-list-image">
            <input type="checkbox" checked={check} onclick={checkBoxClick}/> 
            Nouvelle liste image
        </div>


    )
}

export default ButonListImage