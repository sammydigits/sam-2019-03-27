# Sam - 2019-03-27

This is a proof of concept website for a fictional architecture company. Built in 48 hours, this application demonstrates the use of a decoupled Drupal backend, with Gatsby static site generation and Netlify hosting. When content is created or updated in Drupal, a Netlify build hook is triggered by Drupal and Gatsby is regenerated.
<br>

<p><img src="https://sam-2019-03-27-cms.sam-thompson.info/architecture.png" style="border: solid 1px lightgray;"></p>
<br>
[![Netlify Status](https://api.netlify.com/api/v1/badges/2fb09047-819d-4e37-b644-b2dd19bf4eda/deploy-status)](https://app.netlify.com/sites/sam-2019-03-27/deploys)

---

## Installation

### Gatsby

```
git clone https://github.com/sammydigits/sam-2019-03-27.git
cd sam-2019-03-27
gatsby develop
```

### Drupal

Install Drupal 8 and the following modules:

- [JSON:API](https://www.drupal.org/project/jsonapi)
- [JSON:API Extras](https://www.drupal.org/project/jsonapi_extras)
- [Webhooks](https://www.drupal.org/project/webhooks)
- [MetaTag](https://www.drupal.org/project/metatag)
- [Token](https://www.drupal.org/project/token)

Enable the modules above, and also the Core serialization module.

Modify JSON API settings, change endpoint path prefix to “API”.

Setup a build hook in Netlify, and configure the Webhooks module to call it whenever a node is created or updated.

## Security

// List security concerns:

// - that have been addressed

- Responses from Drupal JSON API contain sensitive information, I have limited the responses to only those containing the content required to display the website.

// - that have _not_ been addressed

## Improvements

// What could be added to the app / API?

- Gatsby doesn’t support ALT tags for images pulled from the Drupal JSON API, yet: https://github.com/gatsbyjs/gatsby/issues/10339
- Multilanguage support between drupal JSON API and Gatsby doesnt work, yet: https://github.com/gatsbyjs/gatsby/issues/10020

## Libraries

// What external libraries have you used and why?

- gatsby-source-drupal
- gatsby-plugin-sass

---

## Other notes

// Anything else you want to mention

The past 48 hours have been great fun! This was my first time using GraphQL and Gatsby, and I enjoyed the experience. I will be continuing to improve the application and address the issues mentioned in the improvements section above.

:relieved:
