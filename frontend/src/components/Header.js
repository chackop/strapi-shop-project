const Header = () => {
    return (
        <header className="App-header">
            <Link to="/"><h1>Food Stall</h1></Link>
            <div className="right">
                <button className="snipcart-checkout snipcart-summary">
                    Checkout (<span className="snipcart-total-items"></span>)
        </button>
            </div>
        </header>
    );
}