import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Spinner from './Spinner';
import Pagination from './Pagination';
import '../pages/Home.css';


const CharacterResults = ({ characterName }) => {

    const [totalResults, setTotalResults] = useState(0);
    const [loading, setLoading] = useState(false);
    const [characters, setCharacters] = useState([]);
    const [numPages, setNumPages] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(20);
    const [currentPage, setCurrentPage] = useState(1);
    const [offset, setOffset] = useState(0);

    const onNextPage = (direction) => {
        if (direction > 0) {
            console.log("We're going to the next page of results");
            setOffset(offset + itemsPerPage);
            setCurrentPage(currentPage + 1);
        }
        else {
            console.log("We're going to the previous page of results");
            if (currentPage > 1) {
                setCurrentPage(currentPage - 1);
                setOffset(offset - itemsPerPage);
            }
        }
    }

    const onJumpToPage = (pageNum) => {
        console.log("We're going to page " + pageNum);
        setCurrentPage(pageNum);
        setOffset((pageNum - 1) * itemsPerPage);
    }


    useEffect(() => {
        const getCharacters = async () => {
            console.log("characterName = " + characterName);
            const baseURL = "https://www.superheroapi.com/api.php/609080270454303/search/";
            let characterURL = baseURL + characterName;

            try {
                const URL = characterURL
                console.log(URL);
                setLoading(true);
                const res = await axios.get(URL);
                console.log(res.data);
                setCharacters(res.data.results);
                console.log(res.data.results.length);
                setTotalResults(res.data.results.length);
                setNumPages(Math.ceil(res.data.results.length / itemsPerPage));
                console.log("totalResults = " + totalResults);
                setItemsPerPage(20);
                setLoading(false);
            }
            catch(err) {
                console.log(err);
            }
        }
        getCharacters();
    }, [characterName, totalResults, itemsPerPage, offset]);

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div>
                <div className="row mt-5">
                {characters.map(character =>
                    <Link to={`/character/${character.id}`} key={character.id} className='col mx-1 my-2' style={{width: "200px"}}>
                        <div className="card character-img text-center" style={{width: "200px"}}>
                            <img className="card-img-top pt-2 mx-auto" src={character.image.url} alt="" />
                                <div className="card-body">
                                    <h5 className="card-title">{character.name}</h5>
                                </div>
                        </div>
                    </Link>
                )}
                </div>
                <Pagination totalResults={totalResults} currentPage={currentPage} numPages={numPages} onNextPage={onNextPage} onJumpToPage={onJumpToPage}/>
            </div>

        )
    }
}

export default CharacterResults;
