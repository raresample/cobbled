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
  <div className="flex justify-center pb-8">
    {/* previous page button */}
    <button
      className={`mx-1 bg-gray-700 text-white font-bold px-2 py-1 xs:px-4 xs:py-2 ${
        currentPage === 1 ? 'bg-gray-950 cursor-default' : 'hover:bg-cyan-700'
      }`}
      onClick={() => {
        if (currentPage > 1) {
          buttonClick(currentPage - 1);
        }
      }}
      disabled={currentPage === 1}
    >
      {"<"}
    </button>
    {/* page number buttons */}
    {pages.map((page, index) => {
      if (
        (page <= 4 && currentPage <= 3) ||
        // Display buttons for pages 1 through 4 on pages 1 through 3
        (page >= pages.length - 3 && currentPage >= pages.length - 2) ||
        // Display buttons for the last 4 pages on the last 3 pages
        (page === 1 && currentPage <= 3) ||
        // Display button for page 1 on pages 1 through 3
        (page === pages.length && currentPage >= pages.length - 2) ||
        // Display button for the last page on the last 3 pages
        (page === currentPage) ||
        // Display button for the current page
        (page === currentPage - 1) ||
        // Display button for (currentPage - 1)
        (page === currentPage + 1) ||
        // Display button for (currentPage + 1)
        (page === 1 && currentPage > 3) ||// Display button for page 1 after the ellipsis
        (page === pages.length && currentPage < pages.length - 2) ||
        // Display button for the last page before the ellipsis
        (
          currentPage > 3 && currentPage < pages.length - 2 &&
          // Display buttons around the current page
          Math.abs(page - currentPage) <= 1
        )
      ) {
        return (
          <button
            className={`mx-1 bg-gray-700 text-white font-bold px-2 py-1 xs:px-4 xs:py-2 ${
              page === currentPage
                ? "bg-gray-950 cursor-default"
                : "hover:bg-cyan-700"
            }`}
            key={index}
            onClick={() => {
              if (page !== currentPage) {
                buttonClick(page);
              }
            }}
          >
            {page}
          </button>
        );
      } else if (
        (page === 2 && currentPage > 3) ||
        // Display ellipsis after page 1 on pages 4 and beyond
        (page === pages.length - 1 && currentPage < pages.length - 2)
        // Display ellipsis before the last page on pages before the last 3 pages
      ) {
        return (
          <span key={index}>...</span>
          // Display ellipsis
        );
      }
    })}
    {/* next page button */}
    <button
      className={`mx-1 bg-gray-700 text-white font-bold px-2 py-1 xs:px-4 xs:py-2 ${
        currentPage === pages.length ? 'bg-gray-950 cursor-default' : 'hover:bg-cyan-700'
      }`}
      onClick={() => {
        if (currentPage < pages.length) {
          buttonClick(currentPage + 1);
        }
      }}
      disabled={currentPage === pages.length}
    >
      {">"}
    </button>
  </div>
);

  
};

export default Pagination;