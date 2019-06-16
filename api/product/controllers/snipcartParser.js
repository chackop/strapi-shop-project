/**
 * Retrieves all the products with fields valid with Snipcart's JSON crawler.
 *
 * @return {Object}
 */

snipcartParser: async (ctx) => {
    let products = await strapi.services.product.fetchAll(ctx.query);
    return products.map(product => {
        return {
        id: product._id,
        price: product.price,
        url: "https://snipcart-strapi.herokuapp.com/snipcartParser"
        }
    })
}