export const UPDATE_LIST='UPDATE_LIST'

export function update_list_action_creator(data){
    return {
        type:UPDATE_LIST,
        data
    }
}