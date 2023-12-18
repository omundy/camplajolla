
// https://docs.astro.build/en/reference/configuration-reference/#base
export const BASE_URL = ""; //import.meta.env.BASE_URL
export const ASSETS_URL = "/assets"; 

// split images and return path
export const getProjectImagePath = (img) => {
    // console.log(`*${img}^`)
    // default to undefined 
    let src;
    if (img && img.length > 0) {
      let arr = img.trim().split(',')
    //   console.log(arr)
        if (arr.length > 0) {
         src = `${ASSETS_URL}/img/project-images/${arr[0]}`
        }
    }
    return src;
}




