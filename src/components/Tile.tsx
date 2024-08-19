import './Tile.css';

const Tile = (props: any) => {
  return (
    <div className={ 'Tile ' + props.className } onClick={ props.onTileClick }>{ props.value }</div>
  )
}

export default Tile;