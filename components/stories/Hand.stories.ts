import Hand from '../Parts/Hand.vue'

export default {
  title: 'Parts/Hand',
  component: Hand
}

const Template = (args) => ({
  components: { Hand },
  setup() {
    return {
      args,
    }
  },
  template: `
    <Hand v-bind="args"></Hand>
  `,
})

export const rightClose = Template.bind({})
rightClose.args = {
  isHold: true,
  isRight: true
}
export const rightOpen = Template.bind({})
rightOpen.args = {
  isHold: false,
  isRight: true
}

export const leftClose = Template.bind({})
leftClose.args = {
  isHold: true,
  isRight: false
}
export const leftOpen = Template.bind({})
leftOpen.args = {
  isHold: false,
  isRight: false
}
