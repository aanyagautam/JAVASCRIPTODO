var myNodeList = document.getElementByIdTagName('Li')

var i;

for(i=0; i <myNodeList.length; i++) {

    var span = document.createElement('Span')
    var txt = document.createTextNode('\u00D7');
    span.className='close'
    span.appendChild(txt);
    myNodeList[i].appendChild(span)

}

var close = document.getElementsByClassName('close')
var i;

for(i=0; i< close.length; i++) {
    close[i].onclick=function(){
        var div = this.parentElement;  
        div.style.display='none'
    }
}

var list = document.querySelector('ul')
list.addEventListener('click', function(ev) {
    if(ev.target.tagName === 'Li') {
        ev.target.classList.toggle('checked')
    }
},false)

function newElement () {
    var li= document.createElement('li')
    var inputValue = document.getElementById('item').value
    var t =document.createTextNode(inputValue)
    li.appendChild(t)
    if(inputValue === '') {
        alert('this field can not be empty')
    }else {
        document.getElementById('list').appendChild(li)
    }
    document.getElementById('item').value=''

    var span document.createElement('Span');
    var txt= document.createTextNode('/u00D7')
    span.appenChild(txt)
    li.appendChild(span)


    for(i=0; i<close.length; i++){
        close[i].onclick=function(){
            var div = this.parentElement;
            div.style.display='none'
        }
    }
}
