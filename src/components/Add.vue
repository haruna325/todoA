<template>
    <div class="add">
    <h1>追加画面</h1>
    <form>
        <!-- タイトルは変更できない -->
        <div>タイトル：<input type="text" v-model="title"></div>
        <div>内容：<textarea v-model="about"></textarea></div>
        <div>期日：<input type="text" v-mode="deadline"></div>
        <!-- selectタグにv-modelつける -->
        <div>進捗率：<select v-model="progress">
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
        メモ：<textarea v-model="memo"></textarea>
        <div><button type="button" @click="addtodo">キャンセル</button> ｜
        <!-- clickしたらmethods(入力した値を一覧画面に追加、追加後一覧画面に遷移)呼び出す-->
        <button type="button">追加</button></div>
    </form>
    </div>
</template>
<script>
export default ({
    // 何も入力されていなかったら追加できない
    // 追加後一覧画面に遷移
    data(){
        return{
            title:'',
            about:'',
            deadline:'',
            progress:'',
            memo:''
        }
    },
    methods:{
        addtodo(){

        }
    }

})
</script>
