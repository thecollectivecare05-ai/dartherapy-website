// DARTherapy ABA — shared nav interactions
(function(){
  var burger=document.getElementById('burger'), menu=document.getElementById('menu');
  if(burger&&menu){
    burger.addEventListener('click',function(){
      var open=menu.classList.toggle('open');
      burger.setAttribute('aria-expanded',open);
    });
  }
  document.querySelectorAll('.menu > li > button').forEach(function(b){
    b.addEventListener('click',function(e){
      if(window.innerWidth<=760){
        e.preventDefault();
        var dd=b.nextElementSibling;
        var vis=dd.style.visibility==='visible';
        dd.style.visibility=vis?'':'visible';
        dd.style.opacity=vis?'':'1';
      }
    });
  });
})();
