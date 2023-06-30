const PaginationRefined = ({totalProducts, productsPerPage, setCurrentPage, currentPage}) => {
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
    <div className="flex justify-center pb-8">
      {pages.map((page, index) => {
        return (
          <button
            className={`mx-1 bg-gray-700 text-white font-bold py-2 px-4  ${page == currentPage ? 'bg-gray-950 cursor-default' : 'hover:bg-cyan-700'}`}
            key={index}
            onClick={() => {
              if (page != currentPage) {
                buttonClick(page)
              }
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};

export default PaginationRefined;