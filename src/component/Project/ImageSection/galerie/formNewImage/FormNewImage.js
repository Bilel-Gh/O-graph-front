import React, {useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import {modalIONewImage, uploadImage, postImage, newImageUpload} from '../../../../../store/imageSlice';
import ShowNewImageUpload from '../showNewImageUpload/ShowNewImageUpload'
import FormNewList from '../formNewList/FormNewList'
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
        // dispatch(uploadImage(formData))
        // setTimeout(() => {
            //     let empty
            // }, 3000);
            let state
            // dispatch(postImage(state))
            
            reader.onload = ()=>{
                let dataImage = reader.result;
                console.log(dataImage)
                console.log(file)
                dispatch(newImageUpload({
                    data:dataImage,
                    imageFromServer:false
                }))
        
        }
    }

    useEffect(()=> {

    },[imageState.newImage.image_url])

    return(
        <div className="container-modal">
            <Modal show={imageState.modalIONewImage} onHide={handleModalClose} className='modal-newMessage ' size='xl'>
                    <Modal.Header>Nouvlles images</Modal.Header>
                         
                    <Modal.Body className='modal-new-image-body '>
                        <div className="bar-buton-new-image-upload"> 
                            <input type="file" multiple name="file" onChange={makeUploadImage}/>
                            <Button  className="close-button" onClick={handleModalClose} variant="primary">
                                Close Modal
                            </Button>
                        </div>
                        <ShowNewImageUpload />
                    </Modal.Body>

            </Modal>
            <FormNewList />
        </div>
    )
}

export default FormNewImage;