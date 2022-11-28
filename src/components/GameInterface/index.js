import "./index.css"

export function GameInterface({children, level, score, totalscore}) {


  return (<>
          <div className="game_interface">Level: {level} | Score: {score}/{totalscore}
          </div>
          {children}</>)

} 