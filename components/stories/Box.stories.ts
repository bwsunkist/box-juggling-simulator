import Box from '../Parts/Box.vue'

export default {
  title: 'Parts/Box',
  component: Box
}

const Template = (args) => ({
  components: { Box },
  setup() {
    return {
      args,
    }
  },
  template: `
    <Box v-bind="args"></Box>
  `,
})

export const Primary = Template.bind({})
Primary.args = {
  message: 'test1',
}
