import { graphQLQueries, graphqlRequest } from "./graphQL";

export default async function getServicesSectionData() {
    const graphQLwrapper = `query { ${graphQLQueries.queries.sectionOurServices} }`;
    const servicesSectionData = await graphqlRequest(graphQLwrapper);
    return servicesSectionData;
}