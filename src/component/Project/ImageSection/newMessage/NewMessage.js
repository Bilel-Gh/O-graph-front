import React, {useState} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { IOModalFirstMessage, createTitleMessage, onMessageInput, sendMessage, validateTitleMessage } from '../../../../store/messageSlice';
import {createSticker, fillListStickers} from '../../../../store/imageSlice'
import MakeStickers from '../makeStickers/MakeStickers'
import ColorPicker from './ColorPicker/ColorPicker'

import './NewMessage.css'


const NewMessage = () => {
    const message = useSelector(state => state.messageSlice)
    const dispatch= useDispatch()
    const [rowTextArea, setRowTextArea] = useState(1)
    
    // femer le modal new message en dispatchant dans le reducer messageSlice le sate IOModal à false
    const handleModalClose = (e) =>{
        dispatch(onMessageInput(""))
        dispatch(createTitleMessage(""))
        dispatch(IOModalFirstMessage(false))
        };

    // récupérer la valeur du titre du message qui est en train d"être tapper
    const handleTitleMessage = (e) =>{
        e.preventDefault()
        const title = e.target.value
        dispatch(createTitleMessage(
            title
        ))
     }

     // récupérer la valeur du message qui est entré dans le input text du message. Le row s aggrandit lorsqu'on écrit jusqu'à
     //une valeur max
    const handleMessageText= (e) =>{
        e.preventDefault()
        const text = e.target.value
        // console.log(e.target.scrollHeight, "scroll height")
        const rowsActual = parseInt(e.target.scrollHeight/30)
        //console.log(rowsActual, e.target.scrollHeight)

        if(rowsActual>=4){
            setRowTextArea(4)
        }else{
            setRowTextArea(rowsActual)
        }
        dispatch(onMessageInput(
            text
        ))
     }

     // valider le message en modifiant le state du sliceMessage et en fermant le modal
     const handleSubmitFirstMessage = (e) => {
        e.preventDefault()
        dispatch(sendMessage({
            id : message.idUser ,
            name : message.name,
            img : message.img,
            text : message.messageText
        }))
        dispatch(validateTitleMessage())
        dispatch(fillListStickers())
        dispatch(createSticker(false))
    }

    

    return (
        <div>
            
            <Modal show={message.modalIOFirstMessage} onHide={handleModalClose} className='modal-newMessage'size='xl'>
                    <Modal.Header>Créer un message</Modal.Header>

                    <Modal.Body className='modal-newMessage-body'>

                    <MakeStickers/>
                
                    <Form onSubmit={handleSubmitFirstMessage} className='modal-form-new-message'>
                        <Form.Group controlId="formBasicEmail">
                         <div className="colorPicker-Container">
                             <p> Choisissez une couleur de sticker </p>
                             <ColorPicker/>
                        </div>
                        <Form.Label>Titre message</Form.Label>
                        {<div className='newComment-message-error'>Vous devez mettre un titre </div>}
                        <Form.Control type="text" placeholder="Titre message" onChange= {handleTitleMessage} value={message.newTitreMessage} />
                        <Form.Label>Texte</Form.Label>

                        <div className='newComment-message-error'>Vous devez écrire un commentaire </div>
                        <Form.Control as="textarea" rows={rowTextArea}  className='input-text-new-comment' placeholder="Votre message" onChange= {handleMessageText} value={message.messageText} />
                        </Form.Group>

                        <Button variant="primary" type="submit">
                        Envoyer
                        </Button>
                        <Button  onClick={handleModalClose} variant="primary">
                            Close Modal
                        </Button>
                    </Form>
                    </Modal.Body>

            </Modal>
        </div>
            )

        }

export default NewMessage;