  const tracks = document.querySelectorAll('.carousel__content')
        tracks.forEach(track => {
            const cards = [...track.children]
            for(let i=0;i<3;i++){
            cards.forEach(card=>{
            const clone = card.cloneNode(true)
            track.appendChild(clone)
        })
    }
})