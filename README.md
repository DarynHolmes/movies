# Movies

This was written in Vue. It makes use of the following technologies:

- Tanstack Vue Query - state management, client side caching, network retries
- Tailwind CSS - utility based CSS
- Vue test-utils - component testing (a few examples were added)
- Playwright - e2e test (an example was added)

## Live demo

The live demo can be seen [here](https://movies-online.pockethost.io/).

Playwright test report can be viewed [here](https://movies-online.pockethost.io/playwright-report/).

## Notes

Benefits of Tanstack Vue Query

- If a request fails, Vue query will retry the request for a period before an error is shown to the user
- Results are cached which makes the data load faster when the same request made e.g. using the same search term

Benefits of Tailwind CSS

- Speeds up development
- Good responsive utilities - this can be seen in the demo

UX considerations

- The API request is debounced, which means the search will only occur after the user stops typing
- The page is responsive and works on modern mobiles
- To avoid content flashes, the current set of movies is kept until they can be replaced. They are grayed out to show work is being done. Skeletons could be used for this as well.

Tests

- This was done as a nice to have, they would be more thorough in a real project
- PaginationControls.spec.ts is a decent example of useful UI tests

No UI component library was used for this demo, however they can be useful in large projects.

Pockethost was used to host the demo because I have an active account with that provider.

## Error handling

There is error handling with requests that retry and there is an error message if the retries fail. When this happens a message is shown and user is given the option to retry.

## Further steps

If I had to continue with this project I would make some UI improvements. For instance, I would place the pagination at the bottom. I would make this and the search field sticky, so they are always visible, even when scrolling.

The pagination would need to improved and infinite scroll should be considered.

I would assume there would be new feature requests, such as viewing additional details of a movie.
