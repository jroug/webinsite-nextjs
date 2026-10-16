
import { graphQLQueries, graphqlRequest } from "./graphQL";

export default async function getHomepageData() {
    const graphQLwrapper = `query { ${graphQLQueries.queries.homePage} }`;
    const homepageData = await graphqlRequest(graphQLwrapper);
    return homepageData;
}