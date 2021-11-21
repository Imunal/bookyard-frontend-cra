import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'Configs/axios';

const Search = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const fetchData = (searchName) => {
    if (searchName === '') return;
    axios
      .get(`search/live/${searchName}`)
      .then((response) => {
        setSearchData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const hanldeSearchValueChange = (e) => {
    fetchData(e.target.value);
    setSearchValue(e.target.value);
  };

  const redirectToSearchPage = () => {
    setSearchData([]);
    setSearchValue('');
    navigate(`/search/${searchValue}`);
  };

  const renderSearchedList = () => (
    <div className="search-box">
      <ul>
        <div role="button" onClick={redirectToSearchPage}>
          <li>Szukaj: {searchValue}</li>
        </div>
        {searchData.map((search) => (
          <Link to={`/book/${search.book_id}`} key={search.book_id}>
            <li>{search.book_name}</li>
          </Link>
        ))}
      </ul>
    </div>
  );
  return (
    <>
      <input
        type="text"
        className="input input-search"
        value={searchValue}
        onChange={hanldeSearchValueChange}
        placeholder="Szukaj książki..."
      />
      {searchValue && searchData.length ? renderSearchedList() : ''}
    </>
  );
};

export default Search;
