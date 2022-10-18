/*=============== FILTER ===============*/
$(document).ready(function () {
  $('.portfolio__item').click(function (e) { 
    e.preventDefault();
    const value = $(this).attr('data-filter');
    if (value == 'all'){
      $('.portfolio__card').show('1000');
    }else{
      $('.portfolio__card').not('.'+value).hide('1000');
      $('.portfolio__card').filter('.'+value).show('1000');
    }
  });
});
  

const linkPortfolio = document.querySelectorAll('.portfolio__item')
  
  function activePortfolio(){
    if(linkPortfolio){
        linkPortfolio.forEach(l => l.classList.remove('active-portfolio'))
      this.classList.add('active-portfolio')
    }
  }
  
linkPortfolio.forEach(l => l.addEventListener('click', activePortfolio))