import { 
    render, 
    screen 
}                           from "@testing-library/vue";
import userEvent            from "@testing-library/user-event";
import { RouterLinkStub }   from "@vue/test-utils";
import MainNav              from '@/components/navigation/MainNav.vue';

describe("MainNav", () => {
    const $route = {
        name: "Home"
    };

    const renderMainNav = () => {
        render(MainNav, {
            global: {
                mocks: {
                    $route
                },
                stubs: {
                    FontAwesomeIcon: true,
                    RouterLink: RouterLinkStub,
                }
            },
        });
    }
    
    it("displays company name", () => {
        renderMainNav();
        const companyName = screen.getByText("Careers");
        expect(companyName).toBeInTheDocument();
    })

    it("display menu items for navigation", () => {
        renderMainNav();
        const expectedValue = [
            "Teams",
            "Locations",
            "Life at Corp",
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