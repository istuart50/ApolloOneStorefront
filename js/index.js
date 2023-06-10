$(function () {
    const products = [

        {
            id: 'baton',
            name: 'Baton',
            image: 'images/baton.jpg',
            description: 'When your enemy is coming toward you, simply swing the baton outward with force and it will become a weapon that should not be recconed with. Use the baton to whack the enemy with all of your force! Guarunteed to leave your enemy on the floor!',
            cost: '$14.99'
        },
        {
            id: 'brassKnuckles',
            name: 'Brass Knuckles',
            image: 'images/brass-knuckles.jpg',
            description: 'These brass knuckles slip right over your four fingers (excluding thumb) for a five finger death punch that will have your enemy begging you to stop. That is MY purse! You will yell.',
            cost: '$29.99'
        },
        {
            id: 'hairKnife',
            name: 'Hair Knife',
            image: 'images/knife-hair-stick.jpg',
            description: 'This hidden hair knife is for those of you who are seeking to be covert. They are best used from a distance, if you see a man approaching and he looks sleazy, do NOT be afraid to go for it!',
            cost: '$9.99'
        },
        {
            id: 'lipstickGun',
            name: 'Lipstick Gun',
            image: 'images/lipstick-gun.jpg',
            description: 'This lipstick gun is also for the covert, but it can be used from short range. The calliber is small, but the bullet hole does just as much damage as a larger bullet. Simply take the gun out of your purse and pretend to apply, when your attacker makes his move simply aim and fire!',
            cost: '$79.99'
        },
        {
            id: 'mace',
            name: 'Mace',
            image: 'images/mace.jpg',
            description: 'This mace is not for the faint of heart. The very opposite of covert, this item not only will help you win a fight but will ward off any likelihood of an attack in the first place. I know I would not try to attack anyone I saw walking around with this mace!',
            cost: '$99.99'
        },
        {
            id: 'ninjaStars',
            name: 'Ninja Stars',
            image: 'images/ninja-stars.jpg',
            description: 'These 3-pack ninja stars can be safely hidden in your purse but do require some accuracy. It is best to practice thoroughly before use. When you are ready for action, simply aim and throw!',
            cost: '$24.99'
        },
        {
            id: 'nunchaku',
            name: 'Nunchaku',
            image: 'images/nunchaku.jpg',
            description: 'Nunchaku are not for the faint of heart. They are for anime fans ONLY!!! These will require that you watch A LOT of anime to learn how to use. When you do, simply pull them out, yell loudly, and go to town on your attacker.',
            cost: '$49.99'
        },
        {
            id: 'shotgun',
            name: 'Shotgun',
            image: 'images/shotgun.jpg',
            description: 'The shotgun is for everyone to use, although it should be noted that the kickback will be strong for any woman under 5 ft 6. Simply load your weapon, aim, and fire!',
            cost: '$499.99'
        }
    ];

    const productContainer = document.querySelector('#productContainer');

    products.forEach((product, idx) => {
        console.log('iterating on index:', idx, product);
        const card = document.createElement('div');
        card.classList.add('card', 'product-card');
        const cardContent = `
            <img src="${product.image}" class="card-img-top" alt="${product.name}">
            <div class="card-body product-card-body">
                <div class="row product-card-title">
                    <span class="col-sm-8 card-title product-card-name">${product.name}</span>
                    <span class="col-sm-4 card-title product-card-cost">${product.cost}</span>
                </div>
                <p class="card-text product-card-desc">${product.description}</p>
                <a id="addToCart" class="btn btn-primary product-card-button">Add to Cart</a>
            </div>
        `;
        card.innerHTML = cardContent;
        const button = card.querySelector('#addToCart')
        button.addEventListener('click', (e) => {
            console.log(product.name)
            const productModal = document.querySelector('#productModal')
            productModal.querySelector('.modal-title').innerHTML = 'Product Detail'
            const modalBody = `

                <div class="media">
                    <img src="${product.image}" class="mr-3 product-detail-image" alt="${product.name}">
                    <div class="media-body product-detail-body">
                        <div class="row product-card-title">
                            <span class="col-sm-8 card-title product-card-name">${product.name}</span>
                            <span class="col-sm-4 card-title product-card-cost">${product.cost}</span>
                        </div>
                        <p>${product.description}</p>
                    </div>
                </div>

            `
            productModal.querySelector('.modal-body').innerHTML = modalBody
            $('#productModal').modal('show')
        });
        productContainer.append(card);
    });
})
