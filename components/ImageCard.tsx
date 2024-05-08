export default function ImageCard(props) {
    return (
      <div className="card">
          <img src={props.imageSrc} style={{ borderRadius: '16px' }} />
        <h5 className ="card-text">{props.titleText}</h5>
      </div>
    );
}