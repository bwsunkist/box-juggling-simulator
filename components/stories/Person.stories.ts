import Person from '../Parts/Person.vue'

export default {
  title: 'Parts/Person',
  component: Person
}

const Template = (args) => ({
  components: { Person },
  setup() {
    return {
      args,
    }
  },
  template: `<Person></Person>`,
})

export const Primary = Template.bind({})
