import "./index.css"
import Cell from "../Cell"

export default function ZmeysAnimation() {
  return (<div className="game_bg">
       <div className="zmey">
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
        </div>
        <div className="zmey">
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
        </div>
        <div className="zmey">
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
        </div>
        <div className="zmey">
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
          <Cell type="snake" />
        </div>
  </div>)
}