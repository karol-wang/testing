const isNumber = (n) => {
    const regex = /^[0-9]+$/;
    return n.match(regex);
} 

export default function getPagination(offset, limit, total) {
    console.log(typeof offset);
    if (!isNumber(offset) || !isNumber(limit) || !isNumber(total) ||
        offset < 0 || limit < 1 || total < 0 || offset >= total) return '參數有誤';
    const DEFAULT_SHOW_PAGE_NUM = 5;
    const totalPages = Math.ceil(total / limit); // 無條件進位
    const currentPage = Math.floor(offset / limit) + 1; //無條件捨去

    const showPageNum = DEFAULT_SHOW_PAGE_NUM > totalPages ? totalPages : DEFAULT_SHOW_PAGE_NUM;
    const centerIndex = Math.ceil(showPageNum / 2);
    const diff = showPageNum - centerIndex;
    const firstIndex = centerIndex >= currentPage ? 1 : ((currentPage + diff) >= totalPages ? (totalPages - showPageNum) + 1 : currentPage - diff);
    const renderPages = [...Array(showPageNum).keys()].map(i => i + firstIndex);

    return {currentPage, totalPages, renderPages};
}