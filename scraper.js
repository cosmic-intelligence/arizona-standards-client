const { ApifyClient } = require('apify-client');

// Initialize the ApifyClient with your Apify API token
const client = new ApifyClient({
    token: 'apify_api_ETV1NovxRgarUsGcA8Ofq3E1LAo4Ni3dMlMh',
});

async function crawlPage(url) {
    console.log(`Starting crawlPage with URL: ${url}`);
    
    // Prepare Actor input
    const input = {
        startUrls: [{ url }],
        crawlerType: 'playwright:adaptive',
        includeUrlGlobs: [],
        excludeUrlGlobs: [],
        initialCookies: [],
        proxyConfiguration: {
            useApifyProxy: true,
        },
        removeElementsCssSelector: `nav, footer, script, style, noscript, svg,
            [role="alert"],
            [role="banner"],
            [role="dialog"],
            [role="alertdialog"],
            [role="region"][aria-label*="skip" i],
            [aria-modal="true"]`,
        clickElementsCssSelector: '[aria-expanded="false"]',
    };

    console.log('Actor input prepared:', JSON.stringify(input, null, 2));

    try {
        // Run the Actor and wait for it to finish
        const run = await client.actor('apify/website-content-crawler').call(input);
        console.log('Actor run completed:', run);

        // Fetch and return Actor results from the run's dataset
        const { items } = await client.dataset(run.defaultDatasetId).listItems();
        console.log('Fetched items from dataset:', items);
        return items;
    } catch (error) {
        console.error('Error during crawlPage:', error);
        throw error;
    }
}

async function formatForLLM(data) {
    console.log('Starting formatForLLM with data:', data);
    const formattedData = data.map(item => ({
        url: item.url,
        title: item.title,
        text: item.text,
        images: item.images,
    }));
    console.log('Formatted data:', formattedData);
    return formattedData;
}

async function main() {
    const url = 'https://arizona-standards-client.vercel.app/'; // Replace with your target URL
    console.log(`Starting main with URL: ${url}`);
    
    try {
        const rawData = await crawlPage(url);
        console.log('Raw data received:', rawData);

        const formattedData = await formatForLLM(rawData);
        console.log('Formatted data:', formattedData);

        console.log(JSON.stringify(formattedData, null, 2));
    } catch (error) {
        console.error('Error in main:', error);
    }
}

main().catch(console.error);