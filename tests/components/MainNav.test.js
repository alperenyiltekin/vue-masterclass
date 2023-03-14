import { 
    render, 
    screen 
}                   from "@testing-library/vue";
import userEvent    from "@testing-library/user-event";
import MainNav      from '@/components/MainNav.vue';

describe("MainNav", () => {
    const renderMainNav = () => {
        render(MainNav, {
            global: {
                stubs: {
                    FontAwesomeIcon: true,
                }
            },
        });
    }
    
    it("displays company name", () => {
        renderMainNav();
        const companyName = screen.getByText("Bobo Careers");
        expect(companyName).toBeInTheDocument();
    })

    it("display menu items for navigation", () => {
        renderMainNav();
        const expectedValue = [
            "Teams",
            "Location",
            "Life at Bobo Corp",
            "How we hire",
            "Students",
            "Jobs"
        ]

        const navigationMenuItems = screen.getAllByRole("listitem");
        const navigationMenuTexts = navigationMenuItems.map(item => item.textContent)

        expect(navigationMenuTexts).toEqual(expectedValue);
    })

    describe("when the user logged in", () => {
        it("displays user profile image", async () => {
            renderMainNav();
            
            let profile = screen.queryByRole("img", {
                name: /profile-image/i
            });
            expect(profile).not.toBeInTheDocument();

            const loginButton = screen.getByRole("button", {
                name: /Sign In/i,
            });
            await userEvent.click(loginButton);

            profile = screen.queryByRole("img", {
                name: /profile-image/i
            });
            expect(profile).toBeInTheDocument();
        })
    })

})