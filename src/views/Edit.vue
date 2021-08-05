<template>
    <div>
    <h1>編集画面</h1>

    <form>
        <!-- タイトルは変更できない -->
        <div>タイトル：<input type="text"></div>
        <div>内容：<textarea></textarea></div>
        <div>期日：<input type="text"></div>
        <!-- selectタグにv-modelつける -->
        <div>進捗率：<select>
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
        期日：<input type="date">
        <!-- clickしたら一覧画面Home.vueに戻る -->
        <div><router-link to="/"><button type="button">キャンセル</button></router-link>
        <!-- clickしたらmethods呼び出す-->
        <button type="button" >更新</button></div>

    </form>
    </div>
</template>

<script>

// import { mapActions } from "vuex";

export default {
    data(){
        return{
            todos: {}
        }
    },
    methods: {
        // submit(){
        //     if(this.$route.params.address_id){
        //         this.updateAddress({
        //             id: this.$route.params.address_id,
        //             address: this.address
        //         });
        //     } else {
        //         this.addAddress(this.address)
        //     }
        //     this.$router.push({ name: "Addresses"});
        //     this.address = {};
        // },
        // ...mapActions(["addAddress", "updateAddress"])
    },
    // created(){
    //     const address = this.$store.getters.getAddressById(
    //         this.$route.params.address_id);
    //         if(address){
    //             this.address = address;
    //         }
    // }
}   





</script>
