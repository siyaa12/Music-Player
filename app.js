document.querySelector('#nav').addEventListener('click', () => {
    document.querySelector('#magic').classList.toggle('hide');
    document.querySelector('#dropdown').classList.toggle('hide');
});
document.querySelector('#dropdown').addEventListener('click', () => {
    document.querySelector('#magic').classList.toggle('hide');
    document.querySelector('#nav').classList.toggle('hide');
});
document.querySelector('#play').addEventListener('click', () => {
    document.querySelector('#play').classList.toggle('hide');
    document.querySelector('#pause').classList.toggle('hide');
});
document.querySelector('#pause').addEventListener('click', () => {
    document.querySelector('#play').classList.toggle('hide');
    document.querySelector('#pause').classList.toggle('hide');
});
const title = parseInt(document.querySelector('title').innerHTML);
try {
    document.querySelector("#previous").addEventListener('click', () => {
        window.location.replace(`${title - 1}.html`);
    });
} catch { }
try {
    document.querySelector("#next").addEventListener('click', () => {
        window.location.replace(`${title + 1}.html`);
    });
} catch { }