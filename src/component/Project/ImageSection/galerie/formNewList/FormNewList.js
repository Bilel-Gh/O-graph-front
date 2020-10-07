import React from 'react'

import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import {modalIONewImage, uploadImage, postImage, newImageUpload, modalIONewList} from '../../../../../store/imageSlice';
import ButonListImage from './ButonListImage'
import './formNewList.css'

const FormNewList = () => {

    const imageState = useSelector(state=>state.imageSlice)
    const dispatch = useDispatch()
    const state = {
        checked:true
    }

    const handleModalClose = (e) => {
        e.preventDefault();
        dispatch(modalIONewList(false))
    }
    
    const createList = ()=> {

        return(
            <>
                {
                    imageState.AllListProject.map(listImage=>(
                        <> 

                        </>
                    ))
                }
            </>
        )
    }

    return (
        <div className="container-modal-new-list">
        <Modal show={imageState.modalIONewList} onHide={handleModalClose} className='modal-newMessage ' size='xl'>
                <Modal.Header>Nouvlles images</Modal.Header>
                     
                <Modal.Body className='modal-new-list '>
                    <ul>
                        <ButonListImage state={{checked:true}} />
                       
                        {createList()}
                    </ul>
                    <Button  className="close-button" onClick={handleModalClose} variant="primary">
                               fermer
                            </Button>
                </Modal.Body>

        </Modal>
        </div>
    )
}

export default FormNewList
