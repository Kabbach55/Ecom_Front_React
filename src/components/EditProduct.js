import React, { useEffect, useState } from "react";
import { getProduct, saveProduct, updateProduct } from "../app/App";
import { useNavigate, useParams } from "react-router-dom";

function EditProduct() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");
  // const id = window.location.pathname.split("/").pop();
  const { id } = useParams();
  const navigate = useNavigate();
  const handleSaveProducts = (event) => {
    event.preventDefault();

    let product = {
      ref: name,
      description,
      image,
      price,
    };
    updateProduct(id, product)
      .then((resp) => {
        alert("product saved");
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    getProduct(id).then((resp) => {
      setName(resp.data.ref);
      setDescription(resp.data.description);
      setPrice(resp.data.price);
      console.log(resp.data.ref);
    });
  }, []);
  return (
    <div className="d-flex align-items-center justify-content-center vh-100">
      <div className="card">
        <div className="card-body">
          <form onSubmit={handleSaveProducts}>
            <div className="form-group">
              <label htmlFor="productName">Product Name:</label>
              <input
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
                type="text"
                className="form-control"
                id="productName"
                placeholder="Enter Product Name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="productDescription">Product Description:</label>
              <textarea
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
                value={description}
                className="form-control"
                id="productDescription"
                placeholder="Enter Product Description"
              />
            </div>
            <div className="form-group">
              <label htmlFor="productPrice">Price:</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text">$</span>
                </div>
                <input
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                  value={price}
                  type="number"
                  className="form-control"
                  id="productPrice"
                  placeholder="0.00"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="productImage">Upload Image:</label>
              <div className="custom-file">
                <input
                  onChange={(e) => {
                    setImage(e.target.value);
                  }}
                  value={image}
                  type="file"
                  className="custom-file-input"
                  id="productImage"
                />
                <label className="custom-file-label" htmlFor="productImage">
                  Choose file
                </label>
              </div>
            </div>
            <div className="form-group form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="exampleCheck1"
              />
              <label className="form-check-label" htmlFor="exampleCheck1">
                I agree to the Terms and Conditions
              </label>
            </div>

            <button type="submit" className="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
