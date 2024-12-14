# DotsScript

DotsScript is a simple JavaScript library that makes your JavaScript code much simpler by making the whole code using 2 characters only, the `.` and the `ᱹ` character.

## Installation

You can install DotsScript by using the following command:

```bash
npm install dotsscript
```

Or yarn:

```bash
yarn add dotsscript
```

You can also install it globally by using the following command:

```bash
npm install -g dotsscript
```

Or yarn:

```bash
yarn global add dotsscript
```

## Usage

You can use DotsScript by importing the library in your JavaScript file:

```javascript
import 'dotsscript';

// Your code here
```

Or you can run it in the terminal by using the following command:

```bash
dot index.ds
```

Where `index.ds` is the file that contains your DotsScript code.

## Example

Here is an example of how you can use DotsScript:

```javascript
import 'dotsscript';

ᱹ.ᱹᱹ.ᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ
  .ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ
  .ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹ.ᱹᱹᱹ.ᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹ
  .ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹ.ᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹ.ᱹ.ᱹᱹᱹ
  .ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ
  .ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹ.ᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹ.ᱹᱹᱹᱹᱹᱹᱹᱹᱹᱹ.ᱹ
```

This code is equivalent to the following code:

```javascript
console.log('Hello, World!');
```

As you can see, the code is much simpler and do not contain any characters that can confuse you.

## Documentation

The global object `ᱹ` is the main object that you can use to access the DotsScript API.
It contains the following properties:

| Property | Description |
| --- | --- |
| `ᱹ` | Execute the code and returns a new `ᱹ` object |
| `ᱹᱹ` | Lower-case letters from `a` to `z` |
| `ᱹᱹᱹ` | Upper-case letters from `A` to `Z` |
| `ᱹᱹᱹᱹ` | Numbers from `0` to `9` |
| `ᱹᱹᱹᱹᱹ` | Special characters `*+,-./` |
| `ᱹᱹᱹᱹᱹᱹ` | Special characters ` !"#$%&'()` (First one is space) |
| `ᱹᱹᱹᱹᱹᱹᱹ` | Special characters `` []^_` ``|
| `ᱹᱹᱹᱹᱹᱹᱹᱹ` | Special characters `:;<=>?@` |
| `ᱹᱹᱹᱹᱹᱹᱹᱹᱹ` | Special characters `{\|}~` |

After accessing the desired group, enter `ᱹ` n times as the property name to access the desired character where n is the index of the character in the group.

For example, to access the character `f`, you can use the following code:

```javascript
ᱹ.ᱹᱹ.ᱹᱹᱹᱹᱹᱹ
```
This will add the character `f` to the code and will return the `ᱹ` object so you can continue chaining the characters.

After you finish chaining the characters, simply add a `.ᱹ` at the end of the chain to execute the code.
This will execute the code and return a new `ᱹ` object so you can continue writing the code.

**Note:** After each execution, the code will reset so you can start a fresh new code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

You can contribute to this project by forking this repository and creating a pull request.
