import React, {useEffect, useState} from 'react';
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
    const [fileImage, setFileImage] = useState([])
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
    const loadImage =  async (file)  => {

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
       
        
            // const formData = new FormData();
            // formData.append('file',file)
            // console.log(file)
        
            // dispatch(uploadImage(formData))
            let state
            const formData = new FormData();
            formData.append('file',file)
            
            //dispatch dans le post upload image dans le server
            await dispatch(uploadImage(formData))
            
            // dispatch dans le post de la base de donnée
            await dispatch(postImage(state))

            let reader = new FileReader()
            // reader.readAsDataURL(file)
            reader.readAsDataURL(file)
          
            reader.onload = ()=>{
                let dataImage = reader.result;


                //dispat la preview dansla modal newiImages
                dispatch(newImageUpload({
                    // formData:formData,
                    data:dataImage,
                    imageFromServer:false
                }))
        
        }
    }

    useEffect(()=> {

    },[imageState.newImage.image_url])

    return(
        <div className="container-modal">
            <Modal show={imageState.modalIONewImage}  className='modal-newMessage ' size='xl'>
                    <Modal.Header>Nouvlles images</Modal.Header>
                         
                    <Modal.Body className='modal-new-image-body '>
                        <div className="bar-buton-new-image-upload"> 
                            <input type="file" multiple name="file" onChange={makeUploadImage}/>
                            <Button  className="close-button" onClick={handleModalClose} variant="primary">
                                Fermer
                            </Button>
                            <Button  className="close-button" onClick={handleModalClose} variant="primary">
                                Valider et fermer
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