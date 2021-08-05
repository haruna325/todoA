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
        </tr>
      </tbody>
    </table>
  </div>

</template>
<script>
export default{
  data(){
    return{
      todos:[{date:'2021/8/5',title:'サンプル1',about:'gitの勉強',deadline:'2021/8/10',progress:'20%',memo:'復習する'}]
    }
  }
}
</script>