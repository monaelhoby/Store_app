import React from "react";
import {withItemConsumer} from "../../Context_API/context";


// get all unique values
const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

const ProductBar = ({context}) => {

    const {sortedClothes, handleChange, price, maxPrice, minPrice, type, oversize, size, filterProduct} = context ;

    // get unique types
  let types = getUnique(sortedClothes, "type");
   // add all
   types = ["all", ...types];

// get unique size
let sizes = getUnique(sortedClothes, "size");
// add all size
sizes = [...sizes];

    return (
            <section className="module-small">
                <div className="container">
                    <form className="row">
                    <div className="col-lg-3 col-sm-6 mb-sm-20">
                        Collection Type
                        <select className="form-control" name="type" id="type" value={type} onChange={handleChange}>
                        {
                        types.map((item,index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                        }
                        </select>
                    </div>
                    <div className="col-lg-2 col-sm-6 mb-sm-20">
                        Size
                        <select className="form-control" name="size" id="size" value={size} onChange={handleChange}>
                        {
                        sizes.map((item,index) => {
                            return <option key={index} value={item}>{item}</option>
                        })
                        }
                        </select>
                    </div>
                    <div className="col-lg-2 col-sm-6 mb-sm-20">
                        {/* room price */}
                        <div className="form-group">
                        <label htmlFor="price">price <span style={{"padding":"2px 5px","border":"1px solid #888"}}>$ {price}</span></label>
                        <input
                            type="range"
                            name="price"
                            min={minPrice}
                            max={maxPrice}
                            id="price"
                            value={price}
                            onChange={handleChange}
                            className="form-control"
                        />
                        </div>
                        {/* end of room price*/}
                    </div>
                    <div className="col-lg-2 col-sm-6 mb-sm-20">
                        <div className="form-group text-center">
                        <label htmlFor="breakfast">Oversize</label>
                            <input
                            type="checkbox"
                            name="oversize"
                            id="oversize"
                            checked={oversize}
                            onChange={handleChange}
                            className="form-control"
                            style={{"width":"20px","margin":"auto"}}
                            />
                        </div>
                        </div>
                    <div className="col-lg-3 mb-sm-20">
                        <button className="btn btn-block btn-round btn-g" type="submit" onClick={filterProduct}>Apply</button>
                    </div>
                    </form>
                </div>
                </section>
        )
}

export default withItemConsumer(ProductBar) 