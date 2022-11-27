import Zmeys from "./Zmeys";
import Wkey from "../../assets/images/W.jpg";
import Akey from "../../assets/images/A.jpg";
import Skey from "../../assets/images/S.jpg";
import Dkey from "../../assets/images/D.jpg";

export function GameMenu({handleGameStart}) {

  return (<>
        <Zmeys />
        <div class="game_menu">
            <div>
              <button class="start_game" onClick={handleGameStart}>Start!</button>
              <div class="game_controls">
                <span><img src={Wkey} alt="W key" width="50px" /> Move Up</span>
                <span><img src={Akey} alt="A key" width="50px"/> Move Left</span>
                <span><img src={Skey} alt="S key" width="50px"/> Move Right</span>
                <span><img src={Dkey} alt="D key" width="50px"/> Move Down</span>
              </div>
            </div>
        </div>
        </>)
}