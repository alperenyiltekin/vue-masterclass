import nextItemInList from "@/utils/nextItemInList";

describe('nextItemInList', () => { 
    it("return next item in the list", () =>{
        const list = [ "Build", "Create", "Design", "Code" ];
        const value = "Build";
        const result = nextItemInList(list, value);
        expect(result).toBe("Create");
    })
 })

describe('when item is at end of the list', () => { 
    it("return next item in the list", () =>{
        const list = [ "Build", "Create", "Design", "Code" ];
        const value = "Code";
        const result = nextItemInList(list, value);
        expect(result).toBe("Build");
    })
 })