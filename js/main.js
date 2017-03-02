// this component here is used for on click editing of the note with the use of template.
var NoteComponent = Vue.extend
({
  data: function()
  {
    return{inEditMode: false}
  },
  props: ['note'],
  template: '<div><span v-on:click="clicked" v-show = "!inEditMode">{{note.text}}</span><input v-on:keyup.enter="saved" v-model="note.text" v-show="inEditMode" required></div>',

  methods:
  {
    clicked: function()
    {

      this.inEditMode = true;
    },
    saved: function()
    {
      var edited = this.note.text.trim()
      if(edited)
      {
      this.inEditMode = false;
      }
    }
  }
});

// this vue component contains all the funtion used for on click button. 
Vue.component('note', NoteComponent);


new Vue
({
  el: '#app',
  data:
    {
      count: 1,
      noteText:'',
      archiveNote:'',
      notes:
      [
        {text: 'Note 1'},
        {text: 'Note 2'},
      ],

      archive:
        [
          {text:'' },

        ],
      showNotes: true
    },

    methods:
    {
      createNote: function(e)
      {
        e.preventDefault();
        var note = this.noteText.trim()
        if(note)
        {
          this.notes.push
          ({
            text: note
          });
          this.noteText = '';
        }
      },
      clearNote: function()
      {
        this.noteText = ''
      },

      removeNote:function(note)
      {
        this.notes.splice(this.notes.indexOf(note),1);
      },
        show: function()
      {
        this.showNotes = true
      },

      hide: function()
      {
        this.showNotes = false
      },

      saved: function()
      {
        this.inEditMode = false;
      },


    }
});
