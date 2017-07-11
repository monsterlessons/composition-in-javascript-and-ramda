const toSlug = R.compose(
  encodeURIComponent,
  R.join('-'),
  R.map(R.toLower),
  R.split(' ')
)

// const toSlug = input =>
//   encodeURIComponent(
//     R.join('-')(
//       R.map(R.toLower)(
//         R.split(' ')(input)
//       )
//     )
//   )

// const toSlug = input => encodeURIComponent(
//   input.split(' ')
//     .map(str => str.toLowerCase())
//     .join('-')
// )

// const toSlug = input => {
//   const words = input.split(' ')
//   const lowercasedWords = words.map(word => word.toLowerCase())
//   const slug = lowercasedWords.join('-')
//   const encodedSlug = encodeURIComponent(slug)
//
//   return encodedSlug
// }

const slug = toSlug('This is composition')

console.log('slug', slug)
