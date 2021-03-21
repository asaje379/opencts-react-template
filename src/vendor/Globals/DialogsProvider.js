import React, { createContext, useContext, useState } from 'react'
import Button from '../Components/Button';
import { Icon } from '../Components/Icon';
import { useLanguage } from './LanguageProvider';
import { useTheme } from './ThemeProvider';

const DialogsContext = createContext(null);

export function useDialog() {
    return useContext(DialogsContext);
}

function Alert({ setOpen, children }) {
    return <div className="dialog-container">
        <div className="alert">
            <div>
                {children}
            </div>
            <div>
                <Button sm onClick={_ => setOpen(false)}>OK</Button>
            </div>
        </div>
    </div>
}

function Confirm({
    onCancel = _ => { },
    onConfirm = _ => { },
    setOpen,
    children
}) {

    const { getTraductionOf } = useLanguage();

    return <div className="dialog-container">
        <div className="alert">
            <div>
                {children}
            </div>
            <div>
                <Button sm color="danger" onClick={() => {
                    onCancel();
                    setOpen(false);
                }}>
                    {getTraductionOf('cancel')}
                </Button>
                <span className="mr-2"></span>
                <Button sm onClick={() => {
                    onConfirm();
                    setOpen(false);
                }}>
                    {getTraductionOf('confirm')}
                </Button>
            </div>
        </div>
    </div>
}

function Modal({ title, setOpen, children }) {
    return <div className="dialog-container">
        <div className="modal">
            <div>
                <h3>{title}</h3>
                <Icon name="close" color="#f44336" onClick={_ => setOpen(false)} />
            </div>
            <div>
                {children}
            </div>
        </div>
    </div>
}

export default function DialogsProvider({
    children
}) {

    const [open, setOpen] = useState(false);
    const [type, setType] = useState('alert');
    const [message, setMessage] = useState('');
    const [title, setTitle] = useState('');
    const [child, setChild] = useState(null);
    const { theme } = useTheme();

    const alert = (message) => {
        setType('alert');
        setMessage(message);
        setOpen(true);
    };

    const confirm = (message) => {
        setType('confirm');
        setMessage(message);
        setOpen(true);
    };

    const openModal = (title, child) => {
        setType('modal');
        setMessage(message);
        setTitle(title);
        setChild(child);
        setOpen(true);
    };

    return (
        <DialogsContext.Provider value={{
            alert,
            confirm,
            openModal
        }}>
            {children}
            <div className={theme}>
                {open && type === 'alert' && <Alert setOpen={setOpen}>{message}</Alert>}
                {open && type === 'confirm' && <Confirm setOpen={setOpen}>{message}</Confirm>}
                {open && type === 'modal' && <Modal title={title} setOpen={setOpen}>{child}</Modal>}
            </div>
        </DialogsContext.Provider>
    )
}
