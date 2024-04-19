

const Pagination = ({ goToNextPage, goToPrevPage }) => {
  return (
    <div className="join grid grid-cols-2">
        <button onClick={goToPrevPage} className={`join-item btn btn-outline ${!goToPrevPage && 'btn-disabled'}`}>Previous page</button>
        <button onClick={goToNextPage} className={`join-item btn btn-outline ${!goToNextPage && 'btn-disabled'}`}>Next</button>
    </div>
  )
}

export default Pagination