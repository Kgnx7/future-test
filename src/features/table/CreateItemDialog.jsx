import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'

export default function CreateItemDialog({ open, onClose, onSubmit }) {
    const [id, setId] = useState(null)
    const [firstName, setFirstName] = useState(null)
    const [lastName, setLastName] = useState(null)
    const [email, setEmail] = useState(null)
    const [phone, setPhone] = useState(null)
    const [state, setState] = useState(null)
    const [city, setCity] = useState(null)
    const [address, setAddress] = useState(null)
    const [zip, setZip] = useState(null)
    const [description, setDescription] = useState(null)

    const handleChangeId = (event) => setId(event.target.value)
    const handleChangeFirst = (event) => setFirstName(event.target.value)
    const handleChangeLast = (event) => setLastName(event.target.value)
    const handleChangeEmail = (event) => setEmail(event.target.value)
    const handleChangePhone = (event) => setPhone(event.target.value)
    const handleChangeState = (event) => setState(event.target.value)
    const handleChangeCity = (event) => setCity(event.target.value)
    const handleChangeAddress = (event) => setAddress(event.target.value)
    const handleChangeZip = (event) => setZip(event.target.value)
    const handleChangeDescription = (event) =>
        setDescription(event.target.value)

    const resetState = () => {
        setId(null)
        setFirstName(null)
        setLastName(null)
        setEmail(null)
        setPhone(null)
        setState(null)
        setCity(null)
        setAddress(null)
        setZip(null)
        setDescription(null)
    }

    const handleClose = () => {
        onClose()
        resetState()
    }

    const handleSubmit = (event) => {
        onSubmit({
            id,
            firstName,
            lastName,
            email,
            phone,
            address: {
                streetAddress: address,
                city,
                state,
                zip,
            },
            description,
        })
        handleClose()
    }

    return (
        <Dialog
            open={open}
            fullWidth
            maxWidth="sm"
            onClose={handleClose}
            aria-labelledby="form-dialog-title"
        >
            <DialogTitle id="form-dialog-title">
                Добавление данных 👨‍💻
            </DialogTitle>
            <DialogContent>
                <TextField
                    value={id}
                    onChange={handleChangeId}
                    autoFocus
                    margin="dense"
                    id="id"
                    label="Идентификатор"
                    type="number"
                    fullWidth
                    required
                />
                <TextField
                    value={firstName}
                    onChange={handleChangeFirst}
                    autoFocus
                    margin="dense"
                    id="firstName"
                    label="Имя"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    value={lastName}
                    onChange={handleChangeLast}
                    autoFocus
                    margin="dense"
                    id="lastName"
                    label="Фамилия"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    value={email}
                    onChange={handleChangeEmail}
                    autoFocus
                    margin="dense"
                    id="email"
                    label="Электронная почта"
                    type="email"
                    fullWidth
                    required
                />
                <TextField
                    value={phone}
                    onChange={handleChangePhone}
                    autoFocus
                    margin="dense"
                    id="phone"
                    label="Телефон"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    value={state}
                    onChange={handleChangeState}
                    autoFocus
                    margin="dense"
                    id="state"
                    label="State"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    value={city}
                    onChange={handleChangeCity}
                    autoFocus
                    margin="dense"
                    id="city"
                    label="Город"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    value={address}
                    onChange={handleChangeAddress}
                    autoFocus
                    margin="dense"
                    id="streetAddress"
                    label="Адрес"
                    type="text"
                    fullWidth
                    required
                />
                <TextField
                    value={zip}
                    onChange={handleChangeZip}
                    autoFocus
                    margin="dense"
                    id="zip"
                    label="ZIP код"
                    type="number"
                    fullWidth
                    required
                />
                <TextField
                    value={description}
                    onChange={handleChangeDescription}
                    autoFocus
                    margin="dense"
                    id="description"
                    label="Описание"
                    type="text"
                    fullWidth
                />
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Отмена
                </Button>
                <Button
                    onClick={handleSubmit}
                    color="primary"
                    disabled={
                        !(
                            id &&
                            firstName &&
                            lastName &&
                            email &&
                            phone &&
                            state &&
                            city &&
                            address &&
                            zip
                        )
                    }
                >
                    Добавить
                </Button>
            </DialogActions>
        </Dialog>
    )
}
