document.querySelector('#punch').onclick = function(){
    if(document.querySelector('#newtask input').
    Value.length == 0){
        alert("please Enter a Task")
    }
    else{
        document.querySelector('#tasks').innerHTML
        += '
            <div class="task">
                <spam id="taskname">
                    ${document.querySelector('#newtask input').value}
                </spam><button class="delete">
                    
                </button>
            </div>
        ';
    }
}