export default function SongCard(props) {
    const { imageSrc, titleText, artistName, size } = props;
  
    // Define styles based on the size prop
    const cardWidth = size === 'large' ? '372px' : size === 'small' ? '206px' : null;
    const cardHeight = size === 'large' ? '343px' : size === 'small' ? '191px' : null;
  
    const cardStyles = {
      width: cardWidth,
      height: cardHeight,
    };
  
    return (
      <div className="song-card" style={cardStyles}>
            <img src={props.imageSrc} style={{ borderRadius: '16px' }} />
          <h5 className ="song-name">{props.titleText}</h5>
          <h5 className ="artist">{props.artistName}</h5>
        </div>
    );
  }