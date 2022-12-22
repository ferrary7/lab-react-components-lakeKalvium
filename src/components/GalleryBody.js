import "./GalleryBody.css"

const GalleryBody = (props) => (
    <div>
        {props.imageData.map((lake) => {
            return (
                <div key={lake.id} className="lake">
                    <img src={lake.img} alt="lake" />
                </div>
            );
        })}
    </div>
);

export default GalleryBody