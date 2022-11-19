window.addEventListener('DOMcontentLoaded', navigator, false);
window.addEventListener('hashchange', navigator, false);

function navigator() {
    console.log({ location });

    if (location.hash.startsWith('#trends')) {
        trendsPage();
    } else if (location.hash.startsWith('#search=')) {
        searchPage();
    } else if (location.hash.startsWith('#movie=')) {
        movieDetailPage();
    } else if (location.hash.startsWith('#category=')) {
        categoryPage();
    } else {
        homePage();
    }

}

function homePage() {
    console.log('Home');
}

function categoryPage() {
    console.log('CATEGORY!!');
}

function movieDetailPage() {
    console.log('MOVIE!!');
}

function searchPage() {
    console.log('SEARCH!!');
}

function trendsPage() {
    console.log('TRENDS!!');
}
