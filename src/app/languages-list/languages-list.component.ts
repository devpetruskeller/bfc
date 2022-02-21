
import { Language } from '../language';
import { LanguagesListService } from './languages-list.service';
import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
// import  *  as  languagesList  from  'src/assets/data/bibleforchildren_language.json';

@Component({
  selector: 'languages-list',
  templateUrl: './languages-list.component.html',
  styleUrls: [ './languages-list.component.css' ]

})
export class LanguagesListComponent implements OnInit{

  LanguageList;

  constructor(service: LanguagesListService) {
    this.LanguageList = service.getLanguages();
  }

  //  Populate the languge select box with a default language.
  languageModel = new Language('')
  // languageModel = new Language('English- English')


  @Input() newLanguage: any;
  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log("onChange in languages list component...:", this.languageModel);
  //   console.log("changes:", changes);
  // }

  ngOnInit(): void {
    console.log("onInit:", this.languageModel)
  }

  onSubmit() {
    console.log("onSubmit:", this.languageModel)
  }

  modelChangell(): void  {
    console.log("modelChangell:", this.languageModel);
  }

  public page = 1;
  public pageLabel!: string;
  public height: string = "100%";
}
