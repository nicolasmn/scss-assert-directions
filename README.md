# Scss Assert Directions

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
