<template>
  <div class="footer-container">
    <footer class="footer">
      <ul class="footer__list">
        <li class="grow">
          <img
            width="180"
            src="https://dpubstatic.udache.com/static/dpubimg/T1R-u2N8nn/footer_logo.png"
            alt="logo"
          />
        </li>
        <li class="grow">
          <ul>
            <li class="footer__wrap">
              <span class="footer__text footer__title">{{$page.frontmatter.resourcesList.title}}</span>
            </li>
            <li class="footer__wrap" v-for="(item, index) in $page.frontmatter.resourcesList.details" :key="index">
              <a :href="item.actionLink" class="footer__text" target="_blank">{{item.title}}</a>
            </li>
          </ul>
        </li>
        <li class="grow">
          <ul>
            <li class="footer__wrap">
              <span class="footer__text footer__title">{{$page.frontmatter.communityList.title}}</span>
            </li>
            <li class="footer__wrap" v-for="(item, index) in $page.frontmatter.communityList.details" :key="index">
              <popover :code="item.img" v-if="item.img">
                <span class="footer__text" target="_blank">{{item.title}}</span>
              </popover>
              <a v-else :href="item.img || item.actionLink" class="footer__text" target="_blank">{{item.title}}</a>
            </li>
          </ul>
        </li>
        <li class="grow">
          <ul>
            <li class="footer__wrap">
              <span class="footer__text footer__title">{{$page.frontmatter.helpList.title}}</span>
            </li>
            <li class="footer__wrap" v-for="(item, index) in $page.frontmatter.helpList.details" :key="index">
              <a :href="item.actionLink" class="footer__text" target="_blank">{{item.title}}</a>
            </li>
          </ul>
        </li>
        <li class="grow">
          <ul>
            <li class="footer__wrap">
              <span class="footer__text footer__title">{{$page.frontmatter.moreList.title}}</span>
            </li>
            <li class="footer__wrap" v-for="(item, index) in $page.frontmatter.moreList.details" :key="index">
              <a :href="item.actionLink" class="footer__text" target="_blank">{{item.title}}</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
    <div class="copyright">
      <div>备案号：<a href="https://beian.miit.gov.cn/">蜀ICP备15023364号-2</a></div>
      <div>Copyright 2020 滴滴出行</div>
    </div>
  </div>
</template>

<script>
import Popover from '../components/Popover.vue'

export default {
  components: {
    Popover
  }
};
</script>

<style lang="stylus" scoped>
ul li
  list-style none
.footer-container
  display flex
  flex-direction column
  justify-content flex-end
  height 466px
  background url("https://dpubstatic.udache.com/static/dpubimg/cSRXkZjG5W/footer_bg.png") no-repeat center center
  background-size auto 100%
  margin-top 60px

.footer
  display flex
  text-align center
  max-width 1280px
  margin 0 auto
  width 100%

.footer__list
  margin-bottom 80px
  display flex
  flex 1
  text-align left

.footer__wrap
  margin-bottom 14px
  color #ffffff
  text-align left
  height 28px
  position relative

.footer__text
  font-size 14px
  color #ffffff
  display inline-block
  text-align left
  height 28px

.footer__title
  font-size 20px
  font-weight 500

.copyright
  font-size 12px
  color #ffffff
  background #3a495d
  text-align center
  line-height 30px
  padding 10px 0

.grow
  flex 1

.footer__img
  position absolute
  left 0
  top 0
  display none

</style>
