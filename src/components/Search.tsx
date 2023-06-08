import React, {
  ChangeEvent,
  FormEvent,
  KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import { useRouter } from 'next/router';

import { useProductsContext } from '@/context/ProductsContext';
import { useDebounce } from '@/hooks/useDebounce';

import { LeftArrowIcon, SearchIcon } from './shared/Icons';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [value, setValue] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [focusedIndex, setFocusedIndex] = useState(-1);
  const [sended, setSended] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const suggestionRef = useRef<HTMLLIElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const debouncedValue = useDebounce(searchTerm, 500);

  const { allProducts, categories } = useProductsContext();

  const router = useRouter();

  useEffect(() => {
    if (debouncedValue && !sended) {
      const filteredProducts = allProducts
        .filter((producto) => producto.nombre.toLowerCase().includes(debouncedValue.toLowerCase()))
        .map((product) => product.nombre);

      const limitedProducts = filteredProducts.slice(0, 5);

      const filteredCategories = categories.filter((categorie) =>
        categorie.toLowerCase().includes(debouncedValue.toLowerCase()),
      );

      const limitedCategories = filteredCategories.slice(0, 5);

      setSuggestions([...limitedProducts, ...limitedCategories]);
    } else {
      setSuggestions([]);
      setSended(false);
    }
  }, [debouncedValue]);

  useEffect(() => {
    if (suggestions.length > 0 && !showSuggestions && suggestions[0] !== searchTerm)
      setShowSuggestions(true);

    if (suggestions.length <= 0) setShowSuggestions(false);
  }, [suggestions]);

  useEffect(() => {
    if (focusedIndex === -1) {
      setValue(searchTerm);
    } else {
      setValue(suggestions[focusedIndex]);
    }
  }, [focusedIndex]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const resetSearchComplete = useCallback(() => {
    setFocusedIndex(-1);
    setShowSuggestions(false);
  }, []);

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
    setValue(e.target.value);
  };

  const handleOnClickSuggestion = (idx: number) => {
    const value = suggestions[idx];
    setValue(value);
    setSearchTerm(value);

    fetchTerm();
  };

  const fetchTerm = () => {
    let query = suggestions[focusedIndex];
    if (!query && value) query = value;
    if (!query && !value) query = searchTerm;

    if (!query) return;

    setSended(true);
    resetSearchComplete();

    if (openSearch) handleSearchMobile('close');

    router.push(`/productos/search/?query=${encodeURIComponent(query)}`);
    if (inputRef.current) inputRef.current.blur();
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchTerm();
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (!showSuggestions) return;

    const { key } = e;
    let nextIndexCount = 0;

    if (key === 'ArrowDown') {
      nextIndexCount = (focusedIndex + 1) % suggestions.length;
      if (nextIndexCount === 0 && focusedIndex !== -1) {
        nextIndexCount = -1;
      }
      setFocusedIndex(nextIndexCount);
    }

    if (key === 'ArrowUp') {
      nextIndexCount = (focusedIndex + suggestions.length - 1) % suggestions.length;
      if (nextIndexCount === suggestions.length - 1) nextIndexCount = -1;
      if (focusedIndex === -1) nextIndexCount++;
      setFocusedIndex(nextIndexCount);
    }

    if (key === 'Escape') {
      resetSearchComplete();
    }
  };

  const handleSearchMobile = (action: string) => {
    if (action === 'open') {
      setOpenSearch(true);
      document.body.classList.add('overflow-hidden');
    }

    if (action === 'close') {
      setOpenSearch(false);
      document.body.classList.remove('overflow-hidden');
    }
  };

  return (
    <div ref={wrapperRef} className="lg:relative" onKeyDown={handleKeyDown}>
      <span className="block lg:hidden" onClick={() => handleSearchMobile('open')}>
        <SearchIcon />
      </span>
      <div className="hidden lg:block relative">
        <form onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="text"
            placeholder="¿Qué estas buscando?"
            className="border border-gray-300 pl-2 pr-8 py-1 rounded-md"
            value={value}
            onChange={handleOnChange}
            onFocus={() => setShowSuggestions(true)}
          />
        </form>
        <span
          className="absolute md:block hidden top-1/2 -translate-y-1/2 right-2 cursor-pointer"
          onClick={fetchTerm}
        >
          <SearchIcon size={18} color="light-gray" />
        </span>
      </div>
      <div
        id="searchMobile"
        className={`absolute top-0   h-screen bg-white transition-all duration-500 z-20 ${
          openSearch ? 'left-0 right-0 w-screen' : '-left-full'
        }`}
      >
        <div className="flex items-center gap-4 px-4 py-2 shadow-md lg:hidden">
          <div onClick={() => handleSearchMobile('close')}>
            <LeftArrowIcon color="light-gray" />
          </div>
          <div className="w-full">
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="¿Qué estas buscando?"
                className="outline-none pl-2 pr-8 py-1 rounded-md w-full"
                value={value}
                onChange={handleOnChange}
              />
            </form>
            <span
              className="absolute lg:block hidden top-1/2 -translate-y-1/2 right-2 cursor-pointer"
              onClick={fetchTerm}
            >
              <SearchIcon size={18} color="light-gray" />
            </span>
          </div>
        </div>
      </div>
      {showSuggestions && (
        <ul
          className={`z-30 py-4 lg:py-0 absolute lg:top-full lg:bg-white lg:shadow-md transition-all duration-500 ${
            openSearch ? 'left-0 right-0' : '-left-full lg:left-0 lg:right-0 lg:block'
          }`}
        >
          {suggestions.map((suggestion, idx) => (
            <li
              key={suggestion}
              ref={idx === focusedIndex ? suggestionRef : null}
              onMouseEnter={() => setFocusedIndex(idx)}
              onMouseLeave={() => setFocusedIndex(-1)}
              onClick={() => handleOnClickSuggestion(idx)}
              className={`capitalize px-6 lg:px-2 py-3 cursor-pointer flex items-center gap-4 lg:static ${
                idx === focusedIndex ? 'bg-gray-300' : ''
              }`}
            >
              <span className="block lg:hidden">
                <SearchIcon color="light-gray" size={18} />
              </span>
              <span>{suggestion}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
