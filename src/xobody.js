import React,{ useState } from "react";

function Xobody() {
    var clicked = [[0,0,0], [0,0,0], [0,0,0]];
    // var [ clicked, addClicked] = useState([]);
    var [ winnerState, getWinner] = useState("");
    var [ xoro, changeUser] = useState(1);
    var [ xoList, changeXO] = useState([ 0, 0, 0, 0, 0, 0, 0, 0, 0])

    function doWork(event) {
        var ind = event.target.getAttribute("name");
        xoList[ind] = xoro;
        changeXO((prev)=>{
            return([...prev, xoList]);   
        });
        xoro === 1 ? changeUser(2) : changeUser(1) ;
        push2Dlist();
        console.log(clicked);
        var winner = checkWinner();
        getWinner(winner);
    }

    function push2Dlist(){
        for(var i = 0; i < xoList.length; i++){
            if(xoList[i] > 0){
                if(i > 2){
                    if(i < 6){
                        clicked[1][i - 3] = xoList[i];
                    } else if(i < 9){
                        clicked[2][i - 6] = xoList[i];
                    }
                } else {
                    clicked[0][i] = xoList[i];
                }
            }
        }
    }

    function checkWinner(){
        if((clicked[0][0] === 1) && (clicked[1][1] === 1) && (clicked[2][2] === 1)){
            return "X is winner";
        }else if((clicked[0][0] === 2) && (clicked[1][1] === 2) && (clicked[2][2] === 2)){
            return "O is Winner";
        }else if((clicked[0][2] === 1) && (clicked[1][1] === 1) && (clicked[2][0] === 1)){
            return "X is Winner";
        }else if((clicked[0][2] === 2) && (clicked[1][1] === 2) && (clicked[2][0] === 2)){
            return "O is Winner";
        } else {
            for(var i = 0; i < 3; i++){
                if((clicked[i][0] === 1) &&(clicked[i][1] === 1) && (clicked[i][2] === 1)){
                    return "X is Winner";
                } else if((clicked[i][0] === 2) &&(clicked[i][1] === 2) && (clicked[i][2] === 2)){
                    return "O is Winner";
                } else if((clicked[0][i] === 1) &&(clicked[1][i] === 1) && (clicked[2][i] === 1)){
                    return "X is Winner";
                } else if((clicked[0][i] === 2) &&(clicked[1][i] === 2) && (clicked[2][i] === 2)){
                    return "O is Winner";
                }
            }
        }
    }

    var tdList = [0, 1, 2];
    var index = -1;

    return (
        <div className="xo-b">
            <h1> { winnerState } </h1>
            <div className="mainxo">
                <table className="xotab">
                    {tdList.map(()=>{
                        return (
                            <tr>
                                {tdList.map(()=>{
                                    index++;
                                    return (
                                        <td><p className="xoButton" key={index} name={index} onClick={doWork}>
                                            {xoList[index] === 1 ? "X" : xoList[index] === 2 ? "O" : null }
                                        </p></td>
                                    );
                                })}
                            </tr>
                        );
                    })}
                </table>
            </div>
        </div>
    );
}


export default Xobody;