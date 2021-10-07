function playgame() {
    Swal.fire({
        title: 'Welcome to SQUIDGAMES!',
        text: 'You Accepting cookies for to play this games.',
        imageUrl: 'https://i.ibb.co/q1XH2Kt/card.png',
        imageWidth: 400,
        imageHeight: 200,
        imageAlt: 'Custom image',
    }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
            window.location.href = "pregame.html";
        }
    })
}