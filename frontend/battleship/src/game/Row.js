import Cell from './Cell'


export default function Row(props) {
  const styles = {
    width: "560px"
  }

  return (
    <div style={styles}>
      <Cell lett={props.lett} num={1} position={props.rowNum + 1}/>
      <Cell lett={props.lett} num={2} position={props.rowNum + 2}/>
      <Cell lett={props.lett} num={3} position={props.rowNum + 3}/>
      <Cell lett={props.lett} num={4} position={props.rowNum + 4}/>
      <Cell lett={props.lett} num={5} position={props.rowNum + 5}/>
      <Cell lett={props.lett} num={6} position={props.rowNum + 6}/>
      <Cell lett={props.lett} num={7} position={props.rowNum + 7}/>
      <Cell lett={props.lett} num={8} position={props.rowNum + 8}/>
      <Cell lett={props.lett} num={9} position={props.rowNum + 9}/>
      <Cell lett={props.lett} num={10} position={props.rowNum + 10}/>
    </div>
  )
}