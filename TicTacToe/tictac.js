//initially the turn would be for X
var turn = 'X'
var score = {
    'X':0,
    'O':0
}
var gridValue = 0;

//called when view is first loaded
function fnLoad(){
    var select = document.getElementById("grid")
    //grid will show the options starting at 3x3 up to 100x100
    for (i=3; i <= 100; i++) {
        var option = document.createElement('option')
        select.options[select.options.length] = new Option(i + 'X' + i, i)
    }
    //fnChoose will be called every time there is a click in the container for boxes
    addEvent(document.getElementById("game"), "click", fnChoose)
    //fnNewGame will create the whole UI for the game
    fnNewGame()
}

//standard function to add the event for a specific element, name of event, name of function to be called (callback)
function addEvent(element, eventName, callback){
    if(element.addEventListener){
        element.addEventListener(eventName, callback, false)
    } else if (element.attachEvent) {
        element.attachEvent("on" + eventName, callback)
    }
}

//this function is going to be called on every move
function fnChoose(e) {
    if (e.target && e.target.nodeName == "TD"){
        var targetElement = document.getElementById(e.target.id);
        var prevTurn
        //if a box is already filled, then it will be disabled, i.e., cannot fill/choose again
        if((targetElement.className).indexOf("disabled") == -1){
            targetElement.innerHTML = turn
            targetElement.classList.add('disabled')
            targetElement.classList.add(turn)
            score[turn] += 1
            //stores the previous turn
            prevTurn = turn
            turn = turn === "X" ? "O" : "X"
            //deciding whether the game has come to an end or we need to continue
            if(fnDecide(targetElement, prevTurn)){
                //last turn has won the game
                alert(prevTurn + ' has won the game!')
                fnNewGame()
            }
            //if all the moves have been completed, then the game is a draw
            else if ((score['X'] + score['O']) == (gridValue * gridValue)) {
                alert('Draw!')
                fnNewGame()
            }
        }
    }
}

//Deciding the winner or drawn game
function fnDecide(targetElement, prevTurn){
    var UL = document.getElementById('game')
    var elements, i, j, cnt
    if(score[prevTurn] >= gridValue){
        var classes = targetElement.className.split(/\s+/)
        for(i=0; i < classes.length; i+=1) {
            cnt = 0
            if(classes[i].indexOf('row') !== -1 || classes[i].indexOf('col') !== -1 || classes[i].indexOf('dia') !== -1) {
                elements = UL.getElementsByClassName(classes[i])
                //checking the adjacent elements. If match then add the score =cnt
                for(j=0; j < elements.length; j+= 1){
                    if(elements[j].innerHTML == prevTurn) {
                        cnt += 1
                    }
                }
                //if score equals length/width of grid, the players (X or O) has won for example 3x3, score should be 3
                if (cnt == gridValue){
                    return true
                }
            }
        }
    }
    //no player has won
    return false
}

//creation of UI grid elements depending upon the square chosen
function fnNewGame(){
    var gameUL = document.getElementById("game")
    if(gameUL.innerHTML !== ''){
        gameUL.innerHTML = null
        //array of scores to keep track of total X's and O's inserted
        score = {
            'X':0,
            'O':0
        }
        //initial turn is X
        turn = 'X'
        gridValue = 0
    }
    //getting grid to create boxes/blocks
    var select = document.getElementById("grid")
    //total rows and columns for gridValue
    gridValue = select.options[select.selectedIndex].value
    var i, j, li, k = 0, classLists
    var gridAdd = +gridValue + 1

    //creating boxes
    for(i=1; i <= gridValue; i += 1) {
        //creating rows equal to gridValue
        tr = document.createElement('tr')
        //creating columns equal to gridValue for each row, i.e., 4x4, there are 4 columns in each row
        for (j=1; j <= gridValue; j += 1) {
            k += 1
            li = document.createElement('td')
            li .setAttribute("id", "li" + k)
            classLists = 'td row' + i + ' col' + j
            //when the columns become equal to a row, then end the row
            if(i === j){
                classLists = 'td row' + i + ' col' + j + ' dia0'
            }

            //diagonal box
            if((i + j) === gridAdd){
                classLists = 'td row' + i + ' col' + j + ' dia1'
            }
            
            if(!isEven(gridValue) && (Math.round(gridValue/2) === i && Math.round(gridValue/2) === j)) 
                classLists = 'td row' + i + ' col' + j + ' dia0 dia1';
            li.className = classLists
            tr.appendChild(li)
        }
        gameUL.appendChild(tr)
    }

}

function isEven(value){
    if (value % 2 == 0){
        return true
    } else {
        return false
    }
}