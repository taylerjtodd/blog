var MODEL = (function () {

    let pages = [];

    function init() {
        
        pages.push(
            {
                category: 'Supreme Court',
                title: 'Packing the Court',
                hidden: true,
                paragraphs: [
                    'So the Supreme Court was brought up in the recent debates, and specifically there was this question about "Packing the Court". I suspect this is a topic that many people don\'t actually know a whole lot about and I wanted to share some thoughts. What does it mean? Why is being brought up? Is it bad?',
                    'First, we should talk a little background. The Supreme Court is one of the three co-equal branches of the US government. We are taught about how the branches of our government have checks and balances built in to prevent any group from corrupting our democracy. Presidents get to veto laws, Congress can still pass that law with enough support. Congress can impeach the president. The Supreme Court can strike down laws deemed unconstitutional and Congress can overturn that by altering the Constitution with enough support. The President can check the Court by appointing judges, which have to be confirmed by the Senate. Some checks and balances are easy. The President can make executive actions, but Congress can choose not to fund them, for example. But it turns out revising the Constitution and impeachment are hard to do, especially in such a polarized political environment. It takes two-thirds of both houses of Congress and three-fourths of the states to pull it off.',
                    'This makes an opening for corruption. If you can get a majority of partisan judges on the Court, they will have enough power to strike down laws and shape policy with lifetime appointments. As long as their decisions aren\'t egregious enough to turn a two-thirds majority against them, they can do whatever they want. That isn\'t to say that there haven\'t been impeached judges and there certainly have been Constitutional ammendments but it is hard to imagine a two-thirds consensus on anything in our hyper-polarized era. So, if someone were to set out to do it, how would politicizing the Court work?',
                    'Well, you would need a President and a Senate to both want it to do. That seems like a low risk sort of thing, right? Those 2 bodies are elected democratically, so in theory, Supreme Court appointments are the will of the people. Except, well, it isn\'t. In the last two years of the Obama Presidency, the Senate had a 54-46 Republican majority. However, in the 2010, 2012 and 2014 elections - the ones that were responsible for electing all the Senators at the time - went 49%-46.6% in favor of Democrats. The populations of states with 2 Senators from the same party were 123.7 million for Democrats to 102.4 million for Republicans. That Senate, representing a minority of Americans, only confirmed 20 district and circuit judges and famously blocked Merrick Garland\'s nomination. It was even worse after Trump was elected. The Senators that confirmed Kavanaugh represented only 44% of Americans. A majority of Americans opposed putting Kavanaugh on the Court. Not to mention the fact that it was a President that lost the popular vote by almost 3 million votes who did the appointing. Trump and the GOP Senate have now confirmed in 4 years nearly as many justices and circuit judges as Obama did in his two terms and outpace Obama with 163 to 136 district judges per term and Trump is not finished with his first term so those numbers are likely to go up a little more, most notably by another Supreme Court pick. This is what Senator Harris was alluding to when she said the GOP was currently packing the courts.',
                    'Ok, so what did Pence mean when he implied that Bidden and Harris want to pack the courts? There has been talk that if Amy Coney Barrett is confirmed instead of letting the seat sit vacant until we know who will win the election, like what the GOP said is how it should work for Merrick Garland, that the courts would be so skewed to the right that in order to pass any meaningful legislation and to prevent the dismantaling of laws that are supported by a majority of Americans, they would be forced to add 2 more seats to the Supreme Court to bring the balance back to 6-5, still in favor of conservative judges. Generally this talk also comes with suggestions that we need to make appointments to the Supreme Court happen by non-partisan organizations. Bidden and Harris have both dodged this question because in reality, they won\'t know what position they need to take until they find out if Barrett is confirmed.',
                    'Ok, but this is just politics and it has always been like this, right? Sort of. Up until 2013, it was required to get a 60 person vote to close discussion and bring on a vote. After that it would require a simple majority to confirm. Democrats had control of the Senate then but were brickwalled trying to get any appointments through the Senate because Republicans would fillibuster all of the appointments. There is a maximum amount of time that discussion could happen, but at the rate that Republicans allowed confirmations to go through, the Obama administration was plagued by vacancies. Eventually Senate Democrats finally gave in and used the "Nuclear Option". What they did was make it so that it only required a simple majority to call for a vote on executive branch appointments and federal judge appointments. They did not touch the Supreme Court though meaning that you could still fillibuster Supreme Court appointments. Hindsight is 20/20. What that decision did was open up the courts to be stolen by the Republican party. Since it is so much easier for Republicans to win the Senate and White House (more on electoral college and senate reform another day) it should have been obvious how bad of an idea this was. After the 2016 election, in response to the Republican party refusing to take up the confirmation of Merrick Garland, the Democrats filibustered the vote for Neil Gorsuch. The Republicans responded by removing the filibuster for Supreme Court nominations too.',
                    'So, "What legislation is in jeopardy?" you might ask. I think it might be better to ask what isn\'t at risk. Here are a list of issues that a majority of Americans support but would be unlikely to make it through a 6-3 conservative court: gun control, woman\'s right to choose, climate action, making healthcare less expensive and higher quality, allowing people to choose to use Medicare instead of having healthcare coverage tied to employment.',
                ],
                date: '10/08/2020',
                links: [
                    ''
                ]
            });

        pages.push({
            category: 'Economy', title: 'Trickle Down Economics', paragraphs: [
                'Trickle down economics is a lie',
                "I'll fill this in later"
            ]
        });

        pages.push({
            category: 'Economy', title: 'Universal Basic Income', hash: 'ubi', paragraphs: [
                'This will be filled in soon'
            ]
        });

        pages.push({
            category: 'Foreign Policy', title: 'Trumps conflicts of interest', hidden: true, paragraphs: [
                'Trickle down economics is a lie',
                "I'll fill this in later"
            ]
        });

        setHashes();
    }

    function setHashes() {
        pages.forEach((page) => {
            if (!page.hash) {
                page.hash = page.title.toLowerCase().replaceAll(' ', '-');
            }
        })
    }

    return {
        init: init,
        pages: () => { return pages; },
    }
})();
