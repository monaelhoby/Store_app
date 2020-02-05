import React, {Component, createContext} from 'react';
import items from "../data";
import Alert from '@material-ui/lab/Alert';

export const ProductContext = createContext();

class ProductProvider extends Component {
    state={
        clothes:[],
        sortedClothes:[],
        featureClothes:[],
        loading:true,
        type:"all",
        oversize:false,
        price:0,
        minPrice: 0,
        maxPrice: 0,
        size:"m",
        minPrice:0,
        inCart : false,
        cart :[],
        count:0,
        cartTotal:0,
        cartSubtotal : 0,
        cartTax : 0 ,
    }
    // getting copy of data not refrence of data
    componentDidMount (){
        let clothes = this.formatData(items);
        let featureClothes = clothes.filter(clothes => clothes.featured === true);
        let maxPrice = Math.max(...clothes.map(item => item.price));
        console.log(maxPrice)
        this.setState({
            clothes,sortedClothes:clothes,featureClothes,loading:false, price: maxPrice, maxPrice
        })
    }
    formatData = items => {
        let tempItem = items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image =>{
                return image.fields.file.url
            })
            return {...item.fields,images,id}
        })
        return tempItem
    }

    getClothes = slug => {
        const item = this.state.clothes.find(item => item.slug === slug);
        return item
    }
    handleChange = e => {
        const target = e.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = e.target.name;
        this.setState({
            [name] : value
        })
    }
    filterProduct = e => {
        e.preventDefault();
        let {clothes,type,size,price,oversize} = this.state;
        let tempItems = [...clothes];
        //filter by type
        if(type !== "all"){
            tempItems = tempItems.filter(item => item.type === type)
        }
        // filter by size
        if(size !== "m"){
            tempItems = tempItems.filter(item => item.size === size)
        }
        // filter by price
            tempItems = tempItems.filter(item => item.price <= price)
        //filter by oversize
        if (oversize) {
            tempItems = tempItems.filter(room => room.oversize === true);
        }
        this.setState({
            sortedClothes : tempItems
        })
    }
    //get Product
    getItem = id => {
        const product = this.state.clothes.find(item => item.id === id);
        return product
    } 
    displayAlert = () => {
        return (<Alert severity="success">Item is added — check cart out!</Alert>)
    }
    // add item to cart
    addItem = id => {
        const product = this.getItem(id);
        product.inCart=true;
        product.count = product.count + 1;
        const price = product.price;
        product.total=price;
        this.setState( () => ({
            cart : [...this.state.cart,product]
        }), () => (this.displayAlert()));
        
    }
    increment = id => {
        const itemcart = this.state.cart.find(item => item.id === id);
        itemcart.count = itemcart.count + 1;
        itemcart.total = itemcart.count * itemcart.price;
        this.setState({cart:[...this.state.cart]});
    }
    
    decrement = id => {
        const itemcart = this.state.cart.find(item => item.id === id);
        if(itemcart.count > 0){
            itemcart.count = itemcart.count - 1;
            itemcart.total = itemcart.count * itemcart.price;
            this.setState({cart:[...this.state.cart]}) 
        }else{
            this.removeItem(id)
        }
    }
    removeItem = id => {
        const newcart = this.state.cart.filter(item => item.id !== id);
        newcart.inCart=false;
        newcart.count = 0;
        newcart.total=0;
        this.setState(() => ({cart:newcart}));
    }
    addTotals = e => {
        e.preventDefault();
        let cartSubtotal = 0;
        this.state.cart.map(item => cartSubtotal += item.total);
        const temptax = cartSubtotal * .1 ;
        const tax = parseFloat(temptax.toFixed(2));
        const total = cartSubtotal + tax ;
        this.setState({
            cartSubtotal : cartSubtotal,
            cartTax : tax ,
            cartTotal : total
        })
    }
    render () {
        return (
            <ProductContext.Provider value={{
                                            ...this.state,
                                            getClothes : this.getClothes,
                                            handleChange : this.handleChange,
                                            filterProduct : this.filterProduct,
                                            addItem: this.addItem,
                                            increment :this.increment,
                                            decrement : this.decrement,
                                            removeItem : this.removeItem,
                                            addTotals : this.addTotals
                                            }}>
                {this.props.children}
            </ProductContext.Provider>
          );
    }
}

export const ProductConsumer = ProductContext.Consumer;

export default ProductProvider;

export function withItemConsumer(Component) {
    return function ConsumerWrapper(props) {
      return (
        <ProductConsumer>
          {value => <Component {...props} context={value} />}
        </ProductConsumer>
      );
    };
  }
