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
  },
  destroyItem(blog){
    blog.destroyRecord();
  }
  }

});
