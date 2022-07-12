import CardImageContainer from '../cards/image-container';

function GridView({ data }) {
  return (
    <div className="row" style={{ flexWrap: 'wrap' }} data-testid="gridView">
      {data.length > 0 &&
        data.map((img) => (
          <div className="col my-2" key={img.id} data-testid="gridImage">
            <CardImageContainer data={img} />
          </div>
        ))}
    </div>
  );
}

export default GridView;
