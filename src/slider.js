const masQuote = [
    {autor: 'John Doe', quote: '“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae."'},
    {autor: 'Jonny Doe', quote: '“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae. S2"'},
    {autor: 'Johnathan Doe', quote: '“Suspendisse tempor turpis odio, sit amet cursus leo consequat non. Maecenas lacinia faucibus enimqui interdum dolor pulvinar vitae. S3"'}
];

document.addEventListener('DOMContentLoaded', () => {
    const slide = document.querySelector('#slide');
    const nameAutor = document.querySelector('#slide-autor-name');
    const contListDots = document.querySelector('.dots-nav-slider');

    contListDots.addEventListener('click', (e) => {
        if (e.target.className === 'dot-slide'){
            const index = parseInt(e.target.id.replace('dot-', ''), 10);
            contListDots.querySelector('.dot-slide-checked').classList.remove('dot-slide-checked');
            slide.innerHTML = masQuote[index].quote;
            nameAutor.innerHTML = masQuote[index].autor;
            e.target.classList.add('dot-slide-checked');
        }
    });
});