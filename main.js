'use strict';
{

class Target{
  constructor(){
    const target = document.createElement('div');
    target.classList.add('target');
    this.img = document.createElement('img');
    this.img.src = this.shufflePanel();
    this.stop = document.createElement('p');

    this.stop.textContent = 'STOP'

    target.appendChild(this.img);
    target.appendChild(this.stop);
    document.querySelector('.targets').appendChild(target);
    this.stop.addEventListener('click',()=>{
    console.log(timeoutId);
    clearTimeout(timeoutId);
    })
  }



  shufflePanel(){
    const panels = [
      './img/seven.png',
      './img/bell.png',
      './img/cherry.png',
    ];
    return panels[Math.floor(Math.random()*panels.length)];
  }

  changePanel(){
    this.img.src = this.shufflePanel();
  const timeoutId=  setTimeout(()=>{
      this.changePanel()},50);
  }

}

 const targets =[
   new Target(),
   new Target(),
   new Target(),
 ];

 const spin = document.getElementById('spin');
 spin.addEventListener('click',()=>{
   targets.forEach((target)=>{
     target.changePanel();
   });
 });


























}
