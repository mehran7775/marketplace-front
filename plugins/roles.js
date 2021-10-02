import Vue from 'vue'
import {abilitiesPlugin} from '@casl/vue'
import {Ability} from '@casl/ability'

export const ability = new Ability()
Vue.use(abilitiesPlugin, ability)

export default async function ({$axios}) {
    let res = await $axios.get('user/current')
    let permissions = []
    for (let permission in res.data.data.permissions) {
        permissions.push(
            {
                "subject": res.data.data.permissions[permission].slug,
                "actions": [
                    "manage"
                ]
            }
        )
    }
    ability.update(permissions)

}
