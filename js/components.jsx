"use strict";

function LowerNav(props) {
    return (
        <nav>
            <h1>Das Waldhotel</h1>
        </nav>
    );
}

function UpperNav(props) {
    const buttonStyle = { padding: '0.5em' };

    return (
        <nav>
            <a href="#">Standorte</a>
            <a href="#">Zimmer</a>
            <a href="index.html"><i class="fa-solid fa-bed logo"></i></a>
            <a href="#">Restaurants</a>
            <a href="book.html" style={buttonStyle}>
                <a class="button">Jetzt buchen</a>
            </a>
        </nav>
    );
}

function Footer(props) {
    return (
        <nav>
            <a href="https://github.com/oskardotglobal">© 2022 Oskar Manhart</a>
            <a href="https://github.com/oskardotglobal/hotelwebseite"><i class="fa-brands fa-github"></i></a>
            <a href="https://mit-license.org/">Quellcode lizensiert unter MIT</a>
        </nav>
    );
}
    
function render() {
    ReactDOM.render(<UpperNav />, document.getElementById("upper"));
    ReactDOM.render(<LowerNav />, document.getElementById("lower"));
    ReactDOM.render(<Footer />, document.getElementById("footer"))  
}

render();
