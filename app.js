

class App extends React.Component {

    state = {
        magazineAmount: 9,
        shoppingAmount: 0,
    }

    subtractionShoppingCart = () => {
        if (this.state.shoppingAmount > 0 && this.state.magazineAmount > 0) {
            this.setState({
                shoppingAmount: this.state.shoppingAmount - 1,
            })
        } 

        
    }

    addingShoppingCart = () => {
        if (this.state.shoppingAmount < this.state.magazineAmount ) {
            this.setState({
                shoppingAmount: this.state.shoppingAmount + 1,
            })
        } else {

        }
    }

    buyingItems = () => {
        this.setState({
            magazineAmount: this.state.magazineAmount - this.state.shoppingAmount,
            shoppingAmount: 0,
        })
    }
    

    displayBuyButton = () => {
        if (this.state.shoppingAmount > 0) {
            return(
                <button onClick={this.buyingItems}>BUY</button>
            )
        }
    }

    


    render() {
        return(
            <div>
                <button disabled={this.state.shoppingAmount === 0 ? true : false}  onClick={this.subtractionShoppingCart}>-</button>
                <span style={this.state.shoppingAmount === 0 ?{opacity: 0.3} : {}}>{this.state.shoppingAmount}</span>
                <button disabled={this.state.shoppingAmount === this.state.magazineAmount ? true : false} onClick={this.addingShoppingCart}>+</button>
                {this.displayBuyButton()}
            </div>
        )
    }

}
ReactDOM.render(<App />, document.getElementById('root'))