import {userServiceBaseClient} from '..'

export const getCurrentBatches = async () => {
    try{
        let res = await userServiceBaseClient.get(`/user-service/associates/currentBatches/`)
        return res.data
    }catch(e){
        console.log(e);
    }
}