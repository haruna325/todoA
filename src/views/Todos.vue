<template>
  <div class="about">
    <h1>TODO一覧</h1>
    <table border=1>
      <thead>
        <tr>
          <th>制作日時</th>
          <th>タイトル</th>
          <th>内容</th>
          <th>期日</th>
          <th>進捗率0-100</th>
          <th>メモ</th>
          <th>編集</th>
          <th>削除</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo,index) in todos" :key='index'>
          <td>{{todo.date}}</td>
          <td>{{todo.title}}</td>
          <td>{{todo.about}}</td>
          <td>{{todo.deadline}}</td>
          <td>{{todo.progress}}</td>
          <td>{{todo.memo}}</td>
          <td><router-link to="/edit"><button type='button' @click="edit">編集</button></router-link></td>
          <td><button type='button' @click="dialog(index)" class='command'>削除</button></td>     
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
import {mapActions} from 'vuex'
export default{
  data(){
    return{
      todos:[]
    }
  },
  created(){
    this.todos =this.$store.state.todos;
  },
  methods:{
        dialog: function(index){
            if(confirm('削除してもよろしいですか？')){
            this.todos.splice(index,1);
        }},        
        ...mapActions(["deletetodos"])
    },
    
}


</script>