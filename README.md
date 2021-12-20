### WELCOME to my DCI top 10!

I created this because i love DCI, and i used to march... And marching band IS A SPORT! 

#### TO install!
-- Fork and Clone repository
-- cd into repo-dazingpluto-dci
-- run npm install
-- run npm start



### Here see an example of my code, while creating data in an array to put on an page.

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

Three arrays of objects are stored under variables, all with key value pairs..

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

Then MAP the array and use the function along with the snippet of code you want to change.. mapping through the code as an array and utilizing the key value pairs you have set.








