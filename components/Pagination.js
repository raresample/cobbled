const Pagination = ({totalProducts, productsPerPage, setCurrentPage, currentPage}) => {
  const pages = [];

  for (let i = 1; i <= Math.ceil(totalProducts/productsPerPage); i++) {
    pages.push(i);
  }

  // scroll to page top when clicking button
  function buttonClick(page) {
    setCurrentPage(page)
    window.scrollTo(0, 0);
  }

  return (
    <div className="flex justify-center">
      {pages.map((page, index) => {
        return (
          <button
            className={`mx-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ${page == currentPage ? 'bg-blue-800' : ''}`}
            key={index}
            onClick={() => buttonClick(page)}>
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;