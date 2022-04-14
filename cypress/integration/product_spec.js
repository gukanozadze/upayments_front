describe('products', () => {

    it('user should create and delete product', () => {
        const randomName = 'Hoodie ' + Math.random().toString(36).substring(2, 6) + Math.random().toString(36).substring(2, 6);
        cy.viewport(1920, 1080) // Set viewport to 550px x 750px

        // User visits main page
        cy.visit('http://localhost:3000/')

        // User clicks create
        cy.findByRole('link', { name: /create \+/i }).click()

        // User writes in fields
        cy.findByRole('textbox', { name: /name/i }).clear().type(randomName)
        cy.findByRole('spinbutton', { name: /price/i }).clear().type('199')

        cy.findByRole('textbox', { name: /description/i }).clear().type('Rest and recovery are essential parts of the athletic process, so you may as well go all in. Embrace comfort every time you slide into the loose fit and soft mélange fabric of this adidas hoodie. Take that feeling of ease to the couch or out into the city.')
        cy.findByRole('textbox', { name: /avatar/i }).clear().type('https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c09fe5d6fb24e1f8db0adde0153a589_9366/Essentials_Melange_French_Terry_Hoodie_Black_HE1787_21_model.jpg')
        cy.findByRole('textbox', { name: /developer email/i }).clear().type('gukanozadze@gmail.com')
        cy.findByRole('combobox').click()

        // User submits form and should return to homepage automatically
        cy.findByRole('button', { name: /create/i }).click()

        // test search
        cy.findByRole('textbox').type(randomName)

        // Go to created product details
        cy.get(`[data-test="${randomName}"]`).click()

        // Delete product
        cy.findByRole('button', { name: /delete/i }).click()

        // Check if product got deleted
        cy.get(`[data-test="${randomName}"]`).should('not.exist');

    })
})

// https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/7c09fe5d6fb24e1f8db0adde0153a589_9366/Essentials_Melange_French_Terry_Hoodie_Black_HE1787_21_model.jpg