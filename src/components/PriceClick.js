import React, { useState } from 'react';
import '../styles/PriceClick.css';
import dollarSign from './RadioButton3.png';
import defaultSign from './RadioButton1.png';
import checkedSign from './RadioButton2.png';
const realPrice=18500;
const discountPrice=18401;
let price1=18500;
let price2=18401;
const PriceClick = () => {
  const [price, setPrice] = useState('179');

  const handlePriceClick = (value) => {
    if(value === '149'){
      price1 = Math.floor(realPrice/2);
      price2 = Math.floor(discountPrice/2);
    }else if(value === '99'){
      price1 = Math.floor(realPrice/4);
      price2 = Math.floor(discountPrice/4);
    }else if(value === '179'){
      price1 = realPrice;
      price2 = discountPrice;
    }
    setPrice(value);
  };

  return (
    <div className="price-click">
      <div className="price-buttons">
      <button
          className={`price-button-special price-button ${price === '099' ? 'selected' : ''}`}
          onClick={() => handlePriceClick('99')}
          disabled
        >
           <span className="offer-label">Offer expired</span>
          <div className='price-button-special-1'>
          <img src={price === '099' ? checkedSign : defaultSign} alt="" className="price-icon" />
          12 Months Subscription 
          </div>

          <div className='per-month'>
            <div ><div className='per-month-1'><span>Total</span> <span className='per-month-2'>₹99</span></div></div>
            <div>₹15 /mo</div>
          </div>
        </button>
        <button
          className={`price-button ${price === '179' ? 'selected' : ''}`}
          onClick={() => handlePriceClick('179')}
        >
          <span className="offer-label-1">Recommended</span>
          <div className='offer-label-1-2'>

          <img src={price === '179' ? checkedSign : dollarSign} alt="" className="price-icon" />
          12 Months Subscription 
          </div>
          
          <div className='per-month button-font'>
            <div ><div className='per-month-1'><span>Total</span> <span className='per-month-2'>₹179</span></div></div>
            <div>₹25 /mo</div>
          </div>
        </button>
        <button
          className={`button-font price-button ${price === '149' ? 'selected' : ''}`}
          onClick={() => handlePriceClick('149')}
        >
          <img src={price === '149' ? checkedSign : dollarSign} alt="" className="price-icon" />
          6 Months Subscription 

          <div className='per-month '>
            <div ><div className='per-month-1'><span>Total</span> <span className='per-month-2'>₹149</span></div></div>
            <div>₹33 /mo</div>
          </div>
        </button>
        <button
          className={`button-font price-button ${price === '99' ? 'selected' : ''}`}
          onClick={() => handlePriceClick('99')}
        >
          <img src={price === '99' ? checkedSign : dollarSign} alt="" className="price-icon" />
          3 Months Subscription 

          <div className='per-month'>
            <div ><div className='per-month-1'><span>Total</span> <span className='per-month-2'>₹99</span></div></div>
            <div>₹8 /mo</div>
          </div>
        </button>
      </div>
      {/* {price && <div>You selected: ${price}</div>} */}
      <div className='total-div'>
        <div className='form-total'>
          <div className='form-total-1'>Subscription Fee</div>
          <div className='form-total-2'>₹{price1}</div>
        </div>
        <div className='total-offer'>
          <div className='total-offer-1'>
          <div className='total-offer-1-1' >Limited time offer</div>
          <div className='total-offer-1-2'>- ₹{price2}</div>
          </div>
          <div className='total-offer-2'>
            <img src='../img/IconClock.png' height='24px' width= '24px ' alt='' />
            <span>Offer valid till 25th March 2023 </span>
          </div>
        </div>
        <div className='form-gst'>
          <div className='form-gst-1'>Total (Incl. of 18% GST)</div>
          <div className='form-gst-2'>₹{price}</div>
        </div>
      </div>
    </div>
  );
};

export default PriceClick;

