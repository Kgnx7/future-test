import axios from 'axios'

export async function apiGetBigData() {
    const bigData = await axios.get(
        `${process.env.REACT_APP_API_HOST}/Kgnx7/future-test/dev/bigData.json`
    )

    return bigData
}

export async function apiGetSmallData() {
    const smallData = await axios.get(
        `${process.env.REACT_APP_API_HOST}/Kgnx7/future-test/dev/smallData.json`
    )

    return smallData
}
