var MODEL = (function () {

    let pages = [];

    function init() {
        
        pages.push(
            {
                category: 'COVID',
                title: 'Vaccine Hesitancy',
                paragraphs: [
                    'This post is for people who are, or are about to be, eligible for the COVID vaccine but have said they don\'t plan on getting it. I wrote it because I traditionally would have tried to make these points verbally at family gatherings, but you know global pandemic and stuff. Whether I shared this with you or someone else has, it is because we care about your wellbeing and it has never been more urgent to take a vaccine (well polio and smallpox maybe).',
                    '<h2>Claims made by anti-vaxers</h2> There are a lot of false claims out there. I\'m starting with the big ones but feel free to send me other claims to include here',
                    '<h3>Autism</h3> This is the OG claim. In 1997 a doctor named Andrew Wakefield published a paper in a medical journal stating that the MMR vaccine caused autism in children. However, the paper has been discredited because of major flaws in the study, manipulation of data and financial conflicts of interest. Wakefield lost his medical license and the journal retracted the paper. Further more, there have been numerous studies since looking for a link between the vaccine and autism and there just isn\'t one. Autism is still a bit of a mystery but there is evidence that it starts in utero which of course is before infants recieve any vaccines.',
                    '<h3>The medical establishment hides the risks so they can get rich</h3> This is fairly easy to debunk after you break down how the medical industry works in the US. I\'ll break it down into the 3 main part of the industry.',
                    '<h4>Doctors and hospitals</h4> Doctors and hospitals administer the vaccines but they don\'t get to charge hardly anything for them. Insurance companies will limit the amount of money paid for the vaccines (or any services) to roughly what it actually costs the hospital. In many cases, doctors and hospitals actually lose money by providing services in this way where the one size fits all pricing paid for by the insurance company do not actually cover the costs incured by hospitals because of their specific situations. If a vaccine wasn\'t safe, doctors would call it out, because their patients are being harmed and they aren\'t getting rich off vaccines.',
                    '<h4>Health Insurance</h4> Insurance companies will benefit from you being vaccinated because you won\'t get that particular disease and so they won\'t have to pay for its treatment, but if people didn\'t get vaccinated, they would just charge higher premiums to offset that cost do it is kind of a wash at the end of the day. Government run payer models (Medicare, Medicaid) solve some of this by not being able to raise premiums and deductibles as that is controlled by Congress so that better incentivises preventative healthcare like vaccines. But, if there was fraud in terms of safety, insurers would call it out because they would be forced into paying for the conditions caused by the vaccine. There could hypothetically be a balance here though. If the average COVID diagnosis costs them $5,000 and, hypothetically, the vaccine were to cause a lesser condtion, the insurance company would save money by not blowing a whistle. But in this scenario, that lesser condition is just that, a lesser condition, and it would be shown up front as a side effect, and we would still be telling you to get the vaccine.',
                    '<h4>Big Pharma</h4> Big pharma makes money by selling drugs and this does include vaccines. However, consider these two options: <ul><li>drug A will treat a disease and can be sold for a profit for the next 20 years until the patent sunsets</li><li>drug B will prevent that disease so people only need a couple doses of it and then they don\'t need to take drug A</li></ul> Pharma companies, if driven by profit alone, would not even try to create vaccines. This is why government funding plays a major role in medical research. The contracts that were signed for the COVID vaccine boiled down to "The US government is willing to buy 100 million doses for $2 billion", or whatever. So now the pharma company knows that they can invest a bunch of money into the vaccine without having to take on the risk of another company beating them to the punch or creating one that is cheaper. Big pharma might try to hide safety concerns, but that is why the FDA exists - to review their research and ensure that things are safe and effective before the drug can be given to patients.',
                    '<h4>FDA</h4> People with medical degrees don\'t sign up to work for an oversight organization instead of the pharma companies to get rich. People like Dr. Fauci do these jobs out of a desire to help people.',
                    '<h3>Gevernment is using microchips implanted in the vaccine to track you</h3> You carry a phone in your pocket for that. But in all seriousness, keep in mind that the vaccine isn\'t a vaccine. It is several different vaccines made by several different companies all over the world. The scale of a cover up this big would not be something you could hide from not only the American people, but virtually every government in the world. Also, from a technology standpoint, it is possible to embed RFID chips in the human body, but they are hundreds of times larger than what would fit in an injection. And that is a passive technology meaning they are only useful when the chip is within inches of an RFID reader. Otherwise you need batteries or some other power source. And yes, there are ways to capture body heat for power, but these technologies aren\'t mature enough, otherwise you wouldn\'t have to charge your Fitbit/Apple Watch/Hearing Aids etc.',
                    '<h2>Why does the Anti-Vax movement exist then?</h2> Fear-mongering is profitable. It sells books, drives clicks to websites, sells supplements or other miracle cures. Joseph Mercola, as an example, has made more than $100 million by selling alternative treatments while donating millions to the anti-vax movement.',
					'<h2>COVID vaccine technologies</h2> The ingredient that people tried to claim caused autism is called thimerosal. It hasn\'t been used in vaccinating children since 2001. It is also not in the COVID vaccines. The reason that the vaccine has to be so cold, is because of the mRNA technology used. What they have done is build something that looks like part of the COVID virus. Our bodies learn to fight this harmless pseudo-virus and then if it sees the real thing, it is ready. Vaccines in the past have contained "dead virus" meaning the actual virus has been modified in a way to make it harmless and then injected. This tends to be harder to manufacture and takes longer to produce than current technologies. More information on the actual components can be found <a href="https://www.technologyreview.com/2020/12/09/1013538/what-are-the-ingredients-of-pfizers-covid-19-vaccine/" target="_blank"> here.</a>',
					'<h2>Adverse reactions</h2> From the CDC website, "As of December 23, 2020, a reported 1,893,360 first doses of Pfizer-BioNTech COVID-19 vaccine had been administered in the United States, and reports of 4,393 (0.2%) adverse events after receipt of Pfizer BioNTech COVID-19 vaccine had been submitted to the Vaccine Adverse Event Reporting System (VAERS). Among these, 175 case reports were identified for further review as possible cases of severe allergic reaction, including anaphylaxis. Anaphylaxis is a life-threatening allergic reaction that does occur rarely after vaccination, with onset typically within minutes to hours (3). Twenty-one cases were determined to be anaphylaxis (a rate of 11.1 per million doses administered), including 17 in persons with a documented history of allergies or allergic reactions, seven of whom had a history of anaphylaxis. The median interval from vaccine receipt to symptom onset was 13 minutes (range = 2–150 minutes). Among 20 persons with follow-up information available, all had recovered or been discharged home. Of the remaining case reports that were determined not to be anaphylaxis, 86 were judged to be nonanaphylaxis allergic reactions, and 61 were considered nonallergic adverse events. Seven case reports were still under investigation."',
					'The important takeaway here is that the rate of severe reaction is roughly 1/100,000 for the vaccine, compared to 1/20 becoming critically ill from COVID. Additionally, the death rate is 0.0000002% (if you assume 2% mortality for anaphylaxis) compared to 1.6% for COVID. The reactions that most people will experience are cold-like symptoms that are resultant from your bodies natural immune response, which is kind of the goal.',
                    '<h2>Herd immunity</h2> At this point, we are all desparate to return to "normal". That will happen when enough people are immune by recovering from the virus or getting the vaccine to bring case counts down. In general, this happens somewhere between 50% and 90% of people. The wide range is due to how transmissible a virus is. For COVID, the number that I am seeing is 70% as the best guess. The death rate in the US is still over 1% and even more people have long term symptoms. Without a vaccine we would need 200,000,000 more Americans to be infected, meaning 2,000,000 more deaths and maybe 10,000,000 who have long term issues including cognative impairment, loss of taste/smell, breathing difficulty and increased risk of heart attack.',
                    'The biggest issue even with vaccinations happening will quickly become pockets of susceptibility that allow the virus to survive and possibly mutate. So far the mutations that are popping up aren\'t known to reduce the efficacy of the vaccines but that might not always be true. The flu virus changes enough to warrant ongoing vaccine development. The most glaring population that won\'t be vaccinated until likely late 2021 is children. This is because the testing and clinical trial process is considerably more cautious with children and we won\'t have approval until then.',
					'<h2>Return to normal</h2> We want to visit you. We want you to be safe. That happens in a couple months if you get the vaccine or in a year when everyone else has. Please don\'t make us wait.'
                ],
                date: '01/17/2021'
            });

        pages.push({
            category: 'Economy', title: 'Trickle Down Economics', hidden: true, paragraphs: [
                'Trickle down economics is a lie',
                "I'll fill this in later"
            ]
        });

        pages.push({
            category: 'Economy', title: 'Universal Basic Income', hash: 'ubi', hidden: true, paragraphs: [
                'This will be filled in soon'
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
