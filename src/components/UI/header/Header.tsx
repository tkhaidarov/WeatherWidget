import st from './Header.module.css';
import SearchIcon from '@/assets/icons/search.svg?react';
import React, { useState } from 'react';
interface IProps {
  fetchWeather: (city: string) => void;
}
const Header: React.FC<IProps> = ({ fetchWeather }) => {
  const [text, setText] = useState('');
  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    const city = text.trim();
    if (!city) {
      console.warn('⚠️ Введите название города!');
      return;
    }
    fetchWeather(city);
    setText('');
  };
  return (
    <>
      <form className={st.searchBar} onSubmit={handleSearch}>
        <div className={st.searchContainer}>
          <input
            value={text}
            onChange={e => setText(e.target.value)}
            className={st.searchInput}
            type="text"
            placeholder="Search location here..."
          />
          <button type="submit" className={st.searchButton}>
            <SearchIcon
              width={30}
              height={30}
              className={st.btnIcon}
              aria-label="Поиск"
            />
          </button>
        </div>
      </form>
    </>
  );
};

export default Header;
