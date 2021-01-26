// IMPORT MODULES under test here:
import getPropertyArrOfObjArr from '../results/munge-utils.js';
const test = QUnit.test;

const pokeStats = [{ 'name':'ivysaur', '_id':'5cef3501ef6005a77cd4fd19', 'seen':3, 'caught':1 }, { 'name':'blastoise', '_id':'5cef3501ef6005a77cd4fd21', 'seen':2, 'caught':0 }, { 'name':'beedrill', '_id':'5cef3501ef6005a77cd4fd25', 'seen':4, 'caught':2 }, { 'name':'weedle', '_id':'5cef3501ef6005a77cd4fd26', 'seen':5, 'caught':1 }, { 'name':'wartortle', '_id':'5cef3501ef6005a77cd4fd20', 'seen':3, 'caught':2 }, { 'name':'caterpie', '_id':'5cef3501ef6005a77cd4fd23', 'seen':2, 'caught':1 }, { 'name':'bulbasaur', '_id':'5cef3501ef6005a77cd4fd17', 'seen':3, 'caught':0 }, { 'name':'squirtle', '_id':'5cef3501ef6005a77cd4fd1f', 'seen':3, 'caught':1 }, { 'name':'metapod', '_id':'5cef3501ef6005a77cd4fd24', 'seen':1, 'caught':0 }, { 'name':'pidgey', '_id':'5cef3501ef6005a77cd4fd29', 'seen':2, 'caught':0 }, { 'name':'charmeleon', '_id':'5cef3501ef6005a77cd4fd1b', 'seen':3, 'caught':1 }, { 'name':'charmander', '_id':'5cef3501ef6005a77cd4fd1a', 'seen':2, 'caught':1 }];

//getPropertyArrOfObjArr test
test('given a property and an array of objects,return an array of all that properties', (expect) => {  
    //Arrange
    // Set up your arguments and expectations
    const expected = [3, 2, 4, 5, 3, 2, 3, 3, 1, 2, 3, 2];
    const expected2 = [1, 0, 2, 1, 2, 1, 0, 1, 0, 0, 1, 1];
    const expected3 = ['ivysaur', 'blastoise', 'beedrill', 'weedle', 'wartortle', 'caterpie', 'bulbasaur', 'squirtle', 'metapod', 'pidgey', 'charmeleon', 'charmander'];

    //Act 
    // Call the function you're testing and set the result to a const
    const actual = getPropertyArrOfObjArr('seen', pokeStats);
    const actual2 = getPropertyArrOfObjArr('caught', pokeStats);
    const actual3 = getPropertyArrOfObjArr('name', pokeStats);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.deepEqual(actual, expected);
    expect.deepEqual(actual2, expected2);
    expect.deepEqual(actual3, expected3);

});
