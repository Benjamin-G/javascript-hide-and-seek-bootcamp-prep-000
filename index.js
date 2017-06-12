function getFirstSelector(selector){
  return document.querySelector(selector)
}

function nestedTarget(){
  return document.querySelector('#nested div div div div')
}

function increaseRankBy(n){
  n = parseInt(n)
  const lis = document.getElementById('app').querySelectorAll('ul.ranked-list li')

  for (let i = 0; i < lis.length; i++) {
    lis[i].innerHTML = parseInt(lis[i].innerHTML)+n
  }
}

function deepestChild(){
  let x = document.querySelectorAll('div#grand-node')
   x = document.querySelector('div')

  for(let i = 0; i < x.length; i++){
    if(x[i].innerHTML==='boo!')
    {
    return x[i]
    }
  }
}
