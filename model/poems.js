const AV = require('../utils/av-core-min');
class Poems extends AV.Object {
  get _id() {
    return this.get('_id');
  }
  set _id(value) {
    this.set('_id', value);
  }

  get content() {
    return this.get('content');
  }
  set content(value) {
    this.set('content', value);
  }
  // translate
  get translate() {
    return this.get('translate');
  }
  set translate(value) {
    this.set('translate', value);
  }
  // translate_res
  get translate_res() {
    return this.get('translate_res');
  }
  set translate_res(value) {
    this.set('translate_res', value);
  }
  // tags
  get tags() {
    return this.get('tags');
  }
  set tags(value) {
    this.set('tags', value);
  }
  // notes
  get notes() {
    return this.get('notes');
  }
  set notes(value) {
    this.set('notes', value);
  }
    // reference
    get reference() {
      return this.get('reference');
    }
    set reference(value) {
      this.set('reference', value);
    }
      // appreciation
  get appreciation() {
    return this.get('appreciation');
  }
  set appreciation(value) {
    this.set('appreciation', value);
  }
    // appreciation_res
    get notes() {
      return this.get('appreciation_res');
    }
    set notes(value) {
      this.set('appreciation_res', value);
    }
      // onlyId
  get onlyId() {
    return this.get('onlyId');
  }
  set onlyId(value) {
    this.set('onlyId', value);
  }
        // name
        get name() {
          return this.get('name');
        }
        set name(value) {
          this.set('name', value);
        }
              // dynasty
  get dynasty() {
    return this.get('dynasty');
  }
  set dynasty(value) {
    this.set('dynasty', value);
  }
        // author
        get author() {
          return this.get('author');
        }
        set author(value) {
          this.set('author', value);
        }
               // sourceLink
               get sourceLink() {
                return this.get('sourceLink');
              }
              set sourceLink(value) {
                this.set('sourceLink', value);
              }
                     // type
        get type() {
          return this.get('type');
        }
        set type(value) {
          this.set('type', value);
        }
                        // format
                        get format() {
                          return this.get('format');
                        }
                        set format(value) {
                          this.set('format', value);
                        }

}
AV.Object.register(Poems, 'poems');
module.exports = Poems;