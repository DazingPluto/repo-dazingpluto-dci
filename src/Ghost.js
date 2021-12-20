import React, { Component } from 'react';
import steven from '/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/labs/append-tennis-child/src/Screen Shot 2021-12-20 at 11.23.35 AM.png';
import './Ghost-Blog.css';
import openClass from '/Users/huntermcguire/Desktop/SEI-1025/UNIT-3/labs/append-tennis-child/src/Screen Shot 2021-12-20 at 12.58.10 PM.png';



const ghostList = [
    {
        name: 'Carolina Crown',
        Show: 'Relentless'
    },
    {
        name: 'The Bluecoats!',
        Show: 'Tilt'
    },
    {
        name: 'Madison Scouts',
        Show: 'Waistland'
    }
]
const catagoryList = [
    {
        name: 'Open Class',
        Show: 'Relentless',
        img: openClass
    },
    {
        name: 'World Class',
        Show: 'Tilt'
    }
]

const sectionList = [
    {
        link: steven,
        name: 'DCI, Top Ten Favorites',
        title: 'drum corps, international',
        txt: ''
    }
];

const displaySections = sectionList.map((section, idx) => {
    return (
        <>
            <div class="columns featured-post is-multiline">
                <div class="column is-12 post">
                    <article class="columns featured">
                        <div class="column is-7 post-img ">
                            <img src={section.link} alt=""></img>
                        </div>
                        <div class="column is-5 featured-content va">
                            <div>
                                <h3 class="heading post-category">{section.name}</h3>
                                <h1 class="title post-title">{section.title}</h1>
                                <p class="post-excerpt">{section.txt}</p>
                                <br></br>
                                <a href="#" class="button is-primary">Read More</a>
                            </div>

                        </div>
                    </article>
                </div>
            </div>
            <hr></hr>
        </>

    )
})

const displayCatagoryList = catagoryList.map((ghost, idx) => {
    return (
        <>
            <div class="column post is-6">
                <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                        <img src={ghost[1].img} alt="Featured Image"></img>
                    </div>
                    <div class="column is-12 featured-content ">
                        <h3 class="heading post-category">Category Name</h3>
                        <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                        <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                        <br></br>
                        <a href="#" class="button is-primary">Read More</a>
                    </div>
                </article>
            </div>
            <div class="column post is-6">
                <article class="columns is-multiline">
                    <div class="column is-12 post-img">
                        <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                    </div>
                    <div class="column is-12 featured-content ">
                        <h3 class="heading post-category">Category Name</h3>
                        <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                        <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                        <br></br>
                        <a href="#" class="button is-primary">Read More</a>
                    </div>
                </article>
            </div>
        </>
    );
})

const displayGhostList = ghostList.map((ghost, idx) => {
    return (
        <article className="post" key={idx}>
            <h4>{ghost.name}</h4>
            <div className="media">
                <div className="media-left">
                    <p className="image is-32x32">
                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="" />
                    </p>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <a href="#">{ghost.type}</a> replied 34 minutes ago &nbsp;
                            <span className="tag">Question</span>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <span className="has-text-grey-light">
                        <i className="fa fa-comments"></i> 1
                    </span>
                </div>
            </div>
        </article>
    );
})

class Ghost extends Component {
    render() {

        return (
            <div>
                <div class="hero-head">
                    <div class="container">
                        <nav class="navbar" role="navigation" aria-label="main navigation">

                            <div id="navbarBasicExample" class="navbar-menu">
                                <div class="navbar-start">
                                    <a class="navbar-item is-active">
                                        Home
                                    </a>
                                    <a class="navbar-item">
                                        Blog Posts
                                    </a>
                                </div>

                                <div class="navbar-end">
                                    <div class="navbar-item">
                                        <a href="#">
                                            <i class="fab fa-facebook"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fab fa-twitter"></i>
                                        </a>
                                        <a href="#">
                                            <i class="fas fa-rss-square"></i>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
                <div class="hero-body">
                    <div class="container has-text-centered">
                        <img src="https://cdn.emk.dev/templates/bulma-logo-light.png" width="150" height="40"></img>
                        <h2 class="subtitle">
                            Ghost's Casper theme made with Bulma
                        </h2>
                    </div>
                </div>


                <div class="container">
                    <div class="columns">
                        <div class="column is-10 is-offset-1">
                            {displaySections}
                            <div class="columns is-multiline">
                                <div class="column post is-6">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br></br>
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-6">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br></br>
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-4">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br></br>
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-4">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br></br>
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                </div>
                                <div class="column post is-4">
                                    <article class="columns is-multiline">
                                        <div class="column is-12 post-img">
                                            <img src="https://cdn.emk.dev/templates/post-img.png" alt="Featured Image"></img>
                                        </div>
                                        <div class="column is-12 featured-content ">
                                            <h3 class="heading post-category">Category Name</h3>
                                            <h1 class="title post-title">Slightly Longer Blog Post Title</h1>
                                            <p class="post-excerpt">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusamus ratione harum eaque, animi nulla tempore quis, quam voluptatum.</p>
                                            <br></br>
                                            <a href="#" class="button is-primary">Read More</a>
                                        </div>
                                    </article>
                                    {displayGhostList};
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    }
}

export default Ghost;