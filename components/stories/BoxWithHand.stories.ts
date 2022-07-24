import BoxWithHand from '../Templates/BoxWithHand.vue'

export default {
  title: 'Templates/BoxWithHand',
  component: BoxWithHand
}

const Template = (args) => ({
  components: { BoxWithHand },
  setup() {
    return {
      args,
    }
  },
  template: `
    <BoxWithHand v-bind="args"></BoxWithHand>
  `,
})

export const RH = Template.bind({})
RH.args = {
  message: 'rightHold',
  isHold: true,
  isRight: true
}
export const RNotH = Template.bind({})
RNotH.args = {
  message: 'rightNotHold',
  isHold: false,
  isRight: true
}

export const LH = Template.bind({})
LH.args = {
  message: 'leftHold',
  isHold: true,
  isRight: false
}
export const LNotH = Template.bind({})
LNotH.args = {
  message: 'leftNotHold',
  isHold: false,
  isRight: false
}
