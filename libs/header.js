export function header(){
    let header = document.querySelector('header')

    header.innerHTML = `<div class="container header__container">
			<div class="logo">
				<img src="/logo.svg" alt="logo" / class= "href">
			</div>

			<nav class="nav">
				<ul>
					<li><a href="#">Афиша</a></li>
					<li><a href="#">Медиа</a></li>
					<li><a href="#">Фильмы</a></li>
					<li><a href="#">Актёры</a></li>
					<li><a href="#">Новости</a></li>
					<li><a href="#">Подборки</a></li>
					<li><a href="#">Кинорейтинги</a></li>
				</ul>
			</nav>

			<div class="search_login">
				<img src="/211817_search_strong_icon.png" alt="search" />
				<button class="login_btn">Войти</button>
			</div>
		</div>`
        
	let img = document.querySelector(".href")

	img.onclick = () => {
		window.location.href = "/"
	}
}