import React, {useState, useEffect} from 'react';
import { Button, Modal } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import {useSelector, useDispatch} from 'react-redux';
import { IOModalFirstMessage, createTitleMessage, onMessageInput,sendingNewComment, sendMessage, validateTitleMessage, fetchCommentList ,postcommentList ,fetchComment, postcomment} from '../../../../store/messageSlice';
import {createSticker, fillListStickers, postStickers} from '../../../../store/imageSlice';
import MakeStickers from '../makeStickers/MakeStickers';
import ColorPicker from './ColorPicker/ColorPicker';
import store from './../../../../store';

import './NewMessage.css'


const NewMessage = () => {
    const message = useSelector(state => state.messageSlice)
    const imageState = useSelector(state=>state.imageSlice)
    const dispatch= useDispatch()
    const [rowTextArea, setRowTextArea] = useState(1)
    const states = store.getState()

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

        if (message.messageText && message.titreMessage){

            // dispatch(sendMessage({
            //     id : message.idUser ,
            //     name : message.name,
            //     img : message.img,
            //     text : message.messageText
            // }))
            //dispatch(validateTitleMessage())
            // dispatch(fillListStickers())
            dispatch(sendingNewComment(true))
            dispatch(createSticker(false))
            dispatch(postStickers(states))
            // dispatch(postCommentList(states))
        }else{
            if(message.messageText){

            }
            if (message.newTitreMessage){

            }
        }


    }
   
    useEffect(()=>{
       if(message.sendingNewComment){ 
           dispatch(postcommentList(states))
        }
    },[imageState.stickerUsed.id])

    useEffect(()=>{
        if(message.sendingNewComment) {
            dispatch(postcomment(states))
            dispatch(sendingNewComment(false))
        }
    },[message.commentListUsed.id])
  


    return (
        <div>

            <Modal show={message.modalIOFirstMessage} onHide={handleModalClose} className='modal-newMessage'size='xl'>
                    <Modal.Header>Créer un message</Modal.Header>
                         <div className="colorPicker-Container">
                            <p className="p-color">  Choisissez une couleur de sticker  et sélectionnez un point sur l'image </p>

                    <ColorPicker />
                        </div>
                    <Modal.Body className='modal-newMessage-body'>
                    <MakeStickers/>
                    <Form onSubmit={handleSubmitFirstMessage} className='modal-form-new-message'>
                        <Form.Group controlId="formBasicEmail">
                        <Form.Label>Titre message</Form.Label>
                        {message.errorTiltle && <div className='newComment-message-error'>Vous devez mettre un titre </div>}
                        <Form.Control  type="text" className={message.errorTiltle ? "formError" : "formTrue"}   placeholder="Ecrire un commentaire" onChange= {handleTitleMessage} value={message.titreMessage} />
                        <Form.Label>Texte</Form.Label>

                        {message.errorText && <div className='newComment-message-error'>Vous devez écrire un commentaire </div>}
                        <Form.Control as="textarea" rows={rowTextArea}  className={message.errorText ? "input-text-new-comment formError" : "input-text-new-comment formTrue"}  placeholder="Votre message" onChange= {handleMessageText} value={message.messageText} />
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

export default NewMessage;