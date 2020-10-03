var APPLICATION = (function () {

    function init() {
        MODEL.init();

        window.addEventListener('hashchange', function () {
            render()
        }, false);

        render();

    }

    function render() {
        let pages = MODEL.pages();

        let navRenderData = { categories: [] };
        pages.forEach((page) => {
            if(!page.hidden) {

                const categoryLabel = page.category;
                let category = navRenderData.categories.find(cat => {
                    return cat.label === categoryLabel;
                });

                if(!category) {
                    category = {label: categoryLabel, pages:[]};
                    navRenderData.categories.push(category);
                }

                category.pages.push(page);
            }
        })
        let navTemplate = $('#navTemplate').html();
        $('#nav').html(Mustache.render(navTemplate, navRenderData));


        let hash = window.location.hash;
        if (!hash) {
            hash = "#" + pages[0].hash;
        }

        let page = pages.find((page) => {
            return ('#' + page.hash) === hash;
        })

        let bodyTemplate = $('#bodyTemplate').html()
        $('#body').html(Mustache.render(bodyTemplate, page));
    }

    return {
        init: init
    };

})();