import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Input from '../Input';
import { books } from './dataSearch';

const SearchContainer = styled.section`
  background: linear-gradient(90deg, #F26705 10%, #024059 90%);
  color: #fff;
  padding: 85px 0;
  text-align: center;
  width: 100%;
  min-height: 270px;
`;

const Title = styled.h2`
  color: #fff;
  font-size: 36px;
  text-align: center;
  width: 100%;
`;

const SubTitle = styled.h3`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 40px;
`;

const BookList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
`;

const BookItem = styled.div`
  width: 150px;
  text-align: center;
`;

const BookImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
`;

function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchBooks, setSearchBooks] = useState([]);

  useEffect(() => {
    if (searchTerm) {
      const filteredBooks = books.filter(book =>
        book.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setSearchBooks(filteredBooks);
    } else {
      setSearchBooks([]);
    }
  }, [searchTerm]);

  return (
    <SearchContainer>
      <Title>Do you know where to start?</Title>
      <SubTitle>Find your book on our bookshelf</SubTitle>
      <Input
        placeholder="Search your next reading..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
     {searchTerm && (
  <BookList>
    {searchBooks.length > 0 ? (
      searchBooks.map((book, index) => (
        <BookItem key={index}>
          <p>{book.name}</p>
          <BookImage src={book.src} alt={book.name} />
        </BookItem>
      ))
    ) : (
      <p>No results found.</p>
    )}
  </BookList>
      )}
    </SearchContainer>
  );
}

export default Search;