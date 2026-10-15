import{test, expect} from '@playwright/test'

test('Event hub testing', async({page})=>
{
    //login steps
    const BaseURL = 'https://eventhub.rahulshettyacademy.com/login';
    const userName = page.getByPlaceholder('you@email.com');
    const userPassword = page.getByLabel('Password');
    const loginButton = page.locator('#login-btn');

    async function loginPage(page) {
    await page.goto(BaseURL);
    await userName.fill("kraveena228@gmail.com");
    await userPassword.fill("Raveena@2026");
    await loginButton.click();
    expect(await page.getByRole('link', { name: 'Browse Events →' })).toBeVisible();
    }
    

    //Create a event
    await page.goto(`${BASE_URL}/admin/events`);
    const eventTitle = "TestEvent${Date.now()}";
    const eventTitle = await page.locator('#event-title-input');
    const eventdescription = page.locator("//textarea[placeholder='Describe the event…']");
    const city = page.getByRole('textbox', { name: 'City*' });
    const venue = page.getByRole('textbox', { name: 'Venue*' });
    const price = page.getByRole('spinbutton', { name: 'Price ($)*' });
    const totalseats = page.getByRole('spinbutton', { name: 'Total Seats*' });
    await eventTitle.click()
    await eventTitle.fill(eventTitle);
    await eventdescription.click();
    await eventdescription.fill('event for assessment');
    await page.getByLabel('Category*').selectOption('Workshop');
    await city.click();
    await city.fill('Bangalore');
    await venue.click();
    await venue.fill('leela palace');
    await page.getByRole('textbox', { name: 'Event Date & Time*' }).fill('2026-08-04T15:49');
    await price.click();
    await price.fill('99.99');
    await totalseats.click();
    await totalseats.fill('49');
    await page.getByTestId('add-event-btn').click(); 
    await expect(page.getByText('Event created!')).toBeVisible();
    console.log(`Created event: "${eventTitle}"`);

  //Step 3: Go to Events page and find the newly created card 
  await page.goto(`${BASE_URL}/events`);
  const eventCards = page.getByTestId('event-card');
  await expect(eventCards.first()).toBeVisible();
  const targetCard = eventCards.filter({ hasText: eventTitle }).first();
  await expect(targetCard).toBeVisible({ timeout: 5000 });
  const seatsBeforeBooking = parseInt(await targetCard.getByText('seat').first().innerText());
  console.log(`Seats before booking: ${seatsBeforeBooking}`);
  await targetCard.getByTestId('book-now-btn').click();

  //step 4: Fill the booking form 
  const ticketCount = page.locator('#ticket-count');
  await expect(ticketCount).toHaveText('1');
  await page.getByLabel('Full Name').fill('Raveena');
  await page.locator('#customer-email').fill('kraveena228@gmail.com');
  await page.getByPlaceholder('+91 98765 43210').fill('8792348440');
  await page.locator('.confirm-booking-btn').click();

  //  Step 5: Verify booking confirmation 

  const bookingRefEl = page.locator('.booking-ref').first();
  await expect(bookingRefEl).toBeVisible();
  const bookingRef = (await bookingRefEl.innerText()).trim();
  expect(bookingRef.charAt(0)).toBe(eventTitle.trim().charAt(0).toUpperCase());
  console.log(`Booking confirmed. Ref: ${bookingRef}`);

  //Step 6: Verify booking appears in My Bookings 
  await page.getByRole('link', { name: 'View My Bookings' }).click();
  await expect(page).toHaveURL(`${BASE_URL}/bookings`);
  const bookingCards = page.locator('#booking-card');
  await expect(bookingCards.first()).toBeVisible();
  const matchingCard = bookingCards.filter({ has: page.locator('.booking-ref', { hasText: bookingRef }) });
  await expect(matchingCard).toBeVisible();
  await expect(matchingCard).toContainText(eventTitle);
  console.log(`Booking card found in My Bookings for ref: ${bookingRef}`);

  // Step 7: Verify seat count reduced on Events page 
  await page.goto(`${BASE_URL}/events`);
  await expect(eventCards.first()).toBeVisible();

  // Find the same event by title
  const updatedCard = eventCards.filter({ hasText: eventTitle }).first();
  await expect(updatedCard).toBeVisible();
  const seatsAfterBooking = parseInt(await updatedCard.getByText('seat').first().innerText());
  console.log(`Seats after booking: ${seatsAfterBooking}`);
  expect(seatsAfterBooking).toBe(seatsBeforeBooking - 1);

  const emailmessage = page.getByRole('button', {name: "email 1"});
  const dialog = page.getByText("dialog is opened");
  await expect(emailmessage.or(dialog).first()).toBeVisible();
  if(await dialog.isVisible)
  {
    await page.getByRole('button', {name: 'dismiss'}).click();
  }

  await page.locator('//input[type: "File"]').setInputFiles("sdfsdf")


}
);

