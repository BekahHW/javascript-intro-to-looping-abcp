Skip to content
This repository
Search
Pull requests
Issues
Marketplace
Explore
 @BekahHW
 Sign out
 Watch 0
  Star 0  Fork 4 BekahHW/javascript-intro-to-looping-abcp
forked from learn-co-students/javascript-intro-to-looping-abcp
 Code  Pull requests 0  Projects 0  Insights  Settings
Branch: solution Find file Copy pathjavascript-intro-to-looping-abcp/loops.js
df358d8  on May 11, 2016
@pletcher pletcher Update solution
3 contributors @pletcher @vicfriedman @AnnJohn
RawBlameHistory    
33 lines (25 sloc)  482 Bytes
function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.")
    } else {
      array.push(`I am ${i} strange loops.`)
    }
  }

  return array
}


function whileLoop(n) {
  while (n > 0) {
    console.log(--n)
  }

  return 'done'
}

function doWhileLoop(array) {
  function maybeTrue() {
    return Math.random() >= 0.5
  }

  do {
    array = array.slice(1)
  } while (array.length > 0 && maybeTrue())

  return array
}
© 2018 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
API
Training
Shop
Blog
About