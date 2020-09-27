import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { IOModalFirstMessage, createTitleMessage, onMessageInput, sendMessage } from '../../../../store/messageSlice';

import MakeStickers from '../makeStickers/MakeStickers'
import ListCommentCreated from './listCommentCreated/ListCommentCreated'

import './NewMessage.css'

const NewMessage = () => {
    const message = useSelector(state => state.messageSlice)
    const dispatch= useDispatch()
    console.log(message)
    const handleModalClose = (e) =>{
    dispatch(IOModalFirstMessage(false))
    };

    const handleTitleMessage = (e) =>{
        e.preventDefault()
        const title = e.target.value
        dispatch(createTitleMessage(
            title
        ))
     }

     const handleSubmitFirstMessage = (e) => {
        e.preventDefault()
    dispatch(sendMessage({
        id : message.idUser ,
        name : message.name,
        img : message.img,
        text : message.messageText
    }))
    dispatch(IOModalFirstMessage(false))

    }

    const handleMessageText= (e) =>{
        e.preventDefault()
        const text = e.target.value
        dispatch(onMessageInput(
            text
        ))

     }

    return (
        <div>
            
            <Modal show={message.modalIOFirstMessage} onHide={handleModalClose} className='modal-newMessage'size='xl'>
                    <Modal.Header>Créer un message</Modal.Header>

                    <Modal.Body className='modal-newMessage-body'>
                    
                    <MakeStickers />
                    <Form onSubmit={handleSubmitFirstMessage} className='modal-form-new-message'>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Titre message</Form.Label>

                        <Form.Control type="text" placeholder="Titre message" onChange= {handleTitleMessage} value={message.titreMessage} />
                        <Form.Label>Texte</Form.Label>
                        <Form.Control as="textarea" rows="3" className='input-text-new-comment' placeholder="Votre message" onChange= {handleMessageText} value={message.messageText} />
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