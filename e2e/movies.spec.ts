import { test, expect } from '@playwright/test'

test('displays the title and description of a movie', async ({ page }) => {
  const items = [
    {
      id: '111',
      title: 'A bee movie',
      description: 'This is a move about a bee',
      image_url: '/bee.png',
      rating: 9,
    },
  ]
  await page.route('*/**/movies/?query=&skip=0&limit=12', async (route) => {
    const json = { total: 1, items }
    await route.fulfill({ json })
  })
  await page.goto('/')
  await expect(page.locator('h1')).toHaveText('Movies')
  await expect(page.getByText(items[0].title)).toBeVisible()
  await expect(page.getByText(items[0].description)).toBeVisible()
})
