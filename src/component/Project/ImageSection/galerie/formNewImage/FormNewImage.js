import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import {modalIONewImage, uploadImage} from '../../../../../store/imageSlice'

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
        console.log(e.target.files)
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
        console.log(file)
        reader.readAsDataURL(file)
        const formData = new FormData();
        formData.append('file',file)
        dispatch(uploadImage(formData))
        reader.onload = ()=>{
        let dataImage = [reader.result];
        
        }
    }

    return(
        <div>
            <Modal show={imageState.modalIONewImage} onHide={handleModalClose} className='modal-newMessage'size='xl'>
                    <Modal.Header>Créer un message</Modal.Header>
                         <div className="colorPicker-Container">
                            <p className="p-color">  Choisissez une couleur de sticker  et sélectionnez un point sur l'image </p>


                        </div>
                    <Modal.Body className='modal-newMessage-body'>
                    <input type="file" multiple name="file" onChange={makeUploadImage}/>

                    <Form onSubmit={handleSubmitNewImage} className='modal-form-new-message'>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Titre message</Form.Label>



                        </Form.Group>

                        <Button className="send-button" variant="primary" type="submit">
                        Envoyer
                        </Button>
                        <Button  className="close-button" onClick={handleModalClose} variant="primary">
                            Close Modal
                        </Button>
                    </Form>
                    </Modal.Body>

            </Modal>
        </div>
    )
}

export default FormNewImage;