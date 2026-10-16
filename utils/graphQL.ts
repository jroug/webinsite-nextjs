const homePage_SLUG = "homepage";
 

const sectionOurServices_SLUG = "sectionourservices";
const sectionWhyUs_SLUG = "sectionwhyus";
 



const graphQLQueries = {

    queries : {

        ///////////////////////////////////////////// pages queries /////////////////////////////////////////////

        homePage:`homePage: page( id: "${homePage_SLUG}", idType: URI ) {
            id
            title
            content
            homepageFields{
                heroImage { sourceUrl }
                heroImageOverlay { sourceUrl }
                heroTitle
                heroSubTitle
                heroButtonText
                heroButtonUrl
            }
            componentsSectionsAllPages{
              componentsSections {
                ... on Component {
                  title
                }
              }
            }
        }`,
 

        ///////////////////////////////////////////// section queries /////////////////////////////////////////////

 
        sectionOurServices:`sectionOurServices: component( id: "${sectionOurServices_SLUG}", idType: URI ) {
            id
            title
            sectionOurServicesFields{
              smallTitleTop
              mainTitle
              box1 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
              box2 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
              box3 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
              box4 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
              box5 {
                boxIconClass
                boxTitle
                boxText
                boxLink
              }
            }
        }
        `,
        sectionWhyUs:`sectionWhyUs: component( id: "${sectionWhyUs_SLUG}", idType: URI ) {
          id
          title
          sectionWhyUsFields{
            smallTitleTop
            mainTitle
            mainSubTitle
            featuresTitle
            features
            featuresButtonText
            featuresButtonLink
            box1 {
              boxIconClass
              boxTitle
              boxText
            }
            box2 {
              boxIconClass
              boxTitle
              boxText
            }
            box3 {
              boxIconClass
              boxTitle
              boxText
            }
          }
      }
      `,
 
 
       
     
  }
};

export {
    graphQLQueries,
} 


// async generic function for getting data from WordPress GraphQL API
export async function graphqlRequest<T>(
  query: string,
  variables?: Record<string, unknown>,
): Promise<T> {

    console.log(variables);

    if (!process.env.WP_GRAPHQL_BASE_URL) {
      throw new Error("The WordPress GraphQL endpoint is not configured.");
    }
    
    const GRAPHQL_API_URL = `${process.env.WP_GRAPHQL_BASE_URL}graphql`;

    const response = await fetch(GRAPHQL_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query, variables }),
        next: { revalidate: 300 },
    });

    if (response.status === 401) {
        throw new Error("WordPress requires authentication.");
    }

    if (response.status === 403) {
        throw new Error("WordPress blocked this request.");
    }

    if (response.status === 404) {
        throw new Error("The WordPress GraphQL endpoint was not found.");
    }

    if (response.status >= 500) {
        throw new Error("WordPress has a server problem. Please try again later.");
    }

    if (!response.ok) {
        throw new Error(`WordPress request failed with status ${response.status}.`);
    }

    const { data, errors } = await response.json();

    if (errors) throw new Error(errors[0].message);

  return data;
}