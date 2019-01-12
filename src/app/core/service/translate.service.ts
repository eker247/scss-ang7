import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateService {
  lang = 'pl';

  constructor() { }

  public translate(str: string): string {
    str = str.trim();
    return this.hasKey(str, DICTIONARY) ? DICTIONARY[str][this.lang] : str;
  }

  public transPlural(str: string): string {
    str = str.trim();
    const reg = /([^0-9]+)?([0-9]+)\s*([^\s]*)(.*)/;
    if (str.match(reg)) {
      const matched = str.match(reg);
      const begin = matched[1] ? matched[1] : '';
      const n = +matched[2];
      const s = matched[3] ? matched[3] : '';
      const rest = (matched[4] ? matched[4] : '');
      return this.transPlural(begin) + ' ' + this.plural(n, s) + ' ' + this.transPlural(rest);
    }
    return this.hasKey(str, DICTIONARY) ? DICTIONARY[str][this.lang] : str;
  }

  private plural(n: number, word: string) {
    if (!this.hasKey(word, PLURAL)) {
      return '';
    }
    if (n === 1) {
      return `${n} ${PLURAL[word][this.lang][1]}`;
    } else if (n > 4 && n < 22) {
      return `${n} ${PLURAL[word][this.lang][0]}`;
    }
    switch (n % 10) {
      case 2:
      case 3:
      case 4: return `${n} ${PLURAL[word][this.lang][2]}`;
      default: return `${n} ${PLURAL[word][this.lang][0]}`;
    }
  }

  hasKey(str: string, container: Object): boolean {
    str = str.trim();
    return str in container && this.lang in container[str];
  }
}

const DICTIONARY = {
  'you have': { 'pl': 'masz' },
  'in cart': { 'pl': 'w koszyku' }
};

const PLURAL = {
  'element': { 'pl': ['elementów', 'element', 'elementy'] },
  'item': { 'pl': ['przedmiotów', 'przedmiot', 'przedmioty'] }
};
