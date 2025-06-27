const _$ = document.querySelector.bind(document);
const _$$ = document.querySelectorAll.bind(document);

const registerList = _$('#form-1');
const registerItem = _$('#register-item');
const cannelRegister = document.getElementById('cannel-register');
const cannelLog = document.getElementById('cannel-log');
const cannelCart = document.getElementById('cannel-cart');
const cannelCard = document.getElementById('cannel-card');
const overlay = document.getElementById('overlay');
const cartList = _$('#header__cart');
const cartItem = _$('#cart-item');
const loginList = _$('#form-2');
const loginItem = _$('#log-item');
const modalCard = document.getElementById('modal-card');

const showPass = document.getElementById('show-regis');
const hiddenPass = document.getElementById('hidden-regis');
const inputPass = document.getElementById('password');
const showPassConfirm = document.getElementById('show-regis-confirm');
const hiddenPassConfirm = document.getElementById('hidden-regis-confirm');
const inputPassConfirm = document.getElementById('password_confirm');
const showPassLog = document.getElementById('show-log');
const hiddenPassLog = document.getElementById('hidden-log');
const inputPassLog = document.getElementById('passwordLog');
const showPassLogConfirm = document.getElementById('show-logConfirm');
const hiddenPassLogConfirm = document.getElementById('hidden-logConfirm');
const inputPassLogConfirm = document.getElementById('password_confirmLog');

// REGISTER EVENT
registerItem.addEventListener('click', () => {
    registerList.style.display = 'block';
    overlay.style.display = 'block';
});
cannelRegister.addEventListener('click', () => {
    registerList.style.display = 'none';
    overlay.style.display = 'none';
});

//LOGIN EVENT
loginItem.addEventListener('click', () => {
    loginList.style.display = 'block';
    overlay.style.display = 'block';
});
cannelLog.addEventListener('click', () => {
    loginList.style.display = 'none';
    overlay.style.display = 'none';
});

//CART EVENT

cartItem.addEventListener('click', () => {
    cartList.style.display = 'block';
    overlay.style.display = 'block';
});
cannelCart.addEventListener('click', () => {
    cartList.style.display = 'none';
    overlay.style.display = 'none';
});

// EVENT SHOW IF CARD FOOD
// addCart.addEventListener('click', () => {
//     modalCard.style.display = 'block';
//     overlay.style.display = 'block';
// });
// cannelCard.addEventListener('click', () => {
//     modalCard.classList.remove('menu-modal');
//     overlay.style.display = 'none';
// });

// EVENT SHOW PASSWORD REGISTER
showPass.addEventListener('click', () => {
    hiddenPass.classList.remove('hidden');
    showPass.classList.add('hidden');
    inputPass.setAttribute('type', 'password');
});
hiddenPass.addEventListener('click', () => {
    showPass.classList.remove('hidden');
    hiddenPass.classList.add('hidden');
    inputPass.setAttribute('type', 'text');
});

//
showPassConfirm.addEventListener('click', () => {
    hiddenPassConfirm.classList.remove('hidden-confirm');
    showPassConfirm.classList.add('hidden-confirm');
    inputPassConfirm.setAttribute('type', 'password');
});
hiddenPassConfirm.addEventListener('click', () => {
    showPassConfirm.classList.remove('hidden-confirm');
    hiddenPassConfirm.classList.add('hidden-confirm');
    inputPassConfirm.setAttribute('type', 'text');
});

// EVENT SHOW PASSWORD LOG IN
showPassLog.addEventListener('click', () => {
    hiddenPassLog.classList.remove('hiddenLog');
    showPassLog.classList.add('hiddenLog');
    inputPassLog.setAttribute('type', 'password');
});
hiddenPassLog.addEventListener('click', () => {
    showPassLog.classList.remove('hiddenLog');
    hiddenPassLog.classList.add('hiddenLog');
    inputPassLog.setAttribute('type', 'text');
});
//
showPassLogConfirm.addEventListener('click', () => {
    hiddenPassLogConfirm.classList.remove('hiddenLogConfirm');
    showPassLogConfirm.classList.add('hiddenLogConfirm');
    inputPassLogConfirm.setAttribute('type', 'password');
});

hiddenPassLogConfirm.addEventListener('click', () => {
    showPassLogConfirm.classList.remove('hiddenLogConfirm');
    hiddenPassLogConfirm.classList.add('hiddenLogConfirm');
    inputPassLogConfirm.setAttribute('type', 'text');
});
// RENDER MENU
const foodApi = 'https://648be96e8620b8bae7ebe999.mockapi.io/product';
const addFoodsBtn = document.querySelector('.load-more');
const foodList = document.querySelector('.food-list');
let start = 6;
let end = 12;
fetch(foodApi)
    .then(function (data) {
        return data.json();
    })
    .then(function (foods) {
        for (let i = 0; i < 6; i++) {
            const node = document.createElement('div');
            node.innerHTML = `<div class="card-product" >
                <img
                    src="${foods[i].thumbnail}"
                    alt=""
                    
                    class="card-product__img"
                />
                <div class="content-if">
                    <p class="name">${foods[i].name}</p>
                    <p class="price">${foods[i].price}</p>
                </div>
                <div class="description">${foods[i].description}</div>
                <div class="card-product__add" onclick="showMenuModal('${foods[i].description}','${foods[i].thumbnail}', '${foods[i].price}'), '${foods[i].name}')">
                    <i class="bi bi-plus card-product__add-icon"></i>
                </div>
                <div class="menu-product__footer--stars">
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star"></i>
                </div>
            </div>`;
            foodList.appendChild(node);
        }
        // RENDER ADD FOOD
        addFoodsBtn.addEventListener('click', () => {
            if (start >= end) {
                alert('Full food');
                addFoodsBtn.style.cursor = 'default';
                addFoodsBtn.style.transition = ' ';
                addFoodsBtn.style.color = 'LightGrey';
            }

            for (let i = start; i <= start + 2; i++) {
                const node = document.createElement('li');
                node.innerHTML = `<div class="card-product" >
                <img
                    src="${foods[i].thumbnail}"
                    alt=""
                    
                    class="card-product__img"
                />
                <div class="content-if">
                    <p class="name">${foods[i].name}</p>
                    <p class="price">${foods[i].price}</p>
                </div>
                <div class="description">${foods[i].description}</div>
                <div class="card-product__add" onclick="showMenuModal('${foods[i].description}','${foods[i].thumbnail}', '${foods[i].price}'), '${foods[i].name}')">
                    <i class="bi bi-plus card-product__add-icon"></i>
                </div>
                <div class="menu-product__footer--stars">
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star-active"></i>
                    <i class="bi bi-star-fill product__star"></i>
                </div>
            </div>`;
                foodList.appendChild(node);
            }
            start += 3;
        });
    });

//COMMENT SLIDER
const slideauthor = document.querySelector('#slideauthor');

slideauthor.innerHTML = `
        <div class="swiper-slide">
                    <div class="slideauthor">                  
                      <div class="home__testimonal--authorInfo">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/65.jpg" alt="" class="home__testimonal--avatar">
                        <p class="home__testimonal--name">Colin Brown II</p>
                        
                      </div>
                      <p class="home__testimonal--job">Communications</p>
                      <p class="home__testimonal--comment">                    
                        In dignissimos perspiciatis quis. Impedit rerum quasi doloribus beatae quisquam laudantium quo. Provident incidunt cumque libero architecto.
                      </p>
                    </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="slideauthor">
                        <div class="home__testimonal--authorInfo">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/199.jpg" alt="" class="home__testimonal--avatar">
                        <p class="home__testimonal--name">Ryan Hilpert</p>
                        
                      </div>
                      <p class="home__testimonal--job">Solutions</p>
                      <p class="home__testimonal--comment">
                      Error laborum nesciunt reprehenderit quaerat magnam vitae necessitatibus corrupti ipsa. Nisi corporis illo consequuntur ex esse sint cumque. Distinctio mollitia amet quidem praesentium labore.
                      </p>                  
                  </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="slideauthor">
                        <div class="home__testimonal--authorInfo">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/1158.jpg" alt="" class="home__testimonal--avatar">
                        <p class="home__testimonal--name">Connie Rolfson</p>
                        
                      </div>
                      <p class="home__testimonal--job">Branding</p>
                      <p class="home__testimonal--comment">
                      At cum ipsam ex et magni numquam quasi excepturi. Repellat dicta illum laboriosam. Doloremque itaque debitis quis soluta. Occaecati dolorum qui nam.
                      </p>                  
                    </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="slideauthor">
                        <div class="home__testimonal--authorInfo">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/725.jpg" alt="" class="home__testimonal--avatar">
                        <p class="home__testimonal--name">Vivian Davis</p>
                        
                      </div>
                      <p class="home__testimonal--job">Configuration</p>
                      <p class="home__testimonal--comment">
                      Aspernatur ab earum ex aspernatur magni non nam. Modi minus accusantium corporis occaecati fugit. Distinctio maxime doloremque architecto laboriosam expedita.
                      </p>                  
                    </div>
                  </div>
                  <div class="swiper-slide">
                      <div class="slideauthor">
                        <div class="home__testimonal--authorInfo">
                        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/625.jpg" alt="" class="home__testimonal--avatar">
                        <p class="home__testimonal--name">Roosevelt Zboncak III</p>
                        
                      </div>
                      <p class="home__testimonal--job">Integration</p>
                      <p class="home__testimonal--comment">
                        IntegrationVoluptate veritatis facilis laudantium qui voluptates exercitationem officia. Animi veniam voluptate atque consequatur itaque veritatis. Ipsa est iusto alias molestias laudantium ad.
                      </p>                  
                    </div>
                  </div>`;
// EVENT SHOW COMMENT
const commentCards = document.getElementsByClassName('slideauthor');
const showComment = document.getElementById('show-comment');
const hiddenComment = document.getElementById('hidden-comment');
showComment.addEventListener('click', () => {
    for (let i = 0; i < commentCards.length; i++) {
        commentCards[i].style.display = 'block';
    }
});

hiddenComment.addEventListener('click', () => {
    for (let i = 0; i < commentCards.length; i++) {
        commentCards[i].style.display = 'none';
    }
});
//SHOW IF IN THE CARD
function showMenuModal(description, img, price, name) {
    document.querySelector(
        '.modal-container'
    ).innerHTML = `<div class="menu-modal">
    <div class="menu-modal-content">
        <img
            src="${img}"
            alt=""
            class="menu-modal__img"
        />
        <p class="menu-modal__para">
            ${description}
        </p>
    </div>
    <div class="menu-modal-active" id="menu-modal-card">
        <p class="menu-modal__name">${name}</p>
        <div class="menu-modal__stars">
            <i class="bi bi-star-fill product__star-active"></i>
            <i class="bi bi-star-fill product__star-active"></i>
            <i class="bi bi-star-fill product__star-active"></i>
            <i class="bi bi-star-fill product__star-active"></i>
            <i class="bi bi-star-fill product__star"></i>
        </div>
        <p class="menu-modal__price">${price}</p>
        <div class="menu-modal-add">
            <button class="reduce">
                <i class="bi bi-dash-lg"></i>
            </button>
            <input
                type="number"
                name=""
                id=""
                value="1"
                min="1"
                max="10"
                class="quality"
            />
            <button class="increase">
                <i class="bi bi-plus-lg"></i></button
            ><br />
            <button class="menu-add-card">Adds cart</button>
            <button id="cannel-card" onclick="closeAndOpen()" >Cannel</button>
        </div>
    </div>
</div>`;
    document.querySelector('.modal-container').style.display = 'block';
}
function closeAndOpen() {
    document.querySelector('.modal-container').style.display = 'none';
}
