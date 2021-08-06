<template>
    <div class="add">
    <h1>追加画面</h1>
    <form>
        <!-- タイトルは変更できない -->
        <div>制作日時:<input type="text" v-model="todo.date"></div>
        <div>タイトル：<input type="text" v-model="todo.title"></div>
        <div>内容：<textarea v-model="todo.about"></textarea></div>
        <div>期日：<input type="text" v-model="todo.deadline"></div>
        <!-- selectタグにv-modelつける -->
        <div>進捗率：<select v-model="todo.progress">
                        <option>0</option>
                        <option>10％</option>
                        <option>20％</option>
                        <option>30％</option>
                        <option>40％</option>
                        <option>50％</option>
                        <option>60％</option>
                        <option>70％</option>
                        <option>80％</option>
                        <option>90％</option>
                        <option>100％</option>
                    </select></div>
        <!-- 期日：<input type="date" v-model="deadline"> -->
        メモ：<textarea v-model="todo.memo"></textarea>
        <div><button type="button">削除</button> ｜
        <!-- clickしたらmethods(入力した値を一覧画面に追加、追加後一覧画面に遷移)呼び出す-->
        <button type="button" @click="submit">追加</button></div>
    </form>
    </div>
</template>
<script>
import {mapActions} from 'vuex'
export default ({
    // 何も入力されていなかったら追加できない
    // 追加後一覧画面に遷移
    data(){
        return{
            todo:{}
        }
    },
    methods:{
        submit(){
            this.addtodos(this.todo);
            this.$router.push({name: 'Todos'});
            this.todo={}
        },
        
        ...mapActions(["addtodos"])
    }

})
</script>
