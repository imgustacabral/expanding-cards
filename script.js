const panels = document.querySelectorAll('.panel')

panels.forEach((panel) => {
    panel.addEventListener('click', () => {
        const currentActivePanel = document.querySelector('.active')
        currentActivePanel.classList.remove('active')
        panel.classList.add('active')
        
    })
})