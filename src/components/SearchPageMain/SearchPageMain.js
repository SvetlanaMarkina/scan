import React from 'react';
import SearchForm from './SearchForm';
import './SearchPageMain.css';
import document from './document.svg';
import folders from './folders.svg';
import search from './search.svg';

const SearchPageMain = () => {
  return (
    <main className='main_search'>
      <div className='main__wrap_search'>
        <div className='main__left-box'>
          <h1 className='main_header'>Найдите необходимые данные в пару кликов.</h1>
          <section>Задайте параметры поиска.<br></br> 
              Чем больше заполните, тем точнее поиск
          </section>
          <SearchForm />
        </div>
        <div className='main__right-box'>
          <div className='upper-imgs'>
            <img src={document} alt='document' />         
            <img src={folders} alt='folders' />
          </div>
          <div>
            <img className='searchImg' src={search} alt='search' />
          </div>
        </div>
      </div>
    </main>
  )
}

export default SearchPageMain