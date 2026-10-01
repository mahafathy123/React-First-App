
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './ProductsDetails.css';

export const ProductsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // جلب بيانات المنتج بالـ id المباشر
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="details-container" style={{ textAlign: 'center', padding: '50px' }}>
        <h2>Loading Product Details... ⏳</h2>
      </div>
    );
  }

  if (!product || product.message) {
    return (
      <div className="details-container" style={{ textAlign: 'center', padding: '50px' }}>
        <h2>المنتج غير موجود!</h2>
        <button className="back-btn" onClick={() => navigate('/')}>
          الرجوع للرئيسية
        </button>
      </div>
    );
  }

  const apiQrCode = product.meta?.qrCode || product.qrCode;
  const apiBarcode = product.meta?.barcode || product.barcode;

  return (
    <div className="details-container">
      <button className="back-btn" onClick={() => navigate(-1)}>
        ← Back to Shop
      </button>

      <div className="details-card">
        {/* قسم الصورة والـ QR Code */}
        <div className="details-left">
          <div className="main-img-box">
            <img src={product.thumbnail || product.image} alt={product.title} />
          </div>

          {apiQrCode && (
            <div className="qr-section">
              <img src={apiQrCode} alt="Product QR Code" className="api-qr-img" />
              <p>Product QR Code</p>
            </div>
          )}
        </div>

        {/* قسم البيانات */}
        <div className="details-right">
          <span className="details-badge">{product.category}</span>
          <h1 className="details-title">{product.title}</h1>
          <p className="details-brand">Brand: <span>{product.brand || 'E_stilore Exclusive'}</span></p>

          <div className="details-price-row">
            <span className="details-price">${product.price}</span>
            {product.rating && (
              <span className="details-rating">⭐ {product.rating} / 5</span>
            )}
          </div>

          <p className="details-desc">{product.description}</p>

          <div className="specs-list">
            <h3>Product Specs & Meta:</h3>
            <ul>
              <li><strong>SKU:</strong> {`product.sku  product.meta?.sku  EST-${product.id}`}</li>
              {apiBarcode && <li><strong>Barcode:</strong> {apiBarcode}</li>}
              <li><strong>Availability:</strong> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</li>
              <li><strong>Stock Left:</strong> {product.stock || 'Available'} units</li>
              {product.weight && <li><strong>Weight:</strong> {product.weight}g</li>}
              {product.warrantyInformation && <li><strong>Warranty:</strong> {product.warrantyInformation}</li>}
              {product.returnPolicy && <li><strong>Return Policy:</strong> {product.returnPolicy}</li>}
            </ul>
          </div>

          <button className="buy-now-btn">Add to Cart 🛒</button>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;