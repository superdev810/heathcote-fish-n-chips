import React, { Component } from 'react';
import './Assets/css/section.css';
import parassol_louge_img from './Assets/images/parassol-rouge.png';
import parassol_vert_img from './Assets/images/parassol-vert.png';
import parassol_creme_img from './Assets/images/parassol-creme.png';
import verre from './Assets/images/verre.png';

class Section4 extends Component {
  render() {
    return (
      <section className="section4">
      	<div className="review-top">
          <div className='col-md-6 review-top-text'>
            <h1>Review</h1>
          </div>
          <div className="parassol rouge"><img src={parassol_louge_img} alt="parassollougeimg"/></div>
          <div className="verre"><img src={verre} alt="verreimg" /></div>
          <div className="parassol vert"><img src={parassol_vert_img} alt="parassolvertimg" /></div>
          <div className="parassol creme"><img src={parassol_creme_img} alt='parassolcremeimg' /></div>
        </div>
        <div className="review-bottom">
          <div className="row">
              <div className='text_first col-md-4'>
                <label>
                  The best fish and chips shop in Sydney! Beautiful fresh fish and chips, never greasy and cooked to perfection at reasonable prices. The staff are always lovely and helpful. One of our favourite places to eat in the Shire.
                </label>
                <p>“Sarah-Jane Ward”</p>
            </div>
          </div>
          <div className="row">
            <div className="text_second col-md-6">
              <label>
                Love the new ook and the food is delicious. Staff welcoming, friendly and efficient.
              </label>
              <p>“ Sheila Jeffries”</p>
            </div>
          </div>
          <div className='row'>
            <div className="text_bottom_left col-md-4">
              <div className="text_bottom_left_1">
                <label>
                  These guys do the best fish and chips in Sydney, hands down. The fish is so fresh and moist, and the batter perfectly crisp. Love the new look too
                </label>
                <p>“Richard Enright”</p>
              </div>
              <div className="text_bottom_left_1">
                <label>
                  The best fish and chips ever! Highly recommend this clean,friendly and delicious good old fashioned fish and chips!<br /> You deserve to be super successful!
                </label>
                <p>“Kylie Allbon”</p>
              </div>
              <div className="text_bottom_left_1">
                <label>
                  Nice food, good value and very friendly staff. If you haven't tried this place give it a go. The seafood basket is my favourite
                </label>
                <p>  “Russell Sullivan”</p>
              </div>
            </div>
            <div className="text_bottom_center col-md-4">
              <div className="text_bottom_left_1">
                <label>
                  A friend recommended that I try their fish cocktails!! He claimed they were the best he had ever had. Said they were clean, fresh and fluffy and that I was missing out. He was absolutely right! They were amazingand the service was friendly. I try to stop in every time I drive through Heathcote. I recommend parking behind the IGA and walking to the shop as it can be hard to pull up on the main highway but I would recommend these to anyway passing through!!
                </label>
                <p> “Mitchella”</p>
              </div>
              <div className="text_bottom_left_1">
                <label>
                  It's nice to see a business in Heathcote make their shop welcoming well done. The fish and chips at this shop is first class. Keep up the good work.
                </label>
                <p> “Ann Skujins”</p>
              </div>
            </div>
            <div className="text_bottom_right col-md-4">
              <div className="text_bottom_right_1">
                <label>
                  Awesome local business. Friendly, quick and yummy. Also love the renos
                </label>
                <p>“Tam Carmill”</p>
              </div>
              <div className="text_bottom_right_2">
                <label>
                  Has the Best fish and chips in sydney..!!! Actually the best i have ever had.!
                </label>
                <p>  “Tommy Morrison”</p>
              </div>
              <div className="text_bottom_right_3">
                <label>
                  Best Fish and Chips in the whole of the Sutherland Shire !
                </label>
                <p>  “Tommy Morrison”</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Section4;
