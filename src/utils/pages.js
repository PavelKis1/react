export const getPageCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    let pagesArray = [];
    for (let i = 1; i <= totalPages; i++) {
        pagesArray.push(i);
    }
    return pagesArray;
}