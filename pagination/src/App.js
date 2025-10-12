import './App.css';
import { useEffect, useState } from 'react';

const ProductCard = ({image, title}) => {
  return (
    <div className='product-card'>
      <img src={image} alt={title} className='product-img'/>
      <span className='product-title'>{title}</span>
    </div>
  )
}

const PAGE_SIZE = 10;

function App() {
  const [state, setState] = useState([]);
  const [current, setCurrent] = useState(0);
  const [firstVisible, setFirstVisible] = useState(0);
  
  const fetchData = () => {
    fetch('https://dummyjson.com/products?limit=100')
      .then(res => res.json())
      .then(res => setState(res.products))
      .catch(error => console.log(error));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const totalProducts = state.length;
  const num_of_page = Math.ceil(totalProducts / PAGE_SIZE);
  const start = current * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const PAGINATION_WINDOW = 5;
  let lastVisible = Math.min(firstVisible + PAGINATION_WINDOW, num_of_page);

  function handleClick(n) {
    setCurrent(n);
    // Slide window if needed
    if (n < firstVisible) {
      setFirstVisible(n);
    } else if (n >= firstVisible + PAGINATION_WINDOW) {
      setFirstVisible(n - PAGINATION_WINDOW + 1);
    }
  }

  function goToPrev() {
    setCurrent(prev => {
      const newCurrent = prev - 1;
      if (newCurrent < firstVisible) {
        setFirstVisible(Math.max(0, firstVisible - 1));
      }
      return newCurrent;
    });
  }

  function goToNext() {
    setCurrent(prev => {
      const newCurrent = prev + 1;
      if (newCurrent >= firstVisible + PAGINATION_WINDOW) {
        setFirstVisible(Math.min(num_of_page - PAGINATION_WINDOW, firstVisible + 1));
      }
      return newCurrent;
    });
  }

  return !state.length ? (
    <h1>No Products</h1>
  ) : (
    <>
      <div className='pagination-wrapper'>
        <button disabled={current === 0} onClick={goToPrev} className='pagination-item'>{'<'}</button>
        {[...Array(lastVisible - firstVisible).keys()].map((i) => {
          const n = firstVisible + i;
          return (
            <button
              className={"pagination-item " + (n === current ? "active" : "")}
              key={n + 1}
              onClick={() => handleClick(n)}
            >
              {n + 1}
            </button>
          );
        })}
        <button disabled={current === num_of_page - 1} onClick={goToNext} className='pagination-item'>{'>'}</button>
      </div>
      <div className='product-wrapper'>
        {state.slice(start, end).map(product => (
          <ProductCard key={product.id} image={product.thumbnail} title={product.title} />
        ))}
      </div>
    </>
  );
}

export default App;
