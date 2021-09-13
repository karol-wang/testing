export default function getPagination(offset, limit, total) {
    if (offset < 0 || limit < 1 || total < 0) return;

    const currentPage = Math.floor(offset / limit) + 1; //無條件捨去
    const totalPages = Math.ceil(total / limit); //無條件進位
    const renderPages = [];


    return {currentPage, totalPages, renderPages};
}