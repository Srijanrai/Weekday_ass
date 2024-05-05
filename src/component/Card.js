import React, { useEffect, useState, useRef } from 'react'
import Detail from './Detail';

function Card(props) {
    const exp = props.exp ? props.exp : '';
    const company = props.company ? props.company : '';
    const location = props.location ? props.location : '';
    const jobtype = props.jobtype ? props.jobtype : '';
    const techstack = props.techstack ? props.techstack : '';
    const role = props.role ? props.role : '';
    const pay = props.pay ? props.pay : '';

    const [cards, setCards] = useState([]);
    const [fetched, setFetch] = useState(false);
    const [page, setPage] = useState(0);
    const [fetchLimit, setFetchLimit] = useState(9);
    const [fetchOffset, setFetchOffset] = useState(0);
    const wrapperRef = useRef(null);
    const fetchUrl = "https://api.weekday.technology/adhoc/getSampleJdJSON";

    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": 9,
            "offset": 0
        });
        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body
        };
        fetch("https://api.weekday.technology/adhoc/getSampleJdJSON", requestOptions)
            .then((response) => response.text())
            .then((result) => {
                setCards(Object.entries(JSON.parse(result))[0][1]);
                setFetch(true);

            })
            .catch((error) => console.error(error));
    }, [page, fetched])
    useEffect(() => {
        // console.log(cards)
    }, [cards]);


    return (
        <div ref={wrapperRef} className='card_out'>
            <div className='card_in'>
                <div className='card_in1'>

                    {
                        fetched && Array.isArray(cards) && cards.map((detail, key) => (
                            <Detail card={detail} index={key} />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Card
