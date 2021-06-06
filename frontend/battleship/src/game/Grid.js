import Row from './Row'

export default function Grid(props){
  const styles = {
        margin: "auto",
        width: "75%",
        paddingTop: "50px"
      }

  return(
    <div style={styles}>
      <Row lett="A" rowNum={props.board === "player" ? 0 : 100}/>
      <Row lett="B" rowNum={props.board === "player" ? 10 : 110}/>
      <Row lett="C" rowNum={props.board === "player" ? 20 : 120}/>
      <Row lett="D" rowNum={props.board === "player" ? 30 : 130}/>
      <Row lett="E" rowNum={props.board === "player" ? 40 : 140}/>
      <Row lett="F" rowNum={props.board === "player" ? 50 : 150}/>
      <Row lett="G" rowNum={props.board === "player" ? 60 : 160}/>
      <Row lett="H" rowNum={props.board === "player" ? 70 : 170}/>
      <Row lett="I" rowNum={props.board === "player" ? 80 : 180}/>
      <Row lett="J" rowNum={props.board === "player" ? 90 : 190}/>
    </div>
  )
}