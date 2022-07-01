import { useState } from "react"
import yelp from "../api/yelp"
export default () => {
    const [results, setResults] = useState(
        {
            data: null,
            loading: false,
            error: null
        })
    const searchStore = async (term) => {
        setResults({
            data: null,
            loading: true,
            error: null
        })
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,//giới hạn 15 nhà hàng
                    term, //chúng ta sd thuật ngữ là dessert món tráng miệng
                    location: "Toronto" //ta sẽ chọn địa điểm là toronto
                }
            })
            setResults({
                data: response.data.businesses,
                loading: false,
                error: null
            })
        } catch (error) {
            setResults({
                data: null,
                loading: false,
                error: "Something went wrong"
            })
        }
    }
    return [results, searchStore];
}