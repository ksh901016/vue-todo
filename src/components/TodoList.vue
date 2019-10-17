<template>
    <section>
        <transition-group name="list" tag="ul">
            <li :key="todoItem.item" v-for="(todoItem, index) in this.$store.state.todoItems" class="shadow">
                <i class="checkBtn fas fa-check" v-bind:class="{checkBtnCompleted : todoItem.completed}" aria-hidden="true"
                    v-on:click="toggleComplete(todoItem, index)"></i>
                <span v-bind:class="{textCompleted : todoItem.completed}">{{todoItem.item}}</span>
                <span class="removeBtn" type="button" @click="removeTodo(todoItem, index)">
                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                </span>
            </li>
        </transition-group>
    </section>
</template>
<script>
export default {
    methods : {
        removeTodo(todoItem, index){
            this.$store.commit("removeTodo", {todoItem, index});
        },
        toggleComplete(todoItem, index){
            this.$store.commit("toggleOneItem", {todoItem, index});
        },
    }
}
</script>

<style scoped>
    ul {
        list-style-type: none;
        padding-left: 0px;
        margin-top: 0;
        text-align: left;
    }
    li {
        display: flex;
        min-height: 50px;
        height: 50px;
        line-height: 50px;
        margin: 0.5rem 0;
        padding: 0 0.9rem;
        background: white;
        border-radius: 5px;
    }
    .checkBtn {
        line-height: 45px;
        color: #62acde;
        margin-right: 5px;
    }
    .checkBtnCompleted{
       color : #b3adad;
    }

    .textCompleted{
      color : #b3adad;
    }

    .removeBtn {
        margin-left: auto;
        color: #de4343;
    }
    .list-enter-active, .list-leave-active {
        transition: all 1s;
    }
    .list-enter, .list-leave-to {
        opacity: 0;
        transform: translateY(30px);
    }
</style>
