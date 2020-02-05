import React from 'react';

const Banner = ({title,subtitle}) => {
  return (
       <section className="home-section home-fade home-full-height">
            <div className="shop-page-header">
              <div className="titan-caption">
                <div className="caption-content">
                  <div className="font-alt mb-30 titan-title-size-1">{title}</div>
                  <div className="font-alt mb-30 titan-title-size-4"> Summer 2020</div>
                  <div className="font-alt mb-40 titan-title-size-1 subtitle">{subtitle}</div>
                </div>
              </div>
            </div>
      </section>
  );
}

export default Banner;
