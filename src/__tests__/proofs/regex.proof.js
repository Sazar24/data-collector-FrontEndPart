test('regex proofs', () => {
    let output;
    let searchedWord = "foobar";

    output = /[a-c]/.test(searchedWord);
    expect(output).toBe(true);
    
    output = /[^w-z]/.test(searchedWord);
    expect(output).toBe(true);


});


test('regex nauken: searching for "b" in "foobar" returns true etc. ', () => {
    let output;
    let searchedWord = "foobar";
    // let regex1 = RegExp('f');
    // let regex2 = RegExp('r$');

    output = /b/.test(searchedWord);
    expect(output).toBe(true);
 
    output = /r$/.test(searchedWord);
    expect(output).toBe(true);

    output = /^f/.test(searchedWord);
    expect(output).toBe(true);

    output = /o{2,}/.test(searchedWord);
    expect(output).toBe(true);

    output = /o{3}/.test(searchedWord);
    expect(output).toBe(false);

    output = /r$/.test(searchedWord);
    expect(output).toBe(true);

    output = /r$/.test(searchedWord);
    expect(output).toBe(true); 
    
    output = /[a-z]/.test(searchedWord);
    expect(output).toBe(true); 

})

test('should behave...', () => {
    let output;
    let text = "foobar";
    
    output = /[^a-z]/.test(text)
    expect(output).toBe(false);
    
    output = /[^a-z]/.test("abcdefghijklmnoprstuwxyz")
    expect(output).toBe(false);

    output = /[a-z]/.test("abcdefghijklmnoprstuwxyz")
    expect(output).toBe(true);
    
    output = /[^a-z]/.test("123456789!@#$%^&*()?>:|}{[]\';}'")
    expect(output).toBe(true);
    
});