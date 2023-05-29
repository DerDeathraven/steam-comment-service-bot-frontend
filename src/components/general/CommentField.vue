<template>
  <Tile>
    <div>
      <h2>Comment</h2>
      <div class="comment-form">
        <div>
          <input type="checkbox" name="random-comment" />
          <label for="random-comment">Random Comment</label>
        </div>
        <div><input type="text" name="reciever" /><label>reciever</label></div>
      </div>
    </div>
  </Tile>
</template>

<script setup lang="ts">
import Tile from "../Tile.vue";
</script>

<style scoped></style>
