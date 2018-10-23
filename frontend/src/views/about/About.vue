<template>
  <section class="container">
    <h2>Teams</h2>
    <div class="row">
      <template fragment v-for="team in temas">
        <TeamCard
          class="col s4 team-detail"
          :key="team.name"
          :profile="team.profile"
          :name='team.name'
          :description='team.description'
        />
      </template>
    </div>
  </section>
</template>

<script>
import TeamCard from '@/components/about/TeamCard';

export default {
  components: {
    TeamCard,
  },
  data: () => {
    return {
      temas: [
        {
          profile: '@/assets/img/teams/seolhun.jpg',
          name: 'Seolhun',
          description: 'Hello',
        },
        {
          profile: '@/assets/img/teams/seolhun.jpg',
          name: 'Seolhun2',
          description: 'Hello',
        },
      ],
    };
  },
};
</script>

<style scoped>
.team-detail {
  margin: 10px;
}
</style>

