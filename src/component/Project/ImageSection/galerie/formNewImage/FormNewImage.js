import React, {useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import {modalIONewImage, uploadImage, postImage} from '../../../../../store/imageSlice';
import './formNewImage.css'

const FormNewImage = () => {
    const imageState = useSelector(state=>state.imageSlice)
    const dispatch = useDispatch()
    const handleModalClose = (e) => {
        e.preventDefault();
        dispatch(modalIONewImage(false))
    }

    const handleSubmitNewImage = () => {

    }

    const makeUploadImage = async (e) => {
        const files = e.target.files;
        // console.log(e.target.files)
        loadImage(files[0])

      }
    const loadImage =  (file)  => {

    // for (let index = 0; index < files.length; index++) {
    //     const file = files[index];
    //     let reader = new FileReader()
    //     reader.readAsDataURL(file)
    //     reader.onload = ()=>{
    //     let dataURL = [reader.result];
    //     listImage = [...listImage,...dataURL]
    //     setImage(listImage)
    //     };
    // }
       
        let reader = new FileReader()
        reader.readAsDataURL(file)
        const formData = new FormData();
        formData.append('file',file)
        dispatch(uploadImage(formData))
        setTimeout(() => {
            let empty
            dispatch(postImage(empty))
        }, 3000);
       
        reader.onload = ()=>{
        let dataImage = [reader.result];
        
        }
    }

    useEffect(()=> {

    },[imageState.newImage.image_url])

    return(
        <div>
            <Modal show={imageState.modalIONewImage} onHide={handleModalClose} className='modal-newMessage'size='xl'>
                    <Modal.Header>Nouvlles images</Modal.Header>
                         <div className="colorPicker-Container">
                           


                        </div>
                    <Modal.Body className='modal-new-image-body'>
                    <input type="file" multiple name="file" onChange={makeUploadImage}/>


                        <Button  className="close-button" onClick={handleModalClose} variant="primary">
                            Close Modal
                        </Button>
                    </Modal.Body>

            </Modal>
        </div>
    )
}

export default FormNewImage;