window.addEventListener('scroll', () => {
    function getScrollPercentage() {
        const h = document.documentElement, 
            b = document.body,
            st = 'scrollTop',
            sh = 'scrollHeight'
        return (h[st]||b[st]) / ((h[sh]||b[sh]) - h.clientHeight) * 100
    }

    document.body.style.setProperty('--scroll', getScrollPercentage())
}, false)
