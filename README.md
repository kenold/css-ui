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
        <div class="card__topic">Blog</div>
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
For overlapped card, add `card--overlap` to parent class.
Ex: `<div class="card card--overlap">...</div>`

#### Social Card (using FontAwesome icons)
```html
<div className="card card--social">
    <header className="card__header user">
        <div className="user__avatar">  
          <img src="..." />
        </div>
        <div className="username-date">
            <div className="user__name">
                Jane Doe
            </div>
            <div className="card__date">Yesterday at 12:31 PM</div>
        </div>
        <div className="more-link"><i class="fas fa-ellipsis-v"></i></div>
    </header>
    <div className="card__content">
        <div className="card__text">Lorem..</div>
        <div className="card__image">
            <img src="..." />            
        </div>
    </div>
    <footer className="card__footer action">
        <div className="action__like">
            <span className="icon"><i class="fas fa-thumbs-up"></i></span>
            <span className="count">3.7K</span>
        </div>
        <div className="action__comment">
            <span className="icon"><i class="far fa-comment-alt"></i></span>
            <span className="count">178</span>
        </div>
    </footer>
</div>
```

#### Badge Card
```html
<div className="card card--badge">
    <div className="card__image">
        <img src="..." />
        <div className="card__topic">Blog</div>
    </div>
    <div className="card__content">
        <header className="card__header">
            <h4 className="card__title">Card Title</h4>
        </header>
        <footer className="card__footer">
            <div className="card__date">
                Oct. 10, 2019
            </div>
        </footer>
    </div>
</div>
```

