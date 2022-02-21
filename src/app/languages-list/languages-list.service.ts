

import * as languagesList from 'src/assets/data/bibleforchildren_language.json';

export class LanguagesListService {

  languagesList: any = (languagesList as any).default;

  getLanguages() { 
    // console.log("languagesList:", languagesList);
    // console.log("this.products:", this.languagesList[0] )

    let languagesListArrayObjects = this.languagesList
    let languagesArray = [];
    for (var languagesObjects of languagesListArrayObjects) {
      // console.log(languagesObjects);
      languagesArray.push([
        Object.values(languagesObjects)[2]
        +" - "+
        Object.values(languagesObjects)[4]
      ])
    }
    // console.log(languagesArray);

    return languagesArray
  }

  


}