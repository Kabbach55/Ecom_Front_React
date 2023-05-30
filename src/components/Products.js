import React, { useContext, useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { AppContext, deleteProduct, getProducts } from "../app/App";
import { useNavigate } from "react-router-dom";

function Products() {
  const navigate = useNavigate();
  const [state, setState] = useContext(AppContext);

  useEffect(() => {
    handleGetProducts(state.keyword, state.currentPage, state.pageSize);
  }, []);

  const handleGetProducts = (
    keyword = state.keyword,
    page = state.currentPage,
    size = state.pageSize
  ) => {
    getProducts(keyword, page, size)
      .then((resp) => {
        let embeddedProducts = resp.data.content;
        let totalPages = resp.data.totalPages;
        let numberOfElements = resp.data.numberOfElements;
        setState({
          ...state,
          products: embeddedProducts,
          keyword: keyword,
          currentPage: page,
          pageSize: size,
          totalPages: totalPages,
          numberOfElements: numberOfElements,
        });
        console.log(
          "numberof elemnt : " + numberOfElements + " " + state.currentPage
        );
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteProduct = (product) => {
    deleteProduct(product).then((resp) => {
      handleGetProducts();
    });
  };

  const handelSearchProduct = (event) => {
    event.preventDefault();
    handleGetProducts(state.keyword, 0, 6);
  };

  return (
    <div className="container py-3">
      <div className="row m-4">
        <div className="col-md-6 offset-md-6">
          <form
            className="form-inline d-flex justify-content-end"
            onSubmit={handelSearchProduct}
          >
            <div className="form-group">
              <input
                onChange={(e) => {
                  setState({ ...state, keyword: e.target.value });

                  console.log(state.keyword);
                }}
                className="form-control"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>

            <button className="btn btn-outline-success ml-2" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
      <div className="row">
        {state.products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div
              className="card"
              style={{
                width: "250px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
              }}
            >
              {/* <img
                className="img-thumbnail"
                src={product.image}
                alt="Product pic"
              /> */}
              <div className="card-body d-flex flex-column justify-content-between">
                <div>
                  <h5 className="card-title">{product.ref}</h5>
                  <p className="card-text">{product.description}</p>
                  <p className="card-text">Price: {product.price}</p>
                </div>
                <div>
                  <button
                    onClick={() => navigate(`/editproduct/${product.id}`)}
                    className="btn btn-primary m-1"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteProduct(product);
                    }}
                    className="btn btn-danger m-1"
                  >
                    Delete
                  </button>
                  <button className="btn btn-success m-1">add to cart</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <nav aria-label="Page navigation example">
        <div className="d-flex justify-content-center">
          <ul className="pagination">
            <li className="page-item">
              <button
                onClick={() => {
                  if (state.currentPage !== 0)
                    handleGetProducts(
                      state.keyword,
                      state.currentPage - 1,
                      state.pageSize
                    );
                }}
                className="page-link"
              >
                Previous
              </button>
            </li>
            {new Array(state.totalPages).fill(0).map((v, index) => (
              <li className="page-item" key={index}>
                <button
                  onClick={() => {
                    handleGetProducts(state.keyword, index, state.pageSize);
                  }}
                  className={
                    index === state.currentPage
                      ? "page-link active"
                      : "page-link"
                  }
                >
                  {index + 1}
                </button>
              </li>
            ))}
            <li className="page-item">
              <button
                onClick={() => {
                  console.log(
                    "current page : " +
                      state.currentPage +
                      "total page : " +
                      state.totalPages
                  );
                  if (state.currentPage + 1 !== state.totalPages)
                    handleGetProducts(
                      state.keyword,
                      state.currentPage + 1,
                      state.pageSize
                    );
                }}
                className="page-link"
              >
                Next
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Products;
