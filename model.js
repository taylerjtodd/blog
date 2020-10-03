var MODEL = (function () {

    let pages = [];

    function init() {
        pages.push({category:'Economy', title: 'Trickle Down Economics', paragraphs: [
            'Trickle down economics is a lie',
            "I'll fill this in later"
        ]});

        pages.push({category:'Economy', title: 'Universal Basic Income', hash: 'ubi', paragraphs: [
            'This will be filled in soon'
        ]});
        
        pages.push({category:'Foreign Policy', title: 'Placeholder', paragraphs: [
            'This is just for testing'
        ]});
        
        pages.push({category:'Foreign Policy', title: 'Trumps conflicts of interest', hidden:true, paragraphs: [
            'Trickle down economics is a lie',
            "I'll fill this in later"
        ]});

        setHashes();
    }

    function setHashes() {
        pages.forEach((page) => {
            if(!page.hash) {
                page.hash = page.title.toLowerCase().replaceAll(' ', '-');
            }
        })
    }

    return {
        init: init,
        pages: () => { return pages; },
    }
})();
