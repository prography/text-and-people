<template>
  <section class="container">
    <h3>
      <span class="deep-purple-text text-darken-1">About</span> Us
    </h3>
    <div class="row">
      <template fragment v-for="player in players">
        <PlayerCard
          class="col s4 team-detail"
          :key="player.name"
          :profile="player.profile"
          :name='player.name'
          :description='player.description'
          :github='player.github'
        />
      </template>
    </div>
  </section>
</template>

<script>
import PlayerCard from '@/components/about/PlayerCard';

import { getPlayers } from '@/controllers/TeamControllers';

export default {
  components: {
    PlayerCard,
  },
  created() {
    this.getPlayersFromAPI();
  },
  data: () => {
    return {
      players: [],
    };
  },
  methods: {
    getPlayersFromAPI() {
      getPlayers().then((data) => {
        this.players = data;
      });
    },
  },
};
</script>

<style scoped>
.team-detail {
  margin: 10px;
}
</style>

