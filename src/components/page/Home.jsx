import React, {useEffect, useState} from 'react';
import axios from "axios";

const Home = () => {
    const [token, setToken] = useState('');
    const [resp, setResp] = useState();

    let url = 'https://rest-api.display.yandex.net/rest/v0.2/currencies.json';
    let clientLogin = '0667250329664e899fd9cf81f4069835';
    let headers = {
        "Authorization": `Bearer ${token}`,
        "Accept-Language": "ru",
        "Content-Type": "application/json; charset=utf-8"
    }


    useEffect(() => {
        axios.get('https://oauth.yandex.ru/authorize?response_type=token&client_id=0667250329664e899fd9cf81f4069835')
            .then(() => {
                setToken(/access_token=([^&]+)/.exec(document.location.hash)[1]);
            })
            .catch(err => {
                console.log(err)

            })
    },[])

    useEffect(() => {
        axios.get(`${url}`, {...headers})
            .then( r => setResp(r.data))
            .catch(err => {
            console.log(err);
            alert('Ошибка при загрузке курса валют')
        })
    },[token])

    return (
        <div>

        </div>
    );
};

export default Home;
