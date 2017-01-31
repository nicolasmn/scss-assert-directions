# Assert Directions ![](https://travis-ci.org/nicolasmn/scss-assert-directions.svg)

Map values in clock-wise positions like CSS does it. Quoting from MDN:
- **One** single value applies to all **four sides**.
- **Two** values apply first to **top and bottom**, the second one to **left and right**.
- **Three** values apply first to **top**, second to **left and right** and third to **bottom**.
- **Four** values apply to **top, right, bottom and left** in that order (clockwise).

_Example:_  
```scss
$map: assert-directions(10px 20px);

// $map: (
//   top: 10px,
//   bottom: 10px,
//   right: 20px,
//   left: 20px
// )
```

## Installation

**Using Bower**  
`bower install scss-assert-directions --save`

**Using NPM**  
`npm install scss-assert-directions --save`

## Testing
[Mocha](https://github.com/mochajs/mocha) and [True](https://github.com/oddbird/true) are used for unit testing. Simply run `npm test` to test output of the function.
