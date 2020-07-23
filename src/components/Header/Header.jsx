import React from 'react'

import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    header: {
        marginTop: theme.spacing(5),
    },
    accentTitle: {
        textDecoration: 'none',
        color: '#0e43fe',
        fontWeight: '500',
        '&:hover': {
            textDecoration: 'underline',
        },
    },
}))

export default function Header() {
    const classes = useStyles()

    return (
        <header className={classes.header}>
            <Typography variant="h2" align="center">
                Интернет-агентство{' '}
                <a
                    href="https://future-group.ru"
                    className={classes.accentTitle}
                >
                    Future
                </a>{' '}
                ✌🏻
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="center">
                Тестовое задание
            </Typography>
        </header>
    )
}
