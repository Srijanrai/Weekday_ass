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

    const handleScroll = () => {
        setFetch(true);
        setPage((prevPage) => prevPage + 1);
        setFetchOffset(fetchOffset + 10);
        setFetchLimit(fetchLimit + 9);
    };
    useEffect(() => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");
        const body = JSON.stringify({
            "limit": fetchLimit,
            "offset": fetchOffset
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
        <div  className='card_out'>
            <div className='card_in'>
                <div className='card_in1'>

                    {
                        fetched && Array.isArray(cards) && cards.filter(card => {
                            return (
                                (exp === '' || (exp && exp.toLowerCase() === card.minExp &&card.minExp.toLowerCase())) &&
                                (company === '' || (company && company.toLowerCase() === card.companyName&&card.companyName.toLowerCase())) &&
                                (location === '' || (location && location.toLowerCase() === card.location&&card.location.toLowerCase())) &&
                                (jobtype === '' || (jobtype && jobtype.toLowerCase() === card.jobType&&card.jobType.toLowerCase())) &&
                                (role === '' || (role && role.toLowerCase() === card.jobRole&&card.jobRole.toLowerCase())) &&
                                (techstack === '' || (techstack && techstack.toLowerCase() === card.techStack&&card.techStack.toLowerCase())) &&
                                (pay === '' || (pay && pay.toLowerCase() === card.maxJdSalary&&card.maxJdSalary.toLowerCase()))
                            );
                        }).map((detail, key) => (
                            <Detail card={detail} index={key} />
                        ))
                    }
                    <div className='load_more'>
                        <div className='load_inside'>
                            <span className='load' onClick={handleScroll}>Load More..</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
