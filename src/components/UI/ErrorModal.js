import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

const ErroeModal = (props) => {
    return (
        <div className ={classes.backdrop} onClick={props.onConfirm}>
        <Card className = {classes.modal}>
            <header className = {classes.header}>
                <h2>
                    {props.title}
                </h2>
            </header>
            <div className = {classes.content}>
                <p>
                    {props.message}
                </p>
            </div>
            <div>
                <footer className = {classes.actions}>
                    <Button onClick={props.onConfirm}>Okay</Button>
                </footer>
            </div>
        </Card>
        </div>
    );
}

export default ErroeModal;