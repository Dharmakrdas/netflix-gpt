import { useEffect, useState } from "react";

const Product = () => {
  const [isProduct, setProduct] = useState("");
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    getALlMovies();
  }, [page]);

  const getALlMovies = async () => {
    const result = await fetch(
      `https://dummyjson.com/products?limit=10&skip=${page*10-10}`
    );
    const responseJson = await result.json();
    setProduct(responseJson?.products);
    setTotal(responseJson.total);
    console.log(responseJson?.products);
  };

  const seletHandlerPage = (page) => {
    setPage(page);
  };
  return isProduct.length > 0 ? (
    <div>
      <h1>Movies</h1>
      {/* Movies card list */}
      <div className="product">
        {isProduct?.map((item) => (
          <span key={item.id} className="product__single">
            <img src={item?.thumbnail} alt="logo" className="h-30 w-30" />
            <span>{item?.title}</span>
          </span>
        ))}
      </div>

      {isProduct.length > 0 && (
        <div className="pagination">
          <span
            className={page < 2 ? "pagination__disable" : ""}
            onClick={() => setPage(page - 1)}
          >
            back
          </span>
          {[...Array(total / 10)].map((_, i) => (
            <span
              className={page === i + 1 ? "pagination__selected" : ""}
              onClick={() => seletHandlerPage(i +1)}
              key={i}
            >
              {i + 1}
            </span>
          ))}
          <span
            className={page  < total/10 ? "" : "pagination__disable"}
            onClick={() => setPage(page + 1)}
          >
            next
          </span>
        </div>
      )}
    </div>
  ) : (
    <h1> Loading</h1>
  );
};

export default Product;
