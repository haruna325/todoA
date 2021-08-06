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
        <tr v-for="todo in todos" :key='todo'>
          <td>{{todo.date}}</td>
          <td>{{todo.title}}</td>
          <td>{{todo.about}}</td>
          <td>{{todo.deadline}}</td>
          <td>{{todo.progress}}</td>
          <td>{{todo.memo}}</td>
          <td><router-link to="/edit"><button type='button' @click="edit">編集</button></router-link></td>
          <td><button type='button' @click="dialog">削除</button></td>
          <!-- confirm('confirmポップアップウィンドウを表示しています'); -->
            <v-dialog></v-dialog>          
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
// import dialog from '@/components/dialog.vue'
export default{
  data(){
    return{
      todos:[]
    }
  },
  created(){
    this.todos =this.$store.state.todos;
  }
}


</script>