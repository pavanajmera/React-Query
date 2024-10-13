import { useQuery } from '@tanstack/react-query';
import SingleItem from './SingleItem';
import customFetch from './utils/utils';
const Items = ({ items }) => {

    // Method - 1 for fetching data
    // const result = useQuery({
    //     queryKey: ['task'],
    //     queryFn: () => customFetch.get('/')
    // })
    // console.log(result)

    // Method - 2 for destructing data
    const {data, isLoading, isError, error} = useQuery({
        queryKey: ['task'],
        queryFn: () => customFetch.get('/1234')
    })

    if(isLoading){
        return <p style={{marginTop:'1rem'}}> Loading...</p>
    }

    if(isError){
        return <p style={{marginTop:'1rem'}}>There was an error</p>
    }

    // if(error){
    //     return <p style={{marginTop:'1rem'}}>{error.response.data}</p>
    // }

    return (
        <div className='items'>
            {data?.data?.taskList.map((item) => {
                return <SingleItem key={item.id} item={item} />;
            })}
        </div>
    );
};
export default Items;