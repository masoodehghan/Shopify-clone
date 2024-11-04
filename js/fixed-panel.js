const fixedPanel = $.getElementById('j-floor-fixed-panel');

window.addEventListener('scroll', () => {
    centerColumnWidth = $.getElementById('center_column').offsetWidth;
    if(scrollY > 966) {
        fixedPanel.classList.add('floor-fixed');
        fixedPanel.style.position = 'fixed';
        console.log(innerWidth - centerColumnWidth);    
        fixedPanel.style.left = `${innerWidth / 2 - 665}px`
    } else {
        fixedPanel.classList.remove('floor-fixed');
    }
})

