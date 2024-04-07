const Tile = ({ value }) => {
    return (
        <div key={value} id={`tile-${value}`} className="tile">
            <p>{value}</p>
        </div>
    );
}
 
export default Tile;