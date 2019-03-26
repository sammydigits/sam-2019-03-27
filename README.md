# Sam - 2019-03-27

This is a proof of concept application demonstrating the use of a decoupled Drupal backend, with Gatsby static site generation and Netlify hosting. When content is created or updated in Drupal, a Netlify build hook is triggered and Gatsby is regenerated.

<p><img src="https://sam-2019-03-27-cms.sam-thompson.info/architecture.png"></p>

## Installation

// All the instructions to run the application

## Security

// List security concerns:

// - that have been addressed

- Responses from Drupal JSON API contain sensitive information, I have limited the responses to only those containing the content required to display the website.

// - that have _not_ been addressed

## Improvements

// What could be added to the app / API?

- Use the Gatsby image plugin and GraphQL to pull/download the images from Drupal and optimize them. More time needed to get this working. For now, images are referenced directly from Drupal.

- Gatsby doesn’t support ALT tags for images pulled from the Drupal JSON API, yet: https://github.com/gatsbyjs/gatsby/issues/10339 - so ALT tags are hardcoded to use the page title, for now.

- Multilanguage support between drupal JSON API and Gatsby doesnt work, yet: https://github.com/gatsbyjs/gatsby/issues/10020

- Unable to get list of menu items from Drupal JSON API using GraphQL, workaround used.

## Libraries

// What external libraries have you used and why?

---

## Other notes

// Anything else you want to mention
