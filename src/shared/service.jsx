// eslint-disable-next-line react-refresh/only-export-components
const FormatResult=(resp)=>{
    let result=[];
    let finalResult=[];
    resp.forEach((item)=>{
        const listingId=item.Listing?.id;
        if(!result[listingId])
        {
            result[listingId]={
                listing:item.Listing,
                images:[]
            }
        }

        if(item.listingImages)
        {
            result[listingId].images.push(item.listingImages)
        }
    })

    result.forEach((item)=>{
        finalResult.push({
            ...item.listing,
            images:item.images
        })
    })
    return finalResult;
}
export default { FormatResult };