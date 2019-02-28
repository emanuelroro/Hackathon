<template>
        <div class="box" dir="ltr" >
                <article class="media">
                  <div class="media-content">
                    <div class="content">
                      <p>
                        <strong>{{this.det.title}}</strong>
                        <br>
                        {{this.det.description}}
                        <br>
                        <div class="tags">
                                <span class="tag" v-for="tag in this.det.tags">{{tag}}</span>
                              </div>
                      </p>
                    </div>
                    <nav class="level is-mobile">
                      <div class="level-left">
                      {{this.det.email}}
                      </div>
                      <div class="level-right">
                            <span style="font-size: 130%; margin-right: 8%" >{{this.det.price}}$</span>
                            <a class="button is-success is-rounded" v-if="this.det.upgrade">choose</a>
                            <a class="button is-warning is-rounded" v-if="!this.det.upgrade">choose</a>
                            
                    </div>
                    </nav>
                  </div>
                </article>
              </div>
</template>

<script>
        export default {
          name: 'eventDetails',
          props: ['det'],
        }
</script>