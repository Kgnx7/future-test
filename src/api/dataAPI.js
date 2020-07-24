import axios from 'axios'

export async function apiGetBigData() {
    const bigData = await axios.get(
        `${process.env.REACT_APP_API_HOST}/?rows=1000&id={number|1000}&firstName={firstName}&delay=3&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    )

    return bigData
}

export async function apiGetSmallData() {
    const smallData = await axios.get(
        `${process.env.REACT_APP_API_HOST}/?rows=32&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&address={addressObject}&description={lorem|32}`
    )

    return smallData
}
