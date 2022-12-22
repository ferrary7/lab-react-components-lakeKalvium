import "./GalleryHeader.css";

let GalleryHeader = () => (
    <header>
        <img className="logo" src="https://s3.ap-south-1.amazonaws.com/kalvi-education.github.io/front-end-web-development/Kalvium-Logo.png" alt="logo" />
        <nav>
            <ul className="navBar">
                <li>
                    <a href="#!">Home</a>
                </li>
                <li>
                    <a href="#!">About</a>
                </li>
                <li>
                    <a href="#!">More</a>
                </li>
            </ul>
        </nav>
        <a href="#!">
            <button>Contact</button>
        </a>
    </header>
);

export default GalleryHeader;