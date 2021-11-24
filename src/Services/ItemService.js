import { BaseConfig } from "../Config/BaseConfig";
import Fetch from "../Helpers/Fetch";
const ItemService = {
    List(data){
        const options={
            method: 'GET',
            headers:BaseConfig.utilities.getAuthorizedHeader()
        };
        return Fetch(list, options);
    },
}

const list = BaseConfig.api.user('/item/list')
export default ItemService;
