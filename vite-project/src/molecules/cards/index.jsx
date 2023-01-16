function Cards(props){
  return(
    <div className="card">
      <img src={props.src} onClick={props.onclick}></img>
    </div>
  )
}

export default Cards;