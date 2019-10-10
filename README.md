## CSS UI Component

Created with HTML5, CSS (Sass, Flexbox). Static site built with Gatsby JS.

Created by Kenold Beauplan - [@kenoldb](https://twitter.com/kenoldb).

See all Sass files in `/src/styles/`

#### Basic Stacked Card
```html
<div class="card">
    <div class="card__image">
        <a href="...">
            <img src="..." alt="" />
        </a>
    </div>
    <div class="card__content">
        <div class="card__topic">Topic</div>
        <header class="card__header">
            <h4 class="card__title">
                <a href="...">Card Title</a>
            </h4>
        </header>
    </div>
    <div class="card__footer">
        <div class="card__author">Jane Doe</div>
        <div class="card__date">5 hours ago</div>
    </div>
</div>
```
#### Overlapped Card
Overlapped card uses the same structure as Basic Stacked Card, just add the `card--overlap` modifier to the parent class.
Ex: `<div class="card card--overlap">...</div>`

#### Social Card (using FontAwesome icons)
```html
<div class="card card--social">
    <header class="card__header user">
        <div class="user__avatar">  
          <img src="..." />
        </div>
        <div class="username-date">
            <div clas="user__name">
                Jane Doe
            </div>
            <div class="card__date">Yesterday at 12:31 PM</div>
        </div>
        <div class="more-link"><i class="fas fa-ellipsis-v"></i></div>
    </header>
    <div class="card__content">
        <div class="card__text">Lorem..</div>
        <div class="card__image">
            <img src="..." />            
        </div>
    </div>
    <footer class="card__footer action">
        <div class="action__like">
            <span class="icon"><i class="fas fa-thumbs-up"></i></span>
            <span class="count">3.7K</span>
        </div>
        <div class="action__comment">
            <span class="icon"><i class="far fa-comment-alt"></i></span>
            <span class="count">178</span>
        </div>
    </footer>
</div>
```

#### Badge Card
```html
<div class="card card--badge">
    <div class="card__image">
        <img src="..." />
        <div class="card__topic">Topic</div>
    </div>
    <div class="card__content">
        <header class="card__header">
            <h4 class="card__title">Card Title</h4>
        </header>
        <footer class="card__footer">
            <div class="card__date">
                Oct. 10, 2019
            </div>
        </footer>
    </div>
</div>
```

#### Floating Icon Card
Floating Icon Card uses the same structure as the Badge Stacked Card, add the `card--float` modifier to the parent class.
Ex: `<div class="card card--float">...</div>`

#### Card Minimal
```html
<div class="card card--minimal">
    <div class="card__content">
        <div class="card__topic">Topic</div>
        <header class="card__header">
            <h4 class="card__title">
                <span>Card title</span>
            </h4>
        </header>
    </div>
</div>
```

#### Card Minimal Themed
```html
<div class="card card--minimal--themed green no-gap">
    <div class="card__content">
        <div class="card__topic">Topic</div>
        <header class="card__header">
            <h4 class="card__title">Short Title</h4>
        </header>
        <p class="card__text">Text</p>
        <footer class="card__footer">
        <span>CTA</span>
            <span>&gt;</span>
        </footer>
    </div>
</div>
```

### Card Horizontal (uses FontAwesome for comment icon)
```html
<div class="card card--horizontal">
	<div class="card__image">
		<img src="..." />
	</div>
	<div class="card__content">
		<div class="card__topic">Topic</div>
		<header class="card__header">
			<h2 class="card__title">Title</h2>
		</header>
		<p class="card__text">Lorem...</p>
		<div class="card__footer">
			<div class="card__meta-author">by John Smith</div>
			<div class="card__meta-comment">
				<i class="fas fa-comment"></i>
				<span class="card__meta-comment-count">57</span>
			</div>
		</div>
	</div>
</div>
```
### Card Horizontal Video (uses FontAwesome for play icon)
```html
<div class="card card--horizontal card--horizontal--video">
	<div class="card__image">
		<img src="..." />
		<div class="btn btn--circle">
			<div class="card__icon">
				<i class="fas fa-play"></i>
			</div>
		</div>
	</div>
	<div class="card__content">
		<div class="card__topic">Topic</div>
		<header class="card__header">
			<h2 class="card__title">Title</h2>
		</header>
		<p class="card__text">Lorem...</p>
	</div>
</div>
```
### Music Player Card (uses fontAwesome icons: step backward, forward and play)
```html
<div class="card card--music">
	<div class="card__image">
		<img src="..." />
	</div>
	<div class="card__content">
		<header class="card__header">
			<h2 class="card__title">Title</h2>
		</header>
		<p class="card__subtitle">Artist</p>
		<ul class="controls__list">
			<li class="control__item"><i class="fas fa-step-backward"></i></li>
			<li class="control__item"><i class="fas fa-play"></i></li>
			<li class="control__item"><i class="fas fa-step-forward"></i></li>
		</ul>
	</div>
</div>
```

#### Overlay 'Movie' Card (uses fontAwesome icons: play, heart and horizontal ellipsis)
```html
<div class="card card--overlay">
	<div class="card__image">
		<img src="..." />		
	</div>
	<div class="darken"></div>	
	<div class="card__notification">Now Streaming</div>	
	<div class="card__content">
		<div class="separator"></div>
		<h4 class="card__title">Title</h4>
		<p class="card__text">Lorem...</p>
		<div class="card__actions">			
			<div class="btn btn--primary">
				<span class="icon"><i class="fas fa-play"></span>
				<span class="btn__text">Play</span>
			</div>					
			<div class="btn btn--secondary">
				<span class="icon"><i class="fas fa-heart"></span>
				<span class="btn__text">Favorite</span>
			</div>
			<div class="btn btn--ellipsis">
				<span class="icon"><i class="fas fa-ellipsis-h"></i></span>
			</div>			
		</div>
	</div>
</div>
```
#### Overlay 'Dating' Card (uses fontAwesome icons: times and heart)
```html
<div class="card card--overlay card--overlay--dating">
	<div class="card__image">
		<img src="..." />
	</div>
	<div class="darken"></div>
	<div class="card__content">
		<div class="card__title model">
			<span class="model__name">Name, </span>
			<span class="model__age">Age</span>			
		</div>
		<div class="card__text">Lorem...</div>
		<div class="card__actions swipe">
			<div class="swipe__left"><i class="fas fa-times"></div>
			<div class="swipe__right"><i class="fas fa-heart"></div>
		</div>
	</div>
</div>
```
#### E-Commerce Card (fontAwesome icons: heart, stars)
```html
<div class="card card--overlay-icon">
	<div class="card__image">
		<img src="..." />
		<div class="card__icon">
			<i class="fas fa-heart">
		</div>
	</div>
	<div class="card__content">
		<div class="card__topic">Category</div>
		<header class="class__header">
			<h5 class="card__title">Title</h5>
		</header>
		<footer class="card__footer">
			<div class="price">
				<span class="price__original strike">$83.81</span>
				<span class="price__sale">$71.24</span>
			</div>
			<div class="rating">
				<i class="fas fa-star"></i>
			</div>
		</footer>
	</div>
</div>
```
#### Video Card
````html
<divclass="card card--video">
	<div class="card__image">		
		<img src="..." />
		<div class="card__icon">
			<i class="fas fa-play-circle"></i>
		</div>
	</div>
	<div class="card__content">
		<h4 class="card__title">Title</h4>
	</div>
</div>
```
