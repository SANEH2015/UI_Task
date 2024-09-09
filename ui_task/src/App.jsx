import React from 'react';
 import IMAGE from './assets/IMAGE-removebg-preview.png'
function App() {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#f0f0f0' }}>
      <div style={{ maxWidth: '800px', backgroundColor: 'white', padding: '20px', borderRadius: '10px', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', color: '#333' }}>Lebrel</h2>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <button style={{ backgroundColor: '#ff5733', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none', marginRight: '10px', cursor: 'pointer' }}>HOME</button>
            <button style={{ backgroundColor: '#007bff', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none', marginRight: '10px', cursor: 'pointer' }}>NEW</button>
            <button style={{ backgroundColor: '#28a745', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none', marginRight: '10px', cursor: 'pointer' }}>TREND</button>
            <button style={{ backgroundColor: '#dc3545', color: 'white', padding: '8px 16px', borderRadius: '5px', border: 'none', cursor: 'pointer' }}>SALE</button>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ maxWidth: '400px', paddingRight: '20px' }}>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Trendy Collection's</h1>
            <h2 style={{ fontSize: '28px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>HIGHEST QUALITY COLLECTION</h2>
            <p style={{ fontSize: '16px', color: '#666', lineHeight: '1.5' }}>Give your home the stylish decoration and deserve at affordable prices.</p>
          </div>
          <div style={{ maxWidth: '300px' }}>
            <img src={IMAGE} alt="Home" style={{ width: '100%', height: 'auto', borderRadius: '10px', marginBottom: '10px' }} />
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Reviews</h3>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: '10px' }}>
              <a href="#" style={{ marginRight: '10px' }}><i className="fab fa-facebook-f" style={{ fontSize: '24px', color: '#3b5998' }}></i></a>
              <a href="#" style={{ marginRight: '10px' }}><i className="fab fa-instagram" style={{ fontSize: '24px', color: '#c13584' }}></i></a>
              <a href="#" style={{ marginRight: '10px' }}><i className="fab fa-twitter" style={{ fontSize: '24px', color: '#1da1f2' }}></i></a>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>50k</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Customers</p>
              </div>
              <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>8k</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Reviews</p>
              </div>
            </div>
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          <div style={{ maxWidth: '300px' }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Premium Shades</h3>
            <img src="https://www.freeiconspng.com/uploads/sun-icon-png-2.png" alt="Sun" style={{ width: '30px', height: 'auto', marginRight: '10px' }} />
            <img src="https://www.freeiconspng.com/uploads/sun-icon-png-3.png" alt="Sun" style={{ width: '30px', height: 'auto' }} />
          </div>
          <div style={{ maxWidth: '500px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
              <div style={{ backgroundColor: '#e9ecef', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center', cursor: 'pointer' }}>
                <i className="fas fa-arrow-circle-right" style={{ fontSize: '20px', color: '#333', marginRight: '10px' }}></i>
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>Women Gallery</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Go Now</p>
              </div>
              <div style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px', display: 'flex', alignItems: 'center' }}>
                <h4 style={{ fontSize: '36px', fontWeight: 'bold', color: '#333', marginBottom: '5px' }}>5</h4>
                <p style={{ fontSize: '14px', color: '#666' }}>Items</p>
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px' }}>
              <div style={{ backgroundColor: '#ff6347', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', marginRight: '10px', position: 'relative' }}>
                <img src="https://www.freeiconspng.com/uploads/fashion-icon-png-10.png" alt="Fashion" style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '5px' }}>Fashion</h4>
              </div>
              <div style={{ backgroundColor: '#ff6347', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', marginRight: '10px', position: 'relative' }}>
                <img src="https://www.freeiconspng.com/uploads/fashion-icon-png-10.png" alt="Fashion" style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '5px' }}>Fashion</h4>
              </div>
              <div style={{ backgroundColor: '#ff6347', padding: '10px', borderRadius: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center', flex: '1', position: 'relative' }}>
                <img src="https://www.freeiconspng.com/uploads/fashion-icon-png-10.png" alt="Fashion" style={{ width: '100%', height: 'auto', position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }} />
                <h4 style={{ fontSize: '18px', fontWeight: 'bold', color: 'white', marginBottom: '5px' }}>Fashion</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
