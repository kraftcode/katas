import StringCalculator from './StringCalculator';

/*
  Test framework is Jest.
*/

// Describe creates a block that groups together several related tests into one test suite
describe('StringCalculator', () => {
  let subject;
  let delimiter;

  beforeEach(() => {
    delimiter = ';';
    subject = new StringCalculator(delimiter);
  });

  afterEach(() => {

  });

  it('Should take zero parameters and return 0. ', () => {
    let result = subject.add();
    expect(result).toBe(0);
  });

//Each test is a design tool to specify crucial behavior demanded of the application
  it('Should accept empty string parameter and return 0. ', () => {
    let emptyString = '';
    let result = subject.add(emptyString);
    expect(result).toBe(0);
  });

  it('Should take two numbers as string parameters and return their numeric sum. ', () => {
    let oneString = '1';
    let twoString = '2';
    let result = subject.add(oneString, twoString);
    expect(result).toBe(3);
  });

  it('Should take three numbers as string parameters and return their numeric sum. ', () => {
    let emptyString = '';
    let threeString = '3';
    let fourString = '4';
    let result = subject.add(emptyString, threeString, fourString);
    expect(result).toBe(7);
  });

  it('Should accept and parse string parameters with several arguments separated by a delimiter. ', () => {
    let firstParam = '7';
    let secondParam = '13';
    let severalArgs = firstParam + delimiter + secondParam;
    let result = subject.add(severalArgs, secondParam);
    expect(result).toBe(33);
  });

  it('Should throw and exception with message “negatives not allowed” when calling add method with negative parameter. ', () => {
    let exception = null;
    try{
      let negativeParam = '-1';
      let result = subject.add(negativeParam);
    } catch (ex) {
      exception = ex;
    }
    expect(exception).toBe('negatives not allowed');
  });

  it('Should change the delimiter if a delimiter is passed as parameter in format: //[delimiter]/n. ', () => {
    let newStarDelimiter = '//*/n';
    let testParam1 = '1*';
    let testParam2 = '2';
    let result = subject.add(newStarDelimiter, testParam1, testParam2);
    expect(result).toBe(3);
  });

  it('Should, when adding parameters, ignore parameters larger than 1000. ', () => {
    let tooLarge = '1001';
    let smallEnough = '2';
    let result = subject.add(tooLarge, smallEnough);
    expect(result).toBe(2);
  });

  it('Should accept new delimiters of any size if passed as parameter in format: //[delimiter]/n. ', () => {
    let newLongDelimter = '//***/n';
    let testParam1 = '1***';
    let testParam2 = '2';
    let result = subject.add(newLongDelimter, testParam1, testParam2);
    expect(result).toBe(3);
  });

  it('Should take multiple delimiters if passed as parameter in format: //[delimiter1][delimiter2]/n. ', () => {
    let newComboDelimiters = '//*%/n';
    let testParam1 = '1*';
    let testParam2 = '2%';
    let testParam3 = '3';
    let result = subject.add(newComboDelimiters, testParam1, testParam2, testParam3);
    expect(result).toBe(6);
  });

  it('Should accept and use multiple delimiters of length > 1 character. ', () => {
    let newComboDelimiters = '//**%%%%%/n';
    let testParam1 = '1**';
    let testParam2 = '2%%%%%';
    let testParam3 = '3';
    let result = subject.add(newComboDelimiters, testParam1, testParam2, testParam3);
    expect(result).toBe(6);
  });

});

