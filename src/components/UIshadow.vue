<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
@Component //类装饰器
export default class UIButton extends Vue {
  @Prop({
    type: [String, Number],
    default: 0
  })
  readonly shadow: string | number
  protected get UIshadow() {
    if (+this.shadow < 4 && +this.shadow > 0)
      return `ui-btn-shdow${this.shadow}`
    else return ''
  }
}
</script>

<style lang="stylus">
.ui-btn-shdow1
  box-shadow 1px 1px 5px rgba(0, 0, 0, 0.3)
.ui-btn-shdow2
  box-shadow 1px 1px 5px rgba(0, 0, 0, 0.5)
.ui-btn-shdow3
  box-shadow 1px 1px 7px rgba(0, 0, 0, 0.7)
</style>