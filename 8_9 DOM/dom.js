
//Последовательность вызова событий
window.addEventListener('load', (ev) => {
  //event
  var el = document.getElementById('btn-start');
  el.addEventListener('click', (e)=>{
    console.log('Success Start');
    //e.stopPropagation();
    e.stopImmediatePropagation();
  })

  
  el = document.getElementById('btn-end');
  el.addEventListener('click', (e)=>{
    console.log('Success End');
    //e.stopPropagation();
  })

  
  el = document.getElementById('btn-load');
  el.addEventListener('click', (e)=>{
    var css = document.createElement('link');
    css.id = 'newStyle-css'
    css.rel = 'stylesheet';
    css.type = 'text/css'
    css.href = 'newStyle.css';
    document.head.appendChild(css);
    //e.stopPropagation();
  })

  
  el = document.getElementById('btn-unload');
  el.addEventListener('click', (e)=>{
    var css = document.getElementById('newStyle-css')
    css && css.remove();
    //e.stopPropagation();
  })

  
  el = document.getElementById('btn-load-js');
  el.addEventListener('click', (e)=>{
    var css = document.createElement('script');
    css.id = 'newScript-js'
    css.setAttribute('src', 'newScript.js');
    document.head.appendChild(css);
    //e.stopPropagation();
  })

  
  el = document.getElementById('btn-unload-js');
  el.addEventListener('click', (e)=>{
    var css = document.getElementById('newScript-js')
    css && css.remove();
    //e.stopPropagation();
  })

  


  el = document.getElementById('el-input');
  el.addEventListener('keydown', (e)=>{
    console.log('keydown - ' + e.key);
    //e.stopPropagation();
    //e.stopImmediatePropagation();
  })
  el.addEventListener('keypress', (e)=>{
    console.log('keypress - ' + e.key);
    //e.preventDefault();
  })
  el.addEventListener('keyup', (e)=>{
    console.log('keyup - ' + e.key);
    e.preventDefault();
    //e.preventDefault();
  })

  //all event
  var allTag = document.body.getElementsByTagName("*");
  allTag = [document, ...allTag];
  for(let item of allTag){
    item.addEventListener('click', (e)=>{
      console.log('Up', e.currentTarget);
      
    })//{capture: true}
  }
  for(let item of allTag){
    item.addEventListener('click', (e)=>{
      console.log('Down', e.currentTarget);
    },{capture: true})//
  }
})

function recurse(){
  console.log('Fake recurse');
}


//Дерево элементов
function printIerarchi(){
  debugger;
  recurse(document, '');

  function recurse(node, padding){
    console.log(padding.length/2 + padding + toString(node));
    [...(node.children || [])].forEach(child => recurse(child, padding + '  ')); //childNodes
  }

  function toString(node){
    if(!node || !node.nodeName){
      return '';
    }
    var attr = [...(node.attributes || [])]
              .map(({name, value}) => ` ${name}="${value}"`)
              .join('');
    return `<${node.nodeName.toLowerCase()}${attr}>`;
  }
}

//Элементы перемещаются, не копируются
function moveElement(){ 
  var nodeArr = document.body.getElementsByTagName('*');
  [...nodeArr].forEach(el => document.body.appendChild(el.cloneNode(true))) //cloneNode(deep?)
}



//Проблема с позиционированием


////Пример ;
/*function recurse(node, padding){
  console.log(padding + toString(node))

  [...node.children].forEach(child =>{
    recurse(child, padding + '  ');
  })
}*/