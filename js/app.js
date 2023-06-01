const shareBtn = document.querySelector('footer .share-logo');
const openShareBtn = document.querySelector('#logo-open');
const share = document.querySelector('.share');

shareBtn.addEventListener('click', () => {
    share.classList.add('share-open');
});

openShareBtn.addEventListener('click', () => {
    share.classList.remove('share-open');
});