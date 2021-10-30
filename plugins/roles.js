import Vue from 'vue'
import {abilitiesPlugin} from '@casl/vue'
import {Ability} from '@casl/ability'
import api from "~/services/api";

export const ability = new Ability()
Vue.use(abilitiesPlugin, ability)

export default async function () {
    api.get('user/current')
        .then(res => {
            var permissions = []
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
            for (let role in res.data.data.roles) {
                permissions.push(
                    {
                        "subject": res.data.data.roles[role].slug,
                        "actions": [
                            "manage"
                        ]
                    }
                )
            }

            ability.update(permissions)
        })

}
