import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
  createNewItems(){
    this.store.createRecord('blog', {
      title: this.get('title'),
      author: this.get('author'),
      date: this.get('date'),
      body: this.get('body')
    }).save()
    this.set('title', 'Title')
    this.set('author', 'Author')
    this.set('date', 'MM/DD/YYY')
    this.set('body', 'Body')

  },
  destroyItem(blog){
    blog.destroyRecord();
  }
  }

});
